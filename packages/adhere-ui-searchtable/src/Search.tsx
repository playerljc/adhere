import { TablePaginationConfig, TableRowSelection } from 'antd/es/table/interface';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { ReactElement, ReactNode } from 'react';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';
import Suspense from '@baifendian/adhere-ui-suspense';
import Intl from '@baifendian/adhere-util-intl';

import { selectorPrefix } from './SearchTable';
import type { SearchProps, SearchState } from './types';

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
  static defaultProps: any;
  static propTypes: any;
  props: any;
  state: any;

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
   * renderSearchToolBar
   * @description 渲染查询工具栏
   * @return {ReactNode}
   */
  abstract renderSearchToolBar(): ReactNode;

  /**
   * renderBody
   * @description 渲染查询主体
   * @return {ReactNode}
   */
  abstract renderBody(): ReactNode;

  /**
   *
   * getRowSelection
   * @description 获取表格行选择对象
   * @return {TableRowSelection<any>}
   */
  abstract getRowSelection(): TableRowSelection<any>;

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
   * getTotal
   * @description 获取表格数据的总数
   * @return {number}
   */
  abstract getTotal(): number;

  /**
   * onSearch
   * @description 进行查询
   * @return {Promise<void>}
   */
  abstract onSearch(): Promise<void>;

  /**
   * getDerivedStateFromProps
   * @description getDerivedStateFromProps
   * @param {SearchProps} props
   * @param {SearchState} state
   * @return {any}
   */
  static getDerivedStateFromProps(props: SearchProps, state: SearchState) {
    return {
      ...(state || {}),
      // TODO: 处理prePage
      prePage: state?.page,
    };
  }

  /**
   * getPagination
   * @description 获取分页信息
   * @return {TablePaginationConfig}
   */
  getPagination() {
    return {
      onChange: (page, limit) => {
        // @ts-ignore
        this.setState(
          {
            page,
            limit,
          },
          () => {
            // @ts-ignore
            this.fetchData();
          },
        );
      },
      onShowSizeChange: (page, limit) => {
        // @ts-ignore
        this.setState(
          {
            page,
            limit,
          },
          () => {
            // @ts-ignore
            this.fetchData();
          },
        );
      },
      showTotal: (total /* [page, pageSize] */) => {
        return Intl.v(`当前 {page}-{pageSize}/共 {total}条`, {
          page: this.state.page,
          pageSize: this.state.limit,
          total,
        });
      },
      total: this.getTotal(),
      current: this.state.page,
      pageSize: this.state.limit,
      showQuickJumper: true,
    };
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
  onClear(): Promise<void> {
    // @ts-ignore
    return this.clearAll().then(() => this.fetchData());
  }

  /**
   * renderInner
   * @description
   * @param {any} bodyWrapRef
   * @param {string} className
   * @return {ReactElement | null}
   */
  renderInner(bodyWrapRef?: any, className?: string): ReactElement | null {
    const {
      style,
      bodyClassName,
      bodyStyle,
      searchClassName,
      searchStyle,
      // fitSearch,
      fitBody = true,
      autoFixed = true,
    } = this.props;

    const { expand = false } = this.state;

    return (
      <FlexLayout
        direction="vertical"
        className={classNames(selectorPrefix, className)}
        style={{ ...(style || {}) }}
      >
        {((!!this.renderSearchFormBefore && !!this.renderSearchFormBefore?.()) ||
          (!!this.renderSearchForm && !!this.renderSearchForm?.()) ||
          (!!this.renderSearchToolBar && !!this.renderSearchToolBar?.()) ||
          (!!this.renderSearchFormAfter && !!this.renderSearchFormAfter?.())) && (
          <Fixed
            {...this.props}
            className={classNames(`${selectorPrefix}-searchwrapper`, searchClassName)}
            style={{ ...(searchStyle || {}) }}
            // fit={fitSearch}
          >
            {!!this.renderSearchFormBefore && !!this.renderSearchFormBefore?.() && (
              <Fixed {...this.props} className={`${selectorPrefix}-search-form-before`}>
                {this.renderSearchFormBefore?.()}
              </Fixed>
            )}

            {!!this.renderSearchForm && !!this.renderSearchForm?.() && expand && (
              <Fixed
                {...this.props}
                className={classNames({
                  [`${selectorPrefix}-search-form`]: true,
                  [`${selectorPrefix}-search-form-expand`]: expand,
                })}
              >
                {this.renderSearchForm()}
              </Fixed>
            )}

            {!!this.renderSearchToolBar && !!this.renderSearchToolBar?.() && (
              <Fixed
                {...this.props}
                className={classNames(`${selectorPrefix}-search-tool-bar`, {
                  [`${selectorPrefix}-search-form-expand`]: expand,
                })}
              >
                {this.renderSearchToolBar()}
              </Fixed>
            )}

            {!!this.renderSearchFormAfter && !!this.renderSearchFormAfter?.() && (
              <Fixed {...this.props} className={`${selectorPrefix}-search-form-after`}>
                {this.renderSearchFormAfter?.()}
              </Fixed>
            )}
          </Fixed>
        )}

        {!!this.renderSearchHeader && !!this.renderSearchHeader?.() && (
          <Fixed {...this.props} className={`${selectorPrefix}-search-header`}>
            {this.renderSearchHeader?.()}
          </Fixed>
        )}

        <Auto
          {...this.props}
          style={{ ...(bodyStyle || {}) }}
          className={classNames(`${selectorPrefix}-autowrapper`, bodyClassName, {
            ['autofixed']: autoFixed,
          })}
          fit={fitBody}
          autoFixed={autoFixed}
        >
          <div ref={bodyWrapRef} className={`${selectorPrefix}-tablewrapper`}>
            {this.renderBody()}
          </div>
        </Auto>

        {!!this.renderSearchFooter && !!this.renderSearchFooter?.() && (
          <Fixed {...this.props} className={`${selectorPrefix}-search-footer`}>
            {this.renderSearchFooter?.()}
          </Fixed>
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
};

Search.defaultProps = defaultProps;

Search.propTypes = propTypes;

export default Search;
