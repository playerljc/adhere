import React from 'react';
import { Button } from 'antd';
import { Preferences } from '@baifendian/adhere';

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
        name: `基本的使用`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '基本的使用',
            info: '基本的使用',
          },
        },
        codeText: `
  import { Preferences } from '@baifendian/adhere';

  Preferences.putStringByLocal('a', 'a');
  Preferences.putObjectByLocal('b', { a: 1, b: 2 });

  Preferences.putStringBySession('a', 'a');
  Preferences.putObjectBySession('b', { a: 1, b: 2 });
        `,
        type: 'PlayGround',
        renderChildren: () => (
          <>
            <Button
              type="primary"
              onClick={() => {
                Preferences.putStringByLocal('a', 'a');
                Preferences.putObjectByLocal('b', { a: 1, b: 2 });

                Preferences.putStringBySession('a', 'a');
                Preferences.putObjectBySession('b', { a: 1, b: 2 });

                const el = document.getElementById('PreferencesConsole');

                el.innerHTML = `
              ${Preferences.getStringByLocal('a')}</br>
              ${JSON.stringify(Preferences.getObjectByLocal('b'))}</br>
              ${Preferences.getStringBySession('a')}</br>
              ${JSON.stringify(Preferences.getObjectBySession('b'))}</br>
            `;
              }}
            >
              放入和拿出
            </Button>
            <p id="PreferencesConsole" />
          </>
        ),
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="Preferences">
        <p>sessionStore和localStore进行的封装</p>
        <ul>
          <li>- 支持字符串的写入和拿出</li>
          <li>- 支持对象的写入和拿出</li>
        </ul>
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
                name: 'putStringByLocal',
                desc: '本地持久化一对键值(值为String)',
                modifier: 'public',
                params: [
                  {
                    name: 'key',
                    desc: 'key',
                    type: 'String',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'value',
                    desc: 'value',
                    type: 'String',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'getStringByLocal',
                desc: '本地取出值(值为String)',
                modifier: 'public',
                params: [
                  {
                    name: 'key',
                    desc: 'key',
                    type: 'String',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'string',
                returnDesc: '',
              },
              {
                name: 'putObjectByLocal',
                desc: '本地持久化一对键值(值为对象)',
                modifier: 'public',
                params: [
                  {
                    name: 'key',
                    desc: 'key',
                    type: 'String',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'object',
                    desc: 'object',
                    type: 'Object',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
              {
                name: 'getObjectByLocal',
                desc: '本地取出值(值为对象)',
                modifier: 'public',
                params: [
                  {
                    name: 'key',
                    desc: 'key',
                    type: 'String',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'Object',
                returnDesc: '',
              },
              {
                name: 'removeByLocal',
                desc: '本地删除一个键值',
                modifier: 'public',
                params: [
                  {
                    name: 'key',
                    desc: 'key',
                    type: 'String',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
              {
                name: 'putStringBySession',
                desc: '会话持久化一对键值(值为String)',
                modifier: 'public',
                params: [
                  {
                    name: 'key',
                    desc: 'key',
                    type: 'String',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'value',
                    desc: 'value',
                    type: 'string',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'getStringBySession',
                desc: '会话取出值(值为String)',
                modifier: 'public',
                params: [
                  {
                    name: 'key',
                    desc: 'key',
                    type: 'String',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'String',
                returnDesc: '',
              },
              {
                name: 'putObjectBySession',
                desc: '会话持久化一对键值(值为对象)',
                modifier: 'public',
                params: [
                  {
                    name: 'key',
                    desc: 'key',
                    type: 'String',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'object',
                    desc: 'object',
                    type: 'Object',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
              {
                name: 'getObjectBySession',
                desc: '会话取出值(值为对象)',
                modifier: 'public',
                params: [
                  {
                    name: 'key',
                    desc: 'key',
                    type: 'String',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
                returnType: 'Object',
                returnDesc: '',
              },
              {
                name: 'removeBySession',
                desc: '会话删除一个键值',
                modifier: 'public',
                params: [
                  {
                    name: 'key',
                    desc: 'key',
                    type: 'String',
                    defaultVal: '',
                    required: 'true',
                  },
                ],
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
