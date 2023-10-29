import { useMount, useUpdateEffect } from 'ahooks';
import React, { memo, useState } from 'react';
import type { FC } from 'react';

import DropdownRenderSelect from '../select/DropdownRenderSelect';
import type { TablePagingSelectProps } from '../types';
import CheckboxPagingTable from './CheckboxPagingTable';
import RadioPagingTable from './RadioPagingTable';

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 10;

/**
 * TablePagingSelect
 * @param loadData
 * @param defaultPage
 * @param defaultLimit
 * @param tablePagingProps
 * @param props
 * @constructor
 */
const TablePagingSelect: FC<TablePagingSelectProps<any>> = ({
  loadData,
  defaultPage,
  defaultLimit,
  tablePagingProps,
  ...props
}) => {
  const defaultPageSize = defaultLimit ?? DEFAULT_LIMIT;
  const defaultCurrentPage = defaultPage ?? DEFAULT_PAGE;

  const [inputValue, setInputValue] = useState('');
  const [paging, setPaging] = useState({
    page: defaultCurrentPage,
    limit: defaultPageSize,
  });

  const [totalCount, setTotalCount] = useState<number>(0);
  const [options, setOptions] = useState<any>([]);

  function fetchData() {
    return loadData(paging.page, paging.limit).then(({ totalCount, data }) => {
      setTotalCount(totalCount);
      setOptions(data);
    });
  }

  function onPagingChange(page, pageSize) {
    setPaging({
      page,
      limit: pageSize,
    });

    setInputValue('');
  }

  function onPagingShowSizeChange(current, size) {
    setPaging({
      page: current,
      limit: size,
    });

    setInputValue('');
  }

  useMount(() => {
    fetchData();
  });

  useUpdateEffect(() => {
    setPaging({
      page: defaultCurrentPage,
      limit: defaultPageSize,
    });
  }, [defaultPage, defaultLimit]);

  useUpdateEffect(() => {
    fetchData();
  }, [paging]);

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
      {({ value, onChange, options: _options }) => {
        const pagingTableProps = {
          value,
          onChange,
          options: _options,
          totalCount,
          paging,
          defaultLimit: defaultPageSize,
          onPagingChange,
          onPagingShowSizeChange,
        };

        return (
          <>
            {'mode' in props && props.mode === 'multiple' && (
              <CheckboxPagingTable {...tablePagingProps} {...pagingTableProps} />
            )}
            {!('mode' in props) && <RadioPagingTable {...tablePagingProps} {...pagingTableProps} />}
          </>
        );
      }}
    </DropdownRenderSelect>
  );
};

export default memo(TablePagingSelect);
