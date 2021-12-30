var __extends=this&&this.__extends||function(){var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)};return function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++)for(var i in e=arguments[o])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};import*as turf from"@turf/turf";import{GeometryType,VectorActions}from"../types";import Geometry from"./Geometry";import GeometryStyle from"../style/GeometryStyle";import Util from"../../util";var RectGeometry=function(o){function s(t){var e=o.call(this)||this;return e.coordinates=t,e}return __extends(s,o),s.prototype.setCoordinates=function(t){this.coordinates=t,null!==(t=null==this?void 0:this.getLayer())&&void 0!==t&&t.getEmitter().trigger(VectorActions.UPDATE)},s.prototype.getCoordinates=function(){return __assign({},this.coordinates)},s.prototype.getType=function(){return GeometryType.Rect},s.getCenterCoordinate=function(t){t.ctx;var e=t.coordinates,o=t.map,r=(t.style,t.isScale),i=e.leftTop,n=e.width,s=e.height,t=o.pointToPixel(new BMap.Point(i.lng,i.lat)),e=Util.getScale(o),i=n,o=s;r&&(i=e*n,o=e*s);o=turf.featureCollection([turf.point([t.x,t.y]),turf.point([t.x+i,t.y]),turf.point([t.x+i,t.y+o]),turf.point([t.x,t.y+o])]),o=turf.center(o);return{x:o.geometry.coordinates[0],y:o.geometry.coordinates[1]}},s.prototype.getCenterCoordinate=function(t){var e=t.ctx,o=t.style,t=t.isScale;return s.getCenterCoordinate({coordinates:this.coordinates,ctx:e,map:this.getMap(),style:o,isScale:t})},s.drawRect=function(t){var e=t.ctx,o=t.style,r=t.coordinates,i=t.map,n=t.isScale;e.save();var s=__assign(__assign({},GeometryStyle),o||{});e.beginPath(),e.lineWidth=s.lineWidth,e.lineJoin=s.lineJoin,e.lineCap=s.lineCap,e.setLineDash(s.lineDash),e.lineDashOffset=s.lineDashOffset,e.strokeStyle=s.strokeStyle,e.fillStyle=s.fillStyle;var a=r.leftTop,t=r.width,o=r.height,s=i.pointToPixel(new BMap.Point(a.lng,a.lat)),r=Util.getScale(i),a=t,i=o;n&&(a=r*t,i=r*o),e.rect(s.x,s.y,a,i),e.stroke(),e.fill(),e.restore()},s.prototype.draw=function(t,e){s.drawRect({ctx:t,style:e,coordinates:this.coordinates,map:this.getMap(),isScale:!0})},s.isPixelInGeometry=function(t){var e=t.coordinates,o=t.map,r=t.style,i=t.pixel,n=t.isScale,t=document.createElement("canvas").getContext("2d");return!!t&&(s.drawRect({ctx:t,coordinates:e,style:r,map:o,isScale:n}),t.isPointInPath(i.x,i.y))},s.prototype.isPixelInGeometry=function(t,e){return s.isPixelInGeometry({coordinates:this.coordinates,map:this.getMap(),style:e,isScale:!0,pixel:t})},s}(Geometry);export default RectGeometry;
//# sourceMappingURL=RectGeometry.js.map