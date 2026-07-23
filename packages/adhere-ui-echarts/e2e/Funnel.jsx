import ReactEcharts from 'echarts-for-react';
import React from 'react';

import { colors, merge, options } from '../../src';
import { chartStyle } from './data';

export default () => {
  const option = merge(
    options.funnelChart([
      {
        name: '漏斗',
        data: [
          { value: 100, name: '展现' },
          { value: 80, name: '点击' },
          { value: 60, name: '访问' },
          { value: 40, name: '咨询' },
          { value: 20, name: '订单' },
        ],
        color: [colors.color1, colors.color2, colors.color5, colors.color15, colors.color10],
      },
    ]),
    {
      title: { text: '漏斗图' },
      tooltip: { trigger: 'item' },
      legend: { bottom: 0 },
    },
  );

  return <ReactEcharts option={option} style={chartStyle} />;
};
