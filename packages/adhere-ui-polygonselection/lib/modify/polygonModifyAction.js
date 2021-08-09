var __extends=this&&this.__extends||function(){var e=function(t,a){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var o in a)a.hasOwnProperty(o)&&(t[o]=a[o])})(t,a)};return function(t,a){function o(){this.constructor=t}e(t,a),t.prototype=null===a?Object.create(a):(o.prototype=a.prototype,new o)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var a,o=1,e=arguments.length;o<e;o++)for(var r in a=arguments[o])Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);return t}).apply(this,arguments)},__spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,a=0,o=arguments.length;a<o;a++)t+=arguments[a].length;for(var e=Array(t),r=0,a=0;a<o;a++)for(var n=arguments[a],i=0,s=n.length;i<s;i++,r++)e[r]=n[i];return e};import*as turf from"@turf/turf";import MathUtil from"@baifendian/adhere-util/lib/math";import{SelectType}from"../types";import ModifyAction from"./ModifyAction";import PolygonDrawAction from"../draw/PolygonDrawAction";import defaultMoveGemStyle from"../defaultMoveGemStyle";var PolygonModifyAction=function(a){function t(t){t=a.call(this,t)||this;return t.startIndex=-1,t}return __extends(t,a),t.prototype.drawAnchors=function(){var t;if(this.context){var a=this.context.getCtx();if(a)for(var o=(null===(t=null===(t=null==this?void 0:this.data)||void 0===t?void 0:t.data)||void 0===t?void 0:t.data)||[],e=0;e<o.length;e++){var r=o[e];a.beginPath(),this.setAnchorCircleStyle(),a.ellipse(r.x,r.y,this.anchorRadius,this.anchorRadius,45*Math.PI/180,0,2*Math.PI),a.stroke(),a.fill()}}},t.prototype.getPointInAnchor=function(t){if(!this.data)return null;for(var a=null,o=-1,e=this.data.data.data,r=0;r<e.length;r++){var n=e[r],i=this.anchorRadius+this.anchorLineWidth;if(MathUtil.isPointInCircle(t,{center:n,radius:i})){a=n,o=r;break}}return a&&-1!==o?{point:a,index:o}:null},t.prototype.setResizeCursorByIndex=function(t){var a,o;this.context&&(a=this.context.getCanvasEl(),o=this.context.getAssistCanvasEl(),a&&o&&(a.style.cursor=o.style.cursor="nesw-resize"))},t.prototype.drawModify=function(t){var a=this.context,o=null==a?void 0:a.getCtx();a&&o&&this.data&&this.startPoint&&-1!==this.startIndex&&((o=a.getHistoryDataById(this.data.data.id))&&(o.data[this.startIndex]=t,this.data.data=o,a.clearDraw(),a.drawHistoryData(),this.drawAnchors()))},t.prototype.drawMove=function(t,a){var o,e,r=this.context,n=null==r?void 0:r.getCtx();r&&n&&this.data&&((n=r.getHistoryDataById(this.data.data.id))&&(o=a.x-t.x,e=a.y-t.y,n.data.forEach(function(t){t.x+=o,t.y+=e}),this.data.data=n,r.clearDraw(),r.drawHistoryData(),this.drawAnchors()))},t.prototype.getSelectType=function(){return SelectType.Polygon},t.prototype.isCanMove=function(t){if(!this.data)return!1;var a=__spreadArrays(null===(o=null===(a=null==this?void 0:this.data)||void 0===a?void 0:a.data)||void 0===o?void 0:o.data);a.push(a[0]);var o=turf.point([t.x,t.y]),a=turf.polygon([a.map(function(t){return[t.x,t.y]})]);return turf.booleanPointInPolygon(o,a)&&!this.getPointInAnchor(t)},t.prototype.drawMoveGeometry=function(){this.context&&this.data&&PolygonDrawAction.draw(this.context.getAssistCtx(),this.data)},t.prototype.drawMoveGeometry=function(t,a){var o,e,r;this.context&&this.data&&t&&a&&((o=__assign({},this.data.data)).data=o.data.map(function(t){return __assign({},t)}),e=a.x-t.x,r=a.y-t.y,o.data&&o.data.length&&(o.data.forEach(function(t){t.x+=e,t.y+=r}),o.style&&(o.style.globalAlpha=defaultMoveGemStyle.globalAlpha,o.style.strokeStyle=defaultMoveGemStyle.strokeStyle,o.style.lineWidth=defaultMoveGemStyle.lineWidth,o.style.lineDash=defaultMoveGemStyle.lineDash,o.style.lineDashOffset=defaultMoveGemStyle.lineDashOffset),PolygonDrawAction.draw(this.context.getAssistCtx(),o)))},t}(ModifyAction);export default PolygonModifyAction;
//# sourceMappingURL=PolygonModifyAction.js.map
