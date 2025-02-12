import { cloneElement, memo, useMemo, useRef, useState } from 'react';

import type { DisplayNameInternal, PagingEntityValueHOCProps } from '../types';
import useArrayEntityValueHOC from '../useArrayEntityValueHOC';

const InternalPagingEntityValueHOC = memo<PagingEntityValueHOCProps>((props) => {
  const [options, setOptions] = useState<any[]>([]);

  const dataSourceStore = useRef<Map<number, any[]>>(new Map<number, any[]>());

  const pagingPropsPath = useMemo(() => {
    if (props.pagingPropsPath) return props.pagingPropsPath;

    return ['pagingProps'];
  }, [props.pagingPropsPath]);

  /**
   * createPagingPropsHOC
   */
  function createPagingPropsHOC() {
    // pagingCheckListProps: {
    //   ...(props?.children?.props?.pagingCheckListProps ?? {}),
    //   pagingProps: {
    //      ...(props?.children?.props?.pagingCheckListProps.pagingProps ?? {}),
    //         onDataSourceChange: (page, _dataSource) => {
    //       const targetDataSource = props?.getOptionsByDataSource?.(_dataSource) ?? _dataSource;
    //
    //       dataSourceStore.current.set(page, targetDataSource);
    //
    //       setOptions(Array.from(dataSourceStore.current.values()).flat());
    //     },
    //   },
    // }
    let hoc = {};
    let childrenProps = props?.children?.props;

    const pagingProps = pagingPropsPath.reduce<any>((hoc, path) => {
      hoc[path] = {
        ...(childrenProps?.[path] ?? {}),
      };
      childrenProps = childrenProps?.[path];

      return hoc[path];
    }, hoc);

    pagingProps.onDataSourceChange = (page, _dataSource) => {
      const targetDataSource = props?.getOptionsByDataSource?.(_dataSource) ?? _dataSource;

      dataSourceStore.current.set(page, targetDataSource);

      setOptions(Array.from(dataSourceStore.current.values()).flat());
    };

    return hoc;
  }

  const children = cloneElement(props.children, {
    ...(props?.children?.props ?? {}),
    ...createPagingPropsHOC(),
  });

  return useArrayEntityValueHOC({ ...props, children, options });
});

const PagingEntityValueHOC = InternalPagingEntityValueHOC as DisplayNameInternal<
  typeof InternalPagingEntityValueHOC
>;

export default PagingEntityValueHOC;
