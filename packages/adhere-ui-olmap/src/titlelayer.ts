import Tile from 'ol/layer/Tile';
import { OSM, TileWMS, WMTS, XYZ } from 'ol/source.js';

/**
 * getOSM - OSM的resource
 * @param options
 * @return {OSM}
 */
function getOSM(options?: any) {
  return new OSM(options);
}

/**
 * getXYZ
 * @param options
 * @return {XYZ}
 */
function getXYZ(options) {
  return new XYZ(options);
}

/**
 * getTileWMS
 * @param options
 * @return {TileWMS}
 */
function getTileWMS(options) {
  return new TileWMS(options);
}

/**
 * getWMTS
 * @param options
 * @return {WMTS}
 */
function getWMTS(options) {
  return new WMTS(options);
}

/**
 * getOSMTileLayer
 * @param sourceOptions
 * @param options
 */
function getOSMTileLayer(
  { sourceOptions = {}, options = {} } = {
    sourceOptions: {},
    options: {},
  },
) {
  return new Tile({
    source: getOSM(sourceOptions || {}),
    ...(options || {}),
  });
}

/**
 * getXYZTileLayer
 * @param sourceOptions
 * @param options
 */
function getXYZTileLayer(
  { sourceOptions = {}, options = {} } = {
    sourceOptions: {},
    options: {},
  },
) {
  return new Tile({
    source: getXYZ(sourceOptions || {}),
    ...(options || {}),
  });
}

/**
 * getWMTSTileLayer
 * @param sourceOptions
 * @param options
 */
function getWMTSTileLayer(
  { sourceOptions = {}, options = {} } = {
    sourceOptions: {},
    options: {},
  },
) {
  return new Tile({
    source: getWMTS(sourceOptions || {}),
    ...(options || {}),
  });
}

/**
 * getTileWMSTileLayer
 * @param sourceOptions
 * @param options
 */
function getTileWMSTileLayer(
  { sourceOptions = {}, options = {} } = {
    sourceOptions: {},
    options: {},
  },
) {
  return new Tile({
    source: getTileWMS(sourceOptions || {}),
    ...(options || {}),
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
