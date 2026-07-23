import ReactEcharts from 'echarts-for-react';
import React from 'react';

import { colors, merge, options } from '../../src';
import { chartStyle } from './data';

export default () => {
  const option = merge(
    options.radarChart([
      {
        name: '预算 vs 实际',
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: '预算',
          },
          {
            value: [5000, 14000, 28000, 26000, 42000, 21000],
            name: '实际',
          },
        ],
      },
    ]),
    {
      title: { text: '雷达图' },
      color: [colors.color1, colors.color5],
      legend: { data: ['预算', '实际'] },
      radar: {
        indicator: [
          { name: '销售', max: 6500 },
          { name: '管理', max: 16000 },
          { name: '信息技术', max: 30000 },
          { name: '客服', max: 38000 },
          { name: '研发', max: 52000 },
          { name: '市场', max: 25000 },
        ],
      },
    },
  );

  return <ReactEcharts option={option} style={chartStyle} />;
};
