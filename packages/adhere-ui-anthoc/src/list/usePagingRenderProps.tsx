import { useUpdateEffect } from 'ahooks';
import { useMemo, useRef, useState } from 'react';

import { UsePagingListRenderProps } from '../types';

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 10;

/**
 * usePagingListRenderProps
 */
const usePagingListRenderProps: UsePagingListRenderProps = ({
  loadData,
  defaultPage,
  defaultLimit,
  listPagingProps,
  mode,
}) => {
  const kw = useRef<string | undefined>(undefined);
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
    return loadData?.(paging.page, paging.limit, kw.current)?.then?.(({ totalCount, data }) => {
      console.log('totalCount', totalCount);
      console.log('data', data);
      setTotalCount(totalCount);
      setOptions(data);
    });
  }

  function setKw(_kw) {
    kw.current = _kw;
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
    fetchData,
    setKw,
    renderProps: (arg) => ({
      ...(listPagingProps ?? {}),
      ...arg,
      totalCount,
      paging,
      defaultLimit,
      onPagingChange,
      onPagingShowSizeChange,
    }),
  };
};

export default usePagingListRenderProps;
