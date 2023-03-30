import { Button, List } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { ReactElement, ReactNode, RefObject, createContext, createRef } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import SearchTable from '@baifendian/adhere-ui-searchtable';
import { TableDensity } from '@baifendian/adhere-ui-searchtable/es/types';
import Intl from '@baifendian/adhere-util-intl';

import type { Metas, SearchListProps, SearchListState } from './types';

const { Search, TableDensitySetting } = SearchTable;

export const selectorPrefix = 'adhere-ui-searchtable';

export const SearchListContext = createContext<{
  context: SearchList;
} | null>(null);

/**
 * SearchList
 */
abstract class SearchList<
  P extends SearchListProps = SearchListProps,
  S extends SearchListState = SearchListState,
> extends Search<P, S> {
  // 序号生成的规则 - 单独模式
  static NUMBER_GENERATOR_RULE_ALONE = Symbol();
  // 序号生成的规则 - 连续模式
  static NUMBER_GENERATOR_RULE_CONTINUITY = Symbol();

  protected listWrapRef: RefObject<HTMLDivElement> = createRef();

  /**
   * isShowNumber
   * @description 列表是否显示序号
   * @return boolean
   */
  abstract isShowNumber(): boolean;

  /**
   * getNumberGeneratorRule
   * @description 获取符号列的生成规则
   */
  abstract getNumberGeneratorRule(): symbol;

  /**
   * getRowKey
   * @description 获取列表的主键属性
   * @return string
   */
  abstract getRowKey(): string;

  /**
   * getData
   * @description 获取列表数据
   * @return Array<Object>
   */
  abstract getData(): object[];

  /**
   * getMetas
   * @description 列表项配置
   * @return Metas
   */
  abstract getMetas(): Metas<any>;

  /**
   * renderItem
   * @description 渲染列表的item
   * @param {any} record 列表行数据
   * @param {number} rowIndex 列表行索引
   * @return {void}
   */
  abstract renderItem(record: any, rowIndex: number): void;

  /**
   * renderListHeader
   * @description 渲染列表头部
   * @return {ReactNode}
   */
  abstract renderListHeader(): ReactNode;

  constructor(props) {
    super(props);

    // @ts-ignore
    this.state = {
      prePage: 1,
      page: 1,
      limit: this.getLimit(),
      expand: props.defaultExpandSearchCollapse,
    };

    Object.assign(this.state, {
      // 表格密度设置
      tableDensity: this.getTableDensity(),
    });

    this.onClear = this.onClear.bind(this);
  }

  /**
   * onSearchPanelCollapse
   * @description 查询面板展开之前
   * @protected
   */
  onSearchPanelCollapseBefore() {}

  /**
   * onSearchPanelCollapseAfter
   * @description 查询面板展开之后
   * @protected
   */
  onSearchPanelCollapseAfter() {}

  /**
   * getTableDensity
   * @description 表格密度
   */
  getTableDensity() {
    return TableDensity.DEFAULT;
  }

  /**
   * renderTableDensitySetting
   * @description 表格密度设置
   */
  renderTableDensitySetting(): ReactElement {
    return (
      <TableDensitySetting
        density={this.state.tableDensity}
        onChange={(density) => {
          this.setState({
            tableDensity: density,
          });
        }}
        onReset={() => {
          this.setState({
            tableDensity: this.getTableDensity(),
          });
        }}
      />
    );
  }

  /**
   * renderSearchToolBar
   * @description 渲染查询工具栏
   * @return ReactElement
   */
  renderSearchToolBar(): ReactElement {
    const { isShowExpandSearch } = this.props;

    const defaultItems = [
      <Button
        className={`${selectorPrefix}-searchfooteritem`}
        type="primary"
        key="search"
        icon={
          <i
            className={classNames(
              `${selectorPrefix}-searchfooteritem-search-btn-icon`,
              'iconfont iconsousuo',
            )}
          />
        }
        onClick={() => {
          this.setState(
            {
              page: 1,
            },
            () => {
              this.onSearch();
            },
          );
        }}
      >
        {Intl.v('查询')}
      </Button>,
      <Button className={`${selectorPrefix}-searchfooteritem`} key="reset" onClick={this.onClear}>
        {Intl.v('重置')}
      </Button>,
    ];

    if (isShowExpandSearch) {
      defaultItems.push(
        <ConditionalRender
          conditional={this.state.expand as boolean}
          noMatch={() => (
            <a
              key="expand"
              className={`${selectorPrefix}-searchfooteritem-expand-search-up-btn`}
              onClick={() => {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                this.onSearchPanelCollapseBefore && this.onSearchPanelCollapseBefore();

                this.setState(
                  {
                    expand: true,
                  },
                  () => this.onSearchPanelCollapseAfter && this.onSearchPanelCollapseAfter(),
                );
              }}
            >
              <span>{Intl.v('展开')}</span>
              <i className="iconfont iconup" />
            </a>
          )}
        >
          {() => (
            <a
              key="hide"
              className={`${selectorPrefix}-searchfooteritem-expand-search-down-btn`}
              onClick={() => {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                this.onSearchPanelCollapseBefore && this.onSearchPanelCollapseBefore();

                this.setState(
                  {
                    expand: false,
                  },
                  () => this.onSearchPanelCollapseAfter && this.onSearchPanelCollapseAfter(),
                );
              }}
            >
              <span>{Intl.v('关闭')}</span>
              <i className="iconfont icondownarrow" />
            </a>
          )}
        </ConditionalRender>,
      );
    }

    const items = this.renderSearchFooterItems(defaultItems) || [...defaultItems];

    return (
      <div className={`${selectorPrefix}-searchfooterwrapper`}>
        {items.map((t, index) => (
          <div key={index} className={`${selectorPrefix}-searchfooteritem`}>
            {t}
          </div>
        ))}
      </div>
    );
  }

  /**
   * renderBody
   */
  renderBody() {
    const { antdListProps } = this.props;

    const { tableDensity } = this.state;

    const rowSelection = this.getRowSelection();

    const listProps = {
      rowKey: this.getRowKey(),
      dataSource: this.getData(),
      pagination: this.getPagination(),
      size: tableDensity as SizeType,
      renderItem: this.renderItem,
      ...(antdListProps || {}),
    };

    if (rowSelection && !!this.state.selectedRowKeys?.length) {
      // 如果是选取模式则header上显示选取信息
      listProps.header = this.renderListHeader();
    }

    return <List {...listProps} />;
  }

  /**
   * renderInner
   * @description 渲染SearchTable
   * @return ReactElement | null
   */
  renderInner(): ReactElement | null {
    return super.renderInner(this.listWrapRef, '');
  }

  /**
   * renderChildren
   * @description renderChildren
   */
  renderChildren() {
    return <div className={`${selectorPrefix}-wrap`}>{super.render()}</div>;
  }

  /**
   * render
   * @protected
   */
  render(): ReactElement {
    return (
      <SearchListContext.Provider
        value={{
          context: this,
        }}
      >
        {this.renderChildren()}
      </SearchListContext.Provider>
    );
  }
}

export const defaultProps = {
  listTableProps: {},
};

export const propTypes = {
  listTableProps: PropTypes.object,
};

SearchList.defaultProps = defaultProps;

SearchList.propTypes = propTypes;

export default SearchList;
