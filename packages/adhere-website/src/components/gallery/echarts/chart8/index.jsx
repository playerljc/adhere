import ReactECharts from 'echarts-for-react';
import 'echarts-wordcloud';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';
import React from 'react';

import Playground from '@/lib/Playground';

import data from './data';

// circle(default),cardioid,diamond,square,triangle-forward,triangle,pentagon,star
const option = {
  grid: {
    left: '0%',
    right: '0%',
    bottom: '3%',
    containLabel: true,
  },
  tooltip: {
    show: true,
    trigger: 'item',
    formatter(params) {
      return `${params.name}:${params.value}`;
    },
  },
  series: [
    {
      name: '热点分析',
      type: 'wordCloud',
      color: 'blue',
      width: '95%',
      height: '95%',
      size: ['0%', '90%'],
      gridSize: 0,
      sizeRange: [12, 30],
      rotationRange: [-90, 90],
      shape: 'pentagon',
      drawOutOfBound: true,
      textPadding: 0,
      autoSize: {
        enable: true,
        minSize: 6,
      },
      emphasis: {
        shadowBlur: 10,
        shadowColor: '#333',
      },
      data: data.map((item) => {
        const newItem = {
          name: !item.name ? item.key : item.name,
          ...item,
        };
        return newItem;
      }),
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
  import echarts from 'echarts/lib/echarts';
  import 'echarts-wordcloud';
  import 'echarts/lib/component/title';
  import 'echarts/lib/component/tooltip';
  import 'echarts/lib/component/legend';

  const option = ${JSON.stringify(option, null, 2)}

  <ReactECharts option={option} />
    `}
  >
    <ReactECharts option={option} />
  </Playground>
);
