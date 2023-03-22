"use strict";var __extends=this&&this.__extends||function(){var o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)};return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),__createBinding=this&&this.__createBinding||(Object.create?function(t,e,n,o){void 0===o&&(o=n);var i=Object.getOwnPropertyDescriptor(e,n);i&&("get"in i?e.__esModule:!i.writable&&!i.configurable)||(i={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,o,i)}:function(t,e,n,o){t[o=void 0===o?n:o]=e[n]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),__importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&__createBinding(e,t,n);return __setModuleDefault(e,t),e},__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},adhere_util_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("@baifendian/adhere-util"))),turf=__importStar(require("@turf/turf")),types_1=require("../types"),util_1=__importDefault(require("../util")),DrawAction_1=__importDefault(require("./DrawAction")),DiamondDrawAction=function(o){function t(){var t=o.call(this)||this;return t.startPoint=null,t.leftTopPoint=null,t.width=0,t.height=0,t.isMove=!1,t.onCanvasMouseDown=t.onCanvasMouseDown.bind(t),t.onCanvasMouseMove=t.onCanvasMouseMove.bind(t),t.onCanvasMouseUp=t.onCanvasMouseUp.bind(t),t}return __extends(t,o),t.booleanPointInData=function(t,e){var e=e.data,n=e.leftTopPoint,o=e.width,e=e.height,i=o/2,s=e/2,t=turf.point([t.x,t.y]),o=turf.polygon([[[n.x,n.y+s],[n.x+i,n.y],[n.x+o,n.y+s],[n.x+i,n.y+e],[n.x,n.y+s]]]);return turf.booleanPointInPolygon(t,o)},t.prototype.draw=function(t){var e,n=this,o=n.context,i=n.startPoint,n=n.style,s=null==o?void 0:o.getCtx();o&&s&&((e=o.getCanvasEl())&&(t=adhere_util_1.default.clientToCtxPoint({event:t,rect:null==e?void 0:e.getBoundingClientRect()}),o.clearDraw(),o.drawHistoryData(),s.beginPath(),this.leftTopPoint=util_1.default.getRectLeftTopPoint({startPoint:i,targetPoint:t}),this.leftTopPoint&&(this.width=Math.abs(t.x-((null==i?void 0:i.x)||0)),this.height=Math.abs(t.y-((null==i?void 0:i.y)||0)),e=this.width/2,o=this.height/2,s.lineWidth=n.lineWidth,s.lineJoin=n.lineJoin,s.lineCap=n.lineCap,s.setLineDash(n.lineDash),s.lineDashOffset=n.lineDashOffset,s.strokeStyle=n.strokeStyle,s.fillStyle=n.fillStyle,s.moveTo(this.leftTopPoint.x,this.leftTopPoint.y+o),s.lineTo(this.leftTopPoint.x+e,this.leftTopPoint.y),s.lineTo(this.leftTopPoint.x+this.width,this.leftTopPoint.y+o),s.lineTo(this.leftTopPoint.x+e,this.leftTopPoint.y+this.height),s.stroke(),s.fill())))},t.prototype.onCanvasMouseDown=function(t){var e;!this.context||(e=this.context.getCanvasEl())&&(this.startPoint=adhere_util_1.default.clientToCtxPoint({event:t,rect:null==e?void 0:e.getBoundingClientRect()}),null!=e&&e.addEventListener("mousemove",this.onCanvasMouseMove),null!=e&&e.addEventListener("mouseup",this.onCanvasMouseUp))},t.prototype.onCanvasMouseMove=function(t){this.context&&(this.isMove=!0,this.draw(t))},t.prototype.onCanvasMouseUp=function(t){this.isMove&&(this.end(t),t.stopPropagation())},t.draw=function(t,e){t&&e&&(e.style&&(t.lineWidth=e.style.lineWidth,t.lineJoin=e.style.lineJoin,t.lineCap=e.style.lineCap,t.setLineDash(e.style.lineDash),t.lineDashOffset=e.style.lineDashOffset,t.strokeStyle=e.style.strokeStyle,t.fillStyle=e.style.fillStyle,t.globalAlpha=e.style.globalAlpha||1),this.drawHistoryPath(t,e.data),t.stroke(),t.fill())},t.drawHistoryPath=function(t,e){var n,o;t.beginPath(),e&&e.leftTopPoint&&(n=e.width/2,o=e.height/2,t.moveTo(e.leftTopPoint.x,e.leftTopPoint.y+o),t.lineTo(e.leftTopPoint.x+n,e.leftTopPoint.y),t.lineTo(e.leftTopPoint.x+e.width,e.leftTopPoint.y+o),t.lineTo(e.leftTopPoint.x+n,e.leftTopPoint.y+e.height))},t.prototype.start=function(t){var e;this.context&&![types_1.ActionStatus.Running,types_1.ActionStatus.Destroy].includes(this.status)&&(e=this.context.getCanvasEl())&&(o.prototype.start.call(this,t),t&&(this.style=t),this.trigger(types_1.ActionEvents.BeforeStart,{selectType:types_1.SelectType.Diamond,actionType:types_1.ActionType.Draw}),null!=e&&e.addEventListener("mousedown",this.onCanvasMouseDown),this.status=types_1.ActionStatus.Running,this.trigger(types_1.ActionEvents.Start,{selectType:types_1.SelectType.Diamond,actionType:types_1.ActionType.Draw}))},t.prototype.end=function(t){var e,n=this.context;n&&(e=n.getCanvasEl())&&(null!=e&&e.removeEventListener("mousedown",this.onCanvasMouseDown),null!=e&&e.removeEventListener("mousemove",this.onCanvasMouseMove),null!=e&&e.removeEventListener("mouseup",this.onCanvasMouseUp),t&&this.draw(t),this.status=types_1.ActionStatus.End,e={id:adhere_util_1.default.uuid(),type:types_1.SelectType.Diamond,data:{leftTopPoint:this.leftTopPoint,width:this.width,height:this.height},style:this.style},n.addHistoryData(e),this.startPoint=null,this.leftTopPoint=null,this.width=0,this.height=0,this.isMove=!1,this.trigger(types_1.ActionEvents.End,{selectType:types_1.SelectType.Diamond,actionType:types_1.ActionType.Draw,data:e})),o.prototype.end.call(this,t)},t.prototype.destroy=function(){var t,e=this.context;e&&(t=e.getCanvasEl())&&(this.status===types_1.ActionStatus.Running&&(e.clearDraw(),e.drawHistoryData()),null!=t&&t.removeEventListener("mousedown",this.onCanvasMouseDown),null!=t&&t.removeEventListener("mousemove",this.onCanvasMouseMove),null!=t&&t.removeEventListener("mouseup",this.onCanvasMouseUp),this.startPoint=null,this.leftTopPoint=null,this.width=0,this.height=0,this.isMove=!1,this.status=types_1.ActionStatus.Destroy,this.trigger(types_1.ActionEvents.Destroy,{selectType:types_1.SelectType.Diamond,actionType:types_1.ActionType.Draw})),o.prototype.destroy.call(this)},t}(DrawAction_1.default);exports.default=DiamondDrawAction;
//# sourceMappingURL=DiamondDrawAction.js.map
