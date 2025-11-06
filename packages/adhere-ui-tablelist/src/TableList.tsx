/*
 * @Description: 表格列表组件
 * @Author: yumeng.qin
 * @Date: 2021-04-27 16:23:26
 * @LastEditor: yumeng.qin
 * @LastEditTime: 2021-05-21 10:41:27
 */
import { Button, Checkbox, Form, List, Skeleton, Table } from 'antd';
import { FormInstance } from 'antd/lib/form';
import classNames from 'classnames';
import cloneDeep from 'lodash.clonedeep';
import React from 'react';

import FormItemCreator from '@baifendian/adhere-ui-formitemcreator';
import Intl from '@baifendian/adhere-util-intl';

import SortableTable from './SortableTable';
import { ToolbarReload, ToolbarSelectAll, ToolbarSetting } from './TableListToolBar';
import Util from './Util';
import { TableListProps, TableListState } from './types';

export const selectorPrefix = 'adhere-ui-table-list';
const defaultRowKey = 'id';

/**
 * 表格列表组件
 * 支持表格和列表两种显示模式，提供搜索、分页、排序等功能
 * @template RecordType - 数据记录类型
 */
class TableList<RecordType extends object = any> extends React.PureComponent<
  TableListProps<RecordType>,
  TableListState
> {
  static displayName = 'TableList';

  static defaultProps: any;
  static propTypes: any;

  /** 搜索表单引用 */
  private readonly searchFormRef: React.RefObject<FormInstance | null>;
  /** 获取模式属性方法 */
  private readonly getModeProps: Function;
  /** 获取默认选中列键方法 */
  private readonly getDefaultSelectedColumnKeys: Function;
  /** 获取表单列配置方法 */
  private readonly getFormColumns: Function;
  /** 获取行选择配置方法 */
  private readonly getRowSelection: Function;
  /** 获取分页配置方法 */
  private readonly getPagination: Function;
  /** 获取加载状态方法 */
  private readonly getLoading: Function;
  /** 获取表格列配置方法 */
  private readonly getTableColumns: Function;

  /** 表格列表容器引用 */
  private TableListRef: HTMLDivElement | null | undefined;

  /** 获取排序数据源方法 */
  public getSortDataSource: Function;
  /** 获取参数方法 */
  public getParams: Function;
  /** 获取数据方法 */
  public fetchList: Function;
  /** 搜索方法 */
  public onSearch: Function;
  /** 重置搜索方法 */
  public onResetSearch: Function;
  /** 设置变化方法 */
  public onSettingChange: Function;
  /** 设置排序结束方法 */
  public onSettingSortEnd: Function;
  /** 表格变化方法 */
  public onTableChange: any;
  /** 可排序表格引用 */
  public SortableTableRef: any;

  /**
   * 构造函数
   * @param props - 组件属性
   */
  constructor(props: TableListProps<RecordType>) {
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

    this.searchFormRef = React.createRef<FormInstance | null>();
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

  /**
   * 从属性派生状态
   * @param nextProps - 下一个属性
   * @param prevState - 前一个状态
   * @returns 新的状态或null
   */
  static getDerivedStateFromProps(nextProps: Readonly<TableListProps<object>>, prevState: TableListState) {
    const { dataSource } = nextProps[nextProps.mode || 'table'] ?? {};
    
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

  /**
   * 组件挂载后执行
   */
  componentDidMount(): void {
    const modeProps = this.getModeProps();
    
    if (this.props.request) {
      this.setState({ firstRequest: true }, () => this.fetchList());
    } else if (modeProps.dataSource) {
      this.setState({ firstLoading: false });
    }
    
    this.setState({ tableColumns: this.getTableColumns() });
  }

  /**
   * 判断组件是否需要更新
   * @param nextProps - 下一个属性
   * @param nextState - 下一个状态
   * @returns 是否需要更新
   */
  shouldComponentUpdate(nextProps: TableListProps<RecordType>, nextState: TableListState): boolean {
    const nextModeProps = nextProps[nextProps.mode || 'table'] ?? {};
    const modeProps = this.getModeProps();
    
    if (
      nextState.selectAll &&
      JSON.stringify(nextModeProps.dataSource) !== JSON.stringify(modeProps.dataSource)
    ) {
      const { dataSource, rowKey = defaultRowKey } = nextModeProps;
      const allKeys = (dataSource || []).map(
        (v: any) => v[typeof rowKey === 'function' ? rowKey(v) : rowKey],
      );
      // 得到没有被全选排除的keys
      const selectedRowKeys = allKeys.filter((v: any) => {
        if (typeof nextState.selectAll === 'object' && nextState.selectAll.exceptKeys) {
          return !nextState.selectAll.exceptKeys.includes(v);
        }
        return true;
      });

      if (
        nextProps.mode === 'table' &&
        nextProps.table &&
        nextProps.table.rowSelection &&
        nextProps.table.rowSelection.onChange
      ) {
        nextProps.table.rowSelection.onChange(selectedRowKeys, cloneDeep(dataSource), {} as any);
        return false;
      }
      
      this.setState({
        selectedRowKeys,
        selectedRows: dataSource as any,
      });
      return false;
    }
    return true;
  }

  /**
   * 渲染搜索栏
   * @returns 搜索栏JSX
   */
  private renderSearch(): React.ReactNode {
    const { search } = this.props;
    if (!search) return null;

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

    return (
      <div className={classNames(className, `${selectorPrefix}-search`)}>
        {beforeContent}
        <Form
          layout="inline"
          ref={this.searchFormRef}
          className={classNames(`${selectorPrefix}-search-form`, {
            [`${selectorPrefix}-search-form-have-before`]: beforeContent,
            [`${selectorPrefix}-search-form-have-after`]: afterContent,
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
            <div className="ant-form-btn-group">
              <Button onClick={() => this.onResetSearch()} size={size}>
                {resetText || Intl.get('reset')}
              </Button>
              <Button type="primary" onClick={() => this.onSearch()} size={size}>
                {searchText || Intl.get('search')}
              </Button>
            </div>
          )}
        </Form>
        {afterContent}
      </div>
    );
  }

  /**
   * 渲染工具栏
   * 包含标题、全选、刷新、搜索、设置等功能
   * @returns 工具栏JSX
   */
  private renderToolbar = (): React.ReactNode => {
    if (!this.props.toolbar) return null;
    
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
                ? Intl.getHTML('total_count', { n: pagination && pagination.total })
                : total}
            </span>
          ) : null}
          {
            // selectAll { total: 是否是选中全部数据，默认是当前页数据 }
            selectAll ? (
              <ToolbarSelectAll
                selectAll={typeof selectAll === 'boolean' ? {} : selectAll}
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
          {reload ? <ToolbarReload reload={typeof reload === 'boolean' ? {} : reload} onSearch={() => this.onSearch()} /> : null}
          {setting ? (
            <ToolbarSetting
              setting={typeof setting === 'boolean' ? {} : setting}
              tableColumns={tableColumns}
              onSettingChange={(keys) => this.onSettingChange(keys)}
              onSettingSortEnd={(params) => this.onSettingSortEnd(params)}
              selectedColumnKeys={selectedColumnKeys}
            />
          ) : null}
        </div>
      </div>
    );
  };

  /**
   * 渲染列表
   * @returns 列表JSX
   */
  private renderList = (): React.ReactNode => {
    if (!this.props.list) return null;

    const { rowKey, pagination, loading, renderItem, ...rest } = this.getModeProps();
    const rowSelection = this.getRowSelection();

    return (
      <List
        rowKey={rowKey}
        pagination={this.getPagination(pagination)}
        loading={this.getLoading(loading)}
        renderItem={(item: any, index: number) => {
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
                          rowSelection.selectedRowKeys.filter((v: any) => v !== item[key]),
                          rowSelection.selectedRows.filter((v: any) => v[key] !== item[key]),
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
        {...rest}
      />
    );
  };

  /**
   * 渲染表格
   * @returns 表格JSX
   */
  private renderTable = (): React.ReactNode => {
    if (!this.props.table) return null;
    
    const { selectedColumnKeys, tableColumns } = this.state;
    const { sortable, pagination, loading, dataSource, columns, rowKey, rowSelection, ...rest } =
      this.getModeProps();

    const tableProps = {
      pagination: this.getPagination(pagination),
      loading: this.getLoading(loading),
      rowSelection: this.getRowSelection(),
      columns: tableColumns.filter((v: any) => selectedColumnKeys.includes(v.key)),
      dataSource: dataSource,
      onChange: this.onTableChange,
      ...rest,
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
   * 渲染内容区域
   * @returns 内容区域JSX
   */
  private renderContent(): React.ReactNode {
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
   * 渲染加载效果
   * @returns 加载效果JSX
   */
  private renderLoading(): React.ReactNode {
    return <Skeleton paragraph={{ rows: 10 }} title={false} />;
  }

  /**
   * 渲染组件
   * @returns 组件JSX
   */
  render(): React.ReactNode {
    const { className } = this.props;

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
