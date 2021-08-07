var __extends=this&&this.__extends||function(){var a=function(t,i){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var e in i)i.hasOwnProperty(e)&&(t[e]=i[e])})(t,i)};return function(t,i){function e(){this.constructor=t}a(t,i),t.prototype=null===i?Object.create(i):(e.prototype=i.prototype,new e)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var i,e=1,a=arguments.length;e<a;e++)for(var r in i=arguments[e])Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);return t}).apply(this,arguments)};import MathUtil from"@baifendian/adhere-util/lib/math";import{SelectType}from"../types";import ModifyAction from"./modifyAction";import CircleDrawAction from"../draw/circleDrawAction";var CircleModifyAction=function(i){function t(t){t=i.call(this,t)||this;return t.ResizeCursorMapping=new Map([[0,"ns-resize"],[1,"ew-resize"],[2,"ns-resize"],[3,"ew-resize"]]),t}return __extends(t,i),t.prototype.drawAnchors=function(){if(this.context){var t=this.context.getCtx();if(t)for(var i=null===(e=null===(i=null==this?void 0:this.data)||void 0===i?void 0:i.data)||void 0===e?void 0:e.data,e=i.center,i=i.radius,a=[{x:e.x,y:e.y-i},{x:e.x+i,y:e.y},{x:e.x,y:e.y+i},{x:e.x-i,y:e.y}],r=0;r<a.length;r++){var n=a[r];t.beginPath(),this.setAnchorStyle(),t.ellipse(n.x,n.y,this.anchorRadius,this.anchorRadius,45*Math.PI/180,0,2*Math.PI),t.stroke(),t.fill()}}},t.prototype.getPointInAnchor=function(t){if(!this.data)return null;for(var i=null,e=-1,a=null===(r=null===(a=null==this?void 0:this.data)||void 0===a?void 0:a.data)||void 0===r?void 0:r.data,r=a.center,a=a.radius,n=[{x:r.x,y:r.y-a},{x:r.x+a,y:r.y},{x:r.x,y:r.y+a},{x:r.x-a,y:r.y}],o=0;o<n.length;o++){var s=n[o],d=this.anchorRadius+this.anchorLineWidth;if(MathUtil.isPointInCircle(t,{center:s,radius:d})){i=s,e=o;break}}return i&&-1!==e?{point:i,index:e}:null},t.prototype.setResizeCursorByIndex=function(t){var i,e;this.context&&(i=this.context.getCanvasEl(),e=this.context.getAssistCanvasEl(),i&&e&&(i.style.cursor=e.style.cursor=this.ResizeCursorMapping.get(t)))},t.prototype.drawModify=function(t){var i,e=this.context,a=null==e?void 0:e.getCtx();e&&a&&this.data&&this.startPoint&&((i=e.getHistoryDataById(this.data.data.id))&&(a=i.data.center,i.data.radius=MathUtil.getDistanceByBetweenPoint({p1:a,p2:t}),e.clearDraw(),e.drawHistoryData(),this.drawAnchors()))},t.prototype.drawMove=function(t,i){var e,a=this.context,r=null==a?void 0:a.getCtx();a&&r&&this.data&&((e=a.getHistoryDataById(this.data.data.id))&&(r=i.x-t.x,t=i.y-t.y,e.data.center.x+=r,e.data.center.y+=t,a.clearDraw(),a.drawHistoryData(),this.drawAnchors()))},t.prototype.getSelectType=function(){return SelectType.Circle},t.prototype.isCanMove=function(t){if(!this.data)return!1;var i=null===(e=null===(i=null==this?void 0:this.data)||void 0===i?void 0:i.data)||void 0===e?void 0:e.data,e=i.center,i=i.radius;return MathUtil.isPointInCircle(t,{center:e,radius:i})},t.prototype.drawMoveGeometry=function(){this.context&&this.data&&CircleDrawAction.draw(this.context.getAssistCtx(),this.data)},t.prototype.drawMoveGeometry=function(t,i){var e,a;this.context&&this.data&&t&&i&&((e=__assign({},this.data.data)).data=__assign(__assign({},e.data),{center:__assign({},e.data.center)}),a=i.x-t.x,t=i.y-t.y,e.data&&e.data.center&&(e.data.center.x+=a,e.data.center.y+=t,CircleDrawAction.draw(this.context.getAssistCtx(),e)))},t}(ModifyAction);export default CircleModifyAction;
//# sourceMappingURL=circleModifyAction.js.map
