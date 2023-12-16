import { Button, Table } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import type { FormInstance, FormListFieldData, FormListOperation } from 'antd/es/form';
import type { TableProps } from 'antd/es/table/InternalTable';
import type {
  ColumnType,
  ColumnsType,
  FilterValue,
  SorterResult,
  TableCurrentDataSource,
  TablePaginationConfig,
} from 'antd/es/table/interface';
import classNames from 'classnames';
import cloneDeep from 'lodash.clonedeep';
import PropTypes from 'prop-types';
import type { ReactElement, ReactNode, RefObject } from 'react';
import React, { createContext, createRef } from 'react';

import { DownOutlined, SearchOutlined, UpOutlined } from '@ant-design/icons';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import Intl from '@baifendian/adhere-util-intl';

import ColumnResizable, {
  SearchTableResizableObserver,
  SearchTableResizableTitle,
} from './Extension/ColumnResizable';
import ColumnSetting from './Extension/ColumnSetting';
import ExportExcel from './Extension/ExportExcel';
import ReloadTable from './Extension/ReloadTable';
import TableCell from './Extension/TableComponents/TableCell';
import TableRow from './Extension/TableComponents/TableRow';
import TableDensitySetting from './Extension/TableDensitySetting';
import Search, { defaultProps as searchDefaultProps, propTypes as searchPropTypes } from './Search';
import type {
  CellConfigReducer,
  ColumnTypeExt,
  RowConfig,
  RowConfigReducer,
  SearchTableProps,
  SearchTableState,
} from './types';
import { TableDensity } from './types';

export const selectorPrefix = 'adhere-ui-search-table';

export const SearchTableContext = createContext<{
  context: SearchTable;
  editable?: {
    tableEditable?: {
      form?: FormInstance;
      formList?: {
        fields: FormListFieldData[];
        operation?: FormListOperation;
        meta?: {
          errors?: ReactNode[];
          warnings?: ReactNode[];
        };
      };
    };
  };
} | null>(null);

/**
 * SearchTable
 * @class SearchTable
 * @classdesc SearchTable
 */
abstract class SearchTable<
  P extends SearchTableProps = SearchTableProps,
  S extends SearchTableState = SearchTableState,
> extends Search<P, S> {
  static displayName = 'SearchTable';

  // 序号生成的规则 - 单独模式
  static NUMBER_GENERATOR_RULE_ALONE = Symbol();
  // 序号生成的规则 - 连续模式
  static NUMBER_GENERATOR_RULE_CONTINUITY = Symbol();

  // 全选的规则 - 标准模式(不能跨页)
  static ROW_SELECTION_NORMAL_MODE = Symbol();
  // 全选的规则 - 可以跨页
  static ROW_SELECTION_CONTINUOUS_MODE = Symbol();

  protected tableWrapRef: RefObject<HTMLDivElement> = createRef();

  // 自定义表格部分
  protected components = {
    header: {
      cell: SearchTableResizableTitle,
    },
    body: {
      // 固定是这个组件
      row: TableRow,
      // 固定是这个组件
      cell: TableCell,
    },
  };

  // 列拖动对象
  protected columnResizable = new ColumnResizable();

  // 列属性监控对象
  protected columnObserver: any = null;

  // rowConfigReducers
  // 给TableRow传递props的reducer
  protected rowConfigReducers: RowConfigReducer[] = [];

  // cellConfigReducers
  // 给TableCell传递props的reducer
  protected cellConfigReducers: CellConfigReducer[] = [];

  // tableRowComponentReducers
  // 处理TableRow的reducer
  protected tableRowComponentReducers: string[] = [];

  // tableCellComponentReducers
  // 处理TableCell的reducer
  protected tableCellComponentReducers: string[] = [];

  /**
   * isShowNumber
   * @description 表格是否显示序号
   * @return {boolean}
   */
  abstract isShowNumber(): boolean;

  /**
   * getTableNumberColumnWidth
   * @description 表格序号列的宽度
   * @return {number}
   */
  abstract getTableNumberColumnWidth(): number;

  /**
   * getTableNumberColumnProps
   * @description 获取序号列的Props
   * @return {object}
   */
  abstract getTableNumberColumnProps(): object;

  /**
   * getNumberGeneratorRule
   * @description 获取符号列的生成规则
   * @return {symbol}
   */
  abstract getNumberGeneratorRule(): symbol;

  /**
   * getRowSelectionMode
   * @description 获取全选的生模式
   * @return {symbol}
   */
  abstract getRowSelectionMode(): symbol;

  /**
   * getRowKey
   * @description 获取表格的主键属性
   * @return {string}
   */
  abstract getRowKey(): string;

  /**
   * getData
   * @description 获取表格数据
   * @return Array<Object>
   */
  abstract getData(): object[];

  /**
   * getColumns
   * @description 获取表格列的信息
   * @return Array<object>
   */
  abstract getColumns(): ColumnType<object>[];

  /**
   * getOrderFieldProp
   * @description 获取表格的排序字段
   * @return {string}
   */
  abstract getOrderFieldProp(): string;

  /**
   * getOrderProp
   * @description 获取表格的排序属性
   * @return {string}
   */
  abstract getOrderProp(): string;

  /**
   * getOrderPropValue
   * @description 获取默认排序方式
   * @return {'descend' | 'ascend'}
   */
  abstract getOrderPropValue(): 'descend' | 'ascend';

  /**
   * getOrderFieldValue
   * @description 获取默认排序字段的值
   * @return {string}
   */
  abstract getOrderFieldValue(): string;

  /**
   * onSubTableChange
   * @description 获取表格change句柄
   * @param pagination
   * @param filters
   * @param sorter
   * @param extra
   */
  abstract onSubTableChange(
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<object> | SorterResult<object>[],
    extra?: TableCurrentDataSource<object>,
  ): void;

  /**
   * onTableRowComponentReducers
   * @description 对tableRowComponentReducers对象进行设置的hook
   * @param {ColumnTypeExt[]} columns
   * @return {string[]}
   */
  abstract onTableRowComponentReducers(columns: ColumnTypeExt[]): string[];

  /**
   * onTableCellComponentReducers
   * @description 对tableCellComponentReducers对象进行设置的hook
   * @param {ColumnTypeExt[]} columns
   * @return {string[]}
   */
  abstract onTableCellComponentReducers(columns: ColumnTypeExt[]): string[];

  constructor(props) {
    super(props);

    // @ts-ignore
    this.state = {
      page: 1,
      limit: this.getLimit(),
      expand: props.defaultExpandSearchCollapse,
      expandedRowKeys: props.antdTableProps?.expandable?.expandedRowKeys || [],
      scrollY: 0,
    };

    Object.assign(this.state, {
      // 列设置
      columnSetting: this.getTableColumns().map((column, index) => ({
        ...column,
        sort: index,
        display: true,
      })),
      // 表格密度设置
      tableDensity: this.getTableDensity(),
    });

    this.onClear = this.onClear.bind(this);
    this.onExpandedRowsChange = this.onExpandedRowsChange.bind(this);
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

  componentWillReceiveProps(nextProps: SearchTableProps) {
    // @ts-ignore
    super.componentWillReceiveProps(nextProps);

    if (
      JSON.stringify(this.state.expandedRowKeys) !==
      JSON.stringify(nextProps.antdTableProps?.expandable?.expandedRowKeys || [])
    ) {
      // @ts-ignore
      this.setState({
        expandedRowKeys: nextProps.antdTableProps?.expandable?.expandedRowKeys,
      });
    }

    this.columnSettingEffect(nextProps);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidUpdate(prevProps, prevState, snapshot?: any) {
    if (!this.tableWrapRef.current) return;

    this.searchTableResizableEffectLayout();
    this.fixedHeaderAutoTableEffectLayout(prevProps, prevState);
  }

  /**
   * searchTableResizableEffectLayout
   * @protected
   */
  searchTableResizableEffectLayout() {
    // 监控header的属性变化(colgroup)
    if (!this.columnObserver) {
      this.columnObserver = SearchTableResizableObserver(this);
    }
  }

  /**
   * fixedHeaderAutoTableEffectLayout
   * @protected
   * @param {SearchTableProps} prevProps
   * @param {SearchTableState} prevState
   */
  fixedHeaderAutoTableEffectLayout(prevProps, prevState) {
    if (this.props.fixedHeaderAutoTable) {
      const dataSource = this.getData();

      if (
        dataSource &&
        dataSource.length &&
        ((prevState.scrollY === 0 && this.state.scrollY === 0) ||
          prevState.scrollY !== this.state.scrollY ||
          prevState.expand !== this.state.expand)
      ) {
        const tableWrapRef = this.tableWrapRef.current as HTMLElement;

        const tableHeaderHeight =
          (tableWrapRef.querySelector('.ant-table-header') as HTMLElement)?.offsetHeight || 0;

        const tablePaginationHeight =
          (tableWrapRef.querySelector('.ant-table-pagination') as HTMLElement)?.offsetHeight || 0;
        // @ts-ignore
        this.setState({
          scrollY:
            tableWrapRef.clientHeight -
            (tableHeaderHeight + (tablePaginationHeight ? tablePaginationHeight + 16 * 2 : 0)),
        });
      }
    }
  }

  /**
   * columnSettingEffect
   * @param {SearchTableProps} props
   * @protected
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  columnSettingEffect(props: SearchTableProps) {
    const preColumnSetting = this.state.columnSetting || [];
    const columnSetting = this.getTableColumns().map((column, index) => ({
      ...column,
      sort: index,
      display: true,
    }));

    // 长度不相等
    if (preColumnSetting?.length !== columnSetting.length) {
      // @ts-ignore
      this.setState({
        columnSetting,
      });

      return;
    }

    const preColumnSettingRowKeys = preColumnSetting?.map?.((t) => t[this.getRowKey()]);
    const columnSettingRowKeys = columnSetting?.map?.((t) => t[this.getRowKey()]);

    // 长度相等但是key有变化
    if (preColumnSettingRowKeys?.toString() !== columnSettingRowKeys.toString()) {
      const rowKey = this.getRowKey() || 'id';

      // @ts-ignore
      this.setState({
        columnSetting: columnSetting?.map((t) => {
          // eslint-disable-next-line @typescript-eslint/no-shadow
          const item = preColumnSetting?.find((item) => item[rowKey] === t[rowKey]);

          return {
            ...t,
            display: item ? item.display : true,
          };
        }),
      });
    }
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
   * onTableChange
   * @description 表格change
   * @param {any} pagination
   * @param {any} filters
   * @param {any} sorter
   */
  onTableChange = (pagination, filters, sorter) => {
    const prePage = this.state.page;
    const preLimit = this.state.limit;

    // @ts-ignore
    this.setState(
      {
        page: pagination.current,
        limit: pagination.pageSize,
        [this.getOrderFieldProp()]: sorter.field || this.getOrderFieldValue(),
        [this.getOrderProp()]: sorter.order /* || this.getOrderPropValue()*/,
      },
      () => {
        const { order } = sorter;

        if (!order) {
          if (this.state.page !== prePage || this.state.limit !== preLimit) {
            this.fetchData();
          }
        } else {
          this.fetchData();
        }

        this.onSubTableChange(pagination, filters, sorter);
      },
    );
  };

  /**
   * sortOrder
   * @description table的column中加入
   * @param {string} columnName
   * @return {string}
   */
  sortOrder(columnName: string): string {
    if (!this.state) return '';

    if (this.state[this.getOrderFieldProp()] === columnName) {
      return this.state[this.getOrderProp()];
    }

    return '';
  }

  /**
   * onCellConfigReducers
   * @description 所有onCell的处理
   * @param {
   *     rowIndex: number;
   *     column: ColumnTypeExt;
   *     record: Record<string, any>;
   *     columns: ColumnTypeExt[];
   * } params
   * @return ColumnTypeExt
   */
  onCellConfigReducers(params: {
    rowIndex: number;
    column: ColumnTypeExt;
    record: Record<string, any>;
    columns: ColumnTypeExt[];
  }): ColumnTypeExt {
    const { rowIndex, column, record, columns } = params;

    return this.cellConfigReducers.reduce(
      // eslint-disable-next-line @typescript-eslint/no-shadow
      (params, reducer) => {
        params.value = reducer.call(this, { rowIndex, record, columns, column: params.value });
        return params;
      },
      { value: column },
    ).value;
  }

  /**
   * onRowConfigReducers
   * @description 所有row的处理
   * @param {
   *     rowIndex: number;
   *     record: Record<string, any>;
   *     columns: ColumnTypeExt[];
   * } params
   * @return {RowConfig}
   */
  onRowConfigReducers(params: {
    rowIndex: number;
    record: Record<string, any>;
    columns: ColumnTypeExt[];
  }): RowConfig {
    const { rowIndex, record, columns } = params;

    // const reducers = [this.rowEditableReducer];

    return this.rowConfigReducers.reduce(
      // eslint-disable-next-line @typescript-eslint/no-shadow
      (params, reducer) => {
        params.value = reducer.call(this, { rowIndex, record, columns, rowConfig: params.value });
        return params;
      },
      { value: {} },
    ).value;
  }

  /**
   * onExpandedRowsChange
   * @param {any[]} expandedRowKeys
   */
  onExpandedRowsChange(expandedRowKeys) {
    return new Promise<void>((resolve) => {
      // @ts-ignore
      this.setState(
        {
          expandedRowKeys,
        },
        () => {
          resolve();
        },
      );

      if ((this.props.antdTableProps ?? {})?.expandable?.onExpandedRowsChange) {
        this.props.antdTableProps?.expandable?.onExpandedRowsChange?.(expandedRowKeys);
      }
    });
  }

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
   * @return {TableDensity}
   */
  getTableDensity() {
    return TableDensity.DEFAULT;
  }

  /**
   * getTableColumnsAll
   */
  getTableColumnsAll(): any[] {
    const isShowNumber = this.isShowNumber();

    // 对权限进行过滤
    const columns = this.getColumns()
      // $resizable 设置
      .map((column: ColumnTypeExt, index) => {
        const res = { value: column };

        const loop = (_column) => {
          let _res: ColumnsType = _column;

          // 如果是列可以拖动
          if ('$resizable' in _column && !!_column?.$resizable) {
            _res = this.columnResizable.searchTableResizableColumnItem(this, index, _column);
          }
          // 其他列
          else {
            // @ts-ignore
            _res.onHeaderCell = () => ({
              column: _column,
            });
          }

          // @ts-ignore
          if (_res?.children && Array.isArray(_res.children)) {
            // @ts-ignore
            _res.children.forEach((_t, _index) => {
              // @ts-ignore
              _res.children[_index] = loop(_t);
            });
          }

          return _res;
        };

        // @ts-ignore
        res.value = loop(column);

        return res.value;
      })
      .map((column: ColumnTypeExt) => {
        return {
          ...column,
          // 每个单元格都会调用
          // 给TableCell传递的props参数
          onCell: (record, rowIndex) => {
            const _column = cloneDeep(column);

            return {
              // 行的索引
              rowIndex,
              // 行的数据
              record,
              // 列的配置
              column: this.onCellConfigReducers({
                rowIndex,
                column: _column,
                record,
                columns,
              }),
              // 所有列的配置
              columns,
            };
          },
        };
      });

    if (isShowNumber) {
      return [this.getTableColumnConfig(), ...(columns || [])];
    }

    return columns;
  }

  /**
   * getTableColumns
   * @description 获取表格的列数据
   * @return Array<any>
   */
  getTableColumns(): any[] {
    return this.getTableColumnsAll().filter((column: ColumnTypeExt) => {
      if ('$hide' in column && !!column.$hide) return false;

      if ('$authorized' in column) return column?.$authorized?.();

      return true;
    });
  }

  /**
   * getTableColumnConfig
   * @description 获取表格序号列的设置
   * @return {any}
   */
  getTableColumnConfig() {
    const getTableNumberColumnWidth = this.getTableNumberColumnWidth();

    const numberGeneratorRule =
      this.getNumberGeneratorRule() ?? SearchTable.NUMBER_GENERATOR_RULE_ALONE;

    const { page = 1, limit = this.getLimit() } = this.state;

    return {
      ...(this.getTableNumberColumnProps ? this.getTableNumberColumnProps() ?? {} : {}),
      ...{
        title: Intl.v('序号'),
        dataIndex: '_number',
        key: '_number',
        align: 'center',
        width: getTableNumberColumnWidth,
        render: (v, r, index) => (
          <ConditionalRender
            // 单独生成
            conditional={numberGeneratorRule === SearchTable.NUMBER_GENERATOR_RULE_ALONE}
            noMatch={() =>
              this.renderTableNumberColumn((page - 1) * limit + (index + 1), {
                value: v,
                record: r,
                index,
              })
            }
          >
            {() => this.renderTableNumberColumn(index + 1, { value: v, record: r, index })}
          </ConditionalRender>
        ),
      },
    };
  }

  /**
   * getTableRowComponentReducers
   * @return {string[]}
   */
  getTableRowComponentReducers() {
    return this.tableRowComponentReducers;
  }

  /**
   * getTableCellComponentReducers
   * @return {string[]}
   */
  getTableCellComponentReducers() {
    return this.tableCellComponentReducers;
  }

  /**
   * getExportExcelColumns
   * @description 获取导出excel的列
   * @param _columns
   * return _columns
   */
  getExportExcelColumns(_columns: any[]): any[] {
    return _columns
      .filter(
        ({ dataIndex }) =>
          ![
            '_number',
            // @ts-ignore
            this?.getOptionsColumnDataIndex?.() || '_options',
          ].includes(dataIndex),
      )
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
   * getExportExcelData
   * @description 获取导出excel的数据
   * @return any[]
   */
  getExportExcelData() {
    return this.getData();
  }

  /**
   * renderTableNumberColumn
   * @description - 渲染序号列
   * @param {string} number
   * @param {{ value: any; record: object; index: number }} params
   * @return {ReactNode}
   */
  renderTableNumberColumn(
    number: string = '',
    params: { value: any; record: object; index: number },
  ) {
    return <span>{number}</span>;
  }

  /**
   * renderTableReload
   * @description 刷新表格
   * @return {ReactElement}
   */
  renderTableReload(): ReactElement {
    return <ReloadTable onReload={() => this.fetchData()} showLoading={this.showLoading()} />;
  }

  /**
   * renderColumnSetting
   * @description 创建列设置组件
   * @return {ReactElement}
   */
  renderColumnSetting(): ReactElement {
    const columns = [...(this.state.columnSetting as any[])];

    columns.sort((c1, c2) => {
      if (c1.sort > c2.sort) return 1;
      if (c1.sort < c2.sort) return -1;
      return 0;
    });

    return (
      <ColumnSetting
        columns={columns}
        onShowColumns={(checked) => {
          // @ts-ignore
          this.setState(({ columnSetting }) => ({
            columnSetting: (columnSetting || [])?.map((column) => ({
              ...column,
              display: checked,
            })),
          }));
        }}
        onReset={() => {
          // @ts-ignore
          this.setState(() => ({
            columnSetting: this.getTableColumns().map((column, index) => ({
              ...column,
              display: true,
              sort: index,
            })),
          }));
        }}
        onDisplayColumn={(column, checked) => {
          // @ts-ignore
          this.setState(({ columnSetting }) => ({
            columnSetting: (columnSetting || [])?.map((_column) => ({
              ..._column,
              display: _column.key === column.key ? checked : _column.display,
            })),
          }));
        }}
        onSortEnd={(map) => {
          // @ts-ignore
          this.setState(({ columnSetting }) => ({
            columnSetting: (columnSetting || [])?.map((column) => ({
              ...column,
              sort: map.get(column.key),
            })),
          }));
        }}
      />
    );
  }

  /**
   * renderTableDensitySetting
   * @description 表格密度设置
   * @return {ReactElement}
   */
  renderTableDensitySetting(): ReactElement {
    return (
      <TableDensitySetting
        density={this.state.tableDensity}
        onChange={(density) => {
          // @ts-ignore
          this.setState({
            tableDensity: density,
          });
        }}
        onReset={() => {
          // @ts-ignore
          this.setState({
            tableDensity: this.getTableDensity(),
          });
        }}
      />
    );
  }

  /**
   * renderExportExcel
   * @description 渲染导出excel
   * @return {ReactElement}
   */
  renderExportExcel(): ReactElement {
    return (
      <ExportExcel
        title={this.props.title}
        getDataSource={() => this.getExportExcelData()}
        getColumns={() => this.getExportExcelColumns(this.getTableColumns())}
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
            className={`${selectorPrefix}-search-footer-item-expand-search-down-btn`}
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
            className={`${selectorPrefix}-search-footer-item-expand-search-up-btn`}
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
    const { isShowExpandSearch } = this.props;

    const defaultItems = [
      <Button
        className={`${selectorPrefix}-search-footer-item`}
        type="primary"
        key="search"
        loading={this.showLoading()}
        icon={<SearchOutlined />}
        onClick={() => this.search()}
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
   * renderTable
   * @description - 认选表格体
   * @return {ReactElement}
   */
  renderBody() {
    const { antdTableProps, fixedHeaderAutoTable } = this.props;

    const { columnSetting = [], tableDensity } = this.state;

    const columns = this.getTableColumns()
      .map((column, index) => ({
        ...columnSetting[index],
        ...column,
      }))
      .filter((column) => column.display);

    columns.sort((c1, c2) => {
      if (c1.sort > c2.sort) return 1;
      if (c1.sort < c2.sort) return -1;
      return 0;
    });

    // Table的antdProps配置
    const tableProps: TableProps<any> = {
      rowKey: this.getRowKey(),
      dataSource: this.getData(),
      columns,
      onChange: this.onTableChange,
      pagination: this.getPagination(),
      rowSelection: this.getRowSelection(),
      size: tableDensity as SizeType,
      // 组件
      components: this.components, // this.onComponents(columns, this.components),
      // onRow
      // 给TableRow的props参数
      // @ts-ignore
      onRow: (record, rowIndex) => {
        // 这块可能以后会有很多操作
        // 行的所有操作都可以在这里处理
        return {
          record,
          rowIndex,
          columns,
          rowKey: this.getRowKey(),
          rowConfig: this.onRowConfigReducers({
            rowIndex: Number(rowIndex),
            record,
            columns,
          }),
        };
      },
      ...(antdTableProps ?? {}),
      expandable: {
        ...(antdTableProps ?? {}).expandable,
        expandedRowKeys: this.state.expandedRowKeys,
        onExpandedRowsChange: this.onExpandedRowsChange,
      },
    };

    // 是否支持锁定列头，表格体滚动
    if (fixedHeaderAutoTable) {
      const { scrollY } = this.state;

      if (antdTableProps) {
        if (antdTableProps.scroll) {
          (tableProps as any).scroll.y = scrollY;
        } else {
          tableProps.scroll = { y: scrollY };
        }
      } else {
        tableProps.scroll = { y: scrollY };
      }
    }

    this.tableRowComponentReducers = this.onTableRowComponentReducers(columns);
    this.tableCellComponentReducers = this.onTableCellComponentReducers(columns);

    return <Table {...tableProps} />;
  }

  /**
   * renderInner
   * @description 渲染SearchTable
   * @return {ReactElement | null}
   */
  renderInner() {
    const { fixedTableSpaceBetween } = this.props;

    return super.renderInner(
      this.tableWrapRef,
      classNames({
        ['fixed-table-space-between']: fixedTableSpaceBetween,
      }),
    );
  }

  /**
   * renderChildren
   * @return {ReactElement}
   */
  renderChildren() {
    // @ts-ignore
    return <div className={`${selectorPrefix}-wrap`}>{super.render()}</div>;
  }

  /**
   * render
   * @return {ReactElement}
   */
  render(): ReactElement {
    return (
      <SearchTableContext.Provider
        value={{
          context: this,
        }}
      >
        {this.renderChildren()}
      </SearchTableContext.Provider>
    );
  }
}

export const defaultProps = {
  antdTableProps: {},
  fixedHeaderAutoTable: false,
  fixedTableSpaceBetween: false,
  ...searchDefaultProps,
};

export const propTypes = {
  // antdTable的Props
  antdTableProps: PropTypes.object,
  // 锁定列头，表格滚动
  fixedHeaderAutoTable: PropTypes.bool,
  // 两端固定(表格的头始终在上方，分页始终在下方)
  fixedTableSpaceBetween: PropTypes.bool,
  ...searchPropTypes,
};

SearchTable.defaultProps = defaultProps;

SearchTable.propTypes = propTypes;

export default SearchTable;
