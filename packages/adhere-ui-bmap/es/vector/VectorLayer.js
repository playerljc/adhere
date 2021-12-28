var __extends=this&&this.__extends||function(){var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};return function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},__spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var r=Array(t),o=0,e=0;e<n;e++)for(var i=arguments[e],s=0,a=i.length;s<a;s++,o++)r[o]=i[s];return r};import Emitter from"@baifendian/adhere-util-emitter";import Util from"@baifendian/adhere-util";import{VectorActions,VectorEventActions}from"./types";var VectorLayer=function(r){function t(t,e){var n=this;return n.update=n.update.bind(n),(n=r.call(this,{update:n.update,paneName:e.paneName,zIndex:e.zIndex})||this).isLoad=!1,n.emitter=new Emitter.Events,n.map=t,n.config=__assign({},e),n.source=e.source,n.source&&n.source.setContext(n),n.onUpdate=n.onUpdate.bind(n),n.initEvents(),n}return __extends(t,r),t.prototype.getSource=function(){return this.source},t.prototype.getZIndex=function(){return this.config.zIndex},t.prototype.setSource=function(t){this.source=t,this.source&&this.source.setContext(this),this.update()},t.prototype.drawSource=function(){var t=this.source.getFeatures();t.sort(function(t,e){return t.getZIndex()>e.getZIndex()?1:t.getZIndex()<e.getZIndex()?-1:0});var e=this.canvas.getContext("2d");e&&(t||[]).forEach(function(t){t.draw(e)})},t.prototype.firstLoad=function(){this.initCanvasEvents()},t.prototype.update=function(){console.log("update");var t=this.canvas.getContext("2d");t&&(this.isLoad||this.firstLoad(),this.isLoad=!0,console.log("clear"),t.clearRect(0,0,t.canvas.width,t.canvas.height),this.drawSource())},t.prototype.getMap=function(){return this.map},t.prototype.getEmitter=function(){return this.emitter},t.prototype.addEventListener=function(t,e){this.emitter.on(t,e)},t.prototype.removeEventListener=function(t,e){this.emitter.remove(t,e)},t.prototype.initCanvasEvents=function(){var n=this;this.canvas.addEventListener("click",function(t){var e=Util.clientToCtxPoint({event:t,rect:n.canvas.getBoundingClientRect()}),t=n.source.getFeatures().filter(function(t){return t.isPointInFeature(e,t.getStyle())});t.length?n.emitter.trigger(VectorEventActions.FEATURE_CLICK,{features:__spreadArrays(t),pixel:e}):n.emitter.trigger(VectorEventActions.VECTOR_CLICK)})},t.prototype.initEvents=function(){this.emitter.on(VectorActions.UPDATE,this.onUpdate)},t.prototype.onUpdate=function(){this.update()},t}(BMap.CanvasLayer);export default VectorLayer;
//# sourceMappingURL=VectorLayer.js.map
