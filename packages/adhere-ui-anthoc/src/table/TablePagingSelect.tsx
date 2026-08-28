import { useMount, useUpdateEffect } from 'ahooks';
import uniqBy from 'lodash.uniqby';
import React, { memo, useMemo, useState } from 'react';

import DropdownRenderSelect from '../select/DropdownRenderSelect';
import type { DisplayNameInternal, TablePagingSelectProps } from '../types';
import CheckboxPagingTable from './CheckboxPagingTable';
import RadioPagingTable from './RadioPagingTable';
import usePagingRenderProps from './usePagingRenderProps';

/**
 * TablePagingSelect
 * @param loadData
 * @param tablePagingProps
 * @param props
 * @constructor
 */
const InternalTablePagingSelect = memo<TablePagingSelectProps<any>>(
  ({ pagingProps, tablePagingProps, defaultOptions, ...props }) => {
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
      tablePagingProps,
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
          const tableProps = renderProps({
            ...rest,
            options: targetOptions,
          });

          return (
            <>
              {isMultiple && <CheckboxPagingTable {...tableProps} />}
              {!isMultiple && <RadioPagingTable {...tableProps} />}
            </>
          );
        }}
      </DropdownRenderSelect>
    );
  },
);

const TablePagingSelect = InternalTablePagingSelect as DisplayNameInternal<
  typeof InternalTablePagingSelect
>;
TablePagingSelect.displayName = 'TablePagingSelect';

export default TablePagingSelect;
