import type {
  ColumnType,
  FilterValue,
  SorterResult,
  TableCurrentDataSource,
  TablePaginationConfig,
} from 'antd/lib/table/interface';
import classNames from 'classnames';
import sortBy from 'lodash.sortby';
import PropTypes from 'prop-types';
import type { ExpandableConfig } from 'rc-table/lib/interface';
import type { ReactElement, ReactNode, RefObject } from 'react';
import React, { createRef, forwardRef } from 'react';

import { LoadingOutlined } from '@ant-design/icons';
import Util from '@baifendian/adhere-util';
import ServiceRegister from '@ctsj/state/lib/middleware/saga/serviceregister';

import SearchTable, { defaultProps, propTypes } from './SearchTable';
import { cloneDeep } from './Util';
import type { TableRowSelectionExt } from './types';
import type {
  ColumnTypeExt,
  ISearchTableImplement,
  SearchTableImplementFactoryFunction,
  SearchTableImplementProps,
  SearchTableImplementState,
  SearchTableProps,
  SearchTableState,
} from './types';

export const selectorPrefix = 'adhere-ui-search-table-implement';

/**
 * SearchTableImplement
 * @class SearchTableImplement
 * @classdesc SearchTableImplement - SearchTable的默认实现
 */
export class SearchTableImplement<P extends SearchTableProps, S extends SearchTableState>
  extends SearchTable<SearchTableImplementProps, SearchTableImplementState>
  implements ISearchTableImplement
{
  static displayName = 'SearchTableImplement';

  innerWrapRef: RefObject<HTMLDivElement> = createRef();

  constructor(props) {
    super(props);

    Object.assign(this.state!, {
      ...this.getParams(),
      [this.getOrderFieldProp()]: this.getOrderFieldValue(),
      [this.getOrderProp()]: this.getOrderPropValue() || 'descend',
      // 查询参数
      searchParams: {
        ...this.getParams(),
      },
      selectedRowKeys: this.props?.defaultSelectedRowKeys ?? [],
      selectedRows: [],
      // 正在进行异步加载的keys
      loadDataKeys: [],
      // 异步加载数据完成的keys
      loadDataSuccessKeys: [],
    });
  }

  componentDidMount() {
    // @ts-ignore
    super.componentDidMount?.();

    const { getTableWrapperInstance } = this.props!;

    if (getTableWrapperInstance) {
      getTableWrapperInstance(this.innerWrapRef);
    }
  }

  /**
   * getFetchListPropName
   * @override
   * @description - 获取调用列表接口的函数名
   * @return {string}
   */
  getFetchListPropName(): string {
    return '';
  }

  /**
   * getFetchListPropNameToFirstUpper
   * @override
   * @description - 获取调用列表接口的函数名首字母大写
   * @return {string}
   */
  getFetchListPropNameToFirstUpper(): string {
    const fetchListPropName = this.getFetchListPropName();

    if (fetchListPropName.length > 1) {
      return `${fetchListPropName.charAt(0).toUpperCase()}${fetchListPropName.substring(1)}`;
    }

    return fetchListPropName;
  }

  /**
   * onSelectChange
   * @description - onSelectChange
   * @param {string} property
   * @param {string} v
   */
  onSelectChange = (property: string, v: string): void => {
    // @ts-ignore
    this.setState({
      [property]: v,
    });
  };

  /**
   * onInputChange
   * @description - onInputChange
   * @param {string} property
   * @param {any} e
   */
  onInputChange = (property: string, e): void => {
    // @ts-ignore
    this.setState({
      [property]: e.target.value,
    });
  };

  /**
   * onDateTimeRangeChange
   * @description - onDateTimeRangeChange
   * @param {string[]} propertys
   * @param {any[]} dayjs
   */
  onDateTimeRangeChange = (propertys: string[], dayjs: any[]) => {
    // @ts-ignore
    this.setState({
      [propertys[0]]: dayjs && dayjs.length ? dayjs[0] : null,
      [propertys[1]]: dayjs && dayjs.length ? dayjs[1] : null,
    });
  };

  /**
   * onRowSelectionChange
   */
  onRowSelectionChange() {}

  /**
   * onRowSelectionSelect
   */
  onRowSelectionSelect() {}

  /**
   * onRowSelectionSelectAll
   */
  onRowSelectionSelectAll() {}

  /**
   * getParams
   * @override
   * @description - 获取查询参数对象
   * @return {any}
   */
  getParams(): object {
    return {};
  }

  /**
   * getServiceName
   * @override
   * @description - 获取接口服务的model名称
   * @return {string}
   */
  getServiceName(): string {
    return '';
  }

  /**
   * getFetchDataParams
   * @override
   * @description - 获取调用数据接口的参数
   * @return {object}
   */
  getFetchDataParams(): object {
    return {};
  }

  /**
   * isShowNumber
   * @description - 是否线上序号列
   * @override
   * @return {boolean}
   */
  isShowNumber(): boolean {
    return true;
  }

  /**
   * isUseCheckedStrategy
   * @description 是否使用CheckAll列设置
   * @override
   * @return {boolean}
   */
  isUseCheckedStrategy(): boolean {
    return false;
  }

  /**
   * getCheckedStrategy
   * @description CheckAll列的选择规则
   * @override
   * @return {symbol}
   */
  getCheckedStrategy(): symbol {
    return SearchTable.CHECKED_STRATEGY_SHOW_CHILD;
  }

  /**
   * getNumberGeneratorRule
   * @override
   * @description - 表格序号列的生成规则
   * @return {symbol}
   */
  getNumberGeneratorRule(): symbol {
    return SearchTable.NUMBER_GENERATOR_RULE_CONTINUITY;
  }

  /**
   * getRowSelectionMode
   * @override
   * @description 获取全选的生模式
   * @return {symbol}
   */
  getRowSelectionMode(): symbol {
    return SearchTable.ROW_SELECTION_NORMAL_MODE;
  }

  /**
   * getTableNumberColumnProps
   * @description 设置序号列的props
   * @override
   * @return {object}
   */
  getTableNumberColumnProps(): object {
    return {};
  }

  /**
   * getTableCheckAllColumnProps
   * @description 设置全选列的props
   * @override
   * @return {object}
   */
  getTableCheckAllColumnProps(): object {
    return {};
  }

  /**
   * getRowKey
   * @override
   * @description - 数据的主键
   * @return {string}
   */
  getRowKey(): string {
    return 'id';
  }

  /**
   * getDataKey
   * @description - 获取数据的key
   * @protected
   * @return {string}
   */
  getDataKey(): string {
    return 'list';
  }

  /**
   * getFetchDataResultDataKey
   * @description fetchData返回的结果中数据的key
   * @return {string}
   */
  getFetchDataResultDataKey(): string {
    return 'data';
  }

  /**
   * getTotalKey
   * @description - 获取total的key
   * @protected
   * @return {string}
   */
  getTotalKey(): string {
    return 'totalCount';
  }

  /**
   * getData
   * @description - Table的数据(Table的dataSource字段)
   * @override
   * @return {object[]}
   */
  getData(): object[] {
    return this.props?.[this.getServiceName()]?.[this.getFetchListPropName()]?.[this.getDataKey()];
  }

  /**
   * setData
   * @description 设置数据
   * @param data
   */
  setData<T extends Array<object>>(data: T | ((prevData: T) => T)): Promise<any[]> {
    let targetDataSource;

    if (Util.isArray(data)) {
      targetDataSource = data;
    } else if (Util.isFunction(data)) {
      targetDataSource = (data as Function)(this.getData());
    }

    if (targetDataSource) {
      const listData = cloneDeep(this.state[this.getServiceName()]);
      listData[this.getFetchListPropName()][this.getDataKey()] = targetDataSource;

      return this.props
        .dispatch({
          type: `${this.getServiceName()}/receive`,
          ...listData,
        })
        .then(() => {
          return listData?.[this.getFetchListPropName()]?.[this.getDataKey()];
        });
    }

    return Promise.resolve([]);
  }

  /**
   * getTotal
   * @description - Table数据的总条数
   * @override
   * @return {number}
   */
  getTotal(): number {
    return this.props?.[this.getServiceName()]?.[this.getFetchListPropName()]?.[this.getTotalKey()];
  }

  /**
   * getRowSelection
   * @override
   * @description - 获取表格行选择对象
   * @return {TableRowSelectionExt<object>}
   */
  getRowSelection(): TableRowSelectionExt<object> | null {
    if (this.isUseCheckedStrategy()) {
      return null;
    }

    return this.getRowSelectionConfig();
  }

  /**
   * getExpandable
   * @description 获取展开的配置对象
   */
  getExpandable(): ExpandableConfig<any> {
    let expandable: ExpandableConfig<any> = {
      expandedRowKeys: this.state.expandedRowKeys,
      indentSize: this.getIndentSize(),
      onExpandedRowsChange: (...params) => this.onExpandedRowsChange(...params),
      onExpand: (...params) => this?.onExpand(...params),
    };

    // Tree展开列放置的索引位置，设置展开列在第几个位置上（索引从0开始）
    if (this.isUseCheckedStrategy() && this.isShowNumber()) {
      expandable = {
        ...expandable,
        expandIconColumnIndex: 1,
      };
    }

    // 如果使用异步加载，自定义expandIcon方法
    if (this.isUseLoadData() && 'expandIcon' in this) {
      expandable = {
        ...expandable,
        expandIcon: (...params) => this?.expandIcon(...params),
      };
    }

    expandable = {
      ...expandable,
      ...(this.props.antdTableProps ?? {}).expandable,
    };

    return expandable;
  }

  /**
   * getTableNumberColumnWidth
   * @override
   * @description - 表格序号列的宽度
   * @return {number | string}
   */
  getTableNumberColumnWidth(): number | string {
    // 动态计算序号列的宽度
    if (this.isUseLoadData() || this.isUseTreeData()) {
      // 如果开启了异步加载模式
      const indentSize = this.getIndentSize() ?? 15;

      const { expandedRowKeys } = this.state;

      return 80 + expandedRowKeys.length * indentSize;
    }

    return 80;
  }

  /**
   * getTableCheckAllColumnWidth
   * @description 获取全选列的宽度
   * @return {number | string}
   */
  getTableCheckAllColumnWidth(): number | string {
    return 50;
  }

  /**
   * renderSearchForm
   * @override
   * @description - 渲染Table查询的表单
   * @return {ReactNode}
   */
  renderSearchForm(): ReactNode {
    return null;
  }

  /**
   * renderInner
   * @override
   * @description - 渲染主体
   * @return {ReactElement | null}
   */
  renderInner() {
    const innerJSX = super.renderInner();
    return (
      <div ref={this.innerWrapRef} className={`${selectorPrefix}-table-wrapper`}>
        {innerJSX}
      </div>
    );
  }

  /**
   * renderSearchFooterItems
   * @description - 渲染表格的工具栏
   * @override
   * @return {any[]}
   */
  renderSearchFooterItems(): any[] {
    return [];
  }

  /**
   * getOrderFieldProp
   * @description - 获取排序字段
   * @override
   * @return {string}
   */
  getOrderFieldProp(): string {
    return 'orderField';
  }

  /**
   * getOrderFieldValue
   * @description - 获取默认排序字段的值
   * @override
   * @protected
   * @return {string}
   */
  getOrderFieldValue(): string {
    return '';
  }

  /**
   * getOrderProp
   * @description - 获取排序方式
   * @return {string}
   */
  getOrderProp(): string {
    return 'order';
  }

  /**
   * getOrderPropValue
   * @override
   * @description - 获取默认排序方式
   * @protected
   * @return {'descend' | 'ascend'}
   */
  getOrderPropValue(): 'descend' | 'ascend' {
    return 'descend';
  }

  /**
   * clearSearch
   * @description - 清空查询条件
   * @override
   * @return {Promise<void>}
   */
  clearSearch(): Promise<void> {
    return new Promise<void>((resolve) => {
      // @ts-ignore
      this.setState(
        {
          ...this.getParams(),
          [this.getOrderFieldProp()]: this.getOrderFieldValue(),
          [this.getOrderProp()]: this.getOrderPropValue() || 'descend',
          // 查询参数
          searchParams: {
            ...this.getParams(),
          },
          selectedRowKeys: [],
          selectedRows: [],
          expandedRowKeys: [],
          loadDataKeys: [],
          loadDataSuccessKeys: [],
        },
        () => {
          resolve();
        },
      );
    });
  }

  /**
   * clearPaging
   * @description 清除分页信息
   * @return {Promise<any>}
   */
  clearPaging(): Promise<void> {
    return new Promise((resolve) => {
      // @ts-ignore
      this.setState(
        {
          page: 1,
          limit: this.getLimit(),
        },
        () => {
          resolve();
        },
      );
    });
  }

  /**
   * showLoading
   * @description - 是否显示遮罩
   * @override
   * @return {boolean}
   */
  showLoading(): boolean {
    return this.props?.loading?.[`${this.getServiceName()}/${this.getFetchListPropName()}`];
  }

  /**
   * getSearchParams
   * @description - 获取查询参数
   * @protected
   * @return {any}
   */
  getSearchParams(): any {
    const { page, limit, searchParams } = this.state!;

    const order = this.state?.[this.getOrderProp()];

    return {
      ...{
        page,
        limit,
        ...searchParams,
        [this.getOrderProp()]: order === 'descend' ? 'desc' : 'asc',
        [this.getOrderFieldProp()]: this.state?.[this.getOrderFieldProp()],
        ...this.getFetchDataParams(),
      },
    };
  }

  /**
   * fetchData
   * @description - 加载数据
   * @override
   * @return {Promise<any>}
   */
  fetchData(): Promise<any> {
    return new Promise((resolve) => {
      this.beforeFetchData().then(() => {
        this.fetchDataExecute(this.getSearchParams()).then((result) => {
          this.afterFetchData(result);

          resolve(result);
        });
      });
    });
  }

  /**
   * beforeFetchData
   * @description fetchData之后的处理
   */
  beforeFetchData(): Promise<void> {
    return new Promise((resolve) => {
      if (this.isUseLoadData()) {
        this.setState(
          {
            loadDataKeys: [],
            loadDataSuccessKeys: [],
            expandedRowKeys: [],
          },
          () => {
            resolve();
          },
        );
      } else {
        resolve();
      }
    });
  }

  /**
   * afterFetchData
   * @description fetchData之后的处理
   * @param {} result {code: data:}
   */
  afterFetchData(result: any) {
    if (this.isCanCheckedStrategySync()) {
      this.syncCheckedStrategy(result[this.getFetchDataResultDataKey()][this.getDataKey()]);
    }
  }

  /**
   * isCanCheckedStrategySync
   * @description 是否可以进行sync操作
   * @return {boolean}
   */
  isCanCheckedStrategySync(): boolean {
    return (
      this.isUseCheckedStrategy() &&
      'defaultSelectedRowKeys' in this.props &&
      Array.isArray(this.props.defaultSelectedRowKeys) &&
      !!this.props.defaultSelectedRowKeys.length &&
      !!this.state.selectedRowKeys.length &&
      JSON.stringify(sortBy(this.state.selectedRowKeys)) ===
        JSON.stringify(sortBy(this.props.defaultSelectedRowKeys))
    );
  }

  /**
   * sync
   * @description 同步
   * @return Promise<any>
   */
  sync(): Promise<any> {
    return new Promise((resolve) => {
      const page = this.state?.page as number;

      if (page === 1) {
        this.fetchData().then((res) => resolve(res));
      } else {
        const res = this.fetchData().then((_res) => {
          const data = _res?.data?.[this.getDataKey()] || [];

          if (data.length) {
            resolve(res);
          } else {
            // @ts-ignore
            this.setState(
              {
                page: page - 1,
              },
              () => {
                this.fetchData().then((res) => resolve(res));
              },
            );
          }
        });
      }
    });
  }

  /**
   * fetchDataExecute
   * @description - 真正的执行获取列表数据的接口
   * @param {object} searchParams
   * @protected
   * @return {Promise<any>}
   */
  fetchDataExecute(searchParams: object): Promise<any> {
    // console.log('searchParams', searchParams);

    return this.props?.[`${this.getServiceName()}${this.getFetchListPropNameToFirstUpper()}`](
      searchParams,
    );
  }

  /**
   * onSearch
   * @description - 点击查询
   * @override
   * @return {Promise<void>}
   */
  onSearch(): Promise<any> {
    const keys = Object.keys(this.getParams());
    const params = {};
    keys.forEach((key) => {
      params[key] = this.state?.[key];
    });

    return new Promise<any>((resolve) => {
      // @ts-ignore
      this.setState(
        {
          searchParams: {
            ...params,
            [this.getOrderFieldProp()]: this.state?.[this.getOrderFieldProp()],
            [this.getOrderProp()]: this.state?.[this.getOrderProp()],
          },
        },
        () => {
          this.fetchData().then((res) => {
            resolve(res);
          });
        },
      );
    });
  }

  /**
   * getColumns
   * @return {ColumnType<object>[]}
   */
  getColumns(): ColumnType<object>[] {
    return [];
  }

  /**
   * onSubTableChange
   * @param {TablePaginationConfig} pagination
   * @param {Record<string, FilterValue | null>} filters
   * @param {SorterResult<object> | SorterResult<object>[]} sorter
   * @param {TableCurrentDataSource<object> | undefined} extra
   */
  onSubTableChange(
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<object> | SorterResult<object>[],
    extra?: TableCurrentDataSource<object> | undefined,
  ): void {}

  /**
   * renderSearchFormAfter
   * @return {ReactNode}
   */
  renderSearchFormAfter(): ReactNode {
    return null;
  }

  /**
   * renderSearchFormBefore
   * @return {ReactNode}
   */
  renderSearchFormBefore(): ReactNode {
    return null;
  }

  /**
   * renderSearchFooter
   * @return {ReactNode}
   */
  renderSearchFooter(): ReactNode {
    return null;
  }

  /**
   * renderSearchHeader
   * @return {ReactNode}
   */
  renderSearchHeader(): ReactNode {
    return null;
  }

  renderSearchFormToolBarDefaultPanel(): ReactNode {
    return null;
  }

  renderSearchFormToolBarItems(defaultItems: ReactElement[]): ReactNode[] {
    return defaultItems;
  }

  /**
   * onTableRowComponentReducers
   * @param {ColumnTypeExt[]} columns
   * @return {string[]}
   */
  onTableRowComponentReducers(columns: ColumnTypeExt[]): string[] {
    return this.tableRowComponentReducers;
  }

  /**
   * onTableCellComponentReducers
   * @param {ColumnTypeExt[]} columns
   * @return {string[]}
   */
  onTableCellComponentReducers(columns: ColumnTypeExt[]): string[] {
    return this.tableCellComponentReducers;
  }

  /**
   * onExpand
   * @description 在其中处理Tree数据的异步加载操作使用loadData方法
   * @param params
   */
  onExpand(...params) {
    const [expanded, record] = params;

    // 关闭
    if (!expanded) {
      super.onExpand(...params);
      return;
    }

    // 不是动态加载
    if (!this.isUseLoadData()) {
      super.onExpand(...params);

      return;
    }

    const _self = this;

    /**
     * beforeLoadData
     * @description 异步加载之前的操作
     */
    function beforeLoadData() {
      _self.setState((state: any) => {
        state.loadDataKeys.push(key);

        return {
          ...state,
        };
      });
    }

    /**
     * afterLoadDataWithSuccess
     * @description 异步加载成功
     * @param {any[]} childrenData 加载完的children数据
     * @param {any[]} dataSource
     */
    function afterLoadDataWithSuccess(childrenData: any[], dataSource: any[]) {
      const isCanSync = _self.isCanCheckedStrategySync();

      _self.setState(
        (state: any) => {
          state.loadDataKeys.splice(state.loadDataKeys.indexOf(key), 1);

          state.loadDataSuccessKeys.push(key);

          if (!isCanSync) {
            // 获取当前节点的选中状态
            const currentNodeChecked = state.selectedRowKeys.includes(record[rowKey]);
            // 如果是选中状态
            // 则需要将孩子也选中
            if (currentNodeChecked) {
              state.selectedRowKeys = [
                ...state.selectedRowKeys,
                ...childrenData.map((t: any) => t[rowKey]),
              ];

              state.selectedRows = [...state.selectedRows, ...childrenData];
            }
          }

          return JSON.parse(JSON.stringify(state));
        },
        () => {
          if (isCanSync) {
            _self.syncCheckedStrategy(dataSource);
          }
        },
      );
    }

    /**
     * afterLoadDataWithFail
     * @description 异步加载失败
     */
    function afterLoadDataWithFail() {
      _self.setState((state: any) => {
        state.loadDataKeys.splice(state.loadDataKeys.indexOf(key), 1);

        return {
          ...state,
        };
      });
    }

    // 使用了动态加载
    const { loadDataKeys, loadDataSuccessKeys } = this.state;

    const rowKey = this.getRowKey();

    const key = record[rowKey];

    // 如果已经加载过则略过
    if (loadDataSuccessKeys.includes(key)) {
      // console.log('如果已经加载过则略过');
      return;
    }

    // 还没有决议
    if (loadDataKeys.includes(key)) {
      // console.log('还没有决议');
      return;
    }

    // 开始异步加载
    beforeLoadData();

    // 使用loadData进行异步加载
    // @ts-ignore
    this.loadData(record)
      ?.then((childrenData) => {
        debugger;
        // 更新当前近节点的children数据
        this.setData((preData) => {
          const _targetRecord = Util.findNodeByKey(preData as any[], key, {
            keyAttr: rowKey,
          });

          const childrenColumnName = this.getChildrenColumnName();

          if (_targetRecord) {
            _targetRecord[childrenColumnName] = childrenData;
          }

          return [...preData];
        })
          .then((dataSource) => {
            afterLoadDataWithSuccess(childrenData, dataSource);
          })
          .catch(() => {
            afterLoadDataWithFail();
          });
      })
      .catch(() => {
        afterLoadDataWithFail();
      });

    // 正在进行异步加载的keys
    // loadDataKeys: [];

    // 异步加载数据完成的keys
    // loadDataSuccessKeys: [];
  }

  /**
   * renderLoadingIcon
   * @description 渲染loading图标
   * @param onExpand
   * @param record
   * @return {ReactElement}
   */
  renderLoadingIcon({ onExpand, record }): ReactElement {
    return (
      <LoadingOutlined
        className={classNames(`${selectorPrefix}-load-data-icon`)}
        onClick={(e) => onExpand(record, e)}
      />
    );
  }

  /**
   * renderExpandIcon
   * @description 渲染展开图标
   * @param onExpand
   * @param record
   * @return {ReactElement}
   */
  renderExpandIcon({ onExpand, record }): ReactElement {
    return (
      <button
        className="ant-table-row-expand-icon ant-table-row-expand-icon-collapsed"
        onClick={(e) => onExpand(record, e)}
      />
    );
  }

  /**
   * renderCollapseIcon
   * @description 渲染闭合图标
   * @param onExpand
   * @param record
   * @return {ReactElement}
   */
  renderCollapseIcon({ onExpand, record }): ReactElement {
    return (
      <button
        className="ant-table-row-expand-icon ant-table-row-expand-icon-expanded"
        onClick={(e) => onExpand(record, e)}
      />
    );
  }

  /**
   * isCanAsync
   * @description 如果是异步加载的时候当前节点是否允许异步加载
   * @param {any} record
   * @return {boolean}
   */
  isCanAsync(record: any): boolean {
    return true;
  }

  /**
   * expandIcon
   * @description 处理Tree异步加载的图标
   * @param expanded
   * @param onExpand
   * @param record
   */
  expandIcon({ expanded, onExpand, record }) {
    const rowKey = this.getRowKey();

    const key = record[rowKey];

    const { loadDataKeys } = this.state;

    // 这块是正在执行异步加载所以是loading图标
    if (loadDataKeys.includes(key)) {
      // loading
      return this.renderLoadingIcon({ onExpand, record });
    }

    // 闭合应该是展开(+)图表
    if (!expanded) {
      // 这块也可能不是+，如果不能继续异步加载的话
      // +
      return this.isCanAsync(record) ? this.renderExpandIcon({ onExpand, record }) : null;
    }

    // 展开应该是(-)图标
    return this.renderCollapseIcon({ onExpand, record });
  }
}

SearchTableImplement.defaultProps = {
  ...defaultProps,
};

SearchTableImplement.propTypes = {
  ...propTypes,
  getTableWrapperInstance: PropTypes.func,
};

/**
 * SearchTableImplementFactory
 * @description 创建SearchTableImplementFactory
 * @param {
 *     serviceNames:string[];
 *     mapStateToProps: (props?: any) => any,
 *     mapDispatchToProps: (props?: any) => any,
 * } params
 * @constructor
 */
const SearchTableImplementFactory: SearchTableImplementFactoryFunction<any, any> = ({
  serviceNames = [],
  mapStateToProps,
  mapDispatchToProps,
}) => {
  const _mapStateToProps = (state) => ({
    ...ServiceRegister.mapStateToProps({
      namespaces: serviceNames || [],
      state,
    }),
    ...{
      loading: state.loading,
    },
    ...(mapStateToProps ? mapStateToProps(state) : {}),
  });

  const _mapDispatchToProps = (dispatch) => ({
    ...ServiceRegister.mapDispatchToProps({
      namespaces: serviceNames || [],
      dispatch,
    }),
    ...(mapDispatchToProps ? mapDispatchToProps(dispatch) : {}),
  });

  return (Component) =>
    ServiceRegister.connect(serviceNames || [])(_mapStateToProps, _mapDispatchToProps)(
      forwardRef<any, any>((props, ref) => (
        // @ts-ignore
        <Component
          ref={ref}
          isShowExpandSearch
          defaultExpandSearchCollapse={false}
          fixedHeaderAutoTable
          fixedTableSpaceBetween
          {...props}
          // @ts-ignore
          className={classNames(`${selectorPrefix}-wrap`, props.className ?? '')}
          style={props.style ?? {}}
        />
      )),
    );
};

export default SearchTableImplementFactory;
