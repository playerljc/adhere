import ReactECharts from 'echarts-for-react';
import React from 'react';

import Playground from '@/lib/Playground';

const option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985',
      },
    },
  },
  grid: {
    x: 50,
    y: 50,
    x2: 50,
    y2: 70,
  },
  legend: {
    type: 'scroll',
    top: 0,
    right: 16,
    padding: [5, 16, 5, 150],
  },
  xAxis: {
    boundaryGap: false,
    axisTick: {
      show: true,
      alignWithLabel: true,
    },
    data: [
      '2020-08-21',
      '2020-08-22',
      '2020-08-23',
      '2020-08-24',
      '2020-08-25',
      '2020-08-26',
      '2020-08-27',
      '2020-08-28',
      '2020-08-29',
      '2020-08-30',
      '2020-08-31',
      '2020-09-01',
      '2020-09-02',
      '2020-09-03',
      '2020-09-04',
      '2020-09-05',
      '2020-09-06',
      '2020-09-07',
      '2020-09-08',
      '2020-09-09',
      '2020-09-10',
      '2020-09-11',
    ],
  },
  yAxis: [
    {
      min: 0,
      type: 'value',
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      nameTextStyle: {
        align: 'left',
      },
      name: 'AQI',
      max: 125,
    },
  ],
  series: [
    {
      type: 'line',
      smooth: true,
      connectNulls: true,
      areaStyle: {
        opacity: 0.4,
      },
      yAxisIndex: 0,
      data: [
        {
          value: 51,
          symbolRotate: null,
        },
        {
          value: 46,
          symbolRotate: null,
        },
        {
          value: 68,
          symbolRotate: null,
        },
        {
          value: 46,
          symbolRotate: null,
        },
        {
          value: 68,
          symbolRotate: null,
        },
        {
          symbolRotate: null,
        },
        {
          symbolRotate: null,
        },
        {
          symbolRotate: null,
        },
        {
          symbolRotate: null,
        },
        {
          symbolRotate: null,
        },
        {
          symbolRotate: null,
        },
        {
          symbolRotate: null,
        },
        {
          symbolRotate: null,
        },
        {
          symbolRotate: null,
        },
        {
          symbolRotate: null,
        },
        {
          symbolRotate: null,
        },
        {
          symbolRotate: null,
        },
        {
          symbolRotate: null,
        },
        {
          symbolRotate: null,
        },
        {
          symbolRotate: null,
        },
        {
          symbolRotate: null,
        },
        {
          symbolRotate: null,
        },
      ],
      name: '\u884c\u653f\u4e2d\u5fc3',
      markArea: {
        silent: true,
        data: [
          [
            {
              yAxis: 0,
              name: '\u4f18',
              label: {
                show: true,
                position: 'insideLeft',
                verticalAlign: 'middle',
                opacity: 1,
                color: '#000',
              },
              itemStyle: {
                color: '#00e400',
                opacity: 1,
              },
            },
            {
              yAxis: 50,
            },
          ],
          [
            {
              yAxis: 50,
              name: '\u826f',
              label: {
                show: true,
                position: 'insideLeft',
                verticalAlign: 'middle',
                opacity: 1,
                color: '#000',
              },
              itemStyle: {
                color: '#ffff00',
                opacity: 1,
              },
            },
            {
              yAxis: 100,
            },
          ],
          [
            {
              yAxis: 100,
              name: '\u8f7b\u5ea6\u6c61\u67d3',
              label: {
                show: true,
                position: 'insideLeft',
                verticalAlign: 'middle',
                opacity: 1,
                color: '#000',
              },
              itemStyle: {
                color: '#ff7e00',
                opacity: 1,
              },
            },
            {
              yAxis: 150,
            },
          ],
        ],
      },
    },
    {
      type: 'line',
      smooth: true,
      connectNulls: true,
      areaStyle: {
        opacity: 0.4,
      },
      yAxisIndex: 0,
      data: [
        {
          value: 40,
          symbolRotate: null,
        },
        {
          value: 51,
          symbolRotate: null,
        },
        {
          value: 59,
          symbolRotate: null,
        },
        {
          value: 51,
          symbolRotate: null,
        },
        {
          value: 59,
          symbolRotate: null,
        },
        {
          symbolRotate: null,
        },
        {
          symbolRotate: null,
        },
        {
          symbolRotate: null,
        },
        {
          symbolRotate: null,
        },
        {
          symbolRotate: null,
        },
        {
          symbolRotate: null,
        },
        {
          symbolRotate: null,
        },
        {
          symbolRotate: null,
        },
        {
          symbolRotate: null,
        },
        {
          symbolRotate: null,
        },
        {
          symbolRotate: null,
        },
        {
          symbolRotate: null,
        },
        {
          symbolRotate: null,
        },
        {
          symbolRotate: null,
        },
        {
          symbolRotate: null,
        },
        {
          symbolRotate: null,
        },
        {
          symbolRotate: null,
        },
      ],
      name: '\u5b89\u5bb6',
      markArea: {
        silent: true,
        data: [
          [
            {
              yAxis: 0,
              name: '\u4f18',
              label: {
                show: true,
                position: 'insideLeft',
                verticalAlign: 'middle',
                opacity: 1,
                color: '#000',
              },
              itemStyle: {
                color: '#00e400',
                opacity: 1,
              },
            },
            {
              yAxis: 50,
            },
          ],
          [
            {
              yAxis: 50,
              name: '\u826f',
              label: {
                show: true,
                position: 'insideLeft',
                verticalAlign: 'middle',
                opacity: 1,
                color: '#000',
              },
              itemStyle: {
                color: '#ffff00',
                opacity: 1,
              },
            },
            {
              yAxis: 100,
            },
          ],
          [
            {
              yAxis: 100,
              name: '\u8f7b\u5ea6\u6c61\u67d3',
              label: {
                show: true,
                position: 'insideLeft',
                verticalAlign: 'middle',
                opacity: 1,
                color: '#000',
              },
              itemStyle: {
                color: '#ff7e00',
                opacity: 1,
              },
            },
            {
              yAxis: 150,
            },
          ],
        ],
      },
    },
  ],
  dataZoom: [
    {
      show: true,
      start: 10,
      end: 40,
      textStyle: {
        color: 'transparent',
      },
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
