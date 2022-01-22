"use strict";var __importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var types_1=require("./types"),GeometryStyle_1=__importDefault(require("./style/GeometryStyle")),Feature=function(){function t(t){this.name="",this.id="",this.style=GeometryStyle_1.default,this.zIndex=1,this.properties={},this.name=null==t?void 0:t.name,this.id=null==t?void 0:t.id,this.properties=null==t?void 0:t.properties,this.style=null==t?void 0:t.style,this.geometry=null==t?void 0:t.geometry,this.setGeometryContext()}return t.prototype.setGeometryContext=function(){this.geometry&&this.geometry.setContext(this)},t.prototype.draw=function(t){this.geometry.draw(t,this.style)},t.prototype.getGeometry=function(){return this.geometry},t.prototype.getId=function(){return this.id},t.prototype.getName=function(){return this.name},t.prototype.getStyle=function(){return this.style},t.prototype.getZIndex=function(){return this.zIndex},t.prototype.getProperties=function(){return this.properties},t.prototype.setGeometry=function(t){this.geometry=t,this.setGeometryContext(),null!==(t=null===(t=this.getLayer())||void 0===t?void 0:t.getEmitter())&&void 0!==t&&t.trigger(types_1.VectorActions.UPDATE)},t.prototype.setStyle=function(t){this.style=t,null!==(t=null===(t=this.getLayer())||void 0===t?void 0:t.getEmitter())&&void 0!==t&&t.trigger(types_1.VectorActions.UPDATE)},t.prototype.setId=function(t){this.id=t},t.prototype.setName=function(t){this.name=t},t.prototype.setZIndex=function(t){this.zIndex=t,null!==(t=null===(t=null==this?void 0:this.getLayer())||void 0===t?void 0:t.getEmitter())&&void 0!==t&&t.trigger(types_1.VectorActions.UPDATE)},t.prototype.setProperties=function(t){this.properties=t},t.prototype.getContext=function(){return this.context},t.prototype.setContext=function(t){this.context=t},t.prototype.getLayer=function(){var t;return null===(t=null==this?void 0:this.getContext())||void 0===t?void 0:t.getContext()},t.prototype.getMap=function(){var t;return null===(t=null==this?void 0:this.getLayer())||void 0===t?void 0:t.getMap()},t.prototype.isPointInFeature=function(t,e){return this.geometry.isPixelInGeometry(t,e)},t}();exports.default=Feature;
//# sourceMappingURL=Feature.js.map
