import ReactECharts from 'echarts-for-react';
import React from 'react';

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
      name: 'AQI',
      max: 125,
    },
    {
      min: 0,
      type: 'value',
      axisTick: { show: false },
      splitLine: { show: false },
      nameTextStyle: { align: 'right' },
      name: '温度',
      max: 35.88,
    },
  ],
  series: [
    {
      type: 'line',
      smooth: true,
      connectNulls: true,
      areaStyle: { opacity: 0.4 },
      yAxisIndex: 1,
      data: [
        null,
        null,
        null,
        { value: 28.7, symbolRotate: null },
        { value: 26.5, symbolRotate: null },
        { value: 28.3, symbolRotate: null },
        { value: 23.5, symbolRotate: null },
        { value: 25.7, symbolRotate: null },
        { value: 26.1, symbolRotate: null },
        { value: 26.3, symbolRotate: null },
        { value: 28.3, symbolRotate: null },
        { value: 23.5, symbolRotate: null },
        { value: 25.7, symbolRotate: null },
        { value: 26.1, symbolRotate: null },
        { value: 26.3, symbolRotate: null },
      ],
      name: '温度',
    },
    {
      type: 'line',
      smooth: true,
      connectNulls: true,
      areaStyle: { opacity: 0.4 },
      yAxisIndex: 0,
      data: [
        null,
        null,
        null,
        { value: 42, symbolRotate: null },
        { value: 40, symbolRotate: null },
        { value: 46, symbolRotate: null },
        { value: 45, symbolRotate: null },
        { value: 40, symbolRotate: null },
        { value: 51, symbolRotate: null },
        { value: 59, symbolRotate: null },
        { value: 46, symbolRotate: null },
        { value: 45, symbolRotate: null },
        { value: 40, symbolRotate: null },
        { value: 51, symbolRotate: null },
        { value: 59, symbolRotate: null },
      ],
      name: 'AQI',
      markArea: {
        silent: true,
        data: [
          [
            {
              yAxis: 0,
              name: '优',
              label: {
                show: true,
                position: 'insideLeft',
                verticalAlign: 'middle',
                opacity: 1,
                color: '#000',
              },
              itemStyle: { color: '#00e400', opacity: 1 },
            },
            { yAxis: 50 },
          ],
          [
            {
              yAxis: 50,
              name: '良',
              label: {
                show: true,
                position: 'insideLeft',
                verticalAlign: 'middle',
                opacity: 1,
                color: '#000',
              },
              itemStyle: { color: '#ffff00', opacity: 1 },
            },
            { yAxis: 100 },
          ],
          [
            {
              yAxis: 100,
              name: '轻度污染',
              label: {
                show: true,
                position: 'insideLeft',
                verticalAlign: 'middle',
                opacity: 1,
                color: '#000',
              },
              itemStyle: { color: '#ff7e00', opacity: 1 },
            },
            { yAxis: 150 },
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

  const option = ${JSON.stringify(option, null, 2)}

  <ReactECharts option={option} />
    `}
  >
    <ReactECharts option={option} />
  </Playground>
);
