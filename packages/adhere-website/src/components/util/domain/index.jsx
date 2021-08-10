import React,{useRef} from 'react';
import { Button } from 'antd';
import { Domain } from '@baifendian/adhere';

import FunctionProps from '@/lib/FunctionProps';
import Playground from '@/lib/Playground';

import styles from './index.less';

export default () => {
  const console1Ref = useRef();
  const console2Ref = useRef();

  return (
    <div className="Page">
      <h1>Domain</h1>
      <h2>Domain的浏览器端实现</h2>

      <h2>Domain</h2>
      <FunctionProps
        data={[
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
        ]}
      />

      <h2>IDomain</h2>
      <FunctionProps
        data={[
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
        ]}
      />

      <h2>基本操作(run方法)</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
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
      `}
      >
        <>
          <Button
            type="primary"
            onClick={() => {
              const d = Domain.create();

              d.on('error', function (e) {
                const content = console1Ref.current.innerHTML;
                console1Ref.current.innerHTML = `${content}${content ? `</br>` : ''}${e.toString()}`;
                console1Ref.current.scrollTop = console1Ref.current.scrollHeight - console1Ref.current.offsetHeight;
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
      </Playground>

      <h2>基本操作(bind方法)</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
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
        `}
      >
        <>
          <Button
            type="primary"
            onClick={() => {
              const d = Domain.create();

              d.on('error', function (e) {
                const content = console2Ref.current.innerHTML;
                console2Ref.current.innerHTML = `${content}${content ? `</br>` : ''}${e.toString()}`;
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
          <div className={styles.Console} ref={console2Ref}></div>
        </>
      </Playground>
    </div>
  );
};
