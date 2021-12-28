"use strict";var __extends=this&&this.__extends||function(){var i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};return function(t,e){function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,r=1,i=arguments.length;r<i;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(t,e,r,i){void 0===i&&(i=r),Object.defineProperty(t,i,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,i){t[i=void 0===i?r:i]=e[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),__importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)"default"!==r&&Object.hasOwnProperty.call(t,r)&&__createBinding(e,t,r);return __setModuleDefault(e,t),e},__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var turf=__importStar(require("@turf/turf")),types_1=require("../types"),Geometry_1=__importDefault(require("./Geometry")),GeometryStyle_1=__importDefault(require("../style/GeometryStyle")),util_1=__importDefault(require("../../util")),RectGeometry=function(r){function a(t){var e=r.call(this)||this;return e.coordinates=t,e}return __extends(a,r),a.prototype.setCoordinates=function(t){this.coordinates=t,null!==(t=null==this?void 0:this.getLayer())&&void 0!==t&&t.getEmitter().trigger(types_1.VectorActions.UPDATE)},a.prototype.getCoordinates=function(){return __assign({},this.coordinates)},a.prototype.getType=function(){return types_1.GeometryType.Rect},a.getCenterCoordinate=function(t){t.ctx;var e=t.coordinates,r=t.map,i=(t.style,t.isScale),n=e.leftTop,o=e.width,a=e.height,t=r.pointToPixel(new BMap.Point(n.lng,n.lat)),e=util_1.default.getScale(r),n=o,r=a;i&&(n=e*o,r=e*a);r=turf.featureCollection([turf.point([t.x,t.y]),turf.point([t.x+n,t.y]),turf.point([t.x+n,t.y+r]),turf.point([t.x,t.y+r])]),r=turf.center(r);return{x:r.geometry.coordinates[0],y:r.geometry.coordinates[1]}},a.prototype.getCenterCoordinate=function(t){var e=t.ctx,r=t.style,t=t.isScale;return a.getCenterCoordinate({coordinates:this.coordinates,ctx:e,map:this.getMap(),style:r,isScale:t})},a.drawRect=function(t){var e=t.ctx,r=t.style,i=t.coordinates,n=t.map,o=t.isScale;e.save();var a=__assign(__assign({},GeometryStyle_1.default),r||{});e.beginPath(),e.lineWidth=a.lineWidth,e.lineJoin=a.lineJoin,e.lineCap=a.lineCap,e.setLineDash(a.lineDash),e.lineDashOffset=a.lineDashOffset,e.strokeStyle=a.strokeStyle,e.fillStyle=a.fillStyle;var s=i.leftTop,t=i.width,r=i.height,a=n.pointToPixel(new BMap.Point(s.lng,s.lat)),i=util_1.default.getScale(n),s=t,n=r;o&&(s=i*t,n=i*r),e.rect(a.x,a.y,s,n),e.stroke(),e.fill(),e.restore()},a.prototype.draw=function(t,e){a.drawRect({ctx:t,style:e,coordinates:this.coordinates,map:this.getMap(),isScale:!0})},a.isPixelInGeometry=function(t){var e=t.coordinates,r=t.map,i=t.style,n=t.pixel,o=t.isScale,t=document.createElement("canvas").getContext("2d");return!!t&&(a.drawRect({ctx:t,coordinates:e,style:i,map:r,isScale:o}),t.isPointInPath(n.x,n.y))},a.prototype.isPixelInGeometry=function(t,e){return a.isPixelInGeometry({coordinates:this.coordinates,map:this.getMap(),style:e,isScale:!0,pixel:t})},a}(Geometry_1.default);exports.default=RectGeometry;
//# sourceMappingURL=RectGeometry.js.map
