import P1CodeText from '!!raw-loader!./examples/p1';
import P2CodeText from '!!raw-loader!./examples/p2';
import P3CodeText from '!!raw-loader!./examples/p3';
import P4CodeText from '!!raw-loader!./examples/p4';
import P5CodeText from '!!raw-loader!./examples/p5';
import P6CodeText from '!!raw-loader!./examples/p6';
import P7CodeText from '!!raw-loader!./examples/p7';

import React from 'react';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

import P1 from './examples/p1';
import P2 from './examples/p2';
import P3 from './examples/p3';
import P4 from './examples/p4';
import P5 from './examples/p5';
import P6 from './examples/p6';
import P7 from './examples/p7';

export default () => {
  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `基本使用`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '基本使用',
            info: '【type=FormItemCreator.TEXT】',
          },
        },
        type: 'PlayGround',
        codeText: P1CodeText,
        renderChildren: () => <P1 />,
      },
      {
        id: `p2`,
        name: `文本框`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '文本框',
            info: `
              【type=FormItemCreator.TEXT | FormItemCreator.PASSWORD | FormItemCreator.TEXTAREA |
        FormItemCreator.NUMBER】
            `,
          },
        },
        type: 'PlayGround',
        codeText: P2CodeText,
        renderChildren: () => <P2 />,
      },
      {
        id: `p3`,
        name: `选择控件`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '选择控件',
            info: `
              【type=radio | checkbox | select】\r\n
              均是通过contentProps.options: [&lt;'label', 'value'&gt;]来配置选择项
            `,
          },
        },
        type: 'PlayGround',
        codeText: P3CodeText,
        renderChildren: () => <P3 />,
      },
      {
        id: `p4`,
        name: `滑动控件`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '滑动控件',
            info: `
              【type=switch | slider | Rate】
            `,
          },
        },
        type: 'PlayGround',
        codeText: P4CodeText,
        renderChildren: () => <P4 />,
      },
      {
        id: `p5`,
        name: `时间控件`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '时间控件',
            info: `
              【type=FormItemCreator.DATEPICKER | FormItemCreator.RANGEPICKER | FormItemCreator.TIMEPICKER
            `,
          },
        },
        type: 'PlayGround',
        codeText: P5CodeText,
        renderChildren: () => <P5 />,
      },
      {
        id: `p6`,
        name: `上传`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '上传',
            info: `
              【type=FormItemCreator.UPLOAD | FormItemCreator.DEFINE】
            `,
          },
        },
        type: 'PlayGround',
        codeText: P6CodeText,
        renderChildren: () => <P6 />,
      },
      {
        id: `p7`,
        name: `Skip`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'Skip',
            info: `
              【Skip使用例子】
            `,
          },
        },
        type: 'PlayGround',
        codeText: P7CodeText,
        renderChildren: () => <P7 />,
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="FormItemCreator">
        <p>表单配置</p>
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
                params: 'columns',
                desc: '配置数组',
                type: 'array',
                defaultVal: '',
              },
              {
                params: 'layout',
                desc: '{labelCol, wrapperCol} 配置布局会应用到每一个item中，如果需要单独特殊配置，columns里面会覆盖此配置',
                type: 'object',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: '表单中每一项的配置',
            data: [
              {
                params: 'type',
                desc: `表单项类型, 可选【\n
              FormItemCreator.INPUT, FormItemCreator.PASSWORD, FormItemCreator.TEXTAREA, FormItemCreator.NUMBER, FormItemCreator.RADIO, FormItemCreator.CHECKBOX, FormItemCreator.SELECT, \n
              FormItemCreator.SWITCH, FormItemCreator.SLIDER, FormItemCreator.RATE, FormItemCreator.DATEPICKER, FormItemCreator.RANGEPICKER, FormItemCreator.TIMEPICKER, FormItemCreator.DEFINE \n
            】`,
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'skip',
                desc: '是否跳过此项，如果为true，则不渲染此项内容',
                type: 'boolean',
                defaultVal: 'false',
              },
              {
                params: 'content',
                desc: 'type为FormItemCreator.DEFINE时需配置此项，自定义Form.item中包裹的组件 ',
                type: 'ReactNode',
                defaultVal: '',
              },
              {
                params: 'contentProps',
                desc: '传入被Form.Item包裹的组件的属性，\n 例如type为input则是antd中Input支持的属性，以此类推',
                type: 'ReactNode',
                defaultVal: '',
              },
              {
                params: '......',
                desc: (
                  <div>
                    支持antd中Form.Item的属性
                    <a
                      href="https://ant.design/components/form-cn/#Form.Item"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://ant.design/components/form-cn/#Form.Item
                    </a>
                  </div>
                ),
                type: '',
                defaultVal: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
