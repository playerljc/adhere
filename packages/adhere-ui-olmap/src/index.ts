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
  // 新增的私有类型导出
  DrawCircleParams,
  DrawPolygonParams,
  DrawLineParams,
  DrawCirclePointParams,
  DrawRegularShapePointParams,
  DrawImagePointParams,
  SetMapCenterAnimateParams,
  CreateInteractionParams,
  PolygonInteractionParams,
  CircleInteractionParams,
  BoxInteractionParams,
  LinStringInteractionParams,
  CreateModifyInteractionParams,
  AddArrowsSourceParams,
  // 新增的组件类型导出
  HeatMapProps,
  OLMapState,
} from './types';

// 导出HeatMap相关类型
export type { HeatMapLayerConfig } from './HeatMap';

// 导出常量
export { default as Constant } from './Constant';
export { MAP_TYPE_ADMINISTRATIVE, MAP_TYPE_SATELLITE } from './Constant';

// 导出主要组件和工具类
export { AnimationManager, GeoLayer, TitleLayer, OLMap, HeatMap, Util };

// 默认导出所有组件和工具类
const defaultExport = {
  AnimationManager,
  GeoLayer,
  TitleLayer,
  OLMap,
  HeatMap,
  Util,
};

export default defaultExport;
