import React, { memo } from 'react';
import type { FC } from 'react';

import DropdownRenderSelect from '../select/DropdownRenderSelect';
import type { TablePagingSelectProps } from '../types';
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
const TablePagingSelect: FC<TablePagingSelectProps<any>> = ({
  pagingProps,
  tablePagingProps,
  ...props
}) => {
  const {
    isMultiple,
    inputValue,
    options,
    setInputValue,
    defaultCurrentPage,
    defaultPageSize,
    setPaging,
    renderProps,
  } = usePagingRenderProps({
    tablePagingProps,
    mode: props.mode,
    ...pagingProps,
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
      {({ originNode, ...rest }) => (
        <>
          {isMultiple && <CheckboxPagingTable {...renderProps(rest)} />}
          {!isMultiple && <RadioPagingTable {...renderProps(rest)} />}
        </>
      )}
    </DropdownRenderSelect>
  );
};

export default memo(TablePagingSelect);
