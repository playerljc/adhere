import SelectPersonCodeText from '!!raw-loader!./SelectPerson';
import TaskCodeText from '!!raw-loader!./Task';
import P1CodeText from '!!raw-loader!./examples/p1';
import P2CodeText from '!!raw-loader!./examples/p2';
import P3CodeText from '!!raw-loader!./examples/p3';
import P4CodeText from '!!raw-loader!./examples/p4';
import P5CodeText from '!!raw-loader!./examples/p5';
import P6CodeText from '!!raw-loader!./examples/p6';
import P7CodeText from '!!raw-loader!./examples/p7';
import P8CodeText from '!!raw-loader!./examples/p8';
import P9CodeText from '!!raw-loader!./examples/p9';
import P10CodeText from '!!raw-loader!./examples/p10';
import P11CodeText from '!!raw-loader!./examples/p11';
import P12CodeText from '!!raw-loader!./examples/p12';
import P13CodeText from '!!raw-loader!./examples/p13';
import P14CodeText from '!!raw-loader!./examples/p14';

import React from 'react';

import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  PropsSection,
  Section,
} from '@/lib/PlaygroundPage';

import P1 from './examples/p1';
import P2 from './examples/p2';
import P3 from './examples/p3';
import P4 from './examples/p4';
import P5 from './examples/p5';
import P6 from './examples/p6';
import P7 from './examples/p7';
import P8 from './examples/p8';
import P9 from './examples/p9';
import P10 from './examples/p10';
import P11 from './examples/p11';
import P12 from './examples/p12';
import P13 from './examples/p13';
import P14 from './examples/p14';

export default () => {
  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `Confirm`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'Confirm',
            info: '使用Confirm',
          },
        },
        type: 'PlayGround',
        codeText: P1CodeText,
        renderChildren: () => <P1 />,
      },
      {
        id: `p2`,
        name: `Alert`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'Alert',
            info: '使用Alert',
          },
        },
        type: 'PlayGround',
        codeText: P2CodeText,
        renderChildren: () => <P2 />,
      },
      {
        id: `p3`,
        name: `Prompt`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'Prompt',
            info: '使用Prompt',
          },
        },
        type: 'PlayGround',
        codeText: P3CodeText,
        renderChildren: () => <P3 />,
      },
      {
        id: `p4`,
        name: `InputPrompt`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'InputPrompt',
            info: '使用InputPrompt',
          },
        },
        type: 'PlayGround',
        codeText: P4CodeText,
        renderChildren: () => <P4 />,
      },
      {
        id: `p5`,
        name: `TextAreaPrompt`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'TextAreaPrompt',
            info: '使用TextAreaPrompt',
          },
        },
        type: 'PlayGround',
        codeText: P5CodeText,
        renderChildren: () => <P5 />,
      },
      {
        id: `p6`,
        name: `PassWordPrompt`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'PassWordPrompt',
            info: '使用PassWordPrompt',
          },
        },
        type: 'PlayGround',
        codeText: P6CodeText,
        renderChildren: () => <P6 />,
      },
      {
        id: `p7`,
        name: `NumberPrompt`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'NumberPrompt',
            info: '使用NumberPrompt',
          },
        },
        type: 'PlayGround',
        codeText: P7CodeText,
        renderChildren: () => <P7 />,
      },
      {
        id: `p8`,
        name: `Modal`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'Modal',
            info: '使用Modal',
          },
        },
        type: 'PlayGround',
        codeText: P8CodeText,
        renderChildren: () => <P8 />,
      },
      {
        id: `p9`,
        name: `MaximizeModal`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'MaximizeModal',
            info: '使用MaximizeModal',
          },
        },
        type: 'PlayGround',
        codeText: P9CodeText,
        renderChildren: () => <P9 />,
      },
      {
        id: `p10`,
        name: '使用TriggerPrompt弹出MessageDialog',
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '使用TriggerPrompt弹出MessageDialog',
            info: '基本的显示 - 只显示内容',
          },
        },
        type: 'PlayGround',
        codeText: P10CodeText,
        renderChildren: () => <P10 />,
      },
      {
        id: `p11`,
        name: '使用TriggerPrompt选取人员',
        cardProps: {
          description: {
            title: '使用TriggerPrompt选取人员',
            info: '在弹出的穿梭框中选取指定的人员',
          },
        },
        active: 'p11.jsx',
        config: [
          {
            key: 'p11.jsx',
            title: 'p11.jsx',
            codeText: P11CodeText,
          },
          {
            key: 'SelectPerson.jsx',
            title: 'SelectPerson.jsx',
            codeText: SelectPersonCodeText,
          },
        ],
        type: 'PlayGroundTab',
        renderChildren: () => <P11 />,
      },
      {
        id: `p12`,
        name: '在表单中当作一个FormItem来使用TriggerPrompt',
        cardProps: {
          description: {
            title: '在表单中当作一个FormItem来使用TriggerPrompt',
            info: '在表单中当作一个FormItem来使用TriggerPrompt',
          },
        },
        type: 'PlayGroundTab',
        active: 'p12.jsx',
        config: [
          {
            key: 'p12.jsx',
            title: 'p12.jsx',
            codeText: P12CodeText,
          },
          {
            key: 'SelectPerson.jsx',
            title: 'SelectPerson.jsx',
            codeText: SelectPersonCodeText,
          },
        ],
        renderChildren: () => <P12 />,
      },
      {
        id: `p13`,
        name: '处理一个表单',
        cardProps: {
          description: {
            title: '弹出一个表单进行处理',
            info: '弹出一个表单进行处理',
          },
        },
        type: 'PlayGroundTab',
        active: 'p13.jsx',
        config: [
          {
            key: 'p13.jsx',
            title: 'p13.jsx',
            codeText: P13CodeText,
          },
          {
            key: 'Task.jsx',
            title: 'Task.jsx',
            codeText: TaskCodeText,
          },
        ],
        renderChildren: () => <P13 />,
      },
      {
        id: `p14`,
        name: '动态设置Modal的参数',
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '动态设置Modal的参数',
            info: '动态设置Modal的参数',
          },
        },
        type: 'PlayGround',
        codeText: P14CodeText,
        renderChildren: () => <P14 />,
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="MessageDialog">
        <p>对 ant-design 的&lt;Model&gt;进行封装</p>
        <ul>
          <li>- 支持使用 open 方式打开</li>
          <li>- 支持 Modal 原始方法</li>
          <li>- 支持预定义 Alert、Confirm</li>
          <li>- 不与变量进行绑定，开箱即用的功能</li>
        </ul>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <FunctionPropsSection
        title="Api"
        config={[
          {
            border: true,
            title: 'Confirm方法',
            data: [
              {
                name: 'MessageDialog.Confirm',
                desc: '打开确认对话框',
                modifier: 'static',
                params: [
                  {
                    name: 'title',
                    desc: '标题',
                    type: 'String | React.ReactElement',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'text',
                    desc: '显示的内容',
                    type: 'String | React.ReactElement',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'width',
                    desc: '宽度',
                    type: 'number',
                    defaultVal: '300',
                    required: '',
                  },
                  {
                    name: 'zIndex',
                    desc: '层级',
                    type: 'number',
                    defaultVal: '1000',
                    required: '',
                  },
                  {
                    name: 'local',
                    desc: '语言',
                    type: 'string [zh_CN | pt_PT | en_US]',
                    defaultVal: 'zh_CN',
                    required: '',
                  },
                  {
                    name: 'icon',
                    desc: '图标',
                    type: 'string | React.ReactElement',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'onSuccess',
                    desc: '成功的回调函数，返回Promise',
                    type: 'Function',
                    defaultVal: '() => {}',
                    required: '',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'Alert方法',
            data: [
              {
                name: 'MessageDialog.Alert',
                desc: '打开Alert对话框',
                modifier: 'static',
                params: [
                  {
                    name: 'title',
                    desc: '标题',
                    type: 'String | React.ReactElement',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'text',
                    desc: '显示的内容',
                    type: 'String | React.ReactElement',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'width',
                    desc: '宽度',
                    type: 'number',
                    defaultVal: '300',
                    required: '',
                  },
                  {
                    name: 'zIndex',
                    desc: '层级',
                    type: 'number',
                    defaultVal: '1000',
                    required: '',
                  },
                  {
                    name: 'local',
                    desc: '语言',
                    type: 'string [zh_CN | pt_PT | en_US]',
                    defaultVal: 'zh_CN',
                    required: '',
                  },
                  {
                    name: 'icon',
                    desc: '图标',
                    type: 'string | React.ReactElement',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'Prompt方法',
            data: [
              {
                name: 'MessageDialog.Prompt',
                desc: '打开一个FormItem的窗体',
                modifier: 'static',
                params: [
                  {
                    name: 'title',
                    desc: '标题',
                    type: 'String | React.ReactElement',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'config',
                    desc: 'FormItemCreator的一个配置，请参考adhere-ui-formitemcreator',
                    type: 'Object',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'layout',
                    desc: 'FormItemCreator的layout配置，请参考adhere-ui-formitemcreator',
                    type: 'Object',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'width',
                    desc: '宽度',
                    type: 'number',
                    defaultVal: '300',
                    required: '',
                  },
                  {
                    name: 'zIndex',
                    desc: '层级',
                    type: 'number',
                    defaultVal: '1000',
                    required: '',
                  },
                  {
                    name: 'local',
                    desc: '语言',
                    type: 'string [zh_CN | pt_PT | en_US]',
                    defaultVal: 'zh_CN',
                    required: '',
                  },
                  {
                    name: 'icon',
                    desc: '图标',
                    type: 'string | React.ReactElement',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'InputPrompt方法',
            data: [
              {
                name: 'MessageDialog.InputPrompt方法',
                desc: '打开一个InputFormItem的窗体',
                modifier: 'static',
                params: [
                  {
                    name: 'title',
                    desc: '标题',
                    type: 'String | React.ReactElement',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'config',
                    desc: 'FormItemCreator的一个配置，请参考adhere-ui-formitemcreator',
                    type: 'Object',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'layout',
                    desc: 'FormItemCreator的layout配置，请参考adhere-ui-formitemcreator',
                    type: 'Object',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'width',
                    desc: '宽度',
                    type: 'number',
                    defaultVal: '300',
                    required: '',
                  },
                  {
                    name: 'zIndex',
                    desc: '层级',
                    type: 'number',
                    defaultVal: '1000',
                    required: '',
                  },
                  {
                    name: 'local',
                    desc: '语言',
                    type: 'string [zh_CN | pt_PT | en_US]',
                    defaultVal: 'zh_CN',
                    required: '',
                  },
                  {
                    name: 'icon',
                    desc: '图标',
                    type: 'string | React.ReactElement',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'TextAreaPrompt方法',
            data: [
              {
                name: 'MessageDialog.TextAreaPrompt方法',
                desc: '打开一个TextAreaFormItem的窗体',
                modifier: 'static',
                params: [
                  {
                    name: 'title',
                    desc: '标题',
                    type: 'String | React.ReactElement',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'config',
                    desc: 'FormItemCreator的一个配置，请参考adhere-ui-formitemcreator',
                    type: 'Object',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'layout',
                    desc: 'FormItemCreator的layout配置，请参考adhere-ui-formitemcreator',
                    type: 'Object',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'width',
                    desc: '宽度',
                    type: 'number',
                    defaultVal: '300',
                    required: '',
                  },
                  {
                    name: 'zIndex',
                    desc: '层级',
                    type: 'number',
                    defaultVal: '1000',
                    required: '',
                  },
                  {
                    name: 'local',
                    desc: '语言',
                    type: 'string [zh_CN | pt_PT | en_US]',
                    defaultVal: 'zh_CN',
                    required: '',
                  },
                  {
                    name: 'icon',
                    desc: '图标',
                    type: 'string | React.ReactElement',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'PassWordPrompt方法',
            data: [
              {
                name: 'MessageDialog.PassWordPrompt方法',
                desc: '打开一个PassWordFormItem的窗体',
                modifier: 'static',
                params: [
                  {
                    name: 'title',
                    desc: '标题',
                    type: 'String | React.ReactElement',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'config',
                    desc: 'FormItemCreator的一个配置，请参考adhere-ui-formitemcreator',
                    type: 'Object',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'layout',
                    desc: 'FormItemCreator的layout配置，请参考adhere-ui-formitemcreator',
                    type: 'Object',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'width',
                    desc: '宽度',
                    type: 'number',
                    defaultVal: '300',
                    required: '',
                  },
                  {
                    name: 'zIndex',
                    desc: '层级',
                    type: 'number',
                    defaultVal: '1000',
                    required: '',
                  },
                  {
                    name: 'local',
                    desc: '语言',
                    type: 'string [zh_CN | pt_PT | en_US]',
                    defaultVal: 'zh_CN',
                    required: '',
                  },
                  {
                    name: 'icon',
                    desc: '图标',
                    type: 'string | React.ReactElement',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'NumberPromptPrompt方法',
            data: [
              {
                name: 'MessageDialog.NumberPrompt方法',
                desc: '打开一个NumberFormItem的窗体',
                modifier: 'static',
                params: [
                  {
                    name: 'title',
                    desc: '标题',
                    type: 'String | React.ReactElement',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'config',
                    desc: 'FormItemCreator的一个配置，请参考adhere-ui-formitemcreator',
                    type: 'Object',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'layout',
                    desc: 'FormItemCreator的layout配置，请参考adhere-ui-formitemcreator',
                    type: 'Object',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'width',
                    desc: '宽度',
                    type: 'number',
                    defaultVal: '300',
                    required: '',
                  },
                  {
                    name: 'zIndex',
                    desc: '层级',
                    type: 'number',
                    defaultVal: '1000',
                    required: '',
                  },
                  {
                    name: 'local',
                    desc: '语言',
                    type: 'string [zh_CN | pt_PT | en_US]',
                    defaultVal: 'zh_CN',
                    required: '',
                  },
                  {
                    name: 'icon',
                    desc: '图标',
                    type: 'string | React.ReactElement',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'Modal方法',
            data: [
              {
                name: 'MessageDialog.Modal',
                desc: '打开一个模式对话框',
                modifier: 'static',
                params: [
                  {
                    name: 'config',
                    desc: '配置',
                    type: 'Object - antd的Modal的配置',
                    defaultVal: '{}',
                    required: '',
                  },
                  {
                    name: 'children',
                    desc: '显示的内容',
                    type: 'React.ReactElement | null',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'defaultCloseBtn',
                    desc: '是否缺省有关闭按钮',
                    type: 'boolean',
                    defaultVal: 'true',
                    required: '',
                  },
                  {
                    name: 'local',
                    desc: '语言',
                    type: 'string [zh_CN | pt_PT | en_US]',
                    defaultVal: 'zh_CN',
                    required: '',
                  },
                ],
                returnType: 'HtmlElement',
                returnDesc: '返回Modal的HtmlElement对象',
              },
            ],
          },
          {
            border: true,
            title: 'MaximizeModal方法',
            data: [
              {
                name: 'MessageDialog.MaximizeModal',
                desc: '打开一个可以最大化和还原的对话框',
                modifier: 'static',
                params: [
                  {
                    name: 'config',
                    desc: '配置',
                    type: 'Object - antd的Modal的配置',
                    defaultVal: '{}',
                    required: '',
                  },
                  {
                    name: 'children',
                    desc: '显示的内容',
                    type: 'React.ReactElement | null',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'defaultCloseBtn',
                    desc: '是否缺省有关闭按钮',
                    type: 'boolean',
                    defaultVal: 'true',
                    required: '',
                  },
                  {
                    name: 'local',
                    desc: '语言',
                    type: 'string [zh_CN | pt_PT | en_US]',
                    defaultVal: 'zh_CN',
                    required: '',
                  },
                ],
                returnType: 'HtmlElement',
                returnDesc: '返回Modal的HtmlElement对象',
              },
            ],
          },
          {
            border: true,
            title: 'Close方法',
            data: [
              {
                name: 'MessageDialog.close',
                desc: '关闭一个Modal对话框',
                modifier: 'static',
                params: [
                  {
                    name: 'el',
                    desc: 'Model的el,一般是MessageDialog.Modal的返回值',
                    type: 'HtmlElement',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'Trigger',
            data: [
              {
                name: 'MessageDialog.Trigger',
                desc: 'Trigger组件',
                modifier: 'static',
                params: [],
                returnType: 'ReactFunction',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'TriggerPrompt',
            data: [
              {
                name: 'MessageDialog.TriggerPrompt',
                desc: 'Trigger组件',
                modifier: 'static',
                params: [],
                returnType: 'ReactFunction',
                returnDesc: '',
              },
            ],
          },
        ]}
      />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'Trigger',
            data: [
              {
                params: 'className',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'children',
                desc: '',
                type: 'any',
                defaultVal: '',
              },
              {
                params: 'value',
                desc: '',
                type: 'any',
                defaultVal: '',
              },
              {
                params: 'onChange',
                desc: '',
                type: '(params?: any) => void',
                defaultVal: '',
              },
              {
                params: 'renderTrigger',
                desc: '',
                type: '() => ReactNode',
                defaultVal: '',
              },
              {
                params: 'maximized',
                desc: '',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'actions',
                desc: '',
                type: `
                  Omit<ButtonProps, 'onClick'> &
                    {
                      key: any;
                      onClick?: () => Promise<any>;
                    }[];
                  modalConfig?: Omit<
                    Omit<ModalArgv, 'config'> & {
                      config?: Omit<ModalProps, 'footer'>;
                    },
                    'children' | 'defaultCloseBtn'
                  >
                `,
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'TriggerPrompt',
            data: [
              {
                params: 'onSubmit',
                desc: '提交，resolve的值是onChange的参数',
                type: '() => Promise<any>',
                defaultVal: '',
              },
              {
                params: 'modalConfig',
                desc: 'Modal的配置',
                type: "Omit<ModalArgv, 'children' | 'defaultCloseBtn'>",
                defaultVal: '',
              },
              {
                params: 'okText',
                desc: '确定按钮的文本',
                type: 'string',
                defaultVal: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
