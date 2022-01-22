import React from 'react';
import ReactECharts from 'echarts-for-react';

import Playground from '@/lib/Playground';

const option = {
  xAxis: {
    type: 'category',
    axisLabel: {
      interval: 0,
      color: '#ccc',
    },
  },
  legend: {
    bottom: 0,
    itemWidth: 10,
    itemHeight: 10,
    textStyle: {
      color: '#333',
    },
  },
  grid: {
    left: 30,
    top: 40,
    bottom: 70,
    right: 10,
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
          (i) =>
            `<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:${i.color};"></span>${i.seriesName}: ${i.data[1]}${i.data[2]}`,
        )
        .join('<br />');
      return `${data.axisValue}<br />${values}`;
    },
  },
  yAxis: {
    type: 'value',
    splitLine: {
      lineStyle: {
        color: 'rgba(132, 132, 134, 1)',
      },
    },
    axisLabel: {
      margin: 2,
      color: '#ccc',
    },
  },
  barWidth: '30%',
  barGap: 0,
  series: [
    {
      name: '2020年住院二次医保',
      type: 'bar',
      itemStyle: {
        color: 'rgba(77, 185, 148, 1)',
      },
      stack: 'total',
      data: [
        [
          '全国劳模',
          '48',
          '人',
          {
            id: '1',
            type: 2200,
            legend: '2020年住院二次医保',
            color: '1',
            xaxis: '全国劳模',
            yaxis: '48',
            unit: '人',
            createTime: 1637076720000,
            del: 0,
          },
        ],
        [
          '全国奖章',
          '70',
          '人',
          {
            id: '1',
            type: 2200,
            legend: '2020年住院二次医保',
            color: '1',
            xaxis: '全国奖章',
            yaxis: '70',
            unit: '人',
            createTime: 1637076720000,
            del: 0,
          },
        ],
        [
          '市劳模',
          '257',
          '人',
          {
            id: '1',
            type: 2200,
            legend: '2020年住院二次医保',
            color: '1',
            xaxis: '市劳模',
            yaxis: '257',
            unit: '人',
            createTime: 1637076720000,
            del: 0,
          },
        ],
        [
          '市奖章',
          '790',
          '人',
          {
            id: '1',
            type: 2200,
            legend: '2020年住院二次医保',
            color: '1',
            xaxis: '市奖章',
            yaxis: '790',
            unit: '人',
            createTime: 1637076720000,
            del: 0,
          },
        ],
        [
          '省劳模',
          '332',
          '人',
          {
            id: '1',
            type: 2200,
            legend: '2020年住院二次医保',
            color: '1',
            xaxis: '省劳模',
            yaxis: '332',
            unit: '人',
            createTime: 1637076720000,
            del: 0,
          },
        ],
        [
          '省奖章',
          '174',
          '人',
          {
            id: '1',
            type: 2200,
            legend: '2020年住院二次医保',
            color: '1',
            xaxis: '省奖章',
            yaxis: '174',
            unit: '人',
            createTime: 1637076720000,
            del: 0,
          },
        ],
        [
          '省部级劳模',
          '58',
          '人',
          {
            id: '1',
            type: 2200,
            legend: '2020年住院二次医保',
            color: '1',
            xaxis: '省部级劳模',
            yaxis: '58',
            unit: '人',
            createTime: 1637076720000,
            del: 0,
          },
        ],
      ],
    },
    {
      name: '2020年春节慰问金',
      type: 'bar',
      itemStyle: {
        color: 'rgba(38, 164, 254, 1)',
      },
      stack: 'total',
      data: [
        [
          '全国劳模',
          '76',
          '人',
          {
            id: '1',
            type: 2200,
            legend: '2020年春节慰问金',
            color: '1',
            xaxis: '全国劳模',
            yaxis: '76',
            unit: '人',
            createTime: 1637076720000,
            del: 0,
          },
        ],
        [
          '全国奖章',
          '124',
          '人',
          {
            id: '1',
            type: 2200,
            legend: '2020年春节慰问金',
            color: '1',
            xaxis: '全国奖章',
            yaxis: '124',
            unit: '人',
            createTime: 1637076720000,
            del: 0,
          },
        ],
        [
          '市劳模',
          '335',
          '人',
          {
            id: '1',
            type: 2200,
            legend: '2020年春节慰问金',
            color: '1',
            xaxis: '市劳模',
            yaxis: '335',
            unit: '人',
            createTime: 1637076720000,
            del: 0,
          },
        ],
        [
          '市奖章',
          '864',
          '人',
          {
            id: '1',
            type: 2200,
            legend: '2020年春节慰问金',
            color: '1',
            xaxis: '市奖章',
            yaxis: '864',
            unit: '人',
            createTime: 1637076720000,
            del: 0,
          },
        ],
        [
          '省劳模',
          '518',
          '人',
          {
            id: '1',
            type: 2200,
            legend: '2020年春节慰问金',
            color: '1',
            xaxis: '省劳模',
            yaxis: '518',
            unit: '人',
            createTime: 1637076720000,
            del: 0,
          },
        ],
        [
          '省奖章',
          '226',
          '人',
          {
            id: '1',
            type: 2200,
            legend: '2020年春节慰问金',
            color: '1',
            xaxis: '省奖章',
            yaxis: '226',
            unit: '人',
            createTime: 1637076720000,
            del: 0,
          },
        ],
        [
          '省部级劳模',
          '200',
          '人',
          {
            id: '1',
            type: 2200,
            legend: '2020年春节慰问金',
            color: '1',
            xaxis: '省部级劳模',
            yaxis: '200',
            unit: '人',
            createTime: 1637076720000,
            del: 0,
          },
        ],
      ],
    },
    {
      name: '2021年春节慰问金',
      type: 'bar',
      itemStyle: {
        color: 'rgba(79, 96, 131, 1)',
      },
      stack: 'total',
      data: [
        [
          '全国劳模',
          '94',
          '人',
          {
            id: '1',
            type: 2200,
            legend: '2021年春节慰问金',
            color: '1',
            xaxis: '全国劳模',
            yaxis: '94',
            unit: '人',
            createTime: 1637076720000,
            del: 0,
          },
        ],
        [
          '全国奖章',
          '124',
          '人',
          {
            id: '1',
            type: 2200,
            legend: '2021年春节慰问金',
            color: '1',
            xaxis: '全国奖章',
            yaxis: '124',
            unit: '人',
            createTime: 1637076720000,
            del: 0,
          },
        ],
        [
          '市劳模',
          '412',
          '人',
          {
            id: '1',
            type: 2200,
            legend: '2021年春节慰问金',
            color: '1',
            xaxis: '市劳模',
            yaxis: '412',
            unit: '人',
            createTime: 1637076720000,
            del: 0,
          },
        ],
        [
          '市奖章',
          '877',
          '人',
          {
            id: '1',
            type: 2200,
            legend: '2021年春节慰问金',
            color: '1',
            xaxis: '市奖章',
            yaxis: '877',
            unit: '人',
            createTime: 1637076720000,
            del: 0,
          },
        ],
        [
          '省劳模',
          '555',
          '人',
          {
            id: '1',
            type: 2200,
            legend: '2021年春节慰问金',
            color: '1',
            xaxis: '省劳模',
            yaxis: '555',
            unit: '人',
            createTime: 1637076720000,
            del: 0,
          },
        ],
        [
          '省奖章',
          '231',
          '人',
          {
            id: '1',
            type: 2200,
            legend: '2021年春节慰问金',
            color: '1',
            xaxis: '省奖章',
            yaxis: '231',
            unit: '人',
            createTime: 1637076720000,
            del: 0,
          },
        ],
        [
          '省部级劳模',
          '213',
          '人',
          {
            id: '1',
            type: 2200,
            legend: '2021年春节慰问金',
            color: '1',
            xaxis: '省部级劳模',
            yaxis: '213',
            unit: '人',
            createTime: 1637076720000,
            del: 0,
          },
        ],
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
