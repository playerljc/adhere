import React from 'react';
import classNames from 'classnames';

import { Form, Button, Skeleton, Table, List, Checkbox } from 'antd';
// import Form from 'antd/lib/form';
// import Button from 'antd/lib/button';
// import Skeleton from 'antd/lib/skeleton';
// import Table from 'antd/lib/table';
// import List from 'antd/lib/list';
// import Checkbox from 'antd/lib/checkbox';

import { FormInstance } from 'antd/lib/form';
import FormItemCreator from '@baifendian/adhere-ui-formitemcreator';
import intl from '@baifendian/adhere-util-intl';
import { cloneDeep } from 'lodash';

import SortableTable from './sortabletable';
import { ToolbarSelectAll, ToolbarReload, ToolbarSetting } from './tablelisttoolbar';
import Util from './util';
import { ITableListProps } from './types';

const selectorPrefix = 'adhere-ui-tablelist';
const defaultRowKey = 'id';
/**
 * Template
 * @class Template
 * @classdesc Template
 */
class TableList<RecordType extends object = any> extends React.Component<
  ITableListProps<RecordType>,
  any
> {
  static defaultProps: any;
  static propTypes: any;

  private readonly searchFormRef: any;
  private readonly getModeProps: Function;
  private readonly getDefaultSelectedColumnKeys: Function;
  private readonly getFormColumns: Function;
  private readonly getRowSelection: Function;
  private readonly getPagination: Function;
  private readonly getLoading: Function;
  private readonly getTableColumns: Function;

  private TableListRef: HTMLDivElement | null | undefined;

  public getSortDataSource: Function;
  public getParams: Function;
  public fetchList: Function;
  public onSearch: Function;
  public onResetSearch: Function;
  public onSettingChange: Function;
  public onSettingSortEnd: Function;
  public onTableChange: any;
  public SortableTableRef: any;

  constructor(props) {
    super(props);
    const util = new Util(this);
    this.getModeProps = util.getModeProps;
    this.getDefaultSelectedColumnKeys = util.getDefaultSelectedColumnKeys;
    this.getFormColumns = util.getFormColumns;
    this.getSortDataSource = util.getSortDataSource;
    this.getParams = util.getParams;
    this.getRowSelection = util.getRowSelection;
    this.getPagination = util.getPagination;
    this.getLoading = util.getLoading;
    this.getTableColumns = util.getTableColumns;
    this.fetchList = util.fetchList;
    this.onSearch = util.onSearch;
    this.onResetSearch = util.onResetSearch;
    this.onSettingChange = util.onSettingChange;
    this.onSettingSortEnd = util.onSettingSortEnd;
    this.onTableChange = util.onTableChange;

    this.searchFormRef = React.createRef<FormInstance>();
    const modeProps = this.getModeProps();
    this.state = {
      firstLoading: true,
      loading: false,
      selectedColumnKeys: this.props.table
        ? this.getDefaultSelectedColumnKeys(this.props.table.columns)
        : [],
      tableColumns: [],
      params: {
        page: 1,
        limit: (modeProps && modeProps.pagination && modeProps.pagination.defaultPageSize) || 10,
      },
    };
  }

  static getDerivedStateFromProps(nextProps: Readonly<ITableListProps<object>>, prevState: any) {
    const { dataSource } = nextProps[nextProps.mode || 'table'] || {};
    if (!nextProps.request && prevState?.firstLoading && dataSource) {
      return {
        firstLoading: false,
      };
    } else if (
      nextProps.request &&
      prevState?.firstLoading &&
      prevState?.firstRequest &&
      dataSource
    ) {
      return {
        firstLoading: false,
      };
    }
    return null;
  }

  componentDidMount() {
    const modeProps = this.getModeProps();
    if (this.props.request) {
      this.setState({ firstRequest: true }, () => this.fetchList());
    } else if (modeProps.dataSource) {
      this.setState({ firstLoading: false });
    }
    this.setState({ tableColumns: this.getTableColumns() });
  }

  shouldComponentUpdate(nextProps: ITableListProps<RecordType>, nextState: any) {
    const nextModeProps = nextProps[nextProps.mode || 'table'] || {};
    const modeProps = this.getModeProps();
    if (
      nextState.selectAll &&
      JSON.stringify(nextModeProps.dataSource) !== JSON.stringify(modeProps.dataSource)
    ) {
      const { dataSource, rowKey = defaultRowKey } = nextModeProps;
      const allKeys = (dataSource || []).map(
        (v) => v[typeof rowKey === 'function' ? rowKey(v) : rowKey],
      );
      // 得到没有被全选排除的keys
      const selectedRowKeys = allKeys.filter((v) => !nextState.selectAll?.exceptKeys?.includes(v));

      if (
        nextProps.mode === 'table' &&
        nextProps.table &&
        nextProps.table.rowSelection &&
        nextProps.table.rowSelection.onChange
      ) {
        nextProps.table.rowSelection.onChange(selectedRowKeys, cloneDeep(dataSource));
        return false;
      }
      this.setState({
        selectedRowKeys,
        selectedRows: dataSource,
      });
      return false;
    }
    return true;
  }

  /**
   * 渲染搜索
   */
  private renderSearch() {
    const { search } = this.props;
    if (!search) return;

    const {
      className,
      beforeContent,
      afterContent,
      optionRender,
      columns,
      searchText,
      resetText,
      size = 'middle',
    } = search;

    return search ? (
      <div className={classNames(className, `${selectorPrefix}-search`)}>
        {beforeContent}
        <Form
          layout="inline"
          ref={this.searchFormRef}
          className={classNames(`${selectorPrefix}-search-form`, {
            [`${selectorPrefix}-search-form-havebefore`]: beforeContent,
            [`${selectorPrefix}-search-form-haveafter`]: afterContent,
          })}
        >
          <div className="ant-form-search">
            <FormItemCreator
              columns={this.getFormColumns(
                columns || [],
                size,
                search.hasOwnProperty('optionRender') && !optionRender,
              )}
            />
          </div>
          {search.hasOwnProperty('optionRender') ? (
            optionRender
          ) : (
            <div className="ant-form-btngroup">
              <Button onClick={() => this.onResetSearch()} size={size}>
                {resetText || intl.v('重置')}
              </Button>
              <Button type="primary" onClick={() => this.onSearch()} size={size}>
                {searchText || intl.v('搜索')}
              </Button>
            </div>
          )}
        </Form>
        {afterContent}
      </div>
    ) : null;
  }

  /**
   * toolbar: 标题，全选----刷新，搜索，设置
   */
  private renderToolbar = () => {
    if (!this.props.toolbar) return;
    const { dataSource, rowKey, pagination } = this.getModeProps();
    const { className, title, total, selectAll, search, reload, setting, toolbarOptionRender } =
      this.props.toolbar;
    const { selectedColumnKeys, tableColumns } = this.state;
    const rowSelection = this.getRowSelection();

    return (
      <div className={classNames(className, `${selectorPrefix}-toolbar`)}>
        <div className={`${selectorPrefix}-toolbar-left`}>
          {title ? <span className={`${selectorPrefix}-toolbar-left-title`}>{title}</span> : null}
          {total ? (
            <span className={`${selectorPrefix}-toolbar-left-total`}>
              {total === true
                ? intl.vHtml('共 <em>{n}</em> 条', { n: pagination && pagination.total })
                : total}
            </span>
          ) : null}
          {
            // selectAll { total: 是否是选中全部数据，默认是当前页数据 }
            selectAll ? (
              <ToolbarSelectAll
                selectAll={selectAll}
                dataSource={dataSource}
                rowSelection={rowSelection}
                rowKey={rowKey}
                setSelectAll={(v) => this.setState({ selectAll: v })}
              />
            ) : null
          }
        </div>
        <div className={`${selectorPrefix}-toolbar-right`}>
          {toolbarOptionRender}
          {search ? (
            <FormItemCreator columns={this.getFormColumns(search || [], 'default', true)} />
          ) : null}
          {reload ? <ToolbarReload reload={reload} onSearch={this.onSearch} /> : null}
          {setting ? (
            <ToolbarSetting
              setting={setting}
              tableColumns={tableColumns}
              onSettingChange={this.onSettingChange}
              onSettingSortEnd={this.onSettingSortEnd}
              selectedColumnKeys={selectedColumnKeys}
            />
          ) : null}
        </div>
      </div>
    );
  };

  /**
   * 渲染列表
   */
  private renderList = () => {
    if (!this.props.list) return;

    const { rowKey, pagination, loading, renderItem, ...others } = this.getModeProps();
    const rowSelection = this.getRowSelection();

    return (
      <List
        rowKey={rowKey}
        pagination={this.getPagination(pagination)}
        loading={this.getLoading(loading)}
        renderItem={(item: any, index) => {
          const key = typeof rowKey === 'function' ? rowKey(item) : rowKey;
          return (
            <List.Item>
              <>
                {rowSelection ? (
                  <Checkbox
                    checked={rowSelection.selectedRowKeys.includes(item[key])}
                    onChange={(e) => {
                      if (e.target.checked) {
                        rowSelection.selectedRowKeys.push(item[key]);
                        rowSelection.selectedRows.push(item);
                        rowSelection.onChange(
                          rowSelection.selectedRowKeys,
                          rowSelection.selectedRows,
                        );
                      } else {
                        rowSelection.onChange(
                          rowSelection.selectedRowKeys.filter((v) => v !== item[key]),
                          rowSelection.selectedRows.filter((v) => v[key] !== item[key]),
                        );
                      }
                    }}
                  />
                ) : null}
                {renderItem && renderItem(item, index)}
              </>
            </List.Item>
          );
        }}
        {...others}
      />
    );
  };

  /**
   * 渲染表格
   */
  private renderTable = () => {
    if (!this.props.table) return;
    const { selectedColumnKeys, tableColumns } = this.state;
    const { sortable, pagination, loading, dataSource, columns, rowKey, rowSelection, ...others } =
      this.getModeProps();

    const tableProps = {
      pagination: this.getPagination(pagination),
      loading: this.getLoading(loading),
      rowSelection: this.getRowSelection(),
      columns: tableColumns.filter((v) => selectedColumnKeys.includes(v.key)),
      dataSource: dataSource,
      onChange: this.onTableChange,
      ...others,
    };

    return sortable ? (
      <SortableTable
        ref={(c) => {
          this.SortableTableRef = c;
        }}
        rowKey={rowKey}
        {...tableProps}
        sortable={sortable}
      />
    ) : (
      <Table rowKey={rowKey} {...tableProps} />
    );
  };
  /**
   * 渲染内容
   */
  private renderContent() {
    const { mode } = this.props;
    return (
      <div className={`${selectorPrefix}-content`}>
        {this.renderToolbar()}
        {this.state.firstLoading
          ? this.renderLoading()
          : mode === 'list'
          ? this.renderList()
          : this.renderTable()}
      </div>
    );
  }

  /**
   * 加载效果
   */
  private renderLoading() {
    return <Skeleton paragraph={{ rows: 10 }} title={false} />;
  }

  render() {
    // @ts-ignore
    const { className } = this.props;

    // @ts-ignore
    return (
      <div
        className={classNames(selectorPrefix, className)}
        ref={(c) => {
          this.TableListRef = c;
        }}
      >
        {this.renderSearch()}
        {this.renderContent()}
      </div>
    );
  }
}

TableList.defaultProps = {
  mode: 'table',
};

export default TableList;
