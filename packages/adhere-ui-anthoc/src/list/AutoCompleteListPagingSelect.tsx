import React, { memo, useMemo } from 'react';

import AutoCompleteMultipleSelect from '../multiple-select/AutoCompleteMultipleSelect';
import AutoCompleteSelect from '../select/AutoCompleteSelect';
import type { AutoCompleteListPagingSelectProps, DisplayNameInternal } from '../types';
import useAutoCompleteFetchLoading from '../useAutoCompleteFetchLoading';
import CheckboxPagingList from './CheckboxPagingList';
import RadioPagingList from './RadioPagingList';
import usePagingRenderProps from './usePagingRenderProps';

/**
 * AutoCompleteListPagingSelect
 * @param loadData
 * @param listPagingProps
 * @param props
 * @constructor
 */
const InternalAutoCompleteListPagingSelect = memo<AutoCompleteListPagingSelectProps>(
  ({ pagingProps, listPagingProps, ...props }) => {
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
      listPagingProps,
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
            setTimeout(() => resolve(null), 300);
          });
        }}
      >
        {({ originNode, loading, ...rest }) => (
          <>
            {loading && fetchLoading}
            {!loading && isMultiple && <CheckboxPagingList {...renderProps(rest)} />}
            {!loading && !isMultiple && <RadioPagingList {...renderProps(rest)} />}
          </>
        )}
      </Component>
    );
  },
);

const AutoCompleteListPagingSelect = InternalAutoCompleteListPagingSelect as DisplayNameInternal<
  typeof InternalAutoCompleteListPagingSelect
>;
AutoCompleteListPagingSelect.displayName = 'AutoCompleteListPagingSelect';

export default AutoCompleteListPagingSelect;
