import { useUpdateEffect } from 'ahooks';
import type { CheckListItemProps } from 'antd-mobile';
import { useCallback, useMemo, useRef, useState } from 'react';

import { DEFAULT_LIMIT } from './Paging';

/**
 * UseAutoCompletePaging
 * @description 适配 AutoComplete 的 props
 * @param defaultSearchDataSource
 * @param pagingComponentProps
 * @param loadData
 * @param onDataSourceChange
 * @constructor
 */
function UseAutoCompletePaging<Option>({
  defaultSearchDataSource,
  pagingComponentProps,
  loadData,
  onDataSourceChange,
}) {
  // 是否是第一次加载
  const isFirst = useRef(false);

  // 查询关键字
  const kw = useRef<string | undefined>(undefined);

  // 查询数据
  const [searchDataSource, setSearchDataSource] = useState<{
    data: CheckListItemProps[];
    total: number;
  }>({
    data: defaultSearchDataSource ?? [],
    total: (defaultSearchDataSource ?? []).length,
  });

  // 是否是本地分页
  const isLocal = useMemo(
    () =>
      'isLocal' in pagingComponentProps?.pagingProps
        ? pagingComponentProps?.pagingProps?.isLocal
        : true,
    [pagingComponentProps?.pagingProps?.isLocal],
  );

  // 适配 AutoComplete 的 props
  const targetPagingComponentProps = useMemo(() => {
    const result = pagingComponentProps;

    // 如果不是本地分页，就不需要加载数据
    if (!isLocal) {
      result.pagingProps.onLoad = (_page, _limit) =>
        new Promise((resolve) => {
          if (isFirst.current) {
            isFirst.current = false;
            resolve(searchDataSource);
            return;
          }

          loadData?.(kw.current, _page, _limit)?.then?.((_pagingData) => {
            onDataSourceChange?.(kw.current, _pagingData.data);

            resolve(_pagingData);
          });
        });
    }

    return result;
  }, [pagingComponentProps, isLocal, searchDataSource, loadData]);

  // AutoCompleteLoadData
  const autoCompleteLoadData = useCallback(
    (_kw) => {
      isFirst.current = true;

      kw.current = _kw;

      const params: [string | undefined, undefined, number | undefined] = [
        _kw,
        undefined,
        undefined,
      ];

      if (!isLocal) {
        params.push(1, pagingComponentProps?.pagingProps?.defaultPaging?.limit ?? DEFAULT_LIMIT);
      }

      // @ts-ignore
      return loadData?.(...params.filter((t) => !!t))?.then?.((_pagingData) => {
        setSearchDataSource(_pagingData);

        onDataSourceChange?.(1, _pagingData.data);

        return _pagingData;
      });
    },
    [isLocal, loadData, pagingComponentProps],
  );

  useUpdateEffect(() => {
    setSearchDataSource({
      data: defaultSearchDataSource ?? [],
      total: (defaultSearchDataSource ?? []).length,
    });
  }, [defaultSearchDataSource]);

  return {
    searchDataSource,
    targetPagingComponentProps,
    autoCompleteLoadData,
  };
}

export default UseAutoCompletePaging;
