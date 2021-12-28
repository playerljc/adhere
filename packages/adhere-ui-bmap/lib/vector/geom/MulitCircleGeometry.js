"use strict";var __extends=this&&this.__extends||function(){var o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};return function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,r=1,o=arguments.length;r<o;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(t,e,r,o){void 0===o&&(o=r),Object.defineProperty(t,o,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,o){t[o=void 0===o?r:o]=e[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),__importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)"default"!==r&&Object.hasOwnProperty.call(t,r)&&__createBinding(e,t,r);return __setModuleDefault(e,t),e},__spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;for(var o=Array(t),i=0,e=0;e<r;e++)for(var n=arguments[e],a=0,s=n.length;a<s;a++,i++)o[i]=n[a];return o},__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var turf=__importStar(require("@turf/turf")),types_1=require("../types"),Geometry_1=__importDefault(require("./Geometry")),CircleGeometry_1=__importDefault(require("./CircleGeometry")),GeometryStyle_1=__importDefault(require("../style/GeometryStyle")),MulitCircleGeometry=function(r){function t(t){var e=r.call(this)||this;return e.coordinates=t,e}return __extends(t,r),t.prototype.setCoordinates=function(t){this.coordinates=t,null!==(t=null==this?void 0:this.getLayer())&&void 0!==t&&t.getEmitter().trigger(types_1.VectorActions.UPDATE)},t.prototype.getCoordinates=function(){return __spreadArrays(this.coordinates)},t.prototype.getType=function(){return types_1.GeometryType.MulitCircle},t.prototype.getCenterCoordinate=function(t){t.ctx,t.style,t.isScale;var t=this.coordinates,e=this.getMap(),r=[];t.forEach(function(t){t=e.pointToPixel(new BMap.Point(t.center.lng,t.center.lat));r.push(turf.point([t.x,t.y]))});t=turf.featureCollection(r),t=turf.center(t);return{x:t.geometry.coordinates[0],y:t.geometry.coordinates[1]}},t.prototype.draw=function(e,t){var r=this,o=this.coordinates,i=__assign(__assign({},GeometryStyle_1.default),t||{});o.forEach(function(t){CircleGeometry_1.default.drawCircle({ctx:e,style:i,coordinates:t,map:r.getMap(),isScale:!0})})},t.prototype.isPixelInGeometry=function(e,r){var o=this;return this.coordinates.some(function(t){return CircleGeometry_1.default.isPixelInGeometry({coordinates:t,map:o.getMap(),style:r,pixel:e,isScale:!0})})},t}(Geometry_1.default);exports.default=MulitCircleGeometry;
//# sourceMappingURL=MulitCircleGeometry.js.map
