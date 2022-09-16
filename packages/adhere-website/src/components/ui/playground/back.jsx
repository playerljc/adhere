import React, { useEffect, useRef, useState } from 'react';

import { DelConfirm, PlayGround, Space } from '@baifendian/adhere';

import AnchorNavigation from '@/lib/AnchorNavigation';
import CodeBoxPanel from '@/lib/CodeBoxPanel';
import PlayGroundTab from '@/lib/PlayGroundTab';
import Props from '@/lib/Props';

const arr = [];
arr.length = 10;
arr.fill(0);

export default () => {
  const [scrollEl, setScrollEl] = useState();
  const ref = useRef();

  function boxPanelConfig() {
    return arr.map((t, index) => {
      if (index % 3 === 0) {
        return {
          id: `p${index + 1}`,
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
          <h1>PlayGround</h1>
          <h2>一个代码展示的组件</h2>

          <ul style={{ listStyle: 'disc', marginLeft: 20 }}>
            <li>PlayGround - React的代码单文件展示</li>
            <li>PlayGroundTab - React的多标签文件展示</li>
            <li>PlayGroundMulit - React的代码多文件展示</li>
            <li>PlayGroundPage - React的整体代码展示(包括代码组和导航等)</li>
            <li>Props - React组件的Props说明</li>
            <li>FunctionProps - 类方法说明</li>
            <li>CodePanel - 代码片段</li>
            <li>CodeTabPanel - 多标签代码片段</li>
            <li>CodeBoxPanel - 代码片段组</li>
            <li>AnchorNavigation - 带有锚点的导航</li>
          </ul>

          <Space />

          <CodeBoxPanel title="代码演示" columnCount={1} config={boxPanelConfig()} />

          <Space />

          <PlayGroundTab
            cardProps={{
              description: { title: '123', info: '123' },
            }}
            {...{
              active: 'Typescript',
              config: [
                {
                  key: 'Typescript',
                  title: 'Typescript',
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
                  theme: 'eclipse',
                },
                {
                  key: 'Javascript',
                  title: 'Javascript',
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
              ],
            }}
          />

          <Space />

          <h2>Api</h2>
          <Props
            border
            title="CodePanel"
            data={[
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
            ]}
          />

          <Space />

          <Props
            border
            title="CodeTabPanel"
            data={[
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
            ]}
          />

          <Space />

          <Props
            border
            title="PlayGround"
            data={[
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
            ]}
          />

          <Space />

          <Props
            border
            title="PlayGroundTab"
            data={[
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
            ]}
          />

          <Space />

          <Props
            border
            title="PlayGroundMulit"
            data={[
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
            ]}
          />

          <Space />

          <Props
            border
            title="PlayGroundPage"
            data={[
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
            ]}
          />

          <Space />

          <Props
            border
            title="PlayGroundPage.Section"
            data={[
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
            ]}
          />

          <Space />

          <Props
            border
            title="PlayGroundPage.PropsSection"
            data={[
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
            ]}
          />

          <Space />

          <Props
            border
            title="PlayGroundPage.FunctionPropsSection"
            data={[
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
            ]}
          />

          <Space />

          <Props border title="PlayGroundPage.CodeBoxSection" data={[]} />

          <Space />

          <Props
            border
            title="CodeBoxPanel"
            data={[
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
            ]}
          />

          <Space />

          <Props
            border
            title="AnchorNavigation"
            data={[
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
            ]}
          />

          <Space />

          <Props
            border
            title="Props"
            data={[
              {
                params: 'data',
                desc: '数据',
                type: 'IProps[]',
                defaultVal: '[]',
              },
            ]}
          />

          <Space />

          <Props
            border
            title="FunctionProps"
            data={[
              {
                params: 'data',
                desc: '数据',
                type: 'IFunctionProps[]',
                defaultVal: '[]',
              },
            ]}
          />

          <Space />

          <Props
            border
            title="IProps"
            data={[
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
            ]}
          />

          <Space />

          <Props
            border
            title="IFunctionProps"
            data={[
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
            ]}
          />

          <Space />

          <Props
            border
            title="IParams"
            data={[
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
            ]}
          />

          <Space />

          <Props
            border
            title="ICodeBoxProps"
            data={[
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
                type: 'Array<ICodeBoxPlayGroundProps | ICodeBoxPlayGroundMulitProps>',
                defaultVal: '[]',
              },
            ]}
          />

          <Space />

          <Props
            border
            title="ICodeBoxPlayGroundProps"
            data={[
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
            ]}
          />

          <Space />

          <Props
            border
            title="ICodeBoxPlayGroundMulitProps"
            data={[
              {
                params: 'type',
                desc: '',
                type: 'string',
                defaultVal: 'PlayGroundMulit',
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
            ]}
          />

          <Space />

          <Props
            border
            title="ICodeTabPanelItemProps"
            data={[
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
            ]}
          />
        </AnchorNavigation>
      </div>
    </PlayGround.AnchorNavigationContext.Provider>
  );
};
