import { Button } from 'antd';
import React from 'react';

import { Preferences, Space } from '@baifendian/adhere';

import FunctionProps from '@/lib/FunctionProps';
import Playground from '@/lib/Playground';

export default () => {
  return (
    <div className="Page">
      <h1>sessionStore和localStore进行的封装</h1>
      <ul>
        <li>- 支持字符串的写入和拿出</li>
        <li>- 支持对象的写入和拿出</li>
      </ul>

      <Space />

      <FunctionProps
        border
        title="方法"
        data={[
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
        ]}
      />

      <h2>基本的使用</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import { Preferences } from '@baifendian/adhere';

  Preferences.putStringByLocal('a', 'a');
  Preferences.putObjectByLocal('b', { a: 1, b: 2 });

  Preferences.putStringBySession('a', 'a');
  Preferences.putObjectBySession('b', { a: 1, b: 2 });
        `}
      >
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
      </Playground>
    </div>
  );
};
