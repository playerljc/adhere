import type {
  ColumnType,
  FilterValue,
  SorterResult,
  TableCurrentDataSource,
  TablePaginationConfig,
  TableRowSelection,
} from 'antd/lib/table/interface';
import PropTypes from 'prop-types';
import type { ReactElement, RefObject } from 'react';
import React, { createRef, forwardRef } from 'react';

import ServiceRegister from '@ctsj/state/lib/middleware/saga/serviceregister';

import SearchTable, { defaultProps, propTypes } from './SearchTable';
import type {
  ColumnTypeExt,
  ISearchTableImplement,
  SearchTableImplementFactoryFunction,
  SearchTableImplementProps,
  SearchTableImplementState,
  SearchTableProps,
  SearchTableState,
} from './types';

export const selectorPrefix = 'adhere-ui-searchtableimplement';

/**
 * SearchTableImplement
 * @class SearchTableImplement
 * @classdesc SearchTableImplement - SearchTable的默认实现
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class SearchTableImplement<P extends SearchTableProps, S extends SearchTableState>
  extends SearchTable<SearchTableImplementProps, SearchTableImplementState>
  implements ISearchTableImplement
{
  innerWrapRef: RefObject<HTMLDivElement> = createRef();

  constructor(props) {
    super(props);

    Object.assign(this.state, {
      ...this.getParams(),
      [this.getOrderFieldProp()]: this.getOrderFieldValue(),
      [this.getOrderProp()]: this.getOrderPropValue() || 'descend',
      // 查询参数
      searchParams: {
        ...this.getParams(),
      },
      selectedRowKeys: [],
      selectedRows: [],
    });
  }

  componentDidMount() {
    super.componentDidMount();

    const { getTableWrapperInstance } = this.props;

    if (getTableWrapperInstance) {
      getTableWrapperInstance(this.innerWrapRef);
    }
  }

  /**
   * getFetchListPropName
   * @override
   * @description - 获取调用列表接口的函数名
   */
  getFetchListPropName(): string {
    return '';
  }

  /**
   * getFetchListPropNameToFirstUpper
   * @override
   * @description - 获取调用列表接口的函数名首字母大写
   * @return string
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
   * @param property
   * @param v
   */
  onSelectChange = (property: string, v: string): void => {
    this.setState({
      [property]: v,
    });
  };

  /**
   * onInputChange
   * @description - onInputChange
   * @param property
   * @param e
   */
  onInputChange = (property: string, e): void => {
    this.setState({
      [property]: e.target.value.trim(),
    });
  };

  /**
   * onDateTimeRangeChange
   * @description - onDateTimeRangeChange
   * @param propertys
   * @param dayjs
   */
  onDateTimeRangeChange = (propertys: string[], dayjs: any[]) => {
    this.setState({
      [propertys[0]]: dayjs && dayjs.length ? dayjs[0] : null,
      [propertys[1]]: dayjs && dayjs.length ? dayjs[1] : null,
    });
  };

  /**
   * getParams
   * @override
   * @description - 获取查询参数对象
   */
  getParams(): object {
    return {};
  }

  /**
   * getServiceName
   * @override
   * @description - 获取接口服务的model名称
   */
  getServiceName(): string {
    return '';
  }

  /**
   * getFetchDataParams
   * @override
   * @description - 获取调用数据接口的参数
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
   * getNumberGeneratorRule
   * @override
   * @description - 表格序号列的生成规则
   */
  getNumberGeneratorRule(): symbol {
    return SearchTable.NUMBER_GENERATOR_RULE_CONTINUITY;
  }

  /**
   * getNumberGeneratorRule
   * @description 获取符号列的生成规则
   */
  getRowSelectionMode(): symbol {
    return SearchTable.ROW_SELECTION_NORMAL_MODE;
  }

  /**
   * getTableNumberColumnWidth
   * @override
   * @description - 表格序号列的宽度
   */
  getTableNumberColumnWidth(): number {
    return 80;
  }

  /**
   * getTableNumberColumnProps
   */
  getTableNumberColumnProps(): object {
    return {};
  }

  /**
   * getRowKey
   * @override
   * @description - 数据的主键
   */
  getRowKey(): string {
    return 'id';
  }

  /**
   * getDataKey
   * @description - 获取数据的key
   * @protected
   */
  getDataKey(): string {
    return 'list';
  }

  /**
   * getTotalKey
   * @description - 获取total的key
   * @protected
   */
  getTotalKey(): string {
    return 'totalCount';
  }

  /**
   * getData
   * @description - Table的数据(Table的dataSource字段)
   * @override
   * @return {Array}
   */
  getData(): object[] {
    return this.props[this.getServiceName()][this.getFetchListPropName()][this.getDataKey()];
  }

  /**
   * getTotal
   * @description - Table数据的总条数
   * @override
   */
  getTotal(): number {
    return this.props[this.getServiceName()][this.getFetchListPropName()][this.getTotalKey()];
  }

  /**
   * getRowSelection
   * @override
   * @description - 获取表格行选择对象
   */
  getRowSelection(): TableRowSelection<object> {
    const filter = (selected: boolean, records: any[]): void => {
      const rowKey = this.getRowKey();

      if (selected) {
        // add

        this.setState({
          selectedRowKeys: [
            ...(this.state.selectedRowKeys || []),
            ...records.map((r) => r[rowKey]),
          ],
          selectedRows: [...(this.state.selectedRows || []), ...records],
        });
      } else {
        // remove

        this.setState({
          selectedRows: (this.state.selectedRows || []).filter(
            (row) => !records.find((r) => r[rowKey] === row[rowKey]),
          ),

          selectedRowKeys: (this.state.selectedRowKeys || []).filter(
            (key) => !records.find((r) => r[rowKey] === key),
          ),
        });
      }
    };

    return {
      selectedRowKeys: this.state.selectedRowKeys,
      onChange: (selectedRowKeys: any[], selectedRows: any[]) => {
        if (this.getRowSelectionMode() === SearchTable.ROW_SELECTION_CONTINUOUS_MODE) return;

        // 如果是缺省模式(不能跨页选取)

        this.setState({
          selectedRowKeys,
          selectedRows,
        });
      },
      onSelect: (record, selected) => {
        if (this.getRowSelectionMode() === SearchTable.ROW_SELECTION_NORMAL_MODE) return;

        filter(selected, [record]);
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
        if (this.getRowSelectionMode() === SearchTable.ROW_SELECTION_NORMAL_MODE) return;

        filter(selected, changeRows);
      },
    };
  }

  /**
   * renderSearchForm
   * @override
   * @description - 渲染Table查询的表单
   */
  renderSearchForm(): ReactElement | null {
    return null;
  }

  /**
   * renderInner
   * @override
   * @description - 渲染主体
   */
  renderInner(): ReactElement | null {
    const innerJSX = super.renderInner();
    return (
      <div ref={this.innerWrapRef} className={`${selectorPrefix}-tablewrapper`}>
        {innerJSX}
      </div>
    );
  }

  /**
   * renderSearchFooterItems
   * @description - 渲染表格的工具栏
   * @override
   */
  renderSearchFooterItems(): any[] {
    return [];
  }

  /**
   * getOrderFieldProp
   * @description - 获取排序字段
   * @override
   */
  getOrderFieldProp(): string {
    return 'orderField';
  }

  /**
   * getOrderFieldValue
   * @description - 获取默认排序字段的值
   * @override
   * @protected
   */
  getOrderFieldValue(): string {
    return '';
  }

  /**
   * getOrderProp
   * @description - 获取排序方式
   */
  getOrderProp(): string {
    return 'order';
  }

  /**
   * getOrderPropValue
   * @override
   * @description - 获取默认排序方式
   * @protected
   */
  getOrderPropValue(): 'descend' | 'ascend' {
    return 'descend';
  }

  /**
   * clear
   * @description - 清空查询条件
   * @override
   */
  clear(): Promise<void> {
    return new Promise<void>((resolve) => {
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
   */
  showLoading(): boolean {
    return this.props.loading[`${this.getServiceName()}/${this.getFetchListPropName()}`];
  }

  /**
   * getSearchParams
   * @description - 获取查询参数
   * @protected
   */
  getSearchParams(): any {
    const { page, limit, searchParams } = this.state;

    const order = this.state[this.getOrderProp()];

    return {
      ...{
        page,
        limit,
        ...searchParams,
        [this.getOrderProp()]: order === 'descend' ? 'desc' : 'asc',

        [this.getOrderFieldProp()]: this.state[this.getOrderFieldProp()],
        ...this.getFetchDataParams(),
      },
    };
  }

  /**
   * fetchData
   * @description - 加载数据
   * @override
   */
  fetchData(): Promise<any> {
    return this.fetchDataExecute(this.getSearchParams());
  }

  /**
   * sync
   * @description 同步
   * @return Promise<any>
   */
  sync(): Promise<any> {
    return new Promise((resolve) => {
      const page = this.state.page as number;

      if (page === 1) {
        resolve(this.fetchData());
        return;
      }

      const res = this.fetchData().then(() => {
        const data = this.getData();

        if (data.length) {
          resolve(res);
        } else {
          this.setState(
            {
              page: page - 1,
            },
            () => resolve(this.fetchData()),
          );
        }
      });
    });
  }

  /**
   * fetchDataExecute
   * @description - 真正的执行获取列表数据的接口
   * @param searchParams
   * @protected
   */
  fetchDataExecute(searchParams: object): Promise<any> {
    return this.props[`${this.getServiceName()}${this.getFetchListPropNameToFirstUpper()}`](
      searchParams,
    );
  }

  /**
   * onSearch
   * @description - 点击查询
   * @override
   */
  onSearch(): Promise<void> {
    const keys = Object.keys(this.getParams());
    const params = {};
    keys.forEach((key) => {
      params[key] = this.state[key];
    });

    return new Promise<void>((resolve) => {
      this.setState(
        {
          searchParams: {
            ...params,

            [this.getOrderFieldProp()]: this.state[this.getOrderFieldProp()],

            [this.getOrderProp()]: this.state[this.getOrderProp()],
          },
        },
        () => {
          this.fetchData().then(() => {
            resolve();
          });
        },
      );
    });
  }

  getColumns(): ColumnType<object>[] {
    return [];
  }

  onSubTableChange(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    pagination: TablePaginationConfig,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    filters: Record<string, FilterValue | null>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    sorter: SorterResult<object> | SorterResult<object>[],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    extra?: TableCurrentDataSource<object> | undefined,
  ): void {}

  renderSearchFormAfter(): ReactElement | null {
    return null;
  }

  renderSearchFormBefore(): ReactElement | null {
    return null;
  }

  renderSearchFooter(): ReactElement | null {
    return null;
  }

  renderSearchHeader(): ReactElement | null {
    return null;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onTableRowComponentReducers(columns: ColumnTypeExt[]): string[] {
    return this.tableRowComponentReducers;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onTableCellComponentReducers(columns: ColumnTypeExt[]): string[] {
    return this.tableCellComponentReducers;
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
 * @param serviceNames
 * @param mapStateToProps
 * @param mapDispatchToProps
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
          className={`${selectorPrefix}-wrap`}
          isShowExpandSearch
          defaultExpandSearchCollapse={false}
          fixedHeaderAutoTable
          fixedTableSpaceBetween
          {...props}
        />
      )),
    );
};

export default SearchTableImplementFactory;
