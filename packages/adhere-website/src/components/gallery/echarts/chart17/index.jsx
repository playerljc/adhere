import React from 'react';
import ReactECharts from 'echarts-for-react';

import Playground from '@/lib/Playground';

const option = {
  xAxis: {
    type: 'value',
    axisLabel: {
      interval: 0,
      color: '#ccc',
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(132, 132, 134, 1)',
      },
    },
  },
  legend: {
    bottom: 0,
    itemWidth: 10,
    itemHeight: 10,
    itemStyle: {
      color: 'rgba(38, 164, 254, 1)',
    },
    textStyle: {
      color: '#ccc',
    },
  },
  grid: {
    left: 190,
    top: 40,
    bottom: 50,
  },
  tooltip: {
    trigger: 'axis',
    borderColor: 'rgba(8, 77, 126, 0.8)',
    backgroundColor: 'rgba(8, 77, 126, 0.8)',
    extraCssText: 'box-shadow: inset 0px 1px 16px 0px #26a4fe',
    textStyle: {
      color: '#fff',
    },
    formatter: (res) => {
      const data = res[0];
      let values = res
        .map(
          (i, idx) =>
            `<span style="
              display:inline-block;
              margin-right:4px;
              border-radius:10px;
              width:10px;
              height:10px;
              background-color: rgba(38, 164, 254, 1);
              opacity: ${idx === 0 ? '0.6' : '1'}
            "></span>${i.seriesName}: ${i.data[0]}${i.data[2]}`,
        )
        .join('<br />');
      return `${data.axisValue}<br />${values}`;
    },
  },
  yAxis: {
    type: 'category',
    splitLine: {
      lineStyle: {
        color: 'rgba(132, 132, 134, 1)',
      },
    },
    axisLabel: {
      color: '#ccc',
    },
  },
  barWidth: '40%',
  series: [
    {
      name: '培训期数',
      type: 'bar',
      itemStyle: {
        color: {
          colorStops: [
            {
              offset: 0,
              color: '#26A4FE',
            },
            {
              offset: 1,
              color: 'rgba(78, 209, 255, 0)',
            },
          ],
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          type: 'linear',
          global: false,
        },
      },
      label: {
        show: true,
        position: 'right',
        textStyle: {
          color: '#ccc',
        },
      },
      barWidth: '30%',
      data: [
        ['1', '全市基层工会干部网络培训班', '人'],
        ['15', '基层工会专业化人才培训班', '人'],
        ['7', '市产业工会基层工会干部培训班', '人'],
        ['1', '市总工会离退休人员培训班', '人'],
        ['1', '市总工会领导干部党史学习教育班', '人'],
        ['4', '省外学习培训', '人'],
      ],
    },
  ],
};

export default () => (
  <Playground
    mode="code"
    scope={{ React }}
    codeText={`
  import React from 'react';
  import ReactECharts from 'echarts-for-react';
      
  const option = ${JSON.stringify(option, null, 2)}
      
  <ReactECharts option={option} />
    `}
  >
    <ReactECharts option={option} />
  </Playground>
);
