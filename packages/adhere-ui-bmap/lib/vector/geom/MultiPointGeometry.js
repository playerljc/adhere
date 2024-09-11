"use strict";var __extends=this&&this.__extends||function(){var o=function(t,e){return(o=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,e){t.__proto__=e}:function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}))(t,e)};return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),__createBinding=this&&this.__createBinding||(Object.create?function(t,e,r,o){void 0===o&&(o=r);var n=Object.getOwnPropertyDescriptor(e,r);n&&("get"in n?e.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,o,n)}:function(t,e,r,o){t[o=void 0===o?r:o]=e[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),__importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)"default"!==r&&Object.prototype.hasOwnProperty.call(t,r)&&__createBinding(e,t,r);return __setModuleDefault(e,t),e},__spreadArray=this&&this.__spreadArray||function(t,e,r){if(r||2===arguments.length)for(var o,n=0,i=e.length;n<i;n++)!o&&n in e||((o=o||Array.prototype.slice.call(e,0,n))[n]=e[n]);return t.concat(o||Array.prototype.slice.call(e))},__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},turf=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("@turf/turf"))),types_1=require("../types"),Geometry_1=__importDefault(require("./Geometry")),PointGeometry_1=__importDefault(require("./PointGeometry")),MultiPointGeometry=function(r){function t(t){var e=r.call(this)||this;return e.coordinates=t,e}return __extends(t,r),t.prototype.setCoordinates=function(t){this.coordinates=t,null!=(t=null==(t=null==this?void 0:this.getLayer())?void 0:t.getEmitter())&&t.trigger(types_1.VectorActions.UPDATE)},t.prototype.getCoordinates=function(){return __spreadArray([],this.coordinates,!0)},t.prototype.getType=function(){return types_1.GeometryType.MultiPoint},t.prototype.getCenterCoordinate=function(t){t.ctx,t.style,t.isScale;var t=this.coordinates,e=this.getMap(),t=turf.featureCollection(t.map(function(t){t=e.pointToPixel(new BMap.Point(t.lng,t.lat));return turf.point([t.x,t.y])})),t=turf.center(t);return{x:t.geometry.coordinates[0],y:t.geometry.coordinates[1]}},t.prototype.draw=function(e,r){var t=this.coordinates,o=this.getMap();t.forEach(function(t){PointGeometry_1.default.drawPoint({ctx:e,style:r,coordinates:t,map:o})})},t.prototype.isPixelInGeometry=function(e,r){var o=this;return this.coordinates.some(function(t){return PointGeometry_1.default.isPixelInGeometry({coordinates:t,map:o.getMap(),pixel:e,style:r})})},t}(Geometry_1.default);exports.default=MultiPointGeometry;
//# sourceMappingURL=MultiPointGeometry.js.map
