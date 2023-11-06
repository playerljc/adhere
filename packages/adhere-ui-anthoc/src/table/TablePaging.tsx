import { useMount, useUpdateEffect } from 'ahooks';
import { SelectProps } from 'antd';
import React, { memo, useMemo, useState } from 'react';
import type { FC } from 'react';

import { TablePagingProps } from '../types';
import CheckboxPagingTable from './CheckboxPagingTable';
import RadioPagingTable from './RadioPagingTable';
import usePagingRenderProps from './usePagingRenderProps';

/**
 * TablePaging
 * @param mode
 * @param value
 * @param onChange
 * @param pagingProps
 * @param tablePagingProps
 * @constructor
 */
const TablePaging: FC<TablePagingProps<any>> = ({
  mode,
  value,
  onChange,
  pagingProps,
  tablePagingProps,
}) => {
  const [currentValue, setCurrentValue] = useState(value);

  const { isMultiple, options, fetchData, renderProps } = usePagingRenderProps({
    tablePagingProps,
    mode,
    ...pagingProps,
  });

  const onTablePagingChange = useMemo<SelectProps['onChange']>(
    () => (_value, option) => {
      setCurrentValue(_value);
      onChange?.(_value, option);
    },
    [onChange],
  );

  useMount(() => {
    fetchData();
  });

  useUpdateEffect(() => {
    setCurrentValue(value);
  }, [value]);

  return (
    <>
      {isMultiple && (
        <CheckboxPagingTable
          {...renderProps({
            value: currentValue,
            onChange: onTablePagingChange,
            options,
          })}
        />
      )}
      {!isMultiple && (
        <RadioPagingTable
          {...renderProps({
            value: currentValue,
            onChange: onTablePagingChange,
            options,
          })}
        />
      )}
    </>
  );
};

export default memo(TablePaging);
