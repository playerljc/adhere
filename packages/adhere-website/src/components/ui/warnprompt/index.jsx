import React from 'react';
import { Button } from 'antd';
import { WarnPrompt } from '@baifendian/adhere';

import FunctionProps from '@/lib/FunctionProps';
import Playground from '@/lib/Playground';

export default () => (
  <div className="Page">
    <h1>WarnPrompt</h1>
    <p>警告的提示(就是为了全局统一)</p>
    <h2>方法</h2>
    <FunctionProps
      data={[
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

    <h2>基本使用</h2>
    <Playground
      mode="code"
      scope={{ React }}
      codeText={`
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
    `}
    >
      <Button
        type="primary"
        onClick={() => {
          WarnPrompt('操作异常');
        }}
      >
        显示警告提示
      </Button>
    </Playground>
  </div>
);
