"use strict";var __extends=this&&this.__extends||function(){var o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};return function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),__createBinding=this&&this.__createBinding||(Object.create?function(t,e,r,o){void 0===o&&(o=r),Object.defineProperty(t,o,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,o){t[o=void 0===o?r:o]=e[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),__importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)"default"!==r&&Object.hasOwnProperty.call(t,r)&&__createBinding(e,t,r);return __setModuleDefault(e,t),e},__spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;for(var o=Array(t),n=0,e=0;e<r;e++)for(var i=arguments[e],u=0,a=i.length;u<a;u++,n++)o[n]=i[u];return o},__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var turf=__importStar(require("@turf/turf")),types_1=require("../types"),Geometry_1=__importDefault(require("./Geometry")),PolygonGeometry_1=__importDefault(require("./PolygonGeometry")),MulitPolygonGeometry=function(r){function t(t){var e=r.call(this)||this;return e.coordinates=t,e}return __extends(t,r),t.prototype.setCoordinates=function(t){this.coordinates=t,this.getLayer().getEmitter().trigger(types_1.VectorActions.UPDATE)},t.prototype.getCoordinates=function(){return __spreadArrays(this.coordinates)},t.prototype.getType=function(){return types_1.GeometryType.MulitPolygon},t.prototype.getCenterCoordinate=function(t){t.ctx,t.style,t.isScale;var t=this.coordinates,e=this.getMap(),t=t.map(function(t){return t.map(function(t){t=e.pointToPixel(new BMap.Point(t.lng,t.lat));return[t.x,t.y]})}),t=turf.polygon(t),t=turf.centerOfMass(t);return{x:t.geometry.coordinates[0],y:t.geometry.coordinates[1]}},t.prototype.draw=function(e,r){var t=this.coordinates,o=this.getMap();t.forEach(function(t){PolygonGeometry_1.default.drawPolygon({ctx:e,style:r,coordinates:t,map:o})})},t.prototype.isPixelInGeometry=function(e){var r=this;return this.coordinates.some(function(t){return PolygonGeometry_1.default.isPixelInGeometry({coordinates:t,map:r.getMap(),pixel:e})})},t}(Geometry_1.default);exports.default=MulitPolygonGeometry;
//# sourceMappingURL=MulitPolygonGeometry.js.map
