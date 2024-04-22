import { ErrorBlock, SearchBar } from 'antd-mobile';
import { CloseOutline, DeleteOutline } from 'antd-mobile-icons';
import classNames from 'classnames';
import React, { useCallback } from 'react';
import type { FC } from 'react';

import Intl from '@baifendian/adhere-util-intl';

import type { SearchHistoryProps } from '../types';

const selectorPrefix = 'adhere-mobile-ui-prsl-search-history';

/**
 * SearchHistory
 * @param className
 * @param style
 * @param searchKeyWordBarProps
 * @param defaultSearchKeyWord
 * @param onSearch
 * @param onSearchClear
 * @param historyData
 * @param addHistory
 * @param removeHistory
 * @param clearHistory
 * @param closeSelf
 * @param title
 * @constructor
 */
const SearchHistory: FC<SearchHistoryProps> = ({
  className,
  style,
  searchKeyWordBarProps,
  defaultSearchKeyWord,
  onSearch,
  onSearchClear,
  historyData,
  addHistory,
  removeHistory,
  clearHistory,
  closeSelf,
  title,
}) => {
  function search(value: string) {
    onSearch?.(value);
  }

  function clear() {
    onSearchClear?.();
  }

  const isEmpty = useCallback(() => !historyData?.length, [historyData]);

  return (
    <div className={`${classNames(selectorPrefix, className ?? '')}`} style={style ?? {}}>
      <div className={`${selectorPrefix}-search-bar`}>
        <SearchBar
          defaultValue={defaultSearchKeyWord ?? ''}
          onSearch={(val) => {
            addHistory?.(val);
            search(val);
            closeSelf?.();
          }}
          onClear={() => {
            clear();
            closeSelf?.();
          }}
          {...(searchKeyWordBarProps ?? {})}
        />
      </div>

      <div className={`${selectorPrefix}-main`}>
        {isEmpty() && <ErrorBlock status="empty" />}

        {!isEmpty() && (
          <>
            <div className={`${selectorPrefix}-title`}>
              <span>{title ?? Intl.v('搜索历史')}</span>

              <span
                onClick={() => {
                  clearHistory?.();
                }}
              >
                <DeleteOutline />
              </span>
            </div>

            <div className={`${selectorPrefix}-content`}>
              <ul className={`${selectorPrefix}-content-inner`}>
                {(historyData ?? []).map(({ id, kw }) => (
                  <li
                    key={id}
                    className={`${selectorPrefix}-item`}
                    onClick={() => {
                      onSearch?.(kw);
                      closeSelf?.();
                    }}
                  >
                    <span className={`${selectorPrefix}-item-label`}>{kw}</span>
                    <span
                      className={`${selectorPrefix}-item-close`}
                      onClick={(e) => {
                        e.stopPropagation();

                        removeHistory?.(id);
                      }}
                    >
                      <CloseOutline />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchHistory;
