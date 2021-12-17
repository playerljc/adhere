import React from 'react';

import Graph1 from './graph1';
import Windmill from './Windmill';

export default [
  {
    title: '风车圆盘图',
    keyword: '风车圆盘图',
    component: (
      <div style={{ width: 1500, height: 800 }}>
        <Windmill lineColor="#fff" />
      </div>
    ),
  },
  // {
  //   title: 'Graph1',
  //   keyword: '多边形选取',
  //   component: <Graph1 />,
  // },
];
