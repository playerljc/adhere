"use strict";var __extends=this&&this.__extends||function(){var o=function(e,t){return(o=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){e.__proto__=t}:function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}))(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r);var a=Object.getOwnPropertyDescriptor(t,r);a&&("get"in a?t.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,o,a)}:function(e,t,r,o){e[o=void 0===o?r:o]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},style_js_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("ol/style.js")),prop_types_1=__importDefault(require("prop-types")),react_1=__importStar(require("react")),adhere_util_resource_1=__importDefault(require("@baifendian/adhere-util-resource")),Constent_1=__importDefault(require("./Constent")),Util_1=__importDefault(require("./Util")),selectorPrefix="adhere-ui-ol-map",OlMap=function(t){function e(e){var o=t.call(this,e)||this;return o.addClickListener=function(e,t,r){Util_1.default.addClickListener(o.map,e,t,r,o.setCursor)},o.setCursor=function(e){o.map.getTarget().style.cursor=e},o.el=(0,react_1.createRef)(),o.zoom=null,o}return __extends(e,t),e.prototype.componentDidMount=function(){var e=this.props,t=e.mapConfig,r=e.type,o=e.maxZoom,a=e.minZoom,n=e.zoom,i=e.layers,l=e.center,u=e.extent,e=e.fitZoom;this.map=Util_1.default.createMap(__assign({config:{target:this.el.current},type:r,fitZoom:e,maxZoom:o,zoom:n,minZoom:a,center:l,extent:u,layers:i},t)),this.zoom=this.map.getView().getZoom()},e.prototype.addMainGeoJSONLayer=function(e){var t=e.geoJSONStyle,e=e.geoJSONData,r=t.stroke,o=t.fill,a=t.text;this.mainGeoLayer=this.addGeoLayer(e,function(){return new style_js_1.Style({fill:new style_js_1.Fill(__assign({},o)),stroke:new style_js_1.Stroke(__assign({},r)),text:new style_js_1.Text(__assign(__assign({},a),{fill:new style_js_1.Fill({color:a.color}),overflow:!0}))})})},e.prototype.addGeoLayer=function(e,t,r){return Util_1.default.addGeoLayer(this.map,e,t,r=void 0===r?0:r)},e.prototype.addWindLayer=function(e,t,r){return Util_1.default.addWindLayer(this.map,e,t,r=void 0===r?0:r)},e.prototype.addDataLayer=function(e){return Util_1.default.addVectorLayer(this.map,e)},e.prototype.addHoverListener=function(e,t,r){Util_1.default.addHoverListener(this.map,e,t,r)},e.prototype.addZoomListener=function(r){var o=this;this.map.on("moveend",function(e){var t=o.map.getView().getZoom();t!==o.zoom&&r(t),o.zoom=t})},e.prototype.addOverlay=function(e){return Util_1.default.addOverlay(this.map,e)},e.prototype.setOverlayState=function(e,t){Util_1.default.setOverlayState(e,t)},e.prototype.getTileLayer=function(){return this.map.getLayers().getArray()[0]},e.prototype.onAllTileloadend=function(){var r=this,e=this.getTileLayer(),o=0;e.getSource().on("tileloadstart",function(){o++}),e.getSource().on(["tileloadend","tileloaderror"],function(){var e,t;0===--o&&null!=(t=null==(e=r.props)?void 0:e.onAllTileloadend)&&t.call(e)})},e.prototype.clear=function(){for(var e=this.map.getLayers(),t=1;t<e.getLength();t++)this.map.removeLayer(e.item(t))},e.prototype.getMap=function(){return this.map},e.prototype.render=function(){return react_1.default.createElement("div",{className:selectorPrefix,ref:this.el})},e}(react_1.default.Component);OlMap.defaultProps={type:Constent_1.default.MAP_TYPE_ADMINISTRATIVE,mapConfig:{},maxZoom:adhere_util_resource_1.default.Dict.value.ResourceGisMapMaxZoom.value,zoom:adhere_util_resource_1.default.Dict.value.ResourceGisMapMaxZoom.value,minZoom:adhere_util_resource_1.default.Dict.value.ResourceGisMapMinZoom.value,center:adhere_util_resource_1.default.Dict.value.ResourceGisXinbeiquCenterPoint.value,extent:adhere_util_resource_1.default.Dict.value.ResourceGisXinbeiquMapExtent.value,layers:void 0},OlMap.propTypes={type:prop_types_1.default.oneOf([Constent_1.default.MAP_TYPE_ADMINISTRATIVE,Constent_1.default.MAP_TYPE_SATELLITE]),mapConfig:prop_types_1.default.object,maxZoom:prop_types_1.default.oneOfType([prop_types_1.default.string,prop_types_1.default.number]),zoom:prop_types_1.default.oneOfType([prop_types_1.default.string,prop_types_1.default.number]),fitZoom:prop_types_1.default.oneOfType([prop_types_1.default.string,prop_types_1.default.number]),minZoom:prop_types_1.default.oneOfType([prop_types_1.default.string,prop_types_1.default.number]),center:prop_types_1.default.arrayOf(prop_types_1.default.number),extent:prop_types_1.default.arrayOf(prop_types_1.default.arrayOf(prop_types_1.default.number)),layers:prop_types_1.default.array,onAllTileloadend:prop_types_1.default.func},exports.default=OlMap;
//# sourceMappingURL=OLMap.js.map
