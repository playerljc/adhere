var __extends=this&&this.__extends||function(){var i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};return function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}();import*as turf from"@turf/turf";import MathUtil from"@baifendian/adhere-util/lib/math";import BaseUtil from"@baifendian/adhere-util/lib/base";import{ActionEvents,ActionStatus,ActionType,SelectType}from"../types";import DrawAction from"./DrawAction";import Util from"../util";var RectangleDrawAction=function(i){function o(){var t=i.call(this)||this;return t.startPoint=null,t.leftTopPoint=null,t.width=0,t.height=0,t.isMove=!1,t.onCanvasMouseDown=t.onCanvasMouseDown.bind(t),t.onCanvasMouseMove=t.onCanvasMouseMove.bind(t),t.onCanvasMouseUp=t.onCanvasMouseUp.bind(t),t}return __extends(o,i),o.booleanPointInData=function(t,e,n){var i=o.transformOriginToReal(t,n.data),t=i.leftTopPoint,n=i.width,i=i.height,e=turf.point([e.x,e.y]),t=turf.polygon([[[t.x,t.y],[t.x+n,t.y],[t.x+n,t.y+i],[t.x,t.y+i],[t.x,t.y]]]);return turf.booleanPointInPolygon(e,t)},o.prototype.draw=function(t){var e=this,n=e.context,i=e.startPoint,o=e.style,s=null==n?void 0:n.getCtx();n&&s&&((e=n.getCanvasEl())&&(e=MathUtil.clientToCtxPoint({event:t,rect:null==e?void 0:e.getBoundingClientRect()}),n.clearDraw(),n.drawHistoryData(),s.beginPath(),this.leftTopPoint=Util.getRectLeftTopPoint({startPoint:i,targetPoint:e}),this.width=Math.abs(e.x-((null==i?void 0:i.x)||0)),this.height=Math.abs(e.y-((null==i?void 0:i.y)||0)),s.lineWidth=o.lineWidth,s.lineJoin=o.lineJoin,s.lineCap=o.lineCap,s.setLineDash(o.lineDash),s.lineDashOffset=o.lineDashOffset,s.strokeStyle=o.strokeStyle,s.fillStyle=o.fillStyle,s.rect((null===(o=this.leftTopPoint)||void 0===o?void 0:o.x)||0,(null===(o=this.leftTopPoint)||void 0===o?void 0:o.y)||0,this.width,this.height),s.stroke(),s.fill()))},o.draw=function(t,e,n){e&&n&&(n.style&&(e.lineWidth=n.style.lineWidth,e.lineJoin=n.style.lineJoin,e.lineCap=n.style.lineCap,e.setLineDash(n.style.lineDash),e.lineDashOffset=n.style.lineDashOffset,e.strokeStyle=n.style.strokeStyle,e.fillStyle=n.style.fillStyle,e.globalAlpha=n.style.globalAlpha||1),this.drawHistoryPath(t,e,n.data),e.stroke(),e.fill())},o.drawHistoryPath=function(t,e,n){e.save(),e.beginPath();t=o.transformOriginToReal(t,n);e.rect((null===(n=null==t?void 0:t.leftTopPoint)||void 0===n?void 0:n.x)||0,(null===(n=null==t?void 0:t.leftTopPoint)||void 0===n?void 0:n.y)||0,null==t?void 0:t.width,null==t?void 0:t.height),e.stroke(),e.fill(),e.restore()},o.prototype.onCanvasMouseDown=function(t){var e;!this.context||(e=this.context.getCanvasEl())&&(this.startPoint=MathUtil.clientToCtxPoint({event:t,rect:null==e?void 0:e.getBoundingClientRect()}),null!=e&&e.addEventListener("mousemove",this.onCanvasMouseMove),null!=e&&e.addEventListener("mouseup",this.onCanvasMouseUp),t.stopPropagation())},o.prototype.onCanvasMouseMove=function(t){this.context&&(this.isMove=!0,this.draw(t),t.stopPropagation())},o.prototype.onCanvasMouseUp=function(t){this.isMove&&(this.end(t),t.stopPropagation())},o.transformOriginToReal=function(t,e){return{leftTopPoint:t.pointToPixel(e.leftTopPoint),width:t.actualToDistance(e.width),height:t.actualToDistance(e.height)}},o.transformRealToOrigin=function(t,e){return{leftTopPoint:t.pixelToPoint(e.leftTopPoint),width:t.distanceToActual(e.width),height:t.distanceToActual(e.height)}},o.prototype.getSelectType=function(){return SelectType.Rectangle},o.prototype.start=function(t){var e;!this.context||[ActionStatus.Running,ActionStatus.Destroy].includes(this.status)||(e=this.context.getCanvasEl())&&(i.prototype.start.call(this,t),t&&(this.style=t),this.trigger(ActionEvents.BeforeStart,{selectType:this.getSelectType(),actionType:ActionType.Draw}),null!=e&&e.addEventListener("mousedown",this.onCanvasMouseDown),this.status=ActionStatus.Running,this.trigger(ActionEvents.Start,{selectType:this.getSelectType(),actionType:ActionType.Draw}))},o.prototype.end=function(t){var e,n=this.context;n&&(e=n.getCanvasEl())&&(null!=e&&e.removeEventListener("mousedown",this.onCanvasMouseDown),null!=e&&e.removeEventListener("mousemove",this.onCanvasMouseMove),null!=e&&e.removeEventListener("mouseup",this.onCanvasMouseUp),t&&this.draw(t),this.status=ActionStatus.End,e={id:BaseUtil.uuid(),type:this.getSelectType(),data:o.transformRealToOrigin(n,{leftTopPoint:this.leftTopPoint,width:this.width,height:this.height}),style:this.style},n.addHistoryData(e),this.startPoint=null,this.leftTopPoint=null,this.width=0,this.height=0,this.isMove=!1,this.trigger(ActionEvents.End,{selectType:this.getSelectType(),actionType:ActionType.Draw,data:e})),i.prototype.end.call(this,t)},o.prototype.destroy=function(){var t,e=this.context;e&&(t=e.getCanvasEl())&&(this.status===ActionStatus.Running&&(e.clearDraw(),e.drawHistoryData()),null!=t&&t.removeEventListener("mousedown",this.onCanvasMouseDown),null!=t&&t.removeEventListener("mousemove",this.onCanvasMouseMove),null!=t&&t.removeEventListener("mouseup",this.onCanvasMouseUp),this.startPoint=null,this.leftTopPoint=null,this.width=0,this.height=0,this.isMove=!1,this.status=ActionStatus.Destroy,this.trigger(ActionEvents.Destroy,{selectType:this.getSelectType(),actionType:ActionType.Draw})),i.prototype.destroy.call(this)},o}(DrawAction);export default RectangleDrawAction;
//# sourceMappingURL=RectangleDrawAction.js.map
