"use strict";var __extends=this&&this.__extends||function(){var a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)};return function(t,e){function i(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}}(),__spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,e=0,i=arguments.length;e<i;e++)t+=arguments[e].length;for(var a=Array(t),n=0,e=0;e<i;e++)for(var s=arguments[e],r=0,o=s.length;r<o;r++,n++)a[n]=s[r];return a},__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var adhere_util_emitter_1=__importDefault(require("@baifendian/adhere-util-emitter")),adhere_util_1=__importDefault(require("@baifendian/adhere-util")),types_1=require("./types"),PolygonDrawAction_1=__importDefault(require("./draw/PolygonDrawAction")),CircleDrawAction_1=__importDefault(require("./draw/CircleDrawAction")),RectangleDrawAction_1=__importDefault(require("./draw/RectangleDrawAction")),TriangleDrawAction_1=__importDefault(require("./draw/TriangleDrawAction")),DiamondDrawAction_1=__importDefault(require("./draw/DiamondDrawAction")),StartDrawAction_1=__importDefault(require("./draw/StartDrawAction")),FreeDrawAction_1=__importDefault(require("./draw/FreeDrawAction")),util_1=__importDefault(require("../../util")),DistanceDrawAction_1=__importDefault(require("./draw/DistanceDrawAction")),selectorPrefix="adhere-ui-interactionlayer",zIndex=19999,InteractionLayer=function(n){function t(t,e,i){var a=this;return a.update=a.update.bind(a),(a=n.call(this,{update:a.update,paneName:"markerPane",zIndex:zIndex})||this).map=null,a.el=null,a.listeners=null,a.curAction=null,a.canvasEl=null,a.ctx=null,a.assistCanvasEl=null,a.assistCtx=null,a.canvasData=[],a.emitter=new adhere_util_emitter_1.default.Events,a.isLoad=!1,a.canvasObserver=null,a.typeActionMap=new Map([[types_1.SelectType.Polygon,PolygonDrawAction_1.default],[types_1.SelectType.Distance,DistanceDrawAction_1.default],[types_1.SelectType.Circle,CircleDrawAction_1.default],[types_1.SelectType.Rectangle,RectangleDrawAction_1.default],[types_1.SelectType.Triangle,TriangleDrawAction_1.default],[types_1.SelectType.Diamond,DiamondDrawAction_1.default],[types_1.SelectType.Start,StartDrawAction_1.default],[types_1.SelectType.Free,FreeDrawAction_1.default]]),a.map=t,a.listeners=i,e&&(a.canvasData=e),a.initListeners(),a}return __extends(t,n),t.prototype.update=function(){this.isLoad?(this.curAction&&this.curAction.destroy(),this.clearDraw(),this.clearAssistDraw(),this.drawHistoryData()):(this.initCanvas(),this.initEvents(),this.clearDraw(),this.clearAssistDraw(),this.drawHistoryData(),this.isLoad=!0)},t.prototype.initListeners=function(){var e=this,i=this.listeners;i&&Object.keys(i).forEach(function(t){e.emitter.on(t,i[t])})},t.prototype.initEvents=function(){var o=this;this.el.addEventListener("mouseup",function(t){if(t&&!(2<=t.detail)){for(var e=o.getHistoryData(),i=adhere_util_1.default.clientToCtxPoint({event:t,rect:o.getCanvasEl().getBoundingClientRect()}),a=[],n=0;n<e.length;n++){var s=e[n],r=o.typeActionMap.get(s.type);"booleanPointInData"in r&&(null==r?void 0:r.booleanPointInData(o,i,s))&&a.push({index:n,data:s})}a.length?(console.log("点击了节点"),o.emitter.trigger(types_1.InteractionLayerActions.CanvasClickGeometry,JSON.parse(JSON.stringify(a[a.length-1].data)))):e.length&&(console.log("点击拉画布"),o.emitter.trigger(types_1.InteractionLayerActions.CanvasClickEmpty))}})},t.prototype.initCanvas=function(){var s=this;this.el=this.canvas.parentElement,this.canvasEl=this.canvas,this.el.style.width=this.canvasEl.width+"px",this.el.style.height=this.canvasEl.height+"px",this.canvasEl.className=""+selectorPrefix,this.ctx=this.canvasEl.getContext("2d"),this.assistCanvasEl=document.createElement("canvas"),this.assistCanvasEl.className=selectorPrefix+"-assist",this.assistCanvasEl.style.zIndex=""+(parseInt(this.canvasEl.style.zIndex)-1),this.assistCanvasEl.width=this.canvasEl.width,this.assistCanvasEl.height=this.canvasEl.height,this.assistCtx=this.assistCanvasEl.getContext("2d"),this.canvasObserver=new MutationObserver(function(t,e){for(var i=0,a=t;i<a.length;i++){var n=a[i];"attributes"===n.type&&"style"===n.attributeName&&(s.assistCanvasEl.style.left=s.canvasEl.style.left,s.assistCanvasEl.style.top=s.canvasEl.style.top)}}),this.canvasObserver.observe(this.canvasEl,{attributes:!0}),this.el.appendChild(this.assistCanvasEl),this.emitter.trigger(types_1.InteractionLayerActions.CanvasMount)},t.prototype.enableMap=function(){this.map.enableDoubleClickZoom()},t.prototype.disableMap=function(){this.map.disableDoubleClickZoom()},t.prototype.pixelToPoint=function(t){t=this.map.pixelToPoint(t);return{x:t.lng,y:t.lat}},t.prototype.pointToPixel=function(t){return this.map.pointToPixel(new BMap.Point(t.x,t.y))},t.prototype.distanceToActual=function(t){return t/util_1.default.getScale(this.map)},t.prototype.actualToDistance=function(t){return util_1.default.getScale(this.map)*t},t.prototype.getCtx=function(){return this.ctx},t.prototype.getCanvasEl=function(){return this.canvasEl},t.prototype.getAssistCanvasEl=function(){return this.assistCanvasEl},t.prototype.getAssistCtx=function(){return this.assistCtx},t.prototype.getWidth=function(){var t;return null===(t=null==this?void 0:this.getCanvasEl())||void 0===t?void 0:t.width},t.prototype.getHeight=function(){var t;return null===(t=null==this?void 0:this.getCanvasEl())||void 0===t?void 0:t.height},t.prototype.addHistoryData=function(t){this.canvasData.push(t)},t.prototype.removeHistoryDataById=function(e){var t=this.canvasData.findIndex(function(t){return t.id===e});return-1===t?[]:this.canvasData.splice(t,1)},t.prototype.drawHistoryData=function(){var a=this;this.canvasData.forEach(function(t){var e,i=a.ctx;i&&t&&(t.style&&(i.lineWidth=t.style.lineWidth,i.lineJoin=t.style.lineJoin,i.lineCap=t.style.lineCap,i.setLineDash(t.style.lineDash),i.lineDashOffset=t.style.lineDashOffset,i.strokeStyle=t.style.strokeStyle,i.fillStyle=t.style.fillStyle),null!=(e=a.typeActionMap.get(t.type))&&e.drawHistoryPath(a,i,t.data))})},t.prototype.getHistoryDataById=function(e){return this.canvasData.find(function(t){return t.id===e})},t.prototype.getHistoryData=function(){return __spreadArrays(this.canvasData)},t.prototype.setHistoryData=function(t){this.canvasData=t},t.prototype.changeAction=function(t){t!==this.curAction&&(t&&t.getStatus()!==types_1.ActionStatus.UnStart||(this.disableMap(),this.curAction&&this.curAction.destroy(),null!=t&&t.setContext(this),this.curAction=t))},t.prototype.getCurAction=function(){return this.curAction},t.prototype.start=function(t){this.curAction&&this.curAction.start(t)},t.prototype.end=function(){this.curAction&&this.curAction.end()},t.prototype.clearDraw=function(){var t=this.ctx;t&&t.clearRect(0,0,this.getWidth(),this.getHeight())},t.prototype.clearAssistDraw=function(){var t=this.assistCtx;t&&t.clearRect(0,0,this.getWidth(),this.getHeight())},t.prototype.setFrontCanvas=function(t){t.style.zIndex=""+(zIndex+1)},t.prototype.setBackCanvas=function(t){t.style.zIndex=""+(zIndex-1)},t.prototype.destroy=function(){this.curAction&&this.curAction.destroy(),this.canvasObserver&&this.canvasObserver.disconnect()},t.prototype.getMap=function(){return this.map},t}(BMap.CanvasLayer);exports.default=InteractionLayer;
//# sourceMappingURL=InteractionLayer.js.map
