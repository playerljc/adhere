import { useUpdateEffect } from 'ahooks';
import { useEffect, useMemo, useRef, useState } from 'react';

import type { UsePagingTableRenderProps } from '../types';

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
  suspenseRef,
  onDataSourceChange,
}) => {
  const kw = useRef<string | undefined>(undefined);
  const defaultPageSize = defaultLimit ?? DEFAULT_LIMIT;
  const defaultCurrentPage = defaultPage ?? DEFAULT_PAGE;

  // 请求序号：服务器搜索场景下，若旧请求（如网络较慢）晚于新请求返回，用它来丢弃过期响应，
  // 避免连续输入时结果被过期数据覆盖，出现"卡顿/跳动"的错觉
  const requestIdRef = useRef(0);

  const [inputValue, setInputValue] = useState('');
  const [paging, setPaging] = useState({
    page: defaultCurrentPage,
    limit: defaultPageSize,
  });

  // 用 ref 始终持有最新的 paging，供 fetchData 直接读取，避免在 state updater 中执行副作用
  const pagingRef = useRef(paging);
  useEffect(() => {
    pagingRef.current = paging;
  });

  const [totalCount, setTotalCount] = useState<number>(0);
  const [options, setOptions] = useState<any[]>([]);

  const isMultiple = useMemo(() => mode === 'multiple', [mode]);

  function fetchData() {
    const { page: _currentPage, limit: _currentLimit } = pagingRef.current;

    if (!loadData) {
      return Promise.resolve();
    }

    const requestId = ++requestIdRef.current;

    return new Promise((resolve, reject) => {
      loadData(_currentPage, _currentLimit, kw.current)
        ?.then?.((res) => {
          // 丢弃过期响应：请求发出后又有更新的请求发出（如继续输入触发了新的服务器搜索），
          // 此时即使旧请求先到也不应用它的结果，防止把新结果覆盖回旧结果
          if (requestId !== requestIdRef.current) {
            resolve(res);
            return;
          }

          const { totalCount, data } = res;

          setTotalCount(totalCount);
          setOptions(data);

          onDataSourceChange?.(_currentPage, data);

          resolve(res);
        })
        .catch((error) => reject(error));
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
    if (suspenseRef) {
      suspenseRef.fetchData?.();
      return;
    }

    fetchData();
  }, [paging]);

  return {
    inputValue,
    options,
    paging,
    setInputValue,
    setPaging,
    defaultCurrentPage,
    defaultPageSize,
    isMultiple,
    fetchData,
    setKw,
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
