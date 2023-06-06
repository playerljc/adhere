var __extends=this&&this.__extends||function(){var a=function(t,o){return(a=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,o){t.__proto__=o}:function(t,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}))(t,o)};return function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function i(){this.constructor=t}a(t,o),t.prototype=null===o?Object.create(o):(i.prototype=o.prototype,new i)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var o,i=1,a=arguments.length;i<a;i++)for(var e in o=arguments[i])Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e]);return t}).apply(this,arguments)},__spreadArray=this&&this.__spreadArray||function(t,o,i){if(i||2===arguments.length)for(var a,e=0,n=o.length;e<n;e++)!a&&e in o||((a=a||Array.prototype.slice.call(o,0,e))[e]=o[e]);return t.concat(a||Array.prototype.slice.call(o))};import MathUtil from"@baifendian/adhere-util";import*as turf from"@turf/turf";import TriangleDrawAction from"../draw/TriangleDrawAction";import{SelectType}from"../types";import ModifyAction from"./ModifyAction";var TriangleModifyAction=function(o){function t(t){t=o.call(this,t)||this;return t.rectangleAnchorPoints=[],t.indexToModifyHandlerMapping=new Map([[0,t.modifyDataByLeftTop],[1,t.modifyDataByCenterTop],[2,t.modifyDataByRightTop],[3,t.modifyDataByRightCenter],[4,t.modifyDataByRightBottom],[5,t.modifyDataByCenterBottom],[6,t.modifyDataByLeftBottom],[7,t.modifyDataByLeftCenter]]),t.ResizeCursorMapping=new Map([[0,"nwse-resize"],[1,"ns-resize"],[2,"nesw-resize"],[3,"ew-resize"],[4,"nwse-resize"],[5,"ns-resize"],[6,"nesw-resize"],[7,"ew-resize"]]),t}return __extends(t,o),t.prototype.drawAnchors=function(){if(this.context){var t=this.context.getCtx();if(t){var o=(null==(o=null==(o=null==this?void 0:this.data)?void 0:o.data)?void 0:o.data).points;if(o&&o.length){var i={x:o[0].x,y:o[1].y},a=o[2].x-o[0].x,o=o[2].y-o[1].y,e=a/2,n=o/2;this.rectangleAnchorPoints=[__assign({},i),{x:i.x+e,y:i.y},{x:i.x+a,y:i.y},{x:i.x+a,y:i.y+n},{x:i.x+a,y:i.y+o},{x:i.x+e,y:i.y+o},{x:i.x,y:i.y+o},{x:i.x,y:i.y+n}];for(var r=0;r<this.rectangleAnchorPoints.length;r++){var s=this.rectangleAnchorPoints[r];t.beginPath(),this.setAnchorCircleStyle(),t.ellipse(s.x,s.y,this.anchorRadius,this.anchorRadius,45*Math.PI/180,0,2*Math.PI),t.closePath(),t.stroke(),t.fill()}t.beginPath(),this.setAnchorLineStyle(),t.moveTo(i.x,i.y),t.lineTo(i.x+a,i.y),t.lineTo(i.x+a,i.y+o),t.lineTo(i.x,i.y+o),t.lineTo(i.x,i.y),t.closePath(),t.stroke()}}}},t.prototype.getPointInAnchor=function(t){if(!this.data)return null;for(var o=null,i=-1,a=0;a<this.rectangleAnchorPoints.length;a++){var e=this.rectangleAnchorPoints[a],n=this.anchorRadius+this.anchorLineWidth;if(MathUtil.isPointInCircle(t,{center:e,radius:n})){o=e,i=a;break}}return o&&-1!==i?{point:o,index:i}:null},t.prototype.setResizeCursorByIndex=function(t){var o,i;this.context&&(o=this.context.getCanvasEl(),i=this.context.getAssistCanvasEl(),o)&&i&&(o.style.cursor=i.style.cursor=this.ResizeCursorMapping.get(t))},t.prototype.drawModify=function(t){var o,i=this.context,a=null==i?void 0:i.getCtx();i&&a&&this.data&&this.startPoint&&(a=i.getHistoryDataById(this.data.data.id))&&(o=this.indexToModifyHandlerMapping.get(this.startIndex))&&o.call(this,t)&&(this.data.data=a,i.clearDraw(),i.drawHistoryData(),this.drawAnchors())},t.prototype.drawMove=function(t,o){var i,a,e=this.context,n=null==e?void 0:e.getCtx();e&&n&&this.data&&(n=e.getHistoryDataById(this.data.data.id))&&(i=o.x-t.x,a=o.y-t.y,n.data.points.forEach(function(t){t.x+=i,t.y+=a}),this.data.data=n,e.clearDraw(),e.drawHistoryData(),this.drawAnchors())},t.prototype.getSelectType=function(){return SelectType.Triangle},t.prototype.getBox=function(){var t,o,i=this.context;return i&&this.data&&(i=i.getHistoryDataById(this.data.data.id))&&(i=i.data.points)&&i.length?(t={x:i[0].x,y:i[1].y},o=i[2].x-i[0].x,i=i[2].y-i[1].y,{leftTop:__assign({},t),rightTop:{x:t.x+o,y:t.y},rightBottom:{x:t.x+o,y:t.y+i},leftBottom:{x:t.x,y:t.y+i}}):null},t.prototype.modifyDataByLeftTop=function(t){var o,i=this.context,a=null==i?void 0:i.getCtx();return!!(i&&a&&this.data&&this.startPoint)&&!!(a=i.getHistoryDataById(this.data.data.id))&&!(!(i=a.data.points)||!i.length||!(i=this.getBox())||t.x>i.rightTop.x||t.y>i.rightBottom.y||(o=i.rightTop.x-t.x,i=i.rightBottom.y-t.y,a.data.points=[{x:t.x,y:t.y+i},{x:t.x+o/2,y:t.y},{x:t.x+o,y:t.y+i}],0))},t.prototype.modifyDataByCenterTop=function(t){var o,i,a=this.context,e=null==a?void 0:a.getCtx();return!!(a&&e&&this.data&&this.startPoint)&&!!(e=a.getHistoryDataById(this.data.data.id))&&!(!(a=e.data.points)||!a.length||!(a=this.getBox())||t.y>a.leftBottom.y||(o={x:a.leftTop.x,y:t.y},i=a.rightTop.x-a.leftTop.x,a=a.rightBottom.y-t.y,e.data.points=[{x:o.x,y:o.y+a},{x:o.x+i/2,y:o.y},{x:o.x+i,y:o.y+a}],0))},t.prototype.modifyDataByRightTop=function(t){var o,i,a=this.context,e=null==a?void 0:a.getCtx();return!!(a&&e&&this.data&&this.startPoint)&&!!(e=a.getHistoryDataById(this.data.data.id))&&!(!(a=e.data.points)||!a.length||!(a=this.getBox())||t.x<a.leftTop.x||t.y>a.leftBottom.y||(o={x:a.leftTop.x,y:t.y},i=t.x-a.leftTop.x,a=a.rightBottom.y-t.y,e.data.points=[{x:o.x,y:o.y+a},{x:o.x+i/2,y:o.y},{x:o.x+i,y:o.y+a}],0))},t.prototype.modifyDataByRightCenter=function(t){var o,i=this.context,a=null==i?void 0:i.getCtx();return!!(i&&a&&this.data&&this.startPoint)&&!!(a=i.getHistoryDataById(this.data.data.id))&&!(!(i=a.data.points)||!i.length||!(i=this.getBox())||t.x<i.leftTop.x||(o={x:i.leftTop.x,y:i.leftTop.y},t=t.x-i.leftTop.x,i=i.rightBottom.y-i.rightTop.y,a.data.points=[{x:o.x,y:o.y+i},{x:o.x+t/2,y:o.y},{x:o.x+t,y:o.y+i}],0))},t.prototype.modifyDataByRightBottom=function(t){var o,i,a=this.context,e=null==a?void 0:a.getCtx();return!!(a&&e&&this.data&&this.startPoint)&&!!(e=a.getHistoryDataById(this.data.data.id))&&!(!(a=e.data.points)||!a.length||!(a=this.getBox())||t.x<a.leftTop.x||t.y<a.leftTop.y||(o=__assign({},a.leftTop),i=t.x-a.leftTop.x,t=t.y-a.leftTop.y,e.data.points=[{x:o.x,y:o.y+t},{x:o.x+i/2,y:o.y},{x:o.x+i,y:o.y+t}],0))},t.prototype.modifyDataByCenterBottom=function(t){var o,i,a=this.context,e=null==a?void 0:a.getCtx();return!!(a&&e&&this.data&&this.startPoint)&&!!(e=a.getHistoryDataById(this.data.data.id))&&!(!(a=e.data.points)||!a.length||!(a=this.getBox())||t.y<a.leftTop.y||(o=__assign({},a.leftTop),i=a.rightTop.x-a.leftTop.x,t=t.y-a.leftTop.y,e.data.points=[{x:o.x,y:o.y+t},{x:o.x+i/2,y:o.y},{x:o.x+i,y:o.y+t}],0))},t.prototype.modifyDataByLeftBottom=function(t){var o,i,a=this.context,e=null==a?void 0:a.getCtx();return!!(a&&e&&this.data&&this.startPoint)&&!!(e=a.getHistoryDataById(this.data.data.id))&&!(!(a=e.data.points)||!a.length||!(a=this.getBox())||t.x>a.rightBottom.x||t.y<a.rightTop.y||(o={x:t.x,y:a.leftTop.y},i=a.rightBottom.x-t.x,t=t.y-a.rightTop.y,e.data.points=[{x:o.x,y:o.y+t},{x:o.x+i/2,y:o.y},{x:o.x+i,y:o.y+t}],0))},t.prototype.modifyDataByLeftCenter=function(t){var o,i=this.context,a=null==i?void 0:i.getCtx();return!!(i&&a&&this.data&&this.startPoint)&&!!(a=i.getHistoryDataById(this.data.data.id))&&!(!(i=a.data.points)||!i.length||!(i=this.getBox())||t.x>i.rightBottom.x||(o={x:t.x,y:i.leftTop.y},t=i.rightBottom.x-t.x,i=i.rightBottom.y-i.rightTop.y,a.data.points=[{x:o.x,y:o.y+i},{x:o.x+t/2,y:o.y},{x:o.x+t,y:o.y+i}],0))},t.prototype.isCanMove=function(t){var o,i;return!!this.data&&((i=__spreadArray([],(null==(i=null==(i=null==(i=null==this?void 0:this.data)?void 0:i.data)?void 0:i.data)?void 0:i.points)||[],!0)).push(i[0]),o=turf.point([t.x,t.y]),i=turf.polygon([i.map(function(t){return[t.x,t.y]})]),turf.booleanPointInPolygon(o,i))&&!this.getPointInAnchor(t)},t.prototype.drawMoveGeometry=function(){this.context&&this.data&&TriangleDrawAction.draw(this.context.getAssistCtx(),this.data)},t.prototype.drawMoveGeometry=function(t,o){var i,a,e;return this.context&&this.data&&t&&o?((i=JSON.parse(JSON.stringify(this.data.data))).data=__assign(__assign({},i.data),{points:i.data.points.map(function(t){return __assign({},t)})}),a=o.x-t.x,e=o.y-t.y,i.data&&i.data.points&&i.data.points.length&&(i.data.points.forEach(function(t){t.x+=a,t.y+=e}),t=__assign(__assign({},this.moveGemStyle),null!=(o=i.style)?o:{}),i.style.lineWidth=t.lineWidth,i.style.lineJoin=t.lineJoin,i.style.lineCap=t.lineCap,i.lineDash=t.lineDash,i.style.lineDashOffset=t.lineDashOffset,i.style.strokeStyle=t.strokeStyle,i.style.fillStyle=t.fillStyle,i.style.globalAlpha=null!=(o=t.globalAlpha)?o:1,TriangleDrawAction.draw(this.context.getAssistCtx(),i)),i):null},t.prototype.destroy=function(){this.startIndex=-1,o.prototype.destroy.call(this)},t}(ModifyAction);export default TriangleModifyAction;
//# sourceMappingURL=TriangleModifyAction.js.map
