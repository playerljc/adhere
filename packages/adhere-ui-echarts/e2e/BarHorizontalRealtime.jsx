import ReactEcharts from 'echarts-for-react';
import React, { useEffect, useState } from 'react';

import { merge, options } from '../../src';
import { chartStyle } from './data';

const yData = ['A', 'B', 'C', 'D', 'E'];

function randomData() {
  return yData.map(() => Math.round(Math.random() * 200));
}

export default () => {
  const [data, setData] = useState(randomData);

  useEffect(() => {
    const timer = setInterval(() => {
      setData(randomData());
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const option = merge(options.barChartToRealtimeSortValueToX([{ name: 'X', data }]), {
    title: { text: '横向动态排序柱状图' },
    xAxis: {
      max: 'dataMax',
    },
    yAxis: {
      data: yData,
      inverse: true,
      animationDuration: 300,
      animationDurationUpdate: 300,
      max: 4,
    },
    series: [
      {
        label: {
          show: true,
          position: 'right',
          valueAnimation: true,
        },
      },
    ],
    animationDuration: 0,
    animationDurationUpdate: 3000,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear',
  });

  return <ReactEcharts option={option} style={chartStyle} notMerge />;
};
