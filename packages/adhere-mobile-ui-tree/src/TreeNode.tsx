import { Checkbox } from 'antd-mobile';
import { AddOutline, MinusOutline } from 'antd-mobile-icons';
import classNames from 'classnames';
import React, { memo, useContext, useMemo } from 'react';

import Space from '@baifendian/adhere-ui-space';
import Util from '@baifendian/adhere-util';

import { DEFAULT_DISABLED, DEFAULT_SELECTABLE, DEFAULT_TREE_NODE_CHECKABLE } from './Constant';
import TreeContext from './TreeContext';
import TreeNodeContext from './TreeNodeContext';
import type { TreeDataItemExtra, TreeNodeProps } from './types';
import useChecked from './useChecked';
import useUtil from './useUtil';

const selectorPrefix = 'adhere-mobile-ui-tree-node';

/**
 * TreeNode
 * @description TreeNode
 */
const TreeNode = memo<TreeNodeProps>(
  ({ id, level, isLeaf, title, checkable, disabled, selectable, children }) => {
    const {
      setSelectedKeys,
      setExpandedKeys,
      setCheckedKeys,
      selectedKeys,
      expandedKeys,
      checkedKeys,
      rowGap,
      size,
      multiple,
      checkable: treeCheckable,
      checkStrictly,
      treeData,
      icon,
      titleRender,
      switcherIcon,
      onSelect,
      onExpand,
      onCheck,
    } = useContext(TreeContext);

    // 当前节点数据的扩展
    const nodeDataExtra = useMemo<TreeDataItemExtra>(
      () => ({
        key: id,
        level,
        disabled,
        selectable,
        checkable,
        isLeaf: !children?.length,
      }),
      [id, level, disabled, selectable, checkable, children],
    );

    // 当前节点的icon
    const targetIcon = useMemo(() => icon?.(nodeDataExtra), [nodeDataExtra]);

    const { updateParentChecked: next, existsCheckableNodeInParentChildren: existsCheckable } =
      useContext(TreeNodeContext);

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
    const targetChildrenData = useMemo(() => children ?? [], [children]);

    // 是否有children
    const hasChildren = useMemo<boolean>(() => !!targetChildrenData.length, [targetChildrenData]);

    const { handleCheck, updateParentChecked, existsCheckableNodeInParentChildren } = useChecked();

    const { getTreeNodesByKeys, getLeafKeys } = useUtil();

    // 1
    //  1.1
    //    1.1.1
    //    1.1.2
    const childrenElement = useMemo(
      () =>
        targetChildrenData.map((_treeNodeData) => (
          <TreeNodeContext.Provider
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
            <TreeNode level={level + 1} id={_treeNodeData.key} {..._treeNodeData} />
          </TreeNodeContext.Provider>
        )),
      [targetChildrenData],
    );

    const checked = useMemo(() => checkedKeys().includes(id), [checkedKeys(), id]);

    const isExpanded = expandedKeys().includes(id);

    const isSelected = selectedKeys().includes(id);

    /**
     * onExpanded
     */
    function onExpanded(e) {
      function _e(_targetExpandedKeys) {
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
     * onSelected
     */
    function onSelected(e) {
      // 如果不能选中或者不可用
      if (!targetSelectable || targetDisabled) return;

      function _e(keys) {
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
     * onChecked
     * @param {boolean} _checked
     */
    function onChecked(_checked) {
      const _checkedKeys = checkedKeys();

      handleCheck({
        node: {
          key: id,
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
        <Space.Group direction="vertical" size={rowGap()}>
          {/* 显示行 */}
          <div className={`${selectorPrefix}-info`}>
            {/* checkbox节点 */}
            {treeCheckable() && targetCheckable && (
              <span className={classNames(`${selectorPrefix}-info-checkbox`)}>
                <Checkbox
                  value={id}
                  checked={checked}
                  disabled={targetDisabled}
                  onChange={onChecked}
                />
              </span>
            )}
            {treeCheckable() && !targetCheckable && existsCheckable() && (
              <span className={classNames(`${selectorPrefix}-info-checkbox`)} />
            )}

            {/* 展开和折叠节点 */}
            {hasChildren && (
              <span className={`${selectorPrefix}-info-expanded`} onClick={onExpanded}>
                {isExpanded && (switcherIcon?.(isExpanded, nodeDataExtra) ?? <MinusOutline />)}
                {!isExpanded && (switcherIcon?.(isExpanded, nodeDataExtra) ?? <AddOutline />)}
              </span>
            )}

            <span
              className={classNames(`${selectorPrefix}-info-title-wrapper`, {
                [`${selectorPrefix}-info-title-selected`]: targetSelectable && isSelected,
              })}
              onClick={onSelected}
            >
              {/* 节点内容之前的icon */}
              {!!targetIcon && <span className={`${selectorPrefix}-info-icon`}>{targetIcon}</span>}

              {/* 节点内容 */}
              <span className={`${selectorPrefix}-info-title`}>
                {titleRender?.(nodeDataExtra) ?? title}
              </span>
            </span>
          </div>

          {/* children */}
          {hasChildren && isExpanded && (
            <ul className={`${selectorPrefix}-children`}>
              <Space.Group direction="vertical" size={rowGap()}>
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
