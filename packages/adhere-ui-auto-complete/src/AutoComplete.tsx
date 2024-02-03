import { useUpdateEffect } from 'ahooks';
import { Select } from 'antd';
import classNames from 'classnames';
import debounce from 'lodash.debounce';
import React, { memo, useCallback, useMemo, useRef, useState } from 'react';

import type { AutoCompleteProps } from './types';
import useCommon from './useCommon';

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
    debounceTimeout,
    options,
    loadData,
    defaultOptions,
    emptyContent,
    children,
    ...props
  }) => {
    const [selectedRows, setSelectedRows] = useState<any[]>(defaultOptions ?? []);

    const onSelectChangeStartTime = useRef<number>(0);

    const isMultiple = 'mode' in props && props.mode === 'multiple';

    const {
      defaultDebounceTimeout,
      selectorPrefix,
      fetchLoading,
      empty,
      fetching,
      open,
      setOpen,
      onClear,
      onInputMemo,
    } = useCommon({
      renderLoading,
      emptyContent,
      loadData,
    });

    /**
     * onSelectChange
     * @description 从下方组件触发的
     * @param _values
     */
    function onSelectChange(_values) {
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
    }

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
      }, debounceTimeout ?? defaultDebounceTimeout),
      [debounceTimeout],
    );

    const containerOptions = useMemo<any[]>(() => {
      const allOptions = [...(options ?? []), ...(selectedRows ?? [])];

      const allOptionKeys = allOptions.map(({ value }) => value);

      const distinctKeys = Array.from(new Set(allOptionKeys));

      return distinctKeys.map((_value) => allOptions.find((_option) => _option.value === _value));
    }, [selectedRows, options]);

    const dropdownOptions = useMemo<any[]>(() => {
      const allOptions = [
        ...(options ?? []),
        ...(defaultOptions ?? []).filter((t) => props.value.includes(t.value)),
      ];

      const allOptionKeys = allOptions.map(({ value }) => value);

      const distinctKeys = Array.from(new Set(allOptionKeys));

      return distinctKeys.map((_value) => allOptions.find((_option) => _option.value === _value));
    }, [options, defaultOptions, props.value]);

    useUpdateEffect(() => {
      setSelectedRows(defaultOptions ?? []);
    }, [defaultOptions]);

    return (
      <div className={classNames(selectorPrefix, classNameWrap ?? '')} style={styleWrap ?? {}}>
        <Select
          showSearch
          allowClear
          filterOption={false}
          open={open}
          options={containerOptions ?? []}
          // @ts-ignore
          onInput={onInput}
          onClear={onClear}
          dropdownRender={(originNode) => {
            if (fetching) return fetchLoading;

            return !!dropdownOptions?.length
              ? children?.({
                  originNode,
                  value: props.value,
                  onChange: (_value) => onSelectChange(_value),
                  options: dropdownOptions ?? [],
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
