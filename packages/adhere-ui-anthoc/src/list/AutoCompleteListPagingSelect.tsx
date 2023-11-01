import type { FC } from 'react';
import React, { memo, useMemo } from 'react';

import AutoCompleteMultipleSelect from '../multiple-select/AutoCompleteMultipleSelect';
import AutoCompleteSelect from '../select/AutoCompleteSelect';
import type { AutoCompleteListPagingSelectProps } from '../types';
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
const AutoCompleteListPagingSelect: FC<AutoCompleteListPagingSelectProps> = ({
  pagingProps,
  listPagingProps,
  ...props
}) => {
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
          setTimeout(() => resolve(), 300);
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
};

export default memo(AutoCompleteListPagingSelect);
