// @ts-ignore
import React from 'react';

/**
 * IBMapProps
 * @interface IBMapProps
 */
export interface IBMapProps {
  className?: string;
  style?: React.CSSProperties;
  ak: string;
  config: IMapOptions;
  zoom?: number;
  center?: {
    lon: number;
    lat: number;
  };
  onBMapScriptReady: Function;
  externalImportBMapScript: boolean;
}

export interface IBMapState {
  isReady: boolean;
}

export interface IMapOptions {
  // 地图允许展示的最小级别
  minZoom: number;
  // 地图允许展示的最大级别
  maxZoom: number;
  // 是否启用使用高分辨率地图。在iPhone4及其后续设备上，可以通过开启此选项获取更高分辨率的底图，v1.2,v1.3版本默认不开启，v1.4默认为开启状态
  // 地图类型，默认为BMAP_NORMAL_MAP
  mapType: any;
  enableHighResolution: boolean;
  // 是否自动适应地图容器变化，默认启用
  enableAutoResize: boolean;
  // 是否开启底图可点功能，默认启用
  enableMapClick: boolean;
}

export interface IPoint {
  lng: number;
  lat: number;
}

export interface BMapAirPressureLayerConfig {
  map: any;
  data: Array<IPoint[]>;
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
  style: {
    strokeStyle: string;
    lineJoin: CanvasLineJoin;
    lineWidth: number;
  };
}

/**
 * GeometryType
 */
export enum GeometryType {
  Point,
  MulitPoint,
  Circle,
  LineString,
  MulitLineString,
  Polygon,
  MulitPolygon,
  Rect,
  MulitRect,
  Text,
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
export interface ITextStyle extends IStyle {
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
  // 只有当pointType为circle时才生效
  radius?: number;
  // 只有当pointType为img时才生效
  img?: {
    src: string;
    width: number;
    height: number;
  };
  pointType: 'circle' | 'image';
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

  setGeometry: (geom: IGeometry) => void;
  setName: (name: string) => void;
  setId: (id: string) => void;
  setStyle: (style: IStyle) => void;
  draw: (ctx: CanvasRenderingContext2D) => void;

  setContext: (context: IVectorSource) => void;
  getContext: () => IVectorSource;

  getMap: () => any;
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
 * ITextParams
 */
export interface ITextParams extends IFeatureParams {
  style: ITextStyle;
  geometry: ITextGeometry;
}

/**
 * ITextFeature
 */
export interface ITextFeature extends IFeature {
  setStyle: (style: ITextStyle) => void;
  getStyle: () => ITextStyle;
  getGeometry: () => ITextGeometry;
  setGeometry: (geom: ITextGeometry) => void;
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
}

export interface IVectorLayerConfig {
  paneName: string;
  zIndex: number;
  source: IVectorSource;
}

/**
 * VectorActions
 */
export enum VectorActions {
  UPDATE = 'UPDATE',
}
