import { Button, Input, InputNumber, Rate, Slider, Switch } from 'antd';
import merge from 'lodash/merge';
import moment from 'moment';
import omit from 'omit.js';
import qs from 'qs';
import React, { ReactNode } from 'react';

import { FilterOutlined } from '@ant-design/icons';
import AntdFormItem from '@baifendian/adhere-ui-antdformitem';
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';
import TableGridLayout from '@baifendian/adhere-ui-tablegridlayout';
import TableHeadSearch from '@baifendian/adhere-ui-tableheadsearch';
import Intl from '@baifendian/adhere-util-intl';
import Resource from '@baifendian/adhere-util-resource';
import Validator from '@baifendian/adhere-util-validator';

import AdvancedSearchPanel from './Extension/AdvancedSearchPanel';
import { selectorPrefix } from './SearchTable';
import { AdvancedSearchPanelGroupData } from './types';

const {
  FormItemGeneratorToDict,
  AntFormItemNormalize: {
    DatePicker,
    InputNumberDecimal1,
    InputNumberDecimal2,
    InputNumberInteger,
    RangePicker,
    TimePicker,
  },
} = AntdFormItem;
const { renderGridSearchFormGroup, Label, Value } = TableGridLayout;
const _selectorPrefix = `${selectorPrefix}-protable`;

export default (SuperClass, searchAndPaginParamsMemo) =>
  class extends SuperClass {
    constructor(props) {
      super(props);

      // 地址栏的pathname
      this.pathname = typeof window !== 'undefined' ? this.getPathName() : '';

      // 获取浏览器地址栏上默认的searchQuery和分页参数
      const defaultSearchAndPaginParams = this.initSearchAndPaginParams();

      // state create
      this.state = {
        ...this.state,
        ...defaultSearchAndPaginParams.search,
        page: defaultSearchAndPaginParams.page,
        limit: defaultSearchAndPaginParams.limit,
        searchParams: {
          ...this.state.searchParams,
          ...defaultSearchAndPaginParams.search,
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
    }

    componentWillUnmount() {
      super.componentWillUnmount && super.componentWillUnmount();

      if (!('openSearchParamsMemory' in this.props)) {
        // 卸载的时候处理查询和分页参数的缓存
        this.unMountSearchAndPaginParamsDeal();
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
      if (this.hasAdvancedSearchPanel && this.state.expand) {
        this.setState({
          advancedSearchPanelCollapse: false,
        });
      }
    }

    /**
     * unMountSearchAndPaginParamsDeal
     * @description - 卸载的时候处理查询和分页参数的缓存
     */
    unMountSearchAndPaginParamsDeal() {
      // 查询条件
      const searchParams = this.state.searchParams || {};

      const pathname = this.pathname;

      const componentId = this.getComponentId();

      if (searchAndPaginParamsMemo.isEmpty()) {
        searchAndPaginParamsMemo.add(pathname, {
          [componentId]: {
            search: searchParams,
            page: this.state.page,
            limit: this.state.limit,
          },
        });
      } else {
        const item = searchAndPaginParamsMemo.findByPath(pathname);

        if (item) {
          item.components[componentId].search = searchParams;
          item.components[componentId].page = this.state.page;
          item.components[componentId].limit = this.state.limit;
        } else {
          searchAndPaginParamsMemo.add(pathname, {
            [componentId]: {
              search: searchParams,
              page: this.state.page,
              limit: this.state.limit,
            },
          });
        }
      }

      //{
      // key: adhere-ui-searchtable
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
     * initSearchAndPaginParams
     * @description - 初始化组件的查询和分页参数
     * @param queryReduce 查询参数的处理
     */
    initSearchAndPaginParams(queryReduce?: (key: string, v: any) => any) {
      const query = qs.parse(this.getSearch(), { ignoreQueryPrefix: true });

      const queryParams = {};

      Object.keys(query).forEach((key) => {
        queryParams[key] = queryReduce ? queryReduce(key, query[key]) : query[key];
      });

      if (searchAndPaginParamsMemo.isEmpty()) {
        return {
          search: { ...queryParams },
          page: 1,
          limit: this.getLimit(),
        };
      }

      const item = searchAndPaginParamsMemo.findByPath(this.pathname);

      const componentId = this.getComponentId();

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
    hasAdvancedSearch() {
      return true;
    }

    /**
     * hasNumberColumnFixed
     * @description 序号列是否固定
     * @returns {boolean}
     */
    hasNumberColumnFixed() {
      return true;
    }

    /**
     * hasOptionColumnFixed
     * @description 操作列是否固定
     * @returns {boolean}
     */
    hasOptionColumnFixed() {
      return true;
    }

    /**
     * getPathName
     * @description 不同路由模式下获取pathname的方法
     */
    getPathName() {
      return window.location.pathname;
    }

    /**
     * getSearch
     * @description 不同路由模式下获取search的方法
     */
    getSearch() {
      return window.location.search;
    }

    /**
     * getParams
     * @description 根据列设置返回查询参数
     * @default params
     */
    getParams() {
      const params = {};

      const loop = (columns) => {
        columns.reduce((params, column) => {
          const { $search, children } = column;
          const searchConfig = $search || {};
          const dataIndex = searchConfig.dataIndex || column.dataIndex;

          if (
            [this.getOptionsColumnDataIndex(), this.getLinkColumnDataIndex(), '_number'].includes(
              dataIndex,
            )
          ) {
            return params;
          }

          if (searchConfig.type === 'rangePicker') {
            if (searchConfig.startName) params[searchConfig.startName] = null;
            if (searchConfig.endName) params[searchConfig.endName] = null;
          } else if (['datePicker', 'timePicker'].includes(searchConfig.type)) {
            params[dataIndex] = null;
          } else {
            params[dataIndex] = undefined;
          }

          if (children && Array.isArray(children)) {
            loop(children);
          }

          return params;
        }, params);
      };

      loop(this.getTableColumns());

      return params;
    }

    /**
     * getDateState
     * @description 获取时间查询字段，将默认值修改为null或moment对象
     * @param state
     * @return {{}}
     */
    getDateState(state) {
      // null | null字符串 | 时间字符串
      const dateKeys = Object.keys(state).filter(
        (key) =>
          state[key] === null ||
          state[key] === 'null' ||
          Validator.isDate(state[key], {
            format: 'YYYY-MM-DD',
          }),
      );

      const dateObj = {};

      dateKeys.forEach((key) => {
        dateObj[key] = state[key] === null || state[key] === 'null' ? null : moment(state[key]);
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
    getLimit() {
      return 10;
    }

    /**
     * getFetchDataParams
     * @description 获取列表接口查询参数
     */
    getFetchDataParams() {
      const { searchParams } = this.state;

      const dateSearchParams = {};

      const rangeDateKeys = Object.keys(searchParams).filter(
        (key) =>
          ['start', 'Start'].some((t) => key.indexOf(t) !== -1) ||
          ['end', 'End'].some((t) => key.indexOf(t) !== -1),
      );

      rangeDateKeys.forEach((key) => {
        dateSearchParams[key] = searchParams[key]
          ? `${searchParams[key].format(Resource.Dict.value.ResourceMomentFormat10.value())} ${
              ['start', 'Start'].some((t) => key.indexOf(t) !== -1)
                ? '00:00:00'
                : ['end', 'End'].some((t) => key.indexOf(t) !== -1)
                ? '23:59:59'
                : ''
            }`.trim()
          : null;
      });

      const dateKeys = Object.keys(searchParams).filter(
        (key) => !(key in dateSearchParams) && searchParams[key] instanceof moment,
      );

      dateKeys.forEach((key) => {
        dateSearchParams[key] = searchParams[key]
          ? searchParams[key].format(Resource.Dict.value.ResourceMomentFormat10.value()).trim()
          : null;
      });

      return dateSearchParams;
    }

    /**
     * getColumns
     * @param columns
     * @return {*}
     */
    getColumns(columns) {
      return (columns || super.getColumns()).map((t) => ({
        // ellipsis: 'ellipsis' in t ? t.ellipsis : true,
        ...t,
      }));
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
            align: ![this.getLinkColumnDataIndex() || '_linkColumn'].includes(t.dataIndex)
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
                !['_number', this.getOptionsColumnDataIndex()].includes(dataIndex) &&
                showColumnHeader
              ) {
                column = {
                  ...column,
                  ...TableHeadSearch(({ confirm }) => {
                    const type = searchConfig.type;

                    return (
                      <div className={`${_selectorPrefix}-headersearchwrap`}>
                        <div className={`${_selectorPrefix}-headersearchwrap-main`}>
                          {this.renderGridSearchFormGroupDataItem(type, {
                            searchConfig,
                            column,
                            dataIndex,
                          })}
                        </div>

                        <div className={`${_selectorPrefix}-headersearchwrap-footer`}>
                          <Button
                            size="small"
                            onClick={() => {
                              let state = {};

                              if (type === 'rangePicker') {
                                if (searchConfig.startName) state[searchConfig.startName] = null;
                                if (searchConfig.endName) state[searchConfig.endName] = null;
                              } else {
                                state[dataIndex] = undefined;
                              }

                              this.setState(state, () => this.onSearch().then(() => confirm()));
                            }}
                          >
                            {Intl.v('重置')}
                          </Button>

                          <Button
                            size="small"
                            type="primary"
                            onClick={() => this.onSearch().then(() => confirm())}
                          >
                            {Intl.v('确定')}
                          </Button>
                        </div>
                      </div>
                    );
                  }),
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
      );
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

          return Intl.v(`当前 {page}-{pageSize}/共 {total}条`, {
            page: start,
            pageSize: end,
            total,
          });
        },
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
            columnCount: 3,
            colgroup: [, 'auto', , 'auto', , 'auto'],
            data: this.getGridSearchFormGroupDataByColumnConfig(),
          },
        ],
        {},
        {
          rowCount: 1,
          // renderTitleLabel: () => <div>搜索</div>,
          // // 渲染高级查询面板的Collapse
          // renderCollapse: (collapse) => <div>收起</div>,
          // // 渲染高级查询面板显示的按钮
          // renderSearchButton: (callback) => <div onClick={() => callback()}>高级搜索</div>,
          // // 高级查询面板查询按钮的插入位置 (defaultItems) => {}
          // insertSearchButton: null,
        },
      ];
    }

    /**
     * getGridSearchFormGroupDataByColumnConfig
     * @description 通过列设置获取gridSearchFormGroup的Data数据
     * @return Array
     */
    getGridSearchFormGroupDataByColumnConfig() {
      let searchFormGroupData: {
        key: number;
        label: ReactNode;
        value: ReactNode | null;
      }[] = [];

      const loop = (columns) => {
        columns
          .filter((t) => '$search' in t && !!t.$search.visible)
          .forEach((t) => {
            const { $search, ...column } = t;

            const searchConfig = this.assignSearchConfig($search, column);
            const type = searchConfig?.type || 'input';
            const dataIndex = searchConfig.dataIndex || t.dataIndex;
            const title = $search.title || t.title;

            searchFormGroupData.push({
              key: dataIndex,
              label: <Label {...($search.labelAttrs || {})}>{title}：</Label>,
              value: ConditionalRender.conditionalRender({
                conditional: this.hasAuthority ? this.hasAuthority?.(searchConfig.authority) : true,
                /*Dict.value.SystemAuthoritySwitch.value
                                              ? Util.isAuthority(searchConfig.authority, this.authorized)
                                              : true*/ match: (
                  <Value {...($search.valueAttrs || {})}>
                    {this.renderGridSearchFormGroupDataItem(type, {
                      searchConfig,
                      column,
                      dataIndex,
                    })}
                  </Value>
                ),
                noMatch: $search.renderNoAuthority ? (
                  <Value {...($search.valueAttrs || {})}>{$search?.renderNoAuthority?.()}</Value>
                ) : null,
              }),
            });

            if (t.children && Array.isArray(t.children)) {
              loop(t.children);
            }
          });
      };

      loop(this.getColumns(super.getColumns()));

      return searchFormGroupData.filter((t) => !!t.value);
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
        visible: true,
        // 是否显示在列头上
        showColumnHeader: true,
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
        ...(searchConfig || {}),
      };
    }

    /**
     * renderSearchForm
     * 渲染Table查询的表单
     * @override
     */
    renderSearchForm() {
      // @ts-ignore
      return this.renderGridSearchFormGroup(...this.getGridSearchFormGroupParams());
    }

    /***
     * renderSearchFooterItems
     * @param _defaultItems
     * @return {*}
     */
    renderSearchFooterItems(_defaultItems) {
      const defaultItems = [...(_defaultItems || [])];

      if (this.hasAdvancedSearchPanel && this.state.expand) {
        const SearchButtonComponent = (
          <ConditionalRender
            conditional={!this.advancedSearchConfig.renderSearchButton}
            noMatch={() =>
              this.advancedSearchConfig.renderSearchButton(() =>
                this.setState({
                  advancedSearchPanelCollapse: true,
                }),
              )
            }
          >
            {() => (
              <Button
                icon={<FilterOutlined />}
                type="primary"
                onClick={() =>
                  this.setState({
                    advancedSearchPanelCollapse: true,
                  })
                }
              >
                {Intl.v('高级搜索')}
              </Button>
            )}
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

      return this.renderSearchFooterItemsImpl(defaultItems).map((t) =>
        '$$typeof' in t ? t : t.value,
      );
    }

    /**
     * renderSearchFooterItemsImpl
     * @param defaultItems
     * @return {*}
     */
    renderSearchFooterItemsImpl(defaultItems) {
      return [
        ...defaultItems,
        <div className={`${_selectorPrefix}-headeritem`}>{this.renderTableDensitySetting()}</div>,
        <div className={`${_selectorPrefix}-headeritem`}>{this.renderColumnSetting()}</div>,
      ];
    }

    /**
     * renderGridSearchFormGroupDataItem
     * @description 渲染GridSearchForm的查询项
     * @param type
     * @param searchConfig
     * @param column
     * @param dataIndex
     */
    renderGridSearchFormGroupDataItem(type, { searchConfig, column, dataIndex }) {
      const renderInput = ({ searchConfig, dataIndex }) => {
        return (
          <Input
            value={this.state[dataIndex]}
            onChange={(e) => this.onInputChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          />
        );
      };
      const renderTextArea = ({ searchConfig, dataIndex }) => {
        return (
          <Input.TextArea
            value={this.state[dataIndex]}
            onChange={(e) => this.onInputChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          />
        );
      };
      const renderInputNumber = ({ searchConfig, dataIndex }) => {
        return (
          <InputNumber
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          />
        );
      };
      const renderInputNumberDecimal1 = ({ searchConfig, dataIndex }) => {
        return (
          <InputNumberDecimal1
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          />
        );
      };
      const renderInputNumberDecimal2 = ({ searchConfig, dataIndex }) => {
        return (
          <InputNumberDecimal2
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          />
        );
      };
      const renderInputNumberInteger = ({ searchConfig, dataIndex }) => {
        return (
          <InputNumberInteger
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          />
        );
      };

      const renderSelect = ({ searchConfig, dataIndex }) => {
        const Component = FormItemGeneratorToDict[`${searchConfig.dictName}FormItem`];

        return (
          <Component
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          />
        );
      };
      const renderMultiSelect = ({ searchConfig, dataIndex }) => {
        const Component = FormItemGeneratorToDict[`${searchConfig.dictName}MulitFormItem`];

        return (
          <Component
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          />
        );
      };
      const renderCheckAllMultiSelect = ({ searchConfig, dataIndex }) => {
        const Component = FormItemGeneratorToDict[`${searchConfig.dictName}CheckAllMulitFormItem`];

        return (
          <Component
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          />
        );
      };

      const renderAutoCompleteSelect = ({ searchConfig, dataIndex }) => {
        const Component = FormItemGeneratorToDict[`${searchConfig.dictName}FormItem`];

        return (
          <Component
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          />
        );
      };
      const renderAutoCompleteSelectMulti = ({ searchConfig, dataIndex }) => {
        const Component = FormItemGeneratorToDict[`${searchConfig.dictName}MulitFormItem`];

        return (
          <Component
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          />
        );
      };
      const renderAutoCompleteSelectCheckAllMulti = ({ searchConfig, dataIndex }) => {
        const Component = FormItemGeneratorToDict[`${searchConfig.dictName}CheckAllMulitFormItem`];

        return (
          <Component
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          />
        );
      };

      const renderRadioHorizontal = ({ searchConfig, dataIndex }) => {
        const Component = FormItemGeneratorToDict[`${searchConfig.dictName}HorizontalFormItem`];

        return (
          <Component
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          />
        );
      };
      const renderRadioButton = ({ searchConfig, dataIndex }) => {
        const Component = FormItemGeneratorToDict[`${searchConfig.dictName}ButtonFormItem`];

        return (
          <Component
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          />
        );
      };
      const renderRadioSelect = ({ searchConfig, dataIndex }) => {
        const Component = FormItemGeneratorToDict[`${searchConfig.dictName}SelectFormItem`];

        return (
          <Component
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          />
        );
      };
      const renderRadioCustom = ({ searchConfig, dataIndex }) => {
        const Component = FormItemGeneratorToDict[`${searchConfig.dictName}CustomFormItem`];

        return (
          <Component
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          >
            {(data) => searchConfig?.renderChildren?.(data)}
          </Component>
        );
      };

      const renderCheckBoxHorizontal = ({ searchConfig, dataIndex }) => {
        const Component = FormItemGeneratorToDict[`${searchConfig.dictName}HorizontalFormItem`];

        return (
          <Component
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          />
        );
      };
      const renderCheckBoxCheckAllHorizontal = ({ searchConfig, dataIndex }) => {
        const Component =
          FormItemGeneratorToDict[`${searchConfig.dictName}CheckAllHorizontalFormItem`];

        return (
          <Component
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          />
        );
      };
      const renderCheckboxSelect = ({ searchConfig, dataIndex }) => {
        const Component = FormItemGeneratorToDict[`${searchConfig.dictName}SelectFormItem`];

        return (
          <Component
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          />
        );
      };
      const renderCheckBoxCheckAllSelect = ({ searchConfig, dataIndex }) => {
        const Component = FormItemGeneratorToDict[`${searchConfig.dictName}CheckAllSelectFormItem`];

        return (
          <Component
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          />
        );
      };
      const renderCheckBoxCustom = ({ searchConfig, dataIndex }) => {
        const Component = FormItemGeneratorToDict[`${searchConfig.dictName}CustomFormItem`];

        return (
          <Component
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          >
            {(dataSource) => searchConfig?.renderChildren?.(dataSource)}
          </Component>
        );
      };
      const renderCheckBoxCheckAllCustom = ({ searchConfig, dataIndex }) => {
        const Component = FormItemGeneratorToDict[`${searchConfig.dictName}CheckAllCustomFormItem`];

        return (
          <Component
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          >
            {(dataSource) => searchConfig?.renderChildren?.(dataSource)}
          </Component>
        );
      };

      const renderTransferSelect = ({ searchConfig, dataIndex }) => {
        const Component = FormItemGeneratorToDict[`${searchConfig.dictName}SelectFormItem`];

        return (
          <Component
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          />
        );
      };

      const renderTableSelect = ({ searchConfig, dataIndex }) => {
        const Component = FormItemGeneratorToDict[`${searchConfig.dictName}SelectFormItem`];

        return (
          <Component
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          />
        );
      };
      const renderTableMultiSelect = ({ searchConfig, dataIndex }) => {
        const Component = FormItemGeneratorToDict[`${searchConfig.dictName}MulitSelectFormItem`];

        return (
          <Component
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          />
        );
      };
      const renderTablePagingSelect = ({ searchConfig, dataIndex }) => {
        const Component =
          FormItemGeneratorToDict[`${searchConfig.dictName}PaginationSelectFormItem`];

        return (
          <Component
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          />
        );
      };
      const renderTablePagingMultiSelect = ({ searchConfig, dataIndex }) => {
        const Component =
          FormItemGeneratorToDict[`${searchConfig.dictName}PaginationMulitSelectFormItem`];

        return (
          <Component
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          />
        );
      };

      const renderListSelect = ({ searchConfig, dataIndex }) => {
        const Component = FormItemGeneratorToDict[`${searchConfig.dictName}SelectFormItem`];

        return (
          <Component
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          />
        );
      };
      const renderListMultiSelect = ({ searchConfig, dataIndex }) => {
        const Component = FormItemGeneratorToDict[`${searchConfig.dictName}MulitSelectFormItem`];

        return (
          <Component
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          />
        );
      };
      const renderListPagingSelect = ({ searchConfig, dataIndex }) => {
        const Component =
          FormItemGeneratorToDict[`${searchConfig.dictName}PaginationSelectFormItem`];

        return (
          <Component
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          />
        );
      };
      const renderListPagingMultiSelect = ({ searchConfig, dataIndex }) => {
        const Component =
          FormItemGeneratorToDict[`${searchConfig.dictName}PaginationMulitSelectFormItem`];

        return (
          <Component
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          />
        );
      };

      const renderTreeSelect = ({ searchConfig, dataIndex }) => {
        const Component = FormItemGeneratorToDict[`${searchConfig.dictName}FormItem`];

        return (
          <Component
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          />
        );
      };
      const renderTreeMultiSelect = ({ searchConfig, dataIndex }) => {
        const Component = FormItemGeneratorToDict[`${searchConfig.dictName}MulitFormItem`];

        return (
          <Component
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          />
        );
      };
      const renderTreeSelectLeaf = ({ searchConfig, dataIndex }) => {
        const Component = FormItemGeneratorToDict[`${searchConfig.dictName}LeafFormItem`];

        return (
          <Component
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          />
        );
      };
      const renderTreeMultiSelectLeaf = ({ searchConfig, dataIndex }) => {
        const Component = FormItemGeneratorToDict[`${searchConfig.dictName}LeafMulitFormItem`];

        return (
          <Component
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          />
        );
      };

      const renderCascaderSelect = ({ searchConfig, dataIndex }) => {
        const Component = FormItemGeneratorToDict[`${searchConfig.dictName}FormItem`];

        return (
          <Component
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          />
        );
      };
      const renderCascaderMultiSelect = ({ searchConfig, dataIndex }) => {
        const Component = FormItemGeneratorToDict[`${searchConfig.dictName}MulitFormItem`];

        return (
          <Component
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          />
        );
      };
      const renderCascaderSelectLeaf = ({ searchConfig, dataIndex }) => {
        const Component = FormItemGeneratorToDict[`${searchConfig.dictName}LeafFormItem`];

        return (
          <Component
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          />
        );
      };
      const renderCascaderMultiSelectLeaf = ({ searchConfig, dataIndex }) => {
        const Component = FormItemGeneratorToDict[`${searchConfig.dictName}LeafMulitFormItem`];

        return (
          <Component
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          />
        );
      };

      const renderDatePicker = ({ searchConfig, dataIndex }) => {
        return (
          <DatePicker
            value={this.state[dataIndex]}
            onChange={(moment) => {
              this.setState({
                [dataIndex]: moment ? moment : null,
              });
            }}
            {...(searchConfig.props || {})}
          />
        );
      };
      const renderTimePicker = ({ searchConfig, dataIndex }) => {
        return (
          <TimePicker
            value={this.state[dataIndex]}
            onChange={(moment) => {
              this.setState({
                [dataIndex]: moment ? moment : null,
              });
            }}
            {...(searchConfig.props || {})}
          />
        );
      };
      const renderRangePicker = ({ searchConfig }) => {
        const { startName, endName } = searchConfig;

        return (
          <RangePicker
            value={[this.state[startName], this.state[endName]]}
            onChange={(moments) => {
              this.onDateTimeRangeChange([startName, endName], moments);
            }}
            {...(searchConfig.props || {})}
          />
        );
      };

      const renderSlider = ({ searchConfig, dataIndex }) => {
        return (
          <Slider
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          />
        );
      };
      const renderSliderRange = ({ searchConfig }) => {
        return (
          <Slider
            range
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          />
        );
      };

      const renderRate = ({ searchConfig }) => {
        return (
          <Rate
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          />
        );
      };
      const renderSwitch = ({ searchConfig }) => {
        return (
          <Switch
            value={this.state[dataIndex]}
            onChange={(e) => this.onSelectChange(dataIndex, e)}
            {...(searchConfig.props || {})}
          />
        );
      };

      const renderCustom = ({ searchConfig, column, dataIndex }) => {
        return searchConfig?.render?.({ searchConfig, column, dataIndex });
      };

      const typeMap = new Map<string, (params: any) => ReactNode>([
        ['input', renderInput],
        ['textArea', renderTextArea],

        ['inputNumber', renderInputNumber],
        ['inputNumberDecimal1', renderInputNumberDecimal1],
        ['inputNumberDecimal2', renderInputNumberDecimal2],
        ['inputNumberInteger', renderInputNumberInteger],

        ['select', renderSelect],
        ['multiSelect', renderMultiSelect],
        ['checkAllMultiSelect', renderCheckAllMultiSelect],

        ['autoCompleteSelect', renderAutoCompleteSelect],
        ['autoCompleteSelectMulti', renderAutoCompleteSelectMulti],
        ['autoCompleteSelectCheckAllMulti', renderAutoCompleteSelectCheckAllMulti],

        ['radioHorizontal', renderRadioHorizontal],
        ['radioButton', renderRadioButton],
        ['radioSelect', renderRadioSelect],
        ['radioCustom', renderRadioCustom],

        ['checkBoxHorizontal', renderCheckBoxHorizontal],
        ['checkBoxCheckAllHorizontal', renderCheckBoxCheckAllHorizontal],
        ['checkboxSelect', renderCheckboxSelect],
        ['checkBoxCheckAllSelect', renderCheckBoxCheckAllSelect],
        ['checkBoxCustom', renderCheckBoxCustom],
        ['checkBoxCheckAllCustom', renderCheckBoxCheckAllCustom],

        ['transferSelect', renderTransferSelect],

        ['tableSelect', renderTableSelect],
        ['tableMultiSelect', renderTableMultiSelect],
        ['tablePagingSelect', renderTablePagingSelect],
        ['tablePagingMultiSelect', renderTablePagingMultiSelect],

        ['listSelect', renderListSelect],
        ['listMultiSelect', renderListMultiSelect],
        ['listPagingSelect', renderListPagingSelect],
        ['listPagingMultiSelect', renderListPagingMultiSelect],

        ['treeSelect', renderTreeSelect],
        ['treeMultiSelect', renderTreeMultiSelect],
        ['treeSelectLeaf', renderTreeSelectLeaf],
        ['treeMultiSelectLeaf', renderTreeMultiSelectLeaf],

        ['cascaderSelect', renderCascaderSelect],
        ['cascaderMultiSelect', renderCascaderMultiSelect],
        ['cascaderSelectLeaf', renderCascaderSelectLeaf],
        ['cascaderMultiSelectLeaf', renderCascaderMultiSelectLeaf],

        ['datePicker', renderDatePicker],
        ['timePicker', renderTimePicker],
        ['rangePicker', renderRangePicker],

        ['slider', renderSlider],
        ['sliderRange', renderSliderRange],
        ['rate', renderRate],
        ['switch', renderSwitch],

        ['custom', renderCustom],
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
        props || {},
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
        advancedSearchConfig || {},
      );

      // 标准的查询面板
      let StandardSearchPanel = renderGridSearchFormGroup(group, defaultProps);

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
          let gData: AdvancedSearchPanelGroupData[] = [];

          // 剩余的组数据
          let remainingGData: AdvancedSearchPanelGroupData[] = [];

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
            <div className={`${_selectorPrefix}-gridsearchformgroupwrap`}>
              {renderGridSearchFormGroup(
                // @ts-ignore
                gData,
                defaultProps,
              )}
              <AdvancedSearchPanel
                groupData={group}
                tableGridLayoutConfig={defaultProps}
                remainingGroupData={remainingGData}
                advancedSearchConfig={this.advancedSearchConfig}
                onSearch={() =>
                  new Promise<void>((resolve) => {
                    this.setState(
                      {
                        page: 1,
                      },
                      () => {
                        this.onSearch().then(() => resolve());
                      },
                    );
                  })
                }
                onReset={() => this.onClear()}
                onCollapse={(collapse) =>
                  this.setState({
                    advancedSearchPanelCollapse: collapse,
                  })
                }
              />
            </div>
          );
        }
      }

      this.hasAdvancedSearchPanel = false;

      return (
        <div className={`${_selectorPrefix}-gridsearchformgroupwrap`}>{StandardSearchPanel}</div>
      );
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
