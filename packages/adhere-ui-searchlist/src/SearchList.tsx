import { Button, List } from 'antd';
import { ListSize } from 'antd/es/list';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { ReactElement, ReactNode, RefObject, createContext, createRef } from 'react';

import { DownOutlined, SearchOutlined, UpOutlined } from '@ant-design/icons';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import SearchTable from '@baifendian/adhere-ui-searchtable';
import Intl from '@baifendian/adhere-util-intl';

import ListDensitySetting from './Extension/ListDensitySetting';
import type { Metas, SearchListProps, SearchListState } from './types';

const { Search, ReloadTable, ExportExcel } = SearchTable;

export const selectorPrefix = 'adhere-ui-search-table';

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
  static displayName = 'SearchList';

  // 序号生成的规则 - 单独模式
  static NUMBER_GENERATOR_RULE_ALONE = Symbol();
  // 序号生成的规则 - 连续模式
  static NUMBER_GENERATOR_RULE_CONTINUITY = Symbol();

  static defaultProps: any;
  static propTypes: any;

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
      // @ts-ignore
      limit: this.getLimit(),
      expand: props.defaultExpandSearchCollapse,
    };

    // @ts-ignore
    Object.assign(this.state, {
      // 表格密度设置
      listDensity: this.getListDensity(),
    });

    // @ts-ignore
    this.onClear = this.onClear.bind(this);
    this.onBodyKeyup = this.onBodyKeyup.bind(this);
  }

  componentDidMount() {
    super.componentDidMount?.();

    document.body.addEventListener('keyup', this.onBodyKeyup);
  }

  componentWillUnmount() {
    super.componentWillUnmount?.();

    document.body.removeEventListener('keyup', this.onBodyKeyup);
  }

  /**
   * onBodyKeyup
   */
  onBodyKeyup(e) {
    if (e.keyCode === 13) {
      if (document.activeElement) {
        if (this.searchFormRef.current?.contains(document.activeElement)) {
          // 回车键的键码是13
          this.search();
        }
      }
    }
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
   * search
   */
  search() {
    return new Promise<void>((resolve) => {
      // @ts-ignore
      this.setState(
        {
          page: 1,
        },
        () => {
          this.onSearch().then(() => resolve());
        },
      );
    });
  }

  /**
   * getTableDensity
   * @description 表格密度
   * @return {ListSize}
   */
  getListDensity(): ListSize {
    return 'default';
  }

  /**
   * getExportExcelData
   * @description 获取导出excel的数据
   * @return any[]
   */
  getExportExcelData() {
    return this.getData();
  }

  /**
   * getExportExcelColumns
   * @description 获取导出excel的列
   * @param _columns
   * return _columns
   */
  getExportExcelColumns(_columns: any[]): any[] {
    return _columns
      .filter(({ dataIndex }) => !['_number'].includes(dataIndex))
      .map((_column) => {
        if ('children' in _column && Array.isArray(_column.children) && !!_column.children.length) {
          return {
            ..._column,
            children: this.getExportExcelColumns(_column.children || []),
          };
        }

        return _column;
      });
  }

  /**
   * renderTableDensitySetting
   * @description 表格密度设置
   * @return {ReactElement}
   */
  renderTableDensitySetting(): ReactElement {
    return (
      <ListDensitySetting
        // @ts-ignore
        density={this.state.listDensity}
        onChange={(density) => {
          // @ts-ignore
          this.setState({
            listDensity: density,
          });
        }}
        onReset={(density) => {
          // @ts-ignore
          this.setState({
            listDensity: density,
          });
        }}
      />
    );
  }

  /**
   * renderTableReload
   * @description 刷新
   * @return {ReactElement}
   */
  renderTableReload(): ReactElement {
    return <ReloadTable onReload={() => this.fetchData()} showLoading={this.showLoading()} />;
  }

  /**
   * renderExportExcel
   * @description 导出excel
   * @return {ReactElement}
   */
  renderExportExcel(): ReactElement {
    return (
      <ExportExcel
        title={this.props.title}
        getDataSource={() => this.getExportExcelData()}
        // @ts-ignore
        getColumns={() => this.getExportExcelColumns(this.getColumns())}
      />
    );
  }

  /**
   * renderSearchBarCollapseControl
   */
  renderSearchBarCollapseControl() {
    return (
      <ConditionalRender
        conditional={this.state.expand as boolean}
        noMatch={() => (
          <a
            key="expand"
            className={`${selectorPrefix}-search-footer-item-expand-search-up-btn`}
            onClick={() => {
              this.onSearchPanelCollapseBefore && this.onSearchPanelCollapseBefore();
              // @ts-ignore
              this.setState(
                {
                  expand: true,
                },
                () => this.onSearchPanelCollapseAfter && this.onSearchPanelCollapseAfter(),
              );
            }}
          >
            <span>{Intl.v('展开')}</span>
            <DownOutlined />
          </a>
        )}
      >
        {() => (
          <a
            key="hide"
            className={`${selectorPrefix}-search-footer-item-expand-search-down-btn`}
            onClick={() => {
              this.onSearchPanelCollapseBefore && this.onSearchPanelCollapseBefore();

              // @ts-ignore
              this.setState(
                {
                  expand: false,
                },
                () => this.onSearchPanelCollapseAfter && this.onSearchPanelCollapseAfter(),
              );
            }}
          >
            <span>{Intl.v('收起')}</span>
            <UpOutlined />
          </a>
        )}
      </ConditionalRender>
    );
  }

  /**
   * renderSearchFormToolBar
   * @description 渲染查询表单的工具栏
   * @return {ReactNode}
   */
  renderSearchFormToolBar(): ReactNode {
    // @ts-ignore
    const { isShowExpandSearch } = this.props;

    const defaultItems = [
      <Button
        className={`${selectorPrefix}-search-footer-item`}
        type="primary"
        key="search"
        loading={this.showLoading()}
        icon={<SearchOutlined />}
        onClick={() => {
          this.search();
        }}
      >
        {Intl.v('查询')}
      </Button>,
      <Button className={`${selectorPrefix}-search-footer-item`} key="reset" onClick={this.onClear}>
        {Intl.v('重置')}
      </Button>,
      isShowExpandSearch && this.renderSearchBarCollapseControl(),
    ].filter((t) => !!t);

    const items = this.renderSearchFormToolBarItems(defaultItems) || defaultItems;

    return (
      <>
        <div className={`${selectorPrefix}-search-form-tool-bar-default-panel`}>
          {this.renderSearchFormToolBarDefaultPanel?.()}
        </div>
        {!!items.length && (
          <div className={`${selectorPrefix}-search-footer-wrapper`}>
            {items.map((t, index) => (
              <div key={index} className={`${selectorPrefix}-search-footer-item`}>
                {t}
              </div>
            ))}
          </div>
        )}
      </>
    );
  }

  /**
   * renderSearchToolBar
   * @description 渲染查询工具栏
   * @return {ReactElement}
   */
  renderSearchToolBar(): ReactElement {
    const items = this.renderSearchFooterItems([]) || [];

    return (
      <div className={`${selectorPrefix}-search-footer-wrapper`}>
        {items.map((t, index) => (
          <div key={index} className={`${selectorPrefix}-search-footer-item`}>
            {t}
          </div>
        ))}
      </div>
    );
  }

  /**
   * getPagination
   * @param params
   */
  getPagination(...params) {
    // @ts-ignore
    const pagination = super.getPagination(...params);

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
      ...pagination,
    };
  }

  /**
   * renderBody
   * @return {ReactNode}
   */
  renderBody() {
    // @ts-ignore
    const { antdListProps } = this.props;

    // @ts-ignore
    const { listDensity } = this.state;

    const listProps = {
      rowKey: this.getRowKey(),
      dataSource: this.getData(),
      // @ts-ignore
      pagination: this.getPagination(),
      renderItem: (record, rowIndex) => this.renderItem(record, rowIndex),
      header: this.renderListHeader(),
      size: listDensity,
      ...(antdListProps ?? {}),
    };

    return <List {...listProps} />;
  }

  /**
   * renderInner
   * @description 渲染SearchTable
   * @return {ReactElement | null}
   */
  renderInner() {
    // @ts-ignore
    const { fixedListSpaceBetween = true } = this.props;

    return super.renderInner(
      this.listWrapRef,
      classNames({
        ['fixed-list-space-between']: fixedListSpaceBetween,
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
  title: PropTypes.string,
  antdListProps: PropTypes.object,
  // 锁定选择猎头，列表滚动
  fixedSelectionHeaderAutoList: PropTypes.bool,
  // 两端固定(表格的头始终在上方，分页始终在下方)
  fixedListSpaceBetween: PropTypes.bool,
};

SearchList.defaultProps = defaultProps;

SearchList.propTypes = propTypes;

export default SearchList;
