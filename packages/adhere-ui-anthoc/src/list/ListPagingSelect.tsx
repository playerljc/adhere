import { useMount, useUpdateEffect } from 'ahooks';
import uniqBy from 'lodash.uniqby';
import React, { memo, useMemo, useState } from 'react';

import DropdownRenderSelect from '../select/DropdownRenderSelect';
import type { DisplayNameInternal, ListPagingSelectProps } from '../types';
import CheckboxPagingList from './CheckboxPagingList';
import RadioPagingList from './RadioPagingList';
import usePagingRenderProps from './usePagingRenderProps';

/**
 * ListPagingSelect
 * @param loadData
 * @param listPagingProps
 * @param props
 * @constructor
 */
const InternalListPagingSelect = memo<ListPagingSelectProps<any>>(
  ({ pagingProps, listPagingProps, defaultOptions, ...props }) => {
    const {
      isMultiple,
      inputValue,
      options,
      setInputValue,
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

    return (
      <DropdownRenderSelect
        {...props}
        defaultInputValue={inputValue}
        options={allOptions}
        onSearch={setInputValue}
        onClear={() => {
          setInputValue('');
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
