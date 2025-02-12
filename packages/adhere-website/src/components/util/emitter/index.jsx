import P1CodeText from '!!raw-loader!./examples/p1';
import P2CodeText from '!!raw-loader!./examples/p2';
import P3CodeText from '!!raw-loader!./examples/p3';
import P4CodeText from '!!raw-loader!./examples/p4';
import P5CodeText from '!!raw-loader!./examples/p5';
import P6CodeText from '!!raw-loader!./examples/p6';
import P7CodeText from '!!raw-loader!./examples/p7';

import React from 'react';

import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  Section,
} from '@/lib/PlaygroundPage';

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
        name: `基本的使用`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '基本的使用',
            info: '基本的使用',
          },
        },
        type: 'PlayGround',
        codeText: P1CodeText,
        renderChildren: () => <P1 />,
      },
      {
        id: `p2`,
        name: `注册多次，并且传递参数`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '注册多次，并且传递参数',
            info: '注册多次，并且传递参数',
          },
        },
        type: 'PlayGround',
        codeText: P2CodeText,
        renderChildren: () => <P2 />,
      },
      {
        id: `p3`,
        name: `触发HtmlElement的自定义事件`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '触发HtmlElement的自定义事件',
            info: '触发HtmlElement的自定义事件',
          },
        },
        type: 'PlayGround',
        codeText: P3CodeText,
        renderChildren: () => <P3 />,
      },
      {
        id: `p4`,
        name: `只执行一次`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '只执行一次',
            info: '只执行一次',
          },
        },
        type: 'PlayGround',
        codeText: P4CodeText,
        renderChildren: () => <P4 />,
      },
      {
        id: `p5`,
        name: `all`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'all',
            info: 'all',
          },
        },
        type: 'PlayGround',
        codeText: P5CodeText,
        renderChildren: () => <P5 />,
      },
      {
        id: `p6`,
        name: `race`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'race',
            info: 'race',
          },
        },
        type: 'PlayGround',
        codeText: P6CodeText,
        renderChildren: () => <P6 />,
      },
      {
        id: `p7`,
        name: `count`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'count',
            info: 'count',
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
      <Section title="Emitter">
        <p>发布订阅</p>
        <ul>
          <li>- 发布</li>
          <li>- 订阅</li>
          <li>- 解除订阅</li>
        </ul>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <FunctionPropsSection
        title="Api"
        config={[
          {
            border: true,
            title: '方法',
            data: [
              {
                name: 'on',
                desc: '注册一个事件',
                modifier: 'public',
                params: [
                  {
                    name: 'type',
                    desc: '事件类型',
                    type: 'String',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'handler',
                    desc: '事件句柄',
                    type: 'Function',
                    defaultVal: '() => {}',
                    required: 'true',
                  },
                  {
                    name: 'makStackSize',
                    desc: '最大注册数',
                    type: 'number',
                    defaultVal: '200',
                    required: 'false',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'once',
                desc: '注册只执行一次的事件',
                modifier: 'public',
                params: [
                  {
                    name: 'type',
                    desc: '事件类型',
                    type: 'String',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'handler',
                    desc: '事件句柄',
                    type: 'Function',
                    defaultVal: '() => {}',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'all',
                desc: '依赖类型都执行后的钩子',
                modifier: 'public',
                params: [
                  {
                    name: 'types',
                    desc: '事件类型',
                    type: 'Array<String>',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'handler',
                    desc: '事件句柄',
                    type: 'Function',
                    defaultVal: '() => {}',
                    required: 'true',
                  },
                ],
                returnType: 'Function',
                returnDesc: '注销的方法',
              },
              {
                name: 'race',
                desc: '依赖类型任意一个执行后的钩子',
                modifier: 'public',
                params: [
                  {
                    name: 'types',
                    desc: '事件类型',
                    type: 'Array<String>',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'handler',
                    desc: '事件句柄',
                    type: 'Function',
                    defaultVal: '() => {}',
                    required: 'true',
                  },
                ],
                returnType: 'Function',
                returnDesc: '注销的方法',
              },
              {
                name: 'count',
                desc: '一个类型执行了count次后的钩子',
                modifier: 'public',
                params: [
                  {
                    name: 'type',
                    desc: '事件类型',
                    type: 'String',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'count',
                    desc: '执行次数',
                    type: 'number',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'handler',
                    desc: '事件句柄',
                    type: 'Function',
                    defaultVal: '() => {}',
                    required: 'true',
                  },
                ],
                returnType: 'Function',
                returnDesc: '注销的方法',
              },
              {
                name: 'remove',
                desc: '解除一个事件',
                modifier: 'public',
                params: [
                  {
                    name: 'type',
                    desc: '事件类型',
                    type: 'String',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'handler',
                    desc: '事件句柄',
                    type: 'Function',
                    defaultVal: '() => {}',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'hasType',
                desc: '一个事件是否注册过',
                modifier: 'public',
                params: [
                  {
                    name: 'type',
                    desc: '事件类型',
                    type: 'String',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'boolean',
                returnDesc: '注册过返回true，未注册过返回false',
              },
              {
                name: 'clear',
                desc: '清除一个事件类型的所有句柄',
                modifier: 'public',
                params: [
                  {
                    name: 'type',
                    desc: '事件类型',
                    type: 'String',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'clearAll',
                desc: '清除所有事件类型的句柄',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'trigger',
                desc: '触发一个事件类型的事件',
                modifier: 'public',
                params: [
                  {
                    name: 'type',
                    desc: '事件类型',
                    type: 'String',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'params',
                    desc: '传递的参数',
                    type: 'Object',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'dispatchEvent',
                desc: '触发一个Html的自定义事件',
                modifier: 'static',
                params: [
                  {
                    name: 'el',
                    desc: '触发事件的HtmlElement',
                    type: 'HtmlElement | Document',
                    defaultVal: 'document',
                    required: 'true',
                  },
                  {
                    name: 'type',
                    desc: '事件类型',
                    type: 'String',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'params',
                    desc: '传递的参数',
                    type: 'CustomEventInit',
                    defaultVal: '',
                    required: 'true',
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
