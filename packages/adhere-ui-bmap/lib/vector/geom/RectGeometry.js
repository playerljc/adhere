"use strict";var __extends=this&&this.__extends||function(){var i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};return function(t,e){function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,r=1,i=arguments.length;r<i;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(t,e,r,i){void 0===i&&(i=r),Object.defineProperty(t,i,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,i){t[i=void 0===i?r:i]=e[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),__importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)"default"!==r&&Object.hasOwnProperty.call(t,r)&&__createBinding(e,t,r);return __setModuleDefault(e,t),e},__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},turf=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("@turf/turf"))),util_1=__importDefault(require("../../util")),GeometryStyle_1=__importDefault(require("../style/GeometryStyle")),types_1=require("../types"),Geometry_1=__importDefault(require("./Geometry")),RectGeometry=function(r){function a(t){var e=r.call(this)||this;return e.coordinates=t,e}return __extends(a,r),a.prototype.setCoordinates=function(t){this.coordinates=t,null!=(t=null==this?void 0:this.getLayer())&&t.getEmitter().trigger(types_1.VectorActions.UPDATE)},a.prototype.getCoordinates=function(){return __assign({},this.coordinates)},a.prototype.getType=function(){return types_1.GeometryType.Rect},a.getCenterCoordinate=function(t){t.ctx;var e=t.coordinates,r=t.map,t=(t.style,t.isScale),i=e.leftTop,n=e.width,e=e.height,i=r.pointToPixel(new BMap.Point(i.lng,i.lat)),r=util_1.default.getScale(r),o=n,a=e,t=(t&&(o=r*n,a=r*e),turf.featureCollection([turf.point([i.x,i.y]),turf.point([i.x+o,i.y]),turf.point([i.x+o,i.y+a]),turf.point([i.x,i.y+a])])),n=turf.center(t);return{x:n.geometry.coordinates[0],y:n.geometry.coordinates[1]}},a.prototype.getCenterCoordinate=function(t){var e=t.ctx,r=t.style,t=t.isScale;return a.getCenterCoordinate({coordinates:this.coordinates,ctx:e,map:this.getMap(),style:r,isScale:t})},a.drawRect=function(t){var e=t.ctx,r=t.style,i=t.coordinates,n=t.map,t=t.isScale,r=(e.save(),__assign(__assign({},GeometryStyle_1.default),r||{})),r=(e.beginPath(),e.lineWidth=r.lineWidth,e.lineJoin=r.lineJoin,e.lineCap=r.lineCap,e.setLineDash(r.lineDash),e.lineDashOffset=r.lineDashOffset,e.strokeStyle=r.strokeStyle,e.fillStyle=r.fillStyle,i.leftTop),o=i.width,i=i.height,r=n.pointToPixel(new BMap.Point(r.lng,r.lat)),n=util_1.default.getScale(n),a=o,s=i;t&&(a=n*o,s=n*i),e.rect(r.x,r.y,a,s),e.stroke(),e.fill(),e.restore()},a.prototype.draw=function(t,e){a.drawRect({ctx:t,style:e,coordinates:this.coordinates,map:this.getMap(),isScale:!0})},a.isPixelInGeometry=function(t){var e=t.coordinates,r=t.map,i=t.style,n=t.pixel,t=t.isScale,o=document.createElement("canvas").getContext("2d");return!!o&&(a.drawRect({ctx:o,coordinates:e,style:i,map:r,isScale:t}),o.isPointInPath(n.x,n.y))},a.prototype.isPixelInGeometry=function(t,e){return a.isPixelInGeometry({coordinates:this.coordinates,map:this.getMap(),style:e,isScale:!0,pixel:t})},a}(Geometry_1.default);exports.default=RectGeometry;
//# sourceMappingURL=RectGeometry.js.map
