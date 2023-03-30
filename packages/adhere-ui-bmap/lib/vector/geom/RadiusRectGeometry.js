"use strict";var __extends=this&&this.__extends||function(){var r=function(t,e){return(r=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,e){t.__proto__=e}:function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}))(t,e)};return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++)for(var i in e=arguments[o])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},util_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("../../util"))),GeometryStyle_1=__importDefault(require("../style/GeometryStyle")),types_1=require("../types"),RectGeometry_1=__importDefault(require("./RectGeometry")),RadiusRectGeometry=function(o){function r(t){var e=o.call(this,t)||this;return e.coordinates=t,e}return __extends(r,o),r.prototype.getType=function(){return types_1.GeometryType.RadiusRect},r.drawRadiusRect=function(t){var e=t.ctx,o=t.style,r=t.coordinates,i=t.map,t=t.isScale,o=__assign(__assign({},GeometryStyle_1.default),o||{}),o=(e.save(),e.beginPath(),e.lineWidth=o.lineWidth,e.lineJoin=o.lineJoin,e.lineCap=o.lineCap,e.setLineDash(o.lineDash),e.lineDashOffset=o.lineDashOffset,e.strokeStyle=o.strokeStyle,e.fillStyle=o.fillStyle,r.leftTop),n=r.width,s=r.height,r=r.radius,o=i.pointToPixel(new BMap.Point(o.lng,o.lat)),i=util_1.default.getScale(i),a=n,l=s,y=r;t&&(a=i*n,l=i*s,y=i*r),e.moveTo(o.x,o.y+y),e.arcTo(o.x,o.y,o.x+y,o.y,y),e.lineTo(o.x+a-y,o.y),t={x:o.x+a-y,y:o.y},e.arcTo(t.x+y,o.y,t.x+y,o.y+y,y),t={x:t.x+y,y:o.y+y},e.lineTo(t.x,t.y+(l-2*y)),e.arcTo((t={x:t.x,y:t.y+(l-2*y)}).x,t.y+y,t.x-y,t.y+y,y),e.lineTo((t={x:t.x-y,y:t.y+y}).x-(a-2*y),t.y),e.arcTo((t={x:t.x-(a-2*y),y:t.y}).x-y,t.y,t.x-y,t.y-y,y),e.lineTo((t={x:t.x-y,y:t.y-y}).x,t.y-(l-2*y)),e.stroke(),e.fill(),e.restore()},r.prototype.draw=function(t,e){r.drawRadiusRect({ctx:t,style:e,coordinates:this.coordinates,map:this.getMap(),isScale:!0})},r}(RectGeometry_1.default);exports.default=RadiusRectGeometry;
//# sourceMappingURL=RadiusRectGeometry.js.map
