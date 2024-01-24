import React, { cloneElement, memo, useRef, useState } from 'react';

import { ArrayEntityValueHOC as AntHOCArrayEntityValueHOC } from '@baifendian/adhere-ui-anthoc';
import type { ArrayEntityValueHOCProps } from '@baifendian/adhere-ui-anthoc/es/types';

const DEFAULT_OPTIONS_PROP = 'options';

const ArrayEntityValueHOC = memo<
  ArrayEntityValueHOCProps & {
    getOptionsByDataSource?: (dataSource?: any) => any;
  }
>(({ children, ...props }) => {
  const [options, setOptions] = useState<any[]>([]);

  const dataSourceStore = useRef<Map<number | string | symbol, any[]>>(
    new Map<number | string | symbol, any[]>(),
  );

  const targetChildren = cloneElement(children, {
    [props.optionsProp ?? DEFAULT_OPTIONS_PROP]: options,
    ...(children.props ?? {}),
    onDataSourceChange: (_dataSource, extra) => {
      if (extra) {
        if (extra.type === 'paging') {
          if (
            extra?.info?.page !== undefined &&
            extra?.info?.page !== null &&
            extra?.info?.page !== '' &&
            extra?.info?.page !== 0 &&
            typeof extra?.info?.page === 'number'
          ) {
            const targetDataSource = props?.getOptionsByDataSource?.(_dataSource) ?? _dataSource;

            dataSourceStore.current.set(extra?.info?.page, targetDataSource);

            setOptions(Array.from<any[]>(dataSourceStore.current.values()).flat());
          }
        } /*else if (extra.type === 'treeAsync') {
          if (
            extra?.info?.pid !== undefined &&
            extra?.info?.pid !== null &&
            extra?.info?.pid !== ''
          ) {
            dataSourceStore.current.set(extra?.info?.pid, _dataSource);

            setOptions(Array.from(dataSourceStore.current.values()).flat());
          }
        }*/
      } else {
        setOptions(props?.getOptionsByDataSource?.(_dataSource) ?? _dataSource);
      }
    },
  });

  return <AntHOCArrayEntityValueHOC {...props}>{targetChildren}</AntHOCArrayEntityValueHOC>;
});

export default ArrayEntityValueHOC;
