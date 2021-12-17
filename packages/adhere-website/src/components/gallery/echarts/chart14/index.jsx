import React from 'react';
import ReactECharts from 'echarts-for-react';

import Playground from '@/lib/Playground';

const option = {
  color: ['rgba(38, 164, 254, 1)', 'rgba(77, 185, 148, 1)'],
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
          (i) =>
            `<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:${i.color};"></span>${i.seriesName}: ${i.data[1]}${i.data[2]}`,
        )
        .join('<br />');
      return `${data.axisValue}<br />${values}`;
    },
  },
  legend: {
    right: 0,
    top: 0,
    textStyle: {
      color: '#333',
    },
  },
  grid: {
    left: '13%',
    top: 40,
    bottom: 50,
  },
  xAxis: {
    type: 'category',
    axisLine: {
      lineStyle: {
        color: 'rgba(132, 132, 134, 1)',
      },
    },
    axisLabel: {
      color: '#ccc',
    },
    boundaryGap: false,
  },
  yAxis: [
    {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: 'rgba(132, 132, 134, 1)',
        },
      },
      axisLabel: {
        margin: 2,
        color: '#ccc',
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(132, 132, 134, 1)',
        },
      },
    },
    {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: 'rgba(132, 132, 134, 1)',
        },
      },
      axisLabel: {
        color: '#ccc',
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(132, 132, 134, 1)',
        },
      },
    },
  ],
  series: [
    {
      name: '培训人数',
      type: 'line',
      showSymbol: false,
      connectNulls: true,
      yAxisIndex: 0,
      data: [
        ['2010年', '10112', '人'],
        ['2011年', '10105', '人'],
        ['2012年', '10060', '人'],
        ['2013年', '11560', '人'],
        ['2014年', '10393', '人'],
        ['2015年', '8766', '人'],
        ['2016年', '8561', '人'],
        ['2017年', '8768', '人'],
        ['2018年', '8293', '人'],
        ['2019年', '8576', '人'],
        ['2020年', '6389', '人'],
        ['2021年', '3036', '人'],
      ],
      areaStyle: {
        opacity: 0.3,
      },
    },
    {
      name: '服务单位数',
      type: 'line',
      showSymbol: false,
      connectNulls: true,
      yAxisIndex: 0,
      data: [
        ['2010年', '116', '家'],
        ['2011年', '120', '家'],
        ['2012年', '120', '家'],
        ['2013年', '131', '家'],
        ['2014年', '126', '家'],
        ['2015年', '134', '家'],
        ['2016年', '194', '家'],
        ['2017年', '196', '家'],
        ['2018年', '186', '家'],
        ['2019年', '192', '家'],
        ['2020年', '175', '家'],
        ['2021年', '290', '家'],
      ],
      areaStyle: {
        opacity: 0.3,
      },
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
