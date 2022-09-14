import { Button } from 'antd';
import React from 'react';

import { ErrorPrompt } from '@baifendian/adhere';

import FunctionProps from '@/lib/FunctionProps';
import Playground from '@/lib/Playground';

export default () => (
  <div className="Page">
    <h1>ErrorPrompt</h1>
    <p>错误的提示(就是为了全局统一)</p>

    <FunctionProps
      border
      title="方法"
      data={[
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
      ]}
    />

    <h2>基本使用</h2>
    <Playground
      mode="code"
      scope={{ React }}
      codeText={`
  import React from 'react';
  import { Button } from 'antd';
  import { ErrorPrompt } from '@baifendian/adhere';

  <Button
    type="primary"
    onClick={() => {
      ErrorPrompt('操作失败');
    }}
  >
    显示警告提示
  </Button>
    `}
    >
      <Button
        type="primary"
        onClick={() => {
          ErrorPrompt('操作失败');
        }}
      >
        显示警告提示
      </Button>
    </Playground>
  </div>
);
