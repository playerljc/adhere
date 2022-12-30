var __extends=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var r in o)o.hasOwnProperty(r)&&(t[r]=o[r])})(t,o)};return function(t,o){function r(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),__spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,o=0,r=arguments.length;o<r;o++)t+=arguments[o].length;for(var e=Array(t),n=0,o=0;o<r;o++)for(var i=arguments[o],s=0,a=i.length;s<a;s++,n++)e[n]=i[s];return e};import*as turf from"@turf/turf";import{GeometryType,VectorActions}from"../types";import Geometry from"./Geometry";import PointGeometry from"./PointGeometry";var MulitPointGeometry=function(r){function t(t){var o=r.call(this)||this;return o.coordinates=t,o}return __extends(t,r),t.prototype.setCoordinates=function(t){this.coordinates=t,null!=(t=null==(t=null==this?void 0:this.getLayer())?void 0:t.getEmitter())&&t.trigger(VectorActions.UPDATE)},t.prototype.getCoordinates=function(){return __spreadArrays(this.coordinates)},t.prototype.getType=function(){return GeometryType.MulitPoint},t.prototype.getCenterCoordinate=function(t){t.ctx,t.style,t.isScale;var t=this.coordinates,o=this.getMap(),t=turf.featureCollection(t.map(function(t){t=o.pointToPixel(new BMap.Point(t.lng,t.lat));return turf.point([t.x,t.y])})),t=turf.center(t);return{x:t.geometry.coordinates[0],y:t.geometry.coordinates[1]}},t.prototype.draw=function(o,r){var t=this.coordinates,e=this.getMap();t.forEach(function(t){PointGeometry.drawPoint({ctx:o,style:r,coordinates:t,map:e})})},t.prototype.isPixelInGeometry=function(o,r){var e=this;return this.coordinates.some(function(t){return PointGeometry.isPixelInGeometry({coordinates:t,map:e.getMap(),pixel:o,style:r})})},t}(Geometry);export default MulitPointGeometry;
//# sourceMappingURL=MulitPointGeometry.js.map
