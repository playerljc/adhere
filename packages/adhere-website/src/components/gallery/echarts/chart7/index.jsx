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
      name: 'PH',
      max: 11.25,
    },
  ],
  series: [
    {
      type: 'line',
      smooth: true,
      connectNulls: true,
      areaStyle: { opacity: 0.4 },
      yAxisIndex: 0,
      data: [
        { symbolRotate: null },
        { symbolRotate: null },
        { symbolRotate: null },
        { symbolRotate: null },
        { symbolRotate: null },
        { value: 7.63, symbolRotate: null },
        { value: 8.53, symbolRotate: null },
        { value: 8.19, symbolRotate: null },
        { value: 6.35, symbolRotate: null },
        { value: 6.65, symbolRotate: null },
        { symbolRotate: null },
        { symbolRotate: null },
        { symbolRotate: null },
        { symbolRotate: null },
        { symbolRotate: null },
      ],
      name: '东潘桥',
      markArea: {
        silent: true,
        data: [
          [
            {
              yAxis: 0,
              name: '劣V类',
              label: {
                show: true,
                position: 'insideLeft',
                verticalAlign: 'middle',
                opacity: 1,
                color: '#FFF',
              },
              itemStyle: { color: '#B71C1C', opacity: 1 },
            },
            { yAxis: 6 },
          ],
          [
            {
              yAxis: 6,
              name: 'I类',
              label: {
                show: true,
                position: 'insideLeft',
                verticalAlign: 'middle',
                opacity: 1,
                color: '#FFF',
              },
              itemStyle: { color: '#01A8F3', opacity: 1 },
            },
            { yAxis: 9 },
          ],
          [
            {
              yAxis: 9,
              name: '劣V类',
              label: {
                show: true,
                position: 'insideLeft',
                verticalAlign: 'middle',
                opacity: 1,
                color: '#FFF',
              },
              itemStyle: { color: '#B71C1C', opacity: 1 },
            },
            { yAxis: 1.7976931348623157e308 },
          ],
        ],
      },
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
  
  const option = ${JSON.stringify(option)}
  
  <ReactECharts option={option} />
    `}
  >
    <ReactECharts option={option} />
  </Playground>
);
