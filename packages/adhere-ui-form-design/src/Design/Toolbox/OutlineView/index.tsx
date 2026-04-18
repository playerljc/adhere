import { Tree } from 'antd';
import type { DataNode, TreeProps } from 'antd/es/tree';
import classNames from 'classnames';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { FC, ReactNode } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';

import { SELECT_PREFIX } from '../../../constant';
import { TYPE as FLEX_LAYOUT_TYPE } from '../../../Fields/layout/FlexLayout/constant';
import type { DesignItem, DesignValue } from '../../../types';
import {
  findDesignValueById,
  findParentIdById,
  findParentWithChildIndex,
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

function validateOutlineSwap(
  root: DesignValue,
  getDesignItemByType: (type: string) => DesignItem | undefined,
  idA: string,
  idB: string,
): boolean {
  if (!idA || !idB || idA === idB) return false;
  if (isRootFieldId(idA) || isRootFieldId(idB)) return false;

  const nodeA = findDesignValueById(idA, root);
  const nodeB = findDesignValueById(idB, root);
  if (!nodeA || !nodeB) return false;

  const locA = findParentWithChildIndex(root, idA);
  const locB = findParentWithChildIndex(root, idB);
  if (!locA || !locB) return false;

  const itemParentA = getDesignItemByType(String(locA.parent.type));
  const itemParentB = getDesignItemByType(String(locB.parent.type));

  const canAHostB = !!(itemParentA?.isDrop && itemParentA.isDrop(String(nodeB.type)));
  const canBHostA = !!(itemParentB?.isDrop && itemParentB.isDrop(String(nodeA.type)));

  return canAHostB && canBHostA;
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
    swapOutlineNodes,
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

  const allowDrop = useCallback(
    ({
      dragNode,
      dropNode,
      dropPosition,
    }: {
      dragNode: DataNode;
      dropNode: DataNode;
      dropPosition: -1 | 0 | 1;
    }) => {
      if (!designValue) return false;

      const dragId = toKey(dragNode.key);
      const dropId = toKey(dropNode.key);

      if (isRootFieldId(dragId) || isRootFieldId(dropId)) return false;
      if (dragId === dropId) return false;

      // 禁止拖入「设计数据上仍有子节点」的容器内部（避免变成子节点）；仅允许与叶子/无子项节点做 inside 互换
      if (dropPosition === 0) {
        const dropVal = findDesignValueById(dropId, designValue);
        if (dropVal && flattenChildren(dropVal.props?.children).length > 0) return false;
      }

      return validateOutlineSwap(designValue, getDesignItemByType, dragId, dropId);
    },
    [designValue, getDesignItemByType],
  );

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
        draggable={{
          icon: false,
          nodeDraggable: (node) => {
            if (!designValue) return false;
            const key = toKey(node.key);
            if (isRootFieldId(key)) return false;
            const v = findDesignValueById(key, designValue);
            if (v?.type === FLEX_LAYOUT_TYPE) return false;
            return true;
          },
        }}
        allowDrop={allowDrop}
        onDrop={(info) => {
          if (!designValue) return;

          const dragId = String(info.dragNode.key);
          const dropId = String(info.node.key);
          const dropPosition = getDropPosition(info);

          if (dropPosition === 'inside') {
            const dropVal = findDesignValueById(dropId, designValue);
            if (dropVal && flattenChildren(dropVal.props?.children).length > 0) return;
          }

          if (!validateOutlineSwap(designValue, getDesignItemByType, dragId, dropId)) return;

          swapOutlineNodes?.(dragId, dropId);
        }}
      />
    </div>
  );
};

export default OutlineView;
