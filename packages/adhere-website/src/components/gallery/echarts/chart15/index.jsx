import React from 'react';
import ReactECharts from 'echarts-for-react';

import Playground from '@/lib/Playground';

const option = {
  legend: {
    top: 'bottom',
    textStyle: {
      color: '#333',
      lineHeight: 14,
    },
    pageIconColor: '#000',
    pageIconInactiveColor: '#333',
    pageIconSize: 12,
    pageTextStyle: {
      color: '#fff',
    },
    type: 'scroll',
    width: '80%',
    left: 'center',
    itemWidth: 10,
    itemHeight: 10,
  },
  tooltip: {
    show: true,
    borderColor: 'rgba(8, 77, 126, 0.8)',
    backgroundColor: 'rgba(8, 77, 126, 0.8)',
    extraCssText: 'box-shadow: inset 0px 1px 16px 0px #26a4fe',
    textStyle: {
      color: '#fff',
    },
    formatter: (res) => {
      const { data } = res;
      return `${res.marker}${data.name}: ${data.value}`;
    },
  },
  radar: {
    indicator: [{}, {}, {}, {}, {}],
    center: ['50%', '50%'],
    radius: '50%',
    shape: 'circle',
    splitNumber: 4,
    splitArea: {
      show: false,
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(132, 132, 134, 1)',
      },
    },
    axisLabel: {
      color: '#ccc',
    },
    axisLine: {
      lineStyle: {
        color: 'rgba(132, 132, 134, 1)',
      },
    },
  },
  series: [
    {
      name: '商家数',
      type: 'pie',
      radius: '50%',
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 0,
      },
      labelLine: {
        length: 8,
        length2: 0,
        lineStyle: {
          color: 'transparent',
        },
      },
      label: {
        fontSize: 12,
        color: '#fff',
        distanceToLabelLine: 0,
      },
      data: [
        {
          name: '景点门票',
          value: '4',
        },
        {
          name: '演出票',
          value: '5',
        },
        {
          name: '生活服务',
          value: '2',
        },
        {
          name: '电影票',
          value: '1',
        },
        {
          name: '职工疗休养',
          value: '3',
        },
      ],
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
