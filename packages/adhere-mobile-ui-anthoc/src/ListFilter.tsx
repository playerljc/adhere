import { ErrorBlock, SearchBar } from 'antd-mobile';
import classNames from 'classnames';
import React, { useCallback, useMemo, useRef, useState } from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import Util from '@baifendian/adhere-util';

import type { ListFilterProps } from './types';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-list-filter';

const { useTheme } = ConfigProvider;

function ListFilter<Option>({
  options,
  filterProps,
  children,
  wrapperClassName,
  wrapperStyle,
  filterWrapperClassName,
  filterWrapperStyle,
  bodyWrapperClassName,
  bodyWrapperStyle,
  renderEmpty,
}: ListFilterProps<Option>) {
  const wrapperRef = useRef<HTMLElement | undefined>();

  const [filterValue, setFilterValue] = useState<string>('');

  useTheme<HTMLElement>({
    elRef: wrapperRef,
    group: 'mobile-hoc',
  });

  function filter(_filterValue, option) {
    return option[filterProps?.optionFilterProp ?? 'title'].includes(_filterValue);
  }

  const targetOptions = useMemo(() => {
    if (!filterValue) return options ?? [];

    // 是bool值
    if (typeof filterProps?.filterOption === 'boolean' && filterProps.filterOption) {
      return (options ?? []).filter((_option) => filter(filterValue, _option));
    }
    // 是函数
    else if (Util.isFunction(filterProps?.filterOption)) {
      return (options ?? []).filter((_option) =>
        (filterProps?.filterOption as Function)(filterValue, _option),
      );
    }

    return (options ?? []).filter((_option) => filter(filterValue, _option));
  }, [filterValue, filterProps?.filterOption, filterProps?.optionFilterProp, options]);

  const isEmpty = useCallback(() => !targetOptions.length, [targetOptions]);

  function onSearch(value) {
    setFilterValue(value);
  }

  function onClear() {
    setFilterValue('');
  }

  return (
    <div
      // @ts-ignore
      ref={wrapperRef}
      className={classNames(selectorPrefix, wrapperClassName ?? '')}
      style={wrapperStyle ?? {}}
    >
      <div
        className={classNames(`${selectorPrefix}-search`, filterWrapperClassName ?? '')}
        style={filterWrapperStyle ?? {}}
      >
        <SearchBar onSearch={onSearch} onClear={onClear} {...filterProps} />
      </div>

      <div
        className={classNames(`${selectorPrefix}-list`, bodyWrapperClassName ?? '')}
        style={bodyWrapperStyle ?? {}}
      >
        {isEmpty() && (renderEmpty?.() ?? <ErrorBlock status="empty" />)}
        {children?.(targetOptions, filterValue)}
      </div>
    </div>
  );
}

export default ListFilter;
