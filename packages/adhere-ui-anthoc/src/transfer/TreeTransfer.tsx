import { theme } from 'antd';
import React, { memo, useMemo } from 'react';

import Tree from '../tree';
import useTreeData from '../tree/useTreeData';
import type { DisplayNameInternal, TreeTransferProps } from '../types';
import Transfer from './Transfer';
import {
  flattenTreeData,
  generateTransferTree,
  getTreeNodeAndDescendantKeys,
  isTransferTreeNodeChecked,
  isTreeLeafNode,
  normalizeTreeData,
} from './transferUtils';

import './TreeTransfer.less';

const InternalTreeTransfer = memo<TreeTransferProps>(
  ({
    dataSource = [],
    targetKeys,
    value,
    className,
    showSelectAll = false,
    treeDataSimpleMode,
    arrayToAntdTreeConfig,
    checkStrictly = true,
    leafOnly = false,
    render,
    listStyle,
    styles,
    ...restProps
  }) => {
    const { token } = theme.useToken();
    const mergedTargetKeys = value !== undefined ? value : targetKeys;

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
        targetKeys={mergedTargetKeys}
        showSelectAll={showSelectAll}
        listStyle={listStyle}
        styles={styles}
        render={render ?? ((item) => item.title!)}
      >
        {({ direction, onItemSelect, onItemSelectAll, selectedKeys }) => {
          if (direction === 'left') {
            const checkedKeys = [...selectedKeys, ...(mergedTargetKeys ?? [])];

            const handleCheckNode = (node: Parameters<typeof isTreeLeafNode>[0] & { key: any }) => {
              if (leafOnly && !isTreeLeafNode(node)) {
                return;
              }

              if (checkStrictly) {
                onItemSelect(node.key as string, !isTransferTreeNodeChecked(checkedKeys, node.key));
                return;
              }

              const keys = getTreeNodeAndDescendantKeys(node as any)
                .filter((key) => !(mergedTargetKeys ?? []).includes(key as string))
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
                  treeData={generateTransferTree(treeData, mergedTargetKeys, { leafOnly })}
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
