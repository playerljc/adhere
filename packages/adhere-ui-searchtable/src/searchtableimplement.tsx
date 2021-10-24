import React, { createRef, RefObject } from 'react';
import PropTypes from 'prop-types';
import {
  ColumnType,
  // FilterValue,
  // SorterResult,
  // TableCurrentDataSource,
  // TablePaginationConfig,
  TableRowSelection,
} from 'antd/lib/table/interface';

import { ISearchTableImplementProps } from './types';
import SearchTable from './searchtable';

const selectorPrefix = 'adhere-ui-searchtableimplement';

/**
 * SearchTableImplement
 * @class SearchTableImplement
 * @classdesc SearchTableImplement
 */
// @ts-ignore
class SearchTableImplement extends SearchTable<ISearchTableImplementProps, any> {
  protected innerWrapRef: RefObject<HTMLDivElement> = createRef();

  constructor(props) {
    super(props);

    // @ts-ignore
    Object.assign(this.state, {
      ...this.getParams(),
      [this.getOrderFieldProp()]: this.getOrderFieldValue(),
      [this.getOrderProp()]: this.getOrderPropValue() || 'descend',
      // 查询参数
      searchParams: {
        ...this.getParams(),
      },
    });
  }

  protected componentDidMount() {
    super.componentDidMount();

    // @ts-ignore
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
  protected getFetchListPropName(): string {
    return '';
  }

  /**
   * getFetchListPropNameToFirstUpper
   * @override
   * @description - 获取调用列表接口的函数名首字母大写
   * @return string
   */
  protected getFetchListPropNameToFirstUpper(): string {
    return '';
  }

  // ------------ 不需要重写(override)的方法 start ------------------
  /**
   * onSelectChange
   * @description - onSelectChange
   * @param property
   * @param v
   */
  protected onSelectChange = (property: string, v: string): void => {
    // @ts-ignore
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
  protected onInputChange = (property: string, e): void => {
    // @ts-ignore
    this.setState({
      [property]: e.target.value.trim(),
    });
  };

  /**
   * onDateTimeRangeChange
   * @description - onDateTimeRangeChange
   * @param propertys
   * @param moments
   */
  protected onDateTimeRangeChange = (propertys: Array<string>, moments: Array<any>) => {
    // @ts-ignore
    this.setState({
      [propertys[0]]: moments && moments.length ? moments[0] : null,
      [propertys[1]]: moments && moments.length ? moments[1] : null,
    });
  };

  // ------------ 不需要重写(override)的方法 end ------------------

  /**
   * getParams
   * @override
   * @description - 获取查询参数对象
   */
  protected getParams(): object {
    return {};
  }

  /**
   * getServiceName
   * @override
   * @description - 获取接口服务的model名称
   */
  protected getServiceName(): string {
    return '';
  }

  /**
   * getFetchDataParams
   * @override
   * @description - 获取调用数据接口的参数
   */
  protected getFetchDataParams(): object {
    return {};
  }

  /**
   * isShowNumber
   * @description - 是否线上序号列
   * @override
   * @return {boolean}
   */
  protected isShowNumber(): boolean {
    return true;
  }

  /**
   * getNumberGeneratorRule
   * @override
   * @description - 表格序号列的生成规则
   */
  protected getNumberGeneratorRule(): Symbol {
    return SearchTable.NUMBER_GENERATOR_RULE_CONTINUITY;
  }

  /**
   * getTableNumberColumnWidth
   * @override
   * @description - 表格序号列的宽度
   */
  protected getTableNumberColumnWidth(): number {
    return 80;
  }

  /**
   * getRowKey
   * @override
   * @description - 数据的主键
   */
  protected getRowKey(): string {
    return 'id';
  }

  /**
   * getData
   * @description - Table的数据(Table的dataSource字段)
   * @override
   * @return {Array}
   */
  protected getData(): Array<object> {
    // @ts-ignore
    return this.props[this.getServiceName()][this.getFetchListPropName()].list;
  }

  /**
   * getColumns
   * @description - Table的列
   * @override
   */
  protected getColumns(): Array<ColumnType<object>> {
    // @ts-ignore
    return this.props.getColumns();
  }

  /**
   * getRowSelection
   * @override
   * @description - 获取表格行选择对象
   */
  protected getRowSelection(): TableRowSelection<object> {
    return {
      // @ts-ignore
      selectedRowKeys: this.state.selectedRowKeys,
      onChange: (selectedRowKeys: Array<any>) => {
        // @ts-ignore
        this.setState({
          selectedRowKeys,
        });
      },
    };
  }

  /**
   * renderSearchForm
   * @override
   * @description - 渲染Table查询的表单
   */
  protected renderSearchForm(): React.ReactElement | null {
    return null;
  }

  /**
   * renderInner
   * @override
   * @description - 渲染主体
   */
  protected renderInner(): React.ReactElement | null {
    const innerJSX = super.renderInner();
    return (
      <div ref={this.innerWrapRef} className={`${selectorPrefix}-tablewrapper`}>
        {innerJSX}
      </div>
    );
  }

  /**
   * getTotal
   * @description - Table数据的总条数
   * @override
   */
  protected getTotal(): number {
    // @ts-ignore
    return this.props[this.getServiceName()][this.getFetchListPropName()].totalCount;
  }

  /**
   * getOrderFieldProp
   * @description - 获取排序字段
   * @override
   */
  protected getOrderFieldProp(): string {
    return 'orderField';
  }

  /**
   * getOrderFieldValue
   * @description - 获取默认排序字段的值
   * @override
   * @protected
   */
  protected getOrderFieldValue(): string {
    return '';
  }

  /**
   * getOrderProp
   * @description - 获取排序方式
   */
  protected getOrderProp(): string {
    return 'order';
  }

  /**
   * getOrderPropValue
   * @override
   * @description - 获取默认排序方式
   * @protected
   */
  protected getOrderPropValue(): 'descend' | 'ascend' {
    return 'descend';
  }

  /**
   * clear
   * @description - 清空查询条件
   * @override
   */
  protected clear(): Promise<any> {
    return new Promise((resolve) => {
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
        },
        () => {
          resolve();
        },
      );
    });
  }

  /**
   * renderSearchFooterItems
   * @description - 渲染表格的工具栏
   * @override
   */
  protected renderSearchFooterItems(): Array<any> {
    return [];
  }

  /**
   * showLoading
   * @description - 是否显示遮罩
   * @override
   */
  protected showLoading(): boolean {
    // @ts-ignore
    return this.props.loading[`${this.getServiceName()}/${this.getFetchListPropName()}`];
  }

  /**
   * fetchData
   * @description - 加载数据
   * @override
   */
  protected fetchData(): Promise<any> {
    // @ts-ignore
    const { page, limit, searchParams } = this.state;

    // @ts-ignore
    const order = this.state[this.getOrderProp()];

    // @ts-ignore
    return this.fetchDataExecute({
      ...{
        page,
        limit,
        ...searchParams,
        [this.getOrderProp()]: order === 'descend' ? 'desc' : 'asc',
        // @ts-ignore
        [this.getOrderFieldProp()]: this.state[this.getOrderFieldProp()],
        ...this.getFetchDataParams(),
        ins: this,
        success: () => {},
      },
    });
  }

  /**
   * fetchDataExecute
   * @description - 真正的执行获取列表数据的接口
   * @param searchParams
   * @protected
   */
  protected fetchDataExecute(searchParams: object): Promise<any> {
    // @ts-ignore
    return this.props[`${this.getServiceName()}${this.getFetchListPropNameToFirstUpper()}`](
      searchParams,
    );
  }

  /**
   * onSearch
   * @description - 点击查询
   * @override
   */
  protected onSearch(): Promise<any> {
    const keys = Object.keys(this.getParams());
    const params = {};
    keys.forEach((key) => {
      // @ts-ignore
      params[key] = this.state[key];
    });

    return new Promise((resolve) => {
      // @ts-ignore
      this.setState(
        {
          searchParams: {
            ...params,
            // @ts-ignore
            [this.getOrderFieldProp()]: this.state[this.getOrderFieldProp()],
            // @ts-ignore
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
}

SearchTableImplement.defaultProps = {};

SearchTableImplement.propTypes = {
  getTableWrapperInstance: PropTypes.func,
};

// @ts-ignore
export default SearchTableImplement;
