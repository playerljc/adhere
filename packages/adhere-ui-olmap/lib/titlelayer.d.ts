/**
 * getOSM - OSM的resource
 * @param options
 * @return {OSM}
 */
declare function getOSM(options?: any): any;
/**
 * getXYZ
 * @param options
 * @return {XYZ}
 */
declare function getXYZ(options: any): any;
/**
 * getTileWMS
 * @param options
 * @return {TileWMS}
 */
declare function getTileWMS(options: any): any;
/**
 * getWMTS
 * @param options
 * @return {WMTS}
 */
declare function getWMTS(options: any): any;
/**
 * getOSMTileLayer
 * @param sourceOptions
 * @param options
 */
declare function getOSMTileLayer({ sourceOptions, options }?: {
    sourceOptions?: {};
    options?: {};
}): any;
/**
 * getXYZTileLayer
 * @param sourceOptions
 * @param options
 */
declare function getXYZTileLayer({ sourceOptions, options }?: {
    sourceOptions?: {};
    options?: {};
}): any;
/**
 * getWMTSTileLayer
 * @param sourceOptions
 * @param options
 */
declare function getWMTSTileLayer({ sourceOptions, options }?: {
    sourceOptions?: {};
    options?: {};
}): any;
/**
 * getTileWMSTileLayer
 * @param sourceOptions
 * @param options
 */
declare function getTileWMSTileLayer({ sourceOptions, options }?: {
    sourceOptions?: {};
    options?: {};
}): any;
export { getOSM, getXYZ, getWMTS, getTileWMS, getOSMTileLayer, getXYZTileLayer, getWMTSTileLayer, getTileWMSTileLayer, };
