import { Slider } from 'antd';
import React, { useState } from 'react';

import { SliderScale, Space } from '@baifendian/adhere';

import Playground from '@/lib/Playground';
import Props from '@/lib/Props';

import './index.less';

export default () => {
  const [value, setValue] = useState(0);

  return (
    <div className="Page SliderScale">
      <h1>SliderScale</h1>
      <p>刻度盘</p>

      <Props
        border
        title="SliderScale"
        data={[
          {
            params: 'className',
            desc: '附加的样式表',
            type: 'string',
            defaultVal: '',
          },
          {
            params: 'style',
            desc: '附加的样式',
            type: 'React.CSSProperties',
            defaultVal: '',
          },
          {
            params: 'min',
            desc: '最小值',
            type: 'number',
            defaultVal: '0',
          },
          {
            params: 'max',
            desc: '最大值',
            type: 'number',
            defaultVal: '100',
          },
          {
            params: 'step',
            desc: '步进',
            type: 'number',
            defaultVal: '1',
          },
          {
            params: 'value',
            desc: '当前值',
            type: 'number',
            defaultVal: '0',
          },
          {
            params: 'interval',
            desc: '刻度的间隔',
            type: 'number',
            defaultVal: '5',
          },
          {
            params: 'onChange',
            desc: '改变的钩子',
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
  import { SliderScale, Space } from '@baifendian/adhere';

  <SliderScale min={0} max={10} step={1} interval={5} />
  <Space />
  <SliderScale min={0} max={60} step={1} interval={5} />
        `}
      >
        <SliderScale min={0} max={10} step={1} interval={5} />
        <Space />
        <SliderScale min={0} max={60} step={1} interval={5} />
      </Playground>

      <h2>不同的刻度</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import { SliderScale, Space } from '@baifendian/adhere';

  <SliderScale min={0} max={60} step={1} interval={10} />
  <Space />
  <SliderScale min={0} max={60} step={1} interval={20} />
        `}
      >
        <SliderScale min={0} max={60} step={1} interval={10} />
        <Space />
        <SliderScale min={0} max={60} step={1} interval={20} />
      </Playground>

      <h2>动态设置</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import React, { useState } from 'react';
  import { Slider } from 'antd';
  import { SliderScale, Space } from '@baifendian/adhere';

  const [value, setValue] = useState(0);

  <Slider
    min={0}
    max={60}
    value={value}
    onChange={(v) => {
      setValue(v);
    }}
  />

  <Space />

  <SliderScale
    min={0}
    max={60}
    step={1}
    interval={20}
    value={value}
    onChange={(v) => {
      setValue(v);
    }}
  />
        `}
      >
        <Slider
          min={0}
          max={60}
          value={value}
          onChange={(v) => {
            setValue(v);
          }}
        />

        <Space />

        <SliderScale
          min={0}
          max={60}
          step={1}
          interval={20}
          value={value}
          onChange={(v) => {
            setValue(v);
          }}
        />
      </Playground>
    </div>
  );
};
