import { useMount } from 'ahooks';
import uniqBy from 'lodash.uniqby';
import React, { memo, useMemo } from 'react';

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
      fetchData,
      renderProps,
    } = usePagingRenderProps({
      tablePagingProps,
      mode: props.mode,
      ...pagingProps,
    });

    const allOptions = useMemo(
      () => uniqBy([...(defaultOptions ?? []), ...(options ?? [])], 'value'),
      [defaultOptions, options],
    );

    const targetOptions = useMemo(() => {
      const optionKeys = options.map(({ value }) => value);
      return allOptions.filter(({ value }) => optionKeys.includes(value));
    }, [options, allOptions]);

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
          setPaging({
            page: defaultCurrentPage,
            limit: defaultPageSize,
          });
        }}
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
