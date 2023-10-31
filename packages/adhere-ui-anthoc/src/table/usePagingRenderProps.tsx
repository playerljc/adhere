import { useMount, useUpdateEffect } from 'ahooks';
import { useMemo, useState } from 'react';

import { UsePagingTableRenderProps } from '../types';

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 10;

/**
 * usePagingTableRenderProps
 */
const usePagingTableRenderProps: UsePagingTableRenderProps = ({
  loadData,
  defaultPage,
  defaultLimit,
  tablePagingProps,
  mode,
}) => {
  const defaultPageSize = defaultLimit ?? DEFAULT_LIMIT;
  const defaultCurrentPage = defaultPage ?? DEFAULT_PAGE;

  const [inputValue, setInputValue] = useState('');
  const [paging, setPaging] = useState({
    page: defaultCurrentPage,
    limit: defaultPageSize,
  });

  const [totalCount, setTotalCount] = useState<number>(0);
  const [options, setOptions] = useState<any[]>([]);

  const isMultiple = useMemo(() => mode === 'multiple', [mode]);

  function fetchData() {
    return loadData?.(paging.page, paging.limit)?.then?.(({ totalCount, data }) => {
      setTotalCount(totalCount);
      setOptions(data);
    });
  }

  function onPagingChange(page, pageSize) {
    setPaging({
      page,
      limit: pageSize,
    });

    setInputValue('');
  }

  function onPagingShowSizeChange(current, size) {
    setPaging({
      page: current,
      limit: size,
    });

    setInputValue('');
  }

  useMount(() => {
    fetchData();
  });

  useUpdateEffect(() => {
    setPaging({
      page: defaultCurrentPage,
      limit: defaultPageSize,
    });
  }, [defaultPage, defaultLimit]);

  useUpdateEffect(() => {
    fetchData();
  }, [paging]);

  return {
    inputValue,
    options,
    setInputValue,
    setPaging,
    defaultCurrentPage,
    defaultPageSize,
    isMultiple,
    renderProps: (arg) => ({
      ...(tablePagingProps ?? {}),
      ...arg,
      totalCount,
      paging,
      defaultLimit,
      onPagingChange,
      onPagingShowSizeChange,
    }),
  };
};

export default usePagingTableRenderProps;
