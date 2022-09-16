import ReactECharts from 'echarts-for-react';
import React from 'react';

import Playground from '@/lib/Playground';

const title = ['参保金额', '给付金额'];
const total = [2222, 3333];
const unit = ['万元', '万元'];

const option = {
  xAxis: {
    type: 'category',
    axisLabel: {
      color: '#ccc',
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
  grid: {
    left: '13%',
    top: 40,
    bottom: 50,
    right: 20,
  },
  tooltip: {
    trigger: 'axis',
    borderColor: 'rgba(8, 77, 126, 0.8)',
    backgroundColor: 'rgba(8, 77, 126, 0.8)',
    extraCssText: 'box-shadow: inset 0px 1px 16px 0px #26a4fe',
    className: 'tooltip',
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
            "></span>${i.seriesName}: ${i.data[1]}${i.data[2]}`,
        )
        .join('<br />');
      return `${data.axisValue}<br />${values}`;
    },
  },
  series: [
    {
      name: '参保金额',
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
          x2: 0,
          y2: 1,
          type: 'linear',
          global: false,
        },
        opacity: 0.6,
      },
      data: [
        ['会员专享保障', '2483.56', '万元'],
        ['住院', '6901.34', '万元'],
        ['意外', '116.31', '万元'],
        ['重疾', '6202.33', '万元'],
      ],
      barWidth: '50%',
    },
    {
      name: '给付金额',
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
          x2: 0,
          y2: 1,
          type: 'linear',
          global: false,
        },
      },
      data: [
        ['会员专享保障', '1330.00', '万元'],
        ['住院', '1140.53', '万元'],
        ['意外', '0.00', '万元'],
        ['重疾', '1762.80', '万元'],
      ],
      barGap: '-80%',
      barWidth: '30%',
    },
  ],
  legend: {
    top: 0,
    left: 'center',
    itemWidth: 10,
    itemHeight: 10,
    itemStyle: {
      color: 'rgba(38, 164, 254, 1)',
    },
    textStyle: {
      color: '#333',
      width: '50%',
      verticalAlign: 'bottom',
      rich: {
        a: {
          fontSize: 16,
          padding: [0, 10, 0, 0],
        },
        b: {
          fontSize: 20,
          fontWeight: 'bolder',
          color: 'rgba(38, 164, 254, 1)',
        },
        c: {
          fontSize: 16,
          color: 'rgba(38, 164, 254, 1)',
        },
      },
    },
    formatter: (name) => {
      const idx = title.indexOf(name);
      return [`{a|${name}}`, `{b|${total[idx]}}`, `{c|${unit.length ? unit[idx] : '万元'}}`].join(
        '',
      );
    },
  },
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
