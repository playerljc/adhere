import React from 'react';
import { Result, Button } from 'antd';
import { MessageDialog, FormItemCreator } from '@baifendian/adhere';

import icon from './icon.svg';

import PlayGroundPage, {
  Section,
  CodeBoxSection,
  FunctionPropsSection,
} from '@/lib/PlaygroundPage';

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
        codeText: `
  import React from 'react';
  import { Button } from 'antd';
  import { MessageDialog } from '@baifendian/adhere';

  <Button
    type="primary"
    onClick={() => {
      MessageDialog.Confirm({
        title: '提示',
        text: '确认要进行此操作码？',
        width: 300,
        zIndex: 1000,
        local: 'zh_CN',
        icon: <img src={icon} alt="" width={30} />,
        onSuccess: () => {
          return new Promise((resolve) => {
            alert('点击了确认');

            resolve();
          });
        },
      });
    }}
  >
    Open Confirm
  </Button>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <Button
            type="primary"
            onClick={() => {
              MessageDialog.Confirm({
                title: '提示',
                text: '确认要进行此操作码？',
                width: 300,
                zIndex: 1000,
                local: 'zh_CN',
                icon: <img src={icon} alt="" width={30} />,
                onSuccess: () => {
                  return new Promise((resolve) => {
                    alert('点击了确认');

                    resolve();
                  });
                },
              });
            }}
          >
            Open Confirm
          </Button>
        ),
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
        codeText: `
  import React from 'react';
  import { Button } from 'antd';
  import { MessageDialog } from '@baifendian/adhere';

  <Button
    type="primary"
    onClick={() => {
      MessageDialog.Alert({
        title: '提示',
        text: '操作失败！',
        width: 300,
        zIndex: 1000,
        local: 'zh_CN',
        icon: <img src={icon} alt="" width={30} />,
      });
    }}
  >
    Open Alert
  </Button>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <Button
            type="primary"
            onClick={() => {
              MessageDialog.Alert({
                title: '提示',
                text: '操作失败！',
                width: 300,
                zIndex: 1000,
                local: 'zh_CN',
                icon: <img src={icon} alt="" width={30} />,
              });
            }}
          >
            Open Alert
          </Button>
        ),
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
        codeText: `
  import React from 'react';
  import { Button } from 'antd';
  import { MessageDialog,FormItemCreator } from '@baifendian/adhere';

  <Button
    type="primary"
    onClick={() => {
      MessageDialog.Prompt({
        title: '提示',
        config: {
          type: FormItemCreator.SLIDER,
          label: '大小',
          initialValue: 10,
        },
        width: 300,
        zIndex: 1000,
        local: 'zh_CN',
        onSuccess: (value) => {
          return new Promise((resolve) => {
            alert(value);
            resolve();
          });
        },
      });
    }}
  >
    Open Prompt
  </Button>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <Button
            type="primary"
            onClick={() => {
              MessageDialog.Prompt({
                title: '提示',
                config: {
                  type: FormItemCreator.SLIDER,
                  label: '大小',
                  initialValue: 10,
                },
                width: 300,
                zIndex: 1000,
                local: 'zh_CN',
                onSuccess: (value) => {
                  return new Promise((resolve) => {
                    alert(value);
                    resolve();
                  });
                },
              });
            }}
          >
            Open Prompt
          </Button>
        ),
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
        codeText: `
  import React from 'react';
  import { Button } from 'antd';
  import { MessageDialog } from '@baifendian/adhere';

  <Button
    type="primary"
    onClick={() => {
      MessageDialog.InputPrompt({
        title: '提示',
        config: {
          label: '姓名',
          initialValue: '张三',
        },
        width: 300,
        zIndex: 1000,
        local: 'zh_CN',
        onSuccess: (value) => {
          return new Promise((resolve) => {
            alert(value);
            resolve();
          });
        },
      });
    }}
  >
    Open InputPrompt
  </Button>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <Button
            type="primary"
            onClick={() => {
              MessageDialog.InputPrompt({
                title: '提示',
                config: {
                  label: '姓名',
                  initialValue: '张三',
                },
                width: 300,
                zIndex: 1000,
                local: 'zh_CN',
                onSuccess: (value) => {
                  return new Promise((resolve) => {
                    alert(value);
                    resolve();
                  });
                },
              });
            }}
          >
            Open InputPrompt
          </Button>
        ),
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
        codeText: `
  import React from 'react';
  import { Button } from 'antd';
  import { MessageDialog } from '@baifendian/adhere';

  <Button
    type="primary"
    onClick={() => {
      MessageDialog.TextAreaPrompt({
        title: '提示',
        config: {
          label: '地址',
          initialValue: '',
        },
        width: 300,
        zIndex: 1000,
        local: 'zh_CN',
        onSuccess: (value) => {
          return new Promise((resolve) => {
            alert(value);
            resolve();
          });
        },
      });
    }}
  >
    Open InputPrompt
  </Button>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <Button
            type="primary"
            onClick={() => {
              MessageDialog.TextAreaPrompt({
                title: '提示',
                config: {
                  label: '地址',
                  initialValue: '',
                },
                width: 300,
                zIndex: 1000,
                local: 'zh_CN',
                onSuccess: (value) => {
                  return new Promise((resolve) => {
                    alert(value);
                    resolve();
                  });
                },
              });
            }}
          >
            Open TextAreaPrompt
          </Button>
        ),
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
        codeText: `
  import React from 'react';
  import { Button } from 'antd';
  import { MessageDialog } from '@baifendian/adhere';

  <Button
    type="primary"
    onClick={() => {
      MessageDialog.PassWordPrompt({
        title: '提示',
        config: {
          label: '密码',
          initialValue: '',
        },
        width: 300,
        zIndex: 1000,
        local: 'zh_CN',
        onSuccess: (value) => {
          return new Promise((resolve) => {
            alert(value);
            resolve();
          });
        },
      });
    }}
  >
    Open PassWordPrompt
  </Button>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <Button
            type="primary"
            onClick={() => {
              MessageDialog.PassWordPrompt({
                title: '提示',
                config: {
                  label: '密码',
                  initialValue: '',
                },
                width: 300,
                zIndex: 1000,
                local: 'zh_CN',
                onSuccess: (value) => {
                  return new Promise((resolve) => {
                    alert(value);
                    resolve();
                  });
                },
              });
            }}
          >
            Open PassWordPrompt
          </Button>
        ),
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
        codeText: `
  import React from 'react';
  import { Button } from 'antd';
  import { MessageDialog } from '@baifendian/adhere';

  <Button
    type="primary"
    onClick={() => {
      MessageDialog.NumberPrompt({
        title: '提示',
        config: {
          label: '数字',
          initialValue: '',
        },
        width: 300,
        zIndex: 1000,
        local: 'zh_CN',
        onSuccess: (value) => {
          return new Promise((resolve) => {
            alert(value);
            resolve();
          });
        },
      });
    }}
  >
    Open NumberPrompt
  </Button>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <Button
            type="primary"
            onClick={() => {
              MessageDialog.NumberPrompt({
                title: '提示',
                config: {
                  label: '数字',
                  initialValue: '',
                },
                width: 300,
                zIndex: 1000,
                local: 'zh_CN',
                onSuccess: (value) => {
                  return new Promise((resolve) => {
                    alert(value);
                    resolve();
                  });
                },
              });
            }}
          >
            Open NumberPrompt
          </Button>
        ),
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
        codeText: `
  import React from 'react';
  import { Result, Button } from 'antd';
  import { MessageDialog } from '@baifendian/adhere';

  <Button
    type="primary"
    onClick={() => {
      const {close} = MessageDialog.Modal({
        config: {
          title: '提示',
        },
        defaultCloseBtn: false,
        children: (
          <Result
            title="Your operation has been executed"
            extra={
              <Button
                type="primary"
                key="console"
                onClick={() => {
                  // MessageDialog.close(el);
                  close();
                }}
              >
                Close
              </Button>
            }
          />
        ),
      });
    }}
  >
    Open Modal
  </Button>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <Button
            type="primary"
            onClick={() => {
              const { close } = MessageDialog.Modal({
                config: {
                  title: '提示',
                },
                defaultCloseBtn: false,
                children: (
                  <Result
                    title="Your operation has been executed"
                    extra={
                      <Button
                        type="primary"
                        key="console"
                        onClick={() => {
                          // MessageDialog.close(el);
                          close();
                        }}
                      >
                        Close
                      </Button>
                    }
                  />
                ),
              });
            }}
          >
            Open Modal
          </Button>
        ),
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
        ]}
      />
    </PlayGroundPage>
  );
};
