var __extends=this&&this.__extends||function(){var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)};return function(t,e){function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}}(),__spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,e=0,i=arguments.length;e<i;e++)t+=arguments[e].length;for(var n=Array(t),a=0,e=0;e<i;e++)for(var s=arguments[e],r=0,o=s.length;r<o;r++,a++)n[a]=s[r];return n};import Emitter from"@baifendian/adhere-util-emitter";import MathUtil from"@baifendian/adhere-util";import{ActionStatus,InteractionLayerActions,SelectType}from"./types";import PolygonDrawAction from"./draw/PolygonDrawAction";import CircleDrawAction from"./draw/CircleDrawAction";import RectangleDrawAction from"./draw/RectangleDrawAction";import TriangleDrawAction from"./draw/TriangleDrawAction";import DiamondDrawAction from"./draw/DiamondDrawAction";import StartDrawAction from"./draw/StartDrawAction";import FreeDrawAction from"./draw/FreeDrawAction";import Util from"../../util";import DistanceDrawAction from"./draw/DistanceDrawAction";var selectorPrefix="adhere-ui-interactionlayer",zIndex=19999,InteractionLayer=function(a){function t(t,e,i){var n=this;return n.update=n.update.bind(n),(n=a.call(this,{update:n.update,paneName:"markerPane",zIndex:zIndex})||this).map=null,n.el=null,n.listeners=null,n.curAction=null,n.canvasEl=null,n.ctx=null,n.assistCanvasEl=null,n.assistCtx=null,n.canvasData=[],n.emitter=new Emitter.Events,n.isLoad=!1,n.canvasObserver=null,n.typeActionMap=new Map([[SelectType.Polygon,PolygonDrawAction],[SelectType.Distance,DistanceDrawAction],[SelectType.Circle,CircleDrawAction],[SelectType.Rectangle,RectangleDrawAction],[SelectType.Triangle,TriangleDrawAction],[SelectType.Diamond,DiamondDrawAction],[SelectType.Start,StartDrawAction],[SelectType.Free,FreeDrawAction]]),n.map=t,n.listeners=i,e&&(n.canvasData=e),n.initListeners(),n}return __extends(t,a),t.prototype.update=function(){this.isLoad?(this.curAction&&this.curAction.destroy(),this.clearDraw(),this.clearAssistDraw(),this.drawHistoryData()):(this.initCanvas(),this.initEvents(),this.clearDraw(),this.clearAssistDraw(),this.drawHistoryData(),this.isLoad=!0)},t.prototype.initListeners=function(){var e=this,i=this.listeners;i&&Object.keys(i).forEach(function(t){e.emitter.on(t,i[t])})},t.prototype.initEvents=function(){var o=this;this.el.addEventListener("mouseup",function(t){if(t&&!(2<=t.detail)){for(var e=o.getHistoryData(),i=MathUtil.clientToCtxPoint({event:t,rect:o.getCanvasEl().getBoundingClientRect()}),n=[],a=0;a<e.length;a++){var s=e[a],r=o.typeActionMap.get(s.type);"booleanPointInData"in r&&(null==r?void 0:r.booleanPointInData(o,i,s))&&n.push({index:a,data:s})}n.length?(console.log("点击了节点"),o.emitter.trigger(InteractionLayerActions.CanvasClickGeometry,JSON.parse(JSON.stringify(n[n.length-1].data)))):e.length&&(console.log("点击拉画布"),o.emitter.trigger(InteractionLayerActions.CanvasClickEmpty))}})},t.prototype.initCanvas=function(){var s=this;this.el=this.canvas.parentElement,this.canvasEl=this.canvas,this.el.style.width=this.canvasEl.width+"px",this.el.style.height=this.canvasEl.height+"px",this.canvasEl.className=""+selectorPrefix,this.ctx=this.canvasEl.getContext("2d"),this.assistCanvasEl=document.createElement("canvas"),this.assistCanvasEl.className=selectorPrefix+"-assist",this.assistCanvasEl.style.zIndex=""+(parseInt(this.canvasEl.style.zIndex)-1),this.assistCanvasEl.width=this.canvasEl.width,this.assistCanvasEl.height=this.canvasEl.height,this.assistCtx=this.assistCanvasEl.getContext("2d"),this.canvasObserver=new MutationObserver(function(t,e){for(var i=0,n=t;i<n.length;i++){var a=n[i];"attributes"===a.type&&"style"===a.attributeName&&(s.assistCanvasEl.style.left=s.canvasEl.style.left,s.assistCanvasEl.style.top=s.canvasEl.style.top)}}),this.canvasObserver.observe(this.canvasEl,{attributes:!0}),this.el.appendChild(this.assistCanvasEl),this.emitter.trigger(InteractionLayerActions.CanvasMount)},t.prototype.enableMap=function(){this.map.enableDoubleClickZoom()},t.prototype.disableMap=function(){this.map.disableDoubleClickZoom()},t.prototype.pixelToPoint=function(t){t=this.map.pixelToPoint(t);return{x:t.lng,y:t.lat}},t.prototype.pointToPixel=function(t){return this.map.pointToPixel(new BMap.Point(t.x,t.y))},t.prototype.distanceToActual=function(t){return t/Util.getScale(this.map)},t.prototype.actualToDistance=function(t){return Util.getScale(this.map)*t},t.prototype.getCtx=function(){return this.ctx},t.prototype.getCanvasEl=function(){return this.canvasEl},t.prototype.getAssistCanvasEl=function(){return this.assistCanvasEl},t.prototype.getAssistCtx=function(){return this.assistCtx},t.prototype.getWidth=function(){var t;return null===(t=null==this?void 0:this.getCanvasEl())||void 0===t?void 0:t.width},t.prototype.getHeight=function(){var t;return null===(t=null==this?void 0:this.getCanvasEl())||void 0===t?void 0:t.height},t.prototype.addHistoryData=function(t){this.canvasData.push(t)},t.prototype.removeHistoryDataById=function(e){var t=this.canvasData.findIndex(function(t){return t.id===e});return-1===t?[]:this.canvasData.splice(t,1)},t.prototype.drawHistoryData=function(){var n=this;this.canvasData.forEach(function(t){var e,i=n.ctx;i&&t&&(t.style&&(i.lineWidth=t.style.lineWidth,i.lineJoin=t.style.lineJoin,i.lineCap=t.style.lineCap,i.setLineDash(t.style.lineDash),i.lineDashOffset=t.style.lineDashOffset,i.strokeStyle=t.style.strokeStyle,i.fillStyle=t.style.fillStyle),null!=(e=n.typeActionMap.get(t.type))&&e.drawHistoryPath(n,i,t.data))})},t.prototype.getHistoryDataById=function(e){return this.canvasData.find(function(t){return t.id===e})},t.prototype.getHistoryData=function(){return __spreadArrays(this.canvasData)},t.prototype.setHistoryData=function(t){this.canvasData=t},t.prototype.changeAction=function(t){t!==this.curAction&&(t&&t.getStatus()!==ActionStatus.UnStart||(this.disableMap(),this.curAction&&this.curAction.destroy(),null!=t&&t.setContext(this),this.curAction=t))},t.prototype.getCurAction=function(){return this.curAction},t.prototype.start=function(t){this.curAction&&this.curAction.start(t)},t.prototype.end=function(){this.curAction&&this.curAction.end()},t.prototype.clearDraw=function(){var t=this.ctx;t&&t.clearRect(0,0,this.getWidth(),this.getHeight())},t.prototype.clearAssistDraw=function(){var t=this.assistCtx;t&&t.clearRect(0,0,this.getWidth(),this.getHeight())},t.prototype.setFrontCanvas=function(t){t.style.zIndex=""+(zIndex+1)},t.prototype.setBackCanvas=function(t){t.style.zIndex=""+(zIndex-1)},t.prototype.destroy=function(){this.curAction&&this.curAction.destroy(),this.canvasObserver&&this.canvasObserver.disconnect()},t.prototype.getMap=function(){return this.map},t}(BMap.CanvasLayer);export default InteractionLayer;
//# sourceMappingURL=InteractionLayer.js.map
