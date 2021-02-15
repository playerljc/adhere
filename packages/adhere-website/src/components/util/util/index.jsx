import React from 'react';

import FunctionProps from '@/lib/FunctionProps';

export default () => {
  return (
    <div className="Page">
      <h1>工具类</h1>

      <h2>方法</h2>
      <FunctionProps
        data={[
          {
            name: 'notnull',
            desc: '',
            modifier: 'public',
            params: [
              {
                name: 'target',
                desc: '被监控的对象',
                type: 'Object | Array',
                defaultVal: '',
                required: 'true',
              },
            ],
            returnType: 'Object | Array',
            returnDesc: '返回被监控的对象',
          },
        ]}
      />
    </div>
  );
};
