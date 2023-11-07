import { useMount } from 'ahooks';
import { useUpdateEffect } from 'ahooks';
import type { SelectProps } from 'antd';
import React, { memo, useCallback, useMemo, useRef, useState } from 'react';

import Suspense from '@baifendian/adhere-ui-suspense';
import ASync from '@baifendian/adhere-ui-suspense/es/Async';

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
 * @param isSuspenseAsync
 * @param suspenseProps
 * @constructor
 */
const ListPaging = memo<ListPagingProps<any>>(
  ({
    mode,
    value,
    onChange,
    pagingProps,
    listPagingProps,
    isSuspenseAsync = true,
    suspenseProps,
  }) => {
    const [currentValue, setCurrentValue] = useState(value);

    const suspenseRef = useRef<ASync | null>(null);

    const { isMultiple, options, fetchData, renderProps, paging } = usePagingRenderProps({
      listPagingProps,
      mode,
      ...pagingProps,
      suspenseRef: suspenseRef.current,
    });

    const onListPagingChange = useMemo<SelectProps['onChange']>(
      () => (_value, option) => {
        setCurrentValue(_value);
        onChange?.(_value, option);
      },
      [onChange],
    );

    const isEmpty = useCallback(() => paging.page === 1 && !options.length, [paging, options]);

    useMount(() => {
      if (!isSuspenseAsync) {
        fetchData();
      }
    });

    useUpdateEffect(() => {
      if (!isSuspenseAsync) {
        fetchData();
      } else {
        suspenseRef?.current?.reset?.();
      }
    }, [isSuspenseAsync, suspenseRef.current]);

    useUpdateEffect(() => {
      setCurrentValue(value);
    }, [value]);

    const render = useCallback(
      (children) => {
        if (isSuspenseAsync)
          return (
            <Suspense.ASync
              // @ts-ignore
              ref={suspenseRef}
              {...(suspenseProps ?? {})}
              fetchData={fetchData}
              isEmpty={isEmpty}
            >
              {children}
            </Suspense.ASync>
          );

        return <>{children}</>;
      },
      [isSuspenseAsync, suspenseProps, paging, options],
    );

    return render([
      isMultiple && (
        <CheckboxPagingList
          {...renderProps({
            value: currentValue,
            onChange: onListPagingChange,
            options,
          })}
        />
      ),
      !isMultiple && (
        <RadioPagingList
          {...renderProps({
            value: currentValue,
            onChange: onListPagingChange,
            options,
          })}
        />
      ),
    ]);
  },
);

export default ListPaging;
