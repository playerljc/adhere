import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import Bar from './Bar';
import BarHorizontalRealtime from './BarHorizontalRealtime';
import BarStack from './BarStack';
import Colors from './Colors';
import Funnel from './Funnel';
import Gauge from './Gauge';
import Line from './Line';
import LineArea from './LineArea';
import LineSmooth from './LineSmooth';
import Pie from './Pie';
import PieDonut from './PieDonut';
import PieRose from './PieRose';
import Radar from './Radar';
import Scatter from './Scatter';

import '@baifendian/adhere-e2e/es/index.less';

e2e.PC({
  children: <Bar />,
});
