import React from 'react';
import PropTypes from 'prop-types';
import {
  ColumnType,
  FilterValue,
  SorterResult,
  TableCurrentDataSource,
  TablePaginationConfig,
  TableRowSelection,
} from 'antd/lib/table/interface';

import { ISearchTableImplementProps } from './types';
import SearchTable from './searchtable';
import SearchForm from './searchform';

/**
 * SearchTableImplement
 * @class SearchTableImplement
 * @classdesc SearchTableImplement
 */
// @ts-ignore
class SearchTableImplement extends SearchTable<ISearchTableImplementProps, any> {
  // @ts-ignore
  static SearchForm: SearchForm = SearchForm;

  // 单独模式
  static NUMBER_GENERATOR_RULE_ALONE = SearchTable.NUMBER_GENERATOR_RULE_ALONE;
  // 连续模式
  static NUMBER_GENERATOR_RULE_CONTINUITY = SearchTable.NUMBER_GENERATOR_RULE_CONTINUITY;

  /**
   * isShowNumber - 表格是否显示序号
   * @return boolean
   */
  protected isShowNumber(): boolean {
    // @ts-ignore
    return this.props.isShowNumber();
  }

  /**
   * getTableNumberColumnWidth - 表格序号列的宽度
   * @return number
   */
  protected getTableNumberColumnWidth(): number {
    // @ts-ignore
    return this.props.getTableNumberColumnWidth();
  }

  /**
   * getNumberGeneratorRule - 获取符号列的生成规则
   */
  protected getNumberGeneratorRule(): string {
    // @ts-ignore
    return this.props.getNumberGeneratorRule();
  }

  /**
   * getRowKey - 获取表格的主键属性
   * @return string
   */
  protected getRowKey(): string {
    // @ts-ignore
    return this.props.getRowKey();
  }

  /**
   * getData - 获取表格数据
   * @return Array<Object>
   */
  protected getData(): Array<object> {
    // @ts-ignore
    return this.props.getData();
  }

  /**
   * getColumns - 获取表格列的信息
   * @return Array<object>
   */
  protected getColumns(): Array<ColumnType<object>> {
    // @ts-ignore
    return this.props.getColumns();
  }

  /**
   *
   * getRowSelection - 获取表格行选择对象
   */
  protected getRowSelection(): TableRowSelection<object> {
    // @ts-ignore
    return this.props.getRowSelection();
  }

  /**
   * renderSearchForm - 渲染查询的UI
   */
  protected renderSearchForm(): React.ReactElement | null {
    // @ts-ignore
    return this.props.renderSearchForm();
  }

  /**
   * getTotal - 获取表格数据的总数
   */
  protected getTotal(): number {
    // @ts-ignore
    return this.props.getTotal();
  }

  /**
   * getOrderFieldProp - 获取表格的排序字段
   */
  protected getOrderFieldProp(): string {
    // @ts-ignore
    return this.props.getOrderFieldProp();
  }

  /**
   * getOrderProp - 获取表格的排序属性
   */
  protected getOrderProp(): string {
    // @ts-ignore
    return this.props.getOrderProp();
  }

  /**
   * onSubTableChange - 获取表格change句柄
   * @param pagination
   * @param filters
   * @param sorter
   * @param extra
   */
  protected onSubTableChange(
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<object> | SorterResult<object>[],
    extra: TableCurrentDataSource<object>,
  ): void {
    // @ts-ignore
    return this.props.onSubTableChange(pagination, filters, sorter, extra);
  }

  /**
   * clear - 清除操作
   */
  protected clear(): Promise<any> {
    // @ts-ignore
    return this.props.clear();
  }

  /**
   * renderSearchFooterItems - 渲染SearchFooter的按钮组
   */
  protected renderSearchFooterItems(): Array<React.ReactElement> | null {
    // @ts-ignore
    return this.props.renderSearchFooterItems();
  }

  /**
   * onSearch - 进行查询
   */
  protected onSearch(): void {
    // @ts-ignore
    return this.props.onSearch();
  }
}

SearchTableImplement.defaultProps = {
  isShowNumber: () => true,
  getTableNumberColumnWidth: () => 80,
  getNumberGeneratorRule: () => SearchTable.NUMBER_GENERATOR_RULE_ALONE,
  getRowKey: () => 'id',
  getData: () => ({ total: 0, list: [] }),
  getColumns: () => [],
  getRowSelection: () => ({
    selectedRowKeys: [],
    onChange: () => {},
  }),
  renderSearchForm: () => null,
  getTotal: () => 0,
  getOrderFieldProp: () => '',
  getOrderProp: () => '',
  onSubTableChange: () => {},
  clear: () => new Promise((resolve) => resolve()),
  renderSearchFooterItems: () => null,
  onSearch: () => {},
  showLoading: () => false,
  fetchData: () => {},
};

SearchTableImplement.propTypes = {
  isShowNumber: PropTypes.func,
  getTableNumberColumnWidth: PropTypes.func,
  getNumberGeneratorRule: PropTypes.func,
  getRowKey: PropTypes.func,
  getData: PropTypes.func,
  getColumns: PropTypes.func,
  getRowSelection: PropTypes.func,
  renderSearchForm: PropTypes.func,
  getTotal: PropTypes.func,
  getOrderFieldProp: PropTypes.func,
  getOrderProp: PropTypes.func,
  onSubTableChange: PropTypes.func,
  clear: PropTypes.func,
  renderSearchFooterItems: PropTypes.func,
  onSearch: PropTypes.func,
  showLoading: PropTypes.bool,
  fetchData: PropTypes.func,
};

// @ts-ignore
export default SearchTableImplement;
