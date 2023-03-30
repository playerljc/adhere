"use strict";var __extends=this&&this.__extends||function(){var s=function(t,e){return(s=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,e){t.__proto__=e}:function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}))(t,e)};return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}s(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},adhere_util_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("@baifendian/adhere-util"))),types_1=require("../types"),DrawAction_1=__importDefault(require("./DrawAction")),FreeDrawAction=function(s){function t(){var t=s.call(this)||this;return t.startPoint=null,t.isMove=!1,t.points=[],t.onCanvasMouseDown=t.onCanvasMouseDown.bind(t),t.onCanvasMouseMove=t.onCanvasMouseMove.bind(t),t.onCanvasMouseUp=t.onCanvasMouseUp.bind(t),t}return __extends(t,s),t.prototype.draw=function(t,e){void 0===e&&(e=!1);var n,s=this.context,o=this.style,i=null==s?void 0:s.getCtx();s&&i&&(n=s.getCanvasEl())&&(t=adhere_util_1.default.clientToCtxPoint({event:t,rect:null==n?void 0:n.getBoundingClientRect()}))&&(this.points.push(t),s.clearDraw(),s.drawHistoryData(),i.beginPath(),i.lineWidth=o.lineWidth,i.lineJoin=o.lineJoin,i.lineCap=o.lineCap,i.setLineDash(o.lineDash),i.lineDashOffset=o.lineDashOffset,i.strokeStyle=o.strokeStyle,i.fillStyle=o.fillStyle,this.points.forEach(function(t,e){0===e?i.moveTo(t.x,t.y):i.lineTo(t.x,t.y)}),e&&i.closePath(),i.stroke(),i.fill())},t.prototype.onCanvasMouseDown=function(t){var e;this.context&&(e=this.context.getCanvasEl())&&(this.startPoint=adhere_util_1.default.clientToCtxPoint({event:t,rect:null==e?void 0:e.getBoundingClientRect()}),this.startPoint)&&(this.points.push(this.startPoint),null!=e&&e.addEventListener("mousemove",this.onCanvasMouseMove),null!=e)&&e.addEventListener("mouseup",this.onCanvasMouseUp)},t.prototype.onCanvasMouseMove=function(t){this.context&&(this.isMove=!0,this.draw(t))},t.prototype.onCanvasMouseUp=function(t){this.isMove&&(this.end(t),t.stopPropagation())},t.draw=function(t,e){t&&e&&(e.style&&(t.lineWidth=e.style.lineWidth,t.lineJoin=e.style.lineJoin,t.lineCap=e.style.lineCap,t.setLineDash(e.style.lineDash),t.lineDashOffset=e.style.lineDashOffset,t.strokeStyle=e.style.strokeStyle,t.fillStyle=e.style.fillStyle,t.globalAlpha=e.style.globalAlpha||1),this.drawHistoryPath(t,e.data),t.stroke(),t.fill())},t.drawHistoryPath=function(n,t){n.beginPath();t=t.points;((void 0===t?[]:t)||[]).forEach(function(t,e){0===e?n.moveTo(t.x,t.y):n.lineTo(t.x,t.y)}),n.closePath()},t.prototype.start=function(t){var e;this.context&&![types_1.ActionStatus.Running,types_1.ActionStatus.Destroy].includes(this.status)&&(e=this.context.getCanvasEl())&&(s.prototype.start.call(this,t),t&&(this.style=t),this.trigger(types_1.ActionEvents.BeforeStart,{selectType:types_1.SelectType.Free,actionType:types_1.ActionType.Draw}),null!=e&&e.addEventListener("mousedown",this.onCanvasMouseDown),this.status=types_1.ActionStatus.Running,this.trigger(types_1.ActionEvents.Start,{selectType:types_1.SelectType.Free,actionType:types_1.ActionType.Draw}))},t.prototype.end=function(t){var e,n=this.context;n&&(e=n.getCanvasEl())&&(null!=e&&e.removeEventListener("mousedown",this.onCanvasMouseDown),null!=e&&e.removeEventListener("mousemove",this.onCanvasMouseMove),null!=e&&e.removeEventListener("mouseup",this.onCanvasMouseUp),this.draw(t,!0),this.status=types_1.ActionStatus.End,e={id:adhere_util_1.default.uuid(),type:types_1.SelectType.Free,data:{points:JSON.parse(JSON.stringify(this.points))},style:this.style},n.addHistoryData(e),this.startPoint=null,this.points=[],this.isMove=!1,this.trigger(types_1.ActionEvents.End,{selectType:types_1.SelectType.Free,actionType:types_1.ActionType.Draw,data:e})),s.prototype.end.call(this,t)},t.prototype.destroy=function(){var t,e=this.context;e&&(t=e.getCanvasEl())&&(this.status===types_1.ActionStatus.Running&&(e.clearDraw(),e.drawHistoryData()),null!=t&&t.removeEventListener("mousedown",this.onCanvasMouseDown),null!=t&&t.removeEventListener("mousemove",this.onCanvasMouseMove),null!=t&&t.removeEventListener("mouseup",this.onCanvasMouseUp),this.startPoint=null,this.points=[],this.isMove=!1,this.status=types_1.ActionStatus.Destroy,this.trigger(types_1.ActionEvents.Destroy,{selectType:types_1.SelectType.Free,actionType:types_1.ActionType.Draw})),s.prototype.destroy.call(this)},t}(DrawAction_1.default);exports.default=FreeDrawAction;
//# sourceMappingURL=FreeDrawAction.js.map
