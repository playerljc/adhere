import type {
  ColumnType,
  FilterValue,
  SorterResult,
  TableCurrentDataSource,
  TablePaginationConfig,
  TableRowSelection,
} from 'antd/lib/table/interface';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import type { ReactElement, ReactNode, RefObject } from 'react';
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
      selectedRowKeys: [],
      selectedRows: [],
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
      [property]: e.target.value.trim(),
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
   * getNumberGeneratorRule
   * @override
   * @description - 表格序号列的生成规则
   * @return {symbol}
   */
  getNumberGeneratorRule(): symbol {
    return SearchTable.NUMBER_GENERATOR_RULE_CONTINUITY;
  }

  /**
   * getNumberGeneratorRule
   * @description 获取符号列的生成规则
   * @return {symbol}
   */
  getRowSelectionMode(): symbol {
    return SearchTable.ROW_SELECTION_NORMAL_MODE;
  }

  /**
   * getTableNumberColumnWidth
   * @override
   * @description - 表格序号列的宽度
   * @return {number}
   */
  getTableNumberColumnWidth(): number {
    return 80;
  }

  /**
   * getTableNumberColumnProps
   * @return {object}
   */
  getTableNumberColumnProps(): object {
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
   * @return {TableRowSelection<object>}
   */
  getRowSelection(): TableRowSelection<object> {
    const filter = (selected: boolean, records: any[]): Promise<void> =>
      new Promise((resolve) => {
        const rowKey = this.getRowKey();

        if (selected) {
          // add
          // @ts-ignore
          this.setState(
            {
              selectedRowKeys: [
                ...(this.state?.selectedRowKeys || []),
                ...records.map((r) => r[rowKey]),
              ],
              selectedRows: [...(this.state?.selectedRows || []), ...records],
            },
            () => {
              resolve();
            },
          );
        } else {
          // remove
          // @ts-ignore
          this.setState(
            {
              selectedRows: (this.state?.selectedRows || []).filter(
                (row) => !records.find((r) => r[rowKey] === row[rowKey]),
              ),

              selectedRowKeys: (this.state?.selectedRowKeys || []).filter(
                (key) => !records.find((r) => r[rowKey] === key),
              ),
            },
            () => {
              resolve();
            },
          );
        }
      });

    return {
      selectedRowKeys: this.state?.selectedRowKeys,
      onChange: (selectedRowKeys: any[], selectedRows: any[]) => {
        if (this.getRowSelectionMode() === SearchTable.ROW_SELECTION_CONTINUOUS_MODE) return;

        // 如果是缺省模式(不能跨页选取)

        // @ts-ignore
        this.setState(
          {
            selectedRowKeys,
            selectedRows,
          },
          () => {
            this?.onRowSelectionChange?.();
          },
        );
      },
      onSelect: (record, selected) => {
        if (this.getRowSelectionMode() === SearchTable.ROW_SELECTION_NORMAL_MODE) return;

        filter(selected, [record]).then(() => {
          this?.onRowSelectionSelect?.();
        });
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
        if (this.getRowSelectionMode() === SearchTable.ROW_SELECTION_NORMAL_MODE) return;

        filter(selected, changeRows).then(() => {
          this?.onRowSelectionSelectAll?.();
        });
      },
    };
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
    // console.log('fetchData');
    return this.fetchDataExecute(this.getSearchParams());
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
          className={classNames(`${selectorPrefix}-wrap`, props.className ?? '')}
          style={props.style ?? {}}
        />
      )),
    );
};

export default SearchTableImplementFactory;
