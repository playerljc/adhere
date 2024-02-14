import { SearchBar } from 'antd-mobile';
import classNames from 'classnames';
import React, { useMemo, useState } from 'react';

import Util from '@baifendian/adhere-util';

import type { UseListFilterProps } from './types';

const selectorPrefix = 'adhere-mobile-ui-ant-hoc-list-filter';

function useListFilter<Option>({
  options,
  filterProps,
  children,
  wrapperClassName,
  wrapperStyle,
  filterWrapperClassName,
  filterWrapperStyle,
  bodyWrapperClassName,
  bodyWrapperStyle,
}: UseListFilterProps<Option>) {
  const [filterValue, setFilterValue] = useState<string>('');

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

  function onSearch(value) {
    setFilterValue(value);
  }

  function onClear() {
    setFilterValue('');
  }

  return (
    <div className={classNames(selectorPrefix, wrapperClassName ?? '')} style={wrapperStyle ?? {}}>
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
        {children?.(targetOptions)}
      </div>
    </div>
  );
}

export default useListFilter;
