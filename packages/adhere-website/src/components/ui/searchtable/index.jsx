import React from 'react';

import Table from './table';
import Props from '@/lib/Props';
import FunctionProps from '@/lib/FunctionProps';
import Playground from '@/lib/Playground';

export default () => {
  return (
    <div className="Page">
      <h1>SearchTable</h1>
      <p>一种查询表格的通用模式(如果 UI 没有明确给出查询表格的 UI，就可以用这个默认模式)</p>

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

      <h2>基本使用</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  
      `}
      >
        <Table />
      </Playground>
    </div>
  );
};
