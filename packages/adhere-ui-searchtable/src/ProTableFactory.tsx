import { Button, ColorPicker, Input, InputNumber, Rate, Slider, Switch } from 'antd';
import dayjs from 'dayjs';
import debounce from 'lodash.debounce';
import merge from 'lodash.merge';
import omit from 'omit.js';
import qs from 'qs';
import type { ReactNode } from 'react';
import React from 'react';

import { EllipsisOutlined, FilterOutlined, SearchOutlined, SyncOutlined } from '@ant-design/icons';
import {
  DatePicker,
  Dropdown,
  InputNumberDecimal1,
  InputNumberDecimal2,
  InputNumberInteger,
  RangePicker,
  TimePicker,
} from '@baifendian/adhere-ui-anthoc';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import TableGridLayout from '@baifendian/adhere-ui-tablegridlayout';
import type {
  LayoutType,
  TableGridLayoutProps,
} from '@baifendian/adhere-ui-tablegridlayout/lib/types';
import TableHeadSearch from '@baifendian/adhere-ui-tableheadsearch';
import Util from '@baifendian/adhere-util';
import Intl from '@baifendian/adhere-util-intl';
import Validator from '@baifendian/adhere-util-validator';

import AdvancedSearchPanel from './Extension/AdvancedSearchPanel';
import ColumnTipTitle from './Extension/ColumnTipTitle';
import RouteListen from './Extension/SearchAndPaginParams/routeListen';
import { selectorPrefix } from './SearchTable';
import { hasCommonPathRelation } from './Util';
import type { AdvancedSearchPanelGroupData, ColumnTypeExt } from './types';

const { TextArea } = Input;
const { renderGridSearchFormGroup, Label, Value } = TableGridLayout;
const _selectorPrefix = `${selectorPrefix}-pro-table`;

export default (SuperClass, searchAndPaginationParamsMemo) =>
  class extends SuperClass {
    static displayName = '';

    constructor(props) {
      super(props);

      this.pathname = this.getPathName();

      this.lastPathname = '';

      this.unlisten = null;

      // 获取浏览器地址栏上默认的searchQuery和分页参数
      let defaultSearchAndPaginationParams = {
        search: {},
        page: 1,
        limit: this.getLimit(),
      };

      if (this.isUseMemo()) {
        defaultSearchAndPaginationParams = this.initSearchAndPaginationParams();
      }

      // state create
      this.state = {
        ...this.state,
        ...defaultSearchAndPaginationParams.search,
        page: defaultSearchAndPaginationParams.page,
        limit: defaultSearchAndPaginationParams.limit,
        searchParams: {
          ...this.state.searchParams,
          ...defaultSearchAndPaginationParams.search,
        },
      };

      // dateProp merge
      this.state = {
        ...this.state,
        ...this.getDateState(omit(this.state, ['searchParams'])),
        searchParams: {
          ...this.state.searchParams,
          ...this.getDateState(this.state.searchParams),
        },
        // 高级搜索面板是否显示
        advancedSearchPanelCollapse: false,
      };

      // 是否有高级搜索面板
      this.hasAdvancedSearchPanel = false;

      // 高级搜索设置
      this.advancedSearchConfig = null;

      // 调用路由监听的方法
      const code = RouteListen.getCode();
      // 先初始化数据在清空缓存
      !!code && code();

      this.handleSearchInputChangeDebounced = debounce((dataIndex: string, value: any) => {
        const searchParams = {
          ...(this.state.searchParams ?? {}),
          [dataIndex]: value,
        };

        this.setState({
          [dataIndex]: value,
          searchParams,
        });
      }, 300);

      this.handleSearchRangeChangeDebounced = debounce(
        ([startName, endName]: [string, string], values: any[]) => {
          const start = values?.[0] ? values[0] : null;
          const end = values?.[1] ? values[1] : null;

          const searchParams = {
            ...(this.state.searchParams ?? {}),
            [startName]: start,
            [endName]: end,
          };

          this.setState({
            [startName]: start,
            [endName]: end,
            searchParams,
          });
        },
        300,
      );
    }

    componentDidMount() {
      super.componentDidMount && super.componentDidMount();

      const history = this.props?.history;

      if (history) {
        this.unlisten = history.listen((location) => {
          // this.lastAction = history.action;
          this.lastPathname = location.pathname;
        });
      }
    }

    componentWillUnmount() {
      super.componentWillUnmount && super.componentWillUnmount();

      // 1 -> 2
      // 保存1的数据

      // 2 -> 3
      // 保存2的数据

      // 3 <- 2
      // 清空3
      // 初始化2

      // 1 2 3  2

      // 清理监听器
      if (this.unlisten) {
        this.unlisten();
      }

      // if (this.isUseMemo()) {
      //   // 如果是进操作则保存缓存数据
      //   if (['push', 'replace'].includes(this?.lastAction?.toLowerCase?.())) {
      //     // 如果要新跳转的路由和
      //     // const top = RouteListen.getTop() ?? '';
      //
      //     // if (this.isOnlyLastSegmentDifferent(top, this.lastPathname)) {
      //     // 卸载的时候处理查询和分页参数的缓存
      //     this.unMountSearchAndPaginationParamsDeal();
      //     // }
      //   }
      //   // 如果是出操作则清空缓存数据
      //   else {
      //     if (searchAndPaginParamsMemo.findByPath(this.pathname)) {
      //       searchAndPaginParamsMemo.deleteByPath(this.pathname);
      //     }
      //   }
      // }
      if (this.isUseMemo()) {
        if (
          RouteListen.getLength() === 0 ||
          hasCommonPathRelation(this.pathname, this.lastPathname)
        ) {
          // 是一个体系中的保存缓存数据
          this.unMountSearchAndPaginationParamsDeal();
        } else {
          // 不是则清空全部的缓存
          searchAndPaginationParamsMemo.clearAll();
        }
      }
    }

    /**
     * onSubTableChange
     * @param pagination
     * @param filters
     * @param sorter
     */
    onSubTableChange(pagination, filters, sorter) {
      // const { order, field } = sorter;
      //
      // if (!order) return;
      //
      // this.setState(
      //   {
      //     curOrder: order,
      //     curOrderField: field,
      //   },
      //   () => {
      //     this.fetchData();
      //   },
      // );
    }

    /**
     * onSearchPanelCollapseBefore
     * @description 查询面板Collapse之前
     */
    onSearchPanelCollapseBefore() {
      if (this.hasAdvancedSearch() && this.hasAdvancedSearchPanel && this.state.expand) {
        this.setState({
          advancedSearchPanelCollapse: false,
        });
      }
    }

    /**
     * unMountSearchAndPaginationParamsDeal
     * @description - 卸载的时候处理查询和分页参数的缓存
     */
    unMountSearchAndPaginationParamsDeal() {
      // 查询条件
      const searchParams = this.state.searchParams ?? {};

      const pathname = this.pathname ?? '';

      const componentId = this.getComponentId();

      if (searchAndPaginationParamsMemo.isEmpty()) {
        // console.log('===================s1:', pathname, componentId, {
        //   search: searchParams,
        //   page: this.state.page,
        //   limit: this.state.limit,
        // });
        searchAndPaginationParamsMemo.add(pathname, {
          [componentId]: {
            search: searchParams,
            page: this.state.page,
            limit: this.state.limit,
          },
        });
      } else {
        const item = searchAndPaginationParamsMemo.findByPath(pathname);

        if (item && item?.components?.[componentId]) {
          item.components[componentId].search = searchParams;
          item.components[componentId].page = this.state.page;
          item.components[componentId].limit = this.state.limit;

          // console.log(
          //   '===================s2:',
          //   pathname,
          //   componentId,
          //   item.components[componentId],
          // );
        } else {
          searchAndPaginationParamsMemo.add(pathname, {
            [componentId]: {
              search: searchParams,
              page: this.state.page,
              limit: this.state.limit,
            },
          });

          // console.log('===================s3:', pathname, componentId, {
          //   search: searchParams,
          //   page: this.state.page,
          //   limit: this.state.limit,
          // });
        }
      }

      //{
      // key: adhere-ui-search-table
      // value: [
      //   {
      //     path: 路由
      //     components: {
      //       com1: {
      //         search: {
      //           a:1,
      //           b:2,
      //           c:3,
      //         }
      //       }
      //     }
      //   }
      // ]
      //}
    }

    /**
     * isUseMemo
     * @description 是否开启了缓存
     * @return {boolean}
     */
    isUseMemo() {
      return (
        !('openSearchParamsMemory' in (this.props ?? {})) ||
        ('openSearchParamsMemory' in (this.props ?? {}) && this.props.openSearchParamsMemory)
      );
    }

    /**
     * initSearchAndPaginationParams
     * @description - 初始化组件的查询和分页参数
     * @param queryReduce 查询参数的处理
     */
    initSearchAndPaginationParams(queryReduce?: (key: string, v: any) => any) {
      const query = qs.parse(this.getSearch(), { ignoreQueryPrefix: true });

      const queryParams = {};

      Object.keys(query).forEach((key) => {
        queryParams[key] = queryReduce ? queryReduce(key, query[key]) : query[key];
      });

      if (searchAndPaginationParamsMemo.isEmpty()) {
        return {
          search: { ...queryParams },
          page: 1,
          limit: this.getLimit(),
        };
      }

      const pathname = this.pathname ?? '';

      // console.log('================pathName:', pathname);

      const item = searchAndPaginationParamsMemo.findByPath(pathname);

      // console.log('================item:', item);

      const componentId = this.getComponentId();

      // console.log('================componentId:', componentId);

      if (item && item.components[componentId]) {
        return {
          ...queryParams,
          ...item.components[componentId],
        };
      }

      return {
        search: { ...queryParams },
        page: 1,
        limit: this.getLimit(),
      };
    }

    /**
     * hasAdvancedSearchPanel
     * @description 是否开启高级搜索
     * @returns {boolean}
     */
    hasAdvancedSearch(): boolean {
      return true;
    }

    /**
     * hasNumberColumnFixed
     * @description 序号列是否固定
     * @returns {boolean}
     */
    hasNumberColumnFixed(): boolean {
      return true;
    }

    /**
     * hasOptionColumnFixed
     * @description 操作列是否固定
     * @returns {boolean}
     */
    hasOptionColumnFixed(): boolean {
      return true;
    }

    /**
     * getPathName
     * @description 不同路由模式下获取pathname的方法
     */
    getPathName() {
      const publicPath = this?.props?.publicPath ?? '/';
      const router = this?.props?.router ?? 'browser';

      return Util.getPathName(publicPath, router); /*window.location.pathname;*/
    }

    /**
     * getSearch
     * @description 不同路由模式下获取search的方法
     */
    getSearch() {
      return Util.getSearch(this?.props?.router ?? 'browser') ?? ''; /*window.location.search;*/
    }

    /**
     * getParams
     * @description 根据列设置返回查询参数
     * @default params
     */
    getParams() {
      const params = {};

      const loop = (_columns) => {
        _columns.reduce((_params, _column) => {
          const { $search, children } = _column;
          const searchConfig = $search ?? {};
          const dataIndex = searchConfig.dataIndex || _column.dataIndex;

          if (
            [this.getOptionsColumnDataIndex(), this.getLinkColumnDataIndex(), '_number'].includes(
              dataIndex,
            )
          ) {
            return _params;
          }

          if (searchConfig.type === 'rangePicker') {
            if (searchConfig.startName) _params[searchConfig.startName] = null;
            if (searchConfig.endName) _params[searchConfig.endName] = null;
          } else if (['datePicker', 'timePicker'].includes(searchConfig.type)) {
            _params[dataIndex] = null;
          } else {
            _params[dataIndex] = undefined;
          }

          if (children && Array.isArray(children)) {
            loop(children);
          }

          return _params;
        }, params);
      };

      loop(this.getTableColumnsAll());

      const query = qs.parse(this.getSearch(), { ignoreQueryPrefix: true });
      const queryParams = {};
      Object.keys(query).forEach((key) => {
        queryParams[key] = query[key];
      });

      return {
        ...queryParams,
        ...params,
      };
    }

    /**
     * getDateState
     * @description 获取时间查询字段，将默认值修改为null或dayjs对象
     * @param state
     * @return {{}}
     */
    getDateState(state) {
      // null | null字符串 | 时间字符串
      const dateKeys = Object.keys(state).filter(
        (key) => {
          let result = false;
          try {
            result =
              state[key] === null ||
              state[key] === 'null' ||
              state[key] === undefined ||
              state[key] === 'undefined' ||
              state[key] === '' ||
              Validator.isDate(state[key]);
          } catch (e) {}

          return result;
        },
        // 判断是否是时间字符串
        // dayjs(state[key]).isValid(),
      );

      const dateObj = {};

      dateKeys.forEach((key) => {
        dateObj[key] =
          state[key] === null ||
          state[key] === 'null' ||
          state[key] === undefined ||
          state[key] === 'undefined' ||
          state[key] === ''
            ? null
            : dayjs(state[key]);
      });

      return dateObj;
    }

    /**
     * getDataKey
     * @description - 获取数据的key
     * @protected
     */
    getDataKey() {
      return 'records';
    }

    /**
     * getTotalKey
     * @description - 获取total的key
     * @protected
     */
    getTotalKey() {
      return 'total';
    }

    /**
     * getLimit
     * @return {number}
     */
    getLimit(): number {
      return 10;
    }

    /**
     * getFetchDateParams
     * @description 获取列表接口查询参数
     */
    getFetchDateParams() {
      const { searchParams } = this.state;

      const dateSearchParams = {};

      const rangeDateKeys = Object.keys(searchParams).filter(
        (key) =>
          ['start', 'Start'].some((t) => key.indexOf(t) !== -1) ||
          ['end', 'End'].some((t) => key.indexOf(t) !== -1),
      );

      // rangeDateKeys.forEach((key) => {
      //   dateSearchParams[key] = searchParams[key]
      //     ? `${searchParams[key].format(Resource.Dict.value.ResourceMomentFormat10.value())} ${
      //         ['start', 'Start'].some((t) => key.indexOf(t) !== -1)
      //           ? '00:00:00'
      //           : ['end', 'End'].some((t) => key.indexOf(t) !== -1)
      //           ? '23:59:59'
      //           : ''
      //       }`.trim()
      //     : null;
      // });
      rangeDateKeys.forEach((key) => {
        dateSearchParams[key] = searchParams[key]
          ? ['start', 'Start'].some((t) => key.indexOf(t) !== -1)
            ? searchParams[key].startOf('day').valueOf()
            : ['end', 'End'].some((t) => key.indexOf(t) !== -1)
            ? searchParams[key].endOf('day').valueOf()
            : ''
          : null;
      });

      // 对时间类型对象(一般是dayjs对象)进行转换，现在是format转换，其实应该转换成时间戳才对
      const dateKeys = Object.keys(searchParams).filter(
        (key) => !(key in dateSearchParams) && dayjs.isDayjs(searchParams[key]),
      );

      // dateKeys.forEach((key) => {
      //   dateSearchParams[key] = searchParams[key]
      //     ? searchParams[key].format(Resource.Dict.value.ResourceMomentFormat10.value()).trim()
      //     : null;
      // });
      dateKeys.forEach((key) => {
        dateSearchParams[key] = searchParams[key] ? searchParams[key].valueOf() : null;
      });

      return dateSearchParams;
    }

    /**
     * getColumns
     * @param columns
     * @return {*}
     */
    getColumns(columns) {
      // const reducers = [
      //   // render的处理
      //   // (result) => {
      //   //   if (result.render) {
      //   //     result.render = (...params) => (
      //   //       <Ellipsis isUseNativeTooltip tooltip={result.ellipsisTooltip}>
      //   //         {result.render(...params)}
      //   //       </Ellipsis>
      //   //     );
      //   //   }
      //   //   return result;
      //   // },
      // ];

      return (columns || super.getColumns?.() || []).map((t) => {
        // return reducers.reduce((_result, reducer) => reducer(_result), {
        //   ellipsis: 'ellipsis' in t ? t.ellipsis : true,
        //   ...t,
        // });
        return {
          ellipsis: 'ellipsis' in t ? t.ellipsis : !this.isColumnMaxContent(),
          ...t,
        };
      });
    }

    /**
     * getTableColumns
     * @returns {*}
     */
    getTableColumns() {
      const columns = super.getTableColumns();

      if (this.hasOptionColumnFixed()) {
        const options = columns.find(
          (t) => t.dataIndex === (this.getOptionsColumnDataIndex() || '_options'),
        );
        if (options && !('fixed' in options) && !options.fixed) {
          options.fixed = 'right';
        }
      }

      if (this.hasNumberColumnFixed()) {
        const number = columns.find((t) => t.dataIndex === '_number');
        if (number && !('fixed' in number) && !number.fixed) {
          number.fixed = 'left';
        }
      }

      const linkColumn = columns.find(
        (t) => t.dataIndex === (this.getLinkColumnDataIndex() || '_linkColumn'),
      );

      if (linkColumn) {
        if (!('ellipsis' in linkColumn)) {
          linkColumn.ellipsis = false;
        }

        if (!('align' in linkColumn)) {
          linkColumn.align = 'left';
        }
      }

      return (
        columns
          // 处理align
          .map((t) => ({
            ...t,
            align: [this.getLinkColumnDataIndex() || '_linkColumn'].includes(t.dataIndex)
              ? 'center'
              : 'align' in t && t.align
              ? t.align
              : 'center',
          }))
          // 处理search
          .map((_t) => {
            const loop = (t) => {
              const { $search, ...columnConfig } = t;
              const searchConfig = this.assignSearchConfig($search, columnConfig);
              const showColumnHeader = searchConfig.showColumnHeader;

              let column = {
                ...t,
              };

              const dataIndex = searchConfig.dataIndex || t.dataIndex;

              if (
                dataIndex &&
                !['_number', this.getOptionsColumnDataIndex()].includes(dataIndex) &&
                showColumnHeader
              ) {
                column = {
                  ...column,
                  ...TableHeadSearch(({ confirm }) => {
                    const type = searchConfig.type;

                    return (
                      <div className={`${_selectorPrefix}-header-search-wrap`}>
                        <div className={`${_selectorPrefix}-header-search-wrap-main`}>
                          {this.renderGridSearchFormGroupDataItem(type, {
                            searchConfig,
                            column,
                            dataIndex,
                            layout: undefined,
                            currentTitle: undefined,
                          })}
                        </div>

                        <div className={`${_selectorPrefix}-header-search-wrap-footer`}>
                          <Button
                            size="small"
                            icon={<SyncOutlined />}
                            onClick={() => {
                              const state = {};

                              if (type === 'rangePicker') {
                                if (searchConfig.startName) state[searchConfig.startName] = null;
                                if (searchConfig.endName) state[searchConfig.endName] = null;
                              } else {
                                state[dataIndex] = undefined;
                              }

                              this.setState(state, () => this.onSearch().then(() => confirm()));
                            }}
                          >
                            {Intl.get('reset')}
                          </Button>

                          <Button
                            icon={<SearchOutlined />}
                            size="small"
                            type="primary"
                            onClick={() => this.search().then(() => confirm())}
                          >
                            {Intl.get('confirm')}
                          </Button>
                        </div>
                      </div>
                    );
                  }, this.getTableColumnSearchHeaderIcon(column)),
                };
              }

              if (t.children && Array.isArray(t.children)) {
                t.children.forEach((item, _index) => {
                  t.children[_index] = loop(item);
                });
              }

              return column;
            };

            return loop(_t);
          })
          // 处理tip
          .map((_t) => {
            const loop = (t) => {
              const { $tip, title, renderTip } = t;

              let currentTitle = title;

              if ($tip) {
                currentTitle = renderTip?.($tip) ?? <ColumnTipTitle tip={$tip} title={title} />;
              }

              let column = {
                ...t,
                title: currentTitle,
              };

              if (t.children && Array.isArray(t.children)) {
                t.children.forEach((item, _index) => {
                  t.children[_index] = loop(item);
                });
              }

              return column;
            };

            return loop(_t);
          })
      );
    }

    /**
     * getTableColumnSearchHeaderIcon
     * @description 获取列头查询图标
     * @param {ColumnTypeExt} column
     * @return JSX.Element
     */
    getTableColumnSearchHeaderIcon(column: ColumnTypeExt) {
      const { $search, dataIndex } = column;

      // @ts-ignore
      if (!!this.state?.searchParams?.[$search?.dataIndex || dataIndex]) {
        return (
          <div>
            <div>
              <SearchOutlined style={{ fontSize: 14 }} />
            </div>
            <div style={{ height: 2, background: '#ccc' }} />
          </div>
        );
      }

      return <SearchOutlined />;
    }

    /**
     * getOptionsColumnDataIndex
     * @description 操作列的索引名
     * @returns {string}
     */
    getOptionsColumnDataIndex() {
      return '_options';
    }

    /**
     * getLinkColumnDataIndex
     * @description 可以跳转列的索引
     * @returns {string}
     */
    getLinkColumnDataIndex() {
      return '_linkColumn';
    }

    /**
     * getPagination
     * @return {{showTotal: (function(*): string)}}
     */
    getPagination() {
      return {
        ...super.getPagination(),
        showTotal: (total) => {
          const start = (this.state.page - 1) * this.state.limit + 1;
          let end = this.state.page * this.state.limit;
          end = total > end ? end : total;

          return Intl.get('pagination_info', {
            page: start,
            pageSize: end,
            total,
          });
        },
      };
    }

    /**
     * getGridSearchFormColgroup
     */
    getGridSearchFormColgroup() {
      return {
        columnCount: 3,
        colgroup: [, 'auto', , 'auto', , 'auto'],
      };
    }

    /**
     * getGridSearchFormRowCount
     */
    getGridSearchFormRowCount() {
      return 1; // Number.MAX_VALUE;
    }

    /**
     * getGridSearchFormProps
     */
    getGridSearchFormProps() {
      return {
        rowCount: this.getGridSearchFormRowCount(),
        // renderTitleLabel: () => <div>搜索</div>,
        // // 渲染高级查询面板的Collapse
        // renderCollapse: (collapse) => <div>收起</div>,
        // // 渲染高级查询面板显示的按钮
        // renderSearchButton: (callback) => <div onClick={() => callback()}>高级搜索</div>,
        // // 高级查询面板查询按钮的插入位置 (defaultItems) => {}
        // insertSearchButton: null,
        // renderSearch: (cb) => <span onClick={cb}>Search</span>,
        // renderReset: (cb) => <span onClick={cb}>Reset</span>,
      };
    }

    /**
     * getGridSearchFormGroupParams
     */
    getGridSearchFormGroupParams() {
      return [
        [
          {
            name: 'g1',
            ...this.getGridSearchFormColgroup(),
            data: this.getGridSearchFormGroupDataByColumnConfig(),
          },
        ],
        {},
        this.getGridSearchFormProps(),
      ];
    }

    /**
     * getGridSearchFormProps
     * @description 是否显示 label后面的 ":"
     * @param $search
     */
    getSearchLabelSymbol($search) {
      const isShowLabelSymbol = !('isShowLabelSymbol' in $search)
        ? true
        : !!$search.isShowLabelSymbol;
      return isShowLabelSymbol ? <span>：</span> : null;
    }

    /**
     * getGridSearchFormGroupDataByColumnConfig
     * @description 通过列设置获取gridSearchFormGroup的Data数据
     * @return Array
     */
    getGridSearchFormGroupDataByColumnConfig(
      tableGridLayoutProps?: Omit<TableGridLayoutProps, 'data' | 'layout'> & {
        layout: LayoutType | 'prefix';
      },
    ) {
      const layout = !tableGridLayoutProps ? 'horizontal' : tableGridLayoutProps.layout;

      const searchFormGroupData: {
        key: number;
        sort?: number;
        label: ReactNode;
        value: ReactNode | null;
      }[] = [];

      const loop = (columns) => {
        columns
          .filter((t) => '$search' in t && !!t.$search.visible)
          .forEach((t) => {
            const { $search, $tip, renderTip, ...column } = t;

            const searchConfig = this.assignSearchConfig($search, column);
            const type = searchConfig?.type || 'input';
            const dataIndex = searchConfig.dataIndex || t.dataIndex;
            const title = $search.title || t.title;

            let currentTitle = title;

            if ($tip) {
              currentTitle = renderTip?.($tip) ?? <ColumnTipTitle tip={$tip} title={title} />;
            }

            searchFormGroupData.push({
              key: dataIndex,
              sort: $search.sort,
              label: layout !== 'prefix' && (
                <Label {...($search.labelAttrs ?? {})}>
                  {Util.isFunction(currentTitle) ? currentTitle() : currentTitle}
                  {this.getSearchLabelSymbol($search)}
                </Label>
              ),
              value: ConditionalRender.conditionalRender({
                conditional: this.hasAuthority ? this.hasAuthority?.(searchConfig.authority) : true,
                /*Dict.value.SystemAuthoritySwitch.value
                                              ? Util.isAuthority(searchConfig.authority, this.authorized)
                                              : true*/
                match: (
                  <Value {...($search.valueAttrs ?? {})}>
                    {this.renderGridSearchFormGroupDataItem(type, {
                      searchConfig,
                      column,
                      dataIndex,
                      layout,
                      currentTitle,
                    })}
                  </Value>
                ),
                noMatch: $search.renderNoAuthority ? (
                  <Value {...($search.valueAttrs ?? {})}>{$search?.renderNoAuthority?.()}</Value>
                ) : null,
              }),
            });

            if (t.children && Array.isArray(t.children)) {
              loop(t.children);
            }
          });
      };

      loop(this?.getColumns?.(super.getColumns?.() || []) || []);

      const config = searchFormGroupData?.filter?.((t) => !!t.value) || [];

      // 以下是包含sort字段的处理
      const containSort = config
        .filter((t) => 'sort' in t && t.sort !== null && t.sort !== undefined)
        .sort((a, b) => (a.sort as number) - (b.sort as number));

      const noContainSort = config.filter(
        (t) =>
          !('sort' in t) || t.sort === null || t.sort === undefined || typeof t.sort !== 'number',
      );

      containSort.forEach((item) => {
        noContainSort.splice((item.sort as number) - 1, 0, item);
      });

      return noContainSort;
    }

    /**
     * assignSearchConfig
     * @description assign searchConfig
     * @param searchConfig
     * @param column
     */
    assignSearchConfig(searchConfig, column) {
      const defaultSearchConfig = {
        type: 'input',
        // 是否显示
        visible: false,
        // 是否显示在列头上
        showColumnHeader: false,
        // 控件的props
        props: {},
        // TableGridLayout的Label的attrs
        labelAttrs: {},
        // TableGridLayout的Value的attrs
        valueAttrs: {},
        // 权限码
        authority: [],
        // 渲染无权限的UI
        renderNoAuthority: () => null,
        // 如果有此属性，则不用column的dataIndex
        dataIndex: column.dataIndex,
        // 如果有此属性则不用column的title
        title: column.title,
        // dist渲染的组件
        dictName: '',
        // children自定义的渲染
        renderChildren: () => null,
        // 自定义组件的渲染
        render: () => null,
        // 时间区域控件
        startName: '',
        endName: '',
      };

      return {
        ...defaultSearchConfig,
        ...(searchConfig ?? {}),
      };
    }

    /**
     * renderSearchBarCollapseControl
     */
    renderSearchBarCollapseControl() {
      const gridSearchFormGroupParams: any[] = [...this.getGridSearchFormGroupParams()];

      // 如果查询项 > 列数
      if (
        gridSearchFormGroupParams[0][0].data.length > gridSearchFormGroupParams[0][0].columnCount
      ) {
        return super.renderSearchBarCollapseControl();
      }

      return null;
    }

    /**
     * renderSearchForm
     * 渲染Table查询的表单
     * @override
     */
    renderSearchForm() {
      let hasSearch = true;

      if (this.getTableColumnsAll) {
        hasSearch = this.getTableColumnsAll().some((_column) => {
          return (
            '$search' in _column && 'visible' in _column.$search && _column.$search.visible
            // || !('visible' in _column.$search)
          );
        });
      }

      if (hasSearch) {
        // @ts-ignore
        return this.renderGridSearchFormGroup(...this.getGridSearchFormGroupParams());
      } else return null;
    }

    /**
     * renderSearchFormToolBarItems
     * @description 渲染查询表单的工具栏项
     * @return {ReactNode []}
     * @param _defaultItems
     */
    renderSearchFormToolBarItems(_defaultItems) {
      const defaultItems = [...(_defaultItems || [])];

      if (this.hasAdvancedSearch() && this.hasAdvancedSearchPanel) {
        const SearchButtonComponent = (
          <ConditionalRender conditional={!this.props.isShowExpandSearch || this.state.expand}>
            {() =>
              this?.advancedSearchConfig?.renderSearchButton?.(() =>
                this.setState({
                  advancedSearchPanelCollapse: true,
                }),
              ) ?? (
                <Button
                  icon={<FilterOutlined />}
                  type="primary"
                  onClick={() =>
                    this.setState({
                      advancedSearchPanelCollapse: true,
                    })
                  }
                >
                  {Intl.get('advanced_search')}
                </Button>
              )
            }
          </ConditionalRender>
        );

        if (!!this.advancedSearchConfig.insertSearchButton) {
          this.advancedSearchConfig.insertSearchButton(defaultItems, SearchButtonComponent);
        } else {
          const resetIndex = defaultItems.findIndex(
            (t) => '$$typeof' in t && 'key' in t && t.key === 'reset',
          );

          if (resetIndex !== -1) {
            defaultItems.splice(resetIndex + 1, 0, SearchButtonComponent);
          }
        }
      }

      return defaultItems;
    }

    /**
     * renderSearchFormToolBarDefaultPanel
     * @description 渲染查询表单工具栏缺省面板
     * @return {ReactNode}
     */
    renderSearchFormToolBarDefaultPanel() {
      const { expand = false } = this.state;

      if (expand) {
        return null;
      }

      const gridSearchFormGroupParams: any[] = [...this.getGridSearchFormGroupParams()];

      // 如果查询项 > 列数
      if (
        gridSearchFormGroupParams[0][0].data.length > gridSearchFormGroupParams[0][0].columnCount
      ) {
        gridSearchFormGroupParams[0][0].columnCount = 2;

        const layout = gridSearchFormGroupParams[1].layout;

        if (layout === 'horizontal') {
          gridSearchFormGroupParams[0][0].colgroup = [, 'auto', , 'auto'];
        } else if (layout === 'vertical') {
          gridSearchFormGroupParams[0][0].colgroup = ['auto', 'auto'];
        }

        gridSearchFormGroupParams[2].rowCount = 1;
      }

      // @ts-ignore
      return this.renderGridSearchFormGroup(...gridSearchFormGroupParams);
    }

    /***
     * renderSearchFooterItems
     * @param _defaultItems
     * @return {*}
     */
    renderSearchFooterItems(_defaultItems) {
      const defaultItems = [...(_defaultItems || [])];

      return this.renderSearchFooterItemsImpl(defaultItems).map((t) =>
        '$$typeof' in t ? t : t.value,
      );
    }

    /**
     * getSearchFooterItemsEllipsisCount
     * @description 获取SearchFooterItems省略的个数
     * @return {Number}
     */
    getSearchFooterItemsEllipsisCount() {
      return 5;
    }

    /**
     * isSearchFooterItemEllipsesShowOnlyOneAfterCollapsing
     * @description 是否折叠后只显示一个操作按钮
     * @return {boolean}
     */
    isSearchFooterItemEllipsesShowOnlyOneAfterCollapsing() {
      return false;
    }

    /**
     * renderSearchFooterItemsMore
     * @description 渲染renderSearchFooterItems的more
     */
    renderSearchFooterItemsMore() {
      return (
        <Button>
          <EllipsisOutlined />
        </Button>
      );
    }

    /**
     * renderSearchFooterItemsImpl
     * @param defaultItems
     * @return {*}
     */
    renderSearchFooterItemsImpl(defaultItems) {
      let currentDefaultItems = [...defaultItems];

      let searchFooterItemsEllipsisCount = this.getSearchFooterItemsEllipsisCount() ?? 5;
      if (searchFooterItemsEllipsisCount <= 0) {
        searchFooterItemsEllipsisCount = 5;
      }

      const showOnlyOneDisplay = this.isSearchFooterItemEllipsesShowOnlyOneAfterCollapsing();

      if (showOnlyOneDisplay || defaultItems.length >= searchFooterItemsEllipsisCount) {
        const displayEndIndex = showOnlyOneDisplay ? 1 : searchFooterItemsEllipsisCount - 1;
        const ellipseStartIndex = showOnlyOneDisplay ? 1 : searchFooterItemsEllipsisCount - 1;

        if (
          showOnlyOneDisplay ||
          (!!defaultItems.length && defaultItems.length >= searchFooterItemsEllipsisCount)
        ) {
          currentDefaultItems = [
            ...defaultItems.slice(0, displayEndIndex),
            {
              key: 'menu',
              value: (
                <Dropdown
                  key="menu"
                  menu={{
                    items: defaultItems.slice(ellipseStartIndex).map(({ key, value }) => ({
                      key,
                      label: value,
                    })),
                  }}
                >
                  {this.renderSearchFooterItemsMore()}
                </Dropdown>
              ),
            },
          ];
        }
      }

      return [
        ...currentDefaultItems,
        this.renderTableReload && !!this.renderTableReload?.() && (
          <div className={`${_selectorPrefix}-header-item`}>{this.renderTableReload()}</div>
        ),
        this.renderTableDensitySetting && !!this.renderTableDensitySetting?.() && (
          <div className={`${_selectorPrefix}-header-item`}>{this.renderTableDensitySetting()}</div>
        ),
        this.renderColumnSetting && !!this.renderColumnSetting?.() && (
          <div className={`${_selectorPrefix}-header-item`}>{this.renderColumnSetting()}</div>
        ),
        // this.renderExportExcel && !!this.renderExportExcel?.() && (
        //   <div className={`${_selectorPrefix}-headeritem`}>{this.renderExportExcel()}</div>
        // ),
      ].filter((t) => !!t);
    }

    /**
     * renderGridSearchFormGroupDataItem
     * @description 渲染GridSearchForm的查询项
     * @param type
     * @param searchConfig
     * @param column
     * @param dataIndex
     * @param layout
     * @param currentTitle
     */
    renderGridSearchFormGroupDataItem(
      type,
      { searchConfig, column, dataIndex, layout, currentTitle },
    ) {
      const commonProps = {
        prefix:
          layout === 'prefix' ? (
            <>
              {Util.isFunction(currentTitle) ? currentTitle() : currentTitle}
              {this.getSearchLabelSymbol(searchConfig)}
            </>
          ) : null,
      };

      const renderInput = ({ searchConfig, dataIndex }) => {
        const value = this.state[dataIndex];
        const inputKey = `${dataIndex}-${value ?? ''}`;

        return (
          <Input
            key={inputKey}
            {...commonProps}
            defaultValue={value}
            onChange={(e) => this.handleSearchInputChangeDebounced(dataIndex, e.target.value)}
            {...{
              placeholder: searchConfig.title ?? column.title,
              ...(searchConfig.props ?? {}),
            }}
          />
        );
      };
      const renderTextArea = ({ searchConfig, dataIndex }) => {
        const value = this.state[dataIndex];
        const inputKey = `${dataIndex}-${value ?? ''}`;

        return (
          <TextArea
            key={inputKey}
            {...commonProps}
            defaultValue={value}
            onChange={(e) => this.handleSearchInputChangeDebounced(dataIndex, e.target.value)}
            {...{
              placeholder: searchConfig.title ?? column.title,
              ...(searchConfig.props ?? {}),
            }}
          />
        );
      };
      const renderInputNumber = ({ searchConfig, dataIndex }) => {
        const value = this.state[dataIndex];
        const inputKey = `${dataIndex}-${value ?? ''}`;

        return (
          <InputNumber
            key={inputKey}
            {...commonProps}
            defaultValue={value}
            onChange={(v) => this.handleSearchInputChangeDebounced(dataIndex, v)}
            {...{
              placeholder: searchConfig.title ?? column.title,
              ...(searchConfig.props ?? {}),
            }}
          />
        );
      };
      const renderInputNumberDecimal1 = ({ searchConfig, dataIndex }) => {
        const value = this.state[dataIndex];
        const inputKey = `${dataIndex}-${value ?? ''}`;

        return (
          <InputNumberDecimal1
            key={inputKey}
            {...commonProps}
            defaultValue={value}
            onChange={(v) => this.handleSearchInputChangeDebounced(dataIndex, v)}
            {...{
              placeholder: searchConfig.title ?? column.title,
              ...(searchConfig.props ?? {}),
            }}
          />
        );
      };
      const renderInputNegativeNumberDecimal1 = ({ searchConfig, dataIndex }) => {
        const value = this.state[dataIndex];
        const inputKey = `${dataIndex}-${value ?? ''}`;

        return (
          <InputNumberDecimal1.InputNegativeNumberDecimal1
            key={inputKey}
            {...commonProps}
            defaultValue={value}
            onChange={(v) => this.handleSearchInputChangeDebounced(dataIndex, v)}
            {...{
              placeholder: searchConfig.title ?? column.title,
              ...(searchConfig.props ?? {}),
            }}
          />
        );
      };
      const renderInputPositiveNumberDecimal1 = ({ searchConfig, dataIndex }) => {
        const value = this.state[dataIndex];
        const inputKey = `${dataIndex}-${value ?? ''}`;

        return (
          <InputNumberDecimal1.InputPositiveNumberDecimal1
            key={inputKey}
            {...commonProps}
            defaultValue={value}
            onChange={(v) => this.handleSearchInputChangeDebounced(dataIndex, v)}
            {...{
              placeholder: searchConfig.title ?? column.title,
              ...(searchConfig.props ?? {}),
            }}
          />
        );
      };
      const renderInputNumberDecimal2 = ({ searchConfig, dataIndex }) => {
        const value = this.state[dataIndex];
        const inputKey = `${dataIndex}-${value ?? ''}`;

        return (
          <InputNumberDecimal2
            key={inputKey}
            {...commonProps}
            defaultValue={value}
            onChange={(v) => this.handleSearchInputChangeDebounced(dataIndex, v)}
            {...{
              placeholder: searchConfig.title ?? column.title,
              ...(searchConfig.props ?? {}),
            }}
          />
        );
      };
      const renderInputNegativeNumberDecimal2 = ({ searchConfig, dataIndex }) => {
        const value = this.state[dataIndex];
        const inputKey = `${dataIndex}-${value ?? ''}`;

        return (
          <InputNumberDecimal2.InputNegativeNumberDecimal2
            key={inputKey}
            {...commonProps}
            defaultValue={value}
            onChange={(v) => this.handleSearchInputChangeDebounced(dataIndex, v)}
            {...{
              placeholder: searchConfig.title ?? column.title,
              ...(searchConfig.props ?? {}),
            }}
          />
        );
      };
      const renderInputPositiveNumberDecimal2 = ({ searchConfig, dataIndex }) => {
        const value = this.state[dataIndex];
        const inputKey = `${dataIndex}-${value ?? ''}`;

        return (
          <InputNumberDecimal2.InputPositiveNumberDecimal2
            key={inputKey}
            {...commonProps}
            defaultValue={value}
            onChange={(v) => this.handleSearchInputChangeDebounced(dataIndex, v)}
            {...{
              placeholder: searchConfig.title ?? column.title,
              ...(searchConfig.props ?? {}),
            }}
          />
        );
      };
      const renderInputNumberInteger = ({ searchConfig, dataIndex }) => {
        const value = this.state[dataIndex];
        const inputKey = `${dataIndex}-${value ?? ''}`;

        return (
          <InputNumberInteger
            key={inputKey}
            {...commonProps}
            defaultValue={value}
            onChange={(v) => this.handleSearchInputChangeDebounced(dataIndex, v)}
            {...{
              placeholder: searchConfig.title ?? column.title,
              ...(searchConfig.props ?? {}),
            }}
          />
        );
      };
      const renderInputNegativeNumberInteger = ({ searchConfig, dataIndex }) => {
        const value = this.state[dataIndex];
        const inputKey = `${dataIndex}-${value ?? ''}`;

        return (
          <InputNumberInteger.InputNegativeNumberInteger
            key={inputKey}
            {...commonProps}
            defaultValue={value}
            onChange={(v) => this.handleSearchInputChangeDebounced(dataIndex, v)}
            {...{
              placeholder: searchConfig.title ?? column.title,
              ...(searchConfig.props ?? {}),
            }}
          />
        );
      };
      const renderInputPositiveNumberInteger = ({ searchConfig, dataIndex }) => {
        const value = this.state[dataIndex];
        const inputKey = `${dataIndex}-${value ?? ''}`;

        return (
          <InputNumberInteger.InputPositiveNumberInteger
            key={inputKey}
            {...commonProps}
            defaultValue={value}
            onChange={(v) => this.handleSearchInputChangeDebounced(dataIndex, v)}
            {...{
              placeholder: searchConfig.title ?? column.title,
              ...(searchConfig.props ?? {}),
            }}
          />
        );
      };
      const renderDatePicker = ({ searchConfig, dataIndex }) => {
        const value = this.state[dataIndex];
        const inputKey = `${dataIndex}-${value ?? ''}`;

        return (
          <DatePicker
            key={inputKey}
            {...commonProps}
            defaultValue={value}
            onChange={(d) => this.handleSearchInputChangeDebounced(dataIndex, d ? d : null)}
            {...{
              ...(searchConfig.props ?? {}),
            }}
          />
        );
      };
      const renderTimePicker = ({ searchConfig, dataIndex }) => {
        const value = this.state[dataIndex];
        const inputKey = `${dataIndex}-${value ?? ''}`;

        return (
          <TimePicker
            key={inputKey}
            {...commonProps}
            defaultValue={value}
            onChange={(d) => this.handleSearchInputChangeDebounced(dataIndex, d ? d : null)}
            {...{
              ...(searchConfig.props ?? {}),
            }}
          />
        );
      };
      const renderRangePicker = ({ searchConfig }) => {
        const { startName, endName } = searchConfig;

        const startValue = this.state[startName];
        const endValue = this.state[endName];
        const inputKey = `${startName}-${startValue ?? ''}-${endName}-${endValue ?? ''}`;

        return (
          <RangePicker
            key={inputKey}
            {...commonProps}
            defaultValue={[startValue, endValue]}
            onChange={(values) =>
              this.handleSearchRangeChangeDebounced([startName, endName], values)
            }
            {...{
              ...(searchConfig.props ?? {}),
            }}
          />
        );
      };
      const renderSlider = ({ searchConfig, dataIndex }) => {
        const value = this.state[dataIndex];
        const inputKey = `${dataIndex}-${value ?? ''}`;

        return (
          <Slider
            key={inputKey}
            {...commonProps}
            defaultValue={value}
            onChange={(v) => this.handleSearchInputChangeDebounced(dataIndex, v)}
            {...{
              ...(searchConfig.props ?? {}),
            }}
          />
        );
      };
      const renderSliderRange = ({ searchConfig }) => {
        const value = this.state[dataIndex];
        const inputKey = `${dataIndex}-${Array.isArray(value) ? value.join('-') : value ?? ''}`;

        return (
          <Slider
            key={inputKey}
            {...commonProps}
            range
            defaultValue={value}
            onChange={(v) => this.handleSearchInputChangeDebounced(dataIndex, v)}
            {...{
              ...(searchConfig.props ?? {}),
            }}
          />
        );
      };
      const renderRate = ({ searchConfig }) => {
        const value = this.state[dataIndex];
        const inputKey = `${dataIndex}-${value ?? ''}`;

        return (
          <Rate
            key={inputKey}
            {...commonProps}
            defaultValue={value}
            onChange={(v) => this.handleSearchInputChangeDebounced(dataIndex, v)}
            {...{
              ...(searchConfig.props ?? {}),
            }}
          />
        );
      };
      const renderSwitch = ({ searchConfig }) => {
        const value = this.state[dataIndex];
        const inputKey = `${dataIndex}-${value ?? ''}`;

        return (
          <Switch
            key={inputKey}
            {...commonProps}
            defaultChecked={!!value}
            onChange={(checked) => this.handleSearchInputChangeDebounced(dataIndex, checked)}
            {...{
              ...(searchConfig.props ?? {}),
            }}
          />
        );
      };
      const renderColorPicker = ({ searchConfig }) => {
        const value = this.state[dataIndex];
        const inputKey = `${dataIndex}-${value ?? ''}`;

        return (
          <ColorPicker
            key={inputKey}
            {...commonProps}
            defaultValue={value}
            onChange={(v) => this.handleSearchInputChangeDebounced(dataIndex, v)}
            {...{
              ...(searchConfig.props ?? {}),
            }}
          />
        );
      };
      const renderCustom = ({ searchConfig, column, dataIndex }) => {
        return searchConfig?.render?.({ searchConfig, column, dataIndex, layout, currentTitle });
      };
      const renderDict = ({ searchConfig, column, dataIndex }) => {
        let Component = this?.props?.FieldGeneratorToDict?.Components?.[searchConfig.dictName];

        if (!Component) return null;

        if ('searchFieldGeneratorProps' in searchConfig) {
          Component = Component(searchConfig.searchFieldGeneratorProps);
        }

        if (!Component) return null;

        // popUp控件的缺省props
        const popUpDefaultProps = {
          dropdownStyle: {
            zIndex: 1051,
          },
          popupStyle: {
            zIndex: 1051,
          },
        };

        // if (searchConfig.dictName.indexOf('CustomFormItem') !== -1) {
        //   return (
        //     <Component
        //       value={this.state[dataIndex]}
        //       onChange={(e) => this.onSelectChange(dataIndex, e)}
        //       {...Object.assign(popUpDefaultProps, searchConfig.props ?? {})}
        //     >
        //       {(data) => searchConfig?.renderChildren?.(data)}
        //     </Component>
        //   );
        // }

        return (
          <Component
            {...commonProps}
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...Object.assign(
              {
                placeholder: searchConfig.title ?? column.title,
              },
              popUpDefaultProps,
              searchConfig.props ?? {},
            )}
          />
        );
      };

      const typeMap = new Map<string, (params: any) => ReactNode>([
        // ['select', renderSelect],
        // ['multiSelect', renderMultiSelect],
        // ['checkAllMultiSelect', renderCheckAllMultiSelect],
        // ['autoCompleteSelect', renderAutoCompleteSelect],
        // ['autoCompleteSelectMulti', renderAutoCompleteSelectMulti],
        // ['autoCompleteSelectCheckAllMulti', renderAutoCompleteSelectCheckAllMulti],
        // ['radioHorizontal', renderRadioHorizontal],
        // ['radioButton', renderRadioButton],
        // ['radioSelect', renderRadioSelect],
        // ['radioCustom', renderRadioCustom],
        // ['checkBoxHorizontal', renderCheckBoxHorizontal],
        // ['checkBoxCheckAllHorizontal', renderCheckBoxCheckAllHorizontal],
        // ['checkboxSelect', renderCheckboxSelect],
        // ['checkBoxCheckAllSelect', renderCheckBoxCheckAllSelect],
        // ['checkBoxCustom', renderCheckBoxCustom],
        // ['checkBoxCheckAllCustom', renderCheckBoxCheckAllCustom],
        // ['transferSelect', renderTransferSelect],
        // ['tableSelect', renderTableSelect],
        // ['tableMultiSelect', renderTableMultiSelect],
        // ['tablePagingSelect', renderTablePagingSelect],
        // ['tablePagingMultiSelect', renderTablePagingMultiSelect],
        // ['listSelect', renderListSelect],
        // ['listMultiSelect', renderListMultiSelect],
        // ['listPagingSelect', renderListPagingSelect],
        // ['listPagingMultiSelect', renderListPagingMultiSelect],
        // ['treeSelect', renderTreeSelect],
        // ['treeMultiSelect', renderTreeMultiSelect],
        // ['treeSelectLeaf', renderTreeSelectLeaf],
        // ['treeMultiSelectLeaf', renderTreeMultiSelectLeaf],
        // ['cascaderSelect', renderCascaderSelect],
        // ['cascaderMultiSelect', renderCascaderMultiSelect],
        // ['cascaderSelectLeaf', renderCascaderSelectLeaf],
        // ['cascaderMultiSelectLeaf', renderCascaderMultiSelectLeaf],
        ['dict', renderDict],
        ['custom', renderCustom],
        ['input', renderInput],
        ['textArea', renderTextArea],
        ['inputNumber', renderInputNumber],
        ['inputNumberDecimal1', renderInputNumberDecimal1],
        ['inputNegativeNumberDecimal1', renderInputNegativeNumberDecimal1],
        ['inputPositiveNumberDecimal1', renderInputPositiveNumberDecimal1],
        ['inputNumberDecimal2', renderInputNumberDecimal2],
        ['inputNegativeNumberDecimal2', renderInputNegativeNumberDecimal2],
        ['inputPositiveNumberDecimal2', renderInputPositiveNumberDecimal2],
        ['inputNumberInteger', renderInputNumberInteger],
        ['inputNegativeNumberInteger', renderInputNegativeNumberInteger],
        ['inputPositiveNumberInteger', renderInputPositiveNumberInteger],
        ['datePicker', renderDatePicker],
        ['timePicker', renderTimePicker],
        ['rangePicker', renderRangePicker],
        ['slider', renderSlider],
        ['sliderRange', renderSliderRange],
        ['rate', renderRate],
        ['switch', renderSwitch],
        ['colorPicker', renderColorPicker],
      ]);

      return typeMap.get(type)?.({
        searchConfig,
        column,
        dataIndex,
      });
    }

    /**
     * renderGridSearchFormGroup
     * @param group - TableGridLayout的分组数据
     * @param props - TableGridLayout配置
     * @param advancedSearchConfig - 高级搜索条件
     * @return {JSX.Element}
     */
    renderGridSearchFormGroup(group, props, advancedSearchConfig) {
      const defaultProps = merge(
        {
          layout: 'horizontal',
          density: 'middle',
        },
        props ?? {},
      );

      // 如果用户实现了onAfterClose这个方法
      if (advancedSearchConfig?.advancedSearch?.onAfterClose) {
        const onAfterClose = advancedSearchConfig.advancedSearch.onAfterClose;

        advancedSearchConfig.advancedSearch.onAfterClose = () => {
          onAfterClose();

          this.setState({
            advancedSearchPanelCollapse: false,
          });
        };
      }

      // 配置
      this.advancedSearchConfig = merge(
        {
          // 显示少行 'auto' | number
          // auto - 为自动
          // number - 指定行数 超出行会在高级筛选中显示
          rowCount: 'auto',
          // 剩余的条件的显示方式 'all' | 'remaining'
          // all - 全部显示
          // remaining - 显示剩余
          showStrategy: 'remaining',
          // 渲染高级查询面板的标题
          renderTitleLabel: null,
          // 渲染高级查询面板的Collapse
          renderCollapse: null,
          // 渲染高级查询面板显示的按钮
          renderSearchButton: null,
          // 高级查询面板查询按钮的插入位置 (defaultItems) => {}
          insertSearchButton: null,
          // 高级搜索
          advancedSearch: {
            // 外围样式
            className: '',
            // 外围style
            style: {},
            // 宽度
            width: '60%',
            // 是否有遮罩
            mask: true,
            // 层级
            zIndex: 19999,
            // 过度时间
            time: 300,
            // 方向
            direction: 'right',
            // 默认不展开
            collapse: true,
            onBeforeShow: () => {},
            onBeforeClose: () => {},
            onAfterShow: () => {},
            onAfterClose: () => {
              this.setState({
                advancedSearchPanelCollapse: false,
              });
            },
            getPopupContainer: () => document.body,
          },
        },
        advancedSearchConfig ?? {},
      );

      // 标准的查询面板
      const StandardSearchPanel = (
        <ConfigProvider.Context.Consumer>
          {({ media }) => renderGridSearchFormGroup(group, defaultProps, media)}
        </ConfigProvider.Context.Consumer>
      );

      if (
        (this.advancedSearchConfig && this.advancedSearchConfig.rowCount !== 'auto') ||
        (this.advancedSearchConfig &&
          !('rowCount' in this.advancedSearchConfig) &&
          this.hasAdvancedSearch()) ||
        (this.advancedSearchConfig &&
          'rowCount' in this.advancedSearchConfig &&
          !this.advancedSearchConfig.rowCount) ||
        (!this.advancedSearchConfig && this.hasAdvancedSearch())
      ) {
        const { rowCount, detail } = TableGridLayout.getRenderDetail(group, defaultProps);

        if (rowCount > this.advancedSearchConfig.rowCount) {
          // 显示的组数据
          const gData: AdvancedSearchPanelGroupData[] = [];

          // 剩余的组数据
          const remainingGData: AdvancedSearchPanelGroupData[] = [];

          // 需要的行数
          let needRowCount = this.advancedSearchConfig.rowCount;

          let _gIndex = 0;

          // needCount 5
          // g1 2
          // g2 2
          // g3 10
          while (needRowCount !== 0) {
            const groupData = group[_gIndex];
            const groupDetail = detail[_gIndex];

            if (groupDetail.rowCount <= needRowCount) {
              gData.push({ ...groupData });

              needRowCount = needRowCount - groupDetail.rowCount;
            } else {
              // 截取
              const details = groupDetail.detail.slice(0, needRowCount);

              gData.push({
                ...groupData,
                data: groupData.data.slice(
                  details[0].startIndex,
                  details[details.length - 1].endIndex + 1,
                ),
              });

              remainingGData.push({
                ...groupData,
                data: groupData.data.slice(details[details.length - 1].endIndex + 1),
              });

              needRowCount = 0;
            }

            _gIndex = _gIndex + 1;
          }

          for (let i = _gIndex; i < group.length; i++) {
            remainingGData.push({ ...group[i] });
          }

          this.hasAdvancedSearchPanel = true;
          this.advancedSearchConfig.advancedSearch.collapse =
            this.state.advancedSearchPanelCollapse;

          return (
            <div className={`${_selectorPrefix}-grid-search-form-group-wrap`}>
              <ConfigProvider.Context.Consumer>
                {({ media }) =>
                  renderGridSearchFormGroup(
                    // @ts-ignore
                    gData,
                    defaultProps,
                    media,
                  )
                }
              </ConfigProvider.Context.Consumer>
              <AdvancedSearchPanel
                groupData={group}
                tableGridLayoutConfig={defaultProps}
                remainingGroupData={remainingGData}
                advancedSearchConfig={this.advancedSearchConfig}
                onSearch={() =>
                  new Promise<void>((resolve) => {
                    // this.setState(
                    //   {
                    //     page: 1,
                    //   },
                    //   () => {
                    //     this.onSearch().then(() => resolve());
                    //   },
                    // );
                    this.search().then(() => resolve());
                  })
                }
                onReset={() => this.onClear()}
                onCollapse={(collapse) =>
                  this.setState({
                    advancedSearchPanelCollapse: collapse,
                  })
                }
              >
                {(args) => this.renderAdvancedSearchPanel(args)}
              </AdvancedSearchPanel>
            </div>
          );
        }
      }

      this.hasAdvancedSearchPanel = false;

      return (
        <div className={`${_selectorPrefix}-grid-search-form-group-wrap`}>
          {StandardSearchPanel}
        </div>
      );
    }

    renderAdvancedSearchPanel(params) {
      return null;
    }

    /**
     * renderOptionColumn
     * @description 渲染配置列
     * @param defaultItems
     * @param params
     * @return {*}
     */
    renderOptionColumn(defaultItems, params) {
      return defaultItems.map((t) => t.value).filter((t) => !!t);
    }
  };
