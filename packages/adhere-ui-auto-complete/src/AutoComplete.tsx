import { useUpdateEffect } from 'ahooks';
import { Empty, Select, Spin } from 'antd';
import classNames from 'classnames';
import debounce from 'lodash.debounce';
import React, { memo, useCallback, useMemo, useRef, useState } from 'react';

import WatchMemoized from '@baifendian/adhere-util-watchmemoized';

import type { AutoCompleteProps } from './types';

const { memoized } = WatchMemoized;

const selectorPrefix = 'adhere-ui-auto-complete';

/**
 * AutoComplete
 * @param classNameWrap
 * @param styleWrap
 * @param renderLoading
 * @param debounceTimeout
 * @param options
 * @param loadData
 * @param defaultOptions
 * @param emptyContent
 * @param children
 * @param props
 * @constructor
 */
const AutoComplete = memo<AutoCompleteProps>(
  ({
    classNameWrap,
    styleWrap,
    renderLoading,
    debounceTimeout = 300,
    options,
    loadData,
    defaultOptions,
    emptyContent,
    children,
    ...props
  }) => {
    // const lock = useRef(false);

    const [fetching, setFetching] = useState(false);

    const [open, setOpen] = useState(false);

    const [selectedRows, setSelectedRows] = useState<any[]>(defaultOptions ?? []);

    const onSelectChangeStartTime = useRef<number>(0);

    const isMultiple = 'mode' in props && props.mode === 'multiple';

    const FetchLoading = useMemo(
      () =>
        renderLoading?.() ?? (
          <div className={`${selectorPrefix}-loading`}>
            <Spin size="large" />
          </div>
        ),
      [renderLoading],
    );

    /**
     * onSelectChange
     * @description 从下方组件触发的
     * @param _values
     */
    const onSelectChange = (_values) => {
      // console.log('onSelectChange ~ _value', _values);

      if (Array.isArray(_values)) {
        setSelectedRows(
          _values
            .map((_value) => options?.find((_option) => _option.value === _value))
            .filter((t) => !!t),
        );
      } else {
        setSelectedRows(
          [(options ?? []).find((option) => option.value === _values)].filter((_value) => !!_value),
        );
      }

      // @ts-ignore
      props.onChange?.(_values);

      if (isMultiple) {
        onSelectChangeStartTime.current = Date.now();
      } else {
        // 单选
        setOpen(false);
      }
    };

    const onClear = () => {
      loadData?.('').then(() => {
        setFetching(false);
      });
    };

    const onInputMemo = useCallback(
      memoized.createMemoFun((_kw) => {
        setFetching(true);

        // 输入的不是空
        loadData?.(_kw).then(() => {
          setFetching(false);
        });
      }),
      [loadData],
    );

    const onInput = useCallback(
      debounce((e) => {
        const currentTime = Date.now();

        if (
          ['ant-checkbox-input'].some((className) => e.target.className.indexOf(className) !== -1)
        ) {
          return;
        }

        if (
          isMultiple &&
          onSelectChangeStartTime.current !== 0 &&
          currentTime - onSelectChangeStartTime.current <= 400
        ) {
          onSelectChangeStartTime.current = 0;
          return;
        }

        onSelectChangeStartTime.current = 0;

        const _kw = e.target.value.trim();

        onInputMemo(_kw);
      }, debounceTimeout ?? 300),
      [debounceTimeout],
    );

    const selectOptions = useMemo<any[]>(() => {
      const allOptions = [...(options ?? []), ...(selectedRows ?? [])];

      const allOptionKeys = allOptions.map(({ value }) => value);

      const distinctKeys = Array.from(new Set(allOptionKeys));

      return distinctKeys.map((_value) => allOptions.find((_option) => _option.value === _value));
    }, [selectedRows, options]);

    const empty = useMemo(
      () => emptyContent ?? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />,
      [emptyContent],
    );

    useUpdateEffect(() => {
      // console.log('defaultOptions', defaultOptions);
      setSelectedRows(defaultOptions ?? []);
    }, [defaultOptions]);

    // console.log('options', options);
    // console.log('selectedRows', selectedRows);
    // console.log('selectOptions', selectOptions);

    return (
      <div className={classNames(selectorPrefix, classNameWrap ?? '')} style={styleWrap ?? {}}>
        <Select
          showSearch
          allowClear
          // notFoundContent={fetching ? FetchLoading : <div>notFoundContent</div>}
          filterOption={false}
          open={open}
          options={selectOptions ?? []}
          // @ts-ignore
          onInput={onInput}
          onClear={onClear}
          dropdownRender={(originNode) => {
            if (fetching) return FetchLoading;

            return !!options?.length
              ? children?.({
                  originNode,
                  value: props.value,
                  onChange: (_value) => onSelectChange(_value),
                  options: options ?? [],
                  loading: fetching,
                }) ?? originNode
              : empty;
          }}
          onDropdownVisibleChange={setOpen}
          {...props}
          onChange={(_value) => onSelectChange(_value)}
        />
      </div>
    );
  },
);

AutoComplete.displayName = 'AutoComplete';

export default AutoComplete;
