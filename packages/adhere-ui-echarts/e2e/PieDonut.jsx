import ReactEcharts from 'echarts-for-react';
import React from 'react';

import { colors, merge, options } from '../../src';
import { chartStyle, pieData } from './data';

export default () => {
  const option = merge(
    options.pieChartToRadius(
      ['40%', '70%'],
      [
        {
          name: '访问来源',
          data: pieData,
          color: [colors.color1, colors.color2, colors.color5, colors.color15, colors.color10],
        },
      ],
    ),
    {
      title: { text: '圆环图', left: 'center' },
      tooltip: { trigger: 'item' },
      legend: { bottom: 0 },
    },
  );

  return <ReactEcharts option={option} style={chartStyle} />;
};
