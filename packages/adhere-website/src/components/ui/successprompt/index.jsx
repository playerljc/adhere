import React from 'react';
import { Button } from 'antd';
import { SuccessPrompt } from '@baifendian/adhere';

import PlayGroundPage, {
  Section,
  CodeBoxSection,
  FunctionPropsSection,
} from '@/lib/PlaygroundPage';

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
        codeText: `
  import React from 'react';
  import { Button } from 'antd';
  import { SuccessPrompt } from '@baifendian/adhere';

  <Button
    type="primary"
    onClick={() => {
      SuccessPrompt('操作成功');
    }}
  >
    显示成功提示
  </Button>
    `,
        type: 'PlayGround',
        renderChildren: () => (
          <Button
            type="primary"
            onClick={() => {
              SuccessPrompt('操作成功');
            }}
          >
            显示成功提示
          </Button>
        ),
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="SuccessPrompt">
        <p>
          <p>成功的提示(就是为了全局统一)</p>
        </p>
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
                name: 'SuccessPrompt',
                desc: '显示成功提示',
                modifier: 'global',
                params: [
                  {
                    name: 'text',
                    desc: '提示的文本',
                    type: 'string | React.ReactElement',
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
