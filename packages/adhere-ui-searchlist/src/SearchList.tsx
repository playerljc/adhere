import { Button, List } from 'antd';
import { ListSize } from 'antd/es/list';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { ReactElement, ReactNode, RefObject, createContext, createRef } from 'react';

import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import SearchTable from '@baifendian/adhere-ui-searchtable';
import Intl from '@baifendian/adhere-util-intl';

import ListDensitySetting from './Extension/ListDensitySetting';
import type { Metas, SearchListProps, SearchListState } from './types';

const { Search } = SearchTable;

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
   * @return {boolean}
   */
  abstract isShowNumber(): boolean;

  /**
   * getNumberGeneratorRule
   * @description 获取符号列的生成规则
   * @return {symbol}
   */
  abstract getNumberGeneratorRule(): symbol;

  /**
   * getRowKey
   * @description 获取列表的主键属性
   * @return {string}
   */
  abstract getRowKey(): string;

  /**
   * getData
   * @description 获取列表数据
   * @return {object[]}
   */
  abstract getData(): object[];

  /**
   * getMetas
   * @description 列表项配置
   * @return {Metas<any>}
   */
  abstract getMetas(): Metas<any>;

  /**
   * renderItem
   * @description 渲染列表的item
   * @param {any} record 列表行数据
   * @param {number} rowIndex 列表行索引
   * @return {void}
   */
  abstract renderItem(record: any, rowIndex: number): ReactNode;

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
      listDensity: this.getListDensity(),
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
   * @return {ListSize}
   */
  getListDensity(): ListSize {
    return 'default';
  }

  /**
   * renderTableDensitySetting
   * @description 表格密度设置
   * @return {ReactElement}
   */
  renderTableDensitySetting(): ReactElement {
    return (
      <ListDensitySetting
        density={this.state.listDensity}
        onChange={(density) => {
          this.setState({
            listDensity: density,
          });
        }}
        onReset={(density) => {
          this.setState({
            listDensity: density,
          });
        }}
      />
    );
  }

  /**
   * renderSearchToolBar
   * @description 渲染查询工具栏
   * @return {ReactElement}
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
   * @return {ReactNode}
   */
  renderBody() {
    const { antdListProps } = this.props;

    const { listDensity } = this.state;

    const listProps = {
      rowKey: this.getRowKey(),
      dataSource: this.getData(),
      pagination: this.getPagination(),
      renderItem: (record, rowIndex) => this.renderItem(record, rowIndex),
      header: this.renderListHeader(),
      size: listDensity,
      ...(antdListProps || {}),
    };

    return <List {...listProps} />;
  }

  /**
   * renderInner
   * @description 渲染SearchTable
   * @return {ReactElement | null}
   */
  renderInner(): ReactElement | null {
    const { fixedListSpaceBetween = true } = this.props;

    return super.renderInner(
      this.listWrapRef,
      classNames({
        ['fixedlistspacebetween']: fixedListSpaceBetween,
      }),
    );
  }

  /**
   * renderChildren
   * @description renderChildren
   * @return {ReactNode}
   */
  renderChildren() {
    return <div className={`${selectorPrefix}-wrap`}>{super.render()}</div>;
  }

  /**
   * render
   * @protected
   * @return {ReactElement}
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
  antdListProps: {},
  // 锁定选择猎头，列表滚动
  fixedSelectionHeaderAutoList: true,
  // 两端固定(表格的头始终在上方，分页始终在下方)
  fixedListSpaceBetween: true,
};

export const propTypes = {
  antdListProps: PropTypes.object,
  // 锁定选择猎头，列表滚动
  fixedSelectionHeaderAutoList: PropTypes.bool,
  // 两端固定(表格的头始终在上方，分页始终在下方)
  fixedListSpaceBetween: PropTypes.bool,
};

SearchList.defaultProps = defaultProps;

SearchList.propTypes = propTypes;

export default SearchList;
