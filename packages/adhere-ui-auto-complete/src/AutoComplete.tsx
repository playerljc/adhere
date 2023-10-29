import { Select, Spin } from 'antd';
import classNames from 'classnames';
import debounce from 'lodash.debounce';
import type { FC } from 'react';
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
 * @param children
 * @param props
 * @constructor
 */
const AutoComplete: FC<AutoCompleteProps> = ({
  classNameWrap,
  styleWrap,
  renderLoading,
  debounceTimeout = 300,
  options,
  loadData,
  children,
  ...props
}) => {
  // const lock = useRef(false);

  const [fetching, setFetching] = useState(false);

  const [open, setOpen] = useState(false);

  const selectedRows = useRef<any[]>([]);

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
   // * @param {boolean} isLock 是否加锁
   */
  const onSelectChange = (_values /*isLock = true*/) => {
    // if (isLock) {
    //   lock.current = true;
    // }

    // console.log('onSelectChange', lock.current);

    const allOptions = [...(options ?? []), ...(selectedRows.current ?? [])];

    if (Array.isArray(_values)) {
      selectedRows.current = _values
        .map((_value) => allOptions.find((_option) => _option.value === _value))
        .filter((_option) => !!_option);
    } else {
      selectedRows.current = [allOptions.find((option) => option.value === _values)].filter(
        (_value) => !!_value,
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

      // console.log('isMultiple', isMultiple);
      // console.log('currentTime', currentTime);
      // console.log('onSelectChangeStartTime.current', onSelectChangeStartTime.current);
      // console.log(
      //   'currentTime - onSelectChangeStartTime.current',
      //   currentTime - onSelectChangeStartTime.current,
      // );

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

      // if (lock.current) {
      //   lock.current = false;
      //   return;
      // }

      // console.log('onInput - lock', lock.current);

      onInputMemo(_kw);
    }, debounceTimeout ?? 300),
    [debounceTimeout],
  );

  const _options = useMemo(() => {
    // 用于直接使用value进行初始化的时候对selectedRows进行赋值
    if (Array.isArray(props.value)) {
      props.value.forEach((_value) => {
        const current = options?.find?.((option) => option.value === _value);

        if (current && !selectedRows.current.find((t) => t.value === _value)) {
          selectedRows.current.push(current);
        }
      });
    } else {
      const current = options?.find?.((option) => option.value === props.value);

      if (current && !selectedRows.current.find((t) => t.value === props.value)) {
        selectedRows.current.push(current);
      }
    }

    const allOptions = [...(options ?? []), ...(selectedRows.current ?? [])];

    const allOptionKeys = allOptions.map(({ value }) => value);

    const distinctKeys = Array.from(new Set(allOptionKeys));

    return distinctKeys.map((_value) => allOptions.find((_option) => _option.value === _value));
  }, [props.value, options]);

  return (
    <div className={classNames(selectorPrefix, classNameWrap ?? '')} style={styleWrap ?? {}}>
      <Select
        showSearch
        allowClear
        notFoundContent={fetching && FetchLoading}
        filterOption={false}
        // onSearch={debounceFetcher.current}
        open={open}
        options={_options ?? []}
        // @ts-ignore
        onInput={onInput}
        onClear={onClear}
        dropdownRender={(originNode) =>
          children?.({
            originNode,
            value: props.value,
            onChange: (_value) => onSelectChange(_value /*true*/),
            options: _options ?? [],
            loading: fetching,
          }) ?? originNode
        }
        onDropdownVisibleChange={setOpen}
        {...props}
        onChange={(_value) => onSelectChange(_value /*false*/)}
      />
    </div>
  );
};

export default memo(AutoComplete);
