import { useMount, useNetwork, useUpdate, useUpdateEffect } from 'ahooks';
import { Button, DotLoading, ErrorBlock, PullToRefresh, Radio, Skeleton } from 'antd-mobile';
import classNames from 'classnames';
import isPrimaryEmpty from 'lodash.isempty';
import React, { forwardRef, memo, useCallback, useMemo, useRef, useState } from 'react';
import type { PropsWithoutRef, RefAttributes } from 'react';
import { useImmer } from 'use-immer';

import BackTopAnimation from '@baifendian/adhere-ui-backtopanimation';
import ScrollLoad from '@baifendian/adhere-ui-scrollload';
import type { ScrollLoadRefHandle } from '@baifendian/adhere-ui-scrollload/es/types';
import Intl from '@baifendian/adhere-util-intl';

import Context from './Context';
import { DNDManageButton, SortableContainer, useDND } from './DND';
import PRSLItem from './PRSLItem';
import SearchKeyWord from './SearchKeyWord';
import { SelectionCheckAllManage, SelectionManageButton, useSelection } from './Selection';
import ToolBar from './Toolbar';
import type { DataSource, ModeType, PRSLComponent, PRSLHandle, PRSLProps } from './types';

const selectorPrefix = 'adhere-mobile-ui-prsl';

const DEFAULT_PAGING_SIZE = 30;

const DEFAULT_PAGING_PAGE = 1;

const DEFAULT_DISTANCE = 50;

const DEFAULT_TOOLBAR_COLLAPSE_COUNT = 3;

const DEFAULT_SEARCH_KEY_WORD_HISTORY_STORE_TYPE = 'session';

const DEFAULT_ROW_KEY = 'id';

const DEFAULT_MODE = 'normal';

const DEFAULT_SEARCH_KEY_WORD_MODE = 'normal';

const DEFAULT_IS_USE_DND = true;

const DEFAULT_IS_USE_SELECTION = true;

const DEFAULT_ACTION_TRIGGER_MODE = 'ActionSheet';

/**
 * InternalPRSL
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
const InternalPRSL = memo<PropsWithoutRef<PRSLProps> & RefAttributes<PRSLHandle>>(
  forwardRef<PRSLHandle, PRSLProps>(
    ({
      className = '',
      style,
      innerClassName = '',
      innerStyle,
      isLoading = true,
      isUseFirstLoading = true,
      firstLoading,
      pullToRefreshProps,
      onRefreshBefore,
      paging,
      onRefresh,
      rowKey,
      showKeyWordSearchBar = true,
      searchKeyWordBarProps,
      searchKeyWordWrapperClassName = '',
      searchKeyWordWrapperStyle,
      searchKeyWordMode,
      searchKeyWordHistoryMaxSize,
      isSearchKeyWordHistoryIntoStore,
      searchKeyWordHistoryStoreType,
      defaultSearchKeyWord,
      showToolBar = true,
      showTotal,
      renderToolBar,
      afterToolBarRender,
      beforeToolBarRender,
      beforeToolBarRenderClassName = '',
      beforeToolBarRenderStyle,
      afterToolBarRenderClassName = '',
      afterToolBarRenderStyle,
      toolbarWrapperClassName = '',
      toolbarWrapperStyle,
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
      scrollLoadBeforeRenderStyle,
      scrollLoadAfterRenderClassName = '',
      scrollLoadAfterRenderStyle,
      beforeRender,
      afterRender,
      beforeRenderClassName = '',
      beforeRenderStyle,
      afterRenderClassName = '',
      afterRenderStyle,
      isShowFilterTrigger,
      renderFilterTrigger,
      isShowSortTrigger,
      renderSortTrigger,
      isShowViewSettingTrigger,
      renderViewSettingTrigger,
      viewSettingTriggerMode,
      viewSettingTriggerProps,
      renderViewSetting,
      viewSettingConfig,
      defaultViewSettingValue,
      onViewSetting,
      onViewSettingReset,
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
      isUseSelection,
      // 选择模式开始
      selectedRowKeys,
      selectionMultiple,
      onSelectChange,
      isUseDND,
      dndDragHandle,
      onDNDChange,
      actionTriggerMode,
      onAction,
      // 选择模式结束
      children,
    }) => {
      const networkState = useNetwork();

      const forceUpdate = useUpdate();

      const [dataSource, setDataSource] = useState<DataSource>({
        data: [],
        total: 0,
      });

      const [mode, setMode] = useState<ModeType>(DEFAULT_MODE);

      const isUseNormalMode = useMemo(() => mode === 'normal', [mode]);

      const targetActionTriggerMode = useMemo(
        () => actionTriggerMode ?? DEFAULT_ACTION_TRIGGER_MODE,
        [actionTriggerMode],
      );

      const isTargetUseDND = useMemo(() => {
        return isUseDND ?? DEFAULT_IS_USE_DND;
      }, [isUseDND]);

      const isTargetUseSelection = useMemo(() => {
        return isUseSelection ?? DEFAULT_IS_USE_SELECTION;
      }, [isUseSelection]);

      const targetRowKey = useMemo(() => rowKey ?? DEFAULT_ROW_KEY, [rowKey]);

      const {
        optionSelectedRowKeys,
        isUseSelectionMode,
        isSelectionMultiple,
        finish: selectionFinish,
        cancel: selectionCancel,
        selectionChange,
        selectionAllChange,
      } = useSelection({
        selectedRowKeys,
        selectionMultiple,
        mode,
        dataSource: dataSource.data,
        rowKey: targetRowKey,
      });

      const {
        optionDataSource,
        isUseDNDMode,
        finish: dndFinish,
        cancel: dndCancel,
        move: dndMove,
      } = useDND({
        mode,
        dataSource: dataSource.data,
        rowKey: targetRowKey,
        reset: () => {
          setDataSource({ ...dataSource });
        },
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

      const isUsePaging = useMemo(() => {
        if (typeof paging === 'boolean') return paging;
        else return true;
      }, [paging]);

      const scrollLoadRef = useRef<ScrollLoadRefHandle>();

      const scrollRef = useRef<HTMLElement | undefined>(undefined);

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
      const isLocal = useMemo(() => {
        return typeof isUseLocal !== 'boolean' ? true : isUseLocal;
      }, [isUseLocal]);

      // 排序和过滤后的数据
      const sortAndFilterData = useMemo(() => {
        const { searchKeyWord = '', filterValues = {}, sortValues = [] } = combinationParams;

        let targetData = dataSource.data ?? [];

        if (isUseDNDMode) {
          targetData = optionDataSource.data;
        }

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
          }, dataSource.data ?? []);
        }

        // filter
        if (!(!searchKeyWord && isPrimaryEmpty(filterValues) && !sortValues.length)) {
          targetData = targetData.filter((record) => {
            if (searchKeyWord) {
              return Object.keys(record).some((_key) => record[_key].indexOf(searchKeyWord) !== -1);
            } else if (!isPrimaryEmpty(filterValues)) {
              return Object.keys(filterValues)
                .filter((_key) => !!filterValues[_key])
                .every((_key) => {
                  return record[_key].indexOf(filterValues[_key]) !== -1;
                });
            }

            return true;
          });
        }

        return targetData;
      }, [combinationParams, dataSource, isUseDNDMode, optionDataSource]);

      const targetDataSource = useMemo(() => {
        if (!isLocal) {
          if (isUseDNDMode) {
            return optionDataSource;
          }

          return dataSource;
        }

        let currentData = sortAndFilterData;

        if (isUsePaging) {
          const startIndex = (pagingRef.current.page - 1) * pagingRef.current.pageSize;

          currentData = sortAndFilterData.slice(
            startIndex,
            pagingRef.current.page * pagingRef.current.pageSize,
          );

          if (pagingRef.current.page !== 1) {
            currentData = [...sortAndFilterData.slice(0, startIndex), ...currentData];
          }
        }

        return {
          total: sortAndFilterData.length,
          data: currentData,
        };
      }, [
        dataSource,
        sortAndFilterData,
        optionDataSource,
        isUseDNDMode,
        isLocal,
        isUsePaging,
        pagingRef.current.page,
        pagingRef.current.pageSize,
      ]);

      const targetChildren = useMemo(() => {
        return children?.({
          dataSource: targetDataSource.data,
        });
      }, [children, targetDataSource.data]);

      const isEmpty = useCallback(() => !targetDataSource.data.length, [targetDataSource.data]);

      // 总页数
      const pages = useMemo(() => {
        return (targetDataSource?.total ?? 0) / pagingRef.current.pageSize;
      }, [pagingRef.current.pageSize, targetDataSource.total]);

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

      const offlineElement = useMemo(() => {
        return (
          renderOffLine?.() ?? (
            <ErrorBlock status="disconnected">
              <Button
                color="primary"
                onClick={() => {
                  forceUpdate();
                }}
              >
                {Intl.v('点击重试')}
              </Button>
            </ErrorBlock>
          )
        );
      }, [renderOffLine]);

      const searchKeyWordElement = useMemo(() => {
        return (
          <SearchKeyWord
            className={searchKeyWordWrapperClassName ?? ''}
            style={searchKeyWordWrapperStyle ?? {}}
            searchKeyWordBarProps={searchKeyWordBarProps}
            searchKeyWordMode={searchKeyWordMode ?? DEFAULT_SEARCH_KEY_WORD_MODE}
            searchKeyWordHistoryMaxSize={searchKeyWordHistoryMaxSize ?? DEFAULT_DISTANCE}
            isSearchKeyWordHistoryIntoStore={isSearchKeyWordHistoryIntoStore ?? true}
            searchKeyWordHistoryStoreType={
              searchKeyWordHistoryStoreType ?? DEFAULT_SEARCH_KEY_WORD_HISTORY_STORE_TYPE
            }
            disabled={!isUseNormalMode}
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
        isUseNormalMode,
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
          viewSettingTriggerMode={viewSettingTriggerMode}
          viewSettingTriggerProps={viewSettingTriggerProps}
          renderViewSetting={renderViewSetting}
          viewSettingConfig={viewSettingConfig}
          defaultViewSettingValue={defaultViewSettingValue}
          onViewSetting={onViewSetting}
          onViewSettingReset={onViewSettingReset}
          toolbarCollapseCount={toolbarCollapseCount}
          toolbarConfig={toolbarConfig}
          total={targetDataSource?.total ?? 0}
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
          disabled={!isUseNormalMode}
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
          <ScrollLoad
            // @ts-ignore
            ref={scrollLoadRef}
            renderLoading={renderLoadMoreLoading}
            distance={scrollLoadProps?.distance || 50}
            onScrollBottom={onScrollBottom}
            {...(scrollLoadProps || {})}
            disabled={!isUseNormalMode}
            className={classNames(
              `${selectorPrefix}-scroll-load`,
              scrollLoadProps?.className ?? '',
            )}
          >
            {renderScrollChildren()}
          </ScrollLoad>
        );
      }, [
        isUseDNDMode,
        isUseSelectionMode,
        isSelectionMultiple,
        isUseNormalMode,
        targetDataSource.data,
        renderLoadMoreLoading,
        scrollLoadProps,
        targetChildren,
      ]);

      const normalListElement = useMemo(() => {
        return (
          <div
            className={`${selectorPrefix}-scroll`}
            // @ts-ignore
            ref={scrollRef}
          >
            {targetChildren}
          </div>
        );
      }, [targetChildren]);

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
          <PullToRefresh
            {...(pullToRefreshProps ?? {})}
            onRefresh={onPullToRefresh}
            disabled={!isUseNormalMode}
          >
            {scrollLoadBeforeInnerElement}

            {isEmpty() && (renderEmpty?.() ?? <ErrorBlock status="empty" />)}
            {!isEmpty() && isUsePaging && scrollLoadElement}
            {!isEmpty() && !isUsePaging && normalListElement}

            {scrollLoadAfterInnerElement}

            {showBackTopAnimation && backTopAnimationElement}
          </PullToRefresh>
        );
      }, [
        paging,
        pullToRefreshProps,
        scrollLoadBeforeInnerElement,
        scrollLoadAfterInnerElement,
        scrollLoadElement,
        normalListElement,
        showBackTopAnimation,
        backTopAnimationElement,
        isUseNormalMode,
        renderEmpty,
        isUsePaging,
      ]);

      /**
       * renderInner
       * @description 渲染Inner
       */
      const renderInner = useCallback(() => {
        return (
          <>
            <div className={`${selectorPrefix}-header`}>
              <div className={`${selectorPrefix}-header-main`}>
                {showKeyWordSearchBar && searchKeyWordElement}
              </div>

              <div className={`${selectorPrefix}-header-extra`}>
                {isTargetUseDND && (
                  <DNDManageButton
                    isUseDNDMode={isUseDNDMode}
                    isUseNormalMode={isUseNormalMode}
                    onChange={(_isUseDNDMode) => {
                      if (_isUseDNDMode) {
                        setDNDMode();
                      } else {
                        setNormalMode();
                      }
                    }}
                    onFinish={() => {
                      setDataSource(optionDataSource);

                      const changeResult = dndFinish();

                      onDNDChange?.(changeResult);
                    }}
                    onCancel={dndCancel}
                  />
                )}

                {isTargetUseSelection && (
                  <SelectionManageButton
                    isUseSelectionMode={isUseSelectionMode}
                    isUseNormalMode={isUseNormalMode}
                    onChange={(_isUseSelectionMode) => {
                      if (_isUseSelectionMode) {
                        setSelectionMode();
                      } else {
                        setNormalMode();
                      }
                    }}
                    onFinish={() => {
                      const { selectedRows, selectedRowKeys, changeRowKeys, info } =
                        selectionFinish();
                      onSelectChange?.(
                        selectedRowKeys,
                        selectedRows,
                        changeRowKeys,
                        // @ts-ignore
                        info,
                      );
                    }}
                    onCancel={selectionCancel}
                  />
                )}
              </div>
            </div>

            {showToolBar && toolBarElement}

            <div
              className={classNames(`${selectorPrefix}-inner`, innerClassName ?? '')}
              style={innerStyle ?? {}}
            >
              {beforeInnerElement}

              {pullToRefreshElement}

              {afterInnerElement}
            </div>

            {isUseSelectionMode && isSelectionMultiple && <SelectionCheckAllManage />}
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
        isUseSelectionMode,
        isSelectionMultiple,
        isUseNormalMode,
        isUseDNDMode,
        isTargetUseDND,
        isTargetUseSelection,
      ]);

      function renderScrollChildren() {
        // 如果是选择模式 && 是单选的时候
        if (isUseSelectionMode && !isSelectionMultiple) {
          return renderSelectionWrapper(targetChildren);
        }

        // 如果是DND模式
        if (isUseDNDMode) {
          return (
            <SortableContainer
              onSortEnd={(...params) => {
                // @ts-ignore
                dndMove(...params);
              }}
              useDragHandle
            >
              {targetChildren}
            </SortableContainer>
          );
        }

        return targetChildren;
      }

      function setNormalMode() {
        setMode('normal');
      }

      function setSelectionMode() {
        setMode('selection');
      }

      function setDNDMode() {
        setMode('dnd');
      }

      function renderSelectionWrapper(_children) {
        if (isUseSelectionMode && !isSelectionMultiple) {
          return <Radio.Group>{_children}</Radio.Group>;
        }

        return _children;
      }

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
        return scrollLoadRef.current?.getScrollContainer() ?? scrollRef.current ?? document.body;
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

      /**
       * onScrollBottom
       * @description 滚动到底部
       * @param callback
       */
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

      const expose = {
        isUseSelectionMode: () => isUseSelectionMode,
        isUseDNDMode: () => isUseDNDMode,
        isUseNormalMode: () => isUseNormalMode,
        getRowKey: () => targetRowKey,
        getOptionSelectedRowKeys: () => optionSelectedRowKeys ?? [],
        selectionChange,
        selectionAllChange,
        getDatasourceLength: () => dataSource.data.length,
        getSelectionMultiple: () => isSelectionMultiple,
        getIndexByIdFormOptionDataSource: (id) => {
          return optionDataSource.data.findIndex((t) => t[targetRowKey] === id);
        },
        getDndDragHandle: () => dndDragHandle,
        getActionTriggerMode: () => targetActionTriggerMode,
        onAction: (record, rowIndex) => onAction?.(record, rowIndex) ?? [],
      };

      return (
        <Context.Provider value={expose}>
          <div className={classNames(selectorPrefix, className ?? '')} style={style ?? {}}>
            {networkState.online && renderChildren()}
            {!networkState.online && offlineElement}
          </div>
        </Context.Provider>
      );
    },
  ),
);

const PRSL = InternalPRSL as PRSLComponent;

PRSL.displayName = 'PRSL';

PRSL.Item = PRSLItem;

export default PRSL;
