import React, { cloneElement, isValidElement, memo, useRef, useState } from 'react';
import type { ReactElement } from 'react';

import { TreeEntityValueHOC as AntHOCTreeEntityValueHOC } from '@baifendian/adhere-ui-anthoc';
import type { TreeEntityValueHOCProps } from '@baifendian/adhere-ui-anthoc/es/types';

const TreeEntityValueHOC = memo<
  TreeEntityValueHOCProps & {
    getTreeDataByDataSource?: (dataSource?: any) => any;
  }
>(({ children, ...props }) => {
  const [treeData, setTreeData] = useState<any[]>([]);

  const dataSourceStore = useRef<Map<number, any[]>>(new Map<number, any[]>());

  const onDataSourceChange = (_treeData, extra) => {
    if (extra?.type === 'paging') {
      const page = extra?.info?.page;
      if (typeof page === 'number' && page > 0) {
        const targetDataSource = props?.getTreeDataByDataSource?.(_treeData) ?? _treeData;

        if (page === 1) {
          dataSourceStore.current.clear();
        }

        dataSourceStore.current.set(page, targetDataSource);
        setTreeData(Array.from(dataSourceStore.current.values()).flat());
      }
    } else if (!extra) {
      setTreeData(props?.getTreeDataByDataSource?.(_treeData) ?? _treeData);
    }

    if (isValidElement(children)) {
      (children.props as { onDataSourceChange?: typeof onDataSourceChange })?.onDataSourceChange?.(
        _treeData,
        extra,
      );
    }
  };

  const treeDataProp = props.treeDataProp ?? 'treeData';
  const targetChildren = isValidElement(children)
    ? cloneElement(children as ReactElement<any>, {
        ...(children.props as object),
        [treeDataProp]: treeData,
        onDataSourceChange,
      })
    : children;

  return (
    <AntHOCTreeEntityValueHOC {...props} treeData={treeData}>
      {targetChildren}
    </AntHOCTreeEntityValueHOC>
  );
});

export default TreeEntityValueHOC;
