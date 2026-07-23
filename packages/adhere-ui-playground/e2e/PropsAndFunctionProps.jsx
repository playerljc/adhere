import React from 'react';

import PlayGroundLib from '../src/index';

import '../src/index.less';

const { Props, FunctionProps } = PlayGroundLib;

/**
 * PropsAndFunctionProps
 * @description Props / FunctionProps 文档表格
 */
export default () => {
  return (
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Props
        title="Button"
        border
        data={[
          {
            params: 'type',
            desc: '按钮类型',
            type: "'primary' | 'default'",
            defaultVal: 'default',
          },
          {
            params: 'onClick',
            desc: '点击回调',
            type: '() => void',
            defaultVal: '-',
          },
        ]}
      />

      <FunctionProps
        title="方法"
        border
        data={[
          {
            name: 'open',
            desc: '打开面板',
            modifier: 'public',
            params: [
              {
                name: 'id',
                desc: '面板 id',
                type: 'string',
                defaultVal: '',
                required: 'true',
              },
            ],
            returnType: 'void',
            returnDesc: '',
          },
        ]}
      />
    </div>
  );
};
