import { Checkbox } from 'antd-mobile';
import { AddOutline, MinusOutline } from 'antd-mobile-icons';
import classNames from 'classnames';
import React, { memo, useContext, useMemo } from 'react';

import Space from '@baifendian/adhere-ui-space';

import { DEFAULT_DISABLED, DEFAULT_SELECTABLE, DEFAULT_TREE_NODE_CHECKABLE } from './Constant';
import TreeContext from './TreeContext';
import TreeNodeContext from './TreeNodeContext';
import type { TreeNodeProps } from './types';
import useChecked from './useChecked';

const selectorPrefix = 'adhere-mobile-ui-tree-node';

/**
 * TreeNode
 * @description TreeNode
 */
const TreeNode = memo<TreeNodeProps>(
  ({ id, level, isLeaf, icon, title, checkable, disabled, selectable, children, titleRender }) => {
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
    } = useContext(TreeContext);

    const { updateParentChecked: next } = useContext(TreeNodeContext);

    // 是否可用
    const targetDisabled = useMemo(() => {
      if (disabled === undefined || disabled === null) return DEFAULT_DISABLED;

      return disabled;
    }, [disabled]);

    // 是否可选中
    const targetSelectable = useMemo(() => {
      if (selectable === undefined || selectable === null) return DEFAULT_SELECTABLE;

      return selectable;
    }, [selectable]);

    // 是否可勾选
    const targetCheckable = useMemo(() => {
      if (checkable === undefined || checkable === null) return DEFAULT_TREE_NODE_CHECKABLE;

      return checkable;
    }, [checkable]);

    const targetChildrenData = useMemo(() => children ?? [], [children]);

    const hasChildren = useMemo(() => !!targetChildrenData.length, [targetChildrenData]);

    const { handleCheck, updateParentChecked } = useChecked();

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
            }}
          >
            <TreeNode
              level={level + 1}
              icon={icon}
              titleRender={titleRender}
              id={_treeNodeData.key}
              {..._treeNodeData}
            />
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
    function onExpanded() {
      if (isExpanded) {
        // 关闭
        setExpandedKeys((_expandedKeys) => (_expandedKeys ?? []).filter((_id) => _id !== id));

        return;
      }

      // 展开
      setExpandedKeys((_expandedKeys) => [...(_expandedKeys ?? []), id]);
    }

    /**
     * onSelected
     */
    function onSelected() {
      // 如果不能选中
      if (!targetSelectable) return;

      // 多选
      if (multiple()) {
        if (isSelected) {
          // 关闭
          setSelectedKeys((_selectedKeys) => (_selectedKeys ?? []).filter((_id) => _id !== id));

          return;
        }

        // 展开
        setSelectedKeys((_selectedKeys) => [...(_selectedKeys ?? []), id]);

        return;
      }

      // 单选
      if (isSelected) {
        setSelectedKeys([]);

        return;
      }

      setSelectedKeys([id]);
    }

    /**
     * onChecked
     * @param {boolean} _checked
     */
    function onChecked(_checked) {
      const _checkedKeys = checkedKeys();

      handleCheck({
        checkedKeys: _checkedKeys,
        checked: _checked,
        node: {
          key: id,
          children,
        },
        next,
      });

      setCheckedKeys([..._checkedKeys]);
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

            {/* 展开和折叠节点 */}
            {hasChildren && (
              <span className={`${selectorPrefix}-info-expanded`} onClick={onExpanded}>
                {isExpanded && (icon?.(isExpanded) ?? <MinusOutline />)}
                {!isExpanded && (icon?.(isExpanded) ?? <AddOutline />)}
              </span>
            )}
            {/* 节点内容 */}
            <span
              className={classNames(`${selectorPrefix}-info-title`, {
                [`${selectorPrefix}-info-title-selected`]: targetSelectable && isSelected,
              })}
              onClick={onSelected}
            >
              {titleRender?.({
                key: id,
                title,
                disabled,
                selectable,
                checkable,
                children,
              }) ?? title}
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
