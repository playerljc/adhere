import React, { useState } from 'react';
import { Select } from 'antd';
import { ReactUtil, Resource, Space } from '@baifendian/adhere';

import PlayGroundPage, {
  Section,
  CodeBoxSection,
  FunctionPropsSection,
} from '@/lib/PlaygroundPage';

const { Option } = Select;

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
            info: '迭代数组返回一个肯定含有key的JSX数组',
          },
        },
        codeText: `
  import React, { useState } from 'react';
  import { Select } from 'antd';
  import { ReactUtil, Space } from '@baifendian/adhere';

  <>
    <div>
      <Select style={{ width: 200 }}>
        {data.map((t) => (
          <Option key={t.value} value={t.value}>
            {t.label}
          </Option>
        ))}
      </Select>
    </div>

    <Space direction="vertical" />

    <div>
      <Select style={{ width: 200 }}>
        {ReactUtil.keyMap(data, (t) => (
          <Option value={t.value}>{t.label}</Option>
        ))}
      </Select>
    </div>
  </>
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <>
            <div>
              <Select
                style={{ width: 200 }}
                getPopupContainer={Resource.Dict.value.FormPopupContainer.value}
              >
                {data.map((t) => (
                  <Option key={t.value} value={t.value}>
                    {t.label}
                  </Option>
                ))}
              </Select>
            </div>

            <Space direction="vertical" />

            <div>
              <Select
                style={{ width: 200 }}
                getPopupContainer={Resource.Dict.value.FormPopupContainer.value}
              >
                {ReactUtil.keyMap(data, (t) => (
                  <Option value={t.value}>{t.label}</Option>
                ))}
              </Select>
            </div>
          </>
        ),
      },
    ];
  }

  const [data] = useState([
    { label: 'java', value: 'java' },
    { label: 'javascript', value: 'javascript' },
    { label: 'css', value: 'css' },
    { label: 'git', value: 'git' },
  ]);

  return (
    <PlayGroundPage>
      <Section title="ReactUtil">
        <p>扩展React的工具类</p>
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
                name: 'keyMap',
                desc: '迭代数组返回一个肯定含有key的JSX数组',
                modifier: 'public',
                params: [
                  {
                    name: 'arr',
                    desc: '数组',
                    type: 'Array<any>',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'handler',
                    desc: '句柄',
                    type: '(item: any, index: number) => ReactElement',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'Array<ReactElement>',
                returnDesc: '返回迭代的React.ReactElement数组',
              },
              {
                name: 'fillKey',
                desc: '将一个ReactElements填充key',
                modifier: 'public',
                params: [
                  {
                    name: 'elements',
                    desc: '数组',
                    type: 'Array<ReactElement>',
                    defaultVal: '[]',
                    required: 'true',
                  },
                ],
                returnType: 'Array<ReactElement>',
                returnDesc: '返回迭代的React.ReactElement数组',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
