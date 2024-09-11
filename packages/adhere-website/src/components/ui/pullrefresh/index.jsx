import P1CodeText from '!!raw-loader!./examples/p1';
import P2CodeText from '!!raw-loader!./examples/p2';
import P3CodeText from '!!raw-loader!./examples/p3';

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

import IndexLessCodeText from '!!raw-loader!./index.less';

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
            info: '基本使用',
          },
        },
        active: 'p1.jsx',
        config: [
          {
            title: 'p1.jsx',
            key: 'p1.jsx',
            codeText: P1CodeText,
          },
          {
            title: 'index.less',
            key: 'index.jsx',
            codeText: IndexLessCodeText,
          },
        ],
        type: 'PlayGroundTab',
        renderChildren: () => <P1 />,
      },
      {
        id: `p2`,
        name: `Api触发刷新`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'Api触发刷新',
            info: 'Api触发刷新',
          },
        },
        active: 'p2.jsx',
        config: [
          {
            title: 'p2.jsx',
            key: 'p2.jsx',
            codeText: P2CodeText,
          },
          {
            title: 'index.less',
            key: 'index.jsx',
            codeText: IndexLessCodeText,
          },
        ],
        type: 'PlayGroundTab',
        renderChildren: () => <P2 />,
      },
      {
        id: `p3`,
        name: `自定义图标和文本`,
        cardProps: {
          description: {
            title: '自定义图标和文本',
            info: '自定义图标和文本',
          },
        },
        active: 'p3.jsx',
        config: [
          {
            title: 'p3.jsx',
            key: 'p3.jsx',
            codeText: P3CodeText,
          },
          {
            title: 'index.less',
            key: 'index.jsx',
            codeText: IndexLessCodeText,
          },
        ],
        type: 'PlayGroundTab',
        renderChildren: () => <P3 />,
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="PullRefresh">
        <p>下拉刷新</p>
        <ul>
          <li>- 支持mobile和pc</li>
        </ul>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'PullRefresh',
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
                params: 'scrollClassName',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'scrollStyle',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'pullHeight',
                desc: '拉取的高度',
                type: 'number',
                defaultVal: 'target返回的元素高度',
              },
              {
                params: 'renderIcon',
                desc: '图标的渲染',
                type: '() => React.ReactElement',
                defaultVal: '',
              },
              {
                params: 'renderLabel',
                desc: '默认文字的渲染',
                type: '() => React.ReactElement',
                defaultVal: '',
              },
              {
                params: 'renderCanLabel',
                desc: '可以刷新文本的渲染',
                type: '() => React.ReactElement',
                defaultVal: '',
              },
              {
                params: 'renderLoadingAnimation',
                desc: '拉取后的loading效果，如果是string可选的值可以参考load-awesome库',
                type: '() => React.ReactElement | string',
                defaultVal: '',
              },
              {
                params: 'isShowUpdateTime',
                desc: '是否显示更新时间',
                type: 'boolean',
                defaultVal: '',
              },
              {
                params: 'updateTime',
                desc: '默认的更新时间(毫秒)',
                type: 'number',
                defaultVal: '当前时间的毫秒',
              },
              {
                params: 'updateTimeFormat',
                desc: '更新时间的格式化',
                type: 'string',
                defaultVal: 'YYYY-MM-DD HH:mm:ss',
              },
              {
                params: 'onPullStart',
                desc: '拖动开始',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onPullCanRefresh',
                desc: '可以进行刷新操作',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onPullRefresh',
                desc: '执行了刷新',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onPullBottom',
                desc: '拉动到了底部',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onPullRebound',
                desc: '弹回了',
                type: 'Function',
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
                name: 'refresh',
                desc: '执行刷新操作',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'reset',
                desc: '重置',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'resetUpdateTime',
                desc: '重置更新时间',
                modifier: 'public',
                params: [
                  {
                    name: 'updateTime',
                    desc: '更新时间(毫秒)',
                    type: 'number',
                    defaultVal: '当前时间的毫秒',
                    required: '',
                  },
                ],
                returnType: 'Promise',
                returnDesc: '',
              },
              {
                name: 'getUpdateTime',
                desc: '获取更新时间(毫秒)',
                modifier: 'public',
                params: [],
                returnType: 'number',
                returnDesc: '当前时间的毫秒',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
