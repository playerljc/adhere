import React, { createRef, RefObject } from 'react';
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

  protected tableWrapRef: RefObject<HTMLDivElement> = createRef();

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
   * renderTableHeader - 渲染表格的头
   */
  abstract renderTableHeader(): React.ReactElement | null;

  /**
   * renderTableFooter - 渲染表格的脚
   */
  abstract renderTableFooter(): React.ReactElement | null;

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
      expand: props.defaultExpandSearchCollapse,
      scrollY: 0,
    };

    this.onClear = this.onClear.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot?: any) {
    if (!this.tableWrapRef.current) return;

    // @ts-ignore
    if (this.props.fixedHeaderAutoTable) {
      const dataSource = this.getData();

      if (
        dataSource &&
        dataSource.length &&
        // @ts-ignore
        ((prevState.scrollY === 0 && this.state.scrollY === 0) ||
          // @ts-ignore
          prevState.scrollY !== this.state.scrollY ||
          // @ts-ignore
          prevState.expand !== this.state.expand)
      ) {
        const tableWrapRef = this.tableWrapRef.current as HTMLElement;

        const tableHeaderHeight =
          (tableWrapRef.querySelector('.ant-table-header') as HTMLElement)?.offsetHeight || 0;

        const tablePaginationHeight =
          (tableWrapRef.querySelector('.ant-table-pagination') as HTMLElement)?.offsetHeight || 0;

        // @ts-ignore
        this.setState({
          // @ts-ignore
          scrollY:
            tableWrapRef.clientHeight -
            (tableHeaderHeight + (tablePaginationHeight ? tablePaginationHeight + 16 * 2 : 0)),
        });
      }
    }
  }

  /**
   * renderTableNumberColumn
   * @description - 渲染序号列
   * @param number
   * @param params
   * @protected
   */
  protected renderTableNumberColumn(
    number: string = '',
    params: { record: object; index: number },
  ) {
    return <span>{number}</span>;
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
  protected onClear() {
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
  }

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

    // 对权限进行过滤
    const columns = this.getColumns().filter((column) => {
      if ('authorized' in column) {
        // @ts-ignore
        return column.authorized();
      }

      return true;
    });

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
              noMatch={() =>
                this.renderTableNumberColumn((page - 1) * limit + (index + 1), { record: v, index })
              }
            >
              {() => this.renderTableNumberColumn(index + 1, { record: v, index })}
            </ConditionalRender>
          ),
        },
      ].concat(columns as Array<any>);
    }

    return columns;
  }

  /**
   * renderSearchFooter - 渲染查询工具栏
   * @return React.ReactElement
   */
  protected renderSearchFooter(): React.ReactElement {
    // @ts-ignore
    const { isShowExpandSearch } = this.props;

    const defaultItems = [
      <Button
        className={`${selectorPrefix}-searchfooteritem`}
        type="primary"
        icon={
          <img
            style={{ width: 16 }}
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjMzODYzMzk2MjEzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijg4MCIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNOTQ4LjQ4IDgzMy45MmwtMTg1LjYtMTgzLjY4Yy0zLjg0LTMuODQtOC4zMi02LjQtMTMuNDQtNy42OEM4MDEuMjggNTgwLjQ4IDgzMiA1MDEuNzYgODMyIDQxNiA4MzIgMjIxLjQ0IDY3NC41NiA2NCA0ODAgNjQgMjg1LjQ0IDY0IDEyOCAyMjEuNDQgMTI4IDQxNiAxMjggNjEwLjU2IDI4NS40NCA3NjggNDgwIDc2OGM4NS43NiAwIDE2My44NC0zMC43MiAyMjUuMjgtODEuMjggMS45MiA0LjQ4IDQuNDggOC45NiA4LjMyIDEyLjhsMTg1LjYgMTgzLjY4YzE0LjA4IDEzLjQ0IDM1Ljg0IDEzLjQ0IDQ5LjkyIDBTOTYyLjU2IDg0Ny4zNiA5NDguNDggODMzLjkyek00ODAgNzA0QzMyMC42NCA3MDQgMTkyIDU3NS4zNiAxOTIgNDE2IDE5MiAyNTYuNjQgMzIwLjY0IDEyOCA0ODAgMTI4IDYzOS4zNiAxMjggNzY4IDI1Ni42NCA3NjggNDE2IDc2OCA1NzUuMzYgNjM5LjM2IDcwNCA0ODAgNzA0eiIgcC1pZD0iODgxIiBmaWxsPSIjZmZmIj48L3BhdGg+PC9zdmc+"
            alt="search"
          />
        }
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
      <Button className={`${selectorPrefix}-searchfooteritem`} onClick={this.onClear}>
        {Intl.v('重置')}
      </Button>,
    ];

    if (isShowExpandSearch) {
      defaultItems.push(
        <ConditionalRender
          // @ts-ignore
          conditional={this.state.expand}
          // @ts-ignore
          noMatch={() => (
            <a
              style={{ display: 'flex', alignItems: 'center' }}
              onClick={() => {
                // @ts-ignore
                this.setState({
                  expand: true,
                });
              }}
            >
              <span style={{ marginRight: 5 }}>{Intl.v('展开')}</span>
              <img
                style={{ width: 16 }}
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjMzODYzMjYyMTM1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE1MjQ0IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0xOTkuMzYgNTcyLjc2OGEzMS45MDQgMzEuOTA0IDAgMCAwIDIyLjYyNC05LjM3NmwyOTQuMTQ0LTI5NC4xNDQgMjg1LjcyOCAyODUuNzI4YTMxLjk2OCAzMS45NjggMCAxIDAgNDUuMjQ4LTQ1LjI0OEw1MzguNzUyIDIwMS4zNzZhMzIgMzIgMCAwIDAtNDUuMjggMEwxNzYuNzA0IDUxOC4xNDRhMzEuOTY4IDMxLjk2OCAwIDAgMCAyMi42NTYgNTQuNjI0eiBtMzM5LjQyNC0xMTUuMzkyYTMyIDMyIDAgMCAwLTQ1LjI4IDBMMTc2LjczNiA3NzQuMTQ0YTMxLjk2OCAzMS45NjggMCAxIDAgNDUuMjQ4IDQ1LjI0OGwyOTQuMTQ0LTI5NC4xNDQgMjg1LjcyOCAyODUuNzI4YTMxLjk2OCAzMS45NjggMCAxIDAgNDUuMjQ4LTQ1LjI0OGwtMzA4LjMyLTMwOC4zNTJ6IiBwLWlkPSIxNTI0NSIgZmlsbD0iIzE4OTBmZiI+PC9wYXRoPjwvc3ZnPg=="
                alt="up"
              />
            </a>
          )}
        >
          {() => (
            <a
              style={{ display: 'flex', alignItems: 'center' }}
              onClick={() => {
                // @ts-ignore
                this.setState({
                  expand: false,
                });
              }}
            >
              <span style={{ marginRight: 5 }}>{Intl.v('关闭')}</span>
              <img
                style={{ width: 16 }}
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjMzODYzMTc4MzI5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE0ODY3IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik00OTMuNTA0IDU1OC4xNDRhMzEuOTA0IDMxLjkwNCAwIDAgMCA0NS4yOCAwbDMwOC4zNTItMzA4LjM1MmEzMS45NjggMzEuOTY4IDAgMSAwLTQ1LjI0OC00NS4yNDhMNTE2LjE2IDQ5MC4yNzIgMjIxLjk4NCAxOTYuMTI4YTMxLjk2OCAzMS45NjggMCAxIDAtNDUuMjQ4IDQ1LjI0OGwzMTYuNzY4IDMxNi43Njh6IiBwLWlkPSIxNDg2OCIgZmlsbD0iIzE4OTBmZiI+PC9wYXRoPjxwYXRoIGQ9Ik04MDEuODg4IDQ2MC41NzZMNTE2LjE2IDc0Ni4zMDQgMjIyLjAxNiA0NTIuMTZhMzEuOTY4IDMxLjk2OCAwIDEgMC00NS4yNDggNDUuMjQ4bDMxNi43NjggMzE2Ljc2OGEzMS45MDQgMzEuOTA0IDAgMCAwIDQ1LjI4IDBsMzA4LjM1Mi0zMDguMzUyYTMyIDMyIDAgMSAwLTQ1LjI4LTQ1LjI0OHoiIHAtaWQ9IjE0ODY5IiBmaWxsPSIjMTg5MGZmIj48L3BhdGg+PC9zdmc+"
                alt="down"
              />
            </a>
          )}
        </ConditionalRender>,
      );
    }

    const items = this.renderSearchFooterItems(defaultItems) || [...defaultItems];

    return (
      <div className={`${selectorPrefix}-searchfooterwrapper`}>
        {items.map((t) => (
          <div className={`${selectorPrefix}-searchfooteritem`}>{t}</div>
        ))}
      </div>
    );
  }

  /**
   * renderTable
   * @description - 认选表格体
   * @protected
   */
  protected renderTable() {
    const {
      antdTableProps,
      fixedHeaderAutoTable,
      // @ts-ignore
    } = this.props;

    // Table的antdProps配置
    const tableProps = {
      rowKey: this.getRowKey(),
      dataSource: this.getData(),
      columns: this.getTableColumns(),
      onChange: this.onTableChange,
      pagination: this.getPagination(),
      rowSelection: this.getRowSelection(),
      ...(antdTableProps || {}),
    };

    // 是否支持锁定列头，表格体滚动
    if (fixedHeaderAutoTable) {
      // @ts-ignore
      const { scrollY } = this.state;

      if (antdTableProps) {
        if (antdTableProps.scroll) {
          tableProps.scroll.y = scrollY;
        } else {
          tableProps.scroll = { y: scrollY };
        }
      } else {
        tableProps.scroll = { y: scrollY };
      }
    }

    return <Table {...tableProps} />;
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
      fitSearch,
      fitTable,
      autoFixed,
      fixedTableSpaceBetween,
      // @ts-ignore
    } = this.props;

    // @ts-ignore
    const { expand } = this.state;

    return (
      // @ts-ignore
      <FlexLayout
        direction="vertical"
        className={classNames(
          selectorPrefix,
          fixedTableSpaceBetween ? 'fixedtablespacebetween' : '',
          ...(className || '').split(/\s+/),
        )}
        style={{ ...(style || {}) }}
      >
        {/* @ts-ignore */}
        <Fixed
          className={classNames(
            `${selectorPrefix}-searchwrapper`,
            ...(searchClassName || '').split(/\s+/),
          )}
          style={{ ...(searchStyle || {}) }}
          fit={fitSearch}
        >
          {/* @ts-ignore */}
          <FlexLayout>
            {/* @ts-ignore */}
            <Fixed>
              <ConditionalRender conditional={expand} noMatch={null}>
                {() => this.renderSearchForm()}
              </ConditionalRender>
            </Fixed>
            {/* @ts-ignore */}
            <Fixed>{this.renderSearchFooter()}</Fixed>
          </FlexLayout>
        </Fixed>
        <ConditionalRender conditional={!!this.renderTableHeader}>
          {() => (
            // @ts-ignore
            <Fixed>{this.renderTableHeader()}</Fixed>
          )}
        </ConditionalRender>
        {/* @ts-ignore */}
        <Auto
          className={classNames(
            `${selectorPrefix}-autowrapper`,
            ...(tableClassName || '').split(/\s+/),
            autoFixed ? 'autofixed' : '',
          )}
          style={{ ...(tableStyle || {}) }}
          fit={fitTable}
          autoFixed={autoFixed}
        >
          <div ref={this.tableWrapRef} className={`${selectorPrefix}-tablewrapper`}>
            {this.renderTable()}
          </div>
        </Auto>
        <ConditionalRender conditional={!!this.renderTableFooter}>
          {() => (
            // @ts-ignore
            <Fixed>{this.renderTableFooter()}</Fixed>
          )}
        </ConditionalRender>
      </FlexLayout>
    );
  }

  /**
   * render
   * @protected
   */
  protected render(): JSX.Element {
    return <div className={`${selectorPrefix}-wrap`}>{super.render()}</div>;
  }
}

export const defaultProps = {
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
  antdTableProps: {},
  isShowExpandSearch: true,
  defaultExpandSearchCollapse: true,
  fitSearch: true,
  fitTable: true,
  autoFixed: true,
  fixedHeaderAutoTable: false,
  fixedTableSpaceBetween: false,
};

export const propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  tableClassName: PropTypes.string,
  tableStyle: PropTypes.object,
  searchClassName: PropTypes.string,
  searchStyle: PropTypes.object,
  reset: PropTypes.bool,
  firstLoading: PropTypes.node,
  // antdTable的Props
  antdTableProps: PropTypes.object,
  // 是否有展开和收缩的功能
  isShowExpandSearch: PropTypes.bool,
  // 展开和收缩的默认状态
  defaultExpandSearchCollapse: PropTypes.bool,
  // 撑开search
  fitSearch: PropTypes.bool,
  // 撑开表格
  fitTable: PropTypes.bool,
  // 是否是查询固定，表格自适应
  autoFixed: PropTypes.bool,
  // 锁定列头，表格滚动
  fixedHeaderAutoTable: PropTypes.bool,
  // 两端固定(表格的头始终在上方，分页始终在下方)
  fixedTableSpaceBetween: PropTypes.bool,
};

SearchTable.defaultProps = defaultProps;

SearchTable.propTypes = propTypes;

export default SearchTable;
