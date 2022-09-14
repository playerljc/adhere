import ReactECharts from 'echarts-for-react';
import React from 'react';

import Playground from '@/lib/Playground';

const option = {
  grid: { y: 0, y2: 0 },
  tooltip: {},
  radar: {
    name: { textStyle: { color: '#666' } },
    indicator: [
      { name: 'PM2.5(33)', max: 33 },
      { name: 'PM10(31)', max: 33 },
      { name: 'SO2(26)', max: 33 },
      { name: 'NO2(29)', max: 33 },
      { name: 'CO(30)', max: 33 },
      { name: 'O3(30)', max: 33 },
    ],
  },
  series: {
    name: '指标',
    type: 'radar',
    color: '#3FB27E',
    areaStyle: { opacity: 0.4 },
    data: [{ name: '指标', value: [33, 31, 26, 29, 30, 30] }],
  },
};

export default () => (
  <Playground
    mode="code"
    scope={{ React }}
    codeText={`
  import React from 'react';
  import ReactECharts from 'echarts-for-react';

  const option = ${JSON.stringify(option, null, 2)}

  <ReactECharts option={option} />
    `}
  >
    <ReactECharts option={option} />
  </Playground>
);
