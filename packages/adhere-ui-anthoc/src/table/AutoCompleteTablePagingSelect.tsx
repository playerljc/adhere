import React, { memo, useMemo } from 'react';

import AutoCompleteMultipleSelect from '../multiple-select/AutoCompleteMultipleSelect';
import AutoCompleteSelect from '../select/AutoCompleteSelect';
import type { AutoCompleteTablePagingSelectProps, DisplayNameInternal } from '../types';
import useAutoCompleteFetchLoading from '../useAutoCompleteFetchLoading';
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
const InternalAutoCompleteTablePagingSelect = memo<AutoCompleteTablePagingSelectProps>(
  ({ pagingProps, tablePagingProps, ...props }) => {
    const fetchLoading = useAutoCompleteFetchLoading(props.renderLoading);

    const {
      isMultiple,
      options,
      setInputValue,
      defaultCurrentPage,
      defaultPageSize,
      setPaging,
      setKw,
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
        loadData={(_kw) => {
          setKw(_kw);
          setPaging({
            page: defaultCurrentPage,
            limit: defaultPageSize,
          });

          return new Promise((resolve) => {
            setTimeout(() => resolve(), 300);
          });
        }}
      >
        {({ originNode, loading, ...rest }) => (
          <>
            {loading && fetchLoading}
            {!loading && isMultiple && <CheckboxPagingTable {...renderProps(rest)} />}
            {!loading && !isMultiple && <RadioPagingTable {...renderProps(rest)} />}
          </>
        )}
      </Component>
    );
  },
);

const AutoCompleteTablePagingSelect = InternalAutoCompleteTablePagingSelect as DisplayNameInternal<
  typeof InternalAutoCompleteTablePagingSelect
>;
AutoCompleteTablePagingSelect.displayName = 'AutoCompleteTablePagingSelect';

export default AutoCompleteTablePagingSelect;
