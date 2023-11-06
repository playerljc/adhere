import { useMount } from 'ahooks';
import { useUpdateEffect } from 'ahooks';
import type { SelectProps } from 'antd';
import React, { memo, useMemo, useState } from 'react';
import type { FC } from 'react';

import type { ListPagingProps } from '../types';
import CheckboxPagingList from './CheckboxPagingList';
import RadioPagingList from './RadioPagingList';
import usePagingRenderProps from './usePagingRenderProps';

/**
 * ListPaging
 * @param mode
 * @param value
 * @param onChange
 * @param pagingProps
 * @param listPagingProps
 * @constructor
 */
const ListPaging: FC<ListPagingProps<any>> = ({
  mode,
  value,
  onChange,
  pagingProps,
  listPagingProps,
}) => {
  const [currentValue, setCurrentValue] = useState(value);

  const { isMultiple, options, fetchData, renderProps } = usePagingRenderProps({
    listPagingProps,
    mode,
    ...pagingProps,
  });

  const onListPagingChange = useMemo<SelectProps['onChange']>(
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
        <CheckboxPagingList
          {...renderProps({
            value: currentValue,
            onChange: onListPagingChange,
            options,
          })}
        />
      )}
      {!isMultiple && (
        <RadioPagingList
          {...renderProps({
            value: currentValue,
            onChange: onListPagingChange,
            options,
          })}
        />
      )}
    </>
  );
};

export default memo(ListPaging);
