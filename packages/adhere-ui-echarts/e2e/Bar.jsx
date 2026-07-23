import ReactEcharts from 'echarts-for-react';
import React from 'react';

import { merge, options } from '../../src';
import { categories, chartStyle, salesData } from './data';

export default () => {
  const option = merge(
    options.barChart([
      {
        name: '销量',
        data: salesData,
      },
    ]),
    {
      title: { text: '柱状图' },
      xAxis: { data: categories },
      tooltip: { trigger: 'axis' },
      legend: { data: ['销量'] },
    },
  );

  return <ReactEcharts option={option} style={chartStyle} />;
};
