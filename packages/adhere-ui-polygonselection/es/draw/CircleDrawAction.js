var __extends=this&&this.__extends||function(){var i=function(t,e){return(i=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,e){t.__proto__=e}:function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}))(t,e)};return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}();import BaseUtil from"@baifendian/adhere-util";import{ActionEvents,ActionStatus,ActionType,SelectType}from"../types";import DrawAction from"./DrawAction";var CircleDrawAction=function(i){function t(){var t=i.call(this)||this;return t.centerPoint=null,t.isMove=!1,t.radius=0,t.onCanvasMouseDown=t.onCanvasMouseDown.bind(t),t.onCanvasMouseMove=t.onCanvasMouseMove.bind(t),t.onCanvasMouseUp=t.onCanvasMouseUp.bind(t),t}return __extends(t,i),t.booleanPointInData=function(t,e){return BaseUtil.isPointInCircle(t,e.data)},t.prototype.draw=function(t){var e,n=this,i=n.context,s=n.centerPoint,n=n.style,o=null==i?void 0:i.getCtx();i&&o&&s&&(e=null==i?void 0:i.getCanvasEl())&&(t=BaseUtil.clientToCtxPoint({event:t,rect:null==e?void 0:e.getBoundingClientRect()}))&&(null!=i&&i.clearDraw(),null!=i&&i.drawHistoryData(),o.beginPath(),this.radius=BaseUtil.getDistanceByBetweenPoint({p1:s,p2:t}),o.lineWidth=n.lineWidth,o.lineJoin=n.lineJoin,o.lineCap=n.lineCap,n.lineDash&&o.setLineDash(n.lineDash),o.lineDashOffset=n.lineDashOffset,o.strokeStyle=n.strokeStyle,o.fillStyle=n.fillStyle,o.globalAlpha=n.globalAlpha,o.ellipse((null==s?void 0:s.x)||0,(null==s?void 0:s.y)||0,this.radius,this.radius,45*Math.PI/180,0,2*Math.PI),o.closePath(),o.stroke(),o.fill())},t.prototype.onCanvasMouseDown=function(t){var e;this.context&&(e=this.context.getCanvasEl())&&(this.centerPoint=BaseUtil.clientToCtxPoint({event:t,rect:null==e?void 0:e.getBoundingClientRect()}),null!=e&&e.addEventListener("mousemove",this.onCanvasMouseMove),null!=e)&&e.addEventListener("mouseup",this.onCanvasMouseUp)},t.prototype.onCanvasMouseMove=function(t){var e=this.context;e&&e.getCtx()&&(this.isMove=!0,this.draw(t),this.trigger(ActionEvents.Drawing,{selectType:SelectType.Circle,actionType:ActionType.Draw,data:{id:BaseUtil.uuid(),type:SelectType.Circle,data:{center:this.centerPoint,radius:this.radius},style:this.style}}))},t.prototype.onCanvasMouseUp=function(t){this.isMove&&(this.end(t),t.stopPropagation())},t.draw=function(t,e){t&&e&&this.drawHistoryPath(t,e)},t.drawHistoryPath=function(t,e){var n;t.beginPath(),e.style&&(t.lineWidth=e.style.lineWidth,t.lineJoin=e.style.lineJoin,t.lineCap=e.style.lineCap,e.style.lineDash&&t.setLineDash(e.style.lineDash),t.lineDashOffset=e.style.lineDashOffset,t.strokeStyle=e.style.strokeStyle,t.fillStyle=e.style.fillStyle,t.globalAlpha=null!=(n=e.style.globalAlpha)?n:1),t.ellipse(e.data.center.x,e.data.center.y,e.data.radius,e.data.radius,45*Math.PI/180,0,2*Math.PI),t.closePath(),t.stroke(),t.fill()},t.prototype.start=function(t){var e,n;this.context&&![ActionStatus.Running,ActionStatus.Destroy].includes(this.status)&&(n=null==(n=null==(e=this.context)?void 0:e.getCanvasEl)?void 0:n.call(e))&&(i.prototype.start.call(this,t),t&&(this.style=t),this.trigger(ActionEvents.DrawBeforeStart,{selectType:SelectType.Circle,actionType:ActionType.Draw}),null!=n&&n.addEventListener("mousedown",this.onCanvasMouseDown),this.status=ActionStatus.Running,this.trigger(ActionEvents.DrawStart,{selectType:SelectType.Circle,actionType:ActionType.Draw}))},t.prototype.end=function(t){var e,n=this.context;n&&(e=n.getCanvasEl())&&(null!=e&&e.removeEventListener("mousedown",this.onCanvasMouseDown),null!=e&&e.removeEventListener("mousemove",this.onCanvasMouseMove),null!=e&&e.removeEventListener("mouseup",this.onCanvasMouseUp),t&&this.draw(t),this.status=ActionStatus.End,e={id:BaseUtil.uuid(),type:SelectType.Circle,data:{center:this.centerPoint,radius:this.radius},style:this.style},n.addHistoryData(e),this.centerPoint=null,this.radius=0,this.isMove=!1,this.trigger(ActionEvents.DrawEnd,{selectType:SelectType.Circle,actionType:ActionType.Draw,data:e})),i.prototype.end.call(this,t)},t.prototype.destroy=function(){var t,e=this.context;e&&(t=e.getCanvasEl())&&(this.status===ActionStatus.Running&&(e.clearDraw(),e.drawHistoryData()),null!=t&&t.removeEventListener("mousedown",this.onCanvasMouseDown),null!=t&&t.removeEventListener("mousemove",this.onCanvasMouseMove),null!=t&&t.removeEventListener("mouseup",this.onCanvasMouseUp),this.centerPoint=null,this.radius=0,this.isMove=!1,this.status=ActionStatus.Destroy,this.trigger(ActionEvents.Destroy,{selectType:SelectType.Circle,actionType:ActionType.Draw})),i.prototype.destroy.call(this)},t}(DrawAction);export default CircleDrawAction;
//# sourceMappingURL=CircleDrawAction.js.map
