var __extends=this&&this.__extends||function(){var o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};return function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}();import MathUtil from"@baifendian/adhere-util/lib/math";import BaseUtil from"@baifendian/adhere-util/lib/base";import{ActionEvents,ActionStatus,ActionType,SelectType}from"../types";import DrawAction from"./DrawAction";var FreeDrawAction=function(o){function i(){var t=o.call(this)||this;return t.startPoint=null,t.isMove=!1,t.points=[],t.onCanvasMouseDown=t.onCanvasMouseDown.bind(t),t.onCanvasMouseMove=t.onCanvasMouseMove.bind(t),t.onCanvasMouseUp=t.onCanvasMouseUp.bind(t),t}return __extends(i,o),i.prototype.draw=function(t,e){void 0===e&&(e=!1);var n,o=this.context,i=this.style,s=null==o?void 0:o.getCtx();o&&s&&(!(n=o.getCanvasEl())||(n=MathUtil.clientToCtxPoint({event:t,rect:null==n?void 0:n.getBoundingClientRect()}))&&(this.points.push(n),o.clearDraw(),o.drawHistoryData(),s.beginPath(),s.lineWidth=i.lineWidth,s.lineJoin=i.lineJoin,s.lineCap=i.lineCap,s.setLineDash(i.lineDash),s.lineDashOffset=i.lineDashOffset,s.strokeStyle=i.strokeStyle,s.fillStyle=i.fillStyle,this.points.forEach(function(t,e){0===e?s.moveTo(t.x,t.y):s.lineTo(t.x,t.y)}),e&&s.closePath(),s.stroke(),s.fill()))},i.prototype.onCanvasMouseDown=function(t){var e;!this.context||(e=this.context.getCanvasEl())&&(this.startPoint=MathUtil.clientToCtxPoint({event:t,rect:null==e?void 0:e.getBoundingClientRect()}),this.startPoint&&(this.points.push(this.startPoint),null!=e&&e.addEventListener("mousemove",this.onCanvasMouseMove),null!=e&&e.addEventListener("mouseup",this.onCanvasMouseUp),t.stopPropagation()))},i.prototype.onCanvasMouseMove=function(t){this.context&&(this.isMove=!0,this.draw(t),t.stopPropagation())},i.prototype.onCanvasMouseUp=function(t){this.isMove&&(this.end(t),t.stopPropagation())},i.draw=function(t,e,n){e&&n&&(n.style&&(e.lineWidth=n.style.lineWidth,e.lineJoin=n.style.lineJoin,e.lineCap=n.style.lineCap,e.setLineDash(n.style.lineDash),e.lineDashOffset=n.style.lineDashOffset,e.strokeStyle=n.style.strokeStyle,e.fillStyle=n.style.fillStyle,e.globalAlpha=n.style.globalAlpha||1),this.drawHistoryPath(t,e,n.data),e.stroke(),e.fill())},i.drawHistoryPath=function(t,n,e){n.save(),n.beginPath();e=e.points;(i.transformOriginToReal(t,void 0===e?[]:e)||[]).forEach(function(t,e){0===e?n.moveTo(t.x,t.y):n.lineTo(t.x,t.y)}),n.closePath(),n.stroke(),n.fill(),n.restore()},i.transformRealToOrigin=function(e,t){return t.map(function(t){return e.pixelToPoint(t)})},i.transformOriginToReal=function(e,t){return t.map(function(t){return e.pointToPixel(t)})},i.prototype.getSelectType=function(){return SelectType.Free},i.prototype.start=function(t){var e;!this.context||[ActionStatus.Running,ActionStatus.Destroy].includes(this.status)||(e=this.context.getCanvasEl())&&(o.prototype.start.call(this,t),t&&(this.style=t),this.trigger(ActionEvents.BeforeStart,{selectType:this.getSelectType(),actionType:ActionType.Draw}),null!=e&&e.addEventListener("mousedown",this.onCanvasMouseDown),this.status=ActionStatus.Running,this.trigger(ActionEvents.Start,{selectType:this.getSelectType(),actionType:ActionType.Draw}))},i.prototype.end=function(t){var e,n=this.context;n&&(e=n.getCanvasEl())&&(null!=e&&e.removeEventListener("mousedown",this.onCanvasMouseDown),null!=e&&e.removeEventListener("mousemove",this.onCanvasMouseMove),null!=e&&e.removeEventListener("mouseup",this.onCanvasMouseUp),this.draw(t,!0),this.status=ActionStatus.End,e={id:BaseUtil.uuid(),type:this.getSelectType(),data:{points:i.transformRealToOrigin(n,this.points)},style:this.style},n.addHistoryData(e),this.startPoint=null,this.points=[],this.isMove=!1,this.trigger(ActionEvents.End,{selectType:this.getSelectType(),actionType:ActionType.Draw,data:e})),o.prototype.end.call(this,t)},i.prototype.destroy=function(){var t,e=this.context;e&&(t=e.getCanvasEl())&&(this.status===ActionStatus.Running&&(e.clearDraw(),e.drawHistoryData()),null!=t&&t.removeEventListener("mousedown",this.onCanvasMouseDown),null!=t&&t.removeEventListener("mousemove",this.onCanvasMouseMove),null!=t&&t.removeEventListener("mouseup",this.onCanvasMouseUp),this.startPoint=null,this.points=[],this.isMove=!1,this.status=ActionStatus.Destroy,this.trigger(ActionEvents.Destroy,{selectType:this.getSelectType(),actionType:ActionType.Draw})),o.prototype.destroy.call(this)},i}(DrawAction);export default FreeDrawAction;
//# sourceMappingURL=FreeDrawAction.js.map
