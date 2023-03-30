"use strict";var __extends=this&&this.__extends||function(){var i=function(t,e){return(i=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,e){t.__proto__=e}:function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}))(t,e)};return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),__createBinding=this&&this.__createBinding||(Object.create?function(t,e,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(e,n);o&&("get"in o?e.__esModule:!o.writable&&!o.configurable)||(o={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,i,o)}:function(t,e,n,i){t[i=void 0===i?n:i]=e[n]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),__importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&__createBinding(e,t,n);return __setModuleDefault(e,t),e},__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},adhere_util_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("@baifendian/adhere-util"))),turf=__importStar(require("@turf/turf")),types_1=require("../types"),DrawAction_1=__importDefault(require("./DrawAction")),StartDrawAction=function(i){function l(){var t=i.call(this)||this;return t.centerPoint=null,t.outRadius=0,t.innerRadius=0,t.isMove=!1,t.onCanvasMouseDown=t.onCanvasMouseDown.bind(t),t.onCanvasMouseMove=t.onCanvasMouseMove.bind(t),t.onCanvasMouseUp=t.onCanvasMouseUp.bind(t),t}return __extends(l,i),l.booleanPointInData=function(t,e,n){for(var t=l.transformOriginToReal(t,n.data),i=t.center,o=t.outRadius,s=t.innerRadius,n=turf.point([e.x,e.y]),a=72,r=[],u=0;u<5;u++)r.push({x:Math.cos((18+u*a)/180*Math.PI)*o+i.x,y:-Math.sin((18+u*a)/180*Math.PI)*o+i.y}),r.push({x:Math.cos((54+u*a)/180*Math.PI)*s+i.x,y:-Math.sin((54+u*a)/180*Math.PI)*s+i.y});t=r.map(function(t){return[t.x,t.y]}),t.push(t[0]),e=turf.polygon([t]);return turf.booleanPointInPolygon(n,e)},l.drawStart=function(t){var e=t.context,n=t.ctx,t=t.data;if(t&&n){for(var i=t.style,e=l.transformOriginToReal(e,t.data),o=e.center,s=e.outRadius,a=e.innerRadius,r=(n.save(),n.beginPath(),0);r<5;r++)i&&(n.lineWidth=i.lineWidth,n.lineJoin=i.lineJoin,n.lineCap=i.lineCap,n.setLineDash(i.lineDash),n.lineDashOffset=i.lineDashOffset,n.strokeStyle=i.strokeStyle,n.fillStyle=i.fillStyle),n.lineTo(Math.cos((18+72*r)/180*Math.PI)*s+o.x,-Math.sin((18+72*r)/180*Math.PI)*s+o.y),n.lineTo(Math.cos((54+72*r)/180*Math.PI)*a+o.x,-Math.sin((54+72*r)/180*Math.PI)*a+o.y);n.stroke(),n.fill(),n.restore()}},l.prototype.draw=function(t){var e,n=this.context,i=this.centerPoint,o=null==n?void 0:n.getCtx();n&&i&&o&&(e=n.getCanvasEl())&&this.centerPoint&&(t=adhere_util_1.default.clientToCtxPoint({event:t,rect:null==e?void 0:e.getBoundingClientRect()}),n.clearDraw(),n.drawHistoryData(),this.outRadius=adhere_util_1.default.getDistanceByBetweenPoint({p1:i,p2:t}),this.innerRadius=this.outRadius/2,l.drawStart({context:n,ctx:o,data:{data:l.transformRealToOrigin(n,{center:this.centerPoint,outRadius:this.outRadius,innerRadius:this.innerRadius}),style:this.style}}))},l.draw=function(t,e,n){e&&n&&(n.style&&(e.lineWidth=n.style.lineWidth,e.lineJoin=n.style.lineJoin,e.lineCap=n.style.lineCap,e.setLineDash(n.style.lineDash),e.lineDashOffset=n.style.lineDashOffset,e.strokeStyle=n.style.strokeStyle,e.fillStyle=n.style.fillStyle,e.globalAlpha=n.style.globalAlpha||1),this.drawHistoryPath(t,e,n.data),e.stroke(),e.fill())},l.drawHistoryPath=function(t,e,n){n&&l.drawStart({context:t,ctx:e,data:{data:n}})},l.prototype.onCanvasMouseDown=function(t){var e;this.context&&(e=this.context.getCanvasEl())&&(this.centerPoint=adhere_util_1.default.clientToCtxPoint({event:t,rect:null==e?void 0:e.getBoundingClientRect()}),null!=e&&e.addEventListener("mousemove",this.onCanvasMouseMove),null!=e&&e.addEventListener("mouseup",this.onCanvasMouseUp),t.stopPropagation())},l.prototype.onCanvasMouseMove=function(t){this.context&&(this.isMove=!0,this.draw(t),t.stopPropagation())},l.prototype.onCanvasMouseUp=function(t){this.isMove&&(this.end(t),t.stopPropagation())},l.transformOriginToReal=function(t,e){return{center:t.pointToPixel(e.center),outRadius:t.actualToDistance(e.outRadius),innerRadius:t.actualToDistance(e.innerRadius)}},l.transformRealToOrigin=function(t,e){return{center:t.pixelToPoint(e.center),outRadius:t.distanceToActual(e.outRadius),innerRadius:t.distanceToActual(e.innerRadius)}},l.prototype.getSelectType=function(){return types_1.SelectType.Start},l.prototype.start=function(t){var e;this.context&&![types_1.ActionStatus.Running,types_1.ActionStatus.Destroy].includes(this.status)&&(e=this.context.getCanvasEl())&&(i.prototype.start.call(this,t),t&&(this.style=t),this.trigger(types_1.ActionEvents.BeforeStart,{selectType:this.getSelectType(),actionType:types_1.ActionType.Draw}),null!=e&&e.addEventListener("mousedown",this.onCanvasMouseDown),this.status=types_1.ActionStatus.Running,this.trigger(types_1.ActionEvents.Start,{selectType:this.getSelectType(),actionType:types_1.ActionType.Draw}))},l.prototype.end=function(t){var e,n=this.context;n&&(e=n.getCanvasEl())&&this.centerPoint&&this.outRadius&&this.innerRadius&&(null!=e&&e.removeEventListener("mousedown",this.onCanvasMouseDown),null!=e&&e.removeEventListener("mousemove",this.onCanvasMouseMove),null!=e&&e.removeEventListener("mouseup",this.onCanvasMouseUp),t&&this.draw(t),this.status=types_1.ActionStatus.End,e={id:adhere_util_1.default.uuid(),type:this.getSelectType(),data:l.transformRealToOrigin(n,{center:this.centerPoint,outRadius:this.outRadius,innerRadius:this.innerRadius}),style:this.style},n.addHistoryData(e),this.centerPoint=null,this.outRadius=0,this.innerRadius=0,this.isMove=!1,this.trigger(types_1.ActionEvents.End,{selectType:this.getSelectType(),actionType:types_1.ActionType.Draw,data:e})),i.prototype.end.call(this,t)},l.prototype.destroy=function(){var t,e=this.context;e&&(t=e.getCanvasEl())&&(this.status===types_1.ActionStatus.Running&&(e.clearDraw(),e.drawHistoryData()),null!=t&&t.removeEventListener("mousedown",this.onCanvasMouseDown),null!=t&&t.removeEventListener("mousemove",this.onCanvasMouseMove),null!=t&&t.removeEventListener("mouseup",this.onCanvasMouseUp),this.centerPoint=null,this.outRadius=0,this.innerRadius=0,this.isMove=!1,this.status=types_1.ActionStatus.Destroy,this.trigger(types_1.ActionEvents.Destroy,{selectType:this.getSelectType(),actionType:types_1.ActionType.Draw})),i.prototype.destroy.call(this)},l}(DrawAction_1.default);exports.default=StartDrawAction;
//# sourceMappingURL=StartDrawAction.js.map
