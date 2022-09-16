import ReactECharts from 'echarts-for-react';
import React from 'react';

import Playground from '@/lib/Playground';

const data = [
  {
    name: '人才援助',
    value: '108.49',
  },
  {
    name: '文化援助',
    value: '30',
  },
  {
    name: '民生援助',
    value: '493.3',
  },
  {
    name: '科技援助',
    value: '0',
  },
  {
    name: '设施、人才、民生援助',
    value: '222.9',
  },
  {
    name: '设施援助',
    value: '881.5',
  },
];

const option = {
  tooltip: {
    trigger: 'item',
    borderColor: 'rgba(8, 77, 126, 0.8)',
    backgroundColor: 'rgba(8, 77, 126, 0.8)',
    extraCssText: 'box-shadow: inset 0px 1px 16px 0px #26a4fe',
    textStyle: {
      color: '#fff',
    },
    formatter: (data) => {
      return `<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:${data.color};"></span>${data.name}: ${data.percent}%`;
    },
  },
  legend: {
    orient: 'vertical',
    right: 0,
    top: 'center',
    itemWidth: 10,
    itemHeight: 10,
    textStyle: {
      color: '#333',
      width: '40%',
      verticalAlign: 'bottom',
      rich: {
        a: {
          fontSize: 14,
          width: 160,
        },
        b: {
          fontSize: 16,
          fontWeight: 'bolder',
          color: '#26A4FE',
        },
        c: {
          fontSize: 14,
          color: '#26A4FE',
        },
      },
    },
    formatter: (name) => {
      const num = data.find((i) => i.name === name).value;
      return [
        `{a|${name.length > 8 ? `${name.substring(0, 8)}...` : name}}`,
        `{b|${num}}`,
        `{c|万元}`,
      ].join('');
    },
  },
  series: [
    {
      type: 'pie',
      radius: ['35%', '70%'],
      center: ['25%', '50%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
      },
      labelLine: {
        show: false,
      },
      data,
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
