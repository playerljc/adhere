import React from 'react';
import ReactECharts from 'echarts-for-react';

import Playground from '@/lib/Playground';

const option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'cross', label: { backgroundColor: '#6a7985' } },
  },
  grid: { x: 50, y: 50, x2: 50, y2: 70 },
  legend: { type: 'scroll', top: 0, right: 16, padding: [5, 16, 5, 150] },
  xAxis: {
    boundaryGap: false,
    axisTick: { show: true, alignWithLabel: true },
    data: [
      '2020-08-09',
      '2020-08-10',
      '2020-08-11',
      '2020-08-12',
      '2020-08-13',
      '2020-08-14',
      '2020-08-15',
      '2020-08-16',
      '2020-08-17',
      '2020-08-18',
      '2020-08-19',
      '2020-08-20',
      '2020-08-21',
      '2020-08-22',
      '2020-08-23',
    ],
  },
  yAxis: [
    {
      min: 0,
      type: 'value',
      axisTick: { show: false },
      splitLine: { show: false },
      nameTextStyle: { align: 'left' },
      name: '多站点平均',
    },
  ],
  series: [
    {
      type: 'line',
      smooth: true,
      symbol: 'path://M512 0L102.4 1024l409.6-256.896L921.6 1024z',
      symbolSize: 20,
      connectNulls: true,
      data: [
        { symbolRotate: null },
        { symbolRotate: null },
        { symbolRotate: null },
        { value: 2.2, symbolRotate: 135 },
        { value: 1.9, symbolRotate: 157.5 },
        { value: 1.7, symbolRotate: 135 },
        { value: 1.4, symbolRotate: 225 },
        { value: 1.7, symbolRotate: 225 },
        { value: 1.8, symbolRotate: 225 },
        { value: 2.5, symbolRotate: 225 },
        { value: 1.7, symbolRotate: 135 },
        { value: 1.4, symbolRotate: 225 },
        { value: 1.7, symbolRotate: 225 },
        { value: 1.8, symbolRotate: 225 },
        { value: 2.5, symbolRotate: 225 },
      ],
      name: '风速',
    },
    {
      type: 'line',
      smooth: true,
      connectNulls: true,
      areaStyle: { opacity: 0.4 },
      data: [
        { symbolRotate: null },
        { symbolRotate: null },
        { symbolRotate: null },
        { value: 42, symbolRotate: null },
        { value: 37, symbolRotate: null },
        { value: 46, symbolRotate: null },
        { value: 31, symbolRotate: null },
        { value: 40, symbolRotate: null },
        { value: 51, symbolRotate: null },
        { value: 66, symbolRotate: null },
        { value: 46, symbolRotate: null },
        { value: 31, symbolRotate: null },
        { value: 40, symbolRotate: null },
        { value: 51, symbolRotate: null },
        { value: 66, symbolRotate: null },
      ],
      name: 'PM10',
    },
  ],
  dataZoom: [{ show: true, start: 10, end: 40, textStyle: { color: 'transparent' } }],
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
