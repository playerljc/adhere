var __extends=this&&this.__extends||function(){var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)};return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var r in e=arguments[o])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};import TextStyle from"../style/TextStyle";import{GeometryType,VectorActions}from"../types";import Geometry from"./Geometry";var TextGeometry=function(o){function t(t){var e=o.call(this)||this;return e.coordinates=t,e}return __extends(t,o),t.prototype.setCoordinates=function(t){this.coordinates=t,null!=(t=null==this?void 0:this.getLayer())&&t.getEmitter().trigger(VectorActions.UPDATE)},t.prototype.getCoordinates=function(){return __assign({},this.coordinates)},t.prototype.getType=function(){return GeometryType.Text},t.getCenterCoordinate=function(t){return __assign({},t.point)},t.prototype.getCenterCoordinate=function(){return t.getCenterCoordinate(this.coordinates)},t.prototype.draw=function(t,e){t.save();var e=__assign(__assign({},TextStyle),e||{}),e=(t.beginPath(),t.font=e.font,t.textAlign=e.textAlign,t.textBaseline=e.textBaseline,t.direction=e.direction,t.fillStyle=e.fillStyle,t.strokeStyle=e.strokeStyle,this.getMap()),o=this.coordinates,n=o.text,o=o.point,e=e.pointToPixel(new BMap.Point(o.lng,o.lat));t.fillText(n,e.x,e.y),t.restore()},t.prototype.isPixelInGeometry=function(t){return!1},t}(Geometry);export default TextGeometry;
//# sourceMappingURL=TextGeometry.js.map
