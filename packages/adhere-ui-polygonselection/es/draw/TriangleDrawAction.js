var __extends=this&&this.__extends||function(){var o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};return function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),__spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var o=Array(t),i=0,e=0;e<n;e++)for(var s=arguments[e],a=0,r=s.length;a<r;a++,i++)o[i]=s[a];return o};import BaseUtil from"@baifendian/adhere-util";import*as turf from"@turf/turf";import{ActionEvents,ActionStatus,ActionType,SelectType}from"../types";import Util from"../util";import DrawAction from"./DrawAction";var TriangleDrawAction=function(o){function t(){var t=o.call(this)||this;return t.startPoint=null,t.points=[],t.isMove=!1,t.onCanvasMouseDown=t.onCanvasMouseDown.bind(t),t.onCanvasMouseMove=t.onCanvasMouseMove.bind(t),t.onCanvasMouseUp=t.onCanvasMouseUp.bind(t),t}return __extends(t,o),t.booleanPointInData=function(t,e){e=__spreadArrays(e.data.points||[]),e.push(e[0]),t=turf.point([t.x,t.y]),e=turf.polygon([e.map(function(t){return[t.x,t.y]})]);return turf.booleanPointInPolygon(t,e)},t.prototype.draw=function(t){var e,n=this,o=n.context,i=n.startPoint,n=n.style,s=null==o?void 0:o.getCtx();o&&s&&((e=o.getCanvasEl())&&(t=BaseUtil.clientToCtxPoint({event:t,rect:null==e?void 0:e.getBoundingClientRect()}),o.clearDraw(),o.drawHistoryData(),s.beginPath(),s.lineWidth=n.lineWidth,s.lineJoin=n.lineJoin,s.lineCap=n.lineCap,s.setLineDash(n.lineDash),s.lineDashOffset=n.lineDashOffset,s.strokeStyle=n.strokeStyle,s.fillStyle=n.fillStyle,this.points=Util.triangle({startPoint:i,targetPoint:t}),s.moveTo(this.points[0].x,this.points[0].y),s.lineTo(this.points[1].x,this.points[1].y),s.lineTo(this.points[2].x,this.points[2].y),s.closePath(),s.stroke(),s.fill()))},t.prototype.onCanvasMouseDown=function(t){var e;!this.context||(e=this.context.getCanvasEl())&&(this.startPoint=BaseUtil.clientToCtxPoint({event:t,rect:null==e?void 0:e.getBoundingClientRect()}),null!=e&&e.addEventListener("mousemove",this.onCanvasMouseMove),null!=e&&e.addEventListener("mouseup",this.onCanvasMouseUp))},t.prototype.onCanvasMouseMove=function(t){this.context&&(this.isMove=!0,this.draw(t))},t.prototype.onCanvasMouseUp=function(t){this.isMove&&(this.end(t),t.stopPropagation())},t.draw=function(t,e){t&&e&&(e.style&&(t.lineWidth=e.style.lineWidth,t.lineJoin=e.style.lineJoin,t.lineCap=e.style.lineCap,t.setLineDash(e.style.lineDash),t.lineDashOffset=e.style.lineDashOffset,t.strokeStyle=e.style.strokeStyle,t.fillStyle=e.style.fillStyle,t.globalAlpha=e.style.globalAlpha||1),this.drawHistoryPath(t,e.data),t.stroke(),t.fill())},t.drawHistoryPath=function(t,e){t.beginPath(),t.moveTo(e.points[0].x,e.points[0].y),t.lineTo(e.points[1].x,e.points[1].y),t.lineTo(e.points[2].x,e.points[2].y)},t.prototype.start=function(t){var e;this.context&&![ActionStatus.Running,ActionStatus.Destroy].includes(this.status)&&(e=this.context.getCanvasEl())&&(o.prototype.start.call(this,t),t&&(this.style=t),this.trigger(ActionEvents.BeforeStart,{selectType:SelectType.Triangle,actionType:ActionType.Draw}),null!=e&&e.addEventListener("mousedown",this.onCanvasMouseDown),this.status=ActionStatus.Running,this.trigger(ActionEvents.Start,{selectType:SelectType.Triangle,actionType:ActionType.Draw}))},t.prototype.end=function(t){var e,n=this.context;n&&(e=n.getCanvasEl())&&(null!=e&&e.removeEventListener("mousedown",this.onCanvasMouseDown),null!=e&&e.removeEventListener("mousemove",this.onCanvasMouseMove),null!=e&&e.removeEventListener("mouseup",this.onCanvasMouseUp),t&&this.draw(t),this.status=ActionStatus.End,e={id:BaseUtil.uuid(),type:SelectType.Triangle,data:{points:JSON.parse(JSON.stringify(this.points))},style:this.style},n.addHistoryData(e),this.startPoint=null,this.points=[],this.isMove=!1,this.trigger(ActionEvents.End,{selectType:SelectType.Triangle,actionType:ActionType.Draw,data:e})),o.prototype.end.call(this,t)},t.prototype.destroy=function(){var t,e=this.context;e&&(t=e.getCanvasEl())&&(this.status===ActionStatus.Running&&(e.clearDraw(),e.drawHistoryData()),null!=t&&t.removeEventListener("mousedown",this.onCanvasMouseDown),null!=t&&t.removeEventListener("mousemove",this.onCanvasMouseMove),null!=t&&t.removeEventListener("mouseup",this.onCanvasMouseUp),this.startPoint=null,this.points=[],this.isMove=!1,this.status=ActionStatus.Destroy,this.trigger(ActionEvents.Destroy,{selectType:SelectType.Triangle,actionType:ActionType.Draw})),o.prototype.destroy.call(this)},t}(DrawAction);export default TriangleDrawAction;
//# sourceMappingURL=TriangleDrawAction.js.map
