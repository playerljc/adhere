// import Emitter from '@baifendian/adhere-util-emitter';
import { IPoint } from './interaction/types';

/**
 * GeometryType
 */
export enum GeometryType {
  Point = 'Point',
  MultiPoint = 'MultiPoint',
  Circle = 'Circle',
  MultiCircle = 'MultiCircle',
  LineString = 'LineString',
  MultiLineString = 'MultiLineString',
  Polygon = 'Polygon',
  MultiPolygon = 'MultiPolygon',
  Rect = 'Rect',
  RadiusRect = 'RadiusRect',
  MultiRadiusRect = 'MultiRadiusRect',
  Leaf = 'Leaf',
  MultiLeaf = 'MultiLeaf',
  MultiRect = 'MultiRect',
  Text = 'Text',
  RegularPolygon = 'RegularPolygon',
  MultiRegularPolygon = 'MultiRegularPolygon',
  Start = 'Start',
  MultiStart = 'MultiStart',
  Sector = 'Sector',
  MultiSector = 'MultiSector',
}

// /**
//  * IStyle
//  */
// export interface IStyle {}

/**
 * IGeometryStyle
 */
export interface IGeometryStyle {
  /* extends IStyle*/
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
  rect?: IRectGeometryData;
  radiusRect?: IRadiusRectGeometryData;
  leaf?: ILeafGeometryData;
  // 类型
  pointType:
    | 'circle'
    | 'image'
    | 'regularPolygon'
    | 'start'
    | 'sector'
    | 'rect'
    | 'radiusRect'
    | 'leaf';
}

/**
 * IGeometry
 */
export interface IGeometry {
  getType: () => GeometryType;
  draw: (ctx: CanvasRenderingContext2D, style: IGeometryStyle) => void;
  drawText: ({
    ctx,
    text,
    textStyle,
    style,
  }: {
    ctx: CanvasRenderingContext2D;
    text: string;
    style: IGeometryStyle;
    textStyle: ITextStyle;
  }) => void;
  setContext: (context: IFeature) => void;
  getContext: () => IFeature | null;
  getCenterCoordinate: ({
    ctx,
    style,
    isScale,
  }: {
    ctx: CanvasRenderingContext2D;
    style: IGeometryStyle;
    isScale: boolean;
  }) => IPixel;
  isPixelInGeometry: (pixel: IPixel, style: IGeometryStyle) => boolean;
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
 * IRadiusRectGeometryData
 */
export interface IRadiusRectGeometryData extends IRectGeometryData {
  // 圆角半径
  radius: number;
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
 * IMultiLineStringGeometry
 */
export interface IMultiPointGeometry extends IGeometry {
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
 * IMultiCircleGeometry
 */
export interface IMultiCircleGeometry extends IGeometry {
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
 * IMultiLineStringGeometry
 */
export interface IMultiLineStringGeometry extends IGeometry {
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
 * IMultiPolygonGeometry
 */
export interface IMultiPolygonGeometry extends IGeometry {
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
 * IMultiRectGeometry
 */
export interface IMultiRectGeometry extends IGeometry {
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
 * IMultiRegularPolygonGeometry
 */
export interface IMultiRegularPolygonGeometry extends IGeometry {
  setCoordinates: (coordinates: IRegularPolygonGeometryData[]) => void;
  getCoordinates: () => IRegularPolygonGeometryData[];
}

/**
 * ILeafGeometry
 */
export interface ILeafGeometry extends IGeometry {
  setCoordinates: (coordinates: ILeafGeometryData) => void;
  getCoordinates: () => ILeafGeometryData;
}

/**
 * ILeafGeometryData
 */
export interface ILeafGeometryData {
  // 片数
  n: number;
  // 中心点
  center: ICoordinate;
  // 花朵的大小
  size: number;
  // 花瓣的长度
  length: number;
}

/**
 * IMultiLeafGeometry
 */
export interface IMultiLeafGeometry extends IGeometry {
  setCoordinates: (coordinates: ILeafGeometryData[]) => void;
  getCoordinates: () => ILeafGeometryData[];
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
 * IMultiStartGeometry
 */
export interface IMultiStartGeometry extends IGeometry {
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
 * IMultiSectorGeometry
 */
export interface IMultiSectorGeometry extends IGeometry {
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
  getStyle: () => IGeometryStyle;
  getZIndex: () => number;
  getProperties: () => object;
  getContext: () => IVectorSource;
  getMap: () => any;
  getLayer: () => IVectorLayer | null;
  setGeometry: (geom: IGeometry) => void;
  setName: (name: string) => void;
  setId: (id: string) => void;
  setStyle: (style: IGeometryStyle) => void;
  setZIndex: (zIndex: number) => void;
  setProperties: (properties: object) => void;
  setContext: (context: IVectorSource) => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
  isPointInFeature: (pixel: IPixel, style: IGeometryStyle) => boolean;
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
  style: IGeometryStyle;
  geometry: IGeometry;
  properties: object;
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
  getFeatureById: (id: string) => IFeature | null;
  getFeatures: () => IFeature[];
  hasFeature: (feature: IFeature) => boolean;
  hasFeatureById: (id: string) => boolean;
  removeFeature: (feature: IFeature) => void;
  removeFeatureById: (id: string) => void;
  setContext: (context: IVectorLayer) => void;
  getContext: () => IVectorLayer | null;
  readGeoJSON: (geoJSON: any, onForeachStyle: (geom: IGeometry) => IFeature) => void;
  featuresToGeoJSON: () => any;
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
  getEmitter: () => any /*Emitter.Events*/;
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
  APPEND = 'APPEND',
}

/**
 * ImageCacheClass
 */
export interface ImageCacheClass {
  add(key: ImageCacheKey, image: HTMLImageElement): Map<string, HTMLImageElement>;

  get(key: ImageCacheKey): HTMLImageElement | null | undefined;

  delete(key: ImageCacheKey): boolean;

  clear(): void;

  values(): HTMLImageElement[];

  keys(): ImageCacheKey[];
}

/**
 * ImageCacheKey
 */
export interface ImageCacheKey {
  src: string;
  width: number;
  height: number;
}

/**
 * Point
 * MultiPoint
 * LineString
 * MultiLineString
 * Polygon
 * MultiPolygon
 * GeometryCollection
 * Feature
 * FeatureCollection
 */

/**
 * IGeoJSONPoint
 */
export interface IGeoJSONPoint {
  readonly type: 'Point';
  coordinates: number[];
}

/**
 * IGeoJSONMultiPoint
 */
export interface IGeoJSONMultiPoint {
  readonly type: 'MultiPoint';
  coordinates: Array<number[]>;
}

/**
 * IGeoJSONLineString
 */
export interface IGeoJSONLineString {
  readonly type: 'LineString';
  coordinates: Array<number[]>;
}

/**
 * IGeoJSONMultiLineString
 */
export interface IGeoJSONMultiLineString {
  readonly type: 'MultiLineString';
  coordinates: Array<Array<number[]>>;
}

/**
 * IGeoJSONPolygon
 */
export interface IGeoJSONPolygon {
  readonly type: 'Polygon';
  coordinates: Array<number[]>;
}

/**
 * IGeoJSONMultiPolygon
 */
export interface IGeoJSONMultiPolygon {
  readonly type: 'MultiPolygon';
  coordinates: Array<Array<number[]>>;
}

/**
 * IGeoJSONGeometryCollection
 */
export interface IGeoJSONGeometryCollection {
  readonly type: 'GeometryCollection';
  geometries: Array<Geometry>;
}

/**
 * IGeoJSONFeature
 */
export interface IGeoJSONFeature {
  readonly type: 'Feature';
  geometry: Geometry;
  properties: object;
  id: string;
  bbox?: number[];
}

/**
 * IGeoJSONFeatureCollection
 */
export interface IGeoJSONFeatureCollection {
  type: 'FeatureCollection';
  features: IGeoJSONFeature[];
  bbox?: number[];
}

export type Geometry =
  | IGeoJSONPoint
  | IGeoJSONMultiPoint
  | IGeoJSONLineString
  | IGeoJSONMultiLineString
  | IGeoJSONPolygon
  | IGeoJSONMultiPolygon
  | IGeoJSONGeometryCollection;

export type GeoJSONNode = Geometry | IGeoJSONFeature | IGeoJSONFeatureCollection;

export enum GeoJSONType {
  Point = 'Point',
  MultiPoint = 'MultiPoint',
  LineString = 'LineString',
  MultiLineString = 'MultiLineString',
  Polygon = 'Polygon',
  MultiPolygon = 'MultiPolygon',
  GeometryCollection = 'GeometryCollection',
  Feature = 'Feature',
  FeatureCollection = 'FeatureCollection',
}

/**
 * ITrajectoryPlayBackLayer
 * @description - 轨迹回放的Layer
 */
export interface ITrajectoryPlayBackLayer {
  getEmitter: () => any /*Emitter.Events*/;
  update: () => void;
  getMap: () => any;

  getCanvasEl(): HTMLCanvasElement | null;
  getCtx(): CanvasRenderingContext2D | null;
  pixelToPoint: (pixel: IPoint) => IPoint;
  /**
   * distanceToActual - 图上距离转换成实际距离
   * @param distance
   */
  distanceToActual: (distance: number) => number;
  /**
   * pointToPixel
   * @param point
   */
  pointToPixel(point: IPoint): IPoint;
  /**
   * actualToDistance - 实际距离转换成图上距离
   * @param actual
   */
  actualToDistance(actual: number): number;

  // 放入一个轨迹
  addTrajectory(trajectory: ITrajectory): void;
  // 删除一个轨迹
  removeTrajectory(trajectory: ITrajectory): void;
  // 删除一个轨迹通过id
  removeTrajectoryById(id: string): void;
  // 清空所有轨迹
  clean(): void;
  // 获取一个轨迹
  getTrajectoryById(id: string): ITrajectory | null | undefined;
  // 获取所有轨迹
  getTrajectorys(): ITrajectory[];
  // 是否含有置顶轨迹
  hasTrajectoryById(id: string): boolean;
  clear(): void;
  drawHistory(): void;
}

/**
 * ITrajectory
 * @description - 一个轨迹
 */
export interface ITrajectory {
  // 初始化
  init(): void;
  // 开始
  start(): void;
  // 暂停
  pause(): void;
  // 恢复
  resume(): void;
  // 结束
  finish(): void;
  // 获取id
  getId(): string;
  // 销毁
  destroy(): void;
  getStatus(): TrajectoryStatus;
  drawHistory(): void;
}

/**
 * TrajectoryStatus
 */
export enum TrajectoryStatus {
  // 未初始化
  UnInit,
  // 初始化完成
  Init,
  // 进行中
  Running,
  // 暂停
  Pause,
  // 结束
  End,
  // 销毁
  Destroy,
}
