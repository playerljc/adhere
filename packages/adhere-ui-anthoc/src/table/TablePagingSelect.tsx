import { useMount } from 'ahooks';
import React, { memo } from 'react';

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
  ({ pagingProps, tablePagingProps, ...props }) => {
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

    useMount(() => {
      fetchData();
    });

    return (
      <DropdownRenderSelect
        {...props}
        defaultInputValue={inputValue}
        options={options}
        onSearch={setInputValue}
        onClear={() => {
          setPaging({
            page: defaultCurrentPage,
            limit: defaultPageSize,
          });
        }}
      >
        {({ originNode, ...rest }) => {
          const tableProps = renderProps(rest);

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
