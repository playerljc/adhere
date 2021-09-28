import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Table, Button } from 'antd';
import {
  ColumnType,
  FilterValue,
  SorterResult,
  TableCurrentDataSource,
  TablePaginationConfig,
  TableRowSelection,
} from 'antd/lib/table/interface';

import FlexLayout from '@baifendian/adhere-ui-flexlayout';
import Suspense from '@baifendian/adhere-ui-suspense';
import Intl from '@baifendian/adhere-util-intl';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import { ISearchTableProps, ISearchTableState } from './types';
import SearchForm from './searchform';

const selectorPrefix = 'adhere-ui-searchtable';

const { Fixed, Auto } = FlexLayout;

/**
 * SearchTable
 * @class SearchTable
 * @classdesc SearchTable
 */
// @ts-ignore
abstract class SearchTable extends Suspense<ISearchTableProps, ISearchTableState> {
  static defaultProps: any;
  static propTypes: any;

  // @ts-ignore
  static SearchForm: SearchForm = SearchForm;
  // 单独模式
  static NUMBER_GENERATOR_RULE_ALONE = Symbol();
  // 连续模式
  static NUMBER_GENERATOR_RULE_CONTINUITY = Symbol();

  /**
   * isShowNumber - 表格是否显示序号
   * @return boolean
   */
  abstract isShowNumber(): boolean;

  /**
   * getTableNumberColumnWidth - 表格序号列的宽度
   * @return number
   */
  abstract getTableNumberColumnWidth(): number;

  /**
   * getNumberGeneratorRule - 获取符号列的生成规则
   */
  abstract getNumberGeneratorRule(): string;

  /**
   * getRowKey - 获取表格的主键属性
   * @return string
   */
  abstract getRowKey(): string;

  /**
   * getData - 获取表格数据
   * @return Array<Object>
   */
  abstract getData(): Array<object>;

  /**
   * getColumns - 获取表格列的信息
   * @return Array<object>
   */
  abstract getColumns(): Array<ColumnType<object>>;

  /**
   *
   * getRowSelection - 获取表格行选择对象
   */
  abstract getRowSelection(): TableRowSelection<object>;

  /**
   * renderSearchForm - 渲染查询的UI
   */
  abstract renderSearchForm(): React.ReactElement | null;

  /**
   * getTotal - 获取表格数据的总数
   */
  abstract getTotal(): number;

  /**
   * getOrderFieldProp - 获取表格的排序字段
   */
  abstract getOrderFieldProp(): string;

  /**
   * getOrderProp - 获取表格的排序属性
   */
  abstract getOrderProp(): string;

  /**
   * onSubTableChange - 获取表格change句柄
   * @param pagination
   * @param filters
   * @param sorter
   * @param extra
   */
  abstract onSubTableChange(
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<object> | SorterResult<object>[],
    extra: TableCurrentDataSource<object>,
  ): void;

  /**
   * clear - 清除操作
   */
  abstract clear(): Promise<any>;

  /**
   * renderSearchFooterItems - 渲染SearchFooter的按钮组
   */
  abstract renderSearchFooterItems(
    defaultItems: Array<React.ReactElement>,
  ): Array<React.ReactElement> | null;

  /**
   * onSearch - 进行查询
   */
  abstract onSearch(): void;

  protected constructor(props) {
    super(props);

    // @ts-ignore
    this.state = {
      page: 1,
      limit: 10,
      expand: true,
    };
  }

  /**
   * getPagination - 获取分页信息
   */
  protected getPagination() {
    return {
      onChange: (page, limit) => {
        // @ts-ignore
        this.setState(
          {
            page,
            limit,
          },
          () => {
            // @ts-ignore
            this.fetchData();
          },
        );
      },
      onShowSizeChange: (page, limit) => {
        // @ts-ignore
        this.setState(
          {
            page,
            limit,
          },
          () => {
            // @ts-ignore
            this.fetchData();
          },
        );
      },
      total: this.getTotal(),
      // @ts-ignore
      current: this.state.page,
      // @ts-ignore
      pageSize: this.state.limit,
      showQuickJumper: true,
      showTotal: (total /* [page, pageSize] */) => {
        return Intl.v(`当前 {page}-{pageSize}/共 {total}条`, {
          // @ts-ignore
          page: this.state.page,
          // @ts-ignore
          pageSize: this.state.limit,
          total,
        });
      },
    };
  }

  /**
   * onTableChange - 表格change
   */
  protected onTableChange = (pagination, filters, sorter) => {
    // @ts-ignore
    this.setState(
      {
        [this.getOrderFieldProp()]: sorter.field,
        [this.getOrderProp()]: sorter.order,
      },
      () => {
        const { order } = sorter;

        if (!order) return;

        // @ts-ignore
        this.fetchData();

        // @ts-ignore
        this.onSubTableChange(pagination, filters, sorter);
      },
    );
  };

  /**
   * onClear - 清除操作
   */
  protected onClear = () => {
    // @ts-ignore
    this.setState(
      {
        page: 1,
        limit: 10,
      },
      () => {
        this.clear().then(() => {
          // @ts-ignore
          this.fetchData();
        });
      },
    );
  };

  /**
   * sortOrder - table的column中加入
   * sorter: true,
   * sortOrder: this.sortOrder('distance'),
   * @param columnName
   * @return {*}
   */
  protected sortOrder(columnName: string): string {
    // @ts-ignore
    return this.state[this.getOrderFieldProp()] === columnName
      ? // @ts-ignore
        this.state[this.getOrderProp()]
      : '';
  }

  /**
   * getTableColumns - 获取表格的列数据
   * @return Array<any>
   */
  protected getTableColumns(): Array<any> {
    const isShowNumber = this.isShowNumber();
    const getTableNumberColumnWidth = this.getTableNumberColumnWidth();

    if (isShowNumber) {
      const numberGeneratorRule =
        this.getNumberGeneratorRule() ?? SearchTable.NUMBER_GENERATOR_RULE_ALONE;

      // @ts-ignore
      const { page, limit } = this.state;

      return [
        {
          title: Intl.v('序号'),
          dataIndex: 'number',
          key: 'number',
          align: 'center',
          width: getTableNumberColumnWidth ?? 80,
          render: (v, r, index) => (
            <ConditionalRender
              // @ts-ignore
              conditional={numberGeneratorRule === SearchTable.NUMBER_GENERATOR_RULE_ALONE}
              // @ts-ignore
              noMatch={() => <span>{(page - 1) * limit + (index + 1)}</span>}
            >
              {() => <span>{index + 1}</span>}
            </ConditionalRender>
          ),
        },
      ].concat(
        // @ts-ignore
        this.getColumns(),
      );
    }

    return this.getColumns();
  }

  /**
   * renderSearchFooter - 渲染查询工具栏
   * @return React.ReactElement
   */
  protected renderSearchFooter(): React.ReactElement {
    const defaultItems = [
      <Button
        className={`${selectorPrefix}-SearchFooterItem`}
        type="primary"
        icon={<i className="iconfont iconsousuo" />}
        onClick={() => {
          // @ts-ignore
          this.setState(
            {
              page: 1,
            },
            () => {
              this.onSearch();
            },
          );
        }}
      >
        {Intl.v('查询')}
      </Button>,
      <Button className={`${selectorPrefix}-SearchFooterItem`} onClick={this.onClear}>
        {Intl.v('重置')}
      </Button>,
    ];

    const items = this.renderSearchFooterItems(defaultItems) || [...defaultItems];

    return (
      <div className={`${selectorPrefix}-SearchFooterWrapper`}>
        {items.map((t) => (
          <div className={`${selectorPrefix}-SearchFooterItem`}>{t}</div>
        ))}
      </div>
    );
  }

  /**
   * renderInner - 渲染SearchTable
   * @return React.ReactElement | null
   */
  protected renderInner(): React.ReactElement | null {
    const {
      className,
      style,
      tableClassName,
      tableStyle,
      searchClassName,
      searchStyle,
      // @ts-ignore
    } = this.props;

    return (
      // @ts-ignore
      <FlexLayout
        direction="vertical"
        className={classNames(selectorPrefix, ...(className || '').split(' '))}
        style={{ ...(style || {}) }}
      >
        {/* @ts-ignore */}
        <Fixed
          className={classNames(
            `${selectorPrefix}-SearchWrapper`,
            ...(searchClassName || '').split(' '),
          )}
          style={{ ...(searchStyle || {}) }}
        >
          {/* @ts-ignore */}
          <FlexLayout>
            {/* @ts-ignore */}
            <Fixed>{this.renderSearchForm()}</Fixed>
            {/* @ts-ignore */}
            <Fixed>{this.renderSearchFooter()}</Fixed>
          </FlexLayout>
        </Fixed>
        {/* @ts-ignore */}
        <Auto
          className={classNames(
            `${selectorPrefix}-TableWrapper`,
            ...(tableClassName || '').split(' '),
          )}
          style={{ ...(tableStyle || {}) }}
        >
          <Table
            rowKey={this.getRowKey()}
            dataSource={this.getData()}
            columns={this.getTableColumns()}
            onChange={this.onTableChange}
            pagination={this.getPagination()}
            rowSelection={this.getRowSelection()}
          />
        </Auto>
      </FlexLayout>
    );
  }
}

SearchTable.defaultProps = {
  className: '',
  style: {},
  tableClassName: '',
  tableStyle: {},
  searchClassName: '',
  searchStyle: {},
  // 第一次
  isFirst: true,
  // 第一次加载
  isFirstLoading: null,
};

SearchTable.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  tableClassName: PropTypes.string,
  tableStyle: PropTypes.object,
  searchClassName: PropTypes.string,
  searchStyle: PropTypes.object,
  reset: PropTypes.bool,
  firstLoading: PropTypes.node,
};

export default SearchTable;
