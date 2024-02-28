import { useUpdateEffect } from 'ahooks';
import { useMemo, useRef, useState } from 'react';

import type { UsePagingTreeTableRenderProps } from '../types';

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 10;

/**
 * usePagingTreeRenderProps
 */
const usePagingTreeRenderProps: UsePagingTreeTableRenderProps = ({
  loadData,
  defaultPage,
  defaultLimit,
  tablePagingProps,
  multiple,
  treeDataSimpleMode,
  suspenseRef,
  onDataSourceChange,
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
  const [treeData, setTreeData] = useState<any[]>([]);

  const isMultiple = useMemo(() => !!multiple, [multiple]);

  const isTreeDataSimpleMode = useMemo(() => !!treeDataSimpleMode, [treeDataSimpleMode]);

  function fetchData() {
    return new Promise((resolve, reject) => {
      setPaging((_paging) => {
        const { page: _currentPage, limit: _currentLimit } = _paging;

        loadData?.(_currentPage, _currentLimit, kw.current)
          ?.then?.((res) => {
            const { totalCount, data } = res;

            setTotalCount(totalCount);
            setTreeData(data);

            onDataSourceChange?.(_currentPage, data);

            resolve(res);
          })
          .catch((error) => reject(error));

        return _paging;
      });
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
    treeData,
    paging,
    setInputValue,
    setPaging,
    defaultCurrentPage,
    defaultPageSize,
    isMultiple,
    isTreeDataSimpleMode,
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

export default usePagingTreeRenderProps;
