import P1CodeText from '!!raw-loader!./examples/p1';
import P2CodeText from '!!raw-loader!./examples/p2';
import P3CodeText from '!!raw-loader!./examples/p3';
import P4CodeText from '!!raw-loader!./examples/p4';
import P5CodeText from '!!raw-loader!./examples/p5';
import P6CodeText from '!!raw-loader!./examples/p6';
import P7CodeText from '!!raw-loader!./examples/p7';
import P8CodeText from '!!raw-loader!./examples/p8';

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
            info: '基本的显示隐藏',
          },
        },
        codeText: P1CodeText,
        type: 'PlayGround',
        renderChildren: () => <P1 />,
      },
      {
        id: `p2`,
        name: `自定义不匹配时的UI`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '自定义不匹配时的UI',
            info: '自定义UI',
          },
        },
        codeText: P2CodeText,
        type: 'PlayGround',
        renderChildren: () => <P2 />,
      },
      {
        id: `p3`,
        name: `show操作`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'show操作',
            info: `
                   只能用于children或noMatch为html元素，或为组件的时候组件需要保证组件的props中含有style且style属性需要混入到组件
      根元素的style中，如果是Array则每一个元素都需要满足以上两个条件中的一种
                 `,
          },
        },
        codeText: P3CodeText,
        type: 'PlayGround',
        renderChildren: () => <P3 />,
      },
      {
        id: `p4`,
        name: `show操作noMatch`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'show操作noMatch',
            info: `
                   只能用于children或noMatch为html元素，或为组件的时候组件需要保证组件的props中含有style且style属性需要混入到组件
      根元素的style中，如果是Array则每一个元素都需要满足以上两个条件中的一种
                 `,
          },
        },
        type: 'PlayGround',
        codeText: P4CodeText,
        renderChildren: () => <P4 />,
      },
      {
        id: `p5`,
        name: `show操作Fragment`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'show操作Fragment',
            info: `
              只能用于children或noMatch为html元素，或为组件的时候组件需要保证组件的props中含有style且style属性需要混入到组件
 根元素的style中，如果是Array则每一个元素都需要满足以上两个条件中的一种
            `,
          },
        },
        codeText: P5CodeText,
        type: 'PlayGround',
        renderChildren: () => <P5 />,
      },
      {
        id: `p6`,
        name: `visibility操作`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'visibility操作',
            info: `
                   只能用于children或noMatch为html元素，或为组件的时候组件需要保证组件的props中含有style且style属性需要混入到组件
      根元素的style中，如果是Array则每一个元素都需要满足以上两个条件中的一种
                 `,
          },
        },
        codeText: P6CodeText,
        type: 'PlayGround',
        renderChildren: () => <P6 />,
      },
      {
        id: `p7`,
        name: `visibility操作noMatch`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'visibility操作noMatch',
            info: `
                   只能用于children或noMatch为html元素，或为组件的时候组件需要保证组件的props中含有style且style属性需要混入到组件
      根元素的style中，如果是Array则每一个元素都需要满足以上两个条件中的一种
                 `,
          },
        },
        codeText: P7CodeText,
        type: 'PlayGround',
        renderChildren: () => <P7 />,
      },
      {
        id: `p8`,
        name: `visibility操作Fragment`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'visibility操作Fragment',
            info: `
              只能用于children或noMatch为html元素，或为组件的时候组件需要保证组件的props中含有style且style属性需要混入到组件
 根元素的style中，如果是Array则每一个元素都需要满足以上两个条件中的一种
            `,
          },
        },
        codeText: P8CodeText,
        type: 'PlayGround',
        renderChildren: () => <P8 />,
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="ConditionalRender">
        <p>条件渲染</p>
        <p>适用于自定义显示条件的情况下是否显示组件</p>
        <p>实现了React的条件渲染</p>
        <p>实现了元素display切换</p>
        <p>实现了元素visibility切换</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'ConditionalRender',
            data: [
              {
                params: 'conditional',
                desc: '条件',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'noMatch',
                desc: '条件部匹配时显示的UI',
                type: '() => React.ReactElement | null',
                defaultVal: 'null',
              },
              {
                params: 'children',
                desc: 'children',
                type: '() => React.ReactElement | null',
                defaultVal: 'null',
              },
            ],
          },
          {
            border: true,
            title: 'ConditionalRender.Show',
            data: [
              {
                params: 'conditional',
                desc: '条件',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'noMatch',
                desc: '条件部匹配时显示的UI',
                type: 'React.ReactElement | null',
                defaultVal: 'null',
              },
              {
                params: 'children',
                desc: 'children',
                type: 'React.ReactElement',
                defaultVal: 'null',
              },
            ],
          },
          {
            border: true,
            title: 'ConditionalRender.Visibility',
            data: [
              {
                params: 'conditional',
                desc: '条件',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'noMatch',
                desc: '条件部匹配时显示的UI',
                type: 'React.ReactElement | null',
                defaultVal: 'null',
              },
              {
                params: 'children',
                desc: 'children',
                type: 'React.ReactElement',
                defaultVal: 'null',
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
                name: 'conditionalRender',
                desc: '使用方法的ConditionalRender',
                modifier: 'static',
                params: [
                  {
                    name: 'params',
                    desc: '',
                    type: `
                      {
                        conditional: boolean;
                        match: JSX.Element;
                        noMatch: JSX.Element | null;
                      }
                    `,
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'conditionalArr',
                desc: '含有PermissionConditional的React.Element的数组',
                modifier: 'static',
                params: [
                  {
                    name: 'arr',
                    desc: '',
                    type: 'any[]',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'any[]',
                returnDesc: '',
              },
              {
                name: 'conditionalNotEmptyArr',
                desc: '去除null和undefined值',
                modifier: 'static',
                params: [
                  {
                    name: 'arr',
                    desc: '',
                    type: 'any[]',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'any[]',
                returnDesc: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
