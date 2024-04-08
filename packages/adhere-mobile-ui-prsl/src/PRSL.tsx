import { useMount, useNetwork, useUpdate, useUpdateEffect } from 'ahooks';
import { DotLoading, ErrorBlock, PullToRefresh, Skeleton } from 'antd-mobile';
import classNames from 'classnames';
import isPrimaryEmpty from 'lodash.isempty';
import React, { forwardRef, memo, useCallback, useMemo, useRef, useState } from 'react';
import type { PropsWithoutRef, RefAttributes } from 'react';
import { useImmer } from 'use-immer';

import BackTopAnimation from '@baifendian/adhere-ui-backtopanimation';
import ScrollLoad from '@baifendian/adhere-ui-scrollload';
import type { ScrollLoadRefHandle } from '@baifendian/adhere-ui-scrollload/es/types';
import Intl from '@baifendian/adhere-util-intl';

import SearchKeyWord from './SearchKeyWord';
import ToolBar from './Toolbar';
import type { DataSource, PRSLHandle, PRSLProps } from './types';

const selectorPrefix = 'adhere-mobile-ui-prsl';

const DEFAULT_PAGING_SIZE = 30;

const DEFAULT_PAGING_PAGE = 1;

const DEFAULT_DISTANCE = 50;

const DEFAULT_TOOLBAR_COLLAPSE_COUNT = 3;

/**
 * PRSL
 * @description
 * SearchKeyWord
 * Toolbar
 * beforeInnerElement
 * pullToRefreshElement: {
 *   {scrollLoadBeforeInnerElement}
 *   {scrollLoadElement}
 *   {scrollLoadAfterInnerElement}
 *   {showBackTopAnimation && backTopAnimationElement}
 * }
 * afterInnerElement
 */
const PRSL = memo<PropsWithoutRef<PRSLProps> & RefAttributes<PRSLHandle>>(
  forwardRef<PRSLHandle, PRSLProps>(
    ({
      className = '',
      style = {},
      innerClassName = '',
      innerStyle = {},
      isLoading = true,
      isUseFirstLoading = true,
      firstLoading,
      pullToRefreshProps = {},
      onRefreshBefore,
      paging,
      onRefresh,
      showKeyWordSearchBar = true,
      searchKeyWordBarProps,
      searchKeyWordWrapperClassName = '',
      searchKeyWordWrapperStyle = {},
      searchKeyWordMode,
      searchKeyWordHistoryMaxSize = DEFAULT_DISTANCE,
      defaultSearchKeyWord,
      showToolBar = true,
      showTotal,
      renderToolBar,
      afterToolBarRender,
      beforeToolBarRender,
      beforeToolBarRenderClassName = '',
      beforeToolBarRenderStyle = {},
      afterToolBarRenderClassName = '',
      afterToolBarRenderStyle = {},
      toolbarWrapperClassName = '',
      toolbarWrapperStyle = {},
      toolbarCollapseCount = DEFAULT_TOOLBAR_COLLAPSE_COUNT,
      toolbarConfig,
      scrollLoadProps,
      onLoadMore,
      loadMoreLoading,
      showBackTopAnimation = true,
      backTopAnimationProps,
      scrollLoadBeforeRender,
      scrollLoadAfterRender,
      scrollLoadBeforeRenderClassName = '',
      scrollLoadBeforeRenderStyle = {},
      scrollLoadAfterRenderClassName = '',
      scrollLoadAfterRenderStyle = {},
      beforeRender,
      afterRender,
      beforeRenderClassName = '',
      beforeRenderStyle = {},
      afterRenderClassName = '',
      afterRenderStyle = {},
      isShowFilterTrigger,
      renderFilterTrigger,
      isShowSortTrigger,
      renderSortTrigger,
      isShowViewSettingTrigger,
      renderViewSettingTrigger,
      loadData,
      renderEmpty,
      renderOffLine,
      filterTriggerMode,
      filterTriggerProps,
      renderFilter,
      filterFormProps,
      filterConfig,
      defaultFilterValues,
      sortTriggerMode,
      sortTriggerProps,
      renderSort,
      sortConfig,
      defaultSortValues,
      isUseLocal,
      children,
    }) => {
      const networkState = useNetwork();

      const forceUpdate = useUpdate();

      const [dataSource, setDataSource] = useState<DataSource>({
        data: [],
        total: 0,
      });

      const [combinationParams, setCombinationParams] = useImmer<{
        searchKeyWord: typeof defaultSearchKeyWord;
        filterValues: typeof defaultFilterValues;
        sortValues: typeof defaultSortValues;
      }>({
        searchKeyWord: defaultSearchKeyWord ?? '',
        filterValues: defaultFilterValues ?? {},
        sortValues: defaultSortValues ?? [],
      });

      const isFirstRef = useRef(true);

      const isFirstLoadingRef = useRef(false);

      const pagingRef = useRef({
        page:
          typeof paging !== 'undefined' && typeof paging === 'object'
            ? (
                paging as {
                  page: number;
                }
              ).page ?? DEFAULT_PAGING_PAGE
            : DEFAULT_PAGING_PAGE,
        pageSize:
          typeof paging !== 'undefined' && typeof paging === 'object'
            ? (
                paging as {
                  defaultPageSize: number;
                }
              ).defaultPageSize ?? DEFAULT_PAGING_SIZE
            : DEFAULT_PAGING_SIZE,
      });

      const scrollLoadRef = useRef<ScrollLoadRefHandle>();

      const callbackHandler = useRef<Function | null>(null);

      const status = useRef(ScrollLoad.NORMAL);

      /**
       * renderFirstLoading
       * @description 渲染First的Loading
       */
      const renderFirstLoading = useCallback(() => {
        return firstLoading?.() ?? defaultFirstLoading;
      }, [firstLoading]);

      /**
       * renderLoadMoreLoading
       * @description 渲染加载更多的Loading
       */
      const renderLoadMoreLoading = useCallback(() => {
        return loadMoreLoading?.() ?? defaultLoadMoreLoading;
      }, [loadMoreLoading]);

      // 是否使用本地模式
      const isLocal = useMemo(
        () => (typeof isUseLocal !== 'boolean' ? true : isLocal),
        [isUseLocal],
      );

      // 排序和过滤后的数据
      const sortAndFilterData = useMemo(() => {
        const { searchKeyWord = '', filterValues = {}, sortValues = [] } = combinationParams;

        let targetData = dataSource.data ?? [];

        // sort
        if ((sortValues ?? []).length) {
          targetData = sortValues.reduce((_dataSource, sortValue) => {
            const { order, name } = sortValue;

            _dataSource = _dataSource.sort((r1, r2) => {
              if (order === 'asc') {
                if (r1[name] > r2[name]) return 1;
                else if (r1[name] < r2[name]) return -1;
                else return 0;
              } else {
                if (r1[name] < r2[name]) return 1;
                else if (r1[name] > r2[name]) return -1;
                else return 0;
              }
            });
            return [..._dataSource];
          }, dataSource.data);
        }

        // filter
        if (!(!searchKeyWord && isPrimaryEmpty(filterValues) && !sortValues.length)) {
          targetData = targetData.filter((record) => {
            if (searchKeyWord) {
              return Object.keys(record).some((_key) => record[_key].indexOf(searchKeyWord) !== -1);
            } else if (!isPrimaryEmpty(filterValues)) {
              return Object.keys(filterValues).every(
                (_key) => record[_key].indexOf(filterValues[_key]) !== -1,
              );
            }

            return true;
          });
        }

        return targetData;
      }, [combinationParams, dataSource]);

      const targetDatasource = useMemo(() => {
        debugger;
        if (!isLocal) return dataSource;

        const startIndex = (pagingRef.current.page - 1) * pagingRef.current.pageSize;

        let currentData = sortAndFilterData.slice(
          startIndex,
          pagingRef.current.page * pagingRef.current.pageSize,
        );

        if (pagingRef.current.page !== 1) {
          currentData = [...sortAndFilterData.slice(0, startIndex), ...currentData];
        }

        return {
          total: sortAndFilterData.length,
          data: currentData,
        };
      }, [
        dataSource,
        sortAndFilterData,
        isLocal,
        pagingRef.current.page,
        pagingRef.current.pageSize,
      ]);

      const isEmpty = useCallback(() => !targetDatasource.data.length, [targetDatasource.data]);

      // 总页数
      const pages = useMemo(() => {
        return (targetDatasource?.total ?? 0) / pagingRef.current.pageSize;
      }, [pagingRef.current.pageSize, targetDatasource.total]);

      const defaultFirstLoading = useMemo(() => {
        return (
          <div className={`${selectorPrefix}-first-loading`}>
            <Skeleton.Title animated />
            <Skeleton.Paragraph lineCount={25} animated />
          </div>
        );
      }, []);

      const defaultLoadMoreLoading = useMemo(() => {
        return (
          <div className={`${selectorPrefix}-load-more-loading`}>
            <div className={`${selectorPrefix}-load-more-loading-dot`}>
              <DotLoading color="primary" />
            </div>
            <div>{`${Intl.v('数据加载中')}`}...</div>
          </div>
        );
      }, []);

      const searchKeyWordElement = useMemo(() => {
        return (
          <SearchKeyWord
            className={searchKeyWordWrapperClassName ?? ''}
            style={searchKeyWordWrapperStyle ?? {}}
            searchKeyWordBarProps={searchKeyWordBarProps}
            searchKeyWordMode={searchKeyWordMode ?? 'normal'}
            searchKeyWordHistoryMaxSize={searchKeyWordHistoryMaxSize ?? DEFAULT_DISTANCE}
            defaultSearchKeyWord={combinationParams.searchKeyWord ?? ''}
            onSearch={onSearch}
            onSearchClear={onSearchClear}
          />
        );
      }, [
        searchKeyWordWrapperClassName,
        searchKeyWordWrapperStyle,
        searchKeyWordBarProps,
        searchKeyWordMode,
        searchKeyWordHistoryMaxSize,
        combinationParams.searchKeyWord,
      ]);

      const toolBarElement = (
        <ToolBar
          className={toolbarWrapperClassName}
          style={toolbarWrapperStyle}
          showTotal={showTotal}
          renderToolBar={renderToolBar}
          afterToolBarRender={afterToolBarRender}
          beforeToolBarRender={beforeToolBarRender}
          beforeToolBarRenderClassName={beforeToolBarRenderClassName}
          beforeToolBarRenderStyle={beforeToolBarRenderStyle}
          afterToolBarRenderClassName={afterToolBarRenderClassName}
          afterToolBarRenderStyle={afterToolBarRenderStyle}
          isShowFilterTrigger={isShowFilterTrigger}
          renderFilterTrigger={renderFilterTrigger}
          isShowSortTrigger={isShowSortTrigger}
          renderSortTrigger={renderSortTrigger}
          isShowViewSettingTrigger={isShowViewSettingTrigger}
          renderViewSettingTrigger={renderViewSettingTrigger}
          toolbarCollapseCount={toolbarCollapseCount}
          toolbarConfig={toolbarConfig}
          total={targetDatasource?.total ?? 0}
          filterTriggerMode={filterTriggerMode}
          filterTriggerProps={filterTriggerProps}
          renderFilter={renderFilter}
          filterFormProps={filterFormProps}
          filterConfig={filterConfig}
          defaultFilterValues={combinationParams.filterValues}
          onFilter={onFilter}
          onFilterReset={onFilterReset}
          sortTriggerMode={sortTriggerMode}
          sortTriggerProps={sortTriggerProps}
          renderSort={renderSort}
          sortConfig={sortConfig}
          defaultSortValues={combinationParams.sortValues}
          onSort={onSort}
          onSortReset={onSortReset}
        />
      );

      const beforeInnerElement = useMemo(() => {
        const element = beforeRender?.();

        return (
          element && (
            <div
              className={classNames(`${selectorPrefix}-inner-before`, beforeRenderClassName ?? '')}
              style={beforeRenderStyle ?? {}}
            >
              {element}
            </div>
          )
        );
      }, [beforeRender, beforeRenderClassName, beforeRenderStyle]);

      const afterInnerElement = useMemo(() => {
        const element = afterRender?.();

        return (
          element && (
            <div
              className={classNames(`${selectorPrefix}-inner-after`, afterRenderClassName ?? '')}
              style={afterRenderStyle ?? {}}
            >
              {element}
            </div>
          )
        );
      }, [afterRender, afterRenderClassName, afterRenderStyle]);

      const scrollLoadBeforeInnerElement = useMemo(() => {
        const element = scrollLoadBeforeRender?.();

        return (
          element && (
            <div
              className={classNames(
                `${selectorPrefix}-scroll-before`,
                scrollLoadBeforeRenderClassName ?? '',
              )}
              style={scrollLoadBeforeRenderStyle ?? {}}
            >
              {element}
            </div>
          )
        );
      }, [scrollLoadBeforeRender, scrollLoadBeforeRenderClassName, scrollLoadBeforeRenderStyle]);

      const scrollLoadAfterInnerElement = useMemo(() => {
        const element = scrollLoadAfterRender?.();

        return (
          element && (
            <div
              className={classNames(
                `${selectorPrefix}-scroll-after`,
                scrollLoadAfterRenderClassName ?? '',
              )}
              style={scrollLoadAfterRenderStyle ?? {}}
            >
              {element}
            </div>
          )
        );
      }, [scrollLoadAfterRender, scrollLoadAfterRenderClassName, scrollLoadAfterRenderStyle]);

      const scrollLoadElement = useMemo(() => {
        return (
          <>
            {isEmpty() && (renderEmpty?.() ?? <ErrorBlock status="empty" />)}
            {!isEmpty() && (
              <ScrollLoad
                // @ts-ignore
                ref={scrollLoadRef}
                renderLoading={renderLoadMoreLoading}
                distance={scrollLoadProps?.distance || 50}
                onScrollBottom={onScrollBottom}
                {...(scrollLoadProps || {})}
                className={classNames(
                  `${selectorPrefix}-scroll-load`,
                  scrollLoadProps?.className ?? '',
                )}
              >
                {children?.(targetDatasource.data)}
              </ScrollLoad>
            )}
          </>
        );
      }, [
        renderLoadMoreLoading,
        scrollLoadProps,
        children,
        targetDatasource.data,
        isEmpty,
        renderEmpty,
      ]);

      const backTopAnimationElement = useMemo(() => {
        return (
          <BackTopAnimation
            {...(backTopAnimationProps ?? {})}
            getContainer={() => getScrollEl()}
            onTrigger={() => Promise.resolve()}
          />
        );
      }, [backTopAnimationProps]);

      const pullToRefreshElement = useMemo(() => {
        return (
          <PullToRefresh {...(pullToRefreshProps ?? {})} onRefresh={onPullToRefresh}>
            {scrollLoadBeforeInnerElement}

            {scrollLoadElement}

            {scrollLoadAfterInnerElement}

            {showBackTopAnimation && backTopAnimationElement}
          </PullToRefresh>
        );
      }, [
        pullToRefreshProps,
        scrollLoadBeforeInnerElement,
        scrollLoadAfterInnerElement,
        scrollLoadElement,
        showBackTopAnimation,
        backTopAnimationElement,
      ]);

      /**
       * renderInner
       * @description 渲染Inner
       */
      const renderInner = useCallback(() => {
        return (
          <>
            {showKeyWordSearchBar && searchKeyWordElement}

            {showToolBar && toolBarElement}

            <div
              className={classNames(`${selectorPrefix}-inner`, innerClassName ?? '')}
              style={innerStyle ?? {}}
            >
              {beforeInnerElement}

              {pullToRefreshElement}

              {afterInnerElement}
            </div>
          </>
        );
      }, [
        showKeyWordSearchBar,
        searchKeyWordElement,
        showToolBar,
        toolBarElement,
        innerClassName,
        innerStyle,
        beforeInnerElement,
        pullToRefreshElement,
        afterInnerElement,
      ]);

      function loadDataCall(_combinationParams) {
        if (!loadData) {
          return Promise.resolve();
        }

        return loadData({
          ...pagingRef.current,
          ..._combinationParams,
        }).then((res) => {
          setDataSource(res);

          return res;
        });
      }

      function appendData() {
        debugger;
        if (isLocal) {
          pagingRef.current.page += 1;
          forceUpdate();
          return;
        }

        return onLoadMore?.({
          page: pagingRef.current.page + 1,
          pageSize: pagingRef.current.pageSize,
          ...combinationParams,
        }).then((res) => {
          pagingRef.current.page += 1;

          setDataSource((_dataSource) => {
            _dataSource.total = res.total;
            _dataSource.data = [..._dataSource.data, ...res.data];

            return {
              ..._dataSource,
            };
          });
        });
      }

      function resetScrollLoadOrPaging() {
        resetScrollLoad();
        resetPaging();
      }

      function resetScrollLoad() {
        const scrollEl = getScrollEl?.();

        if (scrollEl) {
          scrollEl.scrollTop = 0;
        }

        scrollLoadRef?.current?.hideAll?.();

        callbackHandler.current = null;
        status.current = ScrollLoad.NORMAL;
      }

      function resetPaging() {
        // 重置 paging
        pagingRef.current.page =
          typeof paging !== 'undefined' && typeof paging === 'object'
            ? (
                paging as {
                  page: number;
                }
              ).page ?? DEFAULT_PAGING_PAGE
            : DEFAULT_PAGING_PAGE;
        pagingRef.current.pageSize =
          typeof paging !== 'undefined' && typeof paging === 'object'
            ? (
                paging as {
                  defaultPageSize: number;
                }
              ).defaultPageSize ?? DEFAULT_PAGING_SIZE
            : DEFAULT_PAGING_SIZE;
      }

      function resetSearchOrFilterOrSort() {
        setCombinationParams((draft) => {
          draft.searchKeyWord = defaultSearchKeyWord;
          draft.filterValues = defaultFilterValues;
          draft.sortValues = defaultSortValues;
        });
      }

      function reset() {
        resetScrollLoadOrPaging();
        resetSearchOrFilterOrSort();
      }

      function onFilter(filterData) {
        resetScrollLoadOrPaging();

        setCombinationParams((draft) => {
          draft.filterValues = filterData;
        });

        if (isLocal) {
          return Promise.resolve();
        }

        return loadDataCall({
          ...combinationParams,
          filterValues: filterData,
        });
      }

      function onFilterReset() {
        resetScrollLoadOrPaging();

        setCombinationParams((draft) => {
          draft.filterValues = {};
        });

        if (isLocal) {
          return Promise.resolve();
        }

        return loadDataCall({
          ...combinationParams,
          filterValues: {},
        });
      }

      function onSort(sortData) {
        resetScrollLoadOrPaging();

        setCombinationParams((draft) => {
          draft.sortValues = sortData;
        });

        if (isLocal) {
          return Promise.resolve();
        }

        return loadDataCall({
          ...combinationParams,
          sortValues: sortData,
        });
      }

      function onSortReset() {
        resetScrollLoadOrPaging();

        setCombinationParams((draft) => {
          draft.sortValues = [];
        });

        if (isLocal) {
          return Promise.resolve();
        }

        return loadDataCall({
          ...combinationParams,
          sortValues: [],
        });
      }

      function onSearch(value) {
        resetScrollLoadOrPaging();

        setCombinationParams((draft) => {
          draft.searchKeyWord = value;
        });

        if (isLocal) {
          return;
        }

        loadDataCall({
          ...combinationParams,
          searchKeyWord: value,
        });
      }

      function onSearchClear() {
        resetScrollLoadOrPaging();

        setCombinationParams((draft) => {
          draft.searchKeyWord = '';
        });

        if (isLocal) {
          return;
        }

        loadDataCall({
          ...combinationParams,
          searchKeyWord: '',
        });
      }

      /**
       * getScrollEl
       * @description 获取滚动元素
       */
      function getScrollEl() {
        return scrollLoadRef.current?.getScrollContainer() ?? document.body;
      }

      /**
       * onPullToRefresh
       * @description 完全重置
       */
      function onPullToRefresh() {
        const params = {
          searchKeyWord: defaultSearchKeyWord,
          filterValues: defaultFilterValues,
          sortValues: defaultSortValues,
        };

        const resolve = onRefreshBefore
          ? onRefreshBefore({
              ...pagingRef.current,
              ...params,
            })
          : Promise.resolve();
        if (onRefresh) {
          return resolve.then(() => {
            reset();

            if (isLocal) {
              return;
            }

            return onRefresh?.({
              ...pagingRef.current,
              ...params,
            }).then((res) => {
              setDataSource(res);
            });
          });
        } else {
          return Promise.resolve(dataSource);
        }
      }

      function onScrollBottom(callback) {
        if (status.current === ScrollLoad.EMPTY) {
          status.current = ScrollLoad.EMPTY;
          callback(ScrollLoad.EMPTY);
          return;
        }

        callbackHandler.current = callback;

        return appendData();
      }

      /**
       * renderChildren
       * @description 渲染Children
       */
      function renderChildren() {
        if (isUseFirstLoading) {
          if (isFirstRef.current && !isFirstLoadingRef.current && isLoading) {
            isFirstLoadingRef.current = true;
          }

          if (isFirstRef.current && isFirstLoadingRef.current && !isLoading) {
            isFirstRef.current = false;
            isFirstLoadingRef.current = false;
          }

          if (isFirstRef.current) {
            return renderFirstLoading();
          }

          return renderInner();
        }

        return renderInner();
      }

      useMount(() => {
        loadDataCall({
          searchKeyWord: defaultSearchKeyWord,
          filterValues: defaultFilterValues,
          sortValues: defaultSortValues,
        });
      });

      useUpdateEffect(() => {
        if (callbackHandler.current) {
          status.current = pagingRef.current.page < pages ? ScrollLoad.NORMAL : ScrollLoad.EMPTY;

          callbackHandler.current(status.current);
        }
      }, [dataSource.data, pages, pagingRef.current.page]);

      useUpdateEffect(() => {
        reset();

        loadDataCall({
          searchKeyWord: defaultSearchKeyWord,
          filterValues: defaultFilterValues,
          sortValues: defaultSortValues,
        });
      }, [defaultSearchKeyWord, defaultSortValues, defaultFilterValues, isLocal]);

      return (
        <div className={classNames(selectorPrefix, className ?? '')} style={style ?? {}}>
          {renderChildren()}
        </div>
      );
    },
  ),
);

PRSL.displayName = 'PRSL';

export default PRSL;
