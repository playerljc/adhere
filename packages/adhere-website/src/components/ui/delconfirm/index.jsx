import React from 'react';
import { DelConfirm } from '@baifendian/adhere';

import Props from '@/lib/Props';
import FunctionProps from '@/lib/FunctionProps';
import Playground from '@/lib/Playground';

export default () => {
  return (
    <div className="Page">
      <h1>DelConfirm</h1>
      <p>删除确认提示(使用的是antd的Modal)</p>
      <p>删除的时候弹出提示，确认后在执行操作</p>
      <h2>属性</h2>
      <Props
        data={[
          {
            params: 'zIndex',
            desc: '显示的层级',
            type: 'number',
            defaultVal: '19999',
          },
          {
            params: 'className',
            desc: '附加的样式',
            type: 'string',
            defaultVal: '',
          },
          {
            params: 'success',
            desc: '确认后的回调，此方法需要返回Promise对象',
            type: 'Function',
            defaultVal: '() => {}',
          },
          {
            params: 'children',
            desc: '子组件',
            type: 'React.ReactElement',
            defaultVal: 'null',
          },
        ]}
      />
      <h2>方法</h2>
      <FunctionProps
        data={[
          {
            name: 'open',
            desc: '打开确认对话框',
            modifier: 'static',
            params: [
              {
                name: 'success',
                desc: '成功的回调，此方法需要返回Promise对象',
                type: 'Function',
                defaultVal: '() => {}',
                required: 'true',
              },
              {
                name: 'zIndex',
                desc: '显示层级',
                type: 'number',
                defaultVal: '19999',
                required: 'false',
              },
            ],
            returnType: 'void',
            returnDesc: '',
          },
        ]}
      />
      <h2>基本使用</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import React from 'react';
  import { DelConfirm } from '@baifendian/adhere';
  
  <DelConfirm
    success={() => {
      return new Promise((resolve) => {
        alert('点击了确认');

        resolve();
      });
    }}
  >
    <a>删除</a>
  </DelConfirm>
      `}
      >
        <DelConfirm
          success={() => {
            return new Promise((resolve) => {
              alert('点击了确认');

              resolve();
            });
          }}
        >
          <a>删除</a>
        </DelConfirm>
      </Playground>
      <h2>Confirm.open</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import React from 'react';
  import { DelConfirm } from '@baifendian/adhere';
  
  <a
    onClick={() => {
      DelConfirm.open(() => {
        return new Promise((resolve) => {
          alert('点击了确认');

          resolve();
        });
      });
    }}
  >
    删除
  </a>
      `}
      >
        <a
          onClick={() => {
            DelConfirm.open(() => {
              return new Promise((resolve) => {
                alert('点击了确认');

                resolve();
              });
            });
          }}
        >
          删除
        </a>
      </Playground>
    </div>
  );
};
