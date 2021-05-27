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
      '05-19 00:00',
      '05-19 01:00',
      '05-19 02:00',
      '05-19 03:00',
      '05-19 04:00',
      '05-19 05:00',
      '05-19 06:00',
      '05-19 07:00',
      '05-19 08:00',
      '05-19 09:00',
      '05-19 10:00',
      '05-19 11:00',
      '05-19 12:00',
      '05-19 13:00',
      '05-19 14:00',
      '05-19 15:00',
      '05-19 16:00',
      '05-19 17:00',
      '05-19 18:00',
      '05-19 19:00',
      '05-19 20:00',
      '05-19 21:00',
      '05-19 22:00',
      '05-19 23:00',
      '05-20 00:00',
      '05-20 01:00',
      '05-20 02:00',
      '05-20 03:00',
      '05-20 04:00',
      '05-20 05:00',
      '05-20 06:00',
      '05-20 07:00',
      '05-20 08:00',
      '05-20 09:00',
      '05-20 10:00',
      '05-20 11:00',
      '05-20 12:00',
      '05-20 13:00',
      '05-20 14:00',
      '05-20 15:00',
      '05-20 16:00',
      '05-20 17:00',
      '05-20 18:00',
      '05-20 19:00',
      '05-20 20:00',
      '05-20 21:00',
      '05-20 22:00',
      '05-20 23:00',
      '05-21 00:00',
      '05-21 01:00',
      '05-21 02:00',
      '05-21 03:00',
      '05-21 04:00',
      '05-21 05:00',
      '05-21 06:00',
      '05-21 07:00',
      '05-21 08:00',
      '05-21 09:00',
      '05-21 10:00',
      '05-21 11:00',
      '05-21 12:00',
      '05-21 13:00',
      '05-21 14:00',
      '05-21 15:00',
      '05-21 16:00',
      '05-21 17:00',
      '05-21 18:00',
      '05-21 19:00',
      '05-21 20:00',
      '05-21 21:00',
      '05-21 22:00',
      '05-21 23:00',
      '05-22 00:00',
      '05-22 01:00',
      '05-22 02:00',
      '05-22 03:00',
      '05-22 04:00',
      '05-22 05:00',
      '05-22 06:00',
      '05-22 07:00',
      '05-22 08:00',
      '05-22 09:00',
      '05-22 10:00',
      '05-22 11:00',
      '05-22 12:00',
      '05-22 13:00',
      '05-22 14:00',
      '05-22 15:00',
      '05-22 16:00',
      '05-22 17:00',
      '05-22 18:00',
      '05-22 19:00',
      '05-22 20:00',
      '05-22 21:00',
      '05-22 22:00',
      '05-22 23:00',
      '05-23 00:00',
      '05-23 01:00',
      '05-23 02:00',
      '05-23 03:00',
      '05-23 04:00',
      '05-23 05:00',
      '05-23 06:00',
      '05-23 07:00',
      '05-23 08:00',
      '05-23 09:00',
      '05-23 10:00',
      '05-23 11:00',
      '05-23 12:00',
      '05-23 13:00',
      '05-23 14:00',
      '05-23 15:00',
      '05-23 16:00',
      '05-23 17:00',
      '05-23 18:00',
      '05-23 19:00',
      '05-23 20:00',
      '05-23 21:00',
      '05-23 22:00',
      '05-23 23:00',
      '05-24 00:00',
      '05-24 01:00',
      '05-24 02:00',
      '05-24 03:00',
      '05-24 04:00',
      '05-24 05:00',
      '05-24 06:00',
      '05-24 07:00',
      '05-24 08:00',
      '05-24 09:00',
      '05-24 10:00',
      '05-24 11:00',
      '05-24 12:00',
      '05-24 13:00',
      '05-24 14:00',
      '05-24 15:00',
      '05-24 16:00',
      '05-24 17:00',
      '05-24 18:00',
      '05-24 19:00',
      '05-24 20:00',
      '05-24 21:00',
      '05-24 22:00',
      '05-24 23:00',
      '05-25 00:00',
      '05-25 01:00',
      '05-25 02:00',
      '05-25 03:00',
      '05-25 04:00',
      '05-25 05:00',
      '05-25 06:00',
      '05-25 07:00',
      '05-25 08:00',
      '05-25 09:00',
      '05-25 10:00',
      '05-25 11:00',
      '05-25 12:00',
      '05-25 13:00',
      '05-25 14:00',
      '05-25 15:00',
      '05-25 16:00',
      '05-25 17:00',
      '05-25 18:00',
      '05-25 19:00',
      '05-25 20:00',
      '05-25 21:00',
      '05-25 22:00',
      '05-25 23:00',
      '05-26 00:00',
    ],
  },
  yAxis: [
    {
      min: 0,
      type: 'value',
      axisTick: { show: false },
      splitLine: { show: false },
      nameTextStyle: { align: 'left' },
      name: '水质类别',
      interval: 0.5,
      axisLabel: {},
      max: 6.25,
    },
  ],
  series: [
    {
      type: 'line',
      smooth: true,
      connectNulls: true,
      areaStyle: { opacity: 0.4 },
      yAxisIndex: 0,
      data: [],
      name: '魏村',
      markArea: {
        silent: true,
        data: [
          [
            {
              yAxis: 0,
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
            { yAxis: 1 },
          ],
          [
            {
              yAxis: 1,
              name: 'II类',
              label: {
                show: true,
                position: 'insideLeft',
                verticalAlign: 'middle',
                opacity: 1,
                color: '#FFF',
              },
              itemStyle: { color: '#0097A7', opacity: 1 },
            },
            { yAxis: 2 },
          ],
          [
            {
              yAxis: 2,
              name: 'III类',
              label: {
                show: true,
                position: 'insideLeft',
                verticalAlign: 'middle',
                opacity: 1,
                color: '#FFF',
              },
              itemStyle: { color: '#43A047', opacity: 1 },
            },
            { yAxis: 3 },
          ],
          [
            {
              yAxis: 3,
              name: 'IV类',
              label: {
                show: true,
                position: 'insideLeft',
                verticalAlign: 'middle',
                opacity: 1,
                color: '#FFF',
              },
              itemStyle: { color: '#FBC02D', opacity: 1 },
            },
            { yAxis: 4 },
          ],
          [
            {
              yAxis: 4,
              name: 'V类',
              label: {
                show: true,
                position: 'insideLeft',
                verticalAlign: 'middle',
                opacity: 1,
                color: '#FFF',
              },
              itemStyle: { color: '#EF6C00', opacity: 1 },
            },
            { yAxis: 5 },
          ],
          [
            {
              yAxis: 5,
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
