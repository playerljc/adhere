var __extends=this&&this.__extends||function(){var n=function(t,o){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var a in o)o.hasOwnProperty(a)&&(t[a]=o[a])})(t,o)};return function(t,o){function a(){this.constructor=t}n(t,o),t.prototype=null===o?Object.create(o):(a.prototype=o.prototype,new a)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var o,a=1,n=arguments.length;a<n;a++)for(var i in o=arguments[a])Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);return t}).apply(this,arguments)},__spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,o=0,a=arguments.length;o<a;o++)t+=arguments[o].length;for(var n=Array(t),i=0,o=0;o<a;o++)for(var e=arguments[o],r=0,s=e.length;r<s;r++,i++)n[i]=e[r];return n};import*as turf from"@turf/turf";import MathUtil from"@baifendian/adhere-util/lib/math";import{SelectType}from"../types";import ModifyAction from"./ModifyAction";import PolygonDrawAction from"../draw/PolygonDrawAction";import defaultMoveGemStyle from"../DefaultMoveGemStyle";var PolygonModifyAction=function(o){function t(t){t=o.call(this,t)||this;return t.startIndex=-1,t}return __extends(t,o),t.prototype.drawAnchors=function(){var t;if(this.context){var o=this.context.getCtx();if(o)for(var a=PolygonDrawAction.transformOriginToReal(this.context,(null===(t=null===(t=null==this?void 0:this.data)||void 0===t?void 0:t.data)||void 0===t?void 0:t.data)||[]),n=0;n<a.length;n++){var i=a[n];o.beginPath(),this.setAnchorCircleStyle(),o.ellipse(i.x,i.y,this.anchorRadius,this.anchorRadius,45*Math.PI/180,0,2*Math.PI),o.stroke(),o.fill()}}},t.prototype.getPointInAnchor=function(t){if(!this.data)return null;for(var o=null,a=-1,n=PolygonDrawAction.transformOriginToReal(this.context,this.data.data.data),i=0;i<n.length;i++){var e=n[i],r=this.anchorRadius+this.anchorLineWidth;if(MathUtil.isPointInCircle(t,{center:e,radius:r})){o=e,a=i;break}}return o&&-1!==a?{point:o,index:a}:null},t.prototype.setResizeCursorByIndex=function(t){var o,a;this.context&&(o=this.context.getCanvasEl(),a=this.context.getAssistCanvasEl(),o&&a&&(o.style.cursor=a.style.cursor="nesw-resize"))},t.prototype.drawModify=function(t){var o=this.context,a=null==o?void 0:o.getCtx();o&&a&&this.data&&this.startPoint&&-1!==this.startIndex&&((a=o.getHistoryDataById(this.data.data.id))&&(a.data[this.startIndex]=o.pixelToPoint(t),this.data.data=__assign({},a),o.clearDraw(),o.drawHistoryData(),this.drawAnchors()))},t.prototype.drawMove=function(t,o){var a,n,i=this.context,e=null==i?void 0:i.getCtx();i&&e&&this.data&&((e=i.getHistoryDataById(this.data.data.id))&&(t=i.pixelToPoint(t),o=i.pixelToPoint(o),a=o.x-t.x,n=o.y-t.y,e.data.forEach(function(t){t.x+=a,t.y+=n}),this.data.data=__assign({},e),i.clearDraw(),i.drawHistoryData(),this.drawAnchors()))},t.prototype.getSelectType=function(){return SelectType.Polygon},t.prototype.isCanMove=function(t){if(!this.data)return!1;var o=PolygonDrawAction.transformOriginToReal(this.context,__spreadArrays(null===(a=null===(o=null==this?void 0:this.data)||void 0===o?void 0:o.data)||void 0===a?void 0:a.data));o.push(o[0]);var a=turf.point([t.x,t.y]),o=turf.polygon([o.map(function(t){return[t.x,t.y]})]);return turf.booleanPointInPolygon(a,o)&&!this.getPointInAnchor(t)},t.prototype.drawMoveGeometry=function(){this.context&&this.data&&PolygonDrawAction.draw(this.context,this.context.getAssistCtx(),this.data)},t.prototype.drawMoveGeometry=function(t,o){var a,n,i;this.context&&this.data&&t&&o&&((a=__assign({},this.data.data)).data=a.data.map(function(t){return __assign({},t)}),t=this.context.pixelToPoint(t),o=this.context.pixelToPoint(o),n=o.x-t.x,i=o.y-t.y,a.data&&a.data.length&&(a.data.forEach(function(t){t.x+=n,t.y+=i}),a.style&&(a.style.globalAlpha=defaultMoveGemStyle.globalAlpha,a.style.strokeStyle=defaultMoveGemStyle.strokeStyle,a.style.lineWidth=defaultMoveGemStyle.lineWidth,a.style.lineDash=defaultMoveGemStyle.lineDash,a.style.lineDashOffset=defaultMoveGemStyle.lineDashOffset),PolygonDrawAction.draw(this.context,this.context.getAssistCtx(),a)))},t}(ModifyAction);export default PolygonModifyAction;
//# sourceMappingURL=PolygonModifyAction.js.map