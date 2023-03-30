import { TableRowSelection } from 'antd/es/table/interface';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { ReactElement } from 'react';

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
  /**
   * renderSearchBefore
   * @description 渲染查询面板之前
   */
  abstract renderSearchFormBefore(): ReactElement | null;

  /**
   * renderSearchForm
   * @description 渲染查询的UI
   */
  abstract renderSearchForm(): ReactElement | null;

  /**
   * renderSearchBefore
   * @description 渲染查询面板之后
   */
  abstract renderSearchFormAfter(): ReactElement | null;

  /**
   * renderSearchHeader
   * @description 渲染表格的头
   */
  abstract renderSearchHeader(): ReactElement | null;

  /**
   * renderSearchFooter
   * @description 渲染表格的脚
   */
  abstract renderSearchFooter(): ReactElement | null;

  /**
   * renderSearchFooterItems
   * @description 渲染SearchFooter的按钮组
   */
  abstract renderSearchFooterItems(defaultItems: ReactElement[]): ReactElement[] | null;

  /**
   * renderSearchToolBar
   * @description 渲染查询工具栏
   */
  abstract renderSearchToolBar(): ReactElement;

  /**
   * renderBody
   * @description 渲染查询主体
   */
  abstract renderBody(): ReactElement;

  /**
   *
   * getRowSelection
   * @description 获取表格行选择对象
   */
  abstract getRowSelection(): TableRowSelection<object>;

  /**
   * clear
   * @description  清除操作
   */
  abstract clear(): Promise<any>;

  /**
   * getTotal
   * @description 获取表格数据的总数
   */
  abstract getTotal(): number;

  /**
   * onSearch
   * @description 进行查询
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
   */
  getPagination() {
    return {
      onChange: (page, limit) => {
        this.setState(
          {
            page,
            limit,
          },
          () => {
            this.fetchData();
          },
        );
      },
      onShowSizeChange: (page, limit) => {
        this.setState(
          {
            page,
            limit,
          },
          () => {
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
   */
  getLimit(): number {
    return 10;
  }

  /**
   * onClear
   * @description - 清除操作
   */
  onClear(): Promise<void> {
    return new Promise((resolve) => {
      this.setState(
        {
          page: 1,
          limit: this.getLimit(),
        },
        () => {
          this.clear().then(() => {
            this.fetchData();

            resolve();
          });
        },
      );
    });
  }

  /**
   * renderInner
   * @description
   * @param bodyWrapRef
   * @param className
   */
  renderInner(bodyWrapRef?: any, className?: string): React.ReactElement | null {
    const {
      style,
      bodyClassName,
      bodyStyle,
      searchClassName,
      searchStyle,
      fitSearch,
      fitBody,
      autoFixed,
    } = this.props;

    const { expand = false } = this.state;

    return (
      <FlexLayout
        direction="vertical"
        className={classNames(selectorPrefix, className || '')}
        style={{ ...(style || {}) }}
      >
        <Fixed
          className={classNames(`${selectorPrefix}-searchwrapper`, searchClassName || '')}
          style={{ ...(searchStyle || {}) }}
          fit={fitSearch}
        >
          <FlexLayout direction="vertical">
            {!!this.renderSearchFormBefore && !!this.renderSearchFormBefore?.() && (
              <Fixed>{this.renderSearchFormBefore?.()}</Fixed>
            )}

            {!!this.renderSearchForm && !!this.renderSearchForm?.() && (
              <Fixed>{expand && this.renderSearchForm()}</Fixed>
            )}

            {!!this.renderSearchToolBar && !!this.renderSearchToolBar?.() && (
              <Fixed>{this.renderSearchToolBar()}</Fixed>
            )}

            {!!this.renderSearchFormAfter && !!this.renderSearchFormAfter?.() && (
              <Fixed>{this.renderSearchFormAfter?.()}</Fixed>
            )}
          </FlexLayout>
        </Fixed>

        {!!this.renderSearchHeader && !!this.renderSearchHeader?.() && (
          <Fixed>{this.renderSearchHeader?.()}</Fixed>
        )}

        <Auto
          className={classNames(
            `${selectorPrefix}-autowrapper`,
            bodyClassName || '',
            autoFixed ? 'autofixed' : '',
          )}
          style={{ ...(bodyStyle || {}) }}
          fit={fitBody}
          autoFixed={autoFixed}
        >
          <div ref={bodyWrapRef} className={`${selectorPrefix}-tablewrapper`}>
            {this.renderBody()}
          </div>
        </Auto>

        {!!this.renderSearchFooter && !!this.renderSearchFooter?.() && (
          <Fixed>{this.renderSearchFooter?.()}</Fixed>
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
  fitSearch: true,
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
  fitSearch: PropTypes.bool,
  // 撑开表格
  fitBody: PropTypes.bool,
  // 是否是查询固定，表格自适应
  autoFixed: PropTypes.bool,
};

Search.defaultProps = defaultProps;

Search.propTypes = propTypes;

export default Search;
