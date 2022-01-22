var __extends=this&&this.__extends||function(){var o=function(t,r){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)r.hasOwnProperty(e)&&(t[e]=r[e])})(t,r)};return function(t,r){function e(){this.constructor=t}o(t,r),t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var r,e=1,o=arguments.length;e<o;e++)for(var n in r=arguments[e])Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);return t}).apply(this,arguments)},__spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,r=0,e=arguments.length;r<e;r++)t+=arguments[r].length;for(var o=Array(t),n=0,r=0;r<e;r++)for(var i=arguments[r],s=0,a=i.length;s<a;s++,n++)o[n]=i[s];return o};import*as turf from"@turf/turf";import{GeometryType,VectorActions}from"../types";import Geometry from"./Geometry";import LineStringGeometry from"./LineStringGeometry";import GeometryStyle from"../style/GeometryStyle";var MulitLineStringGeometry=function(e){function t(t){var r=e.call(this)||this;return r.coordinates=t,r}return __extends(t,e),t.prototype.setCoordinates=function(t){this.coordinates=t,null!==(t=null==this?void 0:this.getLayer())&&void 0!==t&&t.getEmitter().trigger(VectorActions.UPDATE)},t.prototype.getCoordinates=function(){return __spreadArrays(this.coordinates)},t.prototype.getType=function(){return GeometryType.MulitLineString},t.prototype.getCenterCoordinate=function(t){t.ctx,t.style,t.isScale;var t=this.coordinates,e=this.getMap(),o=[];t.forEach(function(t){var r=e.pointToPixel(new BMap.Point(t.point1.lng,t.point1.lat)),t=e.pointToPixel(new BMap.Point(t.point2.lng,t.point2.lat));o.push(turf.point([r.x,r.y])),o.push(turf.point([t.x,t.y]))});t=turf.featureCollection(o),t=turf.center(t);return{x:t.geometry.coordinates[0],y:t.geometry.coordinates[1]}},t.prototype.draw=function(r,t){var e=this,o=this.coordinates,n=__assign(__assign(__assign({},GeometryStyle),t||{}),{arrow:{draw:!1,direction:"end",type:"normal",size:"normal"}});o.forEach(function(t){LineStringGeometry.drawLineString({ctx:r,style:n,coordinates:t,map:e.getMap()})})},t.prototype.isPixelInGeometry=function(r,e){var o=this;return this.coordinates.some(function(t){return LineStringGeometry.isPixelInGeometry({pixel:r,style:e,coordinates:t,map:o.getMap()})})},t}(Geometry);export default MulitLineStringGeometry;
//# sourceMappingURL=MulitLineStringGeometry.js.map
