import Tile from 'ol/layer/Tile';
import { OSM, TileWMS, WMTS, XYZ } from 'ol/source.js';

/**
 * OSM源配置接口
 */
export interface OSMOptions {
  url?: string;
  crossOrigin?: string;
  [key: string]: any;
}

/**
 * XYZ源配置接口
 */
export interface XYZOptions {
  url?: string;
  urls?: string[];
  crossOrigin?: string;
  tileGrid?: any;
  [key: string]: any;
}

/**
 * TileWMS源配置接口
 */
export interface TileWMSOptions {
  url?: string;
  params?: Record<string, any>;
  serverType?: any;
  crossOrigin?: string;
  [key: string]: any;
}

/**
 * WMTS源配置接口
 */
export interface WMTSSourceOptions {
  url?: string;
  layer?: string;
  style?: string;
  format?: string;
  matrixSet?: string;
  tileGrid?: any;
  [key: string]: any;
}

/**
 * 图层配置接口
 */
export interface LayerOptions {
  opacity?: number;
  visible?: boolean;
  zIndex?: number;
  extent?: number[];
  [key: string]: any;
}

/**
 * 图层创建参数接口
 */
export interface LayerParams {
  sourceOptions?: OSMOptions | XYZOptions | TileWMSOptions | WMTSSourceOptions;
  options?: LayerOptions;
}

/**
 * 获取OSM源
 * @param options - OSM源配置选项
 * @returns OSM源实例
 */
function getOSM(options?: OSMOptions): OSM {
  return new OSM(options);
}

/**
 * 获取XYZ源
 * @param options - XYZ源配置选项
 * @returns XYZ源实例
 */
function getXYZ(options: XYZOptions): XYZ {
  return new XYZ(options);
}

/**
 * 获取TileWMS源
 * @param options - TileWMS源配置选项
 * @returns TileWMS源实例
 */
function getTileWMS(options: any): TileWMS {
  return new TileWMS(options);
}

/**
 * 获取WMTS源
 * @param options - WMTS源配置选项
 * @returns WMTS源实例
 */
function getWMTS(options: any): WMTS {
  return new WMTS(options);
}

/**
 * 获取OSM瓦片图层
 * @param params - 图层创建参数
 * @param params.sourceOptions - 源配置选项
 * @param params.options - 图层配置选项
 * @returns OSM瓦片图层实例
 */
function getOSMTileLayer(
  { sourceOptions = {}, options = {} }: LayerParams = {
    sourceOptions: {},
    options: {},
  },
): Tile<OSM> {
  return new Tile({
    source: getOSM(sourceOptions as OSMOptions),
    ...(options as LayerOptions),
  });
}

/**
 * 获取XYZ瓦片图层
 * @param params - 图层创建参数
 * @param params.sourceOptions - 源配置选项
 * @param params.options - 图层配置选项
 * @returns XYZ瓦片图层实例
 */
function getXYZTileLayer(
  { sourceOptions = {}, options = {} }: LayerParams = {
    sourceOptions: {},
    options: {},
  },
): Tile<XYZ> {
  return new Tile({
    source: getXYZ(sourceOptions as XYZOptions),
    ...(options as LayerOptions),
  });
}

/**
 * 获取WMTS瓦片图层
 * @param params - 图层创建参数
 * @param params.sourceOptions - 源配置选项
 * @param params.options - 图层配置选项
 * @returns WMTS瓦片图层实例
 */
function getWMTSTileLayer(
  { sourceOptions = {}, options = {} }: LayerParams = {
    sourceOptions: {},
    options: {},
  },
): Tile<WMTS> {
  return new Tile({
    source: getWMTS(sourceOptions as WMTSSourceOptions),
    ...(options as LayerOptions),
  });
}

/**
 * 获取TileWMS瓦片图层
 * @param params - 图层创建参数
 * @param params.sourceOptions - 源配置选项
 * @param params.options - 图层配置选项
 * @returns TileWMS瓦片图层实例
 */
function getTileWMSTileLayer(
  { sourceOptions = {}, options = {} }: LayerParams = {
    sourceOptions: {},
    options: {},
  },
): Tile<TileWMS> {
  return new Tile({
    source: getTileWMS(sourceOptions as TileWMSOptions),
    ...(options as LayerOptions),
  });
}

export {
  getOSM,
  getXYZ,
  getWMTS,
  getTileWMS,
  getOSMTileLayer,
  getXYZTileLayer,
  getWMTSTileLayer,
  getTileWMSTileLayer,
};
