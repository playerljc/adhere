import MagicPanel from './MagicPanel';

// 导出工具类
export { ClipPathConverter } from './ClipPathConverter';

// 导出工具函数
export {
  calculateNewElementsInfo,
  calculateNewClip,
  scaleLengthValue,
  scaleSvgPath,
  scaleBasicShape,
} from './utils';

// 导出类型定义
export type {
  Item,
  ElementInfo,
  MetaData,
  ComputeElementsInfoData,
  ComputeClipData,
  MagicPanelProps,
  Clip,
  BasicShape,
  InsetShape,
  CircleShape,
  EllipseShape,
  PolygonShape,
  PathShape,
  GeometryBox,
  LengthValue,
  CalculateElementsParams,
  CalculateClipParams,
} from './types';

// 导出默认组件
export default MagicPanel;
