import P1CodeText from '!!raw-loader!./examples/p1';
import P2CodeText from '!!raw-loader!./examples/p2';
import P3CodeText from '!!raw-loader!./examples/p3';
import P4CodeText from '!!raw-loader!./examples/p4';
import P5CodeText from '!!raw-loader!./examples/p5';

import React from 'react';

import { Link } from '@ctsj/router';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

import P1 from './examples/p1';
import P2 from './examples/p2';
import P3 from './examples/p3';
import P4 from './examples/p4';
import P5 from './examples/p5';

export default () => {
  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `基础使用`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '基础使用',
            info: '基础使用',
          },
        },
        type: 'PlayGround',
        codeText: P1CodeText,
        renderChildren: () => <P1 />,
      },
      {
        id: `p2`,
        name: `搜索区域`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '搜索区域',
            info: '搜索区域没有搜索按钮，立即触发 optionRender为null或者false即可',
          },
        },
        type: 'PlayGround',
        codeText: P2CodeText,
        renderChildren: () => <P2 />,
      },
      {
        id: `p3`,
        name: `显示序号`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '显示序号',
            info: '显示序号 2.搜索条件是在工具栏上立即触发',
          },
        },
        type: 'PlayGround',
        codeText: P3CodeText,
        renderChildren: () => <P3 />,
      },
      {
        id: `p4`,
        name: `工具栏自定义内容`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '工具栏自定义内容',
            info: '1.在工具栏上添加自定义内容 2. 自定义工具栏的total显示 3.支持排序的表格',
          },
        },
        type: 'PlayGround',
        codeText: P4CodeText,
        renderChildren: () => <P4 />,
      },
      {
        id: `p5`,
        name: `列表基本使用`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '列表基本使用',
            info: '列表基本使用',
          },
        },
        type: 'PlayGround',
        codeText: P5CodeText,
        renderChildren: () => <P5 />,
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="TableList">
        <p>表格列表配置</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: '属性',
            data: [
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
            ],
          },
          {
            border: true,
            title: '搜索区域配置',
            data: [
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
                type: (
                  <Link to="/adhere/component/ui/formitemcreator">
                    FormItemCreator的columns属性
                  </Link>
                ),
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
            ],
          },
          {
            border: true,
            title: '工具栏区域配置',
            data: [
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
                type: (
                  <Link to="/adhere/component/ui/formitemcreator">
                    FormItemCreator的columns属性
                  </Link>
                ),
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
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
