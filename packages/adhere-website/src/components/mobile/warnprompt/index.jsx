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
            title: '使用message',
            info: 'openWarnMessage',
          },
        },
        active: 'Javascript',
        config: [
          {
            key: 'Javascript',
            title: 'Javascript',
            codeText: `
  import React from 'react';
  import { Button } from 'antd';
  import { MobileWarnPrompt } from '@baifendian/adhere';

  <Button
    type="primary"
    onClick={() => {
      MobileWarnPrompt.openWarnMessage({
        content: '操作警告'
      });
    }}
  >
    显示警告提示
  </Button>
      `,
            url: 'http://www.baidu.com',
          },
        ],
        type: 'PlayGroundTabMobile',
        url: 'http://www.baidu.com',
      },
      {
        id: `p2`,
        name: `使用Dialog`,
        cardProps: {
          description: {
            title: '使用Dialog',
            info: 'openWarnDialog',
          },
        },
        active: 'Javascript',
        config: [
          {
            key: 'Javascript',
            title: 'Javascript',
            codeText: `
  import React from 'react';
  import { Button } from 'antd';
  import { MobileWarnPrompt } from '@baifendian/adhere';

  <Button
    type="primary"
    onClick={() => {
      MobileWarnPrompt.openWarnDialog({
        content: '操作警告'
      });
    }}
  >
    显示警告提示
  </Button>
      `,
            url: 'http://www.baidu.com',
          },
        ],
        type: 'PlayGroundTabMobile',
        url: 'http://www.baidu.com',
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="MobileWarnPrompt">
        <p>
          <p>警告的提示(就是为了全局统一)</p>
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
                name: 'openWarnMessage',
                desc: '显示警告提示',
                modifier: 'global',
                params: [
                  {
                    name: 'content',
                    desc: '提示的文本',
                    type: 'JointContent',
                    defaultVal: '',
                    required: 'false',
                  },
                  {
                    name: 'duration',
                    desc: '显示的时间',
                    type: 'number | VoidFunction',
                    defaultVal: '',
                    required: 'false',
                  },
                  {
                    name: 'onClose',
                    desc: '关闭的事件',
                    type: 'VoidFunction',
                    defaultVal: '',
                    required: 'false',
                  },
                ],
                returnType: 'MessageType',
                returnDesc: '',
              },
              {
                name: 'openWarnDialog',
                desc: '显示警告提示',
                modifier: 'global',
                params: [
                  {
                    name: 'title',
                    desc: '提示的标题',
                    type: 'React.ReactNode',
                    defaultVal: '',
                    required: 'false',
                  },
                  {
                    name: 'content',
                    desc: '提示的内容',
                    type: 'React.ReactNode',
                    defaultVal: '',
                    required: 'false',
                  },
                  {
                    name: 'mask',
                    desc: '是否显示遮罩',
                    type: 'boolean',
                    defaultVal: '',
                    required: 'false',
                  },
                  {
                    name: 'maskClosable',
                    desc: '遮罩是否可以点击',
                    type: 'boolean',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'duration',
                    desc: '持续的时间',
                    type: 'number',
                    defaultVal: '3000',
                    required: 'false',
                  },
                ],
                returnType: 'MessageType',
                returnDesc: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
