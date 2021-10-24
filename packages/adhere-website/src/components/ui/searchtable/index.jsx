import React from 'react';

import Table from './table';
import Props from '@/lib/Props';
import FunctionProps from '@/lib/FunctionProps';
import Playground from '@/lib/Playground';
import PlayGroundMulit from '@/lib/PlayGroundMulit';

export default () => {
  return (
    <div className="Page">
      <h1>SearchTable</h1>
      <h3>一种查询表格的通用模式(如果 UI 没有明确给出查询表格的 UI，就可以用这个默认模式)</h3>

      <h2>属性</h2>
      <Props
        data={[
          {
            params: 'className',
            desc: '附加样式',
            type: 'string',
            defaultVal: '',
          },
          {
            params: 'style',
            desc: '附加样式',
            type: 'object',
            defaultVal: '{}',
          },
          {
            params: 'tableClassName',
            desc: '附加样式',
            type: 'string',
            defaultVal: '',
          },
          {
            params: 'tableStyle',
            desc: '附加样式',
            type: 'object',
            defaultVal: '{}',
          },
          {
            params: 'searchClassName',
            desc: '附加样式',
            type: 'string',
            defaultVal: '',
          },
          {
            params: 'searchStyle',
            desc: '附加样式',
            type: 'object',
            defaultVal: '{}',
          },
          {
            params: 'reset',
            desc: '是否重置',
            type: 'boolean',
            defaultVal: 'false',
          },
          {
            params: 'firstLoading',
            desc: '是否是第一次加载',
            type: 'boolean',
            defaultVal: 'false',
          },
          {
            params: 'antdTableProps',
            desc: 'Table的antd配置',
            type: 'object',
            defaultVal: '{}',
          },
          {
            params: 'isShowExpandSearch',
            desc: '是否有展开和收缩的功能',
            type: 'boolean',
            defaultVal: 'true',
          },
          {
            params: 'defaultExpandSearchCollapse',
            desc: '展开和收缩的默认状态',
            type: 'boolean',
            defaultVal: 'true',
          },
          {
            params: 'fitSearch',
            desc: '撑开search',
            type: 'boolean',
            defaultVal: 'true',
          },
          {
            params: 'fitTable',
            desc: '撑开表格',
            type: 'boolean',
            defaultVal: 'true',
          },
          {
            params: 'autoFixed',
            desc: '是否是查询固定，表格自适应',
            type: 'boolean',
            defaultVal: 'true',
          },
          {
            params: 'fixedHeaderAutoTable',
            desc: '锁定列头，表格滚动',
            type: 'boolean',
            defaultVal: 'false',
          },
        ]}
      />

      <h3>重写的方法</h3>
      <FunctionProps
        data={[
          {
            name: 'isShowNumber',
            desc: '表格是否显示序号',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'getTableNumberColumnWidth',
            desc: '表格序号列的宽度',
            modifier: 'public',
            params: [],
            returnType: 'number',
            returnDesc: '80',
          },
          {
            name: 'getNumberGeneratorRule',
            desc: '获取符号列的生成规则',
            modifier: 'public',
            params: [],
            returnType: 'string',
            returnDesc:
              'NUMBER_GENERATOR_RULE_ALONE(单独模式),NUMBER_GENERATOR_RULE_CONTINUITY(连续模式)',
          },
          {
            name: 'renderTableNumberColumn',
            desc: '渲染序号列',
            modifier: 'public',
            params: [
              {
                name: 'number',
                desc: '',
                type: 'string',
                defaultVal: '',
                required: '',
              },
              {
                name: 'params',
                desc: '',
                type: '{ record: object; index: number }',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'React.ReactElement',
            returnDesc: '',
          },
          {
            name: 'getRowKey',
            desc: '获取表格的主键属性',
            modifier: 'public',
            params: [],
            returnType: 'string',
            returnDesc: '',
          },
          {
            name: 'getData',
            desc: '获取表格数据',
            modifier: 'public',
            params: [],
            returnType: 'Array<Object>',
            returnDesc: '',
          },
          {
            name: 'getColumns',
            desc: '获取表格列的信息',
            modifier: 'public',
            params: [],
            returnType: 'Array<object>',
            returnDesc: '',
          },
          {
            name: 'getRowSelection',
            desc: '获取表格行选择对象',
            modifier: 'public',
            params: [],
            returnType: 'TableRowSelection<object>',
            returnDesc: '',
          },
          {
            name: 'renderSearchForm',
            desc: '渲染查询的UI',
            modifier: 'public',
            params: [],
            returnType: 'React.ReactElement | null',
            returnDesc: '',
          },
          {
            name: 'renderTableNumberColumn',
            desc: '渲染序号列',
            modifier: 'public',
            params: [
              {
                name: 'number',
                desc: '',
                type: 'string',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'React.ReactElement',
            returnDesc: '',
          },
          {
            name: 'getTotal',
            desc: '获取表格数据的总数',
            modifier: 'public',
            params: [],
            returnType: 'number',
            returnDesc: '',
          },
          {
            name: 'getOrderFieldProp',
            desc: '获取表格的排序字段',
            modifier: 'public',
            params: [],
            returnType: 'string',
            returnDesc: '',
          },
          {
            name: 'getOrderProp',
            desc: '获取表格的排序属性',
            modifier: 'public',
            params: [],
            returnType: 'string',
            returnDesc: '',
          },
          {
            name: 'onSubTableChange',
            desc: '获取表格change句柄',
            modifier: 'public',
            params: [
              {
                name: 'pagination',
                desc: '',
                type: 'TablePaginationConfig',
                defaultVal: '',
                required: '',
              },
              {
                name: 'filters',
                desc: '',
                type: 'Record<string, FilterValue | null>',
                defaultVal: '',
                required: '',
              },
              {
                name: 'sorter',
                desc: '',
                type: 'SorterResult<object> | SorterResult<object>[]',
                defaultVal: '',
                required: '',
              },
              {
                name: 'extra',
                desc: '',
                type: 'TableCurrentDataSource<object>',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'void',
            returnDesc: '',
          },
          {
            name: 'clear',
            desc: '清除操作',
            modifier: 'public',
            params: [],
            returnType: 'Promise<any>',
            returnDesc: '',
          },
          {
            name: 'renderSearchFooterItems',
            desc: '渲染SearchFooter的按钮组',
            modifier: 'public',
            params: [],
            returnType: 'Array<React.ReactElement> | null',
            returnDesc: '',
          },
          {
            name: 'onSearch',
            desc: '进行查询',
            modifier: 'public',
            params: [],
            returnType: 'void',
            returnDesc: '',
          },
        ]}
      />

      <h3>searchtableimplement重写的方法</h3>
      <FunctionProps
        data={[
          {
            name: 'getFetchListPropName',
            desc: '获取调用列表接口的函数名',
            modifier: 'public',
            params: [],
            returnType: 'string',
            returnDesc: '',
          },
          {
            name: 'getFetchListPropNameToFirstUpper',
            desc: '获取调用列表接口的函数名首字母大写',
            modifier: 'public',
            params: [],
            returnType: 'string',
            returnDesc: '',
          },
          {
            name: 'onSelectChange',
            desc: '',
            modifier: 'public',
            params: [
              {
                name: 'property',
                desc: '',
                type: 'string',
                defaultVal: '',
                required: '',
              },
              {
                name: 'value',
                desc: '',
                type: 'string',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: '',
            returnDesc: '',
          },
          {
            name: 'onInputChange',
            desc: '',
            modifier: 'public',
            params: [
              {
                name: 'property',
                desc: '',
                type: 'string',
                defaultVal: '',
                required: '',
              },
              {
                name: 'e',
                desc: '',
                type: 'object',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: '',
            returnDesc: '',
          },
          {
            name: 'onDateTimeRangeChange',
            desc: '',
            modifier: 'public',
            params: [
              {
                name: 'propertys',
                desc: '',
                type: 'Array<string>',
                defaultVal: '',
                required: '',
              },
              {
                name: 'moments',
                desc: '',
                type: 'Array<moment>',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: '',
            returnDesc: '',
          },
          {
            name: 'getParams',
            desc: '获取查询参数对象',
            modifier: 'public',
            params: [],
            returnType: 'Object',
            returnDesc: '',
          },
          {
            name: 'getServiceName',
            desc: '获取接口服务的model名称',
            modifier: 'public',
            params: [],
            returnType: 'string',
            returnDesc: '',
          },
          {
            name: 'getFetchDataParams',
            desc: '获取调用数据接口的参数',
            modifier: 'public',
            params: [],
            returnType: 'object',
            returnDesc: '',
          },
          {
            name: 'isShowNumber',
            desc: '是否线上序号列',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'getNumberGeneratorRule',
            desc: '表格序号列的生成规则',
            modifier: 'public',
            params: [],
            returnType: 'Symbol',
            returnDesc: '',
          },
          {
            name: 'getTableNumberColumnWidth',
            desc: '表格序号列的宽度',
            modifier: 'public',
            params: [],
            returnType: 'number',
            returnDesc: '',
          },
          {
            name: 'getRowKey',
            desc: '数据的主键',
            modifier: 'public',
            params: [],
            returnType: 'string',
            returnDesc: '',
          },
          {
            name: 'getData',
            desc: 'Table的数据(Table的dataSource字段)',
            modifier: 'public',
            params: [],
            returnType: 'Array<object>',
            returnDesc: '',
          },
          {
            name: 'getColumns',
            desc: 'Table的列',
            modifier: 'public',
            params: [],
            returnType: 'Array<ColumnType<object>>',
            returnDesc: '',
          },
          {
            name: 'getRowSelection',
            desc: '获取表格行选择对象',
            modifier: 'public',
            params: [],
            returnType: 'TableRowSelection<object>',
            returnDesc: '',
          },
          {
            name: 'renderSearchForm',
            desc: '渲染Table查询的表单',
            modifier: 'public',
            params: [],
            returnType: 'React.ReactElement | null',
            returnDesc: '',
          },
          {
            name: 'renderInner',
            desc: '渲染主体',
            modifier: 'public',
            params: [],
            returnType: 'React.ReactElement | null',
            returnDesc: '',
          },

          {
            name: 'getTotal',
            desc: 'Table数据的总条数',
            modifier: 'public',
            params: [],
            returnType: 'number',
            returnDesc: '',
          },
          {
            name: 'getOrderFieldProp',
            desc: '获取排序字段',
            modifier: 'public',
            params: [],
            returnType: 'string',
            returnDesc: '',
          },
          {
            name: 'getOrderFieldValue',
            desc: '获取默认排序字段的值',
            modifier: 'public',
            params: [],
            returnType: 'string',
            returnDesc: '',
          },
          {
            name: 'getOrderProp',
            desc: '获取排序方式',
            modifier: 'public',
            params: [],
            returnType: 'string',
            returnDesc: '',
          },
          {
            name: 'getOrderPropValue',
            desc: '获取默认排序方式',
            modifier: 'public',
            params: [],
            returnType: "'descend' | 'ascend'",
            returnDesc: '',
          },
          {
            name: 'clear',
            desc: '清空查询条件',
            modifier: 'public',
            params: [],
            returnType: 'Promise<any>',
            returnDesc: '',
          },
          {
            name: 'renderSearchFooterItems',
            desc: '渲染表格的工具栏',
            modifier: 'public',
            params: [],
            returnType: 'Array<any>',
            returnDesc: '',
          },
          {
            name: 'showLoading',
            desc: '是否显示遮罩',
            modifier: 'public',
            params: [],
            returnType: 'boolean',
            returnDesc: '',
          },
          {
            name: 'fetchData',
            desc: '加载数据',
            modifier: 'public',
            params: [],
            returnType: 'Promise<any>',
            returnDesc: '',
          },
          {
            name: 'fetchDataExecute',
            desc: '真正的执行获取列表数据的接口',
            modifier: 'public',
            params: [
              {
                name: 'searchParams',
                desc: '',
                type: 'object',
                defaultVal: '',
                required: '',
              },
            ],
            returnType: 'Promise<any>',
            returnDesc: '',
          },
          {
            name: 'onSearch',
            desc: '点击查询',
            modifier: 'public',
            params: [],
            returnType: 'Promise<any>',
            returnDesc: '',
          },
          {
            name: 'onSearch',
            desc: '点击查询',
            modifier: 'public',
            params: [],
            returnType: 'Promise<any>',
            returnDesc: '',
          },
        ]}
      />

      <h2>基本使用</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import React from 'react';

  import Table from './table';
  
  <Table isShowExpandSearch defaultExpandSearchCollapse={false} />
      `}
      >
        <Table isShowExpandSearch defaultExpandSearchCollapse={false} />
      </Playground>

      <h2>表格体可以滚动</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import React from 'react';

  import Table from './table';
  
  <div style={{ display: 'flex', height: 400 }}>
    <Table
      style={{ height: '100%' }}
      isShowExpandSearch
      defaultExpandSearchCollapse={false}
      autoFixed
    />
  </div>
      `}
      >
        <div style={{ display: 'flex', height: 400 }}>
          <Table
            style={{ height: '100%' }}
            isShowExpandSearch
            defaultExpandSearchCollapse={false}
            autoFixed
          />
        </div>
      </Playground>

      <h2>固定列头</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import React from 'react';

  import Table from './table';
  
  <div style={{ display: 'flex', height: 700 }}>
    <Table
      style={{ height: '100%' }}
      isShowExpandSearch
      defaultExpandSearchCollapse={false}
      fixedHeaderAutoTable
    />
  </div>
      `}
      >
        <div style={{ display: 'flex', height: 700 }}>
          <Table
            style={{ height: '100%' }}
            isShowExpandSearch
            defaultExpandSearchCollapse={false}
            fixedHeaderAutoTable
          />
        </div>
      </Playground>

      <h2>实现了TableImplement的table类</h2>
      <PlayGroundMulit
        expand
        config={[
          {
            mode: 'code',
            scope: { React },
            title: 'table.jsx',
            codeText: `
  import React from 'react';
  import moment from 'moment';
  import { Input, Select, DatePicker, InputNumber } from 'antd';
  
  import { SearchTable, Resource, Ajax } from '@baifendian/adhere';
  
  const { Table, TableImplement } = SearchTable;
  
  const { SearchForm } = Table;
  
  const { SearchFormRow } = SearchForm;
  
  const { SearchFormLabel, SearchFormValue } = SearchFormRow;
  
  const { Option } = Select;
  
  const { RangePicker } = DatePicker;
  
  /**
   * Table
   * @class TableImpl
   * @classdesc TableImpl
   */
  class TableImpl extends TableImplement {
    constructor(props) {
      super(props);
  
      this.request = new Ajax('');
  
      Object.assign(this.state, {
        loading: false,
      });
    }
  
    getParams() {
      return {
        name: '',
        sex: '',
        startTime: null,
        endTime: null,
        deptCode: '',
        homeTown: '',
        width: '',
        height: '',
      };
    }
  
    getFetchDataParams() {
      const {
        searchParams: { startTime, endTime },
      } = this.state;
  
      return {
        startTime: startTime
          ? \`\${startTime.format(Resource.Dict.value.ResourceMomentFormat10.value)} 00:00:00\`
          : null,
        endTime: endTime
          ? \`\${endTime.format(Resource.Dict.value.ResourceMomentFormat10.value)} 23:59:59\`
          : null,
      };
    }
  
    getData() {
      return this.state.dataSource.list;
    }
  
    getColumns() {
      return [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
          align: 'center',
        },
        {
          title: '性别',
          dataIndex: 'sex',
          key: 'sex',
          align: 'center',
          render: (v) => Resource.Dict.value.ResourceNormalSexMap.value.get(v).label,
        },
        {
          title: '籍贯',
          dataIndex: 'homeTown',
          key: 'homeTown',
          align: 'center',
        },
        {
          title: '出生年月',
          dataIndex: 'birthday',
          key: 'birthday',
          align: 'center',
          sorter: true,
          sortOrder: this.sortOrder('birthday'),
          render: (val) =>
            val ? moment(val).format(Resource.Dict.value.ResourceMomentFormat10.value) : '',
        },
        {
          title: '所在部门',
          dataIndex: 'deptName',
          key: 'deptName',
          align: 'center',
        },
        {
          title: '身高',
          dataIndex: 'height',
          key: 'height',
          align: 'center',
          sorter: true,
          sortOrder: this.sortOrder('height'),
        },
        {
          title: '体重',
          dataIndex: 'width',
          key: 'width',
          align: 'center',
          sorter: true,
          sortOrder: this.sortOrder('width'),
        },
      ];
    }
  
    renderSearchForm() {
      return (
        <SearchForm>
          <SearchFormRow>
            <SearchFormLabel style={{ width: 100 }}>姓名：</SearchFormLabel>
            <SearchFormValue>
              <Input
                style={{ width: 270 }}
                placeholder="姓名"
                value={this.state.name}
                onChange={(e) => {
                  this.onInputChange('name', e);
                }}
              />
            </SearchFormValue>
  
            <SearchFormLabel>性别：</SearchFormLabel>
            <SearchFormValue>
              <Select
                style={{ width: 270 }}
                value={this.state.sex}
                onChange={(v) => {
                  this.onSelectChange('sex', v);
                }}
              >
                {Resource.Dict.value.ResourceNormalSex.value.map((t) => (
                  <Option key={t.value} value={t.value}>
                    {t.label}
                  </Option>
                ))}
              </Select>
            </SearchFormValue>
  
            <SearchFormLabel>出生年月：</SearchFormLabel>
            <SearchFormValue>
              <RangePicker
                style={{ width: 270 }}
                value={[this.state.startTime, this.state.endTime]}
                onChange={(moments) => {
                  this.onDateTimeRangeChange(['startTime', 'endTime'], moments);
                }}
                getPopupContainer={Resource.Dict.value.FormPopupContainer.value}
              />
            </SearchFormValue>
          </SearchFormRow>
  
          <SearchFormRow>
            <SearchFormLabel>籍贯：</SearchFormLabel>
            <SearchFormValue>
              <Input
                style={{ width: 270 }}
                placeholder="籍贯"
                value={this.state.homeTown}
                onChange={(e) => {
                  this.onInputChange('homeTown', e);
                }}
              />
            </SearchFormValue>
  
            <SearchFormLabel>身高：</SearchFormLabel>
            <SearchFormValue>
              <InputNumber
                style={{ width: 270 }}
                placeholder="身高"
                value={this.state.height}
                onChange={(v) => {
                  this.onSelectChange('height', v);
                }}
              />
            </SearchFormValue>
  
            <SearchFormLabel>体重：</SearchFormLabel>
            <SearchFormValue>
              <InputNumber
                style={{ width: 270 }}
                placeholder="体重"
                value={this.state.width}
                onChange={(v) => {
                  this.onSelectChange('width', v);
                }}
              />
            </SearchFormValue>
          </SearchFormRow>
  
          <SearchFormRow>
            <SearchFormLabel>所在部门：</SearchFormLabel>
            <SearchFormValue>
              <Select
                style={{ width: 270 }}
                value={this.state.deptCode}
                onChange={(v) => {
                  this.onSelectChange('deptCode', v);
                }}
              >
                <Option value="">全部</Option>
                <Option value="0">产品部</Option>
                <Option value="1">开发部</Option>
                <Option value="2">工程部</Option>
              </Select>
            </SearchFormValue>
          </SearchFormRow>
        </SearchForm>
      );
    }
  
    getTotal() {
      return this.state.dataSource.total;
    }
  
    getOrderFieldProp() {
      return 'orderField';
    }
  
    getOrderFieldValue() {
      return 'height';
    }
  
    getOrderProp() {
      return 'order';
    }
  
    getOrderPropValue() {
      return 'descend';
    }
  
    renderSearchFooterItems() {
      return null;
    }
  
    showLoading() {
      return this.state.loading;
    }
  
    onSubTableChange(pagination, filters, sorter) {}
  
    fetchDataExecute(searchParams) {
      return new Promise((resolve) => {
        this.setState(
          {
            loading: true,
          },
          () => {
            setTimeout(() => {
              this.request
                .get({
                  mock: true,
                  path: require('./mock.js').default,
                })
                .then((result) => {
                  this.setState(
                    {
                      dataSource: {
                        total: result.total,
                        list: result.list,
                      },
                      loading: false,
                    },
                    () => {
                      resolve();
                    },
                  );
                });
            }, 2000);
          },
        );
      });
    }
  }
  
  export default TableImpl;
            `,
          },
        ]}
      />
    </div>
  );
};
