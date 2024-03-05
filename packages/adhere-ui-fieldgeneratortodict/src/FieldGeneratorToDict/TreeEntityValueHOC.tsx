import React, { cloneElement, memo, useRef, useState } from 'react';

import { TreeEntityValueHOC as AntHOCTreeEntityValueHOC } from '@baifendian/adhere-ui-anthoc';
import type { TreeEntityValueHOCProps } from '@baifendian/adhere-ui-anthoc/es/types';

const DEFAULT_TREE_DATA_PROP = 'treeData';

const TreeEntityValueHOC = memo<
  TreeEntityValueHOCProps & {
    getTreeDataByDataSource?: (dataSource?: any) => any;
  }
>(({ children, ...props }) => {
  const [treeData, setTreeData] = useState([]);

  const dataSourceStore = useRef<Map<number | string | symbol, any[]>>(
    new Map<number | string | symbol, any[]>(),
  );

  const targetChildren = cloneElement(children, {
    [props.treeDataProp ?? DEFAULT_TREE_DATA_PROP]: treeData,
    ...(children.props ?? {}),
    onDataSourceChange: (_treeData, extra) => {
      if (extra) {
        if (extra.type === 'paging') {
          if (
            extra?.info?.page !== undefined &&
            extra?.info?.page !== null &&
            extra?.info?.page !== '' &&
            extra?.info?.page !== 0 &&
            typeof extra?.info?.page === 'number'
          ) {
            const targetDataSource = props?.getTreeDataByDataSource?.(_treeData) ?? _treeData;

            dataSourceStore.current.set(extra?.info?.page, targetDataSource);

            // @ts-ignore
            setTreeData(Array.from(dataSourceStore.current.values()).flat());
          }
        }
      } else {
        setTreeData(props?.getTreeDataByDataSource?.(_treeData) ?? _treeData);
      }
    },
  });

  return <AntHOCTreeEntityValueHOC {...props}>{targetChildren}</AntHOCTreeEntityValueHOC>;
});

export default TreeEntityValueHOC;
