var __extends=this&&this.__extends||function(){var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)};return function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var r in e=arguments[o])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};import Util from"../../util";import GeometryStyle from"../style/GeometryStyle";import{GeometryType,VectorActions}from"../types";import Geometry from"./Geometry";var SectorGeometry=function(o){function s(t){var e=o.call(this)||this;return e.coordinates=t,e}return __extends(s,o),s.prototype.setCoordinates=function(t){this.coordinates=t,null!=(t=null==this?void 0:this.getLayer())&&t.getEmitter().trigger(VectorActions.UPDATE)},s.prototype.getCoordinates=function(){return __assign({},this.coordinates)},s.prototype.getType=function(){return GeometryType.Sector},s.getCenterCoordinate=function(t){t.ctx;var e=t.coordinates,o=t.map,t=(t.style,t.isScale,o.pointToPixel(new BMap.Point(e.center.lng,e.center.lat)));return __assign({},t)},s.prototype.getCenterCoordinate=function(t){var e=t.ctx,o=t.style,t=t.isScale;return s.getCenterCoordinate({coordinates:this.coordinates,ctx:e,map:this.getMap(),style:o,isScale:t})},s.drawSector=function(t){var e=t.ctx,o=t.style,n=t.coordinates,r=t.map,t=t.isScale,o=(e.save(),__assign(__assign({},GeometryStyle),o||{})),o=(e.beginPath(),e.lineWidth=o.lineWidth,e.lineJoin=o.lineJoin,e.lineCap=o.lineCap,e.setLineDash(o.lineDash),e.lineDashOffset=o.lineDashOffset,e.strokeStyle=o.strokeStyle,e.fillStyle=o.fillStyle,n.center),i=n.radius,s=n.angle1,n=n.angle2,a=i,t=(t&&(a=Util.getScale(r)*i),r.pointToPixel(new BMap.Point(o.lng,o.lat)));e.moveTo(t.x,t.y),e.arc(t.x,t.y,a,s*Math.PI/180,n*Math.PI/180,!1),e.closePath(),e.stroke(),e.fill(),e.restore()},s.prototype.draw=function(t,e){s.drawSector({ctx:t,style:e,coordinates:this.coordinates,map:this.getMap(),isScale:!0})},s.isPixelInGeometry=function(t){var e=t.coordinates,o=t.map,n=t.style,r=t.pixel,t=t.isScale,i=document.createElement("canvas").getContext("2d");return!!i&&(s.drawSector({ctx:i,coordinates:e,style:n,map:o,isScale:t}),i.isPointInPath(r.x,r.y))},s.prototype.isPixelInGeometry=function(t,e){return s.isPixelInGeometry({coordinates:this.coordinates,map:this.getMap(),style:e,pixel:t,isScale:!0})},s}(Geometry);export default SectorGeometry;
//# sourceMappingURL=SectorGeometry.js.map
