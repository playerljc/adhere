import P1CodeText from '!!raw-loader!./examples/p1';
import P2CodeText from '!!raw-loader!./examples/p2';

import React from 'react';

import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  Section,
} from '@/lib/PlaygroundPage';

import P1 from './examples/p1';
import P2 from './examples/p2';

export default () => {
  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `run方法`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'run方法',
            info: '基本操作(run方法)',
          },
        },
        type: 'PlayGround',
        codeText: P1CodeText,
        renderChildren: () => <P1 />,
      },
      {
        id: `p2`,
        name: `bind方法`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'bind方法',
            info: '基本操作(bind方法)',
          },
        },
        type: 'PlayGround',
        codeText: P2CodeText,
        renderChildren: () => <P2 />,
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="Domain">
        <p>Domain的浏览器端实现</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <FunctionPropsSection
        title="Api"
        config={[
          {
            border: true,
            title: 'Domain',
            data: [
              {
                name: 'createDomain',
                desc: '创建Domain对象',
                modifier: 'public',
                params: [],
                returnType: 'IDomain',
                returnDesc: '',
              },
              {
                name: 'create',
                desc: '创建Domain对象',
                modifier: 'public',
                params: [],
                returnType: 'IDomain',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'IDomain',
            data: [
              {
                name: 'add',
                desc: 'add',
                modifier: 'public',
                params: [
                  {
                    name: 'emitter',
                    desc: '',
                    type: 'EventEmitter',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'bind',
                desc: 'bind',
                modifier: 'public',
                params: [
                  {
                    name: 'fn',
                    desc: '',
                    type: 'Function',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'Function',
                returnDesc: '',
              },
              {
                name: 'dispose',
                desc: 'dispose',
                modifier: 'public',
                params: [],
                returnType: 'IDomain',
                returnDesc: '',
              },
              {
                name: 'enter',
                desc: 'enter',
                modifier: 'public',
                params: [],
                returnType: 'IDomain',
                returnDesc: '',
              },
              {
                name: 'exit',
                desc: 'exit',
                modifier: 'public',
                params: [],
                returnType: 'IDomain',
                returnDesc: '',
              },
              {
                name: 'intercept',
                desc: 'intercept',
                modifier: 'public',
                params: [
                  {
                    name: 'fn',
                    desc: '',
                    type: 'Function',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'Function',
                returnDesc: '',
              },
              {
                name: 'remove',
                desc: 'remove',
                modifier: 'public',
                params: [
                  {
                    name: 'emitter',
                    desc: '',
                    type: 'EventEmitter',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'run',
                desc: 'run',
                modifier: 'public',
                params: [
                  {
                    name: 'fn',
                    desc: '',
                    type: 'Function',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'IDomain',
                returnDesc: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
