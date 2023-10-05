import { Button, Select } from 'antd';
import React, { useRef, useState } from 'react';

import { GlobalIndicator, Space } from '@baifendian/adhere';

import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  Section,
} from '@/lib/PlaygroundPage';

export default () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const [size, setSize] = useState('default');
  let handler1 = null;
  let handler2 = null;

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
        codeText: `
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
      `,
        type: 'PlayGround',
        renderChildren: () => (
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
        ),
      },
      {
        id: `p2`,
        name: `使用parent属性遮罩局部元素`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '使用parent属性遮罩局部元素',
            info: '使用parent属性遮罩局部元素',
          },
        },
        codeText: `
  import React, { useRef } from 'react';
  import { Button } from 'antd';
  import { GlobalIndicator, Space } from '@baifendian/adhere';

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
      <Space.Group direction="horizontal" size={5}>
        <Button
          type="primary"
          onClick={() => {
            handler1 = GlobalIndicator.show(ref1.current, '处理中...');
          }}
        >
          显示
        </Button>

        <Button
          onClick={() => {
            GlobalIndicator.hide(handler1);
          }}
        >
          取消
        </Button>
      </Space.Group>
    </div>
  </div>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div>
            <div
              ref={ref1}
              style={{ position: 'relative', width: 200, height: 200, wordBreak: 'break-all' }}
            >
              In the process of internal desktop applications development, many different design
              specs and implementations would be involved, which might cause designers and
              developers difficulties and duplication and reduce the efficiency of development.
            </div>

            <div>
              <Space.Group direction="horizontal" size={5}>
                <Button
                  type="primary"
                  onClick={() => {
                    handler1 = GlobalIndicator.show(ref1.current, '处理中...');
                  }}
                >
                  显示
                </Button>

                <Button
                  onClick={() => {
                    GlobalIndicator.hide(handler1);
                  }}
                >
                  取消
                </Button>
              </Space.Group>
            </div>
          </div>
        ),
      },
      {
        id: `p3`,
        name: `各种大小`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '各种大小',
            info: '各种大小',
          },
        },
        codeText: `
  import React, { useRef, useState } from 'react';
  import { Button, Select } from 'antd';
  import { GlobalIndicator, Space } from '@baifendian/adhere';

  let handler = null;
  const ref = useRef();
  const [size, setSize] = useState('default');

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
      <Space.Group direction="horizontal" size={5}>
        <Select value={size} onChange={(e) => setSize(e)}>
          <Select.Option value="small">small</Select.Option>
          <Select.Option value="default">default</Select.Option>
          <Select.Option value="large">large</Select.Option>
        </Select>

        <Button
          type="primary"
          onClick={() => {
            handler2 = GlobalIndicator.show(ref2.current, '处理中...', undefined, size);
          }}
        >
          显示
        </Button>

        <Button
          onClick={() => {
            GlobalIndicator.hide(handler2);
          }}
        >
          取消
        </Button>
      </Space.Group>
    </div>
  </div>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <div>
            <div
              ref={ref2}
              style={{ position: 'relative', width: 200, height: 200, wordBreak: 'break-all' }}
            >
              In the process of internal desktop applications development, many different design
              specs and implementations would be involved, which might cause designers and
              developers difficulties and duplication and reduce the efficiency of development.
            </div>

            <div>
              <Space.Group direction="horizontal" size={5}>
                <Select value={size} onChange={(e) => setSize(e)}>
                  <Select.Option value="small">small</Select.Option>
                  <Select.Option value="default">default</Select.Option>
                  <Select.Option value="large">large</Select.Option>
                </Select>

                <Button
                  type="primary"
                  onClick={() => {
                    handler2 = GlobalIndicator.show(ref2.current, '处理中...', undefined, size);
                  }}
                >
                  显示
                </Button>

                <Button
                  onClick={() => {
                    GlobalIndicator.hide(handler2);
                  }}
                >
                  取消
                </Button>
              </Space.Group>
            </div>
          </div>
        ),
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="GlobalIndicator">
        <p>全局无侵入的遮罩</p>
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
                  {
                    name: 'size',
                    desc: '大小',
                    type: 'default | small | large',
                    defaultVal: 'default',
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
              {
                name: 'hideAll',
                desc: '取消所有遮罩',
                modifier: 'public',
                params: [],
                returnType: '',
                returnDesc: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
