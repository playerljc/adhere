import ReactEcharts from 'echarts-for-react';
import React from 'react';

import { colors, merge, options } from '../../src';
import { categories, chartStyle, salesData } from './data';

export default () => {
  const option = merge(
    options.lineChart([
      {
        name: '趋势',
        data: salesData,
        itemStyle: { color: colors.color1 },
      },
    ]),
    {
      title: { text: '折线图' },
      xAxis: { data: categories },
      tooltip: { trigger: 'axis' },
      legend: { data: ['趋势'] },
    },
  );

  return <ReactEcharts option={option} style={chartStyle} />;
};
