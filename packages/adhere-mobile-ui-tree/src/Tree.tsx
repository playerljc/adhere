import { useUpdateEffect } from 'ahooks';
import { ErrorBlock } from 'antd-mobile';
import classNames from 'classnames';
import React, { memo, useMemo } from 'react';

import Hooks from '@baifendian/adhere-ui-hooks';
import Space from '@baifendian/adhere-ui-space';
import Util from '@baifendian/adhere-util';

import {
  DEFAULT_CHECKSTRICTLY,
  DEFAULT_MULTIPLE,
  DEFAULT_SIZE,
  DEFAULT_TREE_CHECKABLE,
} from './Constant';
import TreeContext from './TreeContext';
import TreeNode from './TreeNode';
import type { TreeProps } from './types';
import useChecked from './useChecked';

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
    icon,
    renderEmpty,
    size,
    checkable,
    checkedKeys,
    multiple,
    checkStrictly,
    onSelect,
    onExpand,
    onCheck,
  }) => {
    const { getDefaultCheckedKeysWithCheckStrictly } = useChecked();

    // Tree的密度
    const targetSize = useMemo(() => size ?? DEFAULT_SIZE, [size]);

    // 整个Tree是否是可勾选的Tree
    const targetCheckable = useMemo(() => {
      if (Util.isEmpty(checkable)) return DEFAULT_TREE_CHECKABLE;

      return checkable;
    }, [checkable]);

    // 是否可以选中多个节点
    const targetMultiple = useMemo(() => {
      if (Util.isEmpty(multiple)) return DEFAULT_MULTIPLE;

      return multiple;
    }, [multiple]);

    // checkbox是否受控
    const targetCheckStrictly = useMemo(() => {
      if (Util.isEmpty(checkStrictly)) return DEFAULT_CHECKSTRICTLY;

      return checkStrictly;
    }, [checkStrictly]);

    // Tree的数据
    const targetTreeData = useMemo(() => treeData ?? [], [treeData]);

    // 展开的keys
    const defaultExpandedKeys = useMemo(() => expandedKeys ?? [], [expandedKeys]);
    const [targetExpandedKeys, setTargetExpandedKeys] = usePropToState(defaultExpandedKeys);

    // 选择的keys
    const defaultSelectedKeys = useMemo(() => selectedKeys ?? [], [selectedKeys]);
    const [targetSelectedKeys, setTargetSelectedKeys] = usePropToState(defaultSelectedKeys);

    const defaultCheckedKeys = useMemo(() => {
      const _defaultCheckedKeys = checkedKeys ?? [];

      // 如果是受控
      if (targetCheckStrictly) {
        return getDefaultCheckedKeysWithCheckStrictly(targetTreeData, _defaultCheckedKeys);
      }

      return _defaultCheckedKeys;
    }, [targetTreeData, checkedKeys, targetCheckStrictly]);
    const [targetCheckedKeys, setTargetCheckedKeys] = usePropToState(defaultCheckedKeys);
    useUpdateEffect(() => {
      setTargetCheckedKeys(defaultCheckedKeys);
    }, [defaultCheckedKeys]);

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
          <TreeNode level={0} id={_treeNodeData.key} {..._treeNodeData} />
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
        checkStrictly: () => targetCheckStrictly,
        icon,
        titleRender,
        switcherIcon,
        onSelect,
        onExpand,
        onCheck,
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
        checkStrictly,
        icon,
        titleRender,
        switcherIcon,
        onSelect,
        onExpand,
        onCheck,
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
