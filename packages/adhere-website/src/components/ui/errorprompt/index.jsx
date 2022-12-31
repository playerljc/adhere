import { Button } from 'antd';
import React from 'react';

import { ErrorPrompt } from '@baifendian/adhere';

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
  import { ErrorPrompt } from '@baifendian/adhere';

  <Button
    type="primary"
    onClick={() => {
      ErrorPrompt.openErrorMessage('操作失败');
    }}
  >
    显示警告提示
  </Button>
    `,
        type: 'PlayGround',
        renderChildren: () => (
          <Button
            type="primary"
            onClick={() => {
              ErrorPrompt.openErrorMessage('操作失败');
            }}
          >
            显示警告提示
          </Button>
        ),
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="ErrorPrompt">
        <p>
          <p>错误的提示(就是为了全局统一)</p>
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
                name: 'ErrorPrompt',
                desc: '错误的提示',
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
