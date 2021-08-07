var __extends=this&&this.__extends||function(){var i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};return function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}();import MathUtil from"@baifendian/adhere-util/lib/math";import BaseUtil from"@baifendian/adhere-util/lib/base";import DrawAction from"./drawAction";import{ActionEvents,ActionStatus,SelectType,ActionType}from"../types";var CircleDrawAction=function(i){function t(){var t=i.call(this)||this;return t.centerPoint=null,t.radius=0,t.onCanvasMouseDown=t.onCanvasMouseDown.bind(t),t.onCanvasMouseMove=t.onCanvasMouseMove.bind(t),t.onCanvasMouseUp=t.onCanvasMouseUp.bind(t),t}return __extends(t,i),t.prototype.draw=function(t){var e=this,n=e.context,i=e.centerPoint,o=e.style,s=null==n?void 0:n.getCtx();n&&s&&i&&(!(e=n.getCanvasEl())||(e=MathUtil.clientToCtxPoint({event:t,rect:null==e?void 0:e.getBoundingClientRect()}))&&(n.clearDraw(),n.drawHistoryData(),s.beginPath(),this.radius=MathUtil.getDistanceByBetweenPoint({p1:i,p2:e}),s.lineWidth=o.lineWidth,s.lineJoin=o.lineJoin,s.lineCap=o.lineCap,s.setLineDash(o.lineDash),s.lineDashOffset=o.lineDashOffset,s.strokeStyle=o.strokeStyle,s.fillStyle=o.fillStyle,s.ellipse((null==i?void 0:i.x)||0,(null==i?void 0:i.y)||0,this.radius,this.radius,45*Math.PI/180,0,2*Math.PI),s.stroke(),s.fill()))},t.prototype.onCanvasMouseDown=function(t){var e;!this.context||(e=this.context.getCanvasEl())&&(this.centerPoint=MathUtil.clientToCtxPoint({event:t,rect:null==e?void 0:e.getBoundingClientRect()}),null!=e&&e.addEventListener("mousemove",this.onCanvasMouseMove),null!=e&&e.addEventListener("mouseup",this.onCanvasMouseUp))},t.prototype.onCanvasMouseMove=function(t){var e=this.context;e&&e.getCtx()&&this.draw(t)},t.prototype.onCanvasMouseUp=function(t){this.end(t)},t.draw=function(t,e){t&&e&&(e.style&&(t.lineWidth=e.style.lineWidth,t.lineJoin=e.style.lineJoin,t.lineCap=e.style.lineCap,t.setLineDash(e.style.lineDash),t.lineDashOffset=e.style.lineDashOffset,t.strokeStyle=e.style.strokeStyle,t.fillStyle=e.style.fillStyle),this.drawHistoryPath(t,e.data),t.stroke(),t.fill())},t.drawHistoryPath=function(t,e){t.beginPath(),t.ellipse(e.center.x,e.center.y,e.radius,e.radius,45*Math.PI/180,0,2*Math.PI)},t.prototype.start=function(t){var e;!this.context||[ActionStatus.Running,ActionStatus.Destroy].includes(this.status)||(e=this.context.getCanvasEl())&&(i.prototype.start.call(this,t),t&&(this.style=t),this.trigger(ActionEvents.BeforeStart,{selectType:SelectType.Circle,actionType:ActionType.Draw}),null!=e&&e.addEventListener("mousedown",this.onCanvasMouseDown),this.status=ActionStatus.Running,this.trigger(ActionEvents.Start,{selectType:SelectType.Circle,actionType:ActionType.Draw}))},t.prototype.end=function(t){var e,n=this.context;n&&(e=n.getCanvasEl())&&(null!=e&&e.removeEventListener("mousedown",this.onCanvasMouseDown),null!=e&&e.removeEventListener("mousemove",this.onCanvasMouseMove),null!=e&&e.removeEventListener("mouseup",this.onCanvasMouseUp),t&&this.draw(t),this.status=ActionStatus.End,e={id:BaseUtil.uuid(),type:SelectType.Circle,data:{center:this.centerPoint,radius:this.radius},style:this.style},n.addHistoryData(e),this.centerPoint=null,this.radius=0,this.trigger(ActionEvents.End,{selectType:SelectType.Circle,actionType:ActionType.Draw,data:e})),i.prototype.end.call(this,t)},t.prototype.destroy=function(){var t,e=this.context;e&&(t=e.getCanvasEl())&&(this.status===ActionStatus.Running&&(e.clearDraw(),e.drawHistoryData()),null!=t&&t.removeEventListener("mousedown",this.onCanvasMouseDown),null!=t&&t.removeEventListener("mousemove",this.onCanvasMouseMove),null!=t&&t.removeEventListener("mouseup",this.onCanvasMouseUp),this.centerPoint=null,this.radius=0,this.status=ActionStatus.Destroy,this.trigger(ActionEvents.Destroy,{selectType:SelectType.Circle,actionType:ActionType.Draw})),i.prototype.destroy.call(this)},t}(DrawAction);export default CircleDrawAction;
//# sourceMappingURL=circleDrawAction.js.map
