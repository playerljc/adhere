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
import TreeNodeContext from './TreeNodeContext';
import type { TreeProps } from './types';
import useChecked from './useChecked';
import useUtil from './useUtil';

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
    const { omitDisabledKeys } = useUtil();
    const { getDefaultCheckedKeysWithCheckStrictly, existsCheckableNodeInParentChildren } =
      useChecked();

    // Tree的密度
    const targetSize = useMemo(() => size ?? DEFAULT_SIZE, [size]);

    // 整个Tree是否是可勾选的Tree
    const targetCheckable = useMemo<boolean>(() => {
      if (Util.isEmpty(checkable)) return DEFAULT_TREE_CHECKABLE;

      return checkable as boolean;
    }, [checkable]);

    // 是否可以选中多个节点
    const targetMultiple = useMemo<boolean>(() => {
      if (Util.isEmpty(multiple)) return DEFAULT_MULTIPLE;

      return multiple as boolean;
    }, [multiple]);

    // checkbox是否受控
    const targetCheckStrictly = useMemo<boolean>(() => {
      if (Util.isEmpty(checkStrictly)) return DEFAULT_CHECKSTRICTLY;

      return checkStrictly as boolean;
    }, [checkStrictly]);

    // Tree的数据
    const targetTreeData = useMemo(() => treeData ?? [], [treeData]);

    // 展开的keys
    const defaultExpandedKeys = useMemo(() => expandedKeys ?? [], [expandedKeys]);
    const [targetExpandedKeys, setTargetExpandedKeys] = usePropToState(defaultExpandedKeys);

    // 选择的keys
    const defaultSelectedKeys = useMemo(
      // 排除不可用的节点keys
      () => omitDisabledKeys(targetTreeData, selectedKeys ?? []),
      [targetTreeData, selectedKeys],
    );
    const [targetSelectedKeys, setTargetSelectedKeys] = usePropToState(defaultSelectedKeys);

    // 勾选的keys
    const defaultCheckedKeys = useMemo(() => {
      const _defaultCheckedKeys = omitDisabledKeys(targetTreeData, checkedKeys ?? []);

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

    // children elements
    const treeChildrenElements = useMemo(
      () =>
        targetTreeData.map((_treeNodeData) => (
          <TreeNodeContext.Provider
            value={{
              existsCheckableNodeInParentChildren: () =>
                existsCheckableNodeInParentChildren(_treeNodeData.children),
            }}
          >
            <TreeNode level={0} id={_treeNodeData.key} {..._treeNodeData} />
          </TreeNodeContext.Provider>
        )),
      [targetTreeData, switcherIcon, titleRender],
    );

    // 是否微空
    const isEmpty = useMemo(() => !treeChildrenElements.length, [treeChildrenElements]);

    // contextProvider
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
