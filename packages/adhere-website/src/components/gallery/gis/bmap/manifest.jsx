import React from 'react';

import Wind from './wind';
import Isobar from './Isobar';
import Heat from './heat';
import MassivePoints from './massivePoints';
import Boundary from './boundary';
import HumidityWMS from './humidityWMS';
import TemperatureWMS from './temperatureWMS';
import HumidityXYZ from './humidityXYZ';

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
    component: <Heat />,
  },
  {
    title: '海量点',
    keyword: '海量点',
    component: <MassivePoints />,
  },
  {
    title: '区域轮廓',
    keyword: '区域轮廓',
    component: <Boundary />,
  },
  {
    title: '自定义瓦片温度(WMS)',
    keyword: '自定义瓦片温度(WMS)',
    component: <TemperatureWMS />,
  },
  {
    title: '自定义瓦片湿度(WMS)',
    keyword: '自定义瓦片湿度(WMS)',
    component: <HumidityWMS />,
  },
  {
    title: '自定义瓦片湿度(XYZ)',
    keyword: '自定义瓦片湿度(XYZ)',
    component: <HumidityXYZ />,
  },
];
