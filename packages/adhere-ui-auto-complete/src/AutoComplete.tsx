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
  const lock = useRef(false);

  const [fetching, setFetching] = useState(false);

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
    lock.current = true;

    // @ts-ignore
    props.onChange?.(_values);
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
      const _kw = e.target.value.trim();

      if (lock.current) {
        lock.current = false;
        return;
      }

      onInputMemo(_kw);
    }, debounceTimeout ?? 300),
    [debounceTimeout],
  );

  console.log('value', props.value);

  return (
    <div className={classNames(selectorPrefix, classNameWrap ?? '')} style={styleWrap ?? {}}>
      <Select
        {...props}
        showSearch
        allowClear
        notFoundContent={fetching && FetchLoading}
        filterOption={false}
        // onSearch={debounceFetcher.current}
        options={options ?? []}
        // @ts-ignore
        onInput={onInput}
        onClear={onClear}
        dropdownRender={(originNode) =>
          children?.({
            originNode,
            value: props.value,
            onChange: onSelectChange,
            options: options,
          }) ?? originNode
        }
      />
    </div>
  );
};

export default memo(AutoComplete);
