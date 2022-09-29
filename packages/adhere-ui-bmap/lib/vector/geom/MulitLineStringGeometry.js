"use strict";var __extends=this&&this.__extends||function(){var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};return function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,n){t[n=void 0===n?r:n]=e[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),__importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)"default"!==r&&Object.hasOwnProperty.call(t,r)&&__createBinding(e,t,r);return __setModuleDefault(e,t),e},__spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;for(var n=Array(t),o=0,e=0;e<r;e++)for(var i=arguments[e],a=0,s=i.length;a<s;a++,o++)n[o]=i[a];return n},__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},turf=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("@turf/turf"))),GeometryStyle_1=__importDefault(require("../style/GeometryStyle")),types_1=require("../types"),Geometry_1=__importDefault(require("./Geometry")),LineStringGeometry_1=__importDefault(require("./LineStringGeometry")),MulitLineStringGeometry=function(r){function t(t){var e=r.call(this)||this;return e.coordinates=t,e}return __extends(t,r),t.prototype.setCoordinates=function(t){this.coordinates=t,null!=(t=null==this?void 0:this.getLayer())&&t.getEmitter().trigger(types_1.VectorActions.UPDATE)},t.prototype.getCoordinates=function(){return __spreadArrays(this.coordinates)},t.prototype.getType=function(){return types_1.GeometryType.MulitLineString},t.prototype.getCenterCoordinate=function(t){t.ctx,t.style,t.isScale;var t=this.coordinates,r=this.getMap(),n=[],t=(t.forEach(function(t){var e=r.pointToPixel(new BMap.Point(t.point1.lng,t.point1.lat)),t=r.pointToPixel(new BMap.Point(t.point2.lng,t.point2.lat));n.push(turf.point([e.x,e.y])),n.push(turf.point([t.x,t.y]))}),turf.featureCollection(n)),t=turf.center(t);return{x:t.geometry.coordinates[0],y:t.geometry.coordinates[1]}},t.prototype.draw=function(e,t){var r=this,n=this.coordinates,o=__assign(__assign(__assign({},GeometryStyle_1.default),t||{}),{arrow:{draw:!1,direction:"end",type:"normal",size:"normal"}});n.forEach(function(t){LineStringGeometry_1.default.drawLineString({ctx:e,style:o,coordinates:t,map:r.getMap()})})},t.prototype.isPixelInGeometry=function(e,r){var n=this;return this.coordinates.some(function(t){return LineStringGeometry_1.default.isPixelInGeometry({pixel:e,style:r,coordinates:t,map:n.getMap()})})},t}(Geometry_1.default);exports.default=MulitLineStringGeometry;
//# sourceMappingURL=MulitLineStringGeometry.js.map
