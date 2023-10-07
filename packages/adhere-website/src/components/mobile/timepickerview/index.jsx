import React from 'react';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

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
  import React, { useState } from 'react';

  import { MobileTimePickerView } from '@baifendian/adhere';

  import DemoBlock from '@/lib/DemoBlock';

  export default () => {
    const [value, setValue] = useState();

    return (
      <DemoBlock>
        <DemoBlock.Item title="HH:mm:ss">
          <MobileTimePickerView format="HH:mm:ss" />
        </DemoBlock.Item>

        <DemoBlock.Item title="HH:mm">
          <MobileTimePickerView format="HH:mm" />
        </DemoBlock.Item>

        <DemoBlock.Item title="HH">
          <MobileTimePickerView format="HH" />
        </DemoBlock.Item>

        <DemoBlock.Item title="mm:ss">
          <MobileTimePickerView format="mm:ss" />
        </DemoBlock.Item>

        <DemoBlock.Item title="ss">
          <MobileTimePickerView format="ss" />
        </DemoBlock.Item>

        <DemoBlock.Item title="onChange">
          <MobileTimePickerView
            value={value}
            onChange={(_value) => {
              setValue(_value);
              console.log(_value, _value.format('YYYY-MM-DD HH:mm:ss'));
            }}
          />
        </DemoBlock.Item>
      </DemoBlock>
    );
  };
      `,
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
      <Section title="MobileTimePickerView">
        <p>
          <p>时间选择</p>
        </p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'MobileTimePickerView',
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
                params: 'value',
                desc: '值',
                type: 'dayjs.Dayjs | null',
                defaultVal: '',
              },
              {
                params: 'onChange',
                desc: '切换时间触发',
                type: '(value: dayjs.Dayjs | null) => void',
                defaultVal: '',
              },
              {
                params: 'format',
                desc: '格式化',
                type: "'HH:mm:ss' | 'HH:mm' | 'HH' | 'mm:ss' | 'ss' | undefined",
                defaultVal: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
