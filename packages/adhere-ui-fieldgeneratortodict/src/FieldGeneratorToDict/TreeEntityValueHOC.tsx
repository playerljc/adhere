import React, { cloneElement, memo, useState } from 'react';

import { TreeEntityValueHOC as AntHOCTreeEntityValueHOC } from '@baifendian/adhere-ui-anthoc';
import type { TreeEntityValueHOCProps } from '@baifendian/adhere-ui-anthoc/es/types';

const DEFAULT_TREE_DATA_PROP = 'treeData';

const TreeEntityValueHOC = memo<TreeEntityValueHOCProps>(({ children, ...props }) => {
  const [treeData, setTreeData] = useState([]);

  const targetChildren = cloneElement(children, {
    [props.treeDataProp ?? DEFAULT_TREE_DATA_PROP]: treeData,
    ...(children.props ?? {}),
    onDataSourceChange: (_treeData) => {
      setTreeData(_treeData);
    },
  });

  return <AntHOCTreeEntityValueHOC {...props}>{targetChildren}</AntHOCTreeEntityValueHOC>;
});

export default TreeEntityValueHOC;
