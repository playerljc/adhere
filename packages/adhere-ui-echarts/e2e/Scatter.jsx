import ReactEcharts from 'echarts-for-react';
import React from 'react';

import { colors, merge, options } from '../../src';
import { chartStyle } from './data';

const scatterData = Array.from({ length: 40 }).map(() => [
  Math.round(Math.random() * 100),
  Math.round(Math.random() * 100),
]);

export default () => {
  const option = merge(
    options.scatterChart([
      {
        name: '样本',
        data: scatterData,
        itemStyle: { color: colors.color1 },
      },
    ]),
    {
      title: { text: '散点图' },
      tooltip: { trigger: 'item' },
      xAxis: { type: 'value' },
      yAxis: { type: 'value' },
    },
  );

  return <ReactEcharts option={option} style={chartStyle} />;
};
