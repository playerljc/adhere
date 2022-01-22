"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var TextStyle_1=__importDefault(require("../style/TextStyle")),GeometryStyle_1=__importDefault(require("../style/GeometryStyle")),Geometry=function(){function t(){this.context=null}return t.prototype.setContext=function(t){this.context=t},t.prototype.getContext=function(){return this.context},t.prototype.drawText=function(t){var e=t.ctx,n=t.text,i=t.style,t=t.textStyle;e.beginPath(),e.save();t=__assign(__assign({},TextStyle_1.default),t||{});e.font=t.font,e.textAlign=t.textAlign,e.textBaseline=t.textBaseline,e.direction=t.direction,e.strokeStyle=t.strokeStyle,e.fillStyle=t.fillStyle;t=__assign(__assign({},GeometryStyle_1.default),i||{});e.lineWidth=t.lineWidth,e.lineJoin=t.lineJoin,e.lineCap=t.lineCap,e.setLineDash(t.lineDash),e.lineDashOffset=t.lineDashOffset,e.strokeStyle=t.strokeStyle;i=this.getCenterCoordinate({ctx:e,style:i,isScale:!0});e.fillText(n||"",i.x,i.y),e.restore()},t.prototype.getMap=function(){var t;return null===(t=null==this?void 0:this.getLayer())||void 0===t?void 0:t.getMap()},t.prototype.getLayer=function(){var t=this.getContext();return t?t.getContext().getContext():null},t}();exports.default=Geometry;
//# sourceMappingURL=Geometry.js.map
