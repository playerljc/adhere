import { useMount, useUpdateEffect } from 'ahooks';
import { SearchBar, SearchBarRef } from 'antd-mobile';
import classNames from 'classnames';
import React, { memo, useEffect, useMemo, useRef } from 'react';
import { useImmerReducer } from 'use-immer';

import AdherePopup from '@baifendian/adhere-ui-popup';
import Intl from '@baifendian/adhere-util-intl';
import Preferences from '@baifendian/adhere-util-preferences';

import type { SearchHistoryAction, SearchHistoryData, SearchKeyWordProps } from '../types';
import SearchHistory from './SearchHistory';
import SearchHistoryReducer from './SearchHistoryReducer';

const selectorPrefix = 'adhere-mobile-ui-prsl-search-keyword';

const HISTORY_STORE_KEY = 'adhere-mobile-ui-prsl';

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
    isSearchKeyWordHistoryIntoStore,
    searchKeyWordHistoryStoreType,
    defaultSearchKeyWord,
    disabled = false,
    onSearch,
    onSearchClear,
  }) => {
    const triggerRef = useRef<SearchBarRef | null>(null);

    const searchRef = useRef<SearchBarRef | null>();

    const [historyData, dispatch] = useImmerReducer<SearchHistoryData, SearchHistoryAction>(
      SearchHistoryReducer(searchKeyWordHistoryMaxSize),
      getDefaultHistoryData(),
    );

    function getDefaultHistoryData(): SearchHistoryData {
      if (isSearchKeyWordHistoryIntoStore) {
        if (searchKeyWordHistoryStoreType === 'session') {
          return (Preferences.getObjectBySession(HISTORY_STORE_KEY) as SearchHistoryData) ?? [];
        } else if (searchKeyWordHistoryStoreType === 'local') {
          return (Preferences.getObjectByLocal(HISTORY_STORE_KEY) as SearchHistoryData) ?? [];
        }

        return [];
      }

      return [];
    }

    function search(value: string) {
      onSearch?.(value);
    }

    function clear() {
      onSearchClear?.();
    }

    function addHistory(kw) {
      dispatch({
        type: 'add',
        addKw: kw,
      });
    }

    function removeHistory(id) {
      dispatch({
        type: 'remove',
        removeId: id,
      });
    }

    function listHistory(list) {
      dispatch({
        type: 'list',
        list,
      });
    }

    const isUseHistoryMode = useMemo(() => searchKeyWordMode === 'history', [searchKeyWordMode]);

    useMount(() => {
      if (triggerRef.current && triggerRef.current?.nativeElement) {
        triggerRef.current.nativeElement.setAttribute('readonly', '');
      }
    });

    useEffect(() => {
      if (!searchRef.current || !searchRef.current.nativeElement) return;

      if (disabled) {
        searchRef.current.nativeElement.setAttribute('readonly', '');
      } else {
        searchRef.current.nativeElement.removeAttribute('readonly');
      }
    }, [disabled]);

    useUpdateEffect(() => {
      listHistory(getDefaultHistoryData());
    }, [searchKeyWordHistoryStoreType, isSearchKeyWordHistoryIntoStore]);

    useUpdateEffect(() => {
      if (isSearchKeyWordHistoryIntoStore) {
        if (searchKeyWordHistoryStoreType === 'session') {
          Preferences.putObjectBySession(HISTORY_STORE_KEY, historyData);
        } else if (searchKeyWordHistoryStoreType === 'local') {
          Preferences.putObjectByLocal(HISTORY_STORE_KEY, historyData);
        }
      }
    }, [historyData, searchKeyWordHistoryStoreType, isSearchKeyWordHistoryIntoStore]);

    return (
      <div
        key={defaultSearchKeyWord}
        className={classNames(`${selectorPrefix}-wrapper`, className ?? '')}
        style={style ?? {}}
      >
        {(disabled || !isUseHistoryMode) && (
          <SearchBar
            // @ts-ignore
            ref={searchRef}
            defaultValue={defaultSearchKeyWord ?? ''}
            onSearch={search}
            onClear={clear}
            {...searchKeyWordBarProps}
          />
        )}

        {isUseHistoryMode && !disabled && (
          <AdherePopup.Trigger
            renderTrigger={() => (
              <SearchBar
                ref={triggerRef}
                clearable={false}
                className={`${selectorPrefix}-trigger`}
                defaultValue={defaultSearchKeyWord ?? ''}
                {...searchKeyWordBarProps}
              />
            )}
            title={Intl.v('查询历史')}
            actions={[]}
          >
            <SearchHistory
              title={Intl.v('查询历史')}
              searchKeyWordBarProps={{
                placeholder: Intl.v('请输入关查询键字'),
              }}
              defaultSearchKeyWord={defaultSearchKeyWord ?? ''}
              onSearch={onSearch}
              onSearchClear={onSearchClear}
              historyData={historyData}
              addHistory={addHistory}
              removeHistory={removeHistory}
              clearHistory={() => {
                listHistory([]);
              }}
              closeSelf={() => {
                AdherePopup.closeAll();
              }}
            />
          </AdherePopup.Trigger>
        )}
      </div>
    );
  },
);

SearchKeyWord.displayName = 'SearchKeyWord';

export default SearchKeyWord;
