var __extends=this&&this.__extends||function(){var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)};return function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var r in e=arguments[o])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};import Geometry from"./Geometry";import{VectorActions,GeometryType}from"../types";import GeometryStyle from"../style/GeometryStyle";import Util from"../../util";var StartGeometry=function(o){function a(t){var e=o.call(this)||this;return e.coordinates=t,e}return __extends(a,o),a.prototype.setCoordinates=function(t){this.coordinates=t,null!==(t=null==this?void 0:this.getLayer())&&void 0!==t&&t.getEmitter().trigger(VectorActions.UPDATE)},a.prototype.getCoordinates=function(){return __assign({},this.coordinates)},a.prototype.getType=function(){return GeometryType.Start},a.getCenterCoordinate=function(t){t.ctx;var e=t.coordinates,o=t.map,e=(t.style,t.isScale,o.pointToPixel(new BMap.Point(e.center.lng,e.center.lat)));return __assign({},e)},a.prototype.getCenterCoordinate=function(t){var e=t.ctx,o=t.style,t=t.isScale;return a.getCenterCoordinate({coordinates:this.coordinates,ctx:e,map:this.getMap(),style:o,isScale:t})},a.drawStart=function(t){var e=t.ctx,o=t.style,n=t.coordinates,r=t.map,i=t.isScale;e.save();t=__assign(__assign({},GeometryStyle),o||{});e.beginPath(),e.lineWidth=t.lineWidth,e.lineJoin=t.lineJoin,e.lineCap=t.lineCap,e.setLineDash(t.lineDash),e.lineDashOffset=t.lineDashOffset,e.strokeStyle=t.strokeStyle,e.fillStyle=t.fillStyle;var o=n.center,t=n.innerRadius,n=n.outRadius,a=t,s=n;i&&(a=(i=Util.getScale(r))*t,s=i*n);for(var l=r.pointToPixel(new BMap.Point(o.lng,o.lat)),c=72,p=0;p<5;p++)e.lineTo(Math.cos((18+p*c)/180*Math.PI)*s+l.x,-Math.sin((18+p*c)/180*Math.PI)*s+l.y),e.lineTo(Math.cos((54+p*c)/180*Math.PI)*a+l.x,-Math.sin((54+p*c)/180*Math.PI)*a+l.y);e.stroke(),e.fill(),e.restore()},a.prototype.draw=function(t,e){a.drawStart({ctx:t,style:e,coordinates:this.coordinates,map:this.getMap(),isScale:!0})},a.isPixelInGeometry=function(t){var e=t.coordinates,o=t.map,n=t.pixel,r=t.style,i=t.isScale,t=document.createElement("canvas").getContext("2d");return!!t&&(a.drawStart({ctx:t,coordinates:e,style:r,map:o,isScale:i}),t.isPointInPath(n.x,n.y))},a.prototype.isPixelInGeometry=function(t,e){return a.isPixelInGeometry({coordinates:this.coordinates,map:this.getMap(),isScale:!0,style:e,pixel:t})},a}(Geometry);export default StartGeometry;
//# sourceMappingURL=StartGeometry.js.map