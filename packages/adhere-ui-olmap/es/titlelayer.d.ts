import Tile from 'ol/layer/Tile';
import { XYZ, OSM, TileWMS, WMTS } from 'ol/source.js';
/**
 * getOSM - OSM的resource
 * @param options
 * @return {OSM}
 */
declare function getOSM(options?: any): OSM;
/**
 * getXYZ
 * @param options
 * @return {XYZ}
 */
declare function getXYZ(options: any): XYZ;
/**
 * getTileWMS
 * @param options
 * @return {TileWMS}
 */
declare function getTileWMS(options: any): TileWMS;
/**
 * getWMTS
 * @param options
 * @return {WMTS}
 */
declare function getWMTS(options: any): WMTS;
/**
 * getOSMTileLayer
 * @param sourceOptions
 * @param options
 */
declare function getOSMTileLayer({ sourceOptions, options }?: {
    sourceOptions?: {};
    options?: {};
}): Tile<OSM>;
/**
 * getXYZTileLayer
 * @param sourceOptions
 * @param options
 */
declare function getXYZTileLayer({ sourceOptions, options }?: {
    sourceOptions?: {};
    options?: {};
}): Tile<XYZ>;
/**
 * getWMTSTileLayer
 * @param sourceOptions
 * @param options
 */
declare function getWMTSTileLayer({ sourceOptions, options }?: {
    sourceOptions?: {};
    options?: {};
}): Tile<WMTS>;
/**
 * getTileWMSTileLayer
 * @param sourceOptions
 * @param options
 */
declare function getTileWMSTileLayer({ sourceOptions, options }?: {
    sourceOptions?: {};
    options?: {};
}): Tile<TileWMS>;
export { getOSM, getXYZ, getWMTS, getTileWMS, getOSMTileLayer, getXYZTileLayer, getWMTSTileLayer, getTileWMSTileLayer, };
