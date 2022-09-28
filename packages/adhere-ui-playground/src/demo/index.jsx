import React from 'react';
import ReactDOM from 'react-dom';

import { DelConfirm } from '@baifendian/adhere';

import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  PropsSection,
  Section,
} from './PlaygroundPage';

import '../index.less';
import './index.less';

const arr = [];
arr.length = 10;
arr.fill(0);

const Com = () => {
  function boxPanelConfig() {
    return arr.map((t, index) => {
      if (index % 3 === 0) {
        return {
          id: `p${index + 1}`,
          name: `p${index + 1}`,
          mode: 'code',
          scope: { React },
          cardProps: {
            description: {
              title: '123',
              info: '123',
            },
          },
          codeText: `
  import React from 'react';
  import { DelConfirm } from '@baifendian/adhere';

  <DelConfirm
    success={() => {
      return new Promise((resolve) => {
        alert('点击了确认');

        resolve();
      });
    }}
  >
    <a>删除</a>
  </DelConfirm>
      `,
          type: 'PlayGround',
          theme: 'eclipse',
          renderChildren: () => (
            <DelConfirm
              success={() => {
                return new Promise((resolve) => {
                  alert('点击了确认');

                  resolve();
                });
              }}
            >
              <a>删除</a>
            </DelConfirm>
          ),
        };
      }
      //
      else if (index % 3 === 1) {
        return {
          id: `p${index + 1}`,
          name: `p${index + 1}`,
          cardProps: {
            description: {
              title: '123',
              info: '123',
            },
          },
          config: [
            {
              title: 'a.jsx',
              mode: 'code',
              theme: 'eclipse',
              scope: { React },
              codeText: `
  import React from 'react';
  import { DelConfirm } from '@baifendian/adhere';

  <DelConfirm
    success={() => {
      return new Promise((resolve) => {
        alert('点击了确认');

        resolve();
      });
    }}
  >
    <a>删除</a>
  </DelConfirm>
                  `,
            },
            {
              title: 'a.less',
              mode: 'code',
              scope: { React },
              codeText: `
  .adhere-ui-delconfirm {
    position: relative;

    &:hover {
      cursor: pointer;
    }
  }
                  `,
            },
            {
              title: 'b.jsx',
              mode: 'code',
              scope: { React },
              type: 'CodeTabPanel',
              active: 'Typescript',
              config: [
                {
                  key: 'Typescript',
                  title: 'Typescript',
                  codeText: `
  import React from 'react';
  import { DelConfirm } from '@baifendian/adhere';

  console.log(111);

  <DelConfirm
    success={() => {
      return new Promise((resolve) => {
        alert('点击了确认');

        resolve();
      });
    }}
  >
    <a>删除</a>
  </DelConfirm>
      `,
                  theme: 'eclipse',
                },
                {
                  key: 'Javascript',
                  title: 'Javascript',
                  codeText: `
  import React from 'react';
  import { DelConfirm } from '@baifendian/adhere';

  console.log(222);

  <DelConfirm
    success={() => {
      return new Promise((resolve) => {
        alert('点击了确认');

        resolve();
      });
    }}
  >
    <a>删除</a>
  </DelConfirm>
      `,
                },
              ],
            },
          ],
          type: 'PlayGroundMulit',
          renderChildren: () => (
            <DelConfirm
              success={() => {
                return new Promise((resolve) => {
                  alert('点击了确认');

                  resolve();
                });
              }}
            >
              <a>删除</a>
            </DelConfirm>
          ),
        };
      }
      //
      else if (index % 3 === 2) {
        return {
          id: `p${index + 1}`,
          name: `p${index + 1}`,
          cardProps: {
            description: {
              title: '123',
              info: '123',
            },
          },
          active: 'Typescript',
          config: [
            {
              key: 'Typescript',
              title: 'Typescript',
              codeText: `
  import React from 'react';
  import { DelConfirm } from '@baifendian/adhere';

  console.log(111);

  <DelConfirm
    success={() => {
      return new Promise((resolve) => {
        alert('点击了确认');

        resolve();
      });
    }}
  >
    <a>删除</a>
  </DelConfirm>
      `,
              theme: 'eclipse',
            },
            {
              key: 'Javascript',
              title: 'Javascript',
              codeText: `
  import React from 'react';
  import { DelConfirm } from '@baifendian/adhere';

  console.log(222);

  <DelConfirm
    success={() => {
      return new Promise((resolve) => {
        alert('点击了确认');

        resolve();
      });
    }}
  >
    <a>删除</a>
  </DelConfirm>
      `,
            },
          ],
          type: 'PlayGroundTab',
          renderChildren: () => (
            <DelConfirm
              success={() => {
                return new Promise((resolve) => {
                  alert('点击了确认');

                  resolve();
                });
              }}
            >
              <a>删除</a>
            </DelConfirm>
          ),
        };
      }
    });
  }

  return (
    <PlayGroundPage>
      <Section title="Component">
        <p>XXXXXXXXX</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'FlexLayout',
            data: [
              {
                params: 'direction',
                desc: '方向',
                type: "string - ['vertical' | 'horizontal']",
                defaultVal: 'vertical',
              },
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
            ],
          },
        ]}
      />

      <FunctionPropsSection
        title="Api"
        config={[
          {
            border: true,
            title: '方法',
            data: [
              {
                name: 'init',
                desc: '进行初始化操作',
                modifier: 'public',
                params: [
                  {
                    name: 'currentLocale',
                    desc: "当前语言 'en_US' | 'zh_CN' | 'pt_PT'",
                    type: 'String',
                    defaultVal: 'zh_CN',
                    required: 'true',
                  },
                  {
                    name: 'locales',
                    desc: '语言的词条',
                    type: '{ [key: string]: any }',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'other',
                    desc: 'react-intl-universal其他的参数',
                    type: '',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'Promise',
                returnDesc: '',
              },
              {
                name: 'v',
                desc: '以中文获取国际化值',
                modifier: 'public',
                params: [
                  {
                    name: 'key',
                    desc: '词条中的value,中文',
                    type: 'String',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'variables',
                    desc: '替换表达式的参数',
                    type: 'object',
                    defaultVal: 'string',
                    required: '国际化后的值',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'get',
                desc: '',
                modifier: 'public',
                params: [
                  {
                    name: 'key',
                    desc: '词条中的key',
                    type: 'String',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'variables',
                    desc: '替换表达式的参数',
                    type: 'object',
                    defaultVal: 'string',
                    required: '国际化后的值',
                  },
                ],
                returnType: 'string',
                returnDesc: '国际化后的值',
              },
              {
                name: 'getHTML',
                desc: '',
                modifier: 'public',
                params: [
                  {
                    name: 'key',
                    desc: '词条中的key',
                    type: 'String',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'variables',
                    desc: '替换表达式的参数',
                    type: 'object',
                    defaultVal: 'string',
                    required: '国际化后的值',
                  },
                ],
                returnType: 'string',
                returnDesc: '国际化后的值',
              },
              {
                name: 'getInitOptions',
                desc: '获取配置',
                modifier: 'public',
                params: [],
                returnType: 'Object',
                returnDesc: '',
              },
              {
                name: 'formatMessage',
                desc: '',
                modifier: 'public',
                params: [
                  {
                    name: 'options',
                    desc: '',
                    type: 'Object',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'variables',
                    desc: '',
                    type: 'Object',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'string',
                returnDesc: '',
              },
              {
                name: 'formatHTMLMessage',
                desc: '',
                modifier: 'public',
                params: [
                  {
                    name: 'options',
                    desc: '',
                    type: 'Object',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'variables',
                    desc: '',
                    type: 'Object',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'string',
                returnDesc: '',
              },
              {
                name: 'load',
                desc: 'init之后载入其他国际化资源',
                modifier: 'public',
                params: [
                  {
                    name: 'locales',
                    desc: '',
                    type: 'Object',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
              {
                name: 'getLocal',
                desc: '转换词条',
                modifier: 'public',
                params: [
                  {
                    name: 'data',
                    desc: '词条',
                    type: 'Array',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'Object',
                returnDesc: '转换后的词条',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};

ReactDOM.render(<Com />, document.getElementById('app'));
