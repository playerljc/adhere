import type { SwitchProps } from 'antd';
import { Button, Checkbox, Dropdown, Switch, Table, theme } from 'antd';
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
import type { ExpandableConfig } from 'antd/es/table/interface';
import classNames from 'classnames';
import { produce } from 'immer';
import lodashCloneDeep from 'lodash.clonedeep';
// import debounce from 'lodash.debounce';
import difference from 'lodash.difference';
import memoize from 'lodash.memoize';
import sortBy from 'lodash.sortby';
import uniq from 'lodash.uniq';
import uniqBy from 'lodash.uniqby';
import PropTypes from 'prop-types';
import type { ReactElement, ReactNode, RefObject } from 'react';
import React, { createContext, createRef } from 'react';
import * as ReactIs from 'react-is';

import {
  DownOutlined,
  EllipsisOutlined,
  SearchOutlined,
  SyncOutlined,
  UpOutlined,
} from '@ant-design/icons';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import type {
  ConfigProviderContext,
  ConfigProviderProps,
} from '@baifendian/adhere-ui-configprovider/es/types';
import Util from '@baifendian/adhere-util';
// import Emitter from '@baifendian/adhere-util-emitter';
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
  ColumnWidthMaxContent,
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

  private _hackerElement: HTMLElement | undefined = undefined;

  protected _context: ConfigProviderContext | undefined = undefined;

  protected tableWrapRef: RefObject<HTMLDivElement | null> = createRef<HTMLDivElement | null>();

  // 存放editableRow的forms实例
  protected editableRowForms = new Map<number, FormInstance>();

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

  protected childrenWrapRef: RefObject<HTMLDivElement | null> = createRef<HTMLDivElement | null>();

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
   * getCurrent
   * @description 获取当前页码
   * @return {number}
   */
  abstract getCurrent(): number;

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

  switchColumnElRef = React.createRef<HTMLDivElement | undefined>();

  // 缓存列配置相关
  private _cachedProcessedColumns: any[] | null = null;
  private _cachedProcessedColumnsKey: string = '';
  // 缓存 tableProps 相关
  private _cachedTableProps: TableProps<any> | null = null;
  private _cachedTablePropsKey: string = '';
  // 绑定的回调方法（避免每次 render 创建新函数）
  private _boundOnTableChange: any;

  constructor(props) {
    super(props);

    // @ts-ignore
    this.state = {
      page: 1,
      limit: this.getLimit(),
      expand: props.defaultExpandSearchCollapse,
      expandedRowKeys: props?.antdTableProps?.expandable?.expandedRowKeys || [],
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

    // 优化：绑定 Table 回调方法，避免每次 render 创建新函数
    this._boundOnTableChange = this.onTableChange.bind(this);

    this.getCellsWidth = memoize(this.getCellsWidth, (obj) => lodashCloneDeep(obj));
    this.getWidthByHacker = memoize(this.getWidthByHacker, (obj) => lodashCloneDeep(obj));
    this.getCellText = memoize(this.getCellText, (obj) => lodashCloneDeep(obj));
    // this.setColumnWidth = memoize(this.setColumnWidth, (obj) => {
    //   return JSON.stringify({
    //     // dataIndex: obj.columnConfig.key,
    //     // width: obj.columnConfig.width,
    //     // minWidth: obj.columnConfig.minWidth,
    //     column: lodashCloneDeep(obj.columnConfig),
    //     dataSource: obj.dataSource,
    //     media: obj.media,
    //   });
    // });
    // this.validateAllEditableRow = debounce(this.validateAllEditableRow, 300);
  }

  componentDidMount() {
    if (!!super.componentDidMount) {
      super.componentDidMount?.();
    }

    document.body.addEventListener('keyup', this.onBodyKeyup);

    ConfigProvider.theme({
      elRef: this.childrenWrapRef,
      group: 'normal',
      displayName: 'SearchTable',
      theme: this._context?.theme || {},
    });
  }

  componentWillUnmount() {
    if (!!super.componentWillUnmount) {
      super.componentWillUnmount?.();
    }

    if (this._hackerElement) {
      try {
        document.body.removeChild(this._hackerElement);
        this._hackerElement = undefined;
      } catch (error) {
        console.error(error);
      }
    }
    document.body.removeEventListener('keyup', this.onBodyKeyup);
  }

  componentWillReceiveProps(nextProps: P) {
    if (!!super.componentWillReceiveProps) {
      super.componentWillReceiveProps(nextProps);
    }

    // @ts-ignore
    // super.componentWillReceiveProps(nextProps);

    // ConfigProvider.theme({
    //   elRef: this.childrenWrapRef,
    //   group: 'normal',
    //   displayName: 'SearchTable',
    //   theme: this._context?.theme || {},
    // });

    this.effectWithExpandedRowKeys(nextProps);

    this.effectWithColumnSetting(nextProps);

    // 优化：清空列配置缓存，因为 props 可能已改变
    this._cachedProcessedColumns = null;
    this._cachedProcessedColumnsKey = '';
    // 清空 tableProps 缓存
    this._cachedTableProps = null;
    this._cachedTablePropsKey = '';
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidUpdate(prevProps, prevState, snapshot?: any) {
    if (!this.tableWrapRef.current) return;

    this.searchTableResizableEffectLayout();
    this.fixedHeaderAutoTableEffectLayout(prevProps, prevState);

    // 清空列配置缓存，因为状态可能已改变
    this._cachedProcessedColumns = null;
    this._cachedProcessedColumnsKey = '';
    // 清空 tableProps 缓存
    this._cachedTableProps = null;
    this._cachedTablePropsKey = '';
  }

  /**
   * effectWithExpandedRowKeys
   * @protected
   * @param nextProps
   */
  effectWithExpandedRowKeys(nextProps: SearchTableProps) {
    if (
      lodashCloneDeep(sortBy(this.state.expandedRowKeys ?? [])) !==
      lodashCloneDeep(sortBy(nextProps?.antdTableProps?.expandable?.expandedRowKeys ?? []))
    ) {
      // @ts-ignore
      this.setState({
        expandedRowKeys: nextProps?.antdTableProps?.expandable?.expandedRowKeys,
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
      this.setState({
        selectedRowKeys: [...selectedRowKeys, ...selectedKeys],
        selectedRows: [
          ...selectedRows,
          ...[...selectedKeys, ...asyncPageKeys].map((key) =>
            flatDataSource.find((record) => record[rowKey] === key),
          ),
        ],
      } as any);
    }
  }

  /**
   * syncCheckedStrategyWithShowAll
   * @param {any[]} dataSource
   * @return {Promise<void>}
   */
  async syncCheckedStrategyWithShowAll(dataSource: any[]): Promise<void> {
    // console.log('syncCheckedStrategyWithShowAll');
    const rowKey = this.getRowKey();

    const flatDataSource = Util.treeToArray(dataSource, TREE_UTIL_CONFIG, rowKey);
    const flatDataSourceKeys = flatDataSource.map((record) => record[rowKey]);
    // console.log('flatDataSourceKeys', flatDataSourceKeys);
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
    // console.log('selectedKeys,selectedKeys);
    // console.log(selectedRowKeys,selectedRowKeys);
    if (!selectedKeys.every((key) => selectedRowKeys.includes(key))) {
      this.setState({
        selectedRowKeys: [...selectedRowKeys, ...selectedKeys],
        selectedRows: [
          ...selectedRows,
          ...[...selectedKeys, ...asyncPageKeys].map((key) =>
            flatDataSource.find((record) => record[rowKey] === key),
          ),
        ],
      } as any);
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

      // 优化：添加更多条件判断，避免不必要的 DOM 查询和 setState
      const shouldRecalculate =
        dataSource &&
        dataSource.length &&
        ((prevState.scrollY === 0 && this.state.scrollY === 0) ||
          prevState.scrollY !== this.state.scrollY ||
          prevState.expand !== this.state.expand ||
          prevProps.fixedHeaderAutoTable !== this.props.fixedHeaderAutoTable);

      if (shouldRecalculate) {
        const tableWrapRef = this.tableWrapRef.current as HTMLElement;
        if (!tableWrapRef) return;

        const tableHeaderHeight =
          (tableWrapRef.querySelector('.ant-table-thead') as HTMLElement)?.offsetHeight || 0;

        const tablePaginationHeight =
          (tableWrapRef.querySelector('.ant-table-pagination') as HTMLElement)?.offsetHeight || 0;

        const newScrollY =
          tableWrapRef.clientHeight -
          (tableHeaderHeight + (tablePaginationHeight ? tablePaginationHeight + 16 * 2 : 0));

        // 优化：只有值真正改变时才调用 setState
        if (newScrollY !== this.state.scrollY) {
          // @ts-ignore
          this.setState({
            scrollY: newScrollY,
          });
        }
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

      if ((this.props?.antdTableProps ?? {})?.expandable?.onExpandedRowsChange) {
        this.props?.antdTableProps?.expandable?.onExpandedRowsChange?.(expandedRowKeys);
      }
    });
  }

  /**
   * onExpand
   * @description 点击展开图标时触发
   * @param params
   */
  onExpand(...params) {
    if ((this.props?.antdTableProps ?? {})?.expandable?.onExpand) {
      this.props?.antdTableProps?.expandable?.onExpand?.(...params);
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
   * getCtx
   * @private
   */
  private getHackerElement() {
    // if (!this._ctx) {
    //   this._ctx = document.createElement('canvas').getContext('2d') as CanvasRenderingContext2D;
    // }
    //
    // return this._ctx;

    if (!this._hackerElement) {
      this._hackerElement = document.createElement('span');
      this._hackerElement.style.visibility = 'visible';
      this._hackerElement.style.position = 'fixed';
      document.body.appendChild(this._hackerElement);
    }

    return this._hackerElement;
  }

  private getTitleText(columnConfig: ColumnTypeExt) {
    if ('titleToString' in columnConfig) {
      return columnConfig.titleToString as string;
    }

    return columnConfig.title as string;
  }

  private getCellText({
    columnConfig,
    record,
    rowIndex,
  }: {
    columnConfig: ColumnTypeExt;
    record: Record<string, any>;
    rowIndex: number;
  }) {
    if ('renderToString' in columnConfig) {
      return columnConfig?.renderToString?.(
        record[columnConfig.dataIndex] as any,
        record,
        rowIndex,
      );
    }

    return record[columnConfig.dataIndex];
  }

  /**
   * getWidthByHacker
   * @param text
   * @param font
   * @param family
   * @param spacing
   * @param space
   * @private
   */
  getWidthByHacker({
    text,
    font,
    family,
    spacing = 0,
    space,
  }: {
    text: string;
    font: number | string;
    family: string;
    spacing?: number;
    space?: number;
  }) {
    // // 创建一个 canvas 元素
    // const context = this.getCtx();
    //
    // if (!context) return 0;
    //
    // // 设置字体样式（必须）
    // context.font = [`${font}px`, family].join(' ');
    // // 测量文本
    // const { actualBoundingBoxLeft, actualBoundingBoxRight } = context.measureText(text);
    // return actualBoundingBoxLeft + actualBoundingBoxRight + 2 * spacing + 2 * (space as number);

    const context = this.getHackerElement();

    if (!context) return 0;

    context.style.fontFamily = family;
    context.style.fontSize = `${font}px`;
    context.innerText = text;

    return context.offsetWidth + 2 * spacing + 2 * (space as number);
  }

  /**
   * pxToRem
   * @param size
   * @param media
   * @protected
   */
  protected pxToRem(size: number | string, media: ConfigProviderProps['media']) {
    if (Util.isNumber(size)) {
      if (media?.isUseMedia) {
        return Util.pxToRem(size as number, media?.designWidth as number);
      }

      return `${size}px`;
    }

    return size as string;
  }

  getCellsWidth({ dataSource, columnConfig }: { columnConfig: ColumnTypeExt; dataSource: any[] }) {
    const widthConfig = columnConfig.width as ColumnWidthMaxContent;

    return dataSource.map((record, rowIndex) =>
      this.getWidthByHacker({
        text: this.getCellText({ columnConfig, record, rowIndex }), //record[columnConfig.dataIndex],
        font: widthConfig.cellFontSize ?? this.getDefaultCellFontSize(),
        family: widthConfig.cellFontFamily ?? this.getDefaultCellFontFamily(),
        spacing: widthConfig.cellSpacing ?? this.getDefaultCellSpacing(),
        space: widthConfig.cellSpacingSpace ?? this.getDefaultCellSpace(),
      }),
    );
  }

  /**
   * setColumnWidth
   * @private
   */
  setColumnWidth({
    columnConfig,
    dataSource,
    media,
  }: {
    columnConfig: ColumnTypeExt;
    dataSource: any[];
    media: ConfigProviderProps['media'];
  }) {
    // console.log('columnConfig.width===', columnConfig.width);

    // console.time('setColumnWidth');
    // console.log('columnConfig', columnConfig, typeof columnConfig.width === 'number');
    if (!media) return;

    if (
      !('width' in columnConfig) ||
      columnConfig.width === undefined ||
      columnConfig.width === null ||
      columnConfig.width === ''
    ) {
      return;
    }

    if (typeof columnConfig.width === 'number') {
      columnConfig.width = this.pxToRem(columnConfig.width, media);
      // console.timeEnd('setColumnWidth');
      return;
    }

    if (typeof columnConfig.width != 'object') {
      // console.timeEnd('setColumnWidth');
      return;
    }

    // max-content的实现
    // /**
    //  * 先判断可行性
    //  */
    // // Title是对象且没有字符串渲染
    // if (
    //   (ReactIs.isElement(columnConfig.title) ||
    //     ReactIs.isFragment(columnConfig.title) ||
    //     ReactIs.isPortal(columnConfig.title)) &&
    //   !('titleToString' in columnConfig)
    // ) {
    //   delete columnConfig.width;
    //   return;
    // }
    //
    // const widthConfig = columnConfig.width as ColumnWidthMaxContent;
    //
    // /**
    //  * 获取title宽度
    //  * 获取数据的最大宽度
    //  */
    // const titleWidth = this.getWidthByHacker({
    //   text: this.getTitleText(columnConfig),
    //   font: widthConfig.titleFontSize ?? this.getDefaultColumnTitleFontSize(),
    //   family: widthConfig.titleFontFamily ?? this.getDefaultColumnFontFamily(),
    //   spacing: widthConfig.titleSpacing ?? this.getDefaultColumnSpacing(),
    //   space: widthConfig.titleSpacingSpace ?? this.getDefaultColumnSpace(),
    // });
    //
    // const dataSource = this.getDataSource();
    // const cellsWidth = dataSource.map((record) =>
    //   this.getWidthByHacker({
    //     text: this.getCellText({ columnConfig, record }),
    //     font: widthConfig.cellFontSize ?? this.getDefaultCellFontSize(),
    //     family: widthConfig.cellFontFamily ?? this.getDefaultCellFontFamily(),
    //     spacing: widthConfig.cellSpacing ?? this.getDefaultCellSpacing(),
    //     space: widthConfig.cellSpacingSpace ?? this.getDefaultCellSpace(),
    //   }),
    // );
    // const cellMaxWidth = Math.max(...cellsWidth);
    //
    // let _width = -1;
    // let _isTriggerMaxWidth = false;
    //
    // if (cellMaxWidth <= titleWidth) {
    //   if (widthConfig.minWidth && widthConfig.maxWidth) {
    //     if (titleWidth <= widthConfig.minWidth) {
    //       _width = widthConfig.minWidth;
    //     } else if (titleWidth >= widthConfig.maxWidth) {
    //       _width = widthConfig.maxWidth;
    //     } else {
    //       _width = titleWidth;
    //     }
    //   } else if (widthConfig.minWidth) {
    //     if (titleWidth <= widthConfig.minWidth) {
    //       _width = widthConfig.minWidth;
    //     } else {
    //       _width = titleWidth;
    //     }
    //   } else if (widthConfig.maxWidth) {
    //     if (titleWidth >= widthConfig.maxWidth) {
    //       _width = widthConfig.maxWidth;
    //     } else {
    //       _width = titleWidth;
    //     }
    //   } else {
    //     _width = titleWidth;
    //   }
    //
    //   if (_width !== -1) {
    //     columnConfig.width = this.pxToRem(_width);
    //   }
    //
    //   return;
    // }
    //
    // const titleAndCellMaxWidth = Math.max(titleWidth, cellMaxWidth);
    //
    // if (widthConfig.minWidth && widthConfig.maxWidth) {
    //   if (titleAndCellMaxWidth <= widthConfig.minWidth) {
    //     _width = widthConfig.minWidth;
    //   } else if (titleAndCellMaxWidth >= widthConfig.maxWidth) {
    //     _width = widthConfig.maxWidth;
    //     _isTriggerMaxWidth = true;
    //   } else {
    //     delete columnConfig.width;
    //   }
    // } else if (widthConfig.minWidth) {
    //   if (titleAndCellMaxWidth <= widthConfig.minWidth) {
    //     _width = widthConfig.minWidth;
    //   } else {
    //     delete columnConfig.width;
    //   }
    // } else if (widthConfig.maxWidth) {
    //   if (titleAndCellMaxWidth >= widthConfig.maxWidth) {
    //     _width = widthConfig.maxWidth;
    //     _isTriggerMaxWidth = true;
    //   } else {
    //     delete columnConfig.width;
    //   }
    // } else {
    //   delete columnConfig.width;
    // }
    //
    // if (_width !== -1) {
    //   columnConfig.width = this.pxToRem(_width);
    // }
    //
    // if (_isTriggerMaxWidth) {
    //   if ('render' in columnConfig) {
    //     const render = columnConfig.render;
    //
    //     columnConfig.render = (...params) => {
    //       return (
    //         <div
    //           style={{ width: widthConfig?.maxWidth as number }}
    //           className={`${selectorPrefix}-overflow`}
    //         >
    //           {/*@ts-ignore*/}
    //           {render?.(...params)}
    //         </div>
    //       );
    //     };
    //   } else {
    //     columnConfig.render = (value) => {
    //       return (
    //         <div
    //           style={{ width: widthConfig?.maxWidth as number }}
    //           className={`${selectorPrefix}-overflow`}
    //         >
    //           {value}
    //         </div>
    //       );
    //     };
    //   }
    // }
    //
    // return;

    // ------------------------------------------ 自己判断的视线
    /**
     * 先判断可行性
     */
    // Title是对象且没有字符串渲染
    if (
      (ReactIs.isElement(columnConfig.title) ||
        ReactIs.isFragment(columnConfig.title) ||
        ReactIs.isPortal(columnConfig.title)) &&
      !('titleToString' in columnConfig)
    ) {
      console.timeEnd('setColumnWidth');
      return;
    }

    // console.log('columnConfig.width', columnConfig.width);
    // 渲染是对象且没有字符串渲染

    // if (dataSource.length) {
    //   console.log('setColumnWidth', columnConfig, media);
    // }

    const widthConfig = columnConfig.width as ColumnWidthMaxContent;

    // @ts-ignore
    // console.log('columnConfig======', columnConfig);
    /**
     * 获取title宽度
     * 获取数据的最大宽度
     */
    const titleWidth = this.getWidthByHacker({
      text: this.getTitleText(columnConfig),
      font: widthConfig.titleFontSize ?? this.getDefaultColumnTitleFontSize(),
      family: widthConfig.titleFontFamily ?? this.getDefaultColumnFontFamily(),
      spacing: widthConfig.titleSpacing ?? this.getDefaultColumnSpacing(),
      space: widthConfig.titleSpacingSpace ?? this.getDefaultColumnSpace(),
    });

    // const cellsWidth = dataSource.map((record, rowIndex) =>
    //   this.getWidthByHacker({
    //     text: this.getCellText({ columnConfig, record, rowIndex }), //record[columnConfig.dataIndex],
    //     font: widthConfig.cellFontSize ?? this.getDefaultCellFontSize(),
    //     family: widthConfig.cellFontFamily ?? this.getDefaultCellFontFamily(),
    //     spacing: widthConfig.cellSpacing ?? this.getDefaultCellSpacing(),
    //     space: widthConfig.cellSpacingSpace ?? this.getDefaultCellSpace(),
    //   }),
    // );
    // console.log('cellsWidth', cellsWidth);

    // const cellMaxWidth = Math.max(...cellsWidth);

    // const titleAndCellMaxWidth = Math.max(titleWidth, cellMaxWidth);

    // console.log('cellMaxWidth', cellMaxWidth);

    // console.log('titleAndCellMaxWidth', titleAndCellMaxWidth);

    // 设置了区间值
    if (widthConfig.minWidth && widthConfig.maxWidth) {
      // const titleAndCellMaxWidth = Math.max(
      //   titleWidth,
      //   Math.max(...this.getCellsWidth({ dataSource, columnConfig })),
      // );
      //
      // if (titleWidth <= widthConfig.minWidth) {
      //   _width = widthConfig.minWidth;
      // } else if (titleAndCellMaxWidth >= widthConfig.maxWidth) {
      //   _width = widthConfig.maxWidth;
      //   setMethodName = 'width';
      // } else {
      //   _width = titleWidth;
      // }
      const titleAndCellMaxWidth = Math.max(
        titleWidth,
        Math.max(...this.getCellsWidth({ dataSource, columnConfig })),
      );

      let _minWidth = -1;
      let _width = -1;

      if (titleWidth <= widthConfig.minWidth) {
        _minWidth = widthConfig.minWidth;
      } else {
        _minWidth = titleWidth;
      }

      if (titleAndCellMaxWidth >= widthConfig.maxWidth) {
        _width = widthConfig.maxWidth;
      }

      if (_minWidth !== -1) {
        // @ts-ignore
        columnConfig.minWidth = this.pxToRem(_minWidth, media);
      }

      if (_width !== -1) {
        columnConfig.width = this.pxToRem(_width, media);
      }
    }
    // 其他的情况
    else {
      let _width: number = -1;
      let setMethodName = 'minWidth';
      let targetWidth = '';

      // 只设置了最大值
      if (widthConfig.minWidth) {
        if (titleWidth <= widthConfig.minWidth) {
          _width = widthConfig.minWidth;
        } else {
          _width = titleWidth;
        }
      }
      // 只设置了最大值
      else if (widthConfig.maxWidth) {
        const titleAndCellMaxWidth = Math.max(
          titleWidth,
          Math.max(...this.getCellsWidth({ dataSource, columnConfig })),
        );

        if (titleAndCellMaxWidth >= widthConfig.maxWidth) {
          _width = widthConfig.maxWidth;
          setMethodName = 'width';
        } else {
          _width = titleWidth;
        }
      }
      // 另外
      else {
        _width = titleWidth;
      }

      // console.log('_width===', _width);

      if (_width !== -1) {
        // console.log('_width1===', this.pxToRem(_width));
        /*columnConfig.width*/

        targetWidth = this.pxToRem(_width, media);
      }

      // console.timeEnd('setColumnWidth');

      // return targetWidth;
      // console.log('targetWidth', setMethodName, _width, targetWidth, columnConfig.dataIndex);

      columnConfig[setMethodName] = targetWidth;

      if (setMethodName === 'minWidth') {
        delete columnConfig.width;
      }
    }
  }

  protected getDefaultColumnTitleFontSize(): number {
    return theme.getDesignToken().fontSize;
  }

  protected getDefaultColumnFontFamily(): string {
    return theme.getDesignToken().fontFamily;
  }

  protected getDefaultColumnSpacing(): number {
    const spacingMap = new Map([
      [TableDensity.DEFAULT, 15],
      [TableDensity.MIDDLE, 8],
      [TableDensity.SMALL, 8],
    ]);

    return spacingMap.get(this.state.tableDensity) ?? 0;
  }

  protected getDefaultColumnSpace(): number {
    return this.getDefaultColumnTitleFontSize() * 3;
  }

  protected getDefaultCellFontSize(): number {
    return theme.getDesignToken().fontSize;
  }

  protected getDefaultCellFontFamily(): string {
    return theme.getDesignToken().fontFamily;
  }

  protected getDefaultCellSpace(): number {
    return this.getDefaultCellFontSize() * 4;
  }

  protected getDefaultCellSpacing(): number {
    const spacingMap = new Map([
      [TableDensity.DEFAULT, 15],
      [TableDensity.MIDDLE, 8],
      [TableDensity.SMALL, 8],
    ]);

    return spacingMap.get(this.state.tableDensity) ?? 0;
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
      // // width 功能
      // .map((columnConfig: ColumnTypeExt) => {
      //   const self = this;
      //
      //   function loop(columns: ColumnTypeExt[]) {
      //     return columns.map((_columnConfig) => {
      //       if ('children' in _columnConfig && Array.isArray(_columnConfig.children)) {
      //         _columnConfig.children = loop(_columnConfig.children as ColumnTypeExt[]);
      //
      //         return _columnConfig;
      //       }
      //
      //       if ('width' in _columnConfig) {
      //         self.setColumnWidth({
      //           columnConfig: _columnConfig,
      //           dataSource,
      //           media: self?._context?.media,
      //         });
      //       }
      //
      //       return _columnConfig;
      //     });
      //   }
      //
      //   if ('children' in columnConfig && Array.isArray(columnConfig.children)) {
      //     columnConfig.children = loop(columnConfig.children as ColumnTypeExt[]);
      //
      //     return columnConfig;
      //   }
      //
      //   if ('width' in columnConfig) {
      //     this.setColumnWidth({
      //       columnConfig,
      //       dataSource,
      //       media: this?._context?.media,
      //     });
      //   }
      //
      //   return columnConfig;
      // })
      // @ts-ignore
      .map((columnConfig: ColumnTypeExt) => {
        return {
          ...columnConfig,
          // 每个单元格都会调用
          // 给TableCell传递的props参数
          onCell: (record, rowIndex) => {
            // 优化：使用浅拷贝替代深拷贝，减少性能开销
            // 只有在需要修改时才进行深拷贝
            const _column = { ...columnConfig };

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
        title: Intl.get('serial_number'),
        dataIndex: '_number',
        key: '_number',
        align: 'center',
        width: getTableNumberColumnWidth,
        render: (v, r, index) => (
          <ConditionalRender
            // 单独生成
            conditional={numberGeneratorRule === SearchTable.NUMBER_GENERATOR_RULE_ALONE}
            noMatch={() =>
              /*this.renderTableNumberColumn((page - 1) * limit + (index + 1), {
                value: v,
                record: r,
                index,
              })*/
              this.renderTableNumberColumn((this.getCurrent() - 1) * limit + (index + 1), {
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

      this.setState(rowSelectionFilterData as any, () => {
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
              } as any,
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
              // @ts-ignore
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
              // @ts-ignore
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
   * renderSwitch
   * @description 将column渲染成Switch组件
   * @param {
   * {
   *  className?: string;
   *  record: object;
   *  dataIndex: strinng;
   *  defaultValue: boolean;
   *  onOriginValue: any;
   *  offOriginValue: any;
   *  switchProps:SwitchProps;
   *  onChange?: (
   *    checked: boolean,
   *    event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>,
   *    ) => Promise<void>;
   */
  renderSwitch({
    className,
    record,
    dataIndex,
    defaultValue,
    onOriginValue,
    offOriginValue,
    switchProps = {},
    onChange,
  }: {
    className?: string;
    record: object;
    dataIndex: string;
    defaultValue: boolean;
    onOriginValue: any;
    offOriginValue: any;
    switchProps?: SwitchProps;
    onChange?: (
      checked: boolean,
      event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>,
      switchColumnElRef: HTMLElement,
    ) => Promise<void>;
  }) {
    const valueMap = new Map([
      [true, onOriginValue],
      [false, offOriginValue],
    ]);

    const rowKey = this.getRowKey();

    return (
      <div
        className={classNames(`${selectorPrefix}-switch-column`, className)}
        // @ts-ignore
        ref={this.switchColumnElRef}
      >
        <Switch
          checked={defaultValue}
          onChange={(checked, e) => {
            this.setData((dataSource) => {
              return produce(dataSource, (draft) => {
                const _record = draft.find((t) => t[rowKey] === record[rowKey]);

                if (_record) {
                  _record[dataIndex] = valueMap.get(checked);
                }
              });
            }).then(() => {
              if (onChange) {
                onChange(checked, e, this.switchColumnElRef.current as HTMLElement)?.catch?.(() => {
                  this.setData((dataSource) => {
                    return produce(dataSource, (draft) => {
                      const item = draft.find((t) => t[rowKey] === record[rowKey]);

                      if (item) {
                        item[dataIndex] = valueMap.get(defaultValue);
                      }
                    });
                  });
                });
              }
            });
          }}
          {...switchProps}
        />
      </div>
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
    ].filter((t) => Boolean(t));

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
   * isColumnMaxContent
   * @description 是否开启列自适应宽度
   */
  isColumnMaxContent() {
    if (!this.props) return true;

    if ('isColumnMaxContent' in this.props) {
      return this.props.isColumnMaxContent;
    }

    return true;
  }

  /**
   * columnMaxContent
   * @descriptionn 实现列的max-content操作
   * @param columns
   * @param dataSource
   */
  columnMaxContent({ columns, dataSource }) {
    // 优化：如果数据源为空，直接返回列配置
    if (!dataSource || dataSource.length === 0) {
      return columns;
    }

    return columns.map((columnConfig: ColumnTypeExt) => {
      const self = this;

      function loop(columns: ColumnTypeExt[]) {
        return columns.map((_columnConfig) => {
          if ('children' in _columnConfig && Array.isArray(_columnConfig.children)) {
            _columnConfig.children = loop(_columnConfig.children as ColumnTypeExt[]);

            return _columnConfig;
          }

          // 优化：只在配置中有 width 属性时才计算
          if ('width' in _columnConfig && _columnConfig.width) {
            self.setColumnWidth({
              columnConfig: _columnConfig,
              dataSource,
              media: self?._context?.media,
            });
          }

          return _columnConfig;
        });
      }

      if ('children' in columnConfig && Array.isArray(columnConfig.children)) {
        columnConfig.children = loop(columnConfig.children as ColumnTypeExt[]);

        return columnConfig;
      }

      // 优化：只在配置中有 width 属性时才计算
      if ('width' in columnConfig && columnConfig.width) {
        this.setColumnWidth({
          columnConfig,
          dataSource,
          media: this?._context?.media,
        });
      }

      return columnConfig;
    });
  }

  /**
   * renderTable
   * @description - 认选表格体
   * @return {ReactElement}
   */
  renderBody() {
    const { antdTableProps, fixedHeaderAutoTable } = this.props;
    const { columnSetting = [], tableDensity, scrollY } = this.state;

    const isShowColumnSetting = this.renderColumnSetting();
    // 优化：只调用一次 getDataSource，复用结果
    const dataSource = this.getDataSource();
    const isColumnMaxContent = this.isColumnMaxContent();

    // 优化：生成缓存 key，用于判断是否需要重新计算列配置
    const columnsCacheKey = JSON.stringify({
      columnSettingLength: columnSetting.length,
      columnSettingKeys: columnSetting.map((c) => c.key).join(','),
      dataSourceLength: dataSource.length,
      isColumnMaxContent,
      isShowColumnSetting: !!isShowColumnSetting,
      tableDensity,
    });

    // 优化：如果缓存 key 未改变，直接使用缓存的列配置
    let columns: any[];
    if (this._cachedProcessedColumns && this._cachedProcessedColumnsKey === columnsCacheKey) {
      columns = this._cachedProcessedColumns;
    } else {
      // 重新计算列配置
      columns = this.getTableColumns()
        .map((column, index) => {
          if (isShowColumnSetting) {
            return {
              ...columnSetting[index],
              ...column,
            };
          }

          return {
            ...column,
            display: true,
            sore: index,
          };
        })
        .filter((column) => !!column.display); // width 功能

      // 优化：只在数据源真正变化或首次渲染时计算 columnMaxContent
      if (isColumnMaxContent && dataSource.length !== 0) {
        columns = this.columnMaxContent({ columns, dataSource });
      }

      columns.sort((c1, c2) => {
        if (c1.sort > c2.sort) return 1;
        if (c1.sort < c2.sort) return -1;
        return 0;
      });

      // 缓存处理后的列配置
      this._cachedProcessedColumns = columns;
      this._cachedProcessedColumnsKey = columnsCacheKey;
    }

    // 优化：生成 tableProps 缓存 key，包含所有影响 tableProps 的因素
    const tablePropsBaseCacheKey = JSON.stringify({
      columnsCacheKey,
      dataSourceLength: dataSource.length,
      tableDensity,
      fixedHeaderAutoTable: !!fixedHeaderAutoTable,
      scrollY,
      isColumnMaxContent,
      // 包含 antdTableProps 的关键属性
      hasAntdTableProps: !!antdTableProps,
      antdTablePropsKeys: antdTableProps ? Object.keys(antdTableProps).sort().join(',') : '',
    });

    // 优化：检查 tableProps 缓存
    let tableProps: TableProps<any>;
    if (this._cachedTableProps && this._cachedTablePropsKey === tablePropsBaseCacheKey) {
      // 使用缓存的 tableProps，但需要更新动态的引用（columns 可能变化）
      tableProps = {
        ...this._cachedTableProps,
        columns,
        dataSource,
        // 优化：使用绑定的方法创建 onRow（columns 作为闭包变量）
        // @ts-ignore
        onRow: (record: any, index: any) => this.onTableRow(columns, record, index),
      };
    } else {
      // 重新构建 tableProps
      // 优化：预先构建 scroll 对象，避免后续多次修改
      let scrollConfig: any = {};
      if (fixedHeaderAutoTable) {
        scrollConfig.y = scrollY;
      }
      if (isColumnMaxContent) {
        scrollConfig.x = 'max-content';
      }
      // 合并 antdTableProps 中的 scroll
      if (antdTableProps?.scroll) {
        scrollConfig = { ...antdTableProps.scroll, ...scrollConfig };
      }

      // Table的antdProps配置
      tableProps = {
        rowKey: this.getRowKey(),
        columns,
        dataSource,
        pagination: this.getPagination(),
        rowSelection: this.getRowSelection(),
        expandable: this.getExpandable(),
        components: this.components,
        size: tableDensity as SizeType,
        // 优化：使用绑定的实例方法，避免每次创建新函数
        // @ts-ignore
        onChange: this._boundOnTableChange,
        // 优化：onRow 需要 columns，每次都需要创建（但在缓存命中时可以复用大部分）
        // @ts-ignore
        onRow: (record: any, index: any) => this.onTableRow(columns, record, index),
        // 优化：只在有 scroll 配置时才添加 scroll 属性
        ...(Object.keys(scrollConfig).length > 0 ? { scroll: scrollConfig } : {}),
        // 优化：isColumnMaxContent 时添加 tableLayout
        ...(isColumnMaxContent ? { tableLayout: 'auto' as const } : {}),
        // 优化：合并 antdTableProps（排除已处理的 scroll）
        ...(antdTableProps ? { ...antdTableProps, scroll: scrollConfig } : {}),
      };

      // 缓存 tableProps（不包含 columns 和 dataSource 的引用，因为这些会频繁变化）
      this._cachedTableProps = {
        ...tableProps,
        columns: undefined as any,
        dataSource: undefined as any,
        onRow: undefined as any,
      };
      this._cachedTablePropsKey = tablePropsBaseCacheKey;
    }

    // 优化：这两个操作依赖 columns，但不影响 tableProps，保持在最后执行
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
   * @return {ReactElement}
   */
  render(): ReactElement {
    // console.log('render------');
    const _self = this;

    return (
      <SearchTableContext.Provider
        value={{
          context: this,
        }}
      >
        <ConfigProvider.Context.Consumer>
          {(context) => {
            _self._context = context;

            if (_self?.childrenWrapRef.current) {
              ConfigProvider.theme({
                elRef: _self.childrenWrapRef,
                group: 'normal',
                displayName: 'SearchTable',
                theme: _self._context?.theme || {},
              });
            }

            return this.renderChildren();
          }}
        </ConfigProvider.Context.Consumer>
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
   * isRootRecordById
   * @description 是否是root数据
   */
  isRootRecordById(id: string): boolean {
    const dataSource = this.getDataSource();

    const rowKey = this.getRowKey();

    return dataSource.map((record) => record[rowKey]).includes(id);
  }

  /**
   * getRecordById
   * @description 获取record
   * @param {string} id
   */
  getRecordById(id: string) {
    return Util.findNodeByKey(this.getDataSource() as any[], id, {
      keyAttr: this.getRowKey(),
      childrenKey: this.getChildrenColumnName(),
    });
  }

  /**
   * getParentRecordById
   * @description 根据id获取父record
   * @param {string} id
   */
  getParentRecordById(id: string) {
    return Util.findParentNodeByKey(this.getDataSource() as any[], id, {
      keyAttr: this.getRowKey(),
      childrenKey: this.getChildrenColumnName(),
    });
  }

  /**
   * getPidById
   * @description 获取pid
   * @param {string} id
   */
  getPidById(id: string): string | undefined {
    return this.getParentRecordById(id)?.[this.getRowKey()];
  }

  /**
   * appendData
   */
  appendData<T extends object>(data: T | T[]) {
    return new Promise<void>((resolve) => {
      this.setData((preDataSource) => {
        return produce(preDataSource, (draft) => {
          if (Array.isArray(data)) {
            draft.push(...data);
          } else {
            draft.push(data);
          }
        });
      }).then(() => {
        resolve();
      });
    });
  }
  appendDataById<T extends object>(pId: string, data: T | T[]) {
    const rowKey = this.getRowKey();

    return new Promise<void>((resolve) => {
      this.setData((preData) => {
        return produce(preData, (draft) => {
          const targetRecord = Util.findNodeByKey(draft as any[], pId, {
            keyAttr: rowKey,
            childrenKey: this.getChildrenColumnName(),
          });

          const childrenColumnName = this.getChildrenColumnName();

          if (targetRecord) {
            if (!targetRecord[childrenColumnName]) {
              targetRecord[childrenColumnName] = [];
            }

            if (Array.isArray(data)) {
              targetRecord[childrenColumnName] = [...targetRecord[childrenColumnName], ...data];
            } else {
              targetRecord[childrenColumnName] = [...targetRecord[childrenColumnName], data];
            }
          }
        });
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
      this.setData((preDataSource) => {
        return produce(preDataSource, (draft) => {
          if (Array.isArray(data)) {
            draft.unshift(...data);
          } else {
            draft.push(preDataSource);
          }
        });
      }).then(() => {
        resolve();
      });
    });
  }
  prependDataById<T extends object>(pId: string, data: T | T[]) {
    const rowKey = this.getRowKey();

    return new Promise<void>((resolve) => {
      this.setData((preData) => {
        return produce(preData, (draft) => {
          const targetRecord = Util.findNodeByKey(draft as any[], pId, {
            keyAttr: rowKey,
            childrenKey: this.getChildrenColumnName(),
          });

          const childrenColumnName = this.getChildrenColumnName();

          if (targetRecord) {
            if (!targetRecord[childrenColumnName]) {
              targetRecord[childrenColumnName] = [];
            }

            if (Array.isArray(data)) {
              targetRecord[childrenColumnName] = [...data, ...targetRecord[childrenColumnName]];
            } else {
              targetRecord[childrenColumnName] = [data, ...targetRecord[childrenColumnName]];
            }
          }
        });
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
      this.setData((preDataSource) => {
        return produce(preDataSource, (draft) => {
          const index = draft.findIndex((record) => record[rowKey] === id);

          if (Array.isArray(data)) {
            draft.splice(index, 0, ...data);
          } else {
            draft.splice(index, 0, data);
          }
        });
      }).then(() => {
        resolve();
      });
    });
  }
  insertDataById<T extends object>(pId: string, id: string, data: T | T[]) {
    const rowKey = this.getRowKey();

    return new Promise<void>((resolve) => {
      this.setData((preData) => {
        return produce(preData, (draft) => {
          const targetRecord = Util.findNodeByKey(draft as any[], pId, {
            keyAttr: rowKey,
            childrenKey: this.getChildrenColumnName(),
          });

          const childrenColumnName = this.getChildrenColumnName();

          if (targetRecord) {
            if (!targetRecord[childrenColumnName]) {
              targetRecord[childrenColumnName] = [];
            }

            const index = targetRecord[childrenColumnName].findIndex(
              (record) => record[rowKey] === id,
            );

            if (Array.isArray(data)) {
              targetRecord[childrenColumnName].splice(index, 0, ...data);
            } else {
              targetRecord[childrenColumnName].splice(index, 0, data);
            }
          }
        });
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
      this.setData((preDataSource) => {
        return produce(preDataSource, (draft) => {
          const index = draft.findIndex((record) => record[rowKey] === id);

          if (Array.isArray(data)) {
            draft.splice(index, 1, ...data);
          } else {
            draft.splice(index, 1, data);
          }
        });
      }).then(() => {
        resolve();
      });
    });
  }
  replaceDataById<T extends object>(pId: string, id: string, data: T | T[]) {
    const rowKey = this.getRowKey();

    return new Promise<void>((resolve) => {
      this.setData((preData) => {
        return produce(preData, (draft) => {
          const targetRecord = Util.findNodeByKey(draft as any[], pId, {
            keyAttr: rowKey,
            childrenKey: this.getChildrenColumnName(),
          });

          const childrenColumnName = this.getChildrenColumnName();

          if (targetRecord) {
            if (!targetRecord[childrenColumnName]) {
              targetRecord[childrenColumnName] = [];
            }

            const index = targetRecord[childrenColumnName].findIndex(
              (record) => record[rowKey] === id,
            );

            if (Array.isArray(data)) {
              targetRecord[childrenColumnName].splice(index, 1, ...data);
            } else {
              targetRecord[childrenColumnName].splice(index, 1, data);
            }
          }
        });
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

      const childrenColumnName = this.getChildrenColumnName();

      this.setData((preData) => {
        function loop(dataSource: any[]) {
          const index = dataSource.findIndex((record) => record[rowKey] === id);

          if (index! == -1) {
            dataSource.splice(index, 1);
          } else {
            loop(dataSource[childrenColumnName] ?? []);
          }
        }

        return produce(preData, (draft) => {
          loop(draft);
        });
      }).then(() => {
        resolve();
      });
    });
  }
  removeChildrenData(pId: string) {
    const rowKey = this.getRowKey();

    return new Promise<void>((resolve) => {
      this.setData((preData) => {
        return produce(preData, (draft) => {
          const targetRecord = Util.findNodeByKey(draft as any[], pId, {
            keyAttr: rowKey,
            childrenKey: this.getChildrenColumnName(),
          });

          const childrenColumnName = this.getChildrenColumnName();

          if (targetRecord) {
            if (targetRecord[childrenColumnName]) {
              delete targetRecord[childrenColumnName];
            }
          }
        });
      }).then(() => {
        resolve();
      });
    });
  }
  clearChildrenData(pId: string) {
    const rowKey = this.getRowKey();

    return new Promise<void>((resolve) => {
      this.setData((preData) => {
        return produce(preData, (draft) => {
          const targetRecord = Util.findNodeByKey(draft as any[], pId, {
            keyAttr: rowKey,
            childrenKey: this.getChildrenColumnName(),
          });

          const childrenColumnName = this.getChildrenColumnName();

          if (targetRecord) {
            if (targetRecord[childrenColumnName]) {
              targetRecord[childrenColumnName] = [];
            }
          }
        });
      }).then(() => {
        resolve();
      });
    });
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

  /**
   * 设置指定行的可编辑表单实例
   * @param {number} rowIndex 行索引
   * @param {FormInstance} form 该行对应的表单实例
   */
  setEditableRowForm(rowIndex: number, form: FormInstance) {
    this.editableRowForms.set(rowIndex, form);
  }

  // /**
  //  * 校验所有可编辑行的表单
  //  * @param {ValidateFields} [opt] 校验选项
  //  * @returns {Promise<any[]>|Promise<any>} 并行时返回所有表单校验的Promise数组，串行时返回Promise链
  //  */
  // validateAllEditableRow(opt?: Parameters<FormInstance['validateFields']>[0]) {
  //   return new Promise((resolve, reject) => {
  //     const columns = this.state.columnSetting.filter(
  //       (_column) =>
  //         !!_column.$editable && !!_column.$editable.editable && !_column.$editable.useKeepEdit,
  //     );
  //     const dataLength = this.getDataSource().length;
  //
  //     const visitMap = new Map<number, string[]>();
  //
  //     Emitter.trigger(VALIDATE_ALL_EDITABLE_ROW, (_rowIndex: number, _dataIndex: string) => {
  //       let values = visitMap.get(_rowIndex);
  //
  //       if (!values) {
  //         values = [];
  //         visitMap.set(_rowIndex, values);
  //       }
  //
  //       values.push(_dataIndex);
  //
  //       if (
  //         Array.from(visitMap.keys()).length === dataLength &&
  //         Array.from(visitMap.values()).every((_columns) => _columns.length === columns.length)
  //       ) {
  //         // 结束
  //         Promise.all(
  //           Array.from(this.editableRowForms.values()).map((_form) => _form.validateFields(opt)),
  //         )
  //           .then((_values) => {
  //             resolve(_values);
  //           })
  //           .catch((_err) => {
  //             reject(_err);
  //             throw _err;
  //           });
  //       }
  //     });
  //   });
  // }
  //
  // /**
  //  * 校验指定行的可编辑表单
  //  * @param {number} rowIndex - 行索引   * @param {ValidateFields} [opt] - 校验选项
  //  * @param opt
  //  * @returns {Promise<any>|undefined} - 校验Promise或undefined（如果该行没有表单）
  //  */
  // // 需要先引入FormInstance类型，然后使用FormInstance的validateFields方法的参数类型
  // // validateFields的参数类型可以通过Parameters<FormInstance['validateFields']>[0]获得
  // validateEditableRow(rowIndex: number, opt?: Parameters<FormInstance['validateFields']>[0]) {
  //   return new Promise((resolve, reject) => {
  //     const columns = this.state.columnSetting.filter(
  //       (_column) =>
  //         !!_column.$editable && !!_column.$editable.editable && !_column.$editable.useKeepEdit,
  //     );
  //
  //     const visitArray: string[] = [];
  //
  //     Emitter.trigger(VALIDATE_EDITABLE_ROW, {
  //       rowIndex,
  //       cb: (_dataIndex: string) => {
  //         visitArray.push(_dataIndex);
  //
  //         if (visitArray.length === columns.length) {
  //           // 完成
  //           this.editableRowForms
  //             .get(rowIndex)
  //             ?.validateFields(opt)
  //             .then((_values) => {
  //               resolve(_values);
  //             })
  //             .catch((_err) => {
  //               reject(_err);
  //               throw _err;
  //             });
  //         }
  //       },
  //     });
  //   });
  // }
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
