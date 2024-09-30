import { useMount } from 'ahooks';
import uniqBy from 'lodash.uniqby';
import React, { memo, useMemo } from 'react';

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
      fetchData,
      renderProps,
    } = usePagingRenderProps({
      listPagingProps,
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
