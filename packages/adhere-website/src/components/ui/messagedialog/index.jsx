import React from 'react';
import { Result, Button } from 'antd';
import { MessageDialog, FormItemCreator } from '@baifendian/adhere';

import FunctionProps from '@/lib/FunctionProps';
import Playground from '@/lib/Playground';
import icon from './icon.svg';

export default () => (
  <div className="Page">
    <h1>MessageDialog</h1>
    <p>对 ant-design 的&lt;Model&gt;进行封装</p>
    <ul>
      <li>- 支持使用 open 方式打开</li>
      <li>- 支持 Modal 原始方法</li>
      <li>- 支持预定义 Alert、Confirm</li>
      <li>- 不与变量进行绑定，开箱即用的功能</li>
    </ul>

    <h3>Confirm方法</h3>
    <FunctionProps
      data={[
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
      ]}
    />

    <h3>Alert方法</h3>
    <FunctionProps
      data={[
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
      ]}
    />

    <h3>Prompt方法</h3>
    <FunctionProps
      data={[
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
      ]}
    />

    <h3>InputPrompt方法</h3>
    <FunctionProps
      data={[
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
      ]}
    />

    <h3>TextAreaPrompt方法</h3>
    <FunctionProps
      data={[
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
      ]}
    />

    <h3>PassWordPrompt方法</h3>
    <FunctionProps
      data={[
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
      ]}
    />

    <h3>NumberPromptPrompt方法</h3>
    <FunctionProps
      data={[
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
      ]}
    />

    <h3>Modal方法</h3>
    <FunctionProps
      data={[
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
              name: 'defaultCloneBtn',
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
      ]}
    />

    <h3>Close方法</h3>
    <FunctionProps
      data={[
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
      ]}
    />

    <h2>使用Confirm</h2>
    <Playground
      mode="code"
      scope={{ React }}
      codeText={`
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
      `}
    >
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
    </Playground>

    <h2>使用Alert</h2>
    <Playground
      mode="code"
      scope={{ React }}
      codeText={`
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
      `}
    >
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
    </Playground>

    <h2>使用Prompt</h2>
    <Playground
      mode="code"
      scope={{ React }}
      codeText={`
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
      `}
    >
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
    </Playground>

    <h2>使用InputPrompt</h2>
    <Playground
      mode="code"
      scope={{ React }}
      codeText={`
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
      `}
    >
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
    </Playground>

    <h2>使用TextAreaPrompt</h2>
    <Playground
      mode="code"
      scope={{ React }}
      codeText={`
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
      `}
    >
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
    </Playground>

    <h2>使用PassWordPrompt</h2>
    <Playground
      mode="code"
      scope={{ React }}
      codeText={`
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
      `}
    >
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
    </Playground>

    <h2>使用NumberPrompt</h2>
    <Playground
      mode="code"
      scope={{ React }}
      codeText={`
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
      `}
    >
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
    </Playground>

    <h2>使用Modal</h2>
    <Playground
      mode="code"
      scope={{ React }}
      codeText={`
  import React from 'react';
  import { Result, Button } from 'antd';
  import { MessageDialog } from '@baifendian/adhere';
  
  <Button
    type="primary"
    onClick={() => {
      const el = MessageDialog.Modal({
        config: {
          title: '提示',
        },
        defaultCloneBtn: false,
        children: (
          <Result
            title="Your operation has been executed"
            extra={
              <Button
                type="primary"
                key="console"
                onClick={() => {
                  MessageDialog.close(el);
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
      `}
    >
      <Button
        type="primary"
        onClick={() => {
          const el = MessageDialog.Modal({
            config: {
              title: '提示',
            },
            defaultCloneBtn: false,
            children: (
              <Result
                title="Your operation has been executed"
                extra={
                  <Button
                    type="primary"
                    key="console"
                    onClick={() => {
                      MessageDialog.close(el);
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
    </Playground>
  </div>
);
