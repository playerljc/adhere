import { useUpdateEffect } from 'ahooks';
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
    searchKeyWordHistoryMaxSize = 50,
    isSearchKeyWordHistoryIntoStore,
    searchKeyWordHistoryStoreType,
    defaultSearchKeyWord,
    disabled = false,
    onSearch,
    onSearchClear,
  }) => {
    const triggerRef = useRef<SearchBarRef | null>(null);

    const searchRef = useRef<SearchBarRef | null>(null);

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

    function addHistory(kw: string) {
      dispatch({
        type: 'add',
        addKw: kw,
      });
    }

    function removeHistory(id: string) {
      dispatch({
        type: 'remove',
        removeId: id,
      });
    }

    function listHistory(list: SearchHistoryData) {
      dispatch({
        type: 'list',
        list,
      });
    }

    const isUseHistoryMode = useMemo(() => searchKeyWordMode === 'history', [searchKeyWordMode]);

    // trigger SearchBar 会因 key 变化重挂载，用 ref callback 保证 readonly 始终生效
    function setTriggerRef(ref: SearchBarRef | null) {
      triggerRef.current = ref;

      ref?.nativeElement?.setAttribute('readonly', '');
    }

    useEffect(() => {
      if (!searchRef.current || !searchRef.current.nativeElement) return;

      if (disabled) {
        searchRef.current.nativeElement.setAttribute('readonly', '');
      } else {
        searchRef.current.nativeElement.removeAttribute('readonly');
      }
    }, [disabled, defaultSearchKeyWord]);

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
        className={classNames(`${selectorPrefix}-wrapper`, className ?? '')}
        style={style ?? {}}
      >
        {(disabled || !isUseHistoryMode) && (
          <SearchBar
            // key 放在 SearchBar 上，让关键字变化时只重置输入框；
            // 若放在外层 div 会重挂载整个组件，内存中的搜索历史随之丢失
            key={defaultSearchKeyWord}
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
                key={defaultSearchKeyWord}
                ref={setTriggerRef}
                clearable={false}
                className={`${selectorPrefix}-trigger`}
                defaultValue={defaultSearchKeyWord ?? ''}
                {...searchKeyWordBarProps}
              />
            )}
            title={Intl.get('搜索历史')}
            actions={[]}
          >
            <SearchHistory
              title={Intl.get('搜索历史')}
              searchKeyWordBarProps={{
                placeholder: Intl.get('请输入关查询键字'),
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
