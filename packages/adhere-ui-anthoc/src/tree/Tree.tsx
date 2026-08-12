import { Tree } from 'antd';
import React, { memo } from 'react';

import type { DisplayNameInternal, TreeHOCProps } from '../types';
import { createFactory } from '../util';
import useTreeData from './useTreeData';

const InternalTree = memo<TreeHOCProps>(
  ({ treeDataSimpleMode, arrayToAntdTreeConfig, treeData, ...props }) => {
    const _treeData = useTreeData({
      treeData,
      treeDataSimpleMode,
      config: arrayToAntdTreeConfig,
    });

    return <Tree {...props} treeData={_treeData} />;
  },
);

const TreeHOC: typeof Tree & {
  defaultProps?: Partial<TreeHOCProps>;
  override?: (props: Partial<TreeHOCProps>) => Partial<TreeHOCProps>;
} = createFactory<TreeHOCProps>(InternalTree, {});

Object.assign(TreeHOC, Tree);

// @ts-ignore
TreeHOC.displayName = 'Tree';

export default TreeHOC as DisplayNameInternal<typeof TreeHOC> & typeof Tree;
