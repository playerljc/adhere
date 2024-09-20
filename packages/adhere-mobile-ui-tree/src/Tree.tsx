import { ErrorBlock } from 'antd-mobile';
import classNames from 'classnames';
import React, { memo, useMemo } from 'react';

import Hooks from '@baifendian/adhere-ui-hooks';
import Space from '@baifendian/adhere-ui-space';

import { DEFAULT_MULTIPLE, DEFAULT_SIZE, DEFAULT_TREE_CHECKABLE } from './Constant';
import TreeContext from './TreeContext';
import TreeNode from './TreeNode';
import type { TreeProps } from './types';

const selectorPrefix = 'adhere-mobile-ui-tree';

const { usePropToState } = Hooks;

/**
 * Tree
 * @description Tree
 */
const Tree = memo<TreeProps>(
  ({
    className,
    style,
    treeData,
    expandAll,
    expandedKeys,
    selectedKeys,
    switcherIcon,
    titleRender,
    renderEmpty,
    size,
    checkable,
    checkedKeys,
    multiple,
  }) => {
    // Tree的密度
    const targetSize = useMemo(() => size ?? DEFAULT_SIZE, [size]);

    // 整个Tree是否是可勾选的Tree
    const targetCheckable = useMemo(() => {
      if (checkable === undefined || checkable === null) return DEFAULT_TREE_CHECKABLE;

      return checkable;
    }, [checkable]);

    // 是否可以选中多个节点
    const targetMultiple = useMemo(() => {
      if (multiple === undefined || multiple === null) return DEFAULT_MULTIPLE;

      return multiple;
    }, [multiple]);

    // Tree的数据
    const targetTreeData = useMemo(() => treeData ?? [], [treeData]);

    // 展开的keys
    const defaultExpandedKeys = useMemo(() => expandedKeys ?? [], [expandedKeys]);
    const [targetExpandedKeys, setTargetExpandedKeys] = usePropToState(defaultExpandedKeys);

    // 选择的keys
    const defaultSelectedKeys = useMemo(() => selectedKeys ?? [], [selectedKeys]);
    const [targetSelectedKeys, setTargetSelectedKeys] = usePropToState(defaultSelectedKeys);

    // check的keys
    const defaultCheckedKeys = useMemo(() => checkedKeys ?? [], [checkedKeys]);
    const [targetCheckedKeys, setTargetCheckedKeys] = usePropToState(defaultCheckedKeys);

    // 行的间距
    const rowGap = useMemo(
      () =>
        new Map([
          ['small', 5],
          ['middle', 15],
          ['large', 25],
        ]).get(targetSize),
      [targetSize],
    );

    const treeChildrenElements = useMemo(
      () =>
        targetTreeData.map((_treeNodeData) => (
          <TreeNode
            level={0}
            icon={switcherIcon}
            titleRender={titleRender}
            id={_treeNodeData.key}
            {..._treeNodeData}
          />
        )),
      [targetTreeData, switcherIcon, titleRender],
    );

    const isEmpty = useMemo(() => !treeChildrenElements.length, [treeChildrenElements]);

    const contextProviderValue = useMemo(
      () => ({
        expandedKeys: () => targetExpandedKeys,
        selectedKeys: () => targetSelectedKeys,
        checkedKeys: () => targetCheckedKeys,
        setSelectedKeys: setTargetSelectedKeys,
        setExpandedKeys: setTargetExpandedKeys,
        setCheckedKeys: setTargetCheckedKeys,
        size: () => targetSize,
        rowGap: () => rowGap ?? 15,
        multiple: () => targetMultiple,
        checkable: () => targetCheckable,
        treeData: () => treeData,
      }),
      [
        targetExpandedKeys,
        targetSelectedKeys,
        targetCheckedKeys,
        rowGap,
        targetSize,
        targetMultiple,
        targetCheckable,
        treeData,
      ],
    );

    return (
      <TreeContext.Provider value={contextProviderValue}>
        <ul className={classNames(selectorPrefix, className)} style={style ?? {}}>
          <Space.Group direction="vertical" size={rowGap}>
            {isEmpty && <li>{renderEmpty?.() ?? <ErrorBlock status="empty" />}</li>}
            {!isEmpty && treeChildrenElements}
          </Space.Group>
        </ul>
      </TreeContext.Provider>
    );
  },
);

Tree.displayName = 'Tree';

export default Tree;
