import { useMount, useUpdateEffect } from 'ahooks';
import type { SelectProps } from 'antd';
import React, { memo, useCallback, useMemo, useRef, useState } from 'react';

import Suspense from '@baifendian/adhere-ui-suspense';
import ASync from '@baifendian/adhere-ui-suspense/es/Async';

import type { DisplayNameInternal, TablePagingProps } from '../types';
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
 * @param isSuspenseAsync
 * @param suspenseProps
 * @constructor
 */
const InternalTablePaging = memo<TablePagingProps<any>>(
  ({
    mode,
    value,
    onChange,
    pagingProps,
    tablePagingProps,
    isSuspenseAsync = true,
    suspenseProps,
  }) => {
    const [currentValue, setCurrentValue] = useState(value);

    const suspenseRef = useRef<ASync | null>(null);

    const { isMultiple, options, fetchData, renderProps, paging } = usePagingRenderProps({
      tablePagingProps,
      mode,
      ...pagingProps,
      suspenseRef: suspenseRef.current,
    });

    const onTablePagingChange = useMemo<SelectProps['onChange']>(
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
            // @ts-ignore
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

    const tableProps = renderProps({
      value: currentValue,
      onChange: onTablePagingChange,
      options,
    });

    return render([
      isMultiple && <CheckboxPagingTable {...tableProps} />,
      !isMultiple && <RadioPagingTable {...tableProps} />,
    ]);
  },
);

const TablePaging = InternalTablePaging as DisplayNameInternal<typeof InternalTablePaging>;
TablePaging.displayName = 'TablePaging';

export default TablePaging;
