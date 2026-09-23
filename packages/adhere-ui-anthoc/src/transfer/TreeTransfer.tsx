import { theme } from 'antd';
import React, { memo, useMemo, useState } from 'react';
import type { Key } from 'react';

import Tree from '../tree';
import useTreeData from '../tree/useTreeData';
import type { DisplayNameInternal, TreeTransferProps } from '../types';
import Transfer from './Transfer';
import {
  filterTreeByFilteredKeys,
  flattenTreeData,
  generateTransferTree,
  getTreeNodeAndDescendantKeys,
  isTransferTreeNodeChecked,
  isTreeLeafNode,
  normalizeTreeData,
} from './transferUtils';

import './TreeTransfer.less';

function getShowSearchDefaultValue(showSearch: TreeTransferProps['showSearch']) {
  if (showSearch && typeof showSearch === 'object' && showSearch.defaultValue != null) {
    return String(showSearch.defaultValue);
  }

  return '';
}

const InternalTreeTransfer = memo<TreeTransferProps>(
  ({
    dataSource = [],
    targetKeys,
    value,
    lockedKeys,
    className,
    showSelectAll = false,
    showSearch,
    treeDataSimpleMode,
    arrayToAntdTreeConfig,
    checkStrictly = true,
    leafOnly = false,
    render,
    listStyle,
    styles,
    onSearch,
    onChange,
    ...restProps
  }) => {
    const { token } = theme.useToken();
    const mergedTargetKeys = value !== undefined ? value : targetKeys;
    const lockedKeyList = useMemo(
      () => (lockedKeys ?? []).map((key) => String(key)),
      [lockedKeys],
    );
    const lockedKeySet = useMemo(() => new Set(lockedKeyList), [lockedKeyList]);
    // 右侧只展示非锁定项；锁定项仅在左侧勾选+置灰
    const transferTargetKeys = useMemo(
      () => (mergedTargetKeys ?? []).filter((key) => !lockedKeySet.has(String(key))),
      [mergedTargetKeys, lockedKeySet],
    );
    const disabledAndCheckedKeys = useMemo(
      () => [...transferTargetKeys, ...lockedKeyList],
      [transferTargetKeys, lockedKeyList],
    );
    const [leftSearchValue, setLeftSearchValue] = useState(() =>
      getShowSearchDefaultValue(showSearch),
    );

    const resolvedTreeData = useTreeData({
      treeData: dataSource,
      treeDataSimpleMode,
      config: arrayToAntdTreeConfig,
    });

    const treeData = useMemo(() => normalizeTreeData(resolvedTreeData), [resolvedTreeData]);
    const transferDataSource = useMemo(() => flattenTreeData(treeData), [treeData]);

    return (
      <Transfer
        {...restProps}
        className={['tree-transfer', className].filter(Boolean).join(' ')}
        dataSource={transferDataSource}
        targetKeys={transferTargetKeys}
        showSelectAll={showSelectAll}
        showSearch={showSearch}
        listStyle={listStyle}
        styles={styles}
        render={render ?? ((item) => item.title!)}
        onChange={(nextKeys, direction, moveKeys) => {
          const next = (nextKeys ?? []).filter((key) => !lockedKeySet.has(String(key)));
          onChange?.(next, direction, moveKeys);
        }}
        onSearch={(direction, value) => {
          if (direction === 'left') {
            setLeftSearchValue(value);
          }
          onSearch?.(direction, value);
        }}
      >
        {({ direction, onItemSelect, onItemSelectAll, selectedKeys, filteredItems }) => {
          if (direction === 'left') {
            const checkedKeys = [...selectedKeys, ...disabledAndCheckedKeys];
            // 无搜索时保持原逻辑：完整树 + targetKeys 节点 disabled
            // 有搜索时按 Transfer filteredItems 裁剪树（保留匹配节点及其祖先）
            const hasLeftSearch = leftSearchValue !== '';
            const visibleTreeData = hasLeftSearch
              ? filterTreeByFilteredKeys(
                  treeData,
                  new Set((filteredItems ?? []).map((item) => item.key as Key)),
                )
              : treeData;

            const handleCheckNode = (node: Parameters<typeof isTreeLeafNode>[0] & { key: any }) => {
              if (lockedKeySet.has(String(node.key))) {
                return;
              }

              if (leafOnly && !isTreeLeafNode(node)) {
                return;
              }

              if (checkStrictly) {
                onItemSelect(node.key as string, !isTransferTreeNodeChecked(checkedKeys, node.key));
                return;
              }

              const keys = getTreeNodeAndDescendantKeys(node as any)
                .filter((key) => !disabledAndCheckedKeys.includes(key as string))
                .filter((key) => {
                  if (!leafOnly) {
                    return true;
                  }

                  const item = transferDataSource.find((data) => data.key === key);
                  return item ? isTreeLeafNode(item as any) : true;
                }) as string[];

              onItemSelectAll(keys, !isTransferTreeNodeChecked(checkedKeys, node.key));
            };

            return (
              <div style={{ padding: token.paddingXS }}>
                <Tree
                  blockNode
                  checkable
                  checkStrictly
                  defaultExpandAll
                  checkedKeys={checkedKeys}
                  treeData={generateTransferTree(visibleTreeData, disabledAndCheckedKeys, {
                    leafOnly,
                  })}
                  onCheck={(_, { node }) => {
                    handleCheckNode(node);
                  }}
                  onSelect={(_, { node }) => {
                    handleCheckNode(node);
                  }}
                />
              </div>
            );
          }

          return null;
        }}
      </Transfer>
    );
  },
);

const TreeTransfer = InternalTreeTransfer as DisplayNameInternal<typeof InternalTreeTransfer>;
TreeTransfer.displayName = 'TreeTransfer';

export default TreeTransfer;
