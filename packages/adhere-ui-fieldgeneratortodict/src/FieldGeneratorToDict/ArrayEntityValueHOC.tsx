import React, { cloneElement, isValidElement, memo, useRef, useState } from 'react';
import type { ReactElement } from 'react';

import { ArrayEntityValueHOC as AntHOCArrayEntityValueHOC } from '@baifendian/adhere-ui-anthoc';
import type { ArrayEntityValueHOCProps } from '@baifendian/adhere-ui-anthoc/es/types';

const ArrayEntityValueHOC = memo<
  ArrayEntityValueHOCProps & {
    getOptionsByDataSource?: (dataSource?: any) => any;
  }
>(({ children, ...props }) => {
  const [options, setOptions] = useState<any[]>([]);

  const dataSourceStore = useRef<Map<number, any[]>>(new Map<number, any[]>());

  const onDataSourceChange = (_dataSource, extra) => {
    if (extra?.type === 'paging') {
      const page = extra?.info?.page;
      if (typeof page === 'number' && page > 0) {
        const targetDataSource = props?.getOptionsByDataSource?.(_dataSource) ?? _dataSource;

        if (page === 1) {
          dataSourceStore.current.clear();
        }

        dataSourceStore.current.set(page, targetDataSource);
        setOptions(Array.from(dataSourceStore.current.values()).flat());
      }
    } else if (!extra) {
      setOptions(props?.getOptionsByDataSource?.(_dataSource) ?? _dataSource);
    }

    if (isValidElement(children)) {
      (children.props as { onDataSourceChange?: typeof onDataSourceChange })?.onDataSourceChange?.(
        _dataSource,
        extra,
      );
    }
  };

  const optionsProp = props.optionsProp ?? 'options';
  const targetChildren = isValidElement(children)
    ? cloneElement(children as ReactElement<any>, {
        ...(children.props as object),
        [optionsProp]: options,
        onDataSourceChange,
      })
    : children;

  return (
    <AntHOCArrayEntityValueHOC {...props} options={options}>
      {targetChildren}
    </AntHOCArrayEntityValueHOC>
  );
});

export default ArrayEntityValueHOC;
