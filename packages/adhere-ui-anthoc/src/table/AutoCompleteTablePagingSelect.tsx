import type { FC } from 'react';
import React, { memo, useMemo } from 'react';

import AutoCompleteMultipleSelect from '../multiple-select/AutoCompleteMultipleSelect';
import AutoCompleteSelect from '../select/AutoCompleteSelect';
import type { AutoCompleteTablePagingSelectProps } from '../types';
import CheckboxPagingTable from './CheckboxPagingTable';
import RadioPagingTable from './RadioPagingTable';
import usePagingRenderProps from './usePagingRenderProps';

/**
 * AutoCompleteTablePagingSelect
 * @param loadData
 * @param tablePagingProps
 * @param props
 * @constructor
 */
const AutoCompleteTablePagingSelect: FC<AutoCompleteTablePagingSelectProps> = ({
  pagingProps,
  tablePagingProps,
  ...props
}) => {
  const {
    isMultiple,
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

  const Component = useMemo(
    () => (isMultiple ? AutoCompleteMultipleSelect : AutoCompleteSelect),
    [isMultiple],
  );

  return (
    <Component
      {...props}
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
    </Component>
  );
};

export default memo(AutoCompleteTablePagingSelect);
