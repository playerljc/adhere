var __extends=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])})(e,r)};return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}();import GeoJSON from"ol/format/GeoJSON";import{Vector as VectorLayer}from"ol/layer";import{Vector as VectorSource}from"ol/source";import Resource from"@baifendian/adhere-util-resource";var GeoLayer=function(n){function e(e,r,o){var t=this,e=new VectorSource({features:new GeoJSON({dataProjection:Resource.Dict.value.ResourceGisEpsg4326.value,featureProjection:Resource.Dict.value.ResourceGisEpsg3857.value}).readFeatures(e)});return(t=n.call(this,{source:e,style:r,zIndex:o})||this).vectorSource=e,t}return __extends(e,n),e}(VectorLayer);export default GeoLayer;
//# sourceMappingURL=geolayer.js.map
