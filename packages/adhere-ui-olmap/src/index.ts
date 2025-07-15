import AnimationManager from './AnimationManager';
import GeoLayer from './GeoLayer';
import HeatMap from './HeatMap';
import OLMap from './OLMap';
import * as TitleLayer from './TitleLayer';
import Util from './Util';

// 导出主要类型
export type {
  OLMapProps,
  MapType,
  MapTypeValue,
  MapConfig,
  GeoJSONStyle,
  HeatMapConfig,
  AnimationConfig,
  DrawParams,
  PointDrawParams,
  ImagePointParams,
  InteractionConfig,
  MapEventCallbacks,
  MapInstance,
} from './types';

// 导出常量
export { default as Constant } from './Constant';
export { MAP_TYPE_ADMINISTRATIVE, MAP_TYPE_SATELLITE } from './Constant';

// 导出主要组件和工具类
export {
  AnimationManager,
  GeoLayer,
  TitleLayer,
  OLMap,
  HeatMap,
  Util,
};

// 默认导出OLMap组件
export default OLMap;
