import React, { useEffect, useRef, useState } from 'react';

import AnchorNavigation from '@/lib/AnchorNavigation';
import CodeBoxPanel from '@/lib/CodeBoxPanel';
import Playground from '@/lib/Playground';
import PlaygroundMulit from '@/lib/PlaygroundMulit';
import Props from '@/lib/Props';
import FunctionProps from '@/lib/FunctionProps';
import { DelConfirm, Space, PlayGround } from '@baifendian/adhere';

const arr = [];
arr.length = 10;
arr.fill(0);

export default () => {
  const [scrollEl, setScrollEl] = useState();
  const ref = useRef();

  function renderBoxPanel() {
    return arr.map((t, index) => {
      if (index % 2 === 0) {
        return (
          <Playground
            key={index}
            id={`p${index + 1}`}
            mode="code"
            scope={{ React }}
            cardProps={{
              description: {
                title: '123',
                info: '123',
              },
            }}
            codeText={`
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
      `}
          >
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
          </Playground>
        );
      } else {
        return (
          <PlaygroundMulit
            key={index}
            id={`p${index + 1}`}
            cardProps={{
              description: {
                title: '123',
                info: '123',
              },
            }}
            config={[
              {
                title: 'imageselect.jsx',
                mode: 'code',
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
                title: 'imageselect.less',
                mode: 'code',
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
            ]}
          >
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
          </PlaygroundMulit>
        );
      }
    });
  }

  useEffect(() => {
    setScrollEl(ref.current.parentElement.parentElement);
  }, []);

  return (
    <PlayGround.AnchorNavigationContext.Provider
      value={{
        scrollEl,
      }}
    >
      <div className="Page" ref={ref}>
        <AnchorNavigation
          anchors={arr.map((t, index) => ({ name: '123', anchor: `p${index + 1}` }))}
          anchorPosition={{
            top: 77,
            width: 120,
          }}
        >
          <h1>Component</h1>
          <p>XXXXXXXXX</p>

          <Space />

          <h2>代码演示</h2>
          <CodeBoxPanel columnCount={1}>{renderBoxPanel()}</CodeBoxPanel>

          <Space />

          <h2>Props</h2>
          <Props
            border
            title="FlexLayout"
            data={[
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
            ]}
          />

          <Space />

          <h2>Api</h2>
          <FunctionProps
            border
            title="方法"
            data={[
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
            ]}
          />
        </AnchorNavigation>
      </div>
    </PlayGround.AnchorNavigationContext.Provider>
  );
};
