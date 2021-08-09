var __extends=this&&this.__extends||function(){var e=function(t,i){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var o in i)i.hasOwnProperty(o)&&(t[o]=i[o])})(t,i)};return function(t,i){function o(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(o.prototype=i.prototype,new o)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var i,o=1,e=arguments.length;o<e;o++)for(var r in i=arguments[o])Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);return t}).apply(this,arguments)},__spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,i=0,o=arguments.length;i<o;i++)t+=arguments[i].length;for(var e=Array(t),r=0,i=0;i<o;i++)for(var a=arguments[i],n=0,s=a.length;n<s;n++,r++)e[r]=a[n];return e};import*as turf from"@turf/turf";import MathUtil from"@baifendian/adhere-util/lib/math";import{SelectType}from"../types";import ModifyAction from"./ModifyAction";import TriangleDrawAction from"../draw/TriangleDrawAction";import defaultMoveGemStyle from"../defaultMoveGemStyle";var TriangleModifyAction=function(i){function t(t){t=i.call(this,t)||this;return t.rectangleAnchorPoints=[],t.indexToModifyHandlerMapping=new Map([[0,t.modifyDataByLeftTop],[1,t.modifyDataByCenterTop],[2,t.modifyDataByRightTop],[3,t.modifyDataByRightCenter],[4,t.modifyDataByRightBottom],[5,t.modifyDataByCenterBottom],[6,t.modifyDataByLeftBottom],[7,t.modifyDataByLeftCenter]]),t.ResizeCursorMapping=new Map([[0,"nwse-resize"],[1,"ns-resize"],[2,"nesw-resize"],[3,"ew-resize"],[4,"nwse-resize"],[5,"ns-resize"],[6,"nesw-resize"],[7,"ew-resize"]]),t}return __extends(t,i),t.prototype.drawAnchors=function(){if(this.context){var t=this.context.getCtx();if(t){var i=(null===(a=null===(r=null==this?void 0:this.data)||void 0===r?void 0:r.data)||void 0===a?void 0:a.data).points;if(i&&i.length){var o={x:i[0].x,y:i[1].y},e=i[2].x-i[0].x,r=i[2].y-i[1].y,a=e/2,i=r/2;this.rectangleAnchorPoints=[__assign({},o),{x:o.x+a,y:o.y},{x:o.x+e,y:o.y},{x:o.x+e,y:o.y+i},{x:o.x+e,y:o.y+r},{x:o.x+a,y:o.y+r},{x:o.x,y:o.y+r},{x:o.x,y:o.y+i}];for(var n=0;n<this.rectangleAnchorPoints.length;n++){var s=this.rectangleAnchorPoints[n];t.beginPath(),this.setAnchorCircleStyle(),t.ellipse(s.x,s.y,this.anchorRadius,this.anchorRadius,45*Math.PI/180,0,2*Math.PI),t.stroke(),t.fill()}t.beginPath(),this.setAnchorLineStyle(),t.moveTo(o.x,o.y),t.lineTo(o.x+e,o.y),t.lineTo(o.x+e,o.y+r),t.lineTo(o.x,o.y+r),t.lineTo(o.x,o.y),t.stroke()}}}},t.prototype.getPointInAnchor=function(t){if(!this.data)return null;for(var i=null,o=-1,e=0;e<this.rectangleAnchorPoints.length;e++){var r=this.rectangleAnchorPoints[e],a=this.anchorRadius+this.anchorLineWidth;if(MathUtil.isPointInCircle(t,{center:r,radius:a})){i=r,o=e;break}}return i&&-1!==o?{point:i,index:o}:null},t.prototype.setResizeCursorByIndex=function(t){var i,o;this.context&&(i=this.context.getCanvasEl(),o=this.context.getAssistCanvasEl(),i&&o&&(i.style.cursor=o.style.cursor=this.ResizeCursorMapping.get(t)))},t.prototype.drawModify=function(t){var i,o=this.context,e=null==o?void 0:o.getCtx();o&&e&&this.data&&this.startPoint&&(!(i=o.getHistoryDataById(this.data.data.id))||(e=this.indexToModifyHandlerMapping.get(this.startIndex))&&e.call(this,t)&&(this.data.data=i,o.clearDraw(),o.drawHistoryData(),this.drawAnchors()))},t.prototype.drawMove=function(t,i){var o,e,r=this.context,a=null==r?void 0:r.getCtx();r&&a&&this.data&&((a=r.getHistoryDataById(this.data.data.id))&&(o=i.x-t.x,e=i.y-t.y,a.data.points.forEach(function(t){t.x+=o,t.y+=e}),this.data.data=a,r.clearDraw(),r.drawHistoryData(),this.drawAnchors()))},t.prototype.getSelectType=function(){return SelectType.Triangle},t.prototype.getBox=function(){var t=this.context;if(!t||!this.data)return null;var i=t.getHistoryDataById(this.data.data.id);if(!i)return null;var o=i.data.points;if(!o||!o.length)return null;t={x:o[0].x,y:o[1].y},i=o[2].x-o[0].x,o=o[2].y-o[1].y;return{leftTop:__assign({},t),rightTop:{x:t.x+i,y:t.y},rightBottom:{x:t.x+i,y:t.y+o},leftBottom:{x:t.x,y:t.y+o}}},t.prototype.modifyDataByLeftTop=function(t){var i=this.context,o=null==i?void 0:i.getCtx();if(!(i&&o&&this.data&&this.startPoint))return!1;var e=i.getHistoryDataById(this.data.data.id);if(!e)return!1;o=e.data.points;if(!o||!o.length)return!1;i=this.getBox();if(!i)return!1;if(t.x>i.rightTop.x||t.y>i.rightBottom.y)return!1;o=i.rightTop.x-t.x,i=i.rightBottom.y-t.y;return e.data.points=[{x:t.x,y:t.y+i},{x:t.x+o/2,y:t.y},{x:t.x+o,y:t.y+i}],!0},t.prototype.modifyDataByCenterTop=function(t){var i=this.context,o=null==i?void 0:i.getCtx();if(!(i&&o&&this.data&&this.startPoint))return!1;var e=i.getHistoryDataById(this.data.data.id);if(!e)return!1;var r=e.data.points;if(!r||!r.length)return!1;o=this.getBox();if(!o)return!1;if(t.y>o.leftBottom.y)return!1;i={x:o.leftTop.x,y:t.y},r=o.rightTop.x-o.leftTop.x,t=o.rightBottom.y-t.y;return e.data.points=[{x:i.x,y:i.y+t},{x:i.x+r/2,y:i.y},{x:i.x+r,y:i.y+t}],!0},t.prototype.modifyDataByRightTop=function(t){var i=this.context,o=null==i?void 0:i.getCtx();if(!(i&&o&&this.data&&this.startPoint))return!1;var e=i.getHistoryDataById(this.data.data.id);if(!e)return!1;var r=e.data.points;if(!r||!r.length)return!1;o=this.getBox();if(!o)return!1;if(t.x<o.leftTop.x||t.y>o.leftBottom.y)return!1;i={x:o.leftTop.x,y:t.y},r=t.x-o.leftTop.x,t=o.rightBottom.y-t.y;return e.data.points=[{x:i.x,y:i.y+t},{x:i.x+r/2,y:i.y},{x:i.x+r,y:i.y+t}],!0},t.prototype.modifyDataByRightCenter=function(t){var i=this.context,o=null==i?void 0:i.getCtx();if(!(i&&o&&this.data&&this.startPoint))return!1;var e=i.getHistoryDataById(this.data.data.id);if(!e)return!1;o=e.data.points;if(!o||!o.length)return!1;i=this.getBox();if(!i)return!1;if(t.x<i.leftTop.x)return!1;o={x:i.leftTop.x,y:i.leftTop.y},t=t.x-i.leftTop.x,i=i.rightBottom.y-i.rightTop.y;return e.data.points=[{x:o.x,y:o.y+i},{x:o.x+t/2,y:o.y},{x:o.x+t,y:o.y+i}],!0},t.prototype.modifyDataByRightBottom=function(t){var i=this.context,o=null==i?void 0:i.getCtx();if(!(i&&o&&this.data&&this.startPoint))return!1;var e=i.getHistoryDataById(this.data.data.id);if(!e)return!1;var r=e.data.points;if(!r||!r.length)return!1;o=this.getBox();if(!o)return!1;if(t.x<o.leftTop.x||t.y<o.leftTop.y)return!1;i=__assign({},o.leftTop),r=t.x-o.leftTop.x,o=t.y-o.leftTop.y;return e.data.points=[{x:i.x,y:i.y+o},{x:i.x+r/2,y:i.y},{x:i.x+r,y:i.y+o}],!0},t.prototype.modifyDataByCenterBottom=function(t){var i=this.context,o=null==i?void 0:i.getCtx();if(!(i&&o&&this.data&&this.startPoint))return!1;var e=i.getHistoryDataById(this.data.data.id);if(!e)return!1;var r=e.data.points;if(!r||!r.length)return!1;o=this.getBox();if(!o)return!1;if(t.y<o.leftTop.y)return!1;i=__assign({},o.leftTop),r=o.rightTop.x-o.leftTop.x,o=t.y-o.leftTop.y;return e.data.points=[{x:i.x,y:i.y+o},{x:i.x+r/2,y:i.y},{x:i.x+r,y:i.y+o}],!0},t.prototype.modifyDataByLeftBottom=function(t){var i=this.context,o=null==i?void 0:i.getCtx();if(!(i&&o&&this.data&&this.startPoint))return!1;var e=i.getHistoryDataById(this.data.data.id);if(!e)return!1;var r=e.data.points;if(!r||!r.length)return!1;o=this.getBox();if(!o)return!1;if(t.x>o.rightBottom.x||t.y<o.rightTop.y)return!1;i={x:t.x,y:o.leftTop.y},r=o.rightBottom.x-t.x,o=t.y-o.rightTop.y;return e.data.points=[{x:i.x,y:i.y+o},{x:i.x+r/2,y:i.y},{x:i.x+r,y:i.y+o}],!0},t.prototype.modifyDataByLeftCenter=function(t){var i=this.context,o=null==i?void 0:i.getCtx();if(!(i&&o&&this.data&&this.startPoint))return!1;var e=i.getHistoryDataById(this.data.data.id);if(!e)return!1;o=e.data.points;if(!o||!o.length)return!1;i=this.getBox();if(!i)return!1;if(t.x>i.rightBottom.x)return!1;o={x:t.x,y:i.leftTop.y},t=i.rightBottom.x-t.x,i=i.rightBottom.y-i.rightTop.y;return e.data.points=[{x:o.x,y:o.y+i},{x:o.x+t/2,y:o.y},{x:o.x+t,y:o.y+i}],!0},t.prototype.isCanMove=function(t){if(!this.data)return!1;var i=__spreadArrays((null===(o=null===(i=null===(o=null==this?void 0:this.data)||void 0===o?void 0:o.data)||void 0===i?void 0:i.data)||void 0===o?void 0:o.points)||[]);i.push(i[0]);var o=turf.point([t.x,t.y]),i=turf.polygon([i.map(function(t){return[t.x,t.y]})]);return turf.booleanPointInPolygon(o,i)&&!this.getPointInAnchor(t)},t.prototype.drawMoveGeometry=function(){this.context&&this.data&&TriangleDrawAction.draw(this.context.getAssistCtx(),this.data)},t.prototype.drawMoveGeometry=function(t,i){var o,e,r;this.context&&this.data&&t&&i&&((o=__assign({},this.data.data)).data=__assign(__assign({},o.data),{points:o.data.points.map(function(t){return __assign({},t)})}),e=i.x-t.x,r=i.y-t.y,o.data&&o.data.points&&o.data.points.length&&(o.data.points.forEach(function(t){t.x+=e,t.y+=r}),o.style&&(o.style.globalAlpha=defaultMoveGemStyle.globalAlpha,o.style.strokeStyle=defaultMoveGemStyle.strokeStyle,o.style.lineWidth=defaultMoveGemStyle.lineWidth,o.style.lineDash=defaultMoveGemStyle.lineDash,o.style.lineDashOffset=defaultMoveGemStyle.lineDashOffset),TriangleDrawAction.draw(this.context.getAssistCtx(),o)))},t.prototype.destroy=function(){this.startIndex=-1,i.prototype.destroy.call(this)},t}(ModifyAction);export default TriangleModifyAction;
//# sourceMappingURL=TriangleModifyAction.js.map
