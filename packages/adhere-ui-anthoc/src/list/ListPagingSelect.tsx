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
      setKw,
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

    const targetOptions = useMemo(
      () => (allOptions ?? []).slice(0, defaultPageSize),
      [defaultPageSize, allOptions],
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

    const onSearch = (v: string) => {
      setInputValue(v);
      setKw(v);
      setPaging({
        page: defaultCurrentPage,
        limit: defaultPageSize,
      });
    };

    useMount(() => {
      fetchData();
    });

    return (
      <DropdownRenderSelect
        {...props}
        localFilter={false}
        defaultInputValue={inputValue}
        options={allOptions}
        onSearch={onSearch}
        onClear={() => {
          setInputValue('');
          setKw(undefined);
          setPaging({
            page: defaultCurrentPage,
            limit: defaultPageSize,
          });
        }}
        onChange={onChange}
      >
        {({ originNode, ...rest }) => {
          const listProps = renderProps({
            ...rest,
            options: targetOptions,
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
