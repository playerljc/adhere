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

// @ts-ignore
import FlexLayout from '@baifendian/adhere-ui-flexlayout';
import Suspense from '@baifendian/adhere-ui-suspense';
import Intl from '@baifendian/adhere-util-intl';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

import ColumnResizable, {
  SearchTableResizableTitle,
  SearchTableResizableObserver,
} from './Extension/ColumnResizable';
import ColumnSetting from './Extension/ColumnSetting';
import TableDensitySetting from './Extension/TableDensitySetting';
import { ISearchTableProps, ISearchTableState, TableDensity } from './types';

export const selectorPrefix = 'adhere-ui-searchtable';

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
  private components = {
    header: {
      cell: SearchTableResizableTitle,
    },
  };

  // 列拖动对象
  private columnResizable = new ColumnResizable();

  // 列属性监控对象
  private columnObserver: any = null;

  /**
   * isShowNumber - 表格是否显示序号
   * @return boolean
   */
  abstract isShowNumber(): boolean;

  /**
   * getTableNumberColumnWidth - 表格序号列的宽度
   * @return number
   */
  abstract getTableNumberColumnWidth(): Symbol;

  /**
   * getNumberGeneratorRule - 获取符号列的生成规则
   */
  abstract getNumberGeneratorRule(): Symbol;

  /**
   * getRowSelectionMode - 获取全选的生模式
   */
  abstract getRowSelectionMode(): string;

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
   * renderSearchBefore
   * @description 渲染查询面板之前
   */
  abstract renderSearchFormBefore(): React.ReactElement | null;

  /**
   * renderSearchForm - 渲染查询的UI
   */
  abstract renderSearchForm(): React.ReactElement | null;

  /**
   * renderSearchBefore
   * @description 渲染查询面板之后
   */
  abstract renderSearchFormAfter(): React.ReactElement | null;

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
   * getOrderPropValue - 获取默认排序方式
   */
  abstract getOrderPropValue(): 'descend' | 'ascend';

  /**
   * getOrderFieldValue - 获取默认排序字段的值
   */
  abstract getOrderFieldValue(): string;

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
  abstract onSearch(): Promise<void>;

  protected constructor(props) {
    super(props);

    // @ts-ignore
    this.state = {
      page: 1,
      limit: this.getLimit(),
      expand: props.defaultExpandSearchCollapse,
      scrollY: 0,
    };

    this.state = {
      ...this.state,
      // 列设置
      columnSetting: this.getTableColumns().map((column, index) => ({
        ...column,
        sort: index,
        display: true,
      })),
      // 表格密度设置
      // @ts-ignore
      tableDensity: this.getTableDensity(),
    };

    this.onClear = this.onClear.bind(this);
  }

  componentWillReceiveProps(nextProps: ISearchTableProps) {
    super.componentWillReceiveProps(nextProps);

    this.columnSettingEffect(nextProps);
  }

  componentDidUpdate(prevProps, prevState, snapshot?: any) {
    if (!this.tableWrapRef.current) return;

    this.searchTableResizableEffectLayout();
    this.fixedHeaderAutoTableEffectLayout(prevProps, prevState);
  }

  /**
   * searchTableResizableEffectLayout
   * @protected
   */
  protected searchTableResizableEffectLayout() {
    // 监控header的属性变化(colgroup)
    if (!this.columnObserver) {
      this.columnObserver = SearchTableResizableObserver(this);
    }
  }

  /**
   * fixedHeaderAutoTableEffectLayout
   * @protected
   */
  protected fixedHeaderAutoTableEffectLayout(prevProps, prevState) {
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
   * columnSettingEffect
   * @param props
   * @protected
   */
  protected columnSettingEffect(props: ISearchTableProps) {
    // @ts-ignore
    const preColumnSetting = this.state.columnSetting || [];
    const columnSetting = this.getTableColumns().map((column, index) => ({
      ...column,
      sort: index,
      display: true,
    }));

    // 长度不相等
    // @ts-ignore
    if (preColumnSetting.length !== columnSetting) {
      // @ts-ignore
      this.setState({
        columnSetting,
      });

      return;
    }

    // @ts-ignore
    const preColumnSettingRowKeys = preColumnSetting?.map?.((t) => t[this.getRowKey()]);
    // @ts-ignore
    const columnSettingRowKeys = columnSetting?.map?.((t) => t[this.getRowKey()]);

    // 长度相等但是key有变化
    if (preColumnSettingRowKeys.toString() !== columnSettingRowKeys.toString()) {
      const rowKey = this.getRowKey() || 'id';

      // @ts-ignore
      this.setState({
        // @ts-ignore
        columnSetting: columnSetting?.map((t) => {
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
   * renderTableNumberColumn
   * @description - 渲染序号列
   * @param number
   * @param params
   * @protected
   */
  protected renderTableNumberColumn(
    number: string = '',
    params: { value: any; record: object; index: number },
  ) {
    return <span>{number}</span>;
  }

  /**
   * getLimit
   * @description limit参数
   */
  protected getLimit(): number {
    return 10;
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
    this.setState(
      // @ts-ignore
      {
        [this.getOrderFieldProp()]: sorter.field || this.getOrderFieldValue(),
        [this.getOrderProp()]: sorter.order || this.getOrderPropValue(),
      },
      () => {
        const { order } = sorter;

        if (!order) return;

        this.fetchData();

        // @ts-ignore
        this.onSubTableChange(pagination, filters, sorter);
      },
    );
  };

  /**
   * onClear - 清除操作
   */
  protected onClear(): Promise<void> {
    return new Promise((resolve) => {
      this.setState(
        {
          page: 1,
          limit: this.getLimit(),
        },
        () => {
          this.clear().then(() => {
            this.fetchData();

            resolve();
          });
        },
      );
    });
  }

  /**
   * sortOrder - table的column中加入
   * sorter: true,
   * sortOrder: this.sortOrder('distance'),
   * @param columnName
   * @return {*}
   */
  protected sortOrder(columnName: string): string {
    return this.state[this.getOrderFieldProp()] === columnName
      ? this.state[this.getOrderProp()]
      : '';
  }

  /**
   * getTableDensity
   * @description 表格密度
   */
  protected getTableDensity() {
    return TableDensity.DEFAULT;
  }

  /**
   * getTableColumns - 获取表格的列数据
   * @return Array<any>
   */
  protected getTableColumns(): Array<any> {
    const isShowNumber = this.isShowNumber();
    const getTableNumberColumnWidth = this.getTableNumberColumnWidth();

    // 对权限进行过滤
    const columns = this.getColumns()
      .filter((column) => {
        if ('authorized' in column) {
          // @ts-ignore
          return column.authorized();
        }

        return true;
      })
      .map((column, index) => {
        // @ts-ignore
        if ('resizable' in column && !!column.resizable) {
          return this.columnResizable.searchTableResizableColumnItem(this, index, column);
        }

        return column;
      });

    if (isShowNumber) {
      const numberGeneratorRule =
        this.getNumberGeneratorRule() ?? SearchTable.NUMBER_GENERATOR_RULE_ALONE;

      const { page, limit } = this.state;

      return [
        {
          title: Intl.v('序号'),
          dataIndex: '_number',
          key: '_number',
          align: 'center',
          width: getTableNumberColumnWidth ?? 80,
          render: (v, r, index) => (
            <ConditionalRender
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
      ].concat(columns as Array<any>);
    }

    return columns;
  }

  /**
   * renderColumnSetting
   * @description 创建列设置组件
   */
  renderColumnSetting(): React.ReactElement {
    const columns = [...this.state.columnSetting];

    columns.sort((c1, c2) => {
      if (c1.sort > c2.sort) return 1;
      if (c1.sort < c2.sort) return -1;
      return 0;
    });

    return (
      <ColumnSetting
        columns={columns}
        onShowColumns={(checked) => {
          this.setState(({ columnSetting }) => ({
            columnSetting: columnSetting.map((column) => ({
              ...column,
              display: checked,
            })),
          }));
        }}
        onReset={() => {
          this.setState(() => ({
            columnSetting: this.getTableColumns().map((column, index) => ({
              ...column,
              display: true,
              sort: index,
            })),
          }));
        }}
        onDisplayColumn={(column, checked) => {
          this.setState(({ columnSetting }) => ({
            columnSetting: columnSetting.map((_column) => ({
              ..._column,
              display: _column.key === column.key ? checked : _column.display,
            })),
          }));
        }}
        onSortEnd={(map) => {
          this.setState(({ columnSetting }) => ({
            columnSetting: columnSetting.map((column) => ({
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
   */
  renderTableDensitySetting(): React.ReactElement {
    return (
      <TableDensitySetting
        // @ts-ignore
        density={this.state.tableDensity}
        onChange={(density) => {
          this.setState({
            // @ts-ignore
            tableDensity: density,
          });
        }}
        onReset={() => {
          this.setState({
            // @ts-ignore
            tableDensity: this.getTableDensity(),
          });
        }}
      />
    );
  }

  /**
   * renderSearchFooter - 渲染查询工具栏
   * @return React.ReactElement
   */
  protected renderSearchFooter(): React.ReactElement {
    const { isShowExpandSearch } = this.props;

    const defaultItems = [
      <Button
        className={`${selectorPrefix}-searchfooteritem`}
        type="primary"
        icon={
          <i
            className={classNames(
              `${selectorPrefix}-searchfooteritem-search-btn-icon`,
              'iconfont iconsousuo',
            )}
          />
        }
        onClick={() => {
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
          conditional={this.state.expand}
          noMatch={() => (
            <a
              className={`${selectorPrefix}-searchfooteritem-expand-search-up-btn`}
              onClick={() => {
                this.setState({
                  expand: true,
                });
              }}
            >
              <span>{Intl.v('展开')}</span>
              <i className="iconfont iconup" />
            </a>
          )}
        >
          {() => (
            <a
              className={`${selectorPrefix}-searchfooteritem-expand-search-down-btn`}
              onClick={() => {
                this.setState({
                  expand: false,
                });
              }}
            >
              <span>{Intl.v('关闭')}</span>
              <i className="iconfont icondownarrow" />
            </a>
          )}
        </ConditionalRender>,
      );
    }

    const items = this.renderSearchFooterItems(defaultItems) || [...defaultItems];

    return (
      <div className={`${selectorPrefix}-searchfooterwrapper`}>
        {items.map((t, index) => (
          <div key={index} className={`${selectorPrefix}-searchfooteritem`}>
            {t}
          </div>
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

    // @ts-ignore
    const { columnSetting, tableDensity } = this.state;

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
    const tableProps = {
      rowKey: this.getRowKey(),
      dataSource: this.getData(),
      columns,
      onChange: this.onTableChange,
      pagination: this.getPagination(),
      rowSelection: this.getRowSelection(),
      components: this.components,
      size: tableDensity,
      ...(antdTableProps || {}),
    };

    // 是否支持锁定列头，表格体滚动
    if (fixedHeaderAutoTable) {
      // @ts-ignore
      const { scrollY } = this.state;

      if (antdTableProps) {
        // @ts-ignore
        if (antdTableProps.scroll) {
          // @ts-ignore
          tableProps.scroll.y = scrollY;
        } else {
          // @ts-ignore
          tableProps.scroll = { y: scrollY };
        }
      } else {
        // @ts-ignore
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
        <Fixed
          className={classNames(
            `${selectorPrefix}-searchwrapper`,
            ...(searchClassName || '').split(/\s+/),
          )}
          style={{ ...(searchStyle || {}) }}
          fit={fitSearch}
        >
          {/*@ts-ignore*/}
          <FlexLayout direction="vertical">
            <ConditionalRender conditional={!!this.renderSearchFormBefore}>
              {() => <Fixed>{this.renderSearchFormBefore()}</Fixed>}
            </ConditionalRender>

            <Fixed>
              <ConditionalRender conditional={expand} noMatch={() => null}>
                {() => this.renderSearchForm()}
              </ConditionalRender>
            </Fixed>
            <Fixed>{this.renderSearchFooter()}</Fixed>

            <ConditionalRender conditional={!!this.renderSearchFormAfter}>
              {() => <Fixed>{this.renderSearchFormAfter()}</Fixed>}
            </ConditionalRender>
          </FlexLayout>
        </Fixed>
        <ConditionalRender conditional={!!this.renderTableHeader}>
          {() => <Fixed>{this.renderTableHeader()}</Fixed>}
        </ConditionalRender>
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
          {() => <Fixed>{this.renderTableFooter()}</Fixed>}
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
