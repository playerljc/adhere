"use strict";var __extends=this&&this.__extends||function(){var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])})(t,e)};return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function a(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(a.prototype=e.prototype,new a)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,a=1,r=arguments.length;a<r;a++)for(var o in e=arguments[a])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(t,e,a,r){void 0===r&&(r=a);var o=Object.getOwnPropertyDescriptor(e,a);o&&("get"in o?e.__esModule:!o.writable&&!o.configurable)||(o={enumerable:!0,get:function(){return e[a]}}),Object.defineProperty(t,r,o)}:function(t,e,a,r){t[r=void 0===r?a:r]=e[a]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),__importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)"default"!==a&&Object.prototype.hasOwnProperty.call(t,a)&&__createBinding(e,t,a);return __setModuleDefault(e,t),e},__spreadArray=this&&this.__spreadArray||function(t,e,a){if(a||2===arguments.length)for(var r,o=0,n=e.length;o<n;o++)!r&&o in e||((r=r||Array.prototype.slice.call(e,0,o))[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))},__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},adhere_util_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("@baifendian/adhere-util"))),turf=__importStar(require("@turf/turf")),defaultMoveGemStyle_1=__importDefault(require("../defaultMoveGemStyle")),PolygonDrawAction_1=__importDefault(require("../draw/PolygonDrawAction")),types_1=require("../types"),ModifyAction_1=__importDefault(require("./ModifyAction")),PolygonModifyAction=function(e){function t(t){t=e.call(this,t)||this;return t.startIndex=-1,t}return __extends(t,e),t.prototype.drawAnchors=function(){var t;if(this.context){var e=this.context.getCtx();if(e)for(var a=(null==(t=null==(t=null==this?void 0:this.data)?void 0:t.data)?void 0:t.data)||[],r=0;r<a.length;r++){var o=a[r];e.beginPath(),this.setAnchorCircleStyle(),e.ellipse(o.x,o.y,this.anchorRadius,this.anchorRadius,45*Math.PI/180,0,2*Math.PI),e.stroke(),e.fill()}}},t.prototype.getPointInAnchor=function(t){if(!this.data)return null;for(var e=null,a=-1,r=this.data.data.data,o=0;o<r.length;o++){var n=r[o],i=this.anchorRadius+this.anchorLineWidth;if(adhere_util_1.default.isPointInCircle(t,{center:n,radius:i})){e=n,a=o;break}}return e&&-1!==a?{point:e,index:a}:null},t.prototype.setResizeCursorByIndex=function(t){var e,a;this.context&&(e=this.context.getCanvasEl(),a=this.context.getAssistCanvasEl(),e&&a&&(e.style.cursor=a.style.cursor="nesw-resize"))},t.prototype.drawModify=function(t){var e=this.context,a=null==e?void 0:e.getCtx();e&&a&&this.data&&this.startPoint&&-1!==this.startIndex&&((a=e.getHistoryDataById(this.data.data.id))&&(a.data[this.startIndex]=t,this.data.data=a,e.clearDraw(),e.drawHistoryData(),this.drawAnchors()))},t.prototype.drawMove=function(t,e){var a,r,o=this.context,n=null==o?void 0:o.getCtx();o&&n&&this.data&&((n=o.getHistoryDataById(this.data.data.id))&&(a=e.x-t.x,r=e.y-t.y,n.data.forEach(function(t){t.x+=a,t.y+=r}),this.data.data=n,o.clearDraw(),o.drawHistoryData(),this.drawAnchors()))},t.prototype.getSelectType=function(){return types_1.SelectType.Polygon},t.prototype.isCanMove=function(t){var e,a;return!!this.data&&((a=__spreadArray([],null==(a=null==(a=null==this?void 0:this.data)?void 0:a.data)?void 0:a.data,!0)).push(a[0]),e=turf.point([t.x,t.y]),a=turf.polygon([a.map(function(t){return[t.x,t.y]})]),turf.booleanPointInPolygon(e,a)&&!this.getPointInAnchor(t))},t.prototype.drawMoveGeometry=function(){this.context&&this.data&&PolygonDrawAction_1.default.draw(this.context.getAssistCtx(),this.data)},t.prototype.drawMoveGeometry=function(t,e){var a,r,o;this.context&&this.data&&t&&e&&((a=__assign({},this.data.data)).data=a.data.map(function(t){return __assign({},t)}),r=e.x-t.x,o=e.y-t.y,a.data&&a.data.length&&(a.data.forEach(function(t){t.x+=r,t.y+=o}),a.style&&(a.style.globalAlpha=defaultMoveGemStyle_1.default.globalAlpha,a.style.strokeStyle=defaultMoveGemStyle_1.default.strokeStyle,a.style.lineWidth=defaultMoveGemStyle_1.default.lineWidth,a.style.lineDash=defaultMoveGemStyle_1.default.lineDash,a.style.lineDashOffset=defaultMoveGemStyle_1.default.lineDashOffset),PolygonDrawAction_1.default.draw(this.context.getAssistCtx(),a)))},t}(ModifyAction_1.default);exports.default=PolygonModifyAction;
//# sourceMappingURL=PolygonModifyAction.js.map
