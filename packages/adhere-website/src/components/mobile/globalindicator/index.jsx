import { Button } from 'antd';
import React from 'react';

import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  Section,
} from '@/lib/PlaygroundPage';

export default () => {
  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `基本使用`,
        cardProps: {
          description: {
            title: '基本使用',
            info: '基本使用',
          },
        },
        active: 'Javascript',
        config: [
          {
            key: 'Javascript',
            title: 'Javascript',
            codeText: `
  import { Button } from 'antd-mobile';
  import React, { useRef } from 'react';

  import { MobileGlobalIndicator, Space } from '@baifendian/adhere';

  import DemoBlock from '@/lib/DemoBlock';

  export default () => {
    const ref = useRef();

    return (
      <DemoBlock>
        <DemoBlock.Item title="全局的遮罩">
          <Button
            block
            color="primary"
            onClick={() => {
              const handler = MobileGlobalIndicator.show(document.body, '全局的遮罩');

              setTimeout(() => {
                MobileGlobalIndicator.hide(handler);
              }, 2000);
            }}
          >
            显示遮罩
          </Button>
        </DemoBlock.Item>

        <DemoBlock.Item title="局部的遮罩">
          <div>
            <div ref={ref} style={{ position: 'relative', wordBreak: 'break-all' }}>
              In the process of internal desktop applications development, many different design specs
              and implementations would be involved, which might cause designers and developers
              difficulties and duplication and reduce the efficiency of development.
            </div>

            <Space.Group direction="horizontal" size={5}>
              <Button
                block
                color="primary"
                onClick={() => {
                  const handler = MobileGlobalIndicator.show(ref.current, '处理中...');

                  setTimeout(() => {
                    MobileGlobalIndicator.hide(handler);
                  }, 2000);
                }}
              >
                显示
              </Button>
            </Space.Group>
          </div>
        </DemoBlock.Item>
      </DemoBlock>
    );
  };
      `,
            style: { maxHeight: 500 },
            theme: 'eclipse',
          },
        ],
        type: 'PlayGroundTabMobile',
        url: 'http://www.baidu.com',
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="MobileGlobalIndicator">
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
