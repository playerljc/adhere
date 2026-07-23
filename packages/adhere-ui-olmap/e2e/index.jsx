import React from 'react';

import e2e from '@baifendian/adhere-e2e';

import BasicOLMap from './BasicOLMap';
import DrawFeatures from './DrawFeatures';
import GeoJSONLayer from './GeoJSONLayer';
import HeatMapDemo from './HeatMapDemo';
import MapTypeSwitch from './MapTypeSwitch';
import TitleLayerSwitch from './TitleLayerSwitch';
import WindLayer from './WindLayer';

import './index.less';

e2e.PC({
  children: <BasicOLMap />,
});
