import { Tooltip } from 'antd';
import type { ExpandableConfig } from 'antd/es/table/interface';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { ReactElement, ReactNode, RefObject, createRef } from 'react';

import { InfoCircleOutlined } from '@ant-design/icons';
import FlexLayout from '@baifendian/adhere-ui-flexlayout';
import Suspense from '@baifendian/adhere-ui-suspense';
import Util from '@baifendian/adhere-util';
import Intl from '@baifendian/adhere-util-intl';

import { selectorPrefix } from './SearchTable';
import { SearchProps, SearchState, TableRowSelectionExt } from './types';

const { Fixed, Auto } = FlexLayout;

/**
 * Search
 * @class
 * @classdesc 查询
 */
abstract class Search<
  P extends SearchProps = SearchProps,
  S extends SearchState = SearchState,
> extends Suspense<P, S> {
  static displayName = 'Search';

  static defaultProps: any;

  static propTypes: any;

  props: any;

  state: any;

  protected searchFormRef: RefObject<HTMLElement | null> = createRef<HTMLElement | null>();

  protected constructor(props) {
    super(props);
  }

  /**
   * renderSearchBefore
   * @description 渲染查询面板之前
   * @return {ReactNode}
   */
  abstract renderSearchFormBefore(): ReactNode;

  /**
   * renderSearchForm
   * @description 渲染查询的UI
   * @return {ReactNode}
   */
  abstract renderSearchForm(): ReactNode;

  /**
   * renderSearchFormToolBar
   * @description 渲染查询表单的工具栏
   * @return {ReactNode}
   */
  abstract renderSearchFormToolBar(): ReactNode;

  /**
   * renderSearchFormToolBarItems
   * @description 渲染查询表单的工具栏项
   * @param {ReactElement[]} defaultItems
   * @return {ReactNode []}
   */
  abstract renderSearchFormToolBarItems(defaultItems: ReactElement[]): ReactNode[];

  /**
   * renderSearchFormToolBarDefaultPanel
   * @description 渲染查询表单工具栏缺省面板
   * @return {ReactNode}
   */
  abstract renderSearchFormToolBarDefaultPanel(): ReactNode;

  /**
   * renderSearchBefore
   * @description 渲染查询面板之后
   * @return {ReactNode}
   */
  abstract renderSearchFormAfter(): ReactNode;

  /**
   * renderSearchHeader
   * @description 渲染表格的头
   * @return {ReactNode}
   */
  abstract renderSearchHeader(): ReactNode;

  /**
   * renderSearchFooter
   * @description 渲染表格的脚
   * @return {ReactNode}
   */
  abstract renderSearchFooter(): ReactNode;

  /**
   * renderSearchFooterItems
   * @description 渲染SearchFooter的按钮组
   * @return {ReactNode}
   */
  abstract renderSearchFooterItems(defaultItems: ReactElement[]): ReactNode[];

  /**
   * renderSearchBarActions
   */
  abstract renderSearchBarActions(): ReactNode;

  /**
   * renderBody
   * @description 渲染查询主体
   * @return {ReactNode}
   */
  abstract renderBody(): ReactNode;

  /**
   * getTotal
   * @description 获取数据总数
   * @return {number}
   */
  abstract getTotal(): number;

  /**
   *
   * getRowSelection
   * @description 获取表格行选择对象
   * @return {TableRowSelectionExt<any> | null}
   */
  abstract getRowSelection(): TableRowSelectionExt<any> | null;

  /**
   *
   * getExpandable
   * @description 表格Tree展开对象
   * @return {ExpandableConfig<any> | null | undefined}
   */
  abstract getExpandable():
    | ExpandableConfig<any>
    | {
        expandedRowKeys: string[];
        onExpandedRowsChange: (expandedRowKeys: string[]) => void;
      }
    | null
    | undefined;

  /**
   * clear
   * @description 清除查询操作
   * @return {Promise<any>}
   */
  abstract clearSearch(): Promise<void>;

  /**
   * clearPaging
   * @description 清除分页信息
   * @return {Promise<any>}
   */
  abstract clearPaging(): Promise<void>;

  /**
   * getCurrent
   * @description 获取当前的页码
   * @return {number}
   */
  abstract getCurrent(): number;

  /**
   * onSearch
   * @description 进行查询
   * @return {Promise<void>}
   */
  abstract onSearch(): Promise<any>;

  /**
   * getDerivedStateFromProps
   * @description getDerivedStateFromProps
   * @param {SearchProps} props
   * @param {SearchState} state
   * @return {any}
   */
  static getDerivedStateFromProps(props: SearchProps, state: SearchState) {
    return {
      ...(state ?? {}),
      // TODO: 处理prePage
      prePage: state?.page,
    };
  }

  /**
   * renderTitle
   */
  renderTitle(): ReactElement {
    const { title, titleToolTip = '' } = this.props;

    return (
      <div className={`${selectorPrefix}-search-tool-bar-title-inner`}>
        <div className={`${selectorPrefix}-search-tool-bar-title-content`}>{title}</div>
        {!!titleToolTip && (
          <div className={`${selectorPrefix}-search-tool-bar-title-info`}>
            <Tooltip title={typeof title === 'string' ? title : titleToolTip}>
              <InfoCircleOutlined />
            </Tooltip>
          </div>
        )}
      </div>
    );
  }

  /**
   * renderSearchBarExtra
   */
  renderSearchBarExtra(): ReactNode {
    return null;
  }

  /**
   * renderSearchToolBar
   * @description 渲染查询工具栏
   * @return {ReactNode}
   */
  renderSearchToolBar(): ReactNode {
    // 优化：缓存 render 方法调用结果，避免重复执行
    const titleContent = this.renderTitle?.();
    const searchBarExtraContent = this.renderSearchBarExtra?.();
    const searchBarActionsContent = this.renderSearchBarActions?.();

    // 优化：预先判断是否需要渲染 auto 容器
    const hasAutoContent = !!searchBarExtraContent || !!searchBarActionsContent;

    return (
      <>
        {this.props.title && titleContent && (
          <div className={classNames(`${selectorPrefix}-search-tool-bar-title`)}>
            {titleContent}
          </div>
        )}

        {hasAutoContent && (
          <div className={classNames(`${selectorPrefix}-search-tool-bar-auto`)}>
            {searchBarExtraContent && (
              <div className={classNames(`${selectorPrefix}-search-tool-bar-extra`)}>
                {searchBarExtraContent}
              </div>
            )}

            {searchBarActionsContent && (
              <div className={classNames(`${selectorPrefix}-search-tool-bar-actions`)}>
                {searchBarActionsContent}
              </div>
            )}
          </div>
        )}
      </>
    );
  }

  /**
   * getPagination
   * @description 获取分页信息
   * @return {TablePaginationConfig}
   */
  getPagination() {
    const defaultLimit = this.getLimit();
    const defaultPageSizeOptions = [10, 20, 50, 100];
    if (!defaultPageSizeOptions.includes(defaultLimit)) {
      defaultPageSizeOptions.push(defaultLimit);
    }

    return {
      // onChange: (page, limit) => {
      //   // @ts-ignore
      //   this.setState(
      //     {
      //       page,
      //       limit,
      //     },
      //     () => {
      //       // @ts-ignore
      //       this.fetchData();
      //     },
      //   );
      // },
      // onShowSizeChange: (page, limit) => {
      //   // @ts-ignore
      //   this.setState(
      //     {
      //       page,
      //       limit,
      //     },
      //     () => {
      //       // @ts-ignore
      //       this.fetchData();
      //     },
      //   );
      // },
      showTotal: (total /* [page, pageSize] */) => {
        return Intl.get(`pagination_info`, {
          page: this.state.page,
          pageSize: this.state.limit,
          total,
        });
      },
      total: this.getTotal(),
      current: this.state.page,
      pageSize: this.state.limit,
      pageSizeOptions: defaultPageSizeOptions.sort((t1, t2) => t1 - t2),
      showQuickJumper: true,
      showSizeChanger: true,
    };
  }

  /**
   * getComponentId
   * @description 获取componentId
   */
  getComponentId() {
    return Util.uuid();
  }

  /**
   * getLimit
   * @description limit参数
   * @return {number}
   */
  getLimit(): number {
    return 10;
  }

  /**
   * clearAll
   * @description 清除所有条件 包括分页数据和查询条件
   * @return {Promise<[void, void]>}
   */
  clearAll(): Promise<[void, void]> {
    return Promise.all([this.clearSearch(), this.clearPaging()]);
  }

  /**
   * onClear
   * @description - 清除操作
   * @return {Promise<void>}
   */
  onClear(): Promise<any> {
    return new Promise((resolve) => {
      this.clearAll().then(() => this.fetchData().then((res) => resolve(res)));
    });
  }

  isUseSearchWrapperGap() {
    const { isUseSearchWrapperGap = true } = this.props;
    return isUseSearchWrapperGap;
  }

  isUseSearchFormToolBarGap() {
    const { isUseSearchFormToolBarGap = true } = this.props;
    return isUseSearchFormToolBarGap;
  }

  getSearchFormBeforeClassName() {
    const { searchFormBeforeClassName } = this.props;
    return searchFormBeforeClassName;
  }

  getSearchFormAfterClassName() {
    const { searchFormAfterClassName } = this.props;
    return searchFormAfterClassName;
  }

  getSearchFormToolBarClassName() {
    const { searchFormToolBarClassName } = this.props;
    return searchFormToolBarClassName;
  }

  getSearchToolbarClassName() {
    const { searchToolbarClassName } = this.props;
    return searchToolbarClassName;
  }

  getSearchFormExpandClassName() {
    const { searchFormExpandClassName } = this.props;
    return searchFormExpandClassName;
  }

  getBodyClassName() {
    const { bodyClassName } = this.props;
    return bodyClassName;
  }

  /**
   * renderInner
   * @description
   * @param {any} bodyWrapRef
   * @param {string} className
   * @return {ReactElement}
   */
  renderInner(bodyWrapRef?: any, className?: string) {
    // 性能监控：记录开始时间
    // const startTime = performance.now();

    const {
      style,
      bodyStyle,
      searchClassName,
      searchStyle,
      fitBody = true,
      autoFixed = true,
    } = this.props;

    // 性能监控：记录每个部分的执行时间
    // const renderTimings: { [key: string]: number } = {};

    // 优化：提前获取所有 className，减少重复调用
    // let t0 = performance.now();
    const isUseSearchWrapperGap = this.isUseSearchWrapperGap();
    const isUseSearchFormToolBarGap = this.isUseSearchFormToolBarGap();
    const bodyClassName = this.getBodyClassName();
    const searchFormBeforeClassName = this.getSearchFormBeforeClassName();
    const searchFormAfterClassName = this.getSearchFormAfterClassName();
    const searchFormToolBarClassName = this.getSearchFormToolBarClassName();
    const searchToolbarClassName = this.getSearchToolbarClassName();
    const searchFormExpandClassName = this.getSearchFormExpandClassName();
    // renderTimings['getClassNames'] = performance.now() - t0;

    const { expand = false } = this.state;

    // 优化：缓存 render 方法调用结果，避免重复执行

    // let t1 = performance.now();
    const searchFormBeforeContent = this.renderSearchFormBefore?.();
    // renderTimings['renderSearchFormBefore'] = performance.now() - t1;

    // t1 = performance.now();
    const searchFormContent = this.renderSearchForm?.();
    // renderTimings['renderSearchForm'] = performance.now() - t1;

    // t1 = performance.now();
    const searchFormToolBarContent = this.renderSearchFormToolBar?.();
    // renderTimings['renderSearchFormToolBar'] = performance.now() - t1;

    // t1 = performance.now();
    const searchToolBarContent = this.renderSearchToolBar?.();
    // renderTimings['renderSearchToolBar'] = performance.now() - t1;

    // t1 = performance.now();
    const searchFormAfterContent = this.renderSearchFormAfter?.();
    // renderTimings['renderSearchFormAfter'] = performance.now() - t1;

    // t1 = performance.now();
    const searchHeaderContent = this.renderSearchHeader?.();
    // renderTimings['renderSearchHeader'] = performance.now() - t1;

    // t1 = performance.now();
    const searchFooterContent = this.renderSearchFooter?.();
    // renderTimings['renderSearchFooter'] = performance.now() - t1;

    // 优化：预先判断是否需要渲染 search wrapper，避免在 JSX 中重复调用
    const hasSearchWrapper =
      !!searchFormBeforeContent ||
      !!searchFormContent ||
      !!searchToolBarContent ||
      !!searchFormAfterContent;

    // SearchFormBefore
    // SearchForm
    // SearchFormToolBar
    // SearchToolBar
    // SearchFormAfter
    // SearchHeader
    // SearchBody
    // SearchFooter

    // 性能监控：计算总执行时间
    // const endTime = performance.now();
    // const duration = endTime - startTime;

    // 监控 renderBody 执行时间
    // t1 = performance.now();
    const bodyContent = this.renderBody();
    // renderTimings['renderBody'] = performance.now() - t1;

    // 找出最慢的方法
    // let slowestMethod = '';
    // let slowestTime = 0;
    // const sortedTimings: Array<[string, number]> = [];

    // for (const [method, time] of Object.entries(renderTimings)) {
    //   sortedTimings.push([method, time]);
    //   if (time > slowestTime) {
    //     slowestTime = time;
    //     slowestMethod = method;
    //   }
    // }

    // 按执行时间降序排序
    // sortedTimings.sort((a, b) => b[1] - a[1]);

    // 输出性能数据
    // console.group(`[Performance] Search.renderInner 总执行时间: ${duration.toFixed(3)}ms`);
    // console.log('📊 各方法执行时间排序（从慢到快）：');
    // console.table(Object.fromEntries(sortedTimings));

    // if (slowestMethod) {
    //   console.warn(
    //     `⚠️ 最慢的方法: ${slowestMethod} (${slowestTime.toFixed(3)}ms) - 占比 ${(
    //       (slowestTime / duration) *
    //       100
    //     ).toFixed(1)}%`,
    //   );
    // }

    // 输出占比超过 10% 的方法
    // const slowMethods = sortedTimings.filter(([_, time]) => time / duration > 0.1);
    // if (slowMethods.length > 0) {
    //   console.log('🐌 耗时占比超过 10% 的方法：');
    //   slowMethods.forEach(([method, time]) => {
    //     console.log(
    //       `  - ${method}: ${time.toFixed(3)}ms (${((time / duration) * 100).toFixed(1)}%)`,
    //     );
    //   });
    // }

    // console.groupEnd();

    return (
      <FlexLayout
        direction="vertical"
        className={classNames(selectorPrefix, className ?? '')}
        style={style ?? {}}
      >
        {hasSearchWrapper && (
          <Fixed
            className={classNames(
              `${selectorPrefix}-search-wrapper`,
              {
                [`${selectorPrefix}-search-wrapper-gap`]: isUseSearchWrapperGap,
              },
              searchClassName,
            )}
            style={searchStyle ?? {}}
          >
            {searchFormBeforeContent && (
              <Fixed
                className={classNames(
                  `${selectorPrefix}-search-form-before`,
                  searchFormBeforeClassName,
                )}
              >
                {searchFormBeforeContent}
              </Fixed>
            )}

            {/* 查询 */}
            {searchFormContent && expand && (
              <Fixed
                // @ts-ignore
                ref={this.searchFormRef}
                className={classNames(`${selectorPrefix}-search-form`, {
                  [`${selectorPrefix}-search-form-expand`]: expand,
                  [searchFormExpandClassName]: !!searchFormExpandClassName && expand,
                })}
              >
                {searchFormContent}
              </Fixed>
            )}

            {/* 查询的工具栏 */}
            {searchFormContent && searchFormToolBarContent && (
              <Fixed
                className={classNames(
                  `${selectorPrefix}-search-form-tool-bar`,
                  {
                    [`${selectorPrefix}-search-form-tool-bar-gap`]: isUseSearchFormToolBarGap,
                  },
                  searchFormToolBarClassName,
                )}
              >
                {searchFormToolBarContent}
              </Fixed>
            )}

            {/* 工具栏 */}
            {searchToolBarContent && (
              <Fixed
                data-title={this.props.title}
                className={classNames(
                  `${selectorPrefix}-search-tool-bar`,
                  {
                    [`${selectorPrefix}-search-form-expand`]: expand,
                  },
                  searchToolbarClassName,
                )}
              >
                {searchToolBarContent}
              </Fixed>
            )}

            {searchFormAfterContent && (
              <Fixed
                className={classNames(
                  `${selectorPrefix}-search-form-after`,
                  searchFormAfterClassName,
                )}
              >
                {searchFormAfterContent}
              </Fixed>
            )}
          </Fixed>
        )}

        {/* Header */}
        {searchHeaderContent && (
          <Fixed className={`${selectorPrefix}-search-header`}>{searchHeaderContent}</Fixed>
        )}

        {/* Body */}
        <Auto
          style={bodyStyle ?? {}}
          className={classNames(`${selectorPrefix}-auto-wrapper`, bodyClassName, {
            ['autofixed']: autoFixed,
          })}
          fit={fitBody}
          autoFixed={autoFixed}
        >
          <div ref={bodyWrapRef} className={`${selectorPrefix}-table-wrapper`}>
            {bodyContent}
          </div>
        </Auto>

        {/* Footer */}
        {searchFooterContent && (
          <Fixed className={`${selectorPrefix}-search-footer`}>{searchFooterContent}</Fixed>
        )}
      </FlexLayout>
    );
  }
}

export const defaultProps = {
  className: '',
  style: {},
  searchClassName: '',
  searchStyle: {},
  // 第一次
  isFirst: true,
  // 第一次加载
  isFirstLoading: null,
  isShowExpandSearch: true,
  defaultExpandSearchCollapse: true,
  // fitSearch: true,
  fitBody: true,
  autoFixed: true,
};

export const propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  searchClassName: PropTypes.string,
  searchStyle: PropTypes.object,
  reset: PropTypes.bool,
  firstLoading: PropTypes.node,
  // 是否有展开和收缩的功能
  isShowExpandSearch: PropTypes.bool,
  // 展开和收缩的默认状态
  defaultExpandSearchCollapse: PropTypes.bool,
  // 撑开search
  // fitSearch: PropTypes.bool,
  // 撑开表格
  fitBody: PropTypes.bool,
  // 是否是查询固定，表格自适应
  autoFixed: PropTypes.bool,
  // 列表标题
  title: PropTypes.string,
};

Search.defaultProps = defaultProps;

Search.propTypes = propTypes;

export default Search;
