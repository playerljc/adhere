var __extends=this&&this.__extends||function(){var i=function(t,n){return(i=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,n){t.__proto__=n}:function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}))(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=t}i(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}}(),__spreadArray=this&&this.__spreadArray||function(t,n,e){if(e||2===arguments.length)for(var i,o=0,r=n.length;o<r;o++)!i&&o in n||((i=i||Array.prototype.slice.call(n,0,o))[o]=n[o]);return t.concat(i||Array.prototype.slice.call(n))};import MathUtil from"@baifendian/adhere-util";import Emitter from"@baifendian/adhere-util-emitter";import Cropping from"./cropping";import CircleDrawAction from"./draw/CircleDrawAction";import DiamondDrawAction from"./draw/DiamondDrawAction";import FreeDrawAction from"./draw/FreeDrawAction";import PolygonDrawAction from"./draw/PolygonDrawAction";import RectangleDrawAction from"./draw/RectangleDrawAction";import StartDrawAction from"./draw/StartDrawAction";import TriangleDrawAction from"./draw/TriangleDrawAction";import{ActionStatus,PolygonSelectionActions,SelectType}from"./types";var selectorPrefix="adhere-ui-polygon-selection",PolygonSelection=function(o){function t(t,n,e){var i=o.call(this)||this;return i.el=null,i.listeners=null,i.curAction=null,i.canvasEl=null,i.ctx=null,i.assistCanvasEl=null,i.assistCtx=null,i.canvasData=[],i.typeActionMap=new Map([[SelectType.Polygon,PolygonDrawAction],[SelectType.Circle,CircleDrawAction],[SelectType.Rectangle,RectangleDrawAction],[SelectType.Triangle,TriangleDrawAction],[SelectType.Diamond,DiamondDrawAction],[SelectType.Start,StartDrawAction],[SelectType.Free,FreeDrawAction]]),i.el=t,i.listeners=e,n&&(i.canvasData=n),i.onResize=i.onResize.bind(i),i.initListeners(),i.initCanvas(),i.initEvents(),i}return __extends(t,o),t.prototype.initListeners=function(){var n=this,e=this.listeners;e&&Object.keys(e).forEach(function(t){n.on(t,e[t])})},t.prototype.initEvents=function(){var s=this;this.el&&this.el.addEventListener("mouseup",function(t){if(t){for(var n=s.getHistoryData(),e=MathUtil.clientToCtxPoint({event:t,rect:s.el.getBoundingClientRect()}),i=[],o=0;o<n.length;o++){var r=n[o],a=s.typeActionMap.get(r.type);"booleanPointInData"in a&&(null==a?void 0:a.booleanPointInData(e,r))&&i.push(o)}i.length?s.trigger(PolygonSelectionActions.CanvasClickGeometry,JSON.parse(JSON.stringify(n[i[i.length-1]]))):n.length&&s.trigger(PolygonSelectionActions.CanvasClickEmpty)}})},t.prototype.initCanvas=function(){this.el&&(this.canvasEl=document.createElement("canvas"),this.canvasEl.className=selectorPrefix,this.ctx=this.canvasEl.getContext("2d"),this.assistCanvasEl=document.createElement("canvas"),this.assistCanvasEl.className="".concat(selectorPrefix,"-assist"),this.assistCtx=this.assistCanvasEl.getContext("2d"),this.el.appendChild(this.canvasEl),this.el.appendChild(this.assistCanvasEl),this.trigger(PolygonSelectionActions.CanvasMount),this.adapterCanvas())},t.prototype.adapterCanvas=function(){var t,n=this,e=n.canvasEl,i=n.assistCanvasEl,n=n.el;(null!==(t=null!==(t=!n)?t:!e)?!t:i)&&(e.width=null!=(t=null==n?void 0:n.offsetWidth)?t:0,e.height=null!=(t=null==n?void 0:n.offsetHeight)?t:0,i.width=null!=(e=null==n?void 0:n.offsetWidth)?e:0,i.height=null!=(t=null==n?void 0:n.offsetHeight)?t:0,this.clearDraw(),this.clearAssistDraw(),this.drawHistoryData())},t.prototype.onResize=function(){this.adapterCanvas()},t.prototype.getCtx=function(){return this.ctx},t.prototype.getCanvasEl=function(){return this.canvasEl},t.prototype.getAssistCanvasEl=function(){return this.assistCanvasEl},t.prototype.getAssistCtx=function(){return this.assistCtx},t.prototype.getWidth=function(){var t;return null!=(t=null==(t=null==this?void 0:this.el)?void 0:t.offsetWidth)?t:0},t.prototype.getHeight=function(){var t;return null!=(t=null==(t=null==this?void 0:this.el)?void 0:t.offsetHeight)?t:0},t.prototype.addHistoryData=function(t){this.canvasData.push(t)},t.prototype.removeHistoryDataById=function(n){var t=this.canvasData.findIndex(function(t){return t.id===n});return-1===t?[]:this.canvasData.splice(t,1)},t.prototype.drawHistoryData=function(){var i=this;this.canvasData.forEach(function(t){var n,e=i.ctx;e&&t&&null!=(n=i.typeActionMap.get(t.type))&&n.drawHistoryPath(e,t)})},t.prototype.getHistoryDataById=function(n){return this.canvasData.find(function(t){return t.id===n})},t.prototype.getHistoryData=function(){return __spreadArray([],this.canvasData,!0)},t.prototype.setHistoryData=function(t){this.canvasData=t},t.prototype.changeAction=function(t){t!==this.curAction&&t.getStatus()===ActionStatus.UnStart&&(this.curAction&&this.curAction.destroy(),null!=t&&t.setContext(this),this.curAction=t)},t.prototype.getCurAction=function(){return this.curAction},t.prototype.start=function(t){this.curAction&&this.curAction.start(t)},t.prototype.end=function(){this.curAction&&this.curAction.end()},t.prototype.clearDraw=function(){var t=this.ctx;t&&t.clearRect(0,0,this.getWidth(),this.getHeight())},t.prototype.clearAssistDraw=function(){var t=this.assistCtx;t&&t.clearRect(0,0,this.getWidth(),this.getHeight())},t.prototype.clearHistoryData=function(){this.canvasData=[]},t.prototype.clearCanvasAll=function(){this.clearDraw(),this.clearAssistDraw(),this.clearHistoryData()},t.prototype.setFrontCanvas=function(t){t.style.zIndex="9999"},t.prototype.setBackCanvas=function(t){t.style.zIndex="1"},t.prototype.destroy=function(){"undefined"!=typeof window&&window.removeEventListener("resize",this.onResize),this.curAction&&this.curAction.destroy(),this.clearAll(),this.el&&(this.el.innerHTML="")},t.Cropping=Cropping,t}(Emitter.Events);export default PolygonSelection;
//# sourceMappingURL=PolygonSelection.js.map
