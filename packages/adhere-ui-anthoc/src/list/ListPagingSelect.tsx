import { useDebounceFn, useMount, useUpdateEffect } from 'ahooks';
import uniqBy from 'lodash.uniqby';
import React, { memo, useMemo, useState } from 'react';

import DropdownRenderSelect from '../select/DropdownRenderSelect';
import type { DisplayNameInternal, ListPagingSelectProps } from '../types';
import { buildSearchQueryParams } from '../util';
import CheckboxPagingList from './CheckboxPagingList';
import RadioPagingList from './RadioPagingList';
import usePagingRenderProps from './usePagingRenderProps';

/**
 * ListPagingSelect
 * @param loadData
 * @param listPagingProps
 * @param optionFilterProp 服务器搜索时用于构造查询参数的字段名，未传入时默认 'label'
 * @param localFilter 是否本地过滤，默认 true；设为 false 时走服务器搜索
 * @param searchDebounceWait 服务器搜索时连续输入的防抖等待时间（ms），默认 300
 * @param props
 * @constructor
 */
const InternalListPagingSelect = memo<ListPagingSelectProps<any>>(
  ({
    pagingProps,
    listPagingProps,
    defaultOptions,
    optionFilterProp,
    localFilter = true,
    searchDebounceWait = 300,
    ...props
  }) => {
    const {
      isMultiple,
      inputValue,
      options,
      setInputValue,
      setKw,
      defaultCurrentPage,
      defaultPageSize,
      setPaging,
      fetchData,
      renderProps,
    } = usePagingRenderProps({
      listPagingProps,
      mode: props.mode,
      ...pagingProps,
    });

    const [selectedRows, setSelectedRows] = useState<any[]>(defaultOptions ?? []);

    useUpdateEffect(() => {
      setSelectedRows(defaultOptions ?? []);
    }, [defaultOptions]);

    const allOptions = useMemo(
      () => uniqBy([...(options ?? []), ...selectedRows], 'value'),
      [options, selectedRows],
    );

    const onChange = (_values) => {
      setSelectedRows((_selectedRows) => {
        if (!_values.length) return [];

        const rows = _values
          .map((_value) => options.find((t) => t.value === _value))
          .filter((t) => !!t);
        return uniqBy([..._selectedRows, ...rows], 'value');
      });

      props?.onChange?.(_values);
    };

    useMount(() => {
      fetchData();
    });

    // 服务器搜索场景下，连续输入做防抖后再真正发起请求，避免每敲一个字符就查询一次
    const { run: runRemoteSearch, cancel: cancelRemoteSearch } = useDebounceFn(
      (v: string) => {
        setKw(buildSearchQueryParams(optionFilterProp, v));
        setPaging({
          page: defaultCurrentPage,
          limit: defaultPageSize,
        });
      },
      { wait: searchDebounceWait },
    );

    const onSearch = (v: string) => {
      setInputValue(v);

      // localFilter=false 时走服务器搜索：把 optionFilterProp 对应字段和关键字组成查询参数，防抖后重新请求第一页
      if (!localFilter) {
        runRemoteSearch(v);
      }
    };

    return (
      <DropdownRenderSelect
        {...props}
        optionFilterProp={optionFilterProp}
        localFilter={localFilter}
        defaultInputValue={inputValue}
        options={allOptions}
        onSearch={onSearch}
        onClear={() => {
          setInputValue('');

          if (!localFilter) {
            cancelRemoteSearch();
            setKw(undefined);
          }

          setPaging({
            page: defaultCurrentPage,
            limit: defaultPageSize,
          });
        }}
        onChange={onChange}
        onOpenChange={(nextOpen) => {
          if (!nextOpen) {
            // 下拉框关闭时同步清空外部搜索关键字，避免重新打开时数据仍是过滤后的结果
            setInputValue('');

            if (!localFilter) {
              // 服务器搜索模式下取消未执行的防抖请求，清空查询参数，重新请求默认（未过滤）的第一页数据
              cancelRemoteSearch();
              setKw(undefined);
              setPaging({
                page: defaultCurrentPage,
                limit: defaultPageSize,
              });
            }
          }
        }}
      >
        {({ originNode, ...rest }) => {
          const listProps = renderProps({
            ...rest,
            options: (rest.options ?? []).slice(0, defaultPageSize),
          });

          return (
            <>
              {isMultiple && <CheckboxPagingList {...listProps} />}
              {!isMultiple && <RadioPagingList {...listProps} />}
            </>
          );
        }}
      </DropdownRenderSelect>
    );
  },
);

const ListPagingSelect = InternalListPagingSelect as DisplayNameInternal<
  typeof InternalListPagingSelect
>;
ListPagingSelect.displayName = 'ListPagingSelect';

export default ListPagingSelect;
