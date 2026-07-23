import ReactEcharts from 'echarts-for-react';
import React from 'react';

import { colors, merge, options } from '../../src';
import { chartStyle } from './data';

export default () => {
  const option = merge(
    options.gaugeChart([
      {
        name: '完成率',
        data: [{ value: 72, name: '完成率' }],
        itemStyle: { color: colors.color1 },
      },
    ]),
    {
      title: { text: '仪表盘', left: 'center' },
    },
  );

  return <ReactEcharts option={option} style={chartStyle} />;
};
