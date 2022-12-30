"use strict";var __extends=this&&this.__extends||function(){var o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};return function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},adhere_util_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("@baifendian/adhere-util"))),types_1=require("../types"),DrawAction_1=__importDefault(require("./DrawAction")),FreeDrawAction=function(o){function s(){var t=o.call(this)||this;return t.startPoint=null,t.isMove=!1,t.points=[],t.onCanvasMouseDown=t.onCanvasMouseDown.bind(t),t.onCanvasMouseMove=t.onCanvasMouseMove.bind(t),t.onCanvasMouseUp=t.onCanvasMouseUp.bind(t),t}return __extends(s,o),s.prototype.draw=function(t,e){void 0===e&&(e=!1);var n,o=this.context,s=this.style,i=null==o?void 0:o.getCtx();o&&i&&(n=o.getCanvasEl())&&(t=adhere_util_1.default.clientToCtxPoint({event:t,rect:null==n?void 0:n.getBoundingClientRect()}))&&(this.points.push(t),o.clearDraw(),o.drawHistoryData(),i.beginPath(),i.lineWidth=s.lineWidth,i.lineJoin=s.lineJoin,i.lineCap=s.lineCap,i.setLineDash(s.lineDash),i.lineDashOffset=s.lineDashOffset,i.strokeStyle=s.strokeStyle,i.fillStyle=s.fillStyle,this.points.forEach(function(t,e){0===e?i.moveTo(t.x,t.y):i.lineTo(t.x,t.y)}),e&&i.closePath(),i.stroke(),i.fill())},s.prototype.onCanvasMouseDown=function(t){var e;!this.context||(e=this.context.getCanvasEl())&&(this.startPoint=adhere_util_1.default.clientToCtxPoint({event:t,rect:null==e?void 0:e.getBoundingClientRect()}),this.startPoint&&(this.points.push(this.startPoint),null!=e&&e.addEventListener("mousemove",this.onCanvasMouseMove),null!=e&&e.addEventListener("mouseup",this.onCanvasMouseUp),t.stopPropagation()))},s.prototype.onCanvasMouseMove=function(t){this.context&&(this.isMove=!0,this.draw(t),t.stopPropagation())},s.prototype.onCanvasMouseUp=function(t){this.isMove&&(this.end(t),t.stopPropagation())},s.draw=function(t,e,n){e&&n&&(n.style&&(e.lineWidth=n.style.lineWidth,e.lineJoin=n.style.lineJoin,e.lineCap=n.style.lineCap,e.setLineDash(n.style.lineDash),e.lineDashOffset=n.style.lineDashOffset,e.strokeStyle=n.style.strokeStyle,e.fillStyle=n.style.fillStyle,e.globalAlpha=n.style.globalAlpha||1),this.drawHistoryPath(t,e,n.data),e.stroke(),e.fill())},s.drawHistoryPath=function(t,n,e){n.save(),n.beginPath();e=e.points;(s.transformOriginToReal(t,void 0===e?[]:e)||[]).forEach(function(t,e){0===e?n.moveTo(t.x,t.y):n.lineTo(t.x,t.y)}),n.closePath(),n.stroke(),n.fill(),n.restore()},s.transformRealToOrigin=function(e,t){return t.map(function(t){return e.pixelToPoint(t)})},s.transformOriginToReal=function(e,t){return t.map(function(t){return e.pointToPixel(t)})},s.prototype.getSelectType=function(){return types_1.SelectType.Free},s.prototype.start=function(t){var e;this.context&&![types_1.ActionStatus.Running,types_1.ActionStatus.Destroy].includes(this.status)&&(e=this.context.getCanvasEl())&&(o.prototype.start.call(this,t),t&&(this.style=t),this.trigger(types_1.ActionEvents.BeforeStart,{selectType:this.getSelectType(),actionType:types_1.ActionType.Draw}),null!=e&&e.addEventListener("mousedown",this.onCanvasMouseDown),this.status=types_1.ActionStatus.Running,this.trigger(types_1.ActionEvents.Start,{selectType:this.getSelectType(),actionType:types_1.ActionType.Draw}))},s.prototype.end=function(t){var e,n=this.context;n&&(e=n.getCanvasEl())&&(null!=e&&e.removeEventListener("mousedown",this.onCanvasMouseDown),null!=e&&e.removeEventListener("mousemove",this.onCanvasMouseMove),null!=e&&e.removeEventListener("mouseup",this.onCanvasMouseUp),this.draw(t,!0),this.status=types_1.ActionStatus.End,e={id:adhere_util_1.default.uuid(),type:this.getSelectType(),data:{points:s.transformRealToOrigin(n,this.points)},style:this.style},n.addHistoryData(e),this.startPoint=null,this.points=[],this.isMove=!1,this.trigger(types_1.ActionEvents.End,{selectType:this.getSelectType(),actionType:types_1.ActionType.Draw,data:e})),o.prototype.end.call(this,t)},s.prototype.destroy=function(){var t,e=this.context;e&&(t=e.getCanvasEl())&&(this.status===types_1.ActionStatus.Running&&(e.clearDraw(),e.drawHistoryData()),null!=t&&t.removeEventListener("mousedown",this.onCanvasMouseDown),null!=t&&t.removeEventListener("mousemove",this.onCanvasMouseMove),null!=t&&t.removeEventListener("mouseup",this.onCanvasMouseUp),this.startPoint=null,this.points=[],this.isMove=!1,this.status=types_1.ActionStatus.Destroy,this.trigger(types_1.ActionEvents.Destroy,{selectType:this.getSelectType(),actionType:types_1.ActionType.Draw})),o.prototype.destroy.call(this)},s}(DrawAction_1.default);exports.default=FreeDrawAction;
//# sourceMappingURL=FreeDrawAction.js.map
