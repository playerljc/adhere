var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var i,n=1,o=arguments.length;n<o;n++)for(var t in i=arguments[n])Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);return e}).apply(this,arguments)};import Tile from"ol/layer/Tile";import{OSM,TileWMS,WMTS,XYZ}from"ol/source.js";function getOSM(e){return new OSM(e)}function getXYZ(e){return new XYZ(e)}function getTileWMS(e){return new TileWMS(e)}function getWMTS(e){return new WMTS(e)}function getOSMTileLayer(e){var e=void 0===e?{sourceOptions:{},options:{}}:e,i=e.sourceOptions,i=void 0===i?{}:i,e=e.options,e=void 0===e?{}:e;return new Tile(__assign({source:getOSM(null!=i?i:{})},null!=e?e:{}))}function getXYZTileLayer(e){var e=void 0===e?{sourceOptions:{},options:{}}:e,i=e.sourceOptions,i=void 0===i?{}:i,e=e.options,e=void 0===e?{}:e;return new Tile(__assign({source:getXYZ(null!=i?i:{})},null!=e?e:{}))}function getWMTSTileLayer(e){var e=void 0===e?{sourceOptions:{},options:{}}:e,i=e.sourceOptions,i=void 0===i?{}:i,e=e.options,e=void 0===e?{}:e;return new Tile(__assign({source:getWMTS(null!=i?i:{})},null!=e?e:{}))}function getTileWMSTileLayer(e){var e=void 0===e?{sourceOptions:{},options:{}}:e,i=e.sourceOptions,i=void 0===i?{}:i,e=e.options,e=void 0===e?{}:e;return new Tile(__assign({source:getTileWMS(null!=i?i:{})},null!=e?e:{}))}export{getOSM,getXYZ,getWMTS,getTileWMS,getOSMTileLayer,getXYZTileLayer,getWMTSTileLayer,getTileWMSTileLayer};
//# sourceMappingURL=titlelayer.js.map
