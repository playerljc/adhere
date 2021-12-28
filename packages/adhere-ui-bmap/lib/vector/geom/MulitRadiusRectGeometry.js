"use strict";var __extends=this&&this.__extends||function(){var o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};return function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var types_1=require("../types"),MulitRectGeometry_1=__importDefault(require("./MulitRectGeometry")),RadiusRectGeometry_1=__importDefault(require("./RadiusRectGeometry")),MulitRadiusRectGeometry=function(r){function t(t){var e=r.call(this,t)||this;return e.coordinates=t,e}return __extends(t,r),t.prototype.getType=function(){return types_1.GeometryType.MulitRadiusRect},t.prototype.draw=function(e,r){var t=this.coordinates,o=this.getMap();t.forEach(function(t){RadiusRectGeometry_1.default.drawRadiusRect({ctx:e,style:r,coordinates:t,map:o,isScale:!0})})},t}(MulitRectGeometry_1.default);exports.default=MulitRadiusRectGeometry;
//# sourceMappingURL=MulitRadiusRectGeometry.js.map
