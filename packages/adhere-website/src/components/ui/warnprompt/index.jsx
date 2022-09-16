import { Button } from 'antd';
import React from 'react';

import { WarnPrompt } from '@baifendian/adhere';

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
  import { WarnPrompt } from '@baifendian/adhere';

  <Button
    type="primary"
    onClick={() => {
      WarnPrompt('操作异常');
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
              WarnPrompt('操作异常');
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
      <Section title="WarnPrompt">
        <p>
          <p>警告的提示(就是为了全局统一)</p>
        </p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <FunctionPropsSection
        title="Api"
        config={[
          {
            name: 'WarnPrompt',
            desc: '警告的提示',
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
        ]}
      />
    </PlayGroundPage>
  );
};
