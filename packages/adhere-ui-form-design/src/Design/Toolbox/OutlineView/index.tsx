import { Tree } from 'antd';
import type { DataNode, TreeProps } from 'antd/es/tree';
import classNames from 'classnames';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import type { FC, ReactNode } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import { SELECT_PREFIX } from '../../../constant';
import type { DesignValue, DesignValueProps } from '../../../types';
import {
  findParentIdById,
  getLabelByType,
  getToolBoxItemByType,
  isRootFieldId,
} from '../../../utils';
import { DesignContext } from '../../Context';

const selectorPrefix = `${SELECT_PREFIX}-design-outline-view`;

type PathNode = {
  node: DesignValue;
  childIndexInParent?: number;
};

type DropPosition = 'inside' | 'before' | 'after';

type OutlineDropInfo = {
  dragId: string;
  dropId: string;
  dropPosition: DropPosition;
};

function flattenChildren(children: any): DesignValue[] {
  if (!children) return [];
  if (!Array.isArray(children)) return [];

  const result: DesignValue[] = [];

  for (const item of children) {
    if (!item) continue;
    if (Array.isArray(item)) {
      for (const child of item) {
        if (child) result.push(child);
      }
    } else {
      result.push(item);
    }
  }

  return result;
}

function getDropPosition(info: Parameters<NonNullable<TreeProps['onDrop']>>[0]): DropPosition {
  // antd: dropToGap=true 表示落在节点前/后；false 表示落在节点内部
  if (!info.dropToGap) return 'inside';

  // dropPosition: -1/0/1 相对目标节点的 gap 位置
  if (info.dropPosition < 0) return 'before';
  return 'after';
}

function findPathWithSlotIndex(root: DesignValue, targetId: string): PathNode[] | null {
  if (root.id === targetId) return [{ node: root }];

  const children = flattenChildren(root.props?.children);
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    const sub = findPathWithSlotIndex(child, targetId);
    if (sub) {
      // sub[0] 是 child 自身
      sub[0] = { ...sub[0], childIndexInParent: i };
      return [{ node: root }, ...sub];
    }
  }

  return null;
}

function toKey(v: unknown): string {
  if (v === undefined || v === null) return '';
  return String(v);
}

function shallowEqualByKeys(a: Record<string, any>, b: Record<string, any>): boolean {
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) return false;

  for (const k of aKeys) {
    if (!(k in b)) return false;

    const av = a[k];
    const bv = b[k];

    if (Object.is(av, bv)) continue;

    if (
      Array.isArray(av) ||
      Array.isArray(bv) ||
      (typeof av === 'object' && av !== null && typeof bv === 'object' && bv !== null)
    ) {
      try {
        if (JSON.stringify(av) === JSON.stringify(bv)) continue;
      } catch {
        return false;
      }
    } else {
      return false;
    }
  }

  return true;
}

/**
 * OutlineView
 */
const OutlineView: FC = () => {
  const {
    getDesignValue,
    getActiveFieldId,
    setActiveFieldId,
    getToolBox,
    setFieldProps,
    getItems,
  } = useContext(DesignContext);

  const designValue = getDesignValue() as DesignValue | undefined;
  const activeFieldId = getActiveFieldId?.() ?? null;
  const toolBox = getToolBox?.();
  const items = getItems?.() ?? [];

  const { intl } = useContext(ConfigProvider.Context);
  const lang = intl?.lang ?? 'zh_CN';

  const getDesignItemByType = useMemo(() => {
    const map = new Map<string, any>();
    for (const it of items) {
      if (it?.type) map.set(String(it.type), it);
    }
    return (type: string) => map.get(String(type));
  }, [items]);

  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);

  const selectedKeys = useMemo(() => {
    if (!activeFieldId) return [];
    return [activeFieldId];
  }, [activeFieldId]);

  useEffect(() => {
    if (!activeFieldId || !designValue) return;

    const keys: string[] = [];
    let currentId: string | undefined = activeFieldId;

    // 展开到当前节点：回溯 parent 链
    while (currentId) {
      const parentId = findParentIdById(currentId, designValue);
      if (!parentId) break;
      keys.push(parentId);
      currentId = parentId;
    }

    if (keys.length === 0) return;

    setExpandedKeys((prev) => Array.from(new Set([...(prev ?? []), ...keys])));
    setAutoExpandParent(true);
  }, [activeFieldId, designValue]);

  useEffect(() => {
    if (!activeFieldId || !designValue) return;

    const path = findPathWithSlotIndex(designValue, activeFieldId);
    if (!path || path.length < 2) return;

    // 祖先容器联动：从 root 到 active 的前一层
    for (let i = 0; i < path.length - 1; i++) {
      const current = path[i];
      const next = path[i + 1];
      const index = next.childIndexInParent;
      if (index === undefined) continue;

      const node = current.node;
      const fp: any = node.props?.fieldProps ?? {};

      const item = getDesignItemByType(node.type);
      const nextFieldProps = item?.outline?.getNextFieldPropsByActiveSlot?.({
        containerValue: node,
        slotIndex: index,
      });
      if (!nextFieldProps) continue;

      if (shallowEqualByKeys(fp, nextFieldProps)) continue;

      setFieldProps?.(node.id, nextFieldProps);
    }
  }, [activeFieldId, designValue, getDesignItemByType, setFieldProps]);

  const canDrop = (info: OutlineDropInfo): boolean => {
    // 预留：后续实现拖拽换位置逻辑
    void info;
    return false;
  };

  const applyReorder = (
    params: OutlineDropInfo & { designValue: DesignValue },
  ): DesignValueProps['children'] => {
    // 预留：后续实现拖拽换位时，返回新的 children
    void params;
    return undefined;
  };

  const treeData: DataNode[] = useMemo(() => {
    if (!designValue) return [];

    const buildTitle = (node: DesignValue, groupTitle?: string): ReactNode => {
      const toolItem = getToolBoxItemByType(node.type, toolBox);
      const label = getLabelByType(node.type, toolBox);
      const name = node.props?.formItemProps?.name;

      return (
        <span className={classNames(`${selectorPrefix}-node-title`)}>
          {!!groupTitle && (
            <span className={classNames(`${selectorPrefix}-node-group`)}>{`[${groupTitle}]`}</span>
          )}
          {!!toolItem?.icon && (
            <span className={classNames(`${selectorPrefix}-node-icon`)}>{toolItem.icon}</span>
          )}
          <span className={classNames(`${selectorPrefix}-node-label`)}>
            {label as ReactNode}
            {!isRootFieldId(node.id) && !!name && (
              <span className={classNames(`${selectorPrefix}-node-name`)}>{`{${name}}`}</span>
            )}
          </span>
        </span>
      );
    };

    const getSlotGroupTitle = (container: DesignValue, index: number): string => {
      const item = getDesignItemByType(container.type);
      return (
        item?.outline?.getSlotTitlePrefix?.({
          containerValue: container,
          slotIndex: index,
          lang,
        }) ?? ''
      );
    };

    const buildNode = (node: DesignValue, slotGroupTitle?: string): DataNode => {
      const children = flattenChildren(node.props?.children);

      const isContainer = !!getDesignItemByType(node.type)?.outline?.getSlotTitlePrefix;

      return {
        key: node.id,
        title: buildTitle(node, slotGroupTitle),
        children: children.length
          ? children.map((child, index) => {
              const groupTitle = isContainer ? getSlotGroupTitle(node, index) : '';
              return buildNode(child, groupTitle || undefined);
            })
          : undefined,
      };
    };

    return [buildNode(designValue)];
  }, [designValue, getDesignItemByType, lang, toolBox]);

  return (
    <div className={classNames(selectorPrefix)}>
      <Tree
        className={classNames(`${selectorPrefix}-tree`)}
        showIcon={false}
        blockNode
        expandAction={false}
        treeData={treeData}
        selectedKeys={selectedKeys}
        expandedKeys={expandedKeys}
        autoExpandParent={autoExpandParent}
        onExpand={(keys) => {
          setExpandedKeys(keys);
          setAutoExpandParent(false);
        }}
        onSelect={(keys) => {
          const id = (keys?.[0] as string | undefined) ?? undefined;
          if (!id) return;
          setActiveFieldId?.(id);
        }}
        draggable
        onDrop={(info) => {
          if (!designValue) return;

          const dragId = String(info.dragNode.key);
          const dropId = String(info.node.key);
          const dropPosition = getDropPosition(info);

          const nextInfo: OutlineDropInfo = { dragId, dropId, dropPosition };

          if (!canDrop(nextInfo)) return;

          // 预留：未来接入 updateChildrenById / reducer action 后在这里更新 designValue
          applyReorder({ ...nextInfo, designValue });
        }}
      />
    </div>
  );
};

export default OutlineView;
