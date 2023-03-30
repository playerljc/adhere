var __extends=this&&this.__extends||function(){var r=function(t,e){return(r=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,e){t.__proto__=e}:function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}))(t,e)};return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),__spreadArray=this&&this.__spreadArray||function(t,e,o){if(o||2===arguments.length)for(var r,n=0,i=e.length;n<i;n++)!r&&n in e||((r=r||Array.prototype.slice.call(e,0,n))[n]=e[n]);return t.concat(r||Array.prototype.slice.call(e))};import*as turf from"@turf/turf";import{GeometryType,VectorActions}from"../types";import Geometry from"./Geometry";import RegularPolygonGeometry from"./RegularPolygonGeometry";var MulitRegularPolygonGeometry=function(o){function t(t){var e=o.call(this)||this;return e.coordinates=t,e}return __extends(t,o),t.prototype.setCoordinates=function(t){this.coordinates=t,null!=(t=null==this?void 0:this.getLayer())&&t.getEmitter().trigger(VectorActions.UPDATE)},t.prototype.getCoordinates=function(){return __spreadArray([],this.coordinates,!0)},t.prototype.getType=function(){return GeometryType.MulitRegularPolygon},t.prototype.getCenterCoordinate=function(t){t.ctx,t.style,t.isScale;var t=this.coordinates,e=[],o=this.getMap(),t=(t.forEach(function(t){t=o.pointToPixel(new BMap.Point(t.center.lng,t.center.lat));e.push(turf.point([t.x,t.y]))}),turf.featureCollection(e)),t=turf.center(t);return{x:t.geometry.coordinates[0],y:t.geometry.coordinates[1]}},t.prototype.draw=function(e,o){var t=this.coordinates,r=this.getMap();t.forEach(function(t){RegularPolygonGeometry.drawRegularPolygon({ctx:e,style:o,coordinates:t,map:r,isScale:!0})})},t.prototype.isPixelInGeometry=function(e,o){var r=this;return this.coordinates.some(function(t){return RegularPolygonGeometry.isPixelInGeometry({coordinates:t,map:r.getMap(),pixel:e,style:o,isScale:!0})})},t}(Geometry);export default MulitRegularPolygonGeometry;
//# sourceMappingURL=MulitRegularPolygonGeometry.js.map
