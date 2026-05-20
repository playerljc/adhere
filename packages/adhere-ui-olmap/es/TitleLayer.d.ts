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
declare function getOSM(options?: OSMOptions): OSM;
/**
 * 获取XYZ源
 * @param options - XYZ源配置选项
 * @returns XYZ源实例
 */
declare function getXYZ(options: XYZOptions): XYZ;
/**
 * 获取TileWMS源
 * @param options - TileWMS源配置选项
 * @returns TileWMS源实例
 */
declare function getTileWMS(options: any): TileWMS;
/**
 * 获取WMTS源
 * @param options - WMTS源配置选项
 * @returns WMTS源实例
 */
declare function getWMTS(options: any): WMTS;
/**
 * 获取OSM瓦片图层
 * @param params - 图层创建参数
 * @param params.sourceOptions - 源配置选项
 * @param params.options - 图层配置选项
 * @returns OSM瓦片图层实例
 */
declare function getOSMTileLayer({ sourceOptions, options }?: LayerParams): Tile<OSM>;
/**
 * 获取XYZ瓦片图层
 * @param params - 图层创建参数
 * @param params.sourceOptions - 源配置选项
 * @param params.options - 图层配置选项
 * @returns XYZ瓦片图层实例
 */
declare function getXYZTileLayer({ sourceOptions, options }?: LayerParams): Tile<XYZ>;
/**
 * 获取WMTS瓦片图层
 * @param params - 图层创建参数
 * @param params.sourceOptions - 源配置选项
 * @param params.options - 图层配置选项
 * @returns WMTS瓦片图层实例
 */
declare function getWMTSTileLayer({ sourceOptions, options }?: LayerParams): Tile<WMTS>;
/**
 * 获取TileWMS瓦片图层
 * @param params - 图层创建参数
 * @param params.sourceOptions - 源配置选项
 * @param params.options - 图层配置选项
 * @returns TileWMS瓦片图层实例
 */
declare function getTileWMSTileLayer({ sourceOptions, options }?: LayerParams): Tile<TileWMS>;
export { getOSM, getXYZ, getWMTS, getTileWMS, getOSMTileLayer, getXYZTileLayer, getWMTSTileLayer, getTileWMSTileLayer, };
