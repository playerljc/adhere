import React from 'react';

import FunctionProps from '@/lib/FunctionProps';
import Playground from '@/lib/Playground';

export default () => {
  return (
    <div className="Page">
      <h1>历史记录返回操作</h1>
      <p>- 如果历史栈中没有记录则返回主页，或者可以自定义 - 如果可以返回则进行返回</p>
      <h2>方法</h2>
      <FunctionProps
        data={[
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
        ]}
      />
      <h2>基本使用</h2>
      <Playground
        mode="code"
        scope={{ React }}
        expand
        codeText={`
  import { Button } from 'antd';
  import { HistoryBack } from '@baifendian/adhere';

  <Button type="primary" onClick={() => {
     HistoryBack(this.props.history,'/');
  }}>回退</Button>
      `}
      />
    </div>
  );
};
