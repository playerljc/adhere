"use strict";var __extends=this&&this.__extends||function(){var o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(t,e)};return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}}(),__createBinding=this&&this.__createBinding||(Object.create?function(t,e,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(e,i);n&&("get"in n?e.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return e[i]}}),Object.defineProperty(t,o,n)}:function(t,e,i,o){t[o=void 0===o?i:o]=e[i]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),__importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)"default"!==i&&Object.prototype.hasOwnProperty.call(t,i)&&__createBinding(e,t,i);return __setModuleDefault(e,t),e},__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},adhere_util_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("@baifendian/adhere-util"))),turf=__importStar(require("@turf/turf")),types_1=require("../types"),util_1=__importDefault(require("../util")),DrawAction_1=__importDefault(require("./DrawAction")),DiamondDrawAction=function(o){function a(){var t=o.call(this)||this;return t.startPoint=null,t.leftTopPoint=null,t.width=0,t.height=0,t.isMove=!1,t.onCanvasMouseDown=t.onCanvasMouseDown.bind(t),t.onCanvasMouseMove=t.onCanvasMouseMove.bind(t),t.onCanvasMouseUp=t.onCanvasMouseUp.bind(t),t}return __extends(a,o),a.booleanPointInData=function(t,e,i){var t=a.transformOriginToReal(t,i.data),i=t.leftTopPoint,o=t.width,t=t.height,n=o/2,s=t/2,e=turf.point([e.x,e.y]),o=turf.polygon([[[i.x,i.y+s],[i.x+n,i.y],[i.x+o,i.y+s],[i.x+n,i.y+t],[i.x,i.y+s]]]);return turf.booleanPointInPolygon(e,o)},a.prototype.draw=function(t){var e,i=this,o=i.context,n=i.startPoint,i=i.style,s=null==o?void 0:o.getCtx();o&&s&&((e=o.getCanvasEl())&&(t=adhere_util_1.default.clientToCtxPoint({event:t,rect:null==e?void 0:e.getBoundingClientRect()}),o.clearDraw(),o.drawHistoryData(),s.beginPath(),this.leftTopPoint=util_1.default.getRectLeftTopPoint({startPoint:n,targetPoint:t}),this.leftTopPoint&&(this.width=Math.abs(t.x-((null==n?void 0:n.x)||0)),this.height=Math.abs(t.y-((null==n?void 0:n.y)||0)),e=this.width/2,o=this.height/2,s.lineWidth=i.lineWidth,s.lineJoin=i.lineJoin,s.lineCap=i.lineCap,s.setLineDash(i.lineDash),s.lineDashOffset=i.lineDashOffset,s.strokeStyle=i.strokeStyle,s.fillStyle=i.fillStyle,s.moveTo(this.leftTopPoint.x,this.leftTopPoint.y+o),s.lineTo(this.leftTopPoint.x+e,this.leftTopPoint.y),s.lineTo(this.leftTopPoint.x+this.width,this.leftTopPoint.y+o),s.lineTo(this.leftTopPoint.x+e,this.leftTopPoint.y+this.height),s.stroke(),s.fill())))},a.draw=function(t,e,i){e&&i&&(i.style&&(e.lineWidth=i.style.lineWidth,e.lineJoin=i.style.lineJoin,e.lineCap=i.style.lineCap,e.setLineDash(i.style.lineDash),e.lineDashOffset=i.style.lineDashOffset,e.strokeStyle=i.style.strokeStyle,e.fillStyle=i.style.fillStyle,e.globalAlpha=i.style.globalAlpha||1),this.drawHistoryPath(t,e,i.data),e.stroke(),e.fill())},a.drawHistoryPath=function(t,e,i){var o;e.save(),e.beginPath(),i&&i.leftTopPoint&&(i=(t=a.transformOriginToReal(t,i)).width/2,o=t.height/2,e.moveTo(t.leftTopPoint.x,t.leftTopPoint.y+o),e.lineTo(t.leftTopPoint.x+i,t.leftTopPoint.y),e.lineTo(t.leftTopPoint.x+t.width,t.leftTopPoint.y+o),e.lineTo(t.leftTopPoint.x+i,t.leftTopPoint.y+t.height),e.stroke(),e.fill(),e.restore())},a.prototype.onCanvasMouseDown=function(t){var e;!this.context||(e=this.context.getCanvasEl())&&(this.startPoint=adhere_util_1.default.clientToCtxPoint({event:t,rect:null==e?void 0:e.getBoundingClientRect()}),null!=e&&e.addEventListener("mousemove",this.onCanvasMouseMove),null!=e&&e.addEventListener("mouseup",this.onCanvasMouseUp),t.stopPropagation())},a.prototype.onCanvasMouseMove=function(t){this.context&&(this.isMove=!0,this.draw(t),t.stopPropagation())},a.prototype.onCanvasMouseUp=function(t){this.isMove&&(this.end(t),t.stopPropagation())},a.transformOriginToReal=function(t,e){return{leftTopPoint:t.pointToPixel(e.leftTopPoint),width:t.actualToDistance(e.width),height:t.actualToDistance(e.height)}},a.transformRealToOrigin=function(t,e){return{leftTopPoint:t.pixelToPoint(e.leftTopPoint),width:t.distanceToActual(e.width),height:t.distanceToActual(e.height)}},a.prototype.getSelectType=function(){return types_1.SelectType.Diamond},a.prototype.start=function(t){var e;this.context&&![types_1.ActionStatus.Running,types_1.ActionStatus.Destroy].includes(this.status)&&(e=this.context.getCanvasEl())&&(o.prototype.start.call(this,t),t&&(this.style=t),this.trigger(types_1.ActionEvents.BeforeStart,{selectType:this.getSelectType(),actionType:types_1.ActionType.Draw}),null!=e&&e.addEventListener("mousedown",this.onCanvasMouseDown),this.status=types_1.ActionStatus.Running,this.trigger(types_1.ActionEvents.Start,{selectType:this.getSelectType(),actionType:types_1.ActionType.Draw}))},a.prototype.end=function(t){var e,i=this.context;i&&(e=i.getCanvasEl())&&(null!=e&&e.removeEventListener("mousedown",this.onCanvasMouseDown),null!=e&&e.removeEventListener("mousemove",this.onCanvasMouseMove),null!=e&&e.removeEventListener("mouseup",this.onCanvasMouseUp),t&&this.draw(t),this.status=types_1.ActionStatus.End,e={id:adhere_util_1.default.uuid(),type:this.getSelectType(),data:a.transformRealToOrigin(i,{leftTopPoint:this.leftTopPoint,width:this.width,height:this.height}),style:this.style},i.addHistoryData(e),this.startPoint=null,this.leftTopPoint=null,this.width=0,this.height=0,this.isMove=!1,this.trigger(types_1.ActionEvents.End,{selectType:this.getSelectType(),actionType:types_1.ActionType.Draw,data:e})),o.prototype.end.call(this,t)},a.prototype.destroy=function(){var t,e=this.context;e&&(t=e.getCanvasEl())&&(this.status===types_1.ActionStatus.Running&&(e.clearDraw(),e.drawHistoryData()),null!=t&&t.removeEventListener("mousedown",this.onCanvasMouseDown),null!=t&&t.removeEventListener("mousemove",this.onCanvasMouseMove),null!=t&&t.removeEventListener("mouseup",this.onCanvasMouseUp),this.startPoint=null,this.leftTopPoint=null,this.width=0,this.height=0,this.isMove=!1,this.status=types_1.ActionStatus.Destroy,this.trigger(types_1.ActionEvents.Destroy,{selectType:this.getSelectType(),actionType:types_1.ActionType.Draw})),o.prototype.destroy.call(this)},a}(DrawAction_1.default);exports.default=DiamondDrawAction;
//# sourceMappingURL=DiamondDrawAction.js.map
