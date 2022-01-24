import React, { useRef } from 'react';
import { Button } from 'antd';
import { GlobalIndicator } from '@baifendian/adhere';

import FunctionProps from '@/lib/FunctionProps';
import Playground from '@/lib/Playground';

export default () => {
  const ref = useRef();
  let handler = null;

  return (
    <div className="Page">
      <h1>GlobalIndicator</h1>
      <p>全局无侵入的遮罩</p>

      <FunctionProps
        border
        title="方法"
        data={[
          {
            name: 'show',
            desc: '显示遮罩',
            modifier: 'public',
            params: [
              {
                name: 'parent',
                desc: '遮罩挂载的元素，这个元素需要有position:relative',
                type: 'HtmlElement',
                defaultVal: 'document.body',
                required: 'false',
              },
              {
                name: 'text',
                desc: '显示的文本',
                type: 'string',
                defaultVal: '19999',
                required: 'false',
              },
              {
                name: 'zIndex',
                desc: '遮罩的层级',
                type: 'number',
                defaultVal: '19999',
                required: 'false',
              },
            ],
            returnType: 'HtmlElement',
            returnDesc: '返回遮罩的Html对象',
          },
          {
            name: 'hide',
            desc: '取消遮罩',
            modifier: 'public',
            params: [
              {
                name: 'indicatorDom',
                desc: '取消的HtmlElement元素,是show的返回值',
                type: 'HtmlElement',
                defaultVal: '',
                required: 'true',
              },
            ],
            returnType: '',
            returnDesc: '',
          },
        ]}
      />

      <h2>基本使用</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import React from 'react';
  import { Button } from 'antd';
  import { GlobalIndicator } from '@baifendian/adhere';
  
  <Button
    onClick={() => {
      setTimeout(() => {
        // eslint-disable-next-line no-use-before-define
        GlobalIndicator.hide(el);
      }, 2000);

      const el = GlobalIndicator.show(document.body, '全局的遮罩');
    }}
  >
    显示遮罩
  </Button>
      `}
      >
        <Button
          onClick={() => {
            setTimeout(() => {
              // eslint-disable-next-line no-use-before-define
              GlobalIndicator.hide(el);
            }, 2000);

            const el = GlobalIndicator.show(document.body, '全局的遮罩');
          }}
        >
          显示遮罩
        </Button>
      </Playground>

      <h2>使用parent属性遮罩局部元素</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import React, { useRef } from 'react';
  import { Button } from 'antd';
  import { GlobalIndicator } from '@baifendian/adhere';
  
  let handler = null;
  const ref = useRef();
  
  <div>
    <div
      ref={ref}
      style={{ position: 'relative', width: 200, height: 200, wordBreak: 'break-all' }}
    >
      In the process of internal desktop applications development, many different design specs
      and implementations would be involved, which might cause designers and developers
      difficulties and duplication and reduce the efficiency of development.
    </div>
    <div>
      <Button
        type="primary"
        onClick={() => {
          handler = GlobalIndicator.show(ref.current, '处理中...');
        }}
      >
        显示
      </Button>

      <Button
        onClick={() => {
          GlobalIndicator.hide(handler);
        }}
      >
        取消
      </Button>
    </div>
  </div>
      `}
      >
        <div>
          <div
            ref={ref}
            style={{ position: 'relative', width: 200, height: 200, wordBreak: 'break-all' }}
          >
            In the process of internal desktop applications development, many different design specs
            and implementations would be involved, which might cause designers and developers
            difficulties and duplication and reduce the efficiency of development.
          </div>
          <div>
            <Button
              type="primary"
              onClick={() => {
                handler = GlobalIndicator.show(ref.current, '处理中...');
              }}
            >
              显示
            </Button>

            <Button
              onClick={() => {
                GlobalIndicator.hide(handler);
              }}
            >
              取消
            </Button>
          </div>
        </div>
      </Playground>
    </div>
  );
};
