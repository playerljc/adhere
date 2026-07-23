import ReactEcharts from 'echarts-for-react';
import React from 'react';

import { colors, merge, options } from '../../src';
import { categories, chartStyle, offlineData, onlineData } from './data';

export default () => {
  const option = merge(
    options.lineChartToSmooth([
      {
        name: '线上',
        data: onlineData,
        itemStyle: { color: colors.color1 },
      },
      {
        name: '线下',
        data: offlineData,
        itemStyle: { color: colors.color5 },
      },
    ]),
    {
      title: { text: '平滑折线图' },
      xAxis: { data: categories },
      tooltip: { trigger: 'axis' },
      legend: { data: ['线上', '线下'] },
    },
  );

  return <ReactEcharts option={option} style={chartStyle} />;
};
