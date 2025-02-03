import { Button, Checkbox, Table } from 'antd';
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
import difference from 'lodash.difference';
import sortBy from 'lodash.sortby';
import uniq from 'lodash.uniq';
import uniqBy from 'lodash.uniqby';
import PropTypes from 'prop-types';
import { ExpandableConfig } from 'rc-table/lib/interface';
import type { ReactElement, ReactNode, RefObject } from 'react';
import React, { createContext, createRef } from 'react';

import { DownOutlined, SearchOutlined, UpOutlined } from '@ant-design/icons';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import Util from '@baifendian/adhere-util';
import Intl from '@baifendian/adhere-util-intl';

import { TREE_UTIL_CONFIG } from './Constant';
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
import { cloneDeep } from './Util';
import type {
  CellConfigReducer,
  ColumnTypeExt,
  RowConfig,
  RowConfigReducer,
  SearchTableProps,
  SearchTableState,
  TableRowSelectionExt,
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

  // 返回所有选择节点的数据
  static CHECKED_STRATEGY_SHOW_ALL = Symbol();
  // 只显示父节点(当父节点下所有子节点都选中时)
  // static CHECKED_STRATEGY_SHOW_PARENT = Symbol();
  // 返回叶子节点的数据
  static CHECKED_STRATEGY_SHOW_CHILD = Symbol();

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
   * @return {number | string}
   */
  abstract getTableNumberColumnWidth(): number | string;

  /**
   * getTableCheckAllColumnWidth
   * @description 全选列的宽度
   * @return {number | string}
   */
  abstract getTableCheckAllColumnWidth(): number | string;

  /**
   * getTableNumberColumnProps
   * @description 获取序号列的Props
   * @return {object}
   */
  abstract getTableNumberColumnProps(): object;

  /**
   * getTableCheckAllColumnProps
   * @description 获取全选列的Props
   * @return {object}
   */
  abstract getTableCheckAllColumnProps(): object;

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
   * @return {object[]}
   */
  abstract getData(): object[];

  /**
   * setData
   * @description 设置表格数据
   */
  abstract setData<T extends Array<object>>(data: T | ((prevData: T) => T)): Promise<any[]>;

  /**
   * getColumns
   * @description 获取表格列的信息
   * @return {ColumnType<object>[]}
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

  /**
   * isUseCheckedStrategy
   * @description 是否使用CheckedStrategy模式 默认false
   * @return {boolean}
   */
  abstract isUseCheckedStrategy(): boolean;

  /**
   * getCheckedStrategy
   * @description 定义selectedRowKeys数据的返回
   * CHECKED_STRATEGY_SHOW_ALL | CHECKED_STRATEGY_SHOW_CHILD 默认是CHECKED_STRATEGY_SHOW_ALL
   * CHECKED_STRATEGY_SHOW_ALL: 返回所有有选择的数据
   * CHECKED_STRATEGY_SHOW_CHILD: 返回叶子节点数据
   * @return {symbol}
   */
  abstract getCheckedStrategy(): symbol;

  /**
   * onRowSelectionChange
   */
  abstract onRowSelectionChange(selectedRowKeys: any[], selectedRows: any[]): void;

  /**
   * onRowSelectionSelect
   */
  abstract onRowSelectionSelect(record: Record<string, any>, selected: boolean): void;

  /**
   * onRowSelectionSelectAll
   */
  abstract onRowSelectionSelectAll(
    selected: boolean,
    selectedRows: object[],
    changeRows: object[],
  ): void;

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

    this.effectWithExpandedRowKeys(nextProps);

    this.effectWithColumnSetting(nextProps);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidUpdate(prevProps, prevState, snapshot?: any) {
    if (!this.tableWrapRef.current) return;

    this.searchTableResizableEffectLayout();
    this.fixedHeaderAutoTableEffectLayout(prevProps, prevState);
  }

  /**
   * effectWithExpandedRowKeys
   * @protected
   * @param nextProps
   */
  effectWithExpandedRowKeys(nextProps: SearchTableProps) {
    if (
      JSON.stringify(sortBy(this.state.expandedRowKeys ?? [])) !==
      JSON.stringify(sortBy(nextProps.antdTableProps?.expandable?.expandedRowKeys ?? []))
    ) {
      // @ts-ignore
      this.setState({
        expandedRowKeys: nextProps.antdTableProps?.expandable?.expandedRowKeys,
      });
    }
  }

  /**
   * syncCheckedStrategyWithShowChild
   * @param {any[]} dataSource
   * @return {Promise<void>}
   */
  async syncCheckedStrategyWithShowChild(dataSource: any[]): Promise<void> {
    const rowKey = this.getRowKey();

    const flatDataSource = Util.treeToArray(dataSource, TREE_UTIL_CONFIG, rowKey);
    const flatDataSourceKeys = flatDataSource.map((record) => record[rowKey]);
    const { defaultSelectedRowKeys } = this.props;
    // 筛选出需要矫正的keys
    const asyncPageKeys = defaultSelectedRowKeys.filter((key: any) =>
      flatDataSourceKeys.includes(key),
    );

    let selectedKeysSet = new Set<any>(asyncPageKeys);

    for (let i = 0; i < asyncPageKeys.length; i++) {
      const key = asyncPageKeys[i];
      const node = flatDataSource.find((n) => n[rowKey] === key);

      if (!node) break;

      // 向上是祖先
      const ancestor = Util.getAncestor(flatDataSource, node, {
        ...TREE_UTIL_CONFIG,
        keyAttr: rowKey,
      });

      // 处理祖先
      for (let j = 0; j < ancestor.length; j++) {
        const _node = ancestor[j];

        // 获取一个祖先的子孙
        const _ancestorKeys = Util.getDescendants(flatDataSource, _node, {
          ...TREE_UTIL_CONFIG,
          keyAttr: rowKey,
        }).map((t) => t[rowKey]);

        if (_ancestorKeys.every((key) => selectedKeysSet.has(key))) {
          selectedKeysSet.add(_node[rowKey]);
        } else {
          break;
        }
      }
    }

    const selectedKeys = Array.from(selectedKeysSet).filter((key) => !asyncPageKeys.includes(key));

    const { selectedRowKeys, selectedRows } = this.state;

    // 都不在selectedRowKeys中的时候
    if (!selectedKeys.every((key) => selectedRowKeys.includes(key))) {
      console.log('set');
      this.setState({
        selectedRowKeys: [...selectedRowKeys, ...selectedKeys],
        selectedRows: [
          ...selectedRows,
          [...selectedKeys, ...asyncPageKeys].map((key) =>
            flatDataSource.find((record) => record[rowKey] === key),
          ),
        ],
      });
    }
  }

  /**
   * syncCheckedStrategyWithShowAll
   * @param {any[]} dataSource
   * @return {Promise<void>}
   */
  async syncCheckedStrategyWithShowAll(dataSource: any[]): Promise<void> {
    console.log('syncCheckedStrategyWithShowAll');
    const rowKey = this.getRowKey();

    const flatDataSource = Util.treeToArray(dataSource, TREE_UTIL_CONFIG, rowKey);
    const flatDataSourceKeys = flatDataSource.map((record) => record[rowKey]);
    console.log('flatDataSourceKeys', flatDataSourceKeys);
    const { defaultSelectedRowKeys } = this.props;
    // 筛选出需要矫正的keys
    const asyncPageKeys = defaultSelectedRowKeys.filter((key: any) =>
      flatDataSourceKeys.includes(key),
    );

    let selectedKeysSet = new Set<any>(asyncPageKeys);

    for (let i = 0; i < asyncPageKeys.length; i++) {
      const key = asyncPageKeys[i];
      const node = flatDataSource.find((n) => n[rowKey] === key);

      if (!node) break;

      // 向下是子孙
      const descendants = Util.getDescendants(flatDataSource, node, {
        ...TREE_UTIL_CONFIG,
        keyAttr: rowKey,
      });

      descendants
        ?.map((t) => t[rowKey])
        .forEach((key: any) => {
          selectedKeysSet.add(key);
        });

      // 向上是祖先
      const ancestor = Util.getAncestor(flatDataSource, node, {
        ...TREE_UTIL_CONFIG,
        keyAttr: rowKey,
      });

      // 处理祖先
      for (let j = 0; j < ancestor.length; j++) {
        const _node = ancestor[j];

        // 获取一个祖先的子孙
        const _ancestorKeys = Util.getDescendants(flatDataSource, _node, {
          ...TREE_UTIL_CONFIG,
          keyAttr: rowKey,
        }).map((t) => t[rowKey]);

        if (_ancestorKeys.every((key) => selectedKeysSet.has(key))) {
          selectedKeysSet.add(_node[rowKey]);
        } else {
          break;
        }
      }
    }

    const selectedKeys = Array.from(selectedKeysSet).filter((key) => !asyncPageKeys.includes(key));

    const { selectedRowKeys, selectedRows } = this.state;

    // 祖先节点都不在selectedRowKeys中的时候
    console.log('selectedKeys', selectedKeys);
    console.log('selectedRowKeys', selectedRowKeys);
    if (!selectedKeys.every((key) => selectedRowKeys.includes(key))) {
      console.log('set');
      this.setState({
        selectedRowKeys: [...selectedRowKeys, ...selectedKeys],
        selectedRows: [
          ...selectedRows,
          [...selectedKeys, ...asyncPageKeys].map((key) =>
            flatDataSource.find((record) => record[rowKey] === key),
          ),
        ],
      });
    }
  }

  /**
   * syncCheckedStrategy
   * @description 同步
   * @param {any[]} dataSource
   * @return {Promise<void>}
   */
  async syncCheckedStrategy(dataSource: any[]): Promise<void> {
    if (this.getCheckedStrategy() === SearchTable.CHECKED_STRATEGY_SHOW_CHILD) {
      return this.syncCheckedStrategyWithShowChild(dataSource);
    }

    if (this.getCheckedStrategy() === SearchTable.CHECKED_STRATEGY_SHOW_ALL) {
      return this.syncCheckedStrategyWithShowAll(dataSource);
    }

    return Promise.resolve();

    // for (let key of selectedRowKeys) {
    //   try {
    //     const record = flatDataSource.find((record) => record[rowKey] === key);
    //
    //     await this.strategyCheckItemChecked({
    //       checked: true,
    //       record,
    //       dataSource,
    //       flatDataSource,
    //     });
    //   } catch (error) {
    //     throw new Error();
    //   }
    // }

    //
    // const rowSelectionConfig = this.getRowSelectionConfig();
    // selectedRowKeys.forEach((key) => {
    //   // selectedRowKeys: any[], selectedRows: any[]
    //   const record = dataSource.find((record) => record[rowKey] === key);
    //
    //   // @ts-ignore
    //   rowSelectionConfig.onChange(
    //     [key],
    //     [record].filter((t) => !!t),
    //   );
    //
    //   // record, selected
    //   // @ts-ignore
    //   rowSelectionConfig.onSelect(record, true);
    // });
    // 同步rows
    // const { selectedRows: originSelectedRows = [] } = this.state;
    //
    // const rowKey = this.getRowKey();
    //
    // const noRowKeys = selectedRowKeys.filter(
    //   (key) => originSelectedRows.findIndex((record: any) => record[rowKey] === key) === -1,
    // );
    //
    // const dataSourceKeys = dataSource.map((record) => record[rowKey]);
    //
    // // 没有row的keys转换后的rows
    // const rows1 = noRowKeys
    //   .filter((key) => dataSourceKeys.includes(key))
    //   .map((key) => dataSource.find((record) => record[rowKey] === key));
    //
    // // 删除多余的rows
    // const rows2 = originSelectedRows.filter((record: any) =>
    //   selectedRowKeys.includes(record[rowKey]),
    // );
    //
    // const selectedRowKeysInDataSource = selectedRowKeys.filter((key) =>
    //   dataSourceKeys.includes(key),
    // );
    //
    // // 向上
    //
    // // 向下
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
  fixedHeaderAutoTableEffectLayout(prevProps: SearchTableProps, prevState: SearchTableState) {
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
          (tableWrapRef.querySelector('.ant-table-thead') as HTMLElement)?.offsetHeight || 0;

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
   * effectWithColumnSetting
   * @param {SearchTableProps} props
   * @protected
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  effectWithColumnSetting(props: SearchTableProps) {
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
  onTableChange(pagination, filters, sorter) {
    const prePage = this.state.page;
    const preLimit = this.state.limit;

    return new Promise((resolve) => {
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
              this.fetchData().then((res) => resolve(res));
            }
          } else {
            this.fetchData().then((res) => resolve(res));
          }

          this.onSubTableChange(pagination, filters, sorter);
        },
      );
    });
  }

  onTableRow = (columns, record, rowIndex) => {
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
      ...(this.props?.onRow?.(columns, record, rowIndex) ?? {}),
    };
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
   * onExpand
   * @description 点击展开图标时触发
   * @param params
   */
  onExpand(...params) {
    if ((this.props.antdTableProps ?? {})?.expandable?.onExpand) {
      this.props.antdTableProps?.expandable?.onExpand?.(...params);
    }
  }

  /**
   * getIndentSize
   * @description Tree数据展开列的递进
   * @return {number}
   */
  getIndentSize(): number {
    return 15;
  }

  /**
   * search
   */
  search() {
    return new Promise<any>((resolve) => {
      // @ts-ignore
      this.setState(
        {
          page: 1,
        },
        () => {
          this.onSearch().then((res) => resolve(res));
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
    const childrenColumnName = this.getChildrenColumnName();

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
          if (_res?.[childrenColumnName] && Array.isArray(_res[childrenColumnName])) {
            // @ts-ignore
            _res[childrenColumnName].forEach((_t, _index) => {
              // @ts-ignore
              _res[childrenColumnName][_index] = loop(_t);
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
                // @ts-ignore
                columns,
              }),
              // 所有列的配置
              columns,
            };
          },
        };
      });

    return [
      // 如果使用CheckedStrategy模式则自定义Selection列
      this.isUseCheckedStrategy() && this.getCheckedStrategyColumnConfig(),
      this.isShowNumber() && this.getTableColumnConfig(),
      ...columns,
    ].filter((t) => !!t);
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
      ...(this.getTableNumberColumnProps ? this.getTableNumberColumnProps() ?? {} : {}),
    };
  }

  /**
   * getRowSelectionFilterData
   * @param {boolean} selected
   * @param {any:[]} records
   * @return {object}
   */
  getRowSelectionFilterData(
    selected: boolean,
    records: any[],
  ): {
    selectedRowKeys: any[];
    selectedRows: any[];
  } {
    const rowKey = this.getRowKey();

    if (selected) {
      return {
        selectedRowKeys: uniq([
          ...(this.state?.selectedRowKeys ?? []),
          ...records.map((r) => r[rowKey]),
        ]),
        selectedRows: uniqBy([...(this.state?.selectedRows ?? []), ...records], rowKey),
      };
    }
    //
    else {
      // remove
      return {
        selectedRowKeys: (this.state?.selectedRowKeys ?? []).filter(
          (key: any) => !records.find((r) => r[rowKey] === key),
        ),
        selectedRows: (this.state?.selectedRows ?? []).filter(
          (row: any) => !records.find((r) => r[rowKey] === row[rowKey]),
        ),
      };
    }
  }

  /**
   * rowSelectionFilter
   * @description rowSelectionFilter
   * @param {boolean} selected
   * @param {any[]} records
   * @return {Promise<void>}
   */
  rowSelectionFilter(selected: boolean, records: any[]): Promise<void> {
    return new Promise((resolve) => {
      const rowSelectionFilterData = this.getRowSelectionFilterData(selected, records);

      this.setState(rowSelectionFilterData, () => {
        resolve();
      });
    });
  }

  /**
   * getRowSelectionConfig
   * @description 获取RowSelection的配置对象
   */
  getRowSelectionConfig(): TableRowSelectionExt<object> {
    return {
      selectedRowKeys: this.state?.selectedRowKeys,
      onChange: (selectedRowKeys: any[], selectedRows: any[]) => {
        return new Promise<void>((resolve) => {
          if (this.getRowSelectionMode() === SearchTable.ROW_SELECTION_CONTINUOUS_MODE) {
            resolve();
          } else {
            // 如果是缺省模式(不能跨页选取)

            // @ts-ignore
            this.setState(
              {
                selectedRowKeys,
                selectedRows,
              },
              () => {
                this?.onRowSelectionChange?.(selectedRowKeys, selectedRows);
                resolve();
              },
            );
          }
        });
      },
      onSelect: (record, selected) => {
        return new Promise<void>((resolve, reject) => {
          if (this.getRowSelectionMode() === SearchTable.ROW_SELECTION_NORMAL_MODE) {
            resolve();
          } else {
            this.rowSelectionFilter(selected, [record])
              .then(() => {
                this?.onRowSelectionSelect?.(record, selected);
                resolve();
              })
              .catch(() => {
                reject();
              });
          }
        });
      },
      // 使用CheckedStrategy模式
      onCheckedStrategySelect: (record, changeRows, selected) => {
        return new Promise<void>((resolve, reject) => {
          if (this.getRowSelectionMode() === SearchTable.ROW_SELECTION_NORMAL_MODE) {
            resolve();
          } else {
            this.rowSelectionFilter(selected, changeRows)
              .then(() => {
                this?.onRowSelectionSelect?.(record, selected);
                resolve();
              })
              .catch(() => {
                reject();
              });
          }
        });
      },
      onCheckedStrategyVirtualSelect: (changeRows, selected) => {
        if (this.getRowSelectionMode() === SearchTable.ROW_SELECTION_NORMAL_MODE) {
          return null;
        }

        return this.getRowSelectionFilterData(selected, changeRows);
      },
      onVirtualChange: (selectedRowKeys: any[], selectedRows: any[]) => {
        if (this.getRowSelectionMode() === SearchTable.ROW_SELECTION_CONTINUOUS_MODE) {
          return null;
        }

        return {
          selectedRowKeys,
          selectedRows,
        };
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
        return new Promise<void>((resolve, reject) => {
          if (this.getRowSelectionMode() === SearchTable.ROW_SELECTION_NORMAL_MODE) {
            resolve();
          } else {
            this.rowSelectionFilter(selected, changeRows)
              .then(() => {
                this?.onRowSelectionSelectAll?.(selected, selectedRows, changeRows);
                resolve();
              })
              .catch(() => {
                reject();
              });
          }
        });
      },
    };
  }

  /**
   * strategyCheckAllChecked
   * @param checked
   */
  strategyCheckAllChecked(checked: boolean) {
    const selected = checked;

    const rowKey = this.getRowKey();

    const rowSelectionConfig = this.getRowSelectionConfig();

    const flatDataSource = Util.treeToArray(
      this.getDataSource() as any[],
      TREE_UTIL_CONFIG,
      rowKey,
    );

    // 当前页面数据的keys
    const keys = flatDataSource.map((t) => t[rowKey]);

    // @ts-ignore
    rowSelectionConfig.onSelectAll(
      //
      selected,
      //
      selected ? [...flatDataSource] : [],
      //
      [...flatDataSource],
    );

    // @ts-ignore
    rowSelectionConfig.onChange(
      //
      selected ? keys : [],
      //
      selected ? [...flatDataSource] : [],
      //
      {
        type: selected ? 'all' : 'invert',
      },
    );
  }

  /**
   * renderCheckedStrategyCheckAll
   * @description 渲染CheckedStrategy的CheckAll(全选)
   */
  renderCheckedStrategyCheckAll() {
    const { selectedRowKeys = [] } = this.state;

    const rowKey = this.getRowKey();

    // 当前页面数据的keys
    const keys = Util.treeToArray(this.getDataSource() as any[], TREE_UTIL_CONFIG, rowKey).map(
      (t) => t[rowKey],
    );

    const checkedAll = !selectedRowKeys.length
      ? false
      : keys.every((key: any) => selectedRowKeys.includes(key));

    const indeterminate = checkedAll
      ? false
      : keys.some((key: any) => selectedRowKeys.includes(key));

    return (
      <Checkbox
        checked={checkedAll}
        indeterminate={indeterminate}
        onChange={(e) => {
          this.strategyCheckAllChecked(e.target.checked);
        }}
      />
    );
  }

  // /**
  //  * strategyCheckItemVirtualChecked
  //  * @param {{
  //  *   checked:boolean;
  //  *   record:any;
  //  *   dataSource?:any[];
  //  *   flatDataSource?:any[];
  //  * }} params
  //  * @return {Promise<void>}
  //  */
  // strategyCheckItemVirtualChecked({
  //   checked,
  //   record,
  //   dataSource,
  //   flatDataSource,
  // }: {
  //   checked: boolean;
  //   record: any;
  //   dataSource?: any[];
  //   flatDataSource?: any[];
  // }): {
  //   selectedRowKeys: any[];
  //   selectedRows: any[];
  // } | null {
  //   if (!record) return null;
  //
  //   const selected = checked;
  //
  //   const rowKey = this.getRowKey();
  //
  //   // 所有选择的key
  //   const { selectedRowKeys: selectedAllRowKeys = [] } = this.state;
  //
  //   const targetDataSource = dataSource ?? (this.getDataSource() as any[]);
  //
  //   const targetFlatDataSource =
  //     flatDataSource ?? Util.treeToArray(targetDataSource, TREE_UTIL_CONFIG, rowKey);
  //
  //   const keys = targetFlatDataSource.map((t) => t[rowKey]);
  //
  //   // 当前页选择的key
  //   const selectedRowKeys = difference(selectedAllRowKeys, difference(selectedAllRowKeys, keys));
  //
  //   const node = targetFlatDataSource.find((n) => n[rowKey] === record[rowKey]);
  //
  //   if (!node) return null;
  //
  //   // 向下是子孙
  //   const descendants = Util.getDescendants(targetFlatDataSource, node, {
  //     ...TREE_UTIL_CONFIG,
  //     keyAttr: rowKey,
  //   });
  //
  //   // 向上是祖先
  //   const ancestor = Util.getAncestor(targetFlatDataSource, node, {
  //     ...TREE_UTIL_CONFIG,
  //     keyAttr: rowKey,
  //   });
  //
  //   let targetSelectedKeys: any[];
  //
  //   if (selected) {
  //     const selectedKeys = [
  //       ...selectedRowKeys,
  //       ...[record[rowKey], ...descendants?.map((t) => t[rowKey])],
  //     ];
  //
  //     // 处理祖先
  //     for (let i = 0; i < ancestor.length; i++) {
  //       const _node = ancestor[i];
  //
  //       // 获取一个祖先的子孙
  //       const _ancestorKeys = Util.getDescendants(targetFlatDataSource, _node, {
  //         ...TREE_UTIL_CONFIG,
  //         keyAttr: rowKey,
  //       }).map((t) => t[rowKey]);
  //
  //       if (_ancestorKeys.every((key) => selectedKeys.includes(key))) {
  //         selectedKeys.push(_node[rowKey]);
  //       } else {
  //         break;
  //       }
  //     }
  //
  //     targetSelectedKeys = selectedKeys;
  //   }
  //   //
  //   else {
  //     const mode = this.getRowSelectionMode();
  //
  //     const removeKeys = [
  //       record[rowKey],
  //       ...descendants?.map((t) => t[rowKey]),
  //       ...ancestor.map((t) => t[rowKey]),
  //     ];
  //
  //     targetSelectedKeys =
  //       mode === SearchTable.ROW_SELECTION_NORMAL_MODE
  //         ? difference(selectedRowKeys, removeKeys)
  //         : removeKeys;
  //   }
  //
  //   const targetSelectedRows = targetSelectedKeys.map((key) =>
  //     targetFlatDataSource.find((n) => n[rowKey] === key),
  //   );
  //
  //   const rowSelectionConfig = this.getRowSelectionConfig();
  //
  //   const result1 = rowSelectionConfig.onCheckedStrategyVirtualSelect(targetSelectedRows, selected);
  //
  //   const result2 = rowSelectionConfig.onVirtualChange(targetSelectedKeys, targetSelectedRows);
  //
  //   return result1 ?? result2;
  // }

  /**
   * strategyCheckItemChecked
   * @param {{
   *   checked:boolean;
   *   record:any;
   *   dataSource?:any[];
   *   flatDataSource?:any[];
   * }} params
   * @return {Promise<void>}
   */
  strategyCheckItemChecked({
    checked,
    record,
    dataSource,
    flatDataSource,
  }: {
    checked: boolean;
    record: any;
    dataSource?: any[];
    flatDataSource?: any[];
  }): Promise<void> {
    if (!record) return Promise.resolve();

    const selected = checked;

    const rowKey = this.getRowKey();

    // 所有选择的key
    const { selectedRowKeys: selectedAllRowKeys = [] } = this.state;

    const targetDataSource = dataSource ?? (this.getDataSource() as any[]);

    const targetFlatDataSource =
      flatDataSource ?? Util.treeToArray(targetDataSource, TREE_UTIL_CONFIG, rowKey);

    const keys = targetFlatDataSource.map((t) => t[rowKey]);

    // 当前页选择的key
    const selectedRowKeys = difference(selectedAllRowKeys, difference(selectedAllRowKeys, keys));

    const node = targetFlatDataSource.find((n) => n[rowKey] === record[rowKey]);

    if (!node) return Promise.resolve();

    return new Promise<void>((resolve, reject) => {
      // 向下是子孙
      const descendants = Util.getDescendants(targetFlatDataSource, node, {
        ...TREE_UTIL_CONFIG,
        keyAttr: rowKey,
      });

      // 向上是祖先
      const ancestor = Util.getAncestor(targetFlatDataSource, node, {
        ...TREE_UTIL_CONFIG,
        keyAttr: rowKey,
      });

      let targetSelectedKeys: any[];

      if (selected) {
        const selectedKeys = [
          ...selectedRowKeys,
          ...[record[rowKey], ...descendants?.map((t) => t[rowKey])],
        ];

        // 处理祖先
        for (let i = 0; i < ancestor.length; i++) {
          const _node = ancestor[i];

          // 获取一个祖先的子孙
          const _ancestorKeys = Util.getDescendants(targetFlatDataSource, _node, {
            ...TREE_UTIL_CONFIG,
            keyAttr: rowKey,
          }).map((t) => t[rowKey]);

          if (_ancestorKeys.every((key) => selectedKeys.includes(key))) {
            selectedKeys.push(_node[rowKey]);
          } else {
            break;
          }
        }

        targetSelectedKeys = selectedKeys;
      }
      //
      else {
        const mode = this.getRowSelectionMode();

        const removeKeys = [
          record[rowKey],
          ...descendants?.map((t) => t[rowKey]),
          ...ancestor.map((t) => t[rowKey]),
        ];

        targetSelectedKeys =
          mode === SearchTable.ROW_SELECTION_NORMAL_MODE
            ? difference(selectedRowKeys, removeKeys)
            : removeKeys;
      }

      const targetSelectedRows = targetSelectedKeys.map((key) =>
        targetFlatDataSource.find((n) => n[rowKey] === key),
      );

      const rowSelectionConfig = this.getRowSelectionConfig();

      Promise.all([
        // @ts-ignore
        rowSelectionConfig.onCheckedStrategySelect(
          //
          node as any,
          //
          targetSelectedRows,
          //
          selected,
        ),
        // @ts-ignore
        rowSelectionConfig.onChange(
          //
          targetSelectedKeys,
          // @ts-ignore
          targetSelectedRows,
          //
          {
            type: selected ? 'multiple' : 'invert',
          },
        ),
      ])
        .then(() => resolve())
        .catch(() => reject());
    });
  }

  /**
   * renderCheckedStrategyCheckItem
   * @description 渲染CheckedStrategy的Check(每行一行)
   * @param {any} record 行数据
   * @param {number} rowIndex 行索引
   */
  renderCheckedStrategyCheckItem(record: Record<string, string>, rowIndex: number) {
    const { selectedRowKeys = [] } = this.state;

    const rowKey = this.getRowKey();

    const flatDataSource = Util.treeToArray(
      this.getDataSource() as any[],
      TREE_UTIL_CONFIG,
      rowKey,
    );

    // 向下是子孙
    const descendants = Util.getDescendants(
      flatDataSource,
      flatDataSource.find((n) => n[rowKey] === record[rowKey]),
      {
        ...TREE_UTIL_CONFIG,
        keyAttr: rowKey,
      },
    );

    const checked = !selectedRowKeys.length ? false : selectedRowKeys.includes(record[rowKey]);

    const descendantsKeys = descendants?.map((t) => t[rowKey]);

    const indeterminate = checked
      ? false
      : descendantsKeys.some((key) => selectedRowKeys.includes(key));

    return (
      <Checkbox
        checked={checked}
        indeterminate={indeterminate}
        onChange={(e) => {
          this.strategyCheckItemChecked({
            checked: e.target.checked,
            record,
          });
        }}
      />
    );
  }

  /**
   * getCheckedStrategyColumnConfig
   * @description 自定义Selection列
   */
  getCheckedStrategyColumnConfig() {
    return {
      ...{
        title: this.renderCheckedStrategyCheckAll(),
        dataIndex: '_checkAll',
        key: '_checkAll',
        align: 'center',
        width: this.getTableCheckAllColumnWidth(),
        render: (v: any, record: Record<string, string>, rowIndex: number) =>
          this.renderCheckedStrategyCheckItem(record, rowIndex),
      },
      ...(this.getTableCheckAllColumnProps ? this.getTableCheckAllColumnProps() ?? {} : {}),
    };
  }

  /**
   * getTableRowComponentReducers
   * @return {string[]}
   */
  getTableRowComponentReducers(): string[] {
    return this.tableRowComponentReducers;
  }

  /**
   * getTableCellComponentReducers
   * @return {string[]}
   */
  getTableCellComponentReducers(): string[] {
    return this.tableCellComponentReducers;
  }

  /**
   * getExportExcelColumns
   * @description 获取导出excel的列
   * @param _columns
   * return {any[]}
   */
  getExportExcelColumns(_columns: any[]): any[] {
    const childrenColumnName = this.getChildrenColumnName();

    return _columns
      .filter(
        ({ dataIndex }) =>
          ![
            '_number',
            '_checkAll',
            // @ts-ignore
            this?.getOptionsColumnDataIndex?.() || '_options',
          ].includes(dataIndex),
      )
      .map((_column) => {
        if (
          childrenColumnName in _column &&
          Array.isArray(_column[childrenColumnName]) &&
          !!_column[childrenColumnName].length
        ) {
          return {
            ..._column,
            [childrenColumnName]: this.getExportExcelColumns(_column[childrenColumnName] || []),
          };
        }

        return _column;
      });
  }

  /**
   * getExportExcelData
   * @description 获取导出excel的数据
   * @return {any[]}
   */
  getExportExcelData(): any[] {
    return this.getData();
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
   * renderTableNumberColumn
   * @description - 渲染序号列
   * @param {string} number
   * @param {{ value: any; record: object; index: number }} params
   * @return {ReactNode}
   */
  renderTableNumberColumn(
    number: string = '',
    params: { value: any; record: object; index: number },
  ): ReactNode {
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
   * renderSearchBarActions
   * @description 渲染查询工具栏
   * @return {ReactNode}
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
      columns,
      dataSource: this.getDataSource(),
      // 分页
      pagination: this.getPagination(),
      // 行选择
      rowSelection: this.getRowSelection(),
      // Tree展开
      expandable: this.getExpandable(),
      // 给TableRow的props参数
      components: this.components, // this.onComponents(columns, this.components),
      // 组件
      size: tableDensity as SizeType,
      // @ts-ignore
      onChange: (...params) => this.onTableChange(...params),
      // onRow
      onRow: (...params) => this.onTableRow(columns, ...params),
      ...(antdTableProps ?? {}),
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
   * @return {ReactNode}
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
  renderChildren(): ReactElement {
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

  /**
   * isUseLoadData
   * @description 是否使用Tree的异步加载
   * @return {boolean}
   */
  isUseLoadData(): boolean {
    return 'loadData' in this;
  }

  /**
   * getChildrenColumnName
   * @description 获取Tree数据中children的属性名
   * @return {string}
   */
  getChildrenColumnName(): string {
    return (this.getExpandable() as ExpandableConfig<any>)?.childrenColumnName ?? 'children';
  }

  /**
   * isUseTreeData
   * @description 是否使用Tree数据
   * @return {boolean}
   */
  isUseTreeData(): boolean {
    const dataSource = this.getDataSource();

    const childrenColumnName = this.getChildrenColumnName();

    return dataSource.some(
      (record) => childrenColumnName in record && Array.isArray(record[childrenColumnName]),
    );
  }

  /**
   * getSelectedRowKeys
   * @description 获取selectedRowKeys
   * @return {any[]}
   */
  getSelectedRowKeys(): any[] {
    const { selectedRowKeys } = this.state;

    if (this.isUseCheckedStrategy()) {
      const checkedStrategy = this.getCheckedStrategy();

      if (checkedStrategy === SearchTable.CHECKED_STRATEGY_SHOW_CHILD) {
        const { selectedRows } = this.state;
        const rowKey = this.getRowKey();
        const rowKeys = selectedRows.map((record: any) => record[rowKey]);
        const childrenColumnName = this.getChildrenColumnName();

        return selectedRowKeys.filter((key: any) => {
          if (rowKeys.includes(key)) {
            const row = selectedRows.find((record: any) => record[rowKey] === key);

            return (
              !(childrenColumnName in row) ||
              (childrenColumnName in row &&
                Array.isArray(row[childrenColumnName]) &&
                !row[childrenColumnName].length)
            );
          }

          return true;
        });
      }
    }

    return selectedRowKeys;
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
