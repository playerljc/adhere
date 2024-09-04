import ReactEcharts from 'echarts-for-react';
import React from 'react';

import AdhereEcharts from '../../src';

const { merge, options } = AdhereEcharts;

export default () => {
  const option = merge(options.barChartToRealtimeSortValueToX(), {
    xAxis: {
      max: 'dataMax',
    },
    yAxis: {
      data: ['A', 'B', 'C', 'D', 'E'],
      inverse: true,
      animationDuration: 300,
      animationDurationUpdate: 300,
      max: 2,
    },
    series: [
      {
        name: 'X',
        type: 'bar',
        data: Array.from({ length: 3 }).fill(() => Math.round(Math.random() * 200)),
        label: {
          show: true,
          position: 'right',
          valueAnimation: true,
        },
      },
    ],
    animationDuration: 3000,
    animationDurationUpdate: 3000,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear',
  });

  return (
    <div>
      <ReactEcharts option={option} />
    </div>
  );
};
