import React from 'react';

import Wind from './wind';
import Isobar from './Isobar';
import Heat from './heat';
import MassivePoints from './massivePoints';

export default [
  {
    title: '风场',
    keyword: '风场',
    component: <Wind />,
  },
  {
    title: '等压线',
    keyword: '等压线',
    component: <Isobar />,
  },
  {
    title: '热力图',
    keyword: '热力图',
    component: <Heat />
  },
  {
    title: '海量点',
    keyword: '海量点',
    component: <MassivePoints />
  }
];
