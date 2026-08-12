import { theme } from 'antd';
import React, { memo, useMemo } from 'react';

import Tree from '../tree';
import useTreeData from '../tree/useTreeData';
import type { DisplayNameInternal, TreeTransferProps } from '../types';
import Transfer from './Transfer';
import {
  flattenTreeData,
  generateTransferTree,
  isTransferTreeNodeChecked,
  normalizeTreeData,
} from './transferUtils';

const InternalTreeTransfer = memo<TreeTransferProps>(
  ({
    dataSource = [],
    targetKeys,
    className,
    showSelectAll = false,
    treeDataSimpleMode,
    arrayToAntdTreeConfig,
    ...restProps
  }) => {
    const { token } = theme.useToken();

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
        targetKeys={targetKeys}
        showSelectAll={showSelectAll}
        render={(item) => item.title!}
      >
        {({ direction, onItemSelect, selectedKeys }) => {
          if (direction === 'left') {
            const checkedKeys = [...selectedKeys, ...(targetKeys ?? [])];

            return (
              <div style={{ padding: token.paddingXS }}>
                <Tree
                  blockNode
                  checkable
                  checkStrictly
                  defaultExpandAll
                  checkedKeys={checkedKeys}
                  treeData={generateTransferTree(treeData, targetKeys)}
                  onCheck={(_, { node: { key } }) => {
                    onItemSelect(key as string, !isTransferTreeNodeChecked(checkedKeys, key));
                  }}
                  onSelect={(_, { node: { key } }) => {
                    onItemSelect(key as string, !isTransferTreeNodeChecked(checkedKeys, key));
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
