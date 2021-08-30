// @ts-ignore
import Emitter from '@baifendian/adhere-util-emitter/lib/events';

/**
 * GeometryType
 */
export enum GeometryType {
  Point,
  MulitPoint,
  Circle,
  MulitCircle,
  LineString,
  MulitLineString,
  Polygon,
  MulitPolygon,
  Rect,
  MulitRect,
  Text,
  RegularPolygon,
  MulitRegularPolygon,
  Start,
  MulitStart,
  Sector,
  MulitSector,
}

/**
 * IStyle
 */
export interface IStyle {}

/**
 * IGeometryStyle
 */
export interface IGeometryStyle extends IStyle {
  // 填充颜色
  fillStyle: string;
  // 描边颜色
  strokeStyle: string;
  // 描边大小
  lineWidth: number;
  lineCap: CanvasLineCap;
  lineJoin: CanvasLineJoin;
  lineDash: number[];
  lineDashOffset: number;
  globalAlpha: number;
}

/**
 * ITextStyle
 */
export interface ITextStyle extends IGeometryStyle {
  font: string;
  textAlign: 'start' | 'end' | 'left' | 'right' | 'center';
  textBaseline: 'top' | 'hanging' | 'middle' | 'alphabetic' | 'ideographic' | 'bottom';
  direction: 'ltr' | 'rtl' | 'inherit';
}

/**
 * ILineStringGeometryStyle
 * @classdesc 线的几何图形样式
 */
export interface ILineStringGeometryStyle extends IGeometryStyle {
  // 加入箭头的设置
  arrow: {
    // 是否绘制
    draw: boolean;
    // 箭头方向 箭头绘制在开始 | 结束 | 双向
    direction: 'start' | 'end' | 'bothEnds';
    // 箭头的类型 尖的箭头，还是方形的箭头
    type: 'normal' | 'square';
    // 箭头的大小 小 | 中 | 大
    size: 'small' | 'normal' | 'large';
  };
}

/**
 * IPointGeometryStyle
 * @classdesc 点的几何图形样式
 */
export interface IPointGeometryStyle extends IGeometryStyle {
  // 点有2中类型，圆形的点和图片的点
  // 圆形的点：圆形的点有半径，半径是像素，不会随着地图的放大和缩小改变
  // 图片的点：图片的点显示的就是图片信息
  // 只有当pointType为circle时才生效(圆)
  radius?: number;
  // 只有当pointType为img时才生效(图片)
  img?: {
    src: string;
    width: number;
    height: number;
  };
  // 只有当pointType为regularPolygon时才生效(正多边形配置)
  regularPolygon?: IRegularPolygonGeometryData;
  // 只有当pointType为start时才生效(五角星)
  start?: IStartGeometryData;
  // 只有当pointType为sector时才生效(扇形)
  sector?: ISectorGeometryData;
  // 只有当pointType为rect时才生效(扇形)
  rect?:  IRectGeometryData;
  // 类型
  pointType: 'circle' | 'image' | 'regularPolygon' | 'start' | 'sector' | 'rect';
}

/**
 * IGeometry
 */
export interface IGeometry {
  getType: () => GeometryType;
  draw: (ctx: CanvasRenderingContext2D, style: IStyle) => void;
  setContext: (context: IFeature) => void;
  getContext: () => IFeature;
  getCenterCoordinate: () => ICoordinate;
  isPixelInGeometry: (pixel: IPixel, style?: IStyle) => boolean;
}

/**
 * ICoordinate
 */
export interface ICoordinate {
  lng: number;
  lat: number;
}

/**
 * IPixel
 */
export interface IPixel {
  x: number;
  y: number;
}

/**
 * ICircleGeometryData
 */
export interface ICircleGeometryData {
  center: ICoordinate;
  radius: number;
}

/**
 * ILineStringGeometryData
 */
export interface ILineStringGeometryData {
  point1: ICoordinate;
  point2: ICoordinate;
}

/**
 * IRectGeometryData
 */
export interface IRectGeometryData {
  leftTop: ICoordinate;
  width: number;
  height: number;
}

/**
 * ITextGeometryData
 */
export interface ITextGeometryData {
  point: ICoordinate;
  text: string;
}

/**
 * IPointGeometry
 */
export interface IPointGeometry extends IGeometry {
  setCoordinates: (coordinates: ICoordinate) => void;
  getCoordinates: () => ICoordinate;
}

/**
 * IMulitLineStringGeometry
 */
export interface IMulitPointGeometry extends IGeometry {
  setCoordinates: (coordinates: ICoordinate[]) => void;
  getCoordinates: () => ICoordinate[];
}

/**
 * ICircleGeometry
 */
export interface ICircleGeometry extends IGeometry {
  setCoordinates: (coordinates: ICircleGeometryData) => void;
  getCoordinates: () => ICircleGeometryData;
}

/**
 * IMulitCircleGeometry
 */
export interface IMulitCircleGeometry extends IGeometry {
  setCoordinates: (coordinates: ICircleGeometryData[]) => void;
  getCoordinates: () => ICircleGeometryData[];
}

/**
 * ILineStringGeometry
 */
export interface ILineStringGeometry extends IGeometry {
  setCoordinates: (coordinates: ILineStringGeometryData) => void;
  getCoordinates: () => ILineStringGeometryData;
}

/**
 * IMulitLineStringGeometry
 */
export interface IMulitLineStringGeometry extends IGeometry {
  setCoordinates: (coordinates: ILineStringGeometryData[]) => void;
  getCoordinates: () => ILineStringGeometryData[];
}

/**
 * IPolygonGeometry
 */
export interface IPolygonGeometry extends IGeometry {
  setCoordinates: (coordinates: ICoordinate[]) => void;
  getCoordinates: () => ICoordinate[];
}

/**
 * IMulitPolygonGeometry
 */
export interface IMulitPolygonGeometry extends IGeometry {
  setCoordinates: (coordinates: Array<ICoordinate[]>) => void;
  getCoordinates: () => Array<ICoordinate[]>;
}

/**
 * IRectGeometry
 */
export interface IRectGeometry extends IGeometry {
  setCoordinates: (coordinates: IRectGeometryData) => void;
  getCoordinates: () => IRectGeometryData;
}

/**
 * IMulitRectGeometry
 */
export interface IMulitRectGeometry extends IGeometry {
  setCoordinates: (coordinates: IRectGeometryData[]) => void;
  getCoordinates: () => IRectGeometryData[];
}

/**
 * IRegularPolygonGeometry
 */
export interface IRegularPolygonGeometry extends IGeometry {
  setCoordinates: (coordinates: IRegularPolygonGeometryData) => void;
  getCoordinates: () => IRegularPolygonGeometryData;
}

/**
 * IRegularPolygonGeometryData
 */
export interface IRegularPolygonGeometryData {
  // 表示n边形
  n: number;
  // 正多边形的中心点
  center?: ICoordinate;
  // 正多边形的大小，单位(m)
  size: number;
}

/**
 * IMulitRegularPolygonGeometry
 */
export interface IMulitRegularPolygonGeometry extends IGeometry {
  setCoordinates: (coordinates: IRegularPolygonGeometryData[]) => void;
  getCoordinates: () => IRegularPolygonGeometryData[];
}

/**
 * IStartGeometryData
 */
export interface IStartGeometryData {
  // 中心点
  center: ICoordinate;
  // 外圆半径
  outRadius: number;
  // 内圆半径
  innerRadius: number;
}

/**
 * IStartGeometry
 */
export interface IStartGeometry extends IGeometry {
  setCoordinates: (coordinates: IStartGeometryData) => void;
  getCoordinates: () => IStartGeometryData;
}

/**
 * IMulitStartGeometry
 */
export interface IMulitStartGeometry extends IGeometry {
  setCoordinates: (coordinates: IStartGeometryData[]) => void;
  getCoordinates: () => IStartGeometryData[];
}

/**
 * ISectorGeometryData
 */
export interface ISectorGeometryData {
  center: ICoordinate;
  radius: number;
  angle1: number;
  angle2: number;
}

/**
 * ISectorGeometry
 */
export interface ISectorGeometry extends IGeometry {
  setCoordinates: (coordinates: ISectorGeometryData) => void;
  getCoordinates: () => ISectorGeometryData;
}

/**
 * IMulitSectorGeometry
 */
export interface IMulitSectorGeometry extends IGeometry {
  setCoordinates: (coordinates: ISectorGeometryData[]) => void;
  getCoordinates: () => ISectorGeometryData[];
}

/**
 * ITextGeometry
 */
export interface ITextGeometry extends IGeometry {
  setCoordinates: (coordinates: ITextGeometryData) => void;
  getCoordinates: () => ITextGeometryData;
}

/**
 * IFeature - 一个要素
 */
export interface IFeature {
  getGeometry: () => IGeometry;
  getId: () => string;
  getName: () => string;
  getStyle: () => IStyle;
  getZIndex: () => number;
  getProperties: () => object;
  getContext: () => IVectorSource;
  getMap: () => any;
  getLayer: () => IVectorLayer;
  setGeometry: (geom: IGeometry) => void;
  setName: (name: string) => void;
  setId: (id: string) => void;
  setStyle: (style: IStyle) => void;
  setZIndex: (zIndex: number) => void;
  setProperties: (properties: object) => void;
  setContext: (context: IVectorSource) => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
  isPointInFeature: (pixel: IPixel, style?:IStyle) => boolean;
}

/**
 * IInnerTextFeature
 */
export interface IInnerTextFeature extends IFeature {
  setText: (text: string) => void;
  getText: () => string;
  setTextStyle: (style: ITextStyle) => void;
  getTextStyle: () => ITextStyle;
}

/**
 * IFeatureParams
 */
export interface IFeatureParams {
  name: string;
  id: string;
  style: IStyle;
  geometry: IGeometry;
}

/**
 * IInnerTextFeatureParams
 */
export interface IInnerTextFeatureParams extends IFeatureParams {
  text: string;
  textStyle: ITextStyle;
}

/**
 * IVectorSource - 代表一个向量层的数据源
 * 一个向量层只有一个数据源
 */
export interface IVectorSource {
  addFeature: (feature: IFeature) => void;
  addFeatures: (features: IFeature[]) => void;
  addFirstFeature: (feature: IFeature) => void;
  insertFeature: (feature: IFeature, index: number) => void;
  clear: () => void;
  getFeatureById: (id: string) => IFeature;
  getFeatures: () => IFeature[];
  hasFeature: (feature: IFeature) => boolean;
  hasFeatureById: (id: string) => boolean;
  removeFeature: (feature: IFeature) => void;
  removeFeatureById: (id: string) => void;
  setContext: (context: IVectorLayer) => void;
  getContext: () => IVectorLayer;
}

/**
 * IVectorLayer - 代表一个向量层
 */
export interface IVectorLayer {
  getSource: () => IVectorSource;
  setSource: (source: IVectorSource) => void;
  getZIndex: () => number;
  update: () => void;
  getMap: () => any;
  getEmitter: () => Emitter;
  addEventListener: (type: VectorEventActions, handler: (e: any) => void) => void;
  removeEventListener: (type: VectorEventActions, handler: (e: any) => void) => void;
}

/**
 * VectorEventActions
 */
export enum VectorEventActions {
  FEATURE_CLICK = 'feature:click',
  VECTOR_CLICK = 'vector:click',
}

/**
 * IFeatureEvent
 */
export interface IFeatureClickEvent {
  features: IFeature[];
  pixel: IPixel;
}

export interface IVectorClickEvent {}

/**
 * IVectorLayerConfig
 */
export interface IVectorLayerConfig {
  paneName:
    | 'floatPane'
    | 'floatShadow'
    | 'labelPane'
    | 'mapPane'
    | 'markerMouseTarget'
    | 'markerPane'
    | 'markerShadow'
    | 'vertexPane';
  zIndex: number;
  source: IVectorSource;
}

/**
 * VectorActions
 */
export enum VectorActions {
  UPDATE = 'UPDATE',
}
