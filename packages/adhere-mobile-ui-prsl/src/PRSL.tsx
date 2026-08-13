import { useMount, useNetwork, useUpdate, useUpdateEffect } from 'ahooks';
import { Button, DotLoading, ErrorBlock, PullToRefresh, Radio, Skeleton } from 'antd-mobile';
import classNames from 'classnames';
import type { Draft } from 'immer';
import isPrimaryEmpty from 'lodash.isempty';
import React, {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import type { PropsWithoutRef, ReactElement, RefAttributes } from 'react';
import { useImmer } from 'use-immer';

import BackTopAnimation from '@baifendian/adhere-ui-backtopanimation';
import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import ScrollLoad from '@baifendian/adhere-ui-scrollload';
import type {
  ScrollLoadRefHandle,
  ScrollLoadStatus,
} from '@baifendian/adhere-ui-scrollload/es/types';
import Intl from '@baifendian/adhere-util-intl';

import Context from './Context';
import { DNDManageButton, SortableContainer, useDND } from './DND';
import PRSLItem from './PRSLItem';
import SearchKeyWord from './SearchKeyWord';
import { SelectionCheckAllManage, SelectionManageButton, useSelection } from './Selection';
import ToolBar from './Toolbar';
import type {
  DataSource,
  DefaultSortValue,
  ModeType,
  PRSLComponent,
  PRSLHandle,
  PRSLProps,
} from './types';

const { useTheme } = ConfigProvider;

const selectorPrefix = 'adhere-mobile-ui-prsl';

const DEFAULT_PAGING_SIZE = 30;

const DEFAULT_PAGING_PAGE = 1;

const DEFAULT_DISTANCE = 50;

const DEFAULT_TOOLBAR_COLLAPSE_COUNT = 3;

const DEFAULT_SEARCH_KEY_WORD_HISTORY_STORE_TYPE = 'session';

const DEFAULT_SEARCH_KEY_WORD_HISTORY_MAX_SIZE = 50;

const DEFAULT_ROW_KEY = 'id';

const DEFAULT_MODE = 'normal';

const DEFAULT_SEARCH_KEY_WORD_MODE = 'normal';

const DEFAULT_IS_USE_DND = false;

const DEFAULT_IS_USE_SELECTION = false;

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
 *   {isUseBackTopAnimation && backTopAnimationElement}
 * }
 * afterInnerElement
 */
const InternalPRSL = memo<PropsWithoutRef<PRSLProps> & RefAttributes<PRSLHandle>>(
  forwardRef<PRSLHandle, PRSLProps>(
    (
      {
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
        isUseBackTopAnimation = true,
        backTopAnimationProps,
        scrollLoadBeforeRender,
        scrollLoadAfterRender,
        scrollLoadInnerBeforeRender,
        scrollLoadInnerAfterRender,
        scrollLoadInnerBeforeRenderClassName,
        scrollLoadInnerBeforeRenderStyle,
        scrollLoadInnerAfterRenderClassName,
        scrollLoadInnerAfterRenderStyle,
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
        selectionLabel,
        selectionFinishLabel,
        selectionCancelLabel,
        isUseSelection,
        // 选择模式开始
        selectedRowKeys,
        selectionMultiple,
        onSelectChange,
        isUseDND,
        dndDragHandle,
        dndLabel,
        dndFinishLabel,
        dndCancelLabel,
        onDNDChange,
        actionTriggerMode,
        renderActionSheetTrigger,
        onAction,
        // 选择模式结束
        headerExtra,
        children,
      },
      ref,
    ) => {
      const wrapperRef = useRef<HTMLDivElement | null>(null);

      const isFirstRef = useRef(true);

      const isFirstLoadingRef = useRef(false);

      const scrollRef = useRef<HTMLDivElement | null>(null);

      const callbackHandler = useRef<((status?: ScrollLoadStatus) => void) | null>(null);

      const status = useRef<ScrollLoadStatus>(ScrollLoad.NORMAL);

      const scrollLoadRef = useRef<ScrollLoadRefHandle | null>(null);

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

      useTheme<HTMLElement>({
        elRef: wrapperRef,
        group: 'mobile',
        displayName: 'PRSL',
      });

      const [dataSource, setDataSource] = useState<DataSource>({
        data: [],
        total: 0,
      });

      const [mode, setMode] = useState<ModeType>(DEFAULT_MODE);

      const networkState = useNetwork();

      const forceUpdate = useUpdate();

      const isUseNormalMode = useMemo(() => mode === 'normal', [mode]);

      const targetActionTriggerMode = useMemo(() => {
        return actionTriggerMode ?? DEFAULT_ACTION_TRIGGER_MODE;
      }, [actionTriggerMode]);

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
        total: dataSource.total,
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

      const isUsePaging = useMemo(() => {
        if (typeof paging === 'boolean') return paging;
        else return true;
      }, [paging]);

      // 是否使用本地模式
      const isLocal = useMemo(() => {
        return typeof isUseLocal !== 'boolean' ? false : isUseLocal;
      }, [isUseLocal]);

      // 排序和过滤后的数据
      const sortAndFilterData = useMemo(() => {
        const { searchKeyWord = '', filterValues = {}, sortValues = [] } = combinationParams;

        // 拷贝一份，避免后续排序 mutate 原始 state
        let targetData = [...((isUseDNDMode ? optionDataSource.data : dataSource.data) ?? [])];

        // 只对原始值做字符串包含匹配，其余类型(对象/数组等)视为不匹配
        const isFieldMatch = (fieldValue: any, kw: any) => {
          if (fieldValue === null || fieldValue === undefined) return false;

          if (['string', 'number', 'boolean'].includes(typeof fieldValue)) {
            return `${fieldValue}`.includes(`${kw}`);
          }

          return false;
        };

        // sort(跳过 order 为空的项，空 order 表示不参与排序)
        const validSortValues = (sortValues ?? []).filter(
          (t) => t?.order === 'asc' || t?.order === 'desc',
        );

        if (validSortValues.length) {
          targetData = validSortValues.reduce(
            (_dataSource, sortValue) => {
              const { order, name } = sortValue;

              return [..._dataSource].sort((r1, r2) => {
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
            },
            targetData,
          );
        }

        // filter(关键字与筛选条件叠加生效)
        const hasSearchKeyWord = !!searchKeyWord;
        const hasFilterValues = !isPrimaryEmpty(filterValues);

        if (hasSearchKeyWord || hasFilterValues) {
          targetData = targetData.filter((record) => {
            const matchKeyWord =
              !hasSearchKeyWord ||
              Object.keys(record).some((_key) => isFieldMatch(record[_key], searchKeyWord));

            const matchFilter =
              !hasFilterValues ||
              Object.keys(filterValues as Record<string, any>)
                .filter((_key) => !!(filterValues as Record<string, any>)[_key])
                .every((_key) =>
                  isFieldMatch(record[_key], (filterValues as Record<string, any>)[_key]),
                );

            return matchKeyWord && matchFilter;
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

      // 总页数
      const pages = useMemo(() => {
        return Math.ceil((targetDataSource?.total ?? 0) / pagingRef.current.pageSize) || 1;
      }, [/*pagingRef.current.pageSize,*/ targetDataSource.total]);

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
            <div>{`${Intl.get('data_loading')}`}...</div>
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
                {Intl.get('click_to_retry')}
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
            searchKeyWordHistoryMaxSize={
              searchKeyWordHistoryMaxSize ?? DEFAULT_SEARCH_KEY_WORD_HISTORY_MAX_SIZE
            }
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

      const scrollLoadBeforeWrapperElement = useMemo(() => {
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

      const scrollLoadAfterWrapperElement = useMemo(() => {
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

      const scrollLoadBeforeInnerElement = useMemo(() => {
        const element = scrollLoadInnerBeforeRender?.();

        return (
          element && (
            <div
              className={classNames(
                `${selectorPrefix}-scroll-inner-before`,
                scrollLoadInnerBeforeRenderClassName ?? '',
              )}
              style={scrollLoadInnerBeforeRenderStyle ?? {}}
            >
              {element}
            </div>
          )
        );
      }, [
        scrollLoadInnerBeforeRender,
        scrollLoadInnerBeforeRenderClassName,
        scrollLoadInnerBeforeRenderStyle,
      ]);

      const scrollLoadAfterInnerElement = useMemo(() => {
        const element = scrollLoadInnerAfterRender?.();

        return (
          element && (
            <div
              className={classNames(
                `${selectorPrefix}-scroll-inner-after`,
                scrollLoadInnerAfterRenderClassName ?? '',
              )}
              style={scrollLoadInnerAfterRenderStyle ?? {}}
            >
              {element}
            </div>
          )
        );
      }, [
        scrollLoadInnerAfterRender,
        scrollLoadInnerAfterRenderClassName,
        scrollLoadInnerAfterRenderStyle,
      ]);

      const isEmpty = useCallback(() => !targetDataSource.data.length, [targetDataSource.data]);

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

      const scrollLoadElement = useMemo(() => {
        return (
          <ScrollLoad
            ref={scrollLoadRef}
            renderLoading={renderLoadMoreLoading}
            distance={scrollLoadProps?.distance || DEFAULT_DISTANCE}
            onScrollBottom={onScrollBottom}
            {...(scrollLoadProps || {})}
            disabled={!!scrollLoadProps?.disabled || pages <= 1 || !isUseNormalMode}
            className={classNames(
              `${selectorPrefix}-scroll-load`,
              scrollLoadProps?.className ?? '',
            )}
          >
            {scrollLoadBeforeInnerElement}
            {renderScrollChildren()}
            {scrollLoadAfterInnerElement}
          </ScrollLoad>
        );
      }, [
        scrollLoadBeforeInnerElement,
        scrollLoadAfterInnerElement,
        isUseDNDMode,
        isUseSelectionMode,
        isSelectionMultiple,
        isUseNormalMode,
        targetDataSource.data,
        renderLoadMoreLoading,
        scrollLoadProps,
        targetChildren,
        pages,
        combinationParams,
      ]);

      // 非分页模式也需要经过 renderScrollChildren，否则 DND/单选包裹会丢失
      const normalListElement = useMemo(() => {
        return (
          <div
            className={`${selectorPrefix}-scroll`}
            ref={scrollRef}
          >
            {scrollLoadBeforeInnerElement}
            {renderScrollChildren()}
            {scrollLoadAfterInnerElement}
          </div>
        );
      }, [
        scrollLoadBeforeInnerElement,
        scrollLoadAfterInnerElement,
        isUseDNDMode,
        isUseSelectionMode,
        isSelectionMultiple,
        targetChildren,
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

      const dndManageButton = useMemo(() => {
        return (
          isTargetUseDND && (
            <DNDManageButton
              dndLabel={dndLabel}
              dndFinishLabel={dndFinishLabel}
              dndCancelLabel={dndCancelLabel}
              isUseDNDMode={isUseDNDMode}
              isUseNormalMode={isUseNormalMode}
              onChange={(_isUseDNDMode: boolean) => {
                if (_isUseDNDMode) {
                  setDNDMode();
                } else {
                  setNormalMode();
                }
              }}
              onFinish={() => {
                setDataSource(optionDataSource);

                const changeResult = dndFinish();

                if (changeResult) {
                  onDNDChange?.(changeResult);
                }
              }}
              onCancel={dndCancel}
            />
          )
        );
      }, [
        isTargetUseDND,
        isUseDNDMode,
        isUseNormalMode,
        optionDataSource,
        dndLabel,
        dndFinishLabel,
        dndCancelLabel,
        dndFinish,
        dndCancel,
        onDNDChange,
      ]);

      const selectionManageButton = useMemo(() => {
        return (
          isTargetUseSelection && (
            <SelectionManageButton
              selectionLabel={selectionLabel}
              selectionFinishLabel={selectionFinishLabel}
              selectionCancelLabel={selectionCancelLabel}
              isUseSelectionMode={isUseSelectionMode}
              isUseNormalMode={isUseNormalMode}
              onChange={(_isUseSelectionMode: boolean) => {
                if (_isUseSelectionMode) {
                  setSelectionMode();
                } else {
                  setNormalMode();
                }
              }}
              onFinish={() => {
                const { selectedRows, selectedRowKeys, changeRowKeys, info } = selectionFinish();
                onSelectChange?.(
                  selectedRowKeys,
                  selectedRows,
                  changeRowKeys,
                  info,
                );
              }}
              onCancel={selectionCancel}
            />
          )
        );
      }, [
        isTargetUseSelection,
        selectionLabel,
        selectionFinishLabel,
        selectionCancelLabel,
        isUseSelectionMode,
        isUseNormalMode,
        selectionFinish,
        selectionCancel,
        onSelectChange,
      ]);

      const pullToRefreshElement = useMemo(() => {
        return (
          <PullToRefresh
            {...(pullToRefreshProps ?? {})}
            onRefresh={onPullToRefresh}
            disabled={!isUseNormalMode}
          >
            {scrollLoadBeforeWrapperElement}

            {isEmpty() && (renderEmpty?.() ?? <ErrorBlock status="empty" />)}
            {!isEmpty() && isUsePaging && scrollLoadElement}
            {!isEmpty() && !isUsePaging && normalListElement}

            {scrollLoadAfterWrapperElement}

            {isUseBackTopAnimation && backTopAnimationElement}
          </PullToRefresh>
        );
      }, [
        paging,
        pullToRefreshProps,
        scrollLoadBeforeWrapperElement,
        scrollLoadAfterWrapperElement,
        scrollLoadElement,
        normalListElement,
        isUseBackTopAnimation,
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
        const defaultHeaderExtra = [dndManageButton, selectionManageButton].filter(
          (t) => !!t,
        ) as ReactElement[];

        const targetHeaderExtra = headerExtra?.(defaultHeaderExtra, mode) ?? defaultHeaderExtra;

        let existsHeaderExtra = false;

        if (targetHeaderExtra) {
          if (Array.isArray(targetHeaderExtra) && targetHeaderExtra.length) {
            existsHeaderExtra = true;
          }
        }

        return (
          <>
            <div className={`${selectorPrefix}-header`}>
              <div className={`${selectorPrefix}-header-main`}>
                {showKeyWordSearchBar && searchKeyWordElement}
              </div>

              {existsHeaderExtra ? (
                <div className={`${selectorPrefix}-header-extra`}>{targetHeaderExtra}</div>
              ) : null}
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
        dndManageButton,
        selectionManageButton,
        headerExtra,
        mode,
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
              onSortEnd={(params) => {
                dndMove(params);
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

        // 没有提供 onLoadMore 时直接结束 loading，避免加载动画卡死
        if (!onLoadMore) {
          callbackHandler.current?.(status.current);
          callbackHandler.current = null;
          return;
        }

        return onLoadMore({
          page: pagingRef.current.page + 1,
          pageSize: pagingRef.current.pageSize,
          ...combinationParams,
        })
          .then((res) => {
            pagingRef.current.page += 1;

            setDataSource((_dataSource) => ({
              total: res.total,
              data: [..._dataSource.data, ...res.data],
            }));
          })
          .catch(() => {
            // 加载失败时结束 loading，否则 ScrollLoad 状态卡死
            callbackHandler.current?.(ScrollLoad.ERROR);
            callbackHandler.current = null;
          });
      }

      function resetScrollLoadAndPaging() {
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

      function resetSearchAndFilterAndSort() {
        setCombinationParams((draft) => {
          draft.searchKeyWord = defaultSearchKeyWord ?? '';
          draft.filterValues = defaultFilterValues ?? {};
          draft.sortValues = defaultSortValues ?? [];
        });
      }

      function reset() {
        resetScrollLoadAndPaging();
        resetSearchAndFilterAndSort();
      }

      function onFilter(filterData: Draft<Record<string, any>> | undefined) {
        resetScrollLoadAndPaging();

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
        resetScrollLoadAndPaging();

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

      function onSort(sortData: Draft<DefaultSortValue>[] | undefined) {
        resetScrollLoadAndPaging();

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
        resetScrollLoadAndPaging();

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

      function onSearch(value: string | undefined) {
        resetScrollLoadAndPaging();

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
        resetScrollLoadAndPaging();

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

      function pullToRefresh(
        _resetCallback: () => void,
        _params?: typeof combinationParams,
      ): Promise<void> {
        const params = _params ?? {
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

        return resolve.then(() => {
          _resetCallback();

          if (isLocal) {
            forceUpdate();
            return;
          }

          return onRefresh?.({
            ...pagingRef.current,
            ...params,
          }).then((res) => {
            setDataSource(res);
          });
        }) as Promise<void>;
      }

      function pullToRefreshAll() {
        return pullToRefresh(reset);
      }

      function pullToRefreshPagination() {
        // 只重置分页，查询条件保持当前值，与界面上显示的搜索/筛选状态一致
        return pullToRefresh(resetScrollLoadAndPaging, { ...combinationParams });
      }

      /**
       * onPullToRefresh
       * @description 完全重置
       */
      function onPullToRefresh() {
        return pullToRefreshAll();
      }

      /**
       * onScrollBottom
       * @description 滚动到底部
       * @param callback
       */
      function onScrollBottom(callback?: (status?: ScrollLoadStatus) => void) {
        // if (status.current === ScrollLoad.EMPTY) {
        //   status.current = ScrollLoad.EMPTY;
        //   callback(ScrollLoad.EMPTY);
        //   return;
        // }

        callbackHandler.current = callback ?? null;

        void appendData();
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
      }, [targetDataSource.data, pages /*pagingRef.current.page*/]);

      // 用序列化结果做依赖，避免父组件传入内联字面量(如 defaultSortValues={[]})时
      // 每次渲染都触发 reset + 重新加载
      const combinationDefaultsSignature = JSON.stringify({
        defaultSearchKeyWord,
        defaultSortValues,
        defaultFilterValues,
      });

      useUpdateEffect(() => {
        reset();

        loadDataCall({
          searchKeyWord: defaultSearchKeyWord,
          filterValues: defaultFilterValues,
          sortValues: defaultSortValues,
        });
      }, [combinationDefaultsSignature, isLocal]);

      useImperativeHandle(ref, () => ({
        getScrollEl,
        scrollLoadHideAll: () => scrollLoadRef?.current?.hideAll?.(),
        resetPagination: () => pullToRefreshPagination(),
        resetAll: () => pullToRefreshAll(),
        loadData: () =>
          loadDataCall({
            searchKeyWord: defaultSearchKeyWord,
            filterValues: defaultFilterValues,
            sortValues: defaultSortValues,
          }),
        resetPaginationAndLoadData: () => {
          resetScrollLoadAndPaging();

          return loadDataCall({
            searchKeyWord: defaultSearchKeyWord,
            filterValues: defaultFilterValues,
            sortValues: defaultSortValues,
          });
        },
      }));

      // memo 化 context value，避免每次渲染都触发所有 PRSLItem 重新渲染
      const contextExpose = useMemo(
        () => ({
          isUseSelectionMode: () => isUseSelectionMode,
          isUseDNDMode: () => isUseDNDMode,
          isUseNormalMode: () => isUseNormalMode,
          selectionChange,
          selectionAllChange,
          getRowKey: () => targetRowKey,
          getOptionSelectedRowKeys: () => optionSelectedRowKeys ?? [],
          getDatasourceLength: () => dataSource.data.length,
          getSelectionMultiple: () => isSelectionMultiple,
          getIndexByIdFormOptionDataSource: (id: string | number) => {
            return optionDataSource.data.findIndex((t) => t[targetRowKey] === id);
          },
          getDndDragHandle: () => dndDragHandle,
          getActionTriggerMode: () => targetActionTriggerMode,
          getRenderActionSheetTrigger: () => renderActionSheetTrigger?.(),
          onAction: (record: Record<string, any>, rowIndex: number) =>
            onAction?.(record, rowIndex) ?? [],
        }),
        [
          isUseSelectionMode,
          isUseDNDMode,
          isUseNormalMode,
          selectionChange,
          selectionAllChange,
          targetRowKey,
          optionSelectedRowKeys,
          dataSource.data,
          isSelectionMultiple,
          optionDataSource,
          dndDragHandle,
          targetActionTriggerMode,
          renderActionSheetTrigger,
          onAction,
        ],
      );

      return (
        <Context.Provider value={contextExpose}>
          <div
            ref={wrapperRef}
            className={classNames(selectorPrefix, className ?? '')}
            style={style ?? {}}
          >
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
