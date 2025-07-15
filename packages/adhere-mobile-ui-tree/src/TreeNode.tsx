import { useUpdate } from 'ahooks';
import { Checkbox } from 'antd-mobile';
import { AddOutline, MinusOutline } from 'antd-mobile-icons';
import classNames from 'classnames';
import React, { memo, useContext, useMemo } from 'react';
import type { MouseEvent, TouchEvent } from 'react';

import { LoadingOutlined } from '@ant-design/icons';
import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import Space from '@baifendian/adhere-ui-space';
import Util from '@baifendian/adhere-util';

import {
  DEFAULT_DISABLED,
  DEFAULT_SELECTABLE,
  DEFAULT_TREE_NODE_CHECKABLE,
  DEFAULT_TREE_UTIL_CONFIG,
} from './Constant';
import TreeContext from './TreeContext';
import TreeNodeContext from './TreeNodeContext';
import type { TreeDataItem, TreeDataItemExtra, TreeNodeProps } from './types';
import useChecked from './useChecked';
import useLoadedLocks from './useLoadedLocks';
import useUtil from './useUtil';

const selectorPrefix = 'adhere-mobile-ui-tree-node';

/**
 * 树节点组件
 * @description 树形结构中的单个节点组件，支持展开/折叠、选择、勾选等功能
 * @param props - 节点属性
 * @returns 树节点组件
 */
const TreeNode = memo<TreeNodeProps>(
  ({
    id,
    level,
    isLeaf,
    title,
    checkable,
    disabled,
    selectable,
    props,
    checkboxWidth,
    checkboxGap,
    titleGap,
    iconGap,
    indent,
    children,
  }) => {
    const {
      setSelectedKeys,
      setExpandedKeys,
      setCheckedKeys,
      setLoadedKeys,
      selectedKeys,
      expandedKeys,
      checkedKeys,
      loadedKeys,
      loadData,
      size,
      multiple,
      checkable: treeCheckable,
      checkStrictly,
      treeData,
      icon,
      checkboxWidth: commonCheckboxWidth,
      checkboxGap: commonCheckboxGap,
      titleGap: commonTitleGap,
      iconGap: commonIconGap,
      indent: commonIndent,
      rowGap: commonRowGap,
      titleRender,
      switcherIcon,
      onSelect,
      onExpand,
      onCheck,
    } = useContext(TreeContext);

    const update = useUpdate();

    // loaded的lock
    const { lock, unLock, isLock } = useLoadedLocks();

    const { media } = useContext(ConfigProvider.Context);

    // 当前节点数据的扩展
    const nodeDataExtra = useMemo<TreeDataItemExtra>(
      () => ({
        key: id,
        level,
        disabled,
        selectable,
        checkable,
        isLeaf: !children?.length,
        props,
      }),
      [id, level, disabled, selectable, checkable, props, children],
    );

    // 当前节点的icon
    const targetIcon = useMemo(() => icon?.(nodeDataExtra), [icon, nodeDataExtra]);

    const { updateParentChecked: next, existsCheckableNodeInParentChildren: existsCheckable } =
      useContext(TreeNodeContext);

    const { handleCheck, updateParentChecked, existsCheckableNodeInParentChildren } = useChecked();

    const { getTreeNodesByKeys, getLeafKeys, checkTreeDataSimpleModeFromObject, getValueWithUnit } =
      useUtil();

    // 是否可用
    const targetDisabled = useMemo(() => {
      if (Util.isEmpty(disabled)) return DEFAULT_DISABLED;

      return disabled;
    }, [disabled]);

    // 是否可选中
    const targetSelectable = useMemo<boolean>(() => {
      if (Util.isEmpty(selectable)) return DEFAULT_SELECTABLE;

      return selectable as boolean;
    }, [selectable]);

    // 是否可勾选
    const targetCheckable = useMemo<boolean>(() => {
      if (Util.isEmpty(checkable)) return DEFAULT_TREE_NODE_CHECKABLE;

      return checkable as boolean;
    }, [checkable]);

    // children数据
    const targetChildrenData = useMemo(() => (children ?? []) as TreeDataItem[], [children]);

    // 是否有children
    const hasChildren = useMemo<boolean>(() => {
      if (isLeaf === undefined) {
        return !!targetChildrenData.length;
      }

      return !isLeaf;
    }, [targetChildrenData, isLeaf]);

    const targetCheckboxWidth = useMemo(
      () => getValueWithUnit(checkboxWidth, media) ?? commonCheckboxWidth(),
      [checkboxWidth, commonCheckboxWidth, media, getValueWithUnit],
    );

    const targetCheckboxGap = useMemo(
      () => getValueWithUnit(checkboxGap, media) ?? commonCheckboxGap(),
      [checkboxGap, commonCheckboxGap, media, getValueWithUnit],
    );

    const targetTitleGap = useMemo(
      () => getValueWithUnit(titleGap, media) ?? commonTitleGap(),
      [titleGap, commonTitleGap, media, getValueWithUnit],
    );

    const targetIconGap = useMemo(
      () => getValueWithUnit(iconGap, media) ?? commonIconGap(),
      [iconGap, commonIconGap, media, getValueWithUnit],
    );

    const targetIndent = useMemo(
      () => getValueWithUnit(indent, media) ?? commonIndent(),
      [indent, commonIndent, media, getValueWithUnit],
    );

    const targetRowGap = useMemo(() => commonRowGap(), [commonRowGap]);

    // 子节点元素
    const childrenElement = useMemo(
      () =>
        targetChildrenData.map((_treeNodeData) => (
          <TreeNodeContext.Provider
            key={_treeNodeData[DEFAULT_TREE_UTIL_CONFIG.keyAttr]}
            value={{
              updateParentChecked: ({ key, checked, checkedKeys }) => {
                updateParentChecked({
                  key,
                  checked,
                  checkedKeys,
                  childrenData: targetChildrenData,
                  parentId: id,
                  next,
                });
              },
              existsCheckableNodeInParentChildren: () =>
                existsCheckableNodeInParentChildren(targetChildrenData),
            }}
          >
            <TreeNode
              level={level + 1}
              id={_treeNodeData[DEFAULT_TREE_UTIL_CONFIG.keyAttr]}
              {..._treeNodeData}
            />
          </TreeNodeContext.Provider>
        )),
      [
        targetChildrenData,
        updateParentChecked,
        existsCheckableNodeInParentChildren,
        id,
        next,
        level,
      ],
    );

    const checked = useMemo(() => checkedKeys().includes(id), [checkedKeys, id]);

    const isExpanded = expandedKeys().includes(id);

    const isSelected = selectedKeys().includes(id);

    /**
     * 展开/折叠组合处理函数
     * @param e - 事件对象
     */
    function onExpandedCombination(e: TouchEvent<HTMLElement> | MouseEvent<HTMLElement>): void {
      if (!isExpanded) {
        if (loadData) {
          onLoadData(e);
          return;
        }
      }

      onExpanded(e);
    }

    /**
     * 动态加载数据
     * @param e - 事件对象
     */
    function onLoadData(e: TouchEvent<HTMLElement> | MouseEvent<HTMLElement>): void {
      if (isLock(id)) return;

      // 如果当前节点已经加载过
      if (loadedKeys().includes(id)) {
        onExpanded(e);
        return;
      }

      // 上锁
      lock(id);
      // 图标变成loading状态
      update();

      loadData?.(nodeDataExtra)
        ?.then(() => {
          // 展开
          onExpanded(e);

          // 解锁
          unLock(id);

          // id加入loadedKeys
          setLoadedKeys((_loadedKeys) => [..._loadedKeys, id]);
        })
        .catch((error) => {
          // 出现错误从checkedKeys去掉自己
          if (checkedKeys().includes(id)) {
            setLoadedKeys((_loadedKeys) => _loadedKeys.filter((key) => key !== id));
          }

          // 解锁
          unLock(id);

          // 图标还原(必须先unLock才能update，上下语句不能换位置)
          update();

          // 抛出异常
          throw new Error(error);
        });
    }

    /**
     * 展开/折叠处理函数
     * @param e - 事件对象
     */
    function onExpanded(e: TouchEvent<HTMLElement> | MouseEvent<HTMLElement>): void {
      function _e(_targetExpandedKeys: string[]) {
        return {
          expanded: !isExpanded,
          expandedNodes: getTreeNodesByKeys({
            treeData: treeData() ?? [],
            keys: _targetExpandedKeys,
          }),
          node: nodeDataExtra,
          event: e,
        };
      }

      if (isExpanded) {
        // 关闭
        setExpandedKeys((_expandedKeys) => {
          const targetExpandedKeys = (_expandedKeys ?? []).filter((_id) => _id !== id);

          onExpand?.(targetExpandedKeys, _e(targetExpandedKeys));

          return targetExpandedKeys;
        });

        return;
      }

      // 展开
      setExpandedKeys((_expandedKeys) => {
        const targetExpandedKeys = [...(_expandedKeys ?? []), id];

        onExpand?.(targetExpandedKeys, _e(targetExpandedKeys));

        return targetExpandedKeys;
      });
    }

    /**
     * 选中处理函数
     * @param e - 事件对象
     */
    function onSelected(e: TouchEvent<HTMLElement> | MouseEvent<HTMLElement>): void {
      // 如果不能选中或者不可用
      if (!targetSelectable || targetDisabled) return;

      function _e(keys: string[]) {
        return {
          selected: !isSelected,
          selectedNodes: getTreeNodesByKeys({ treeData: treeData() ?? [], keys }),
          node: nodeDataExtra,
          event: e,
        };
      }

      // 多选
      if (multiple()) {
        if (isSelected) {
          // 关闭
          setSelectedKeys((_selectedKeys) => {
            const targetSelectedKeys = (_selectedKeys ?? []).filter((_id) => _id !== id);

            onSelect?.(targetSelectedKeys, _e(targetSelectedKeys));

            return targetSelectedKeys;
          });

          return;
        }

        // 展开
        setSelectedKeys((_selectedKeys) => {
          const targetSelectedKeys = [...(_selectedKeys ?? []), id];

          onSelect?.(targetSelectedKeys, _e(targetSelectedKeys));

          return targetSelectedKeys;
        });

        return;
      }

      // 单选
      if (isSelected) {
        setSelectedKeys([]);

        onSelect?.([], _e([]));

        return;
      }

      setSelectedKeys([id]);

      onSelect?.([id], _e([id]));
    }

    /**
     * 勾选处理函数
     * @param _checked - 是否勾选
     */
    function onChecked(_checked: boolean): void {
      const _checkedKeys = checkedKeys();

      handleCheck({
        node: {
          [DEFAULT_TREE_UTIL_CONFIG.keyAttr]: id,
          children,
        },
        checked: _checked,
        checkedKeys: _checkedKeys,
        checkStrictly: checkStrictly(),
        next,
      });

      setCheckedKeys([..._checkedKeys]);

      let targetCheckedKeys = [..._checkedKeys];

      // 如果是受控模式的时候
      if (onCheck && checkStrictly()) {
        // 需要筛选出叶子节点
        targetCheckedKeys = getLeafKeys({ treeData: treeData() ?? [], keys: _checkedKeys });
      }

      onCheck?.(targetCheckedKeys, {
        checked: _checked,
        checkedNodes: getTreeNodesByKeys({ treeData: treeData() ?? [], keys: targetCheckedKeys }),
        node: nodeDataExtra,
      });
    }

    return (
      /* 一个Tree节点 */
      <li
        key={id}
        className={classNames(selectorPrefix, `${selectorPrefix}-${size()}`, {
          [`${selectorPrefix}-disabled`]: targetDisabled,
        })}
      >
        <Space.Group direction="vertical" size={targetRowGap}>
          {/* 显示行 */}
          <div className={`${selectorPrefix}-info`}>
            {/* checkbox节点 */}
            {treeCheckable() && targetCheckable && (
              <span
                className={classNames(`${selectorPrefix}-info-checkbox`)}
                style={{
                  width: targetCheckboxWidth,
                  marginInlineEnd: targetCheckboxGap,
                }}
              >
                <Checkbox
                  value={id}
                  checked={checked}
                  disabled={targetDisabled}
                  onChange={onChecked}
                />
              </span>
            )}
            {/* 当前节点不可以checkable但是兄弟中存在可以checkable的节点 */}
            {treeCheckable() && !targetCheckable && existsCheckable() && (
              <span className={classNames(`${selectorPrefix}-info-checkbox`)} />
            )}

            {/* 展开、折叠、异步加载节点 */}
            {hasChildren && (
              <span className={`${selectorPrefix}-info-expanded`} onClick={onExpandedCombination}>
                {/* loadData状态 */}
                {isLock(id) && <LoadingOutlined className={`${selectorPrefix}-info-load`} />}

                {/* 展开后状态 */}
                {!isLock(id) &&
                  isExpanded &&
                  (switcherIcon?.(isExpanded, nodeDataExtra) ?? <MinusOutline />)}

                {/* 未展开状态 */}
                {!isLock(id) &&
                  !isExpanded &&
                  (switcherIcon?.(isExpanded, nodeDataExtra) ?? <AddOutline />)}
              </span>
            )}

            <span
              className={classNames(`${selectorPrefix}-info-title-wrapper`, {
                [`${selectorPrefix}-info-title-selected`]: targetSelectable && isSelected,
              })}
              style={{
                padding: targetTitleGap,
              }}
              onClick={onSelected}
            >
              {/* 节点内容之前的icon */}
              {!!targetIcon && (
                <span
                  className={`${selectorPrefix}-info-icon`}
                  style={{
                    marginInlineEnd: targetIconGap,
                  }}
                >
                  {targetIcon}
                </span>
              )}

              {/* 节点内容 */}
              <span className={`${selectorPrefix}-info-title`}>
                {titleRender?.(nodeDataExtra) ?? title}
              </span>
            </span>
          </div>

          {/* children */}
          {hasChildren && isExpanded && (
            <ul
              className={`${selectorPrefix}-children`}
              style={{
                paddingInlineStart: targetIndent,
              }}
            >
              <Space.Group direction="vertical" size={targetRowGap}>
                {childrenElement}
              </Space.Group>
            </ul>
          )}
        </Space.Group>
      </li>
    );
  },
);

TreeNode.displayName = 'TreeNode';

export default TreeNode;
