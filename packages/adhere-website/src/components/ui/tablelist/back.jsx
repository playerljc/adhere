import React from 'react';
import { Link } from '@ctsj/router';
import { Space } from '@baifendian/adhere';

import Props from '@/lib/Props';
import Playground from '@/lib/Playground';

import { Demo1, Demo2, Demo3, Demo4, Demo5 } from './TableDemo';

export default () => {
  return (
    <div className="Page">
      <h1>TableList</h1>
      <p>表格列表配置</p>

      <Props
        border
        title="属性"
        data={[
          {
            params: 'className',
            desc: 'tableList组件的类名',
            type: 'string',
            defaultVal: '',
          },
          {
            params: 'mode',
            desc: '显示模式 表格table | 列表list',
            type: 'string',
            defaultVal: '',
          },
          {
            params: 'search',
            desc: '搜索区域配置',
            type: 'object',
            defaultVal: '',
          },
          {
            params: 'toolbar',
            desc: '工具栏配置',
            type: 'object',
            defaultVal: '',
          },
          {
            params: 'table',
            desc: 'mode为table时，设置antd中Table组件的属性之外，还支持showNumber,sortable',
            type: 'object',
            defaultVal: '',
          },
          {
            params: 'list',
            desc: 'mode为list时，设置antd中List组件的属性',
            type: 'object',
            defaultVal: '',
          },
          {
            params: 'request',
            desc: '数据请求',
            type: 'Function',
            defaultVal: '',
          },
        ]}
      />

      <Space />

      <h2>search属性</h2>
      <Props
        border
        title="搜索区域配置"
        data={[
          {
            params: 'className',
            desc: '搜索区域的类名',
            type: 'string',
            defaultVal: '',
          },
          {
            params: 'beforeContent',
            desc: '搜索表单前内容',
            type: 'string | number | ReactNode',
            defaultVal: '',
          },
          {
            params: 'afterContent',
            desc: '搜索表单后内容',
            type: 'string | number | ReactNode',
            defaultVal: '',
          },
          {
            params: 'columns',
            desc: '搜索表单项配置',
            type: <Link to="/adhere/component/ui/formitemcreator">FormItemCreator的columns属性</Link>,
            defaultVal: '',
          },
          {
            params: 'optionRender',
            desc: '搜索表单操作按钮渲染',
            type: 'ReactNode',
            defaultVal: '内置搜索和重置操作按钮, 为false则不显示操作按钮并且搜索条件立即触发',
          },
          {
            params: 'searchText',
            desc: '搜索表单搜索按钮文字',
            type: 'string',
            defaultVal: '搜索',
          },
          {
            params: 'searchText',
            desc: '搜索表单搜索按钮文字',
            type: 'string',
            defaultVal: '搜索',
          },
          {
            params: 'resetText',
            desc: '重置表单搜索按钮文字',
            type: 'string',
            defaultVal: '重置',
          },
          {
            params: 'size',
            desc: '搜索表单以及内置操作按钮的大小 small | middle | small',
            type: 'string',
            defaultVal: 'middle',
          },
        ]}
      />

      <Space />

      <h2>toolbar属性</h2>
      <Props
        border
        title="工具栏区域配置"
        data={[
          {
            params: 'className',
            desc: '工具栏区域的类名',
            type: 'string',
            defaultVal: '',
          },
          {
            params: 'title',
            desc: '工具栏区域的标题',
            type: 'string | ReactNode',
            defaultVal: '',
          },
          {
            params: 'total',
            desc: '工具栏显示数据总数, 为true默认显示为“共n条”,如果想自定义可以传string或者ReactNode',
            type: 'boolean | string | ReactNode',
            defaultVal: '',
          },
          {
            params: 'selectAll',
            desc: '工具栏选中全部，默认是选中当前页，传入object{ total: 全选是否代表跨页选中全部数据 }',
            type: 'boolean | object{ total: boolean }',
            defaultVal: '',
          },
          {
            params: 'search',
            desc: <span>工具栏搜索配置</span>,
            type: <Link to="/adhere/component/ui/formitemcreator">FormItemCreator的columns属性</Link>,
            defaultVal: '',
          },
          {
            params: 'reload',
            desc: '工具栏刷新配置',
            type: 'boolean | object { ...antd中Tooltip的Props, render }',
            defaultVal: '',
          },
          {
            params: 'toolbarOptionRender',
            desc: '工具栏自定义操作渲染',
            type: 'ReactNode',
            defaultVal: '',
          },
          {
            params: 'setting',
            desc: '工具栏设置配置',
            type: 'boolean | object { ...antd中Tooltip的Props, render }',
            defaultVal: '',
          },
        ]}
      />

      <Space />

      <h2>基础使用</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
          import React from 'react';
          import { TableList, FormItemCreator } from '@baifendian/adhere';

          class Demo extends React.Component {
            constructor(props) {
              super(props);
              this.state = {
                dataSource: []
              }
            }

            fetchData = (params) => {
              console.log('搜索参数', params);
              return requestData(params).then(res => {
                if (res.code === 200) {
                  this.setState({ tableData: res.data });
                }
              })
            }

            tableColumns = ([
              { title: '姓名', dataIndex: 'name', key: 'name', ellipsis: true },
              { title: '年龄', dataIndex: 'age', key: 'age', ellipsis: true },
              { title: '性别', dataIndex: 'sex', key: 'sex', ellipsis: true, valueType: 'map', map: [{ value: 1, label: '男'}, { value: 2, label: '女'}] },
            ]);

            render() {
              const { tableData } = this.state;
              return (
                <TableList
                  mode="table"
                  search={{
                    columns: [
                      { label: '姓名', type: FormItemCreator.INPUT, name: 'name' },
                      { label: '年龄', type: FormItemCreator.NUMBER, name: 'age' },
                    ],
                  }}
                  toolbar={{
                    title: '这是表格的标题',
                    total: true,
                    selectAll: true,
                    setting: true,
                    reload: true
                  }}
                  table={{
                    columns: this.tableColumns,
                    dataSource: tableData && tableData.list,
                    pagination: { total: tableData && tableData.total },
                    rowSelection: true,
                  }}
                  ref={c => this.tableListRef = c}
                  request={this.fetchData}
                />
              );
            }
          }

          export default Demo;
          `}
      >
        <Demo1 />
      </Playground>

      <h2>1. 搜索区域没有搜索按钮，立即触发 optionRender为null或者false即可</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
          import React from 'react';
          import { TableList, FormItemCreator } from '@baifendian/adhere';

          class Demo extends React.Component {
            constructor(props) {
              super(props);
              this.state = {
                dataSource: []
              }
            }

            fetchData = (params) => {
              console.log('搜索参数', params);
              return requestData(params).then(res => {
                if (res.code === 200) {
                  this.setState({ tableData: res.data });
                }
              })
            }

            tableColumns = ([
              { title: '姓名', dataIndex: 'name', key: 'name', ellipsis: true },
              { title: '年龄', dataIndex: 'age', key: 'age', ellipsis: true },
              { title: '性别', dataIndex: 'sex', key: 'sex', ellipsis: true, valueType: 'map', map: [{ value: 1, label: '男'}, { value: 2, label: '女'}] },
            ]);

            render() {
              const { tableData } = this.state;
              return (
                <TableList
                  mode="table"
                  search={{
                    columns: [
                      { label: '姓名', type: FormItemCreator.INPUT, name: 'name' },
                      { label: '年龄', type: FormItemCreator.NUMBER, name: 'age' },
                    ],
                    afterContent: <Button type="primary">导入</Button>,
                    optionRender: false,
                  }}
                  toolbar={{
                    title: '这是表格的标题',
                    total: true,
                    selectAll: true,
                    setting: true,
                    reload: true
                  }}
                  table={{
                    columns: this.tableColumns,
                    dataSource: tableData && tableData.list,
                    pagination: { total: tableData && tableData.total },
                    rowSelection: true,
                  }}
                  ref={c => this.tableListRef = c}
                  request={this.fetchData}
                />
              );
            }
          }

          export default Demo;
          `}
      >
        <Demo2 />
      </Playground>

      <h2>1.显示序号 2.搜索条件是在工具栏上立即触发</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
          import React from 'react';
          import { TableList, FormItemCreator } from '@baifendian/adhere';

          class Demo extends React.Component {
            constructor(props) {
              super(props);
              this.state = {
                dataSource: []
              }
            }

            fetchData = (params) => {
              console.log('搜索参数', params);
              return requestData(params).then(res => {
                if (res.code === 200) {
                  this.setState({ tableData: res.data });
                }
              })
            }

            tableColumns = ([
              { title: '姓名', dataIndex: 'name', key: 'name', ellipsis: true },
              { title: '年龄', dataIndex: 'age', key: 'age', ellipsis: true },
              { title: '性别', dataIndex: 'sex', key: 'sex', ellipsis: true, valueType: 'map', map: [{ value: 1, label: '男'}, { value: 2, label: '女'}] },
            ]);

            render() {
              const { tableData } = this.state;
              return (
                <TableList
                  mode="table"
                  search={{
                    columns: [
                      { label: '姓名', type: FormItemCreator.INPUT, name: 'name' },
                      { label: '年龄', type: FormItemCreator.NUMBER, name: 'age' },
                    ],
                  }}
                  toolbar={{
                    title: '这是表格的标题',
                    total: true,
                    selectAll: true,
                    setting: true,
                    reload: true,
                    search: [
                      { label: '姓名', type: FormItemCreator.INPUT, name: 'name' },
                      { label: '年龄', type: FormItemCreator.NUMBER, name: 'age' },
                    ],
                  }}
                  table={{
                    columns: this.tableColumns,
                    dataSource: tableData && tableData.list,
                    pagination: { total: tableData && tableData.total },
                    rowSelection: true,
                  }}
                  ref={c => this.tableListRef = c}
                  request={this.fetchData}
                />
              );
            }
          }

          export default Demo;
          `}
      >
        <Demo3 />
      </Playground>

      <h2>1.在工具栏上添加自定义内容 2. 自定义工具栏的total显示 3.支持排序的表格 </h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
          import React from 'react';
          import { TableList, FormItemCreator } from '@baifendian/adhere';

          class Demo extends React.Component {
            constructor(props) {
              super(props);
              this.state = {
                dataSource: []
              }
            }

            fetchData = (params) => {
              console.log('搜索参数', params);
              return requestData(params).then(res => {
                if (res.code === 200) {
                  this.setState({ tableData: res.data });
                }
              })
            }

            tableColumns = ([
              { title: '姓名', dataIndex: 'name', key: 'name', ellipsis: true },
              { title: '年龄', dataIndex: 'age', key: 'age', ellipsis: true },
              { title: '性别', dataIndex: 'sex', key: 'sex', ellipsis: true, valueType: 'map', map: [{ value: 1, label: '男'}, { value: 2, label: '女'}] },
            ]);

            render() {
              const { tableData } = this.state;
              return (
                <TableList
                  mode="table"
                  search={{
                    columns: [
                      { label: '姓名', type: FormItemCreator.INPUT, name: 'name' },
                      { label: '年龄', type: FormItemCreator.NUMBER, name: 'age' },
                    ],
                  }}
                  toolbar={{
                    title: '这是表格的标题',
                    total: <span>获取到<em>20</em>条数据</span>,
                    toolbarOptionRender: (
                      <div>
                        <Button type="primary">添加</Button>
                      </div>
                    )
                  }}
                  table={{
                    columns: this.tableColumns,
                    dataSource: tableData && tableData.list,
                    pagination: { total: tableData && tableData.total },
                    rowSelection: true,
                  }}
                  ref={c => this.tableListRef = c}
                  request={this.fetchData}
                />
              );
            }
          }

          export default Demo;
          `}
      >
        <Demo4 />
      </Playground>

      <h2>列表基本使用</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
          import React from 'react';
          import { Button } from 'antd';
          import { TableList, FormItemCreator } from '@baifendian/adhere';

          const requestData = (params) => {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                const page = params && params.page || '';
                const response = {
                  code: 200,
                  data: {
                    list: [
                      { id: 1, name: '小明' + page, age: 48, sex: 1 },
                      { id: 2, name: '小红' + page, age: 27, sex: 2 },
                      { id: 3, name: '小李' + page, age: 22, sex: 2 },
                      { id: 4, name: '小张' + page, age: 30, sex: 1 },
                      { id: 5, name: '小秦' + page, age: 50, sex: 2 },
                      { id: 6, name: '小王' + page, age: 50, sex: 1 },
                      { id: 7, name: '小孙' + page, age: 30, sex: 2 },
                      { id: 8, name: '小吴' + page, age: 32, sex: 2 },
                      { id: 9, name: '小郑' + page, age: 21, sex: 2 },
                      { id: 10, name: '小花' + page, age: 14, sex: 1 },
                    ],
                    total: 20,
                  },
                  message: '',
                }
                resolve(response);
              }, 2000)
            })
          }

          export class Demo5 extends React.Component {
            constructor(props) {
              super(props);
              this.state = {
                listData: []
              }
            }

            fetchData = (params) => {
              console.log('搜索参数', params);
              return requestData(params).then(res => {
                if (res.code === 200) {
                  this.setState({ listData: res.data });
                }
              })
            }

            render() {
              const { listData } = this.state;
              return (
                <TableList
                  mode="list"
                  toolbar={{
                    title: '这是列表的标题',
                    total: <span>获取到<em>20</em>条数据</span>,
                    selectAll: true,
                  }}
                  list={{
                    rowSelection: true,
                    dataSource: listData.list,
                    renderItem: (item) => (
                      <div>
                        {item.name}
                      </div>
                    )
                  }}
                  ref={c => this.tableListRef = c}
                  request={this.fetchData}
                />
              );
            }
          }
          `}
      >
        <Demo5 />
      </Playground>
    </div>
  );
};
