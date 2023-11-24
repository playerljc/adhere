import { useMount } from 'ahooks';
import React, { memo } from 'react';

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
  ({ pagingProps, listPagingProps, ...props }) => {
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
        {({ originNode, ...rest }) => (
          <>
            {isMultiple && <CheckboxPagingList {...renderProps(rest)} />}
            {!isMultiple && <RadioPagingList {...renderProps(rest)} />}
          </>
        )}
      </DropdownRenderSelect>
    );
  },
);

const ListPagingSelect = InternalListPagingSelect as DisplayNameInternal<
  typeof InternalListPagingSelect
>;
ListPagingSelect.displayName = 'ListPagingSelect';

export default ListPagingSelect;
