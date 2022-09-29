"use strict";var __extends=this&&this.__extends||function(){var i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};return function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),__createBinding=this&&this.__createBinding||(Object.create?function(t,e,n,i){void 0===i&&(i=n),Object.defineProperty(t,i,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,i){t[i=void 0===i?n:i]=e[n]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),__importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.hasOwnProperty.call(t,n)&&__createBinding(e,t,n);return __setModuleDefault(e,t),e},__spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var i=Array(t),o=0,e=0;e<n;e++)for(var s=arguments[e],a=0,r=s.length;a<r;a++,o++)i[o]=s[a];return i},__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},adhere_util_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("@baifendian/adhere-util"))),turf=__importStar(require("@turf/turf")),types_1=require("../types"),DrawAction_1=__importDefault(require("./DrawAction")),PolygonDrawAction=function(i){function o(){var t=i.call(this)||this;return t.startPoint=null,t.pointStack=[],t.isMove=!1,t.onCanvasClick=t.onCanvasClick.bind(t),t.onCanvasMousemove=t.onCanvasMousemove.bind(t),t.onCanvasDbClick=t.onCanvasDbClick.bind(t),t}return __extends(o,i),o.booleanPointInData=function(t,e,n){n=__spreadArrays(n.data),n.push(n[0]),n=o.transformOriginToReal(t,n),t=turf.point([e.x,e.y]),e=turf.polygon([n.map(function(t){return[t.x,t.y]})]);return turf.booleanPointInPolygon(t,e)},o.draw=function(t,e,n){e&&n&&(n.style&&(e.lineWidth=n.style.lineWidth,e.lineJoin=n.style.lineJoin,e.lineCap=n.style.lineCap,e.setLineDash(n.style.lineDash),e.lineDashOffset=n.style.lineDashOffset,e.strokeStyle=n.style.strokeStyle,e.fillStyle=n.style.fillStyle,e.globalAlpha=n.style.globalAlpha||1),this.drawHistoryPath(t,e,n.data),e.stroke(),e.fill())},o.drawHistoryPath=function(t,n,e){void 0===e&&(e=[]),n.save(),n.beginPath(),(o.transformOriginToReal(t,e)||[]).forEach(function(t,e){0===e?n.moveTo(t.x,t.y):n.lineTo(t.x,t.y)}),n.closePath(),n.stroke(),n.fill(),n.restore()},o.transformOriginToReal=function(e,t){return t.map(function(t){return e.pointToPixel(t)})},o.transformRealToOrigin=function(e,t){return t.map(function(t){return e.pixelToPoint(t)})},o.prototype.fill=function(){if(this.context){var t=this.pointStack,e=this.context.getCtx();if(e&&!(t.length<=1)){e.save(),e.beginPath();for(var n=0;n<t.length;n++){var i=t[n];0===n?e.moveTo(i.x,i.y):e.lineTo(i.x,i.y)}e.closePath(),e.fillStyle=this.style.fillStyle,e.fill(),e.restore()}}},o.prototype.drawLine=function(t,e){var n,i=this.context;i&&(n=this.style,(i=i.getCtx())&&(i.beginPath(),i.moveTo(t.x,t.y),i.lineTo(e.x,e.y),i.strokeStyle=n.strokeStyle,i.fillStyle=n.fillStyle,i.lineWidth=n.lineWidth,i.lineCap=n.lineCap,i.lineJoin=n.lineJoin,i.lineDashOffset=n.lineDashOffset,i.setLineDash(n.lineDash),i.stroke()))},o.prototype.drawStack=function(){var t=this.pointStack;if(!(t.length<=1))for(var e=0;this.drawLine(t[e],t[e+1]),++e!==t.length-1;);},o.prototype.getCanvasClick=function(){return this.onCanvasClick},o.prototype.getCanvasMousemove=function(){return this.onCanvasMousemove},o.prototype.getCanvasDbClick=function(){return this.onCanvasDbClick},o.prototype.onCanvasClick=function(t){if(this.context){var e=this.context.getCanvasEl();if(e&&!(2<=t.detail)){if(this.startPoint){var n=adhere_util_1.default.clientToCtxPoint({event:t,rect:null==e?void 0:e.getBoundingClientRect()});this.drawLine(this.startPoint,n),this.startPoint=n,this.startPoint&&this.pointStack.push(this.startPoint)}else{if(null!=e&&e.addEventListener("mousemove",this.getCanvasMousemove()),null!=e&&e.addEventListener("dblclick",this.getCanvasDbClick()),this.startPoint=adhere_util_1.default.clientToCtxPoint({event:t,rect:null==e?void 0:e.getBoundingClientRect()}),!this.startPoint)return;this.pointStack.push(this.startPoint),this.trigger(types_1.ActionEvents.Start,{selectType:this.getSelectType(),actionType:types_1.ActionType.Draw})}t.stopPropagation()}}},o.prototype.onCanvasMousemove=function(t){var e,n=this.context,i=this.startPoint;n&&i&&(e=n.getCanvasEl())&&(this.isMove=!0,n.clearDraw(),n.drawHistoryData(),this.drawStack(),this.drawLine(i,adhere_util_1.default.clientToCtxPoint({event:t,rect:null==e?void 0:e.getBoundingClientRect()})),t.stopPropagation())},o.prototype.onCanvasDbClick=function(t){this.isMove&&(this.end(),t.stopPropagation())},o.prototype.getSelectType=function(){return types_1.SelectType.Polygon},o.prototype.start=function(t){var e=this.context,n=this.status;e&&![types_1.ActionStatus.Running,types_1.ActionStatus.Destroy].includes(n)&&e&&(n=e.getCanvasEl())&&(i.prototype.start.call(this,t),t&&(this.style=t),this.trigger(types_1.ActionEvents.BeforeStart,{selectType:this.getSelectType(),actionType:types_1.ActionType.Draw}),null!=n&&n.addEventListener("mouseup",this.getCanvasClick()),this.status=types_1.ActionStatus.Running)},o.prototype.end=function(){var t=this.context;if(t){var e,n=t.getCanvasEl();if(n)return null!=n&&n.removeEventListener("mouseup",this.getCanvasClick()),null!=n&&n.removeEventListener("mousemove",this.getCanvasMousemove()),null!=n&&n.removeEventListener("dblclick",this.getCanvasDbClick()),t.clearDraw(),t.drawHistoryData(),this.fill(),this.status=types_1.ActionStatus.End,e={id:n=adhere_util_1.default.uuid(),type:this.getSelectType(),data:o.transformRealToOrigin(t,this.pointStack),style:this.style},this.startPoint=null,this.pointStack=[],this.isMove=!1,t.addHistoryData(e),this.trigger(types_1.ActionEvents.End,{selectType:this.getSelectType(),actionType:types_1.ActionType.Draw,data:e}),i.prototype.end.call(this),n}i.prototype.end.call(this)},o.prototype.destroy=function(){var t,e=this.context;e&&(t=e.getCanvasEl())&&(this.status===types_1.ActionStatus.Running&&(e.clearDraw(),e.drawHistoryData()),null!=t&&t.removeEventListener("mouseup",this.onCanvasClick),null!=t&&t.removeEventListener("mousemove",this.onCanvasMousemove),null!=t&&t.removeEventListener("dblclick",this.onCanvasDbClick),this.startPoint=null,this.pointStack=[],this.isMove=!1,this.status=types_1.ActionStatus.Destroy,this.trigger(types_1.ActionEvents.Destroy,{selectType:this.getSelectType(),actionType:types_1.ActionType.Draw})),i.prototype.destroy.call(this)},o}(DrawAction_1.default);exports.default=PolygonDrawAction;
//# sourceMappingURL=PolygonDrawAction.js.map
