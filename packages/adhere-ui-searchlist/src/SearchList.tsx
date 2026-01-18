import { Button, Dropdown, List } from 'antd';
import { ListSize } from 'antd/es/list';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, {
  type ReactElement,
  type ReactNode,
  type RefObject,
  createContext,
  createRef,
} from 'react';

import {
  DownOutlined,
  EllipsisOutlined,
  SearchOutlined,
  SyncOutlined,
  UpOutlined,
} from '@ant-design/icons';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import { ConfigProviderContext } from '@baifendian/adhere-ui-configprovider/es/types';
import SearchTable from '@baifendian/adhere-ui-searchtable';
import Intl from '@baifendian/adhere-util-intl';

import ListDensitySetting from './Extension/ListDensitySetting';
import type { Metas, SearchListProps, SearchListState } from './types';

const { Search, ReloadTable, ExportExcel, cloneDeep } = SearchTable;

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

  protected listWrapRef: RefObject<HTMLDivElement | null> = createRef<HTMLDivElement | null>();

  protected childrenWrapRef: RefObject<HTMLDivElement | null> = createRef<HTMLDivElement | null>();

  protected configProviderContextValue: ConfigProviderContext | undefined;

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
   * setData
   * @description 设置表格数据
   */
  abstract setData<T extends Array<object>>(data: T | ((prevData: T) => T)): Promise<any[]>;

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
    this.onBodyKeyup = this.onBodyKeyup.bind(this);
  }

  componentDidMount() {
    if (!!super.componentDidMount) {
      super.componentDidMount?.();
    }

    document.body.addEventListener('keyup', this.onBodyKeyup);

    ConfigProvider.theme({
      elRef: this.childrenWrapRef,
      group: 'normal',
      displayName: 'SearchList',
      theme: this.configProviderContextValue?.theme!,
    });
  }

  componentWillUnmount() {
    if (!!super.componentWillUnmount) {
      super.componentWillUnmount?.();
    }

    document.body.removeEventListener('keyup', this.onBodyKeyup);
  }

  componentWillReceiveProps(nextProps: any) {
    if (!!super.componentWillReceiveProps) {
      super.componentWillReceiveProps(nextProps);
    }

    // ConfigProvider.theme({
    //   elRef: this.childrenWrapRef,
    //   group: 'normal',
    //   displayName: 'SearchList',
    //   theme: this.configProviderContextValue?.theme!,
    // });
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
   * renderSearchBarCollapseOpenControl
   */
  renderSearchBarCollapseOpenControl() {
    return (
      <>
        <span>{Intl.get('expand')}</span>
        <DownOutlined />
      </>
    );
  }

  /**
   * renderSearchBarCollapseHideControl
   */
  renderSearchBarCollapseHideControl() {
    return (
      <>
        <span>{Intl.get('collapse')}</span>
        <UpOutlined />
      </>
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
            className={`${selectorPrefix}-search-footer-item-expand-search-down-btn`}
            onClick={() => {
              this.onSearchPanelCollapseBefore && this.onSearchPanelCollapseBefore();
              this.setState(
                {
                  expand: true,
                },
                () => this.onSearchPanelCollapseAfter && this.onSearchPanelCollapseAfter(),
              );
            }}
          >
            {this.renderSearchBarCollapseOpenControl()}
          </a>
        )}
      >
        {() => (
          <a
            key="hide"
            className={`${selectorPrefix}-search-footer-item-expand-search-up-btn`}
            onClick={() => {
              this.onSearchPanelCollapseBefore && this.onSearchPanelCollapseBefore();

              this.setState(
                {
                  expand: false,
                },
                () => this.onSearchPanelCollapseAfter && this.onSearchPanelCollapseAfter(),
              );
            }}
          >
            {this.renderSearchBarCollapseHideControl()}
          </a>
        )}
      </ConditionalRender>
    );
  }

  /**
   * getSearchFormToolBarItemsEllipsisCountEllipsisCount
   * @description 获取SearchFormToolBar省略的个数
   * @return {Number}
   */
  getSearchFormToolBarItemsEllipsisCountEllipsisCount(): number {
    return Number.MAX_VALUE;
  }

  /**
   * isSearchFormToolBarItemEllipsesShowOnlyOneAfterCollapsing
   * @description SearchFormToolBar只剩一个
   * @return {Boolean}
   */
  isSearchFormToolBarItemEllipsesShowOnlyOneAfterCollapsing(): boolean {
    return false;
  }

  /**
   * renderSearchFormToolBarMore
   * @description 渲染renderSearchFormToolBar的More
   */
  renderSearchFormToolBarMore() {
    return (
      <Button>
        <EllipsisOutlined />
      </Button>
    );
  }

  /**
   * renderSearchFormToolBarSearchItem
   * @param cb
   */
  renderSearchFormToolBarSearchItem(cb) {
    return (
      <Button
        className={`${selectorPrefix}-search-footer-item`}
        type="primary"
        key="search"
        loading={this.showLoading()}
        icon={<SearchOutlined />}
        onClick={cb}
      >
        {Intl.get('search')}
      </Button>
    );
  }

  /**
   * renderSearchFormToolBarResetItem
   * @param cb
   */
  renderSearchFormToolBarResetItem(cb) {
    return (
      <Button
        className={`${selectorPrefix}-search-footer-item`}
        key="reset"
        icon={<SyncOutlined />}
        onClick={cb}
      >
        {Intl.get('reset')}
      </Button>
    );
  }

  /**
   * renderSearchFormToolBar
   * @description 渲染查询表单的工具栏
   * @return {ReactNode}
   */
  renderSearchFormToolBar(): ReactNode {
    const { isShowExpandSearch } = this.props;

    const defaultItems = [
      this.renderSearchFormToolBarSearchItem(() => this.search()),
      this.renderSearchFormToolBarResetItem(this.onClear),
      isShowExpandSearch && this.renderSearchBarCollapseControl(),
    ].filter((t) => !!t);

    let items = this.renderSearchFormToolBarItems(defaultItems) || defaultItems;

    let searchFormToolBarItemsEllipsisCount =
      this.getSearchFormToolBarItemsEllipsisCountEllipsisCount() ?? Number.MAX_VALUE;

    const showOnlyOneDisplay = this.isSearchFormToolBarItemEllipsesShowOnlyOneAfterCollapsing();

    if (showOnlyOneDisplay || items.length >= searchFormToolBarItemsEllipsisCount) {
      const displayEndIndex = showOnlyOneDisplay ? 1 : searchFormToolBarItemsEllipsisCount - 1;
      const ellipseStartIndex = showOnlyOneDisplay ? 1 : searchFormToolBarItemsEllipsisCount - 1;

      if (
        showOnlyOneDisplay ||
        (!!items.length && items.length >= searchFormToolBarItemsEllipsisCount)
      ) {
        items = [
          ...items.slice(0, displayEndIndex),
          <Dropdown
            key="menu"
            menu={{
              items: items.slice(ellipseStartIndex).map((item, _index) => ({
                key: `${_index + 1}`,
                label: item,
              })),
            }}
          >
            {this.renderSearchFormToolBarMore()}
          </Dropdown>,
        ];
      }
    }

    return (
      <>
        <div className={`${selectorPrefix}-search-form-tool-bar-default-panel`}>
          {this.renderSearchFormToolBarDefaultPanel?.()}
        </div>
        {!!items.length && (
          <div className={`${selectorPrefix}-search-form-tool-bar-items`}>
            {items.map((t, index) => (
              <div key={index} className={`${selectorPrefix}-search-form-tool-bar-item`}>
                {t}
              </div>
            ))}
          </div>
        )}
      </>
    );
  }

  /**
   * renderSearchBarActions
   * @description 渲染查询工具栏
   * @return {ReactElement}
   */
  renderSearchBarActions(): ReactNode {
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
      ...pagination,
    };
  }

  /**
   * getDataSource
   * @description 获取Table的数据
   * @return {Record<string, any>[]}
   */
  getDataSource(): Record<string, any>[] {
    return this.getData() ?? [];
  }

  /**
   * getRecordById
   * @description 获取record
   * @param {string} id
   */
  getRecordById(id: string) {
    const rowKey = this.getRowKey();
    const dataSource = this.getDataSource();

    return dataSource.find((record) => record[rowKey] === id);
  }

  /**
   * appendData
   */
  appendData<T extends object>(data: T | T[]) {
    return new Promise<void>((resolve) => {
      this.setData((preDataSource: object[]) => {
        if (Array.isArray(data)) {
          return cloneDeep([...preDataSource, ...data]) as object[];
        }

        return cloneDeep([...preDataSource, data]) as object[];
      }).then(() => {
        resolve();
      });
    });
  }

  /**
   * prependData
   * @param data
   */
  prependData<T extends object>(data: T | T[]) {
    return new Promise<void>((resolve) => {
      this.setData((preDataSource: object[]) => {
        if (Array.isArray(data)) {
          return cloneDeep([...data, ...preDataSource]) as object[];
        }

        return cloneDeep([data, ...preDataSource]) as object[];
      }).then(() => {
        resolve();
      });
    });
  }

  /**
   * insertData
   * @param id
   * @param data
   */
  insertData<T extends object>(id: string, data: T | T[]) {
    const rowKey = this.getRowKey();

    return new Promise<void>((resolve) => {
      this.setData((preDataSource: object[]) => {
        const index = preDataSource.findIndex((record) => record[rowKey] === id);

        if (Array.isArray(data)) {
          preDataSource.splice(index, 0, ...data);
        } else {
          preDataSource.splice(index, 0, data);
        }

        return cloneDeep(preDataSource) as object[];
      }).then(() => {
        resolve();
      });
    });
  }

  /**
   * replaceData
   */
  replaceData<T extends object>(id: string, data: T | T[]) {
    const rowKey = this.getRowKey();

    return new Promise<void>((resolve) => {
      this.setData((preDataSource: object[]) => {
        const index = preDataSource.findIndex((record) => record[rowKey] === id);

        if (Array.isArray(data)) {
          preDataSource.splice(index, 1, ...data);
        } else {
          preDataSource.splice(index, 1, data);
        }

        return cloneDeep(preDataSource) as object[];
      }).then(() => {
        resolve();
      });
    });
  }

  /**
   * removeData
   * @param id
   */
  removeData(id: string) {
    return new Promise<void>((resolve) => {
      const rowKey = this.getRowKey();

      this.setData((preData: object[]) => {
        preData.splice(
          preData.findIndex((record) => record[rowKey] === id),
          1,
        );

        return cloneDeep(preData) as object[];
      }).then(() => {
        resolve();
      });
    });
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
      dataSource: this.getDataSource(),
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
   * @return {ReactElement}
   */
  renderChildren(): ReactElement {
    return (
      <div
        ref={this.childrenWrapRef}
        className={classNames(`${selectorPrefix}-wrap`, this.props.wrapClassName)}
        style={this.props.wrapStyle ?? {}}
      >
        {super.render()}
      </div>
    );
  }

  /**
   * render
   * @protected
   * @return {ReactElement}
   */
  render(): ReactElement {
    const _self = this;

    return (
      <SearchListContext.Provider
        value={{
          context: this,
        }}
      >
        <ConfigProvider.Context.Consumer>
          {(value) => {
            this.configProviderContextValue = value;

            if (_self?.childrenWrapRef?.current) {
              ConfigProvider.theme({
                elRef: _self.childrenWrapRef,
                group: 'normal',
                displayName: 'SearchList',
                theme: _self.configProviderContextValue?.theme!,
              });
            }

            return this.renderChildren();
          }}
        </ConfigProvider.Context.Consumer>
      </SearchListContext.Provider>
    );
  }

  /**
   * getSelectedRowKeys
   * @description 获取selectedRowKeys
   * @return {any[]}
   */
  getSelectedRowKeys(): any[] {
    const { selectedRowKeys } = this.state;

    return selectedRowKeys;
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
