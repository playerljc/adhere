var __extends=this&&this.__extends||function(){var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)};return function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();import*as turf from"@turf/turf";import MathUtil from"@baifendian/adhere-util/lib/math";import BaseUtil from"@baifendian/adhere-util/lib/base";import{ActionEvents,ActionStatus,ActionType,SelectType}from"../types";import DrawAction from"./DrawAction";import Util from"../util";var DiamondDrawAction=function(n){function t(){var t=n.call(this)||this;return t.startPoint=null,t.leftTopPoint=null,t.width=0,t.height=0,t.isMove=!1,t.onCanvasMouseDown=t.onCanvasMouseDown.bind(t),t.onCanvasMouseMove=t.onCanvasMouseMove.bind(t),t.onCanvasMouseUp=t.onCanvasMouseUp.bind(t),t}return __extends(t,n),t.booleanPointInData=function(t,e){var o=e.data,n=o.leftTopPoint,i=o.width,s=o.height,e=i/2,o=s/2,t=turf.point([t.x,t.y]),o=turf.polygon([[[n.x,n.y+o],[n.x+e,n.y],[n.x+i,n.y+o],[n.x+e,n.y+s],[n.x,n.y+o]]]);return turf.booleanPointInPolygon(t,o)},t.prototype.draw=function(t){var e=this,o=e.context,n=e.startPoint,i=e.style,s=null==o?void 0:o.getCtx();o&&s&&((e=o.getCanvasEl())&&(e=MathUtil.clientToCtxPoint({event:t,rect:null==e?void 0:e.getBoundingClientRect()}),o.clearDraw(),o.drawHistoryData(),s.beginPath(),this.leftTopPoint=Util.getRectLeftTopPoint({startPoint:n,targetPoint:e}),this.leftTopPoint&&(this.width=Math.abs(e.x-((null==n?void 0:n.x)||0)),this.height=Math.abs(e.y-((null==n?void 0:n.y)||0)),e=this.width/2,n=this.height/2,s.lineWidth=i.lineWidth,s.lineJoin=i.lineJoin,s.lineCap=i.lineCap,s.setLineDash(i.lineDash),s.lineDashOffset=i.lineDashOffset,s.strokeStyle=i.strokeStyle,s.fillStyle=i.fillStyle,s.moveTo(this.leftTopPoint.x,this.leftTopPoint.y+n),s.lineTo(this.leftTopPoint.x+e,this.leftTopPoint.y),s.lineTo(this.leftTopPoint.x+this.width,this.leftTopPoint.y+n),s.lineTo(this.leftTopPoint.x+e,this.leftTopPoint.y+this.height),s.stroke(),s.fill())))},t.prototype.onCanvasMouseDown=function(t){var e;!this.context||(e=this.context.getCanvasEl())&&(this.startPoint=MathUtil.clientToCtxPoint({event:t,rect:null==e?void 0:e.getBoundingClientRect()}),null!=e&&e.addEventListener("mousemove",this.onCanvasMouseMove),null!=e&&e.addEventListener("mouseup",this.onCanvasMouseUp))},t.prototype.onCanvasMouseMove=function(t){this.context&&(this.isMove=!0,this.draw(t))},t.prototype.onCanvasMouseUp=function(t){this.isMove&&(this.end(t),t.stopPropagation())},t.draw=function(t,e){t&&e&&(e.style&&(t.lineWidth=e.style.lineWidth,t.lineJoin=e.style.lineJoin,t.lineCap=e.style.lineCap,t.setLineDash(e.style.lineDash),t.lineDashOffset=e.style.lineDashOffset,t.strokeStyle=e.style.strokeStyle,t.fillStyle=e.style.fillStyle,t.globalAlpha=e.style.globalAlpha||1),this.drawHistoryPath(t,e.data),t.stroke(),t.fill())},t.drawHistoryPath=function(t,e){var o,n;t.beginPath(),e&&e.leftTopPoint&&(o=e.width/2,n=e.height/2,t.moveTo(e.leftTopPoint.x,e.leftTopPoint.y+n),t.lineTo(e.leftTopPoint.x+o,e.leftTopPoint.y),t.lineTo(e.leftTopPoint.x+e.width,e.leftTopPoint.y+n),t.lineTo(e.leftTopPoint.x+o,e.leftTopPoint.y+e.height))},t.prototype.start=function(t){var e;!this.context||[ActionStatus.Running,ActionStatus.Destroy].includes(this.status)||(e=this.context.getCanvasEl())&&(n.prototype.start.call(this,t),t&&(this.style=t),this.trigger(ActionEvents.BeforeStart,{selectType:SelectType.Diamond,actionType:ActionType.Draw}),null!=e&&e.addEventListener("mousedown",this.onCanvasMouseDown),this.status=ActionStatus.Running,this.trigger(ActionEvents.Start,{selectType:SelectType.Diamond,actionType:ActionType.Draw}))},t.prototype.end=function(t){var e,o=this.context;o&&(e=o.getCanvasEl())&&(null!=e&&e.removeEventListener("mousedown",this.onCanvasMouseDown),null!=e&&e.removeEventListener("mousemove",this.onCanvasMouseMove),null!=e&&e.removeEventListener("mouseup",this.onCanvasMouseUp),t&&this.draw(t),this.status=ActionStatus.End,e={id:BaseUtil.uuid(),type:SelectType.Diamond,data:{leftTopPoint:this.leftTopPoint,width:this.width,height:this.height},style:this.style},o.addHistoryData(e),this.startPoint=null,this.leftTopPoint=null,this.width=0,this.height=0,this.isMove=!1,this.trigger(ActionEvents.End,{selectType:SelectType.Diamond,actionType:ActionType.Draw,data:e})),n.prototype.end.call(this,t)},t.prototype.destroy=function(){var t,e=this.context;e&&(t=e.getCanvasEl())&&(this.status===ActionStatus.Running&&(e.clearDraw(),e.drawHistoryData()),null!=t&&t.removeEventListener("mousedown",this.onCanvasMouseDown),null!=t&&t.removeEventListener("mousemove",this.onCanvasMouseMove),null!=t&&t.removeEventListener("mouseup",this.onCanvasMouseUp),this.startPoint=null,this.leftTopPoint=null,this.width=0,this.height=0,this.isMove=!1,this.status=ActionStatus.Destroy,this.trigger(ActionEvents.Destroy,{selectType:SelectType.Diamond,actionType:ActionType.Draw})),n.prototype.destroy.call(this)},t}(DrawAction);export default DiamondDrawAction;
//# sourceMappingURL=DiamondDrawAction.js.map