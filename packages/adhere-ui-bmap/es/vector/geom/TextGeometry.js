var __extends=this&&this.__extends||function(){var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)};return function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var r in e=arguments[o])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};import{GeometryType,VectorActions}from"../types";import Geometry from"./Geometry";import TextStyle from"../style/TextStyle";var TextGeometry=function(o){function t(t){var e=o.call(this)||this;return e.coordinates=t,e}return __extends(t,o),t.prototype.setCoordinates=function(t){this.coordinates=t,null!==(t=null==this?void 0:this.getLayer())&&void 0!==t&&t.getEmitter().trigger(VectorActions.UPDATE)},t.prototype.getCoordinates=function(){return __assign({},this.coordinates)},t.prototype.getType=function(){return GeometryType.Text},t.getCenterCoordinate=function(t){return __assign({},t.point)},t.prototype.getCenterCoordinate=function(){return t.getCenterCoordinate(this.coordinates)},t.prototype.draw=function(t,e){t.save();var o=__assign(__assign({},TextStyle),e||{});t.beginPath(),t.font=o.font,t.textAlign=o.textAlign,t.textBaseline=o.textBaseline,t.direction=o.direction,t.fillStyle=o.fillStyle,t.strokeStyle=o.strokeStyle;var n=this.getMap(),e=this.coordinates,o=e.text,e=e.point,e=n.pointToPixel(new BMap.Point(e.lng,e.lat));t.fillText(o,e.x,e.y),t.restore()},t.prototype.isPixelInGeometry=function(t){return!1},t}(Geometry);export default TextGeometry;
//# sourceMappingURL=TextGeometry.js.map