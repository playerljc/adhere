var __extends=this&&this.__extends||function(){var o=function(t,r){return(o=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,r){t.__proto__=r}:function(t,r){for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}))(t,r)};return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function e(){this.constructor=t}o(t,r),t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}}();import OlMap from"./olmap";import Util from"./util";var HeatMap=function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return __extends(r,t),r.prototype.addLayer=function(t){var t=Util.createHeatMapLayer((t=void 0===t?{}:t)||{}),r=t.layer,t=t.vectorSource;this.layer=r,this.vectorSource=t,this.map.addLayer(this.layer)},r.prototype.getHeatMapLayer=function(){return this.layer},r}(OlMap);export default HeatMap;
//# sourceMappingURL=heatmap.js.map
