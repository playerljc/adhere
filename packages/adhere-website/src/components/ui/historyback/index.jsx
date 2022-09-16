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
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '基本使用',
            info: '基本使用',
          },
        },
        codeText: `
  import { Button } from 'antd';
  import { HistoryBack } from '@baifendian/adhere';

  <Button type="primary" onClick={() => {
     HistoryBack(this.props.history,'/');
  }}>回退</Button>
      `,
        type: 'PlayGround',
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="HistoryBack">
        <p>历史记录返回操作</p>
        <p>- 如果历史栈中没有记录则返回主页，或者可以自定义 - 如果可以返回则进行返回</p>
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
                name: '默认导出方法',
                desc: '处理返回的操作',
                modifier: 'public',
                params: [
                  {
                    name: 'history',
                    desc: '路由的history对象',
                    type: 'History',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'routePath',
                    desc: 'length为0的时候跳转的路径',
                    type: 'string',
                    defaultVal: '/',
                    required: 'false',
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
