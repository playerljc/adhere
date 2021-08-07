var __extends=this&&this.__extends||function(){var i=function(t,n){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)};return function(t,n){function e(){this.constructor=t}i(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}}(),__spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,n=0,e=arguments.length;n<e;n++)t+=arguments[n].length;for(var i=Array(t),o=0,n=0;n<e;n++)for(var s=arguments[n],a=0,l=s.length;a<l;a++,o++)i[o]=s[a];return i};import MathUtil from"@baifendian/adhere-util/lib/math.js";import BaseUtil from"@baifendian/adhere-util/lib/base";import{ActionEvents,ActionStatus,SelectType,ActionType}from"../types";import DrawAction from"./drawAction";var PolygonDrawAction=function(e){function t(){var t=e.call(this)||this;return t.startPoint=null,t.pointStack=[],t.onCanvasClick=t.onCanvasClick.bind(t),t.onCanvasMousemove=t.onCanvasMousemove.bind(t),t.onCanvasDbClick=t.onCanvasDbClick.bind(t),t}return __extends(t,e),t.prototype.onCanvasClick=function(t){var n,e;!this.context||(n=this.context.getCanvasEl())&&(this.startPoint?(e=MathUtil.clientToCtxPoint({event:t,rect:null==n?void 0:n.getBoundingClientRect()}),this.drawLine(this.startPoint,e),this.startPoint=e,this.startPoint&&this.pointStack.push(this.startPoint)):(null!=n&&n.addEventListener("mousemove",this.onCanvasMousemove),null!=n&&n.addEventListener("dblclick",this.onCanvasDbClick),this.startPoint=MathUtil.clientToCtxPoint({event:t,rect:null==n?void 0:n.getBoundingClientRect()}),this.startPoint&&(this.pointStack.push(this.startPoint),this.trigger(ActionEvents.Start,{selectType:SelectType.Polygon,actionType:ActionType.Draw}))))},t.prototype.onCanvasMousemove=function(t){var n;this.context&&(!this.startPoint||(n=this.context.getCanvasEl())&&(this.context.clearDraw(),this.context.drawHistoryData(),this.drawStack(),this.drawLine(this.startPoint,MathUtil.clientToCtxPoint({event:t,rect:null==n?void 0:n.getBoundingClientRect()}))))},t.prototype.onCanvasDbClick=function(){this.end()},t.prototype.drawStack=function(){var t=this.pointStack;if(!(t.length<=1))for(var n=0;this.drawLine(t[n],t[n+1]),++n!==t.length-1;);},t.prototype.fill=function(){if(this.context){var t=this.pointStack,n=this.context.getCtx();if(n&&!(t.length<=1)){null!=n&&n.beginPath();for(var e=0;e<t.length;e++){var i=t[e];0===e?null!=n&&n.moveTo(i.x,i.y):null!=n&&n.lineTo(i.x,i.y)}null!=n&&n.closePath(),n.fillStyle=this.style.fillStyle,n.fill()}}},t.prototype.drawLine=function(t,n){var e,i;this.context&&(e=this.style,(i=this.context.getCtx())&&(i.beginPath(),i.moveTo(t.x,t.y),i.lineTo(n.x,n.y),i.lineWidth=e.lineWidth,i.lineCap=e.lineCap,i.lineJoin=e.lineJoin,i.lineDashOffset=e.lineDashOffset,i.setLineDash(e.lineDash),i.stroke()))},t.draw=function(t,n){t&&n&&(n.style&&(t.lineWidth=n.style.lineWidth,t.lineJoin=n.style.lineJoin,t.lineCap=n.style.lineCap,t.setLineDash(n.style.lineDash),t.lineDashOffset=n.style.lineDashOffset,t.strokeStyle=n.style.strokeStyle,t.fillStyle=n.style.fillStyle),this.drawHistoryPath(t,n.data),t.stroke(),t.fill())},t.drawHistoryPath=function(e,t){void 0===t&&(t=[]),e.beginPath(),(t||[]).forEach(function(t,n){0===n?e.moveTo(t.x,t.y):e.lineTo(t.x,t.y)}),e.closePath()},t.prototype.start=function(t){var n;this.context&&![ActionStatus.Running,ActionStatus.Destroy].includes(this.status)&&(!(n=this.context)||(n=n.getCanvasEl())&&(e.prototype.start.call(this,t),t&&(this.style=t),this.trigger(ActionEvents.BeforeStart,{selectType:SelectType.Polygon,actionType:ActionType.Draw}),null!=n&&n.addEventListener("click",this.onCanvasClick),this.status=ActionStatus.Running))},t.prototype.end=function(){var t,n=this.context;n&&(t=n.getCanvasEl())&&(null!=t&&t.removeEventListener("click",this.onCanvasClick),null!=t&&t.removeEventListener("mousemove",this.onCanvasMousemove),null!=t&&t.removeEventListener("dblclick",this.onCanvasDbClick),n.clearDraw(),n.drawHistoryData(),this.fill(),this.status=ActionStatus.End,t={id:BaseUtil.uuid(),type:SelectType.Polygon,data:__spreadArrays(this.pointStack),style:this.style},this.startPoint=null,this.pointStack=[],n.addHistoryData(t),this.trigger(ActionEvents.End,{selectType:SelectType.Polygon,actionType:ActionType.Draw,data:t})),e.prototype.end.call(this)},t.prototype.destroy=function(){var t,n=this.context;n&&(t=n.getCanvasEl())&&(this.status===ActionStatus.Running&&(n.clearDraw(),n.drawHistoryData()),null!=t&&t.removeEventListener("click",this.onCanvasClick),null!=t&&t.removeEventListener("mousemove",this.onCanvasMousemove),null!=t&&t.removeEventListener("dblclick",this.onCanvasDbClick),this.startPoint=null,this.pointStack=[],this.status=ActionStatus.Destroy,this.trigger(ActionEvents.Destroy,{selectType:SelectType.Polygon,actionType:ActionType.Draw})),e.prototype.destroy.call(this)},t}(DrawAction);export default PolygonDrawAction;
//# sourceMappingURL=polygonDrawAction.js.map
