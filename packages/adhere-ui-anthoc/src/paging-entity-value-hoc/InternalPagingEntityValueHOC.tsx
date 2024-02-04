import { cloneElement, memo, useRef, useState } from 'react';

import type { DisplayNameInternal, PagingEntityValueHOCProps } from '../types';
import useArrayEntityValueHOC from '../useArrayEntityValueHOC';

const InternalPagingEntityValueHOC = memo<PagingEntityValueHOCProps>((props) => {
  const [options, setOptions] = useState<any[]>([]);

  const dataSourceStore = useRef<Map<number, any[]>>(new Map<number, any[]>());

  const children = cloneElement(props.children, {
    ...(props?.children?.props ?? {}),
    pagingProps: {
      ...(props?.children?.props?.pagingProps ?? {}),
      onDataSourceChange: (page, _dataSource) => {
        const targetDataSource = props?.getOptionsByDataSource?.(_dataSource) ?? _dataSource;

        dataSourceStore.current.set(page, targetDataSource);

        setOptions(Array.from(dataSourceStore.current.values()).flat());
      },
    },
  });

  return useArrayEntityValueHOC({ ...props, children, options });
});

const PagingEntityValueHOC = InternalPagingEntityValueHOC as DisplayNameInternal<
  typeof InternalPagingEntityValueHOC
>;

export default PagingEntityValueHOC;
