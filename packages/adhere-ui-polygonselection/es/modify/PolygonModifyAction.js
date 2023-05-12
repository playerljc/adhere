var __extends=this&&this.__extends||function(){var n=function(t,o){return(n=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,o){t.__proto__=o}:function(t,o){for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])}))(t,o)};return function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function a(){this.constructor=t}n(t,o),t.prototype=null===o?Object.create(o):(a.prototype=o.prototype,new a)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var o,a=1,n=arguments.length;a<n;a++)for(var e in o=arguments[a])Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e]);return t}).apply(this,arguments)},__spreadArray=this&&this.__spreadArray||function(t,o,a){if(a||2===arguments.length)for(var n,e=0,r=o.length;e<r;e++)!n&&e in o||((n=n||Array.prototype.slice.call(o,0,e))[e]=o[e]);return t.concat(n||Array.prototype.slice.call(o))};import MathUtil from"@baifendian/adhere-util";import*as turf from"@turf/turf";import defaultMoveGemStyle from"../defaultMoveGemStyle";import PolygonDrawAction from"../draw/PolygonDrawAction";import{SelectType}from"../types";import ModifyAction from"./ModifyAction";var PolygonModifyAction=function(o){function t(t){t=o.call(this,t)||this;return t.startIndex=-1,t}return __extends(t,o),t.prototype.drawAnchors=function(){var t;if(this.context){var o=this.context.getCtx();if(o)for(var a=(null==(t=null==(t=null==this?void 0:this.data)?void 0:t.data)?void 0:t.data)||[],n=0;n<a.length;n++){var e=a[n];o.beginPath(),this.setAnchorCircleStyle(),o.ellipse(e.x,e.y,this.anchorRadius,this.anchorRadius,45*Math.PI/180,0,2*Math.PI),o.closePath(),o.stroke(),o.fill()}}},t.prototype.getPointInAnchor=function(t){if(!this.data)return null;for(var o=null,a=-1,n=this.data.data.data,e=0;e<n.length;e++){var r=n[e],i=this.anchorRadius+this.anchorLineWidth;if(MathUtil.isPointInCircle(t,{center:r,radius:i})){o=r,a=e;break}}return o&&-1!==a?{point:o,index:a}:null},t.prototype.setResizeCursorByIndex=function(t){var o,a;this.context&&(o=this.context.getCanvasEl(),a=this.context.getAssistCanvasEl(),o)&&a&&(o.style.cursor=a.style.cursor="nesw-resize")},t.prototype.drawModify=function(t){var o=this.context,a=null==o?void 0:o.getCtx();o&&a&&this.data&&this.startPoint&&-1!==this.startIndex&&(a=o.getHistoryDataById(this.data.data.id))&&(a.data[this.startIndex]=t,this.data.data=a,o.clearDraw(),o.drawHistoryData(),this.drawAnchors())},t.prototype.drawMove=function(t,o){var a,n,e=this.context,r=null==e?void 0:e.getCtx();e&&r&&this.data&&(r=e.getHistoryDataById(this.data.data.id))&&(a=o.x-t.x,n=o.y-t.y,r.data.forEach(function(t){t.x+=a,t.y+=n}),this.data.data=r,e.clearDraw(),e.drawHistoryData(),this.drawAnchors())},t.prototype.getSelectType=function(){return SelectType.Polygon},t.prototype.isCanMove=function(t){var o,a;return!!this.data&&((a=__spreadArray([],null==(a=null==(a=null==this?void 0:this.data)?void 0:a.data)?void 0:a.data,!0)).push(a[0]),o=turf.point([t.x,t.y]),a=turf.polygon([a.map(function(t){return[t.x,t.y]})]),turf.booleanPointInPolygon(o,a))&&!this.getPointInAnchor(t)},t.prototype.drawMoveGeometry=function(){this.context&&this.data&&PolygonDrawAction.draw(this.context.getAssistCtx(),this.data)},t.prototype.drawMoveGeometry=function(t,o){var a,n,e;return this.context&&this.data&&t&&o?((a=JSON.parse(JSON.stringify(this.data.data))).data=a.data.map(function(t){return __assign({},t)}),n=o.x-t.x,e=o.y-t.y,a.data&&a.data.length&&(a.data.forEach(function(t){t.x+=n,t.y+=e}),o=__assign(__assign({},defaultMoveGemStyle),a.style||{}),a.style.lineWidth=o.lineWidth,a.style.lineJoin=o.lineJoin,a.style.lineCap=o.lineCap,a.lineDash=o.lineDash,a.style.lineDashOffset=o.lineDashOffset,a.style.strokeStyle=o.strokeStyle,a.style.fillStyle=o.fillStyle,a.style.globalAlpha=o.globalAlpha||1,PolygonDrawAction.draw(this.context.getAssistCtx(),a)),a):null},t}(ModifyAction);export default PolygonModifyAction;
//# sourceMappingURL=PolygonModifyAction.js.map
