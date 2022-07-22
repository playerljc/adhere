import React, { useRef } from 'react';
import { Button } from 'antd';
import { Domain } from '@baifendian/adhere';

import PlayGroundPage, {
  Section,
  CodeBoxSection,
  FunctionPropsSection,
} from '@/lib/PlaygroundPage';

import styles from './index.less';

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
        codeText: `
  import React,{useRef} from 'react';
  import { Button } from 'antd';
  import { Domain } from '@baifendian/adhere';

  const console1Ref = useRef();

  <Button
    type="primary"
    onClick={() => {
      const d = Domain.create();

      d.on('error', function (e) {
        const content = console1Ref.current.innerHTML;
        console1Ref.current.innerHTML = \`\${content}\${content ? '</br>' : ''}\${e.toString()}\`;
        console1Ref.current.scrollTop = console1Ref.current.scrollHeight - console1Ref.current.offsetHeight;
      });

      d.run(function () {
        noexists();
      });
    }}
  >
    运行
  </Button>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <>
            <Button
              type="primary"
              onClick={() => {
                const d = Domain.create();

                d.on('error', function (e) {
                  const content = console1Ref.current.innerHTML;
                  console1Ref.current.innerHTML = `${content}${
                    content ? `</br>` : ''
                  }${e.toString()}`;
                  console1Ref.current.scrollTop =
                    console1Ref.current.scrollHeight - console1Ref.current.offsetHeight;
                });

                d.run(function () {
                  noexists();
                });
              }}
            >
              运行
            </Button>
            <div className={styles.Console} ref={console1Ref}></div>
          </>
        ),
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
        codeText: `
  import React,{useRef} from 'react';
  import { Button } from 'antd';
  import { Domain } from '@baifendian/adhere';

  const console2Ref = useRef();

  <Button
    type="primary"
    onClick={() => {
      const d = Domain.create();

      d.on('error', function (e) {
        const content = console1Ref.current.innerHTML;
        console2Ref.current.innerHTML = \`\${content}\${content ? '</br>' : ''}\${e.toString()}\`;
        console2Ref.current.scrollTop = console2Ref.current.scrollHeight - console2Ref.current.offsetHeight;
      });

      function run() {
        return new Promise(
          d.bind((resolve) => {
            noexists();
            resolve();
          }),
        );
      }

      run();
    }}
  >
    运行
  </Button>
        `,
        type: 'PlayGround',
        renderChildren: () => (
          <>
            <Button
              type="primary"
              onClick={() => {
                const d = Domain.create();

                d.on('error', function (e) {
                  const content = console2Ref.current.innerHTML;
                  console2Ref.current.innerHTML = `${content}${
                    content ? `</br>` : ''
                  }${e.toString()}`;
                  console2Ref.current.scrollTop =
                    console2Ref.current.scrollHeight - console2Ref.current.offsetHeight;
                });

                function run() {
                  return new Promise(
                    d.bind((resolve) => {
                      noexists();
                      resolve();
                    }),
                  );
                }

                run();
              }}
            >
              运行
            </Button>
            <div className={styles.Console} ref={console2Ref}></div>
          </>
        ),
      },
    ];
  }

  const console1Ref = useRef();
  const console2Ref = useRef();

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
