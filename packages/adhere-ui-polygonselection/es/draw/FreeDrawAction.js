var __extends=this&&this.__extends||function(){var o=function(t,e){return(o=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,e){t.__proto__=e}:function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}))(t,e)};return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}();import BaseUtil from"@baifendian/adhere-util";import{ActionEvents,ActionStatus,ActionType,SelectType}from"../types";import DrawAction from"./DrawAction";var FreeDrawAction=function(o){function t(){var t=o.call(this)||this;return t.startPoint=null,t.isMove=!1,t.points=[],t.onCanvasMouseDown=t.onCanvasMouseDown.bind(t),t.onCanvasMouseMove=t.onCanvasMouseMove.bind(t),t.onCanvasMouseUp=t.onCanvasMouseUp.bind(t),t}return __extends(t,o),t.prototype.draw=function(t,e){void 0===e&&(e=!1);var n,o=this.context,s=this.style,i=null==o?void 0:o.getCtx();o&&i&&(n=o.getCanvasEl())&&(t=BaseUtil.clientToCtxPoint({event:t,rect:null==n?void 0:n.getBoundingClientRect()}))&&(this.points.push(t),o.clearDraw(),o.drawHistoryData(),i.beginPath(),i.lineWidth=s.lineWidth,i.lineJoin=s.lineJoin,i.lineCap=s.lineCap,s.lineDash&&i.setLineDash(s.lineDash),i.lineDashOffset=s.lineDashOffset,i.strokeStyle=s.strokeStyle,i.fillStyle=s.fillStyle,i.globalAlpha=s.globalAlpha,this.points.forEach(function(t,e){0===e?i.moveTo(t.x,t.y):i.lineTo(t.x,t.y)}),e&&i.closePath(),i.stroke(),i.fill())},t.prototype.onCanvasMouseDown=function(t){var e;this.context&&(e=this.context.getCanvasEl())&&(this.startPoint=BaseUtil.clientToCtxPoint({event:t,rect:null==e?void 0:e.getBoundingClientRect()}),this.startPoint)&&(this.points.push(this.startPoint),null!=e&&e.addEventListener("mousemove",this.onCanvasMouseMove),null!=e)&&e.addEventListener("mouseup",this.onCanvasMouseUp)},t.prototype.onCanvasMouseMove=function(t){this.context&&(this.isMove=!0,this.draw(t),this.trigger(ActionEvents.Drawing,{selectType:SelectType.Free,actionType:ActionType.Draw,data:{id:BaseUtil.uuid(),type:SelectType.Free,data:{points:JSON.parse(JSON.stringify(this.points))},style:this.style}}))},t.prototype.onCanvasMouseUp=function(t){this.isMove&&(this.end(t),t.stopPropagation())},t.draw=function(t,e){t&&e&&this.drawHistoryPath(t,e)},t.drawHistoryPath=function(n,t){n.beginPath(),t.style&&(n.lineWidth=t.style.lineWidth,n.lineJoin=t.style.lineJoin,n.lineCap=t.style.lineCap,t.style.lineDash&&n.setLineDash(t.style.lineDash),n.lineDashOffset=t.style.lineDashOffset,n.strokeStyle=t.style.strokeStyle,n.fillStyle=t.style.fillStyle,n.globalAlpha=null!=(e=t.style.globalAlpha)?e:1);var e=t.data.points;((void 0===e?[]:e)||[]).forEach(function(t,e){0===e?n.moveTo(t.x,t.y):n.lineTo(t.x,t.y)}),n.closePath(),n.stroke(),n.fill()},t.prototype.start=function(t){var e,n;this.context&&![ActionStatus.Running,ActionStatus.Destroy].includes(this.status)&&(n=null==(n=null==(e=this.context)?void 0:e.getCanvasEl)?void 0:n.call(e))&&(o.prototype.start.call(this,t),t&&(this.style=t),this.trigger(ActionEvents.DrawBeforeStart,{selectType:SelectType.Free,actionType:ActionType.Draw}),null!=n&&n.addEventListener("mousedown",this.onCanvasMouseDown),this.status=ActionStatus.Running,this.trigger(ActionEvents.DrawStart,{selectType:SelectType.Free,actionType:ActionType.Draw}))},t.prototype.end=function(t){var e,n=this.context;n&&(e=n.getCanvasEl())&&(null!=e&&e.removeEventListener("mousedown",this.onCanvasMouseDown),null!=e&&e.removeEventListener("mousemove",this.onCanvasMouseMove),null!=e&&e.removeEventListener("mouseup",this.onCanvasMouseUp),this.draw(t,!0),this.status=ActionStatus.End,e={id:BaseUtil.uuid(),type:SelectType.Free,data:{points:JSON.parse(JSON.stringify(this.points))},style:this.style},n.addHistoryData(e),this.startPoint=null,this.points=[],this.isMove=!1,this.trigger(ActionEvents.DrawEnd,{selectType:SelectType.Free,actionType:ActionType.Draw,data:e})),o.prototype.end.call(this,t)},t.prototype.destroy=function(){var t,e=this.context;e&&(t=e.getCanvasEl())&&(this.status===ActionStatus.Running&&(e.clearDraw(),e.drawHistoryData()),null!=t&&t.removeEventListener("mousedown",this.onCanvasMouseDown),null!=t&&t.removeEventListener("mousemove",this.onCanvasMouseMove),null!=t&&t.removeEventListener("mouseup",this.onCanvasMouseUp),this.startPoint=null,this.points=[],this.isMove=!1,this.status=ActionStatus.Destroy,this.trigger(ActionEvents.Destroy,{selectType:SelectType.Free,actionType:ActionType.Draw})),o.prototype.destroy.call(this)},t}(DrawAction);export default FreeDrawAction;
//# sourceMappingURL=FreeDrawAction.js.map
