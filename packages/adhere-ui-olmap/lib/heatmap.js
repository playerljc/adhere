var __extends=this&&this.__extends||function(){var a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};return function(t,e){function r(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}();import PropTypes from"prop-types";import OlMap from"./olmap";import Util from"./util";import{Heatmap as HeatmapLayer}from"ol/layer";var HeatMap=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.addLayer=function(){var t=this.props.heatMapLayerConfig;this.vectorSource=Util.addHeatmapLayer(this.map,t)},e.prototype.getHeatmapLayer=function(){for(var t=this.map.getLayers(),e=null,r=1;r<t.getLength();r++){var a=t.item(r);if(a instanceof HeatmapLayer){e=a;break}}return e},e}(OlMap);HeatMap.defaultProps={heatMapLayerConfig:{}},HeatMap.propTypes={heatMapLayerConfig:PropTypes.object};export default HeatMap;
//# sourceMappingURL=heatmap.js.map
