import { SearchBar } from 'antd-mobile';
import classNames from 'classnames';
import React, { memo } from 'react';

import type { SearchKeyWordProps } from '../types';

const selectorPrefix = 'adhere-mobile-ui-prsl-search-keyword';

/**
 * SearchKeyWord
 * @description 关键词搜索部分
 */
const SearchKeyWord = memo<SearchKeyWordProps>(
  ({
    className,
    style,
    searchKeyWordBarProps,
    searchKeyWordMode,
    searchKeyWordHistoryMaxSize,
    defaultSearchKeyWord,
    onSearch,
    onSearchClear,
  }) => {
    function search(value: string) {
      onSearch?.(value);
    }

    function clear() {
      onSearchClear?.();
    }

    return (
      <div
        key={defaultSearchKeyWord}
        className={classNames(`${selectorPrefix}-wrapper`, className ?? '')}
        style={style ?? {}}
      >
        <SearchBar
          {...searchKeyWordBarProps}
          defaultValue={defaultSearchKeyWord ?? ''}
          onSearch={search}
          onClear={clear}
        />
      </div>
    );
  },
);

SearchKeyWord.displayName = 'SearchKeyWord';

export default SearchKeyWord;
