import React, { useState } from 'react';
import { Link } from '@ctsj/router';

import Props from '@/lib/Props';
import Playground from '@/lib/Playground';

import Demo from './TableDemo';

export default () => {
  return (
    <div className="Page">
      <h1>TableList</h1>
      <p>表格列表配置</p>

      <h2>属性</h2>
      <Props
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
            desc: 'mode为table时，设置antd中Table组件的属性',
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
          }
        ]}
      />

      <h2>search属性</h2>
      <p>搜索区域配置</p>
      <Props
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
            type: <Link to="/adhere/ui/formitemcreator">FormItemCreator的columns属性</Link>,
            defaultVal: '',
          },
          {
            params: 'optionRender',
            desc: '搜索表单操作按钮渲染',
            type: 'ReactNode',
            defaultVal: '内置搜索和重置操作按钮, 为false则不显示操作按钮',
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
          }
        ]}
      />

      <h2>toolbar属性</h2>
      <p>工具栏区域配置</p>
      <Props
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
            type: <Link to="/adhere/ui/formitemcreator">FormItemCreator的columns属性</Link>,
            defaultVal: '',
          },
          {
            params: 'reload',
            desc: '工具栏刷新配置',
            type: 'boolean | object { ...antd中Tooltip的Props, render }',
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

      <h2>基础使用</h2>
      <Playground>
        <Demo />
      </Playground>
    </div>
  )
}