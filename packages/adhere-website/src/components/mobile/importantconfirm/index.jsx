import React from 'react';

import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  PropsSection,
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
  import React from 'react';

  import { MobileImportantConfirm } from '@baifendian/adhere';

  import DemoBlock from '@/lib/DemoBlock';

  export default () => (
    <DemoBlock>
      <DemoBlock.Item title="api方式">
        <Button
          block
          color="primary"
          onClick={() => {
            MobileImportantConfirm.open({
              onConfirm: () => {
                alert('confirm');
              },
            });
          }}
        >
          关闭
        </Button>
      </DemoBlock.Item>

      <DemoBlock.Item title="组件方式">
        <MobileImportantConfirm
          onConfirm={() => {
            alert('confirm');
          }}
        >
          <Button block color="primary">
            关闭
          </Button>
        </MobileImportantConfirm>
      </DemoBlock.Item>
    </DemoBlock>
  );
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
      <Section title="MobileImportantConfirm">
        <p>
          <p>重要操作确认提示</p>
        </p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: '属性',
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
                params: 'children',
                desc: 'children',
                type: 'React.ReactNode',
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
                name: 'open',
                desc: '打开确认对话框',
                modifier: 'global',
                params: [
                  {
                    name: 'props',
                    desc: '参数',
                    type: 'DialogConfirmProps',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'boolean',
                returnDesc: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
