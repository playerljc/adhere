import React from 'react';

import { DelConfirm } from '@baifendian/adhere';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

const arr = [];
arr.length = 10;
arr.fill(0);

export default () => {
  function boxPanelConfig() {
    return arr.map((t, index) => {
      if (index % 3 === 0) {
        return {
          id: `p${index + 1}`,
          name: `p${index + 1}`,
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
          type: 'PlayGroundMulti',
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
      <Section title="PlayGround">
        <p>一个代码展示的组件</p>
        <ul style={{ listStyle: 'disc', marginLeft: 20 }}>
          <li>PlayGround - React的代码单文件展示</li>
          <li>PlayGroundTab - React的多标签文件展示</li>
          <li>PlayGroundMulti - React的代码多文件展示</li>
          <li>PlayGroundPage - React的整体代码展示(包括代码组和导航等)</li>
          <li>Props - React组件的Props说明</li>
          <li>FunctionProps - 类方法说明</li>
          <li>CodePanel - 代码片段</li>
          <li>CodeTabPanel - 多标签代码片段</li>
          <li>CodeBoxPanel - 代码片段组</li>
          <li>AnchorNavigation - 带有锚点的导航</li>
        </ul>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'CodePanel',
            data: [
              {
                params: 'codeText',
                desc: '展示的代码',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'expand',
                desc: '是否展开代码区域',
                type: 'boolean',
                defaultVal: 'false',
              },
            ],
          },
          {
            border: true,
            title: 'CodeTabPanel',
            data: [
              {
                params: 'active',
                desc: '激活项',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'config',
                desc: '',
                type: 'ICodeTabPanelItemProps[]',
                defaultVal: '[]',
              },
              {
                params: 'onChange',
                desc: '',
                type: 'Function',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'PlayGround',
            data: [
              {
                params: 'id',
                desc: 'id',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'codeText',
                desc: '展示的代码',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'expand',
                desc: '是否展开代码区域',
                type: 'boolean',
                defaultVal: 'false',
              },
              {
                params: 'cardProps',
                desc: 'card的配置',
                type: 'cardPropTypes',
                defaultVal: '',
              },
              {
                params: 'isActive',
                desc: '是否激活',
                type: 'boolean',
                defaultVal: 'false',
              },
            ],
          },
          {
            border: true,
            title: 'PlayGroundTab',
            data: [
              {
                params: 'id',
                desc: 'id',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'codeText',
                desc: '展示的代码',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'expand',
                desc: '是否展开代码区域',
                type: 'boolean',
                defaultVal: 'false',
              },
              {
                params: 'cardProps',
                desc: 'card的配置',
                type: 'cardPropTypes',
                defaultVal: '',
              },
              {
                params: 'isActive',
                desc: '是否激活',
                type: 'boolean',
                defaultVal: 'false',
              },
              {
                params: 'active',
                desc: '激活项',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'config',
                desc: '',
                type: 'ICodeTabPanelItemProps[]',
                defaultVal: '[]',
              },
              {
                params: 'onChange',
                desc: '',
                type: 'Function',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'PlayGroundMulti',
            data: [
              {
                params: 'id',
                desc: 'id',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'config',
                desc: '配置',
                type: 'PlayGround[]',
                defaultVal: '[]',
              },
              {
                params: 'expand',
                desc: '是否展开代码区域',
                type: 'boolean',
                defaultVal: 'false',
              },
              {
                params: 'cardProps',
                desc: 'card的配置',
                type: 'cardPropTypes',
                defaultVal: '',
              },
              {
                params: 'isActive',
                desc: '是否激活',
                type: 'boolean',
                defaultVal: 'false',
              },
            ],
          },
          {
            border: true,
            title: 'PlayGroundPage',
            data: [
              {
                params: 'className',
                desc: '样式',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '样式',
                type: 'object',
                defaultVal: '',
              },
              {
                params: 'anchorPosition',
                desc: '锚点的位置',
                type: '{top:string,width:string}',
                defaultVal: '{top:77,width:120}',
              },
            ],
          },
          {
            border: true,
            title: 'PlayGroundPage.Section',
            data: [
              {
                params: 'className',
                desc: '样式',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '样式',
                type: 'object',
                defaultVal: '',
              },
              {
                params: 'title',
                desc: '标题',
                type: 'string | React.ReactElement',
                defaultVal: '',
              },
              {
                params: 'extra',
                desc: '右侧扩展',
                type: 'string | React.ReactElement',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'PlayGroundPage.PropsSection',
            data: [
              {
                params: 'className',
                desc: '样式',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '样式',
                type: 'object',
                defaultVal: '',
              },
              {
                params: 'title',
                desc: '标题',
                type: 'string | React.ReactElement',
                defaultVal: '',
              },
              {
                params: 'extra',
                desc: '右侧扩展',
                type: 'string | React.ReactElement',
                defaultVal: '',
              },
              {
                params: 'config',
                desc: '配置',
                type: 'Array',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'PlayGroundPage.FunctionPropsSection',
            data: [
              {
                params: 'className',
                desc: '样式',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '样式',
                type: 'object',
                defaultVal: '',
              },
              {
                params: 'title',
                desc: '标题',
                type: 'string | React.ReactElement',
                defaultVal: '',
              },
              {
                params: 'extra',
                desc: '右侧扩展',
                type: 'string | React.ReactElement',
                defaultVal: '',
              },
              {
                params: 'config',
                desc: '配置',
                type: 'Array',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'PlayGroundPage.CodeBoxSection',
            data: [],
          },
          {
            border: true,
            title: 'CodeBoxPanel',
            data: [
              {
                params: 'title',
                desc: '',
                type: 'string | React.ReactElement',
                defaultVal: '',
              },
              {
                params: 'extra',
                desc: '',
                type: 'React.ReactElement',
                defaultVal: '',
              },
              {
                params: 'isShowExpandAllBtn',
                desc: '是否显示展开全部代码按钮',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'columnCount',
                desc: '列数',
                type: 'number',
                defaultVal: '1',
              },
              {
                params: 'expandAll',
                desc: '是否全部展开代码',
                type: 'boolean',
                defaultVal: 'false',
              },
              {
                params: 'config',
                desc: 'Box配置',
                type: 'ICodeBoxProps',
                defaultVal: '[]',
              },
            ],
          },
          {
            border: true,
            title: 'AnchorNavigation',
            data: [
              {
                params: 'activeAnchor',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'anchors',
                desc: '',
                type: 'Array<{name: string, anchor: string}>',
                defaultVal: '',
              },
              {
                params: 'anchorPosition',
                desc: '',
                type: '{top: number, width: number}}',
                defaultVal: '{top: 77, width: 120}',
              },
            ],
          },
          {
            border: true,
            title: 'Props',
            data: [
              {
                params: 'data',
                desc: '数据',
                type: 'IProps[]',
                defaultVal: '[]',
              },
            ],
          },
          {
            border: true,
            title: 'FunctionProps',
            data: [
              {
                params: 'data',
                desc: '数据',
                type: 'IFunctionProps[]',
                defaultVal: '[]',
              },
            ],
          },
          {
            border: true,
            title: 'IProps',
            data: [
              {
                params: 'params',
                desc: '参数名称',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'desc',
                desc: '参数描述',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'type',
                desc: '参数类型',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'defaultVal',
                desc: '参数 默认值',
                type: 'string',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'IFunctionProps',
            data: [
              {
                params: 'name',
                desc: '函数名称',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'desc',
                desc: '函数描述',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'modifier',
                desc: '函数修饰符',
                type: "'static' | 'public' | 'private' | 'protected'",
                defaultVal: 'public',
              },
              {
                params: 'params',
                desc: '函数参数',
                type: 'IParams[]',
                defaultVal: '[]',
              },
              {
                params: 'returnType',
                desc: '函数返回值类型',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'returnType',
                desc: '函数返回值说明',
                type: 'string',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'IParams',
            data: [
              {
                params: 'name',
                desc: '参数名称',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'desc',
                desc: '参数说明',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'type',
                desc: '参数类型',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'defaultVal',
                desc: '默认值',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'required',
                desc: '是否必填',
                type: 'boolean',
                defaultVal: 'false',
              },
            ],
          },
          {
            border: true,
            title: 'ICodeBoxProps',
            data: [
              {
                params: 'title',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'extra',
                desc: '',
                type: 'React.ReactElement',
                defaultVal: '',
              },
              {
                params: 'isShowExpandAllBtn',
                desc: '',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'columnCount',
                desc: '',
                type: 'number',
                defaultVal: '1',
              },
              {
                params: 'expandAll',
                desc: '',
                type: 'boolean',
                defaultVal: 'false',
              },
              {
                params: 'config',
                desc: '',
                type: 'Array<ICodeBoxPlayGroundProps | ICodeBoxPlayGroundMultiProps>',
                defaultVal: '[]',
              },
            ],
          },
          {
            border: true,
            title: 'ICodeBoxPlayGroundProps',
            data: [
              {
                params: 'type',
                desc: '',
                type: 'string',
                defaultVal: 'PlayGround',
              },
              {
                params: 'renderWrap',
                desc: '',
                type: 'Function',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'ICodeBoxPlayGroundMultiProps',
            data: [
              {
                params: 'type',
                desc: '',
                type: 'string',
                defaultVal: 'PlayGroundMulti',
              },
              {
                params: 'renderWrap',
                desc: '',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'renderChildren',
                desc: '',
                type: 'Function',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'ICodeTabPanelItemProps',
            data: [
              {
                params: 'key',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'title',
                desc: '',
                type: 'string | React.ReactElement',
                defaultVal: '',
              },
              {
                params: 'codeText',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'theme',
                desc: '',
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
