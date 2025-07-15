import type { CSSProperties } from 'react';
import type { Map, View } from 'ol';
import type { Vector as VectorSource } from 'ol/source';
import type { Vector as VectorLayer } from 'ol/layer';
import type Feature from 'ol/Feature';
import type { Style } from 'ol/style';
import type Draw from 'ol/interaction/Draw';
import type Modify from 'ol/interaction/Modify';
import type Overlay from 'ol/Overlay';

/**
 * 地图类型枚举
 */
export enum MapType {
  ADMINISTRATIVE = 'administrative',
  SATELLITE = 'satellite',
}

/**
 * 地图类型联合类型
 */
export type MapTypeValue = 'administrative' | 'satellite';

/**
 * 地图配置接口
 */
export interface MapConfig {
  target?: HTMLElement;
  controls?: any[];
  pixelRatio?: number;
  view?: Partial<View>;
  layers?: any[];
  [key: string]: any;
}

/**
 * 地理JSON样式接口
 */
export interface GeoJSONStyle {
  stroke?: {
    color?: string;
    width?: number;
    lineDash?: number[];
    lineCap?: CanvasLineCap;
    lineJoin?: CanvasLineJoin;
  };
  fill?: {
    color?: string;
  };
  text?: {
    color?: string;
    font?: string;
    text?: string;
    offsetX?: number;
    offsetY?: number;
    scale?: number;
    rotation?: number;
    textAlign?: CanvasTextAlign;
    textBaseline?: CanvasTextBaseline;
  };
}

/**
 * 热力图配置接口
 */
export interface HeatMapConfig {
  radius?: number;
  blur?: number;
  gradient?: Record<number, string>;
  weight?: string | ((feature: Feature) => number);
  opacity?: number;
  extent?: number[];
  [key: string]: any;
}

/**
 * 动画管理器配置接口
 */
export interface AnimationConfig {
  arrowImg?: string;
  pointImg?: string;
  lineWidth?: number;
  lineColor?: string;
}

/**
 * 绘制参数接口
 */
export interface DrawParams {
  center?: number[];
  radius?: number;
  points?: number[][] | number[][][];
  width?: number;
  color?: string;
  strokeColor?: string;
  strokeWidth?: number;
  zIndex?: number;
  id?: string;
  propertys?: Record<string, any>;
}

/**
 * 点绘制参数接口
 */
export interface PointDrawParams {
  id: string;
  pos: number[];
  fillOpt?: { color?: string };
  strokeOpt?: { width?: number; color?: string };
  radius?: number;
  textOpt?: Record<string, any>;
  zIndex?: number;
  text?: string;
  propertys?: Record<string, any>;
}

/**
 * 图片点绘制参数接口
 */
export interface ImagePointParams {
  id: string;
  pos: number[];
  zIndex?: number;
  src?: string;
  color?: string;
  opacity?: number;
  scale?: number;
  anchor?: number[];
  rotation?: number;
  offset?: number[];
  offsetOrigin?: string;
  size?: number[];
  text?: string;
  textOpt?: Record<string, any>;
  propertys?: Record<string, any>;
}

/**
 * 交互配置接口
 */
export interface InteractionConfig {
  freehand?: boolean;
  onDrawEnd?: (result: any) => void;
  onModifyEnd?: (result: any) => void;
  [key: string]: any;
}

/**
 * 地图事件回调接口
 */
export interface MapEventCallbacks {
  onAllTileloadend?: () => void;
  onMapClick?: (event: any) => void;
  onMapMove?: (event: any) => void;
  onMapZoom?: (zoom: number) => void;
}

/**
 * OLMapProps
 * @interface OLMapProps
 */
export interface OLMapProps extends MapEventCallbacks {
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 地图类型 */
  type?: MapType | MapTypeValue;
  /** 地图配置 */
  mapConfig?: MapConfig;
  /** 最大缩放级别 */
  maxZoom?: number | string;
  /** 最小缩放级别 */
  minZoom?: number | string;
  /** 当前缩放级别 */
  zoom?: number | string;
  /** 适应缩放级别 */
  fitZoom?: number | string;
  /** 图层数组 */
  layers?: any[];
  /** 地图中心点 */
  center?: number[];
  /** GeoJSON样式配置 */
  geoJSONStyle?: GeoJSONStyle;
  /** GeoJSON数据 */
  geoJSONData?: object;
  /** 地图范围 */
  extent?: number[][];
}

/**
 * 地图实例方法接口
 */
export interface MapInstance {
  /** 获取地图实例 */
  getMap(): Map;
  /** 添加GeoJSON图层 */
  addGeoLayer(geojsonData: any, getStyleConfig: () => Style, zIndex?: number): any;
  /** 添加风场图层 */
  addWindLayer(data: any, config: any, zIndex?: number): any;
  /** 添加数据图层 */
  addDataLayer(zIndex: number): { vectorLayer: VectorLayer<any>; vectorSource: VectorSource };
  /** 添加悬停监听器 */
  addHoverListener(layer: any, hit: (feature: Feature) => void, unHit: () => void): void;
  /** 添加缩放监听器 */
  addZoomListener(handler: (zoom: number) => void): void;
  /** 添加点击监听器 */
  addClickListener(layer: any, hit: (feature: Feature) => void, unHit: () => void): void;
  /** 添加覆盖物 */
  addOverlay(config: any): Overlay;
  /** 设置覆盖物状态 */
  setOverlayState(overlay: Overlay, state: any): void;
  /** 设置鼠标样式 */
  setCursor(style: string): void;
  /** 清空所有图层 */
  clear(): void;
  /** 添加主GeoJSON图层 */
  addMainGeoJSONLayer(params: { geoJSONStyle: GeoJSONStyle; geoJSONData: any }): void;
}
