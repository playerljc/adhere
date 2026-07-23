import ReactEcharts from 'echarts-for-react';
import React from 'react';

import { colors, merge, options } from '../../src';
import { categories, chartStyle, salesData } from './data';

export default () => {
  const option = merge(
    options.lineChartToArea(
      {},
      [
        {
          name: '面积',
          data: salesData,
          itemStyle: { color: colors.color2 },
        },
      ],
    ),
    {
      title: { text: '面积图' },
      xAxis: { data: categories },
      tooltip: { trigger: 'axis' },
    },
  );

  return <ReactEcharts option={option} style={chartStyle} />;
};
