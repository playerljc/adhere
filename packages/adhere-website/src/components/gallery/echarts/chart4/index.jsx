import React from 'react';
import ReactECharts from 'echarts-for-react';

import Playground from '@/lib/Playground';

const option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'cross', label: { backgroundColor: '#6a7985' } },
  },
  grid: { x: 50, y: 50, x2: 50, y2: 20 },
  legend: { type: 'scroll', top: 0, right: 16, padding: [5, 16, 5, 150] },
  xAxis: {
    boundaryGap: true,
    axisTick: { show: true, alignWithLabel: true },
    data: [
      '01',
      '02',
      '03',
      '04',
      '05',
      '06',
      '07',
      '08',
      '09',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '30',
      '31',
    ],
  },
  yAxis: [
    {
      min: 0,
      type: 'value',
      axisTick: { show: false },
      splitLine: { show: true },
      axisLine: { show: false },
      nameTextStyle: { align: 'left' },
      name: '超标次数',
      minInterval: 1,
    },
  ],
  series: [
    {
      type: 'bar',
      data: [
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 1 },
        { value: 0 },
        { value: 0 },
        { value: 1 },
        { value: 0 },
        { value: 1 },
        { value: 0 },
        { value: 0 },
        { value: 1 },
        { value: 1 },
        { value: 1 },
        { value: 1 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
      ],
      name: 'NO2',
    },
  ],
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
