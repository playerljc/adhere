var __extends=this&&this.__extends||function(){var i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};return function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),__spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var i=Array(t),o=0,e=0;e<n;e++)for(var s=arguments[e],a=0,r=s.length;a<r;a++,o++)i[o]=s[a];return i};import*as turf from"@turf/turf";import BaseUtil from"@baifendian/adhere-util";import{ActionEvents,ActionStatus,SelectType,ActionType}from"../types";import DrawAction from"./DrawAction";var PolygonDrawAction=function(i){function o(){var t=i.call(this)||this;return t.startPoint=null,t.pointStack=[],t.isMove=!1,t.onCanvasClick=t.onCanvasClick.bind(t),t.onCanvasMousemove=t.onCanvasMousemove.bind(t),t.onCanvasDbClick=t.onCanvasDbClick.bind(t),t}return __extends(o,i),o.booleanPointInData=function(t,e,n){(n=__spreadArrays(n.data)).push(n[0]);n=o.transformOriginToReal(t,n),e=turf.point([e.x,e.y]),n=turf.polygon([n.map(function(t){return[t.x,t.y]})]);return turf.booleanPointInPolygon(e,n)},o.draw=function(t,e,n){e&&n&&(n.style&&(e.lineWidth=n.style.lineWidth,e.lineJoin=n.style.lineJoin,e.lineCap=n.style.lineCap,e.setLineDash(n.style.lineDash),e.lineDashOffset=n.style.lineDashOffset,e.strokeStyle=n.style.strokeStyle,e.fillStyle=n.style.fillStyle,e.globalAlpha=n.style.globalAlpha||1),this.drawHistoryPath(t,e,n.data),e.stroke(),e.fill())},o.drawHistoryPath=function(t,n,e){void 0===e&&(e=[]),n.save(),n.beginPath(),(o.transformOriginToReal(t,e)||[]).forEach(function(t,e){0===e?n.moveTo(t.x,t.y):n.lineTo(t.x,t.y)}),n.closePath(),n.stroke(),n.fill(),n.restore()},o.transformOriginToReal=function(e,t){return t.map(function(t){return e.pointToPixel(t)})},o.transformRealToOrigin=function(e,t){return t.map(function(t){return e.pixelToPoint(t)})},o.prototype.fill=function(){if(this.context){var t=this.pointStack,e=this.context.getCtx();if(e&&!(t.length<=1)){e.save(),e.beginPath();for(var n=0;n<t.length;n++){var i=t[n];0===n?e.moveTo(i.x,i.y):e.lineTo(i.x,i.y)}e.closePath(),e.fillStyle=this.style.fillStyle,e.fill(),e.restore()}}},o.prototype.drawLine=function(t,e){var n,i=this.context;i&&(n=this.style,(i=i.getCtx())&&(i.beginPath(),i.moveTo(t.x,t.y),i.lineTo(e.x,e.y),i.strokeStyle=n.strokeStyle,i.fillStyle=n.fillStyle,i.lineWidth=n.lineWidth,i.lineCap=n.lineCap,i.lineJoin=n.lineJoin,i.lineDashOffset=n.lineDashOffset,i.setLineDash(n.lineDash),i.stroke()))},o.prototype.drawStack=function(){var t=this.pointStack;if(!(t.length<=1))for(var e=0;this.drawLine(t[e],t[e+1]),++e!==t.length-1;);},o.prototype.getCanvasClick=function(){return this.onCanvasClick},o.prototype.getCanvasMousemove=function(){return this.onCanvasMousemove},o.prototype.getCanvasDbClick=function(){return this.onCanvasDbClick},o.prototype.onCanvasClick=function(t){if(console.log("多边形Click"),this.context){var e=this.context.getCanvasEl();if(e&&!(2<=t.detail)){if(this.startPoint){var n=BaseUtil.clientToCtxPoint({event:t,rect:null==e?void 0:e.getBoundingClientRect()});this.drawLine(this.startPoint,n),this.startPoint=n,this.startPoint&&this.pointStack.push(this.startPoint)}else{if(null!=e&&e.addEventListener("mousemove",this.getCanvasMousemove()),null!=e&&e.addEventListener("dblclick",this.getCanvasDbClick()),this.startPoint=BaseUtil.clientToCtxPoint({event:t,rect:null==e?void 0:e.getBoundingClientRect()}),!this.startPoint)return;this.pointStack.push(this.startPoint),this.trigger(ActionEvents.Start,{selectType:this.getSelectType(),actionType:ActionType.Draw})}t.stopPropagation()}}},o.prototype.onCanvasMousemove=function(t){var e,n=this.context,i=this.startPoint;n&&(!i||(e=n.getCanvasEl())&&(this.isMove=!0,n.clearDraw(),n.drawHistoryData(),this.drawStack(),this.drawLine(i,BaseUtil.clientToCtxPoint({event:t,rect:null==e?void 0:e.getBoundingClientRect()})),t.stopPropagation()))},o.prototype.onCanvasDbClick=function(t){this.isMove&&(this.end(),t.stopPropagation())},o.prototype.getSelectType=function(){return SelectType.Polygon},o.prototype.start=function(t){var e=this.context,n=this.status;e&&![ActionStatus.Running,ActionStatus.Destroy].includes(n)&&(!e||(e=e.getCanvasEl())&&(i.prototype.start.call(this,t),t&&(this.style=t),this.trigger(ActionEvents.BeforeStart,{selectType:this.getSelectType(),actionType:ActionType.Draw}),null!=e&&e.addEventListener("mouseup",this.getCanvasClick()),this.status=ActionStatus.Running))},o.prototype.end=function(){var t=this.context;if(t){var e=t.getCanvasEl();if(e){null!=e&&e.removeEventListener("mouseup",this.getCanvasClick()),null!=e&&e.removeEventListener("mousemove",this.getCanvasMousemove()),null!=e&&e.removeEventListener("dblclick",this.getCanvasDbClick()),t.clearDraw(),t.drawHistoryData(),this.fill(),this.status=ActionStatus.End;var n=BaseUtil.uuid(),e={id:n,type:this.getSelectType(),data:o.transformRealToOrigin(t,this.pointStack),style:this.style};return this.startPoint=null,this.pointStack=[],this.isMove=!1,t.addHistoryData(e),this.trigger(ActionEvents.End,{selectType:this.getSelectType(),actionType:ActionType.Draw,data:e}),i.prototype.end.call(this),n}i.prototype.end.call(this)}else i.prototype.end.call(this)},o.prototype.destroy=function(){var t,e=this.context;e&&(t=e.getCanvasEl())&&(this.status===ActionStatus.Running&&(e.clearDraw(),e.drawHistoryData()),null!=t&&t.removeEventListener("mouseup",this.onCanvasClick),null!=t&&t.removeEventListener("mousemove",this.onCanvasMousemove),null!=t&&t.removeEventListener("dblclick",this.onCanvasDbClick),this.startPoint=null,this.pointStack=[],this.isMove=!1,this.status=ActionStatus.Destroy,this.trigger(ActionEvents.Destroy,{selectType:this.getSelectType(),actionType:ActionType.Draw})),i.prototype.destroy.call(this)},o}(DrawAction);export default PolygonDrawAction;
//# sourceMappingURL=PolygonDrawAction.js.map
