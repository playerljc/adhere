"use strict";var __extends=this&&this.__extends||function(){var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};return function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},__spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;for(var n=Array(t),i=0,e=0;e<r;e++)for(var o=arguments[e],s=0,a=o.length;s<a;s++,i++)n[i]=o[s];return n},__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},adhere_util_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("@baifendian/adhere-util"))),adhere_util_emitter_1=__importDefault(require("@baifendian/adhere-util-emitter")),types_1=require("./types"),VectorLayer=function(n){function t(t,e){var r=this;return r.update=r.update.bind(r),(r=n.call(this,{update:r.update,paneName:e.paneName,zIndex:e.zIndex})||this).isLoad=!1,r.emitter=new adhere_util_emitter_1.default.Events,r.map=t,r.config=__assign({},e),r.source=e.source,r.source&&r.source.setContext(r),r.onUpdate=r.onUpdate.bind(r),r.initEvents(),r}return __extends(t,n),t.prototype.getSource=function(){return this.source},t.prototype.getZIndex=function(){return this.config.zIndex},t.prototype.setSource=function(t){this.source=t,this.source&&this.source.setContext(this),this.update()},t.prototype.drawSource=function(){var t=this.source.getFeatures(),e=(t.sort(function(t,e){return t.getZIndex()>e.getZIndex()?1:t.getZIndex()<e.getZIndex()?-1:0}),this.canvas.getContext("2d"));e&&(t||[]).forEach(function(t){t.draw(e)})},t.prototype.firstLoad=function(){this.initCanvasEvents()},t.prototype.update=function(){var t=this.canvas.getContext("2d");t&&(this.isLoad||this.firstLoad(),this.isLoad=!0,t.clearRect(0,0,t.canvas.width,t.canvas.height),this.drawSource())},t.prototype.getMap=function(){return this.map},t.prototype.getEmitter=function(){return this.emitter},t.prototype.addEventListener=function(t,e){this.emitter.on(t,e)},t.prototype.removeEventListener=function(t,e){this.emitter.remove(t,e)},t.prototype.initCanvasEvents=function(){var r=this;this.canvas.addEventListener("click",function(t){var e=adhere_util_1.default.clientToCtxPoint({event:t,rect:r.canvas.getBoundingClientRect()}),t=r.source.getFeatures().filter(function(t){return t.isPointInFeature(e,t.getStyle())});t.length?r.emitter.trigger(types_1.VectorEventActions.FEATURE_CLICK,{features:__spreadArrays(t),pixel:e}):r.emitter.trigger(types_1.VectorEventActions.VECTOR_CLICK)})},t.prototype.initEvents=function(){this.emitter.on(types_1.VectorActions.UPDATE,this.onUpdate)},t.prototype.onUpdate=function(){this.update()},t}(BMap.CanvasLayer);exports.default=VectorLayer;
//# sourceMappingURL=VectorLayer.js.map
