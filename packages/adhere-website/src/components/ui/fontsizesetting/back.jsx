import React, { useState } from 'react';

import { FontSizeSetting, Space } from '@baifendian/adhere';

import Playground from '@/lib/Playground';
import Props from '@/lib/Props';

export default () => {
  const [fontSize, setFontSize] = useState(12);

  return (
    <div className="Page">
      <h1>FontSizeSetting</h1>
      <p>字体设置</p>

      <Props
        border
        title="属性"
        data={[
          {
            params: 'className',
            desc: '附加的样式',
            type: 'string',
            defaultVal: '',
          },
          {
            params: 'style',
            desc: '附加的样式',
            type: '{}',
            defaultVal: '{}',
          },
          {
            params: 'min',
            desc: '最小值',
            type: 'number',
            defaultVal: '',
          },
          {
            params: 'max',
            desc: '最大值',
            type: 'number',
            defaultVal: '',
          },
          {
            params: 'step',
            desc: '步进',
            type: 'number',
            defaultVal: '',
          },
          {
            params: 'onChange',
            desc: '数值改变',
            type: 'Function',
            defaultVal: '',
          },
        ]}
      />

      <h2>基本使用</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import React, { useState } from 'react';
  import { FontSizeSetting, Space } from '@baifendian/adhere';

  const [fontSize, setFontSize] = useState(12);

  <FontSizeSetting
    min={12}
    max={40}
    step={1}
    onChange={(size) => {
      setFontSize(size);
    }}
  />

  <Space />

  <p style={{ fontSize }}>我是一个粉刷匠</p>
      `}
      >
        <FontSizeSetting
          min={12}
          max={40}
          step={1}
          onChange={(size) => {
            setFontSize(size);
          }}
        />

        <Space />

        <p style={{ fontSize }}>我是一个粉刷匠</p>
      </Playground>
    </div>
  );
};
