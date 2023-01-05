var __extends=this&&this.__extends||function(){var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)};return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++)for(var n in e=arguments[o])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)};import Util from"../../util";import GeometryStyle from"../style/GeometryStyle";import{GeometryType}from"../types";import RectGeometry from"./RectGeometry";var RadiusRectGeometry=function(o){function r(t){var e=o.call(this,t)||this;return e.coordinates=t,e}return __extends(r,o),r.prototype.getType=function(){return GeometryType.RadiusRect},r.drawRadiusRect=function(t){var e=t.ctx,o=t.style,r=t.coordinates,n=t.map,t=t.isScale,o=__assign(__assign({},GeometryStyle),o||{}),o=(e.save(),e.beginPath(),e.lineWidth=o.lineWidth,e.lineJoin=o.lineJoin,e.lineCap=o.lineCap,e.setLineDash(o.lineDash),e.lineDashOffset=o.lineDashOffset,e.strokeStyle=o.strokeStyle,e.fillStyle=o.fillStyle,r.leftTop),i=r.width,s=r.height,r=r.radius,o=n.pointToPixel(new BMap.Point(o.lng,o.lat)),n=Util.getScale(n),y=i,a=s,l=r;t&&(y=n*i,a=n*s,l=n*r),e.moveTo(o.x,o.y+l),e.arcTo(o.x,o.y,o.x+l,o.y,l),e.lineTo(o.x+y-l,o.y),t={x:o.x+y-l,y:o.y},e.arcTo(t.x+l,o.y,t.x+l,o.y+l,l),t={x:t.x+l,y:o.y+l},e.lineTo(t.x,t.y+(a-2*l)),e.arcTo((t={x:t.x,y:t.y+(a-2*l)}).x,t.y+l,t.x-l,t.y+l,l),e.lineTo((t={x:t.x-l,y:t.y+l}).x-(y-2*l),t.y),e.arcTo((t={x:t.x-(y-2*l),y:t.y}).x-l,t.y,t.x-l,t.y-l,l),e.lineTo((t={x:t.x-l,y:t.y-l}).x,t.y-(a-2*l)),e.stroke(),e.fill(),e.restore()},r.prototype.draw=function(t,e){r.drawRadiusRect({ctx:t,style:e,coordinates:this.coordinates,map:this.getMap(),isScale:!0})},r}(RectGeometry);export default RadiusRectGeometry;
//# sourceMappingURL=RadiusRectGeometry.js.map
