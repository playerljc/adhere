var __extends=this&&this.__extends||function(){var a=function(t,i){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var o in i)i.hasOwnProperty(o)&&(t[o]=i[o])})(t,i)};return function(t,i){function o(){this.constructor=t}a(t,i),t.prototype=null===i?Object.create(i):(o.prototype=i.prototype,new o)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var i,o=1,a=arguments.length;o<a;o++)for(var e in i=arguments[o])Object.prototype.hasOwnProperty.call(i,e)&&(t[e]=i[e]);return t}).apply(this,arguments)};import MathUtil from"@baifendian/adhere-util/lib/math";import{SelectType}from"../types";import ModifyAction from"./modifyAction";var DiamondModifyAction=function(i){function t(t){t=i.call(this,t)||this;return t.rectangleAnchorPoints=[],t.indexToModifyHandlerMapping=new Map([[0,t.modifyDataByLeftTop],[1,t.modifyDataByCenterTop],[2,t.modifyDataByRightTop],[3,t.modifyDataByRightCenter],[4,t.modifyDataByRightBottom],[5,t.modifyDataByCenterBottom],[6,t.modifyDataByLeftBottom],[7,t.modifyDataByLeftCenter]]),t}return __extends(t,i),t.prototype.drawAnchors=function(){if(this.context){var t=this.context.getCtx();if(t){var i=null===(n=null===(i=null==this?void 0:this.data)||void 0===i?void 0:i.data)||void 0===n?void 0:n.data,o=i.leftTopPoint,a=i.width,e=i.height,n=a/2,i=e/2;this.rectangleAnchorPoints=[__assign({},o),{x:o.x+n,y:o.y},{x:o.x+a,y:o.y},{x:o.x+a,y:o.y+i},{x:o.x+a,y:o.y+e},{x:o.x+n,y:o.y+e},{x:o.x,y:o.y+e},{x:o.x,y:o.y+i}];for(var r=0;r<this.rectangleAnchorPoints.length;r++){var d=this.rectangleAnchorPoints[r];t.beginPath(),this.setAnchorStyle(),t.ellipse(d.x,d.y,this.anchorRadius,this.anchorRadius,45*Math.PI/180,0,2*Math.PI),t.stroke(),t.fill(),t.beginPath(),this.setAnchorStyle(),t.moveTo(o.x,o.y),t.lineTo(o.x+a,o.y),t.lineTo(o.x+a,o.y+e),t.lineTo(o.x,o.y+e),t.lineTo(o.x,o.y),t.stroke(),t.fill()}}}},t.prototype.getPointInAnchor=function(t){if(!this.data)return null;for(var i=null,o=-1,a=0;a<this.rectangleAnchorPoints.length;a++){var e=this.rectangleAnchorPoints[a],n=this.anchorRadius+this.anchorLineWidth;if(MathUtil.isPointInCircle(t,{center:e,radius:n})){i=e,o=a;break}}return i&&-1!==o?{point:i,index:o}:null},t.prototype.draw=function(t){var i=this.context,o=null==i?void 0:i.getCtx();i&&o&&this.data&&this.startPoint&&(!i.getHistoryDataById(this.data.data.id)||(o=this.indexToModifyHandlerMapping.get(this.startIndex))&&o.call(this,t)&&(i.clearDraw(),i.drawHistoryData(),this.drawAnchors()))},t.prototype.getSelectType=function(){return SelectType.Diamond},t.prototype.getBox=function(){var t=this.context,i=null==t?void 0:t.getCtx();if(!t||!i||!this.data)return null;var o=t.getHistoryDataById(this.data.data.id);if(!o)return null;i=o.data,t=i.leftTopPoint,o=i.width,i=i.height;return{leftTop:__assign({},t),rightTop:{x:t.x+o,y:t.y},rightBottom:{x:t.x+o,y:t.y+i},leftBottom:{x:t.x,y:t.y+i}}},t.prototype.modifyDataByLeftTop=function(t){var i=this.context,o=null==i?void 0:i.getCtx();if(!(i&&o&&this.data&&this.startPoint))return!1;o=i.getHistoryDataById(this.data.data.id);if(!o)return!1;i=this.getBox();return!!i&&(!(t.x>i.rightTop.x||t.y>i.rightBottom.y)&&(o.data.leftTopPoint=t,o.data.width=i.rightTop.x-t.x,o.data.height=i.rightBottom.y-t.y,!0))},t.prototype.modifyDataByCenterTop=function(t){var i=this.context,o=null==i?void 0:i.getCtx();if(!(i&&o&&this.data&&this.startPoint))return!1;var a=i.getHistoryDataById(this.data.data.id);if(!a)return!1;o=a.data.width,i=this.getBox();return!!i&&(!(t.y>i.leftBottom.y)&&(a.data.leftTopPoint={x:i.leftTop.x,y:t.y},a.data.width=o,a.data.height=i.rightBottom.y-t.y,!0))},t.prototype.modifyDataByRightTop=function(t){var i=this.context,o=null==i?void 0:i.getCtx();if(!(i&&o&&this.data&&this.startPoint))return!1;o=i.getHistoryDataById(this.data.data.id);if(!o)return!1;i=this.getBox();return!!i&&(!(t.x<i.leftTop.x||t.y>i.leftBottom.y)&&(o.data.leftTopPoint={x:i.leftTop.x,y:t.y},o.data.width=t.x-i.leftTop.x,o.data.height=i.rightBottom.y-t.y,!0))},t.prototype.modifyDataByRightCenter=function(t){var i=this.context,o=null==i?void 0:i.getCtx();if(!(i&&o&&this.data&&this.startPoint))return!1;var a=i.getHistoryDataById(this.data.data.id);if(!a)return!1;var e=a.data,o=e.leftTopPoint,i=e.height,e=this.getBox();return!!e&&(!(t.x<e.leftTop.x)&&(a.data.leftTopPoint=__assign({},o),a.data.width=t.x-e.leftTop.x,a.data.height=i,!0))},t.prototype.modifyDataByRightBottom=function(t){var i=this.context,o=null==i?void 0:i.getCtx();if(!(i&&o&&this.data&&this.startPoint))return!1;var a=i.getHistoryDataById(this.data.data.id);if(!a)return!1;o=a.data.leftTopPoint,i=this.getBox();return!!i&&(!(t.x<i.leftTop.x||t.y<i.leftTop.y)&&(a.data.leftTopPoint=__assign({},o),a.data.width=t.x-i.leftTop.x,a.data.height=t.y-i.leftTop.y,!0))},t.prototype.modifyDataByCenterBottom=function(t){var i=this.context,o=null==i?void 0:i.getCtx();if(!(i&&o&&this.data&&this.startPoint))return!1;var a=i.getHistoryDataById(this.data.data.id);if(!a)return!1;var e=a.data,o=e.leftTopPoint,i=e.width,e=this.getBox();return!!e&&(!(t.y<e.leftTop.y)&&(a.data.leftTopPoint=__assign({},o),a.data.width=i,a.data.height=t.y-e.leftTop.y,!0))},t.prototype.modifyDataByLeftBottom=function(t){var i=this.context,o=null==i?void 0:i.getCtx();if(!(i&&o&&this.data&&this.startPoint))return!1;var a=i.getHistoryDataById(this.data.data.id);if(!a)return!1;o=a.data.leftTopPoint,i=this.getBox();return!!i&&(!(t.x>i.rightBottom.x||t.y<i.rightTop.y)&&(a.data.leftTopPoint={x:t.x,y:o.y},a.data.width=i.rightBottom.x-t.x,a.data.height=t.y-i.rightTop.y,!0))},t.prototype.modifyDataByLeftCenter=function(t){var i=this.context,o=null==i?void 0:i.getCtx();if(!(i&&o&&this.data&&this.startPoint))return!1;var a=i.getHistoryDataById(this.data.data.id);if(!a)return!1;var e=a.data,o=e.leftTopPoint,i=e.height,e=this.getBox();return!!e&&(!(t.x>e.rightBottom.x)&&(a.data.leftTopPoint={x:t.x,y:o.y},a.data.width=e.rightBottom.x-t.x,a.data.height=i,!0))},t.prototype.destroy=function(){this.startIndex=-1,i.prototype.destroy.call(this)},t}(ModifyAction);export default DiamondModifyAction;
//# sourceMappingURL=diamondModifyAction.js.map
