var __extends=this&&this.__extends||function(){var a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)};return function(t,e){function i(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,i=1,a=arguments.length;i<a;i++)for(var r in e=arguments[i])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};import MathUtil from"@baifendian/adhere-util/lib/math";import{SelectType}from"../types";import ModifyAction from"./ModifyAction";import CircleDrawAction from"../draw/CircleDrawAction";import defaultMoveGemStyle from"../defaultMoveGemStyle";var CircleModifyAction=function(e){function t(t){t=e.call(this,t)||this;return t.ResizeCursorMapping=new Map([[0,"ns-resize"],[1,"ew-resize"],[2,"ns-resize"],[3,"ew-resize"]]),t}return __extends(t,e),t.prototype.drawAnchors=function(){if(this.context){var t=this.context.getCtx();if(t)for(var e=null===(i=null===(e=null==this?void 0:this.data)||void 0===e?void 0:e.data)||void 0===i?void 0:i.data,i=e.center,e=e.radius,a=[{x:i.x,y:i.y-e},{x:i.x+e,y:i.y},{x:i.x,y:i.y+e},{x:i.x-e,y:i.y}],r=0;r<a.length;r++){var n=a[r];t.beginPath(),this.setAnchorCircleStyle(),t.ellipse(n.x,n.y,this.anchorRadius,this.anchorRadius,45*Math.PI/180,0,2*Math.PI),t.stroke(),t.fill()}}},t.prototype.getPointInAnchor=function(t){if(!this.data)return null;for(var e=null,i=-1,a=null===(r=null===(a=null==this?void 0:this.data)||void 0===a?void 0:a.data)||void 0===r?void 0:r.data,r=a.center,a=a.radius,n=[{x:r.x,y:r.y-a},{x:r.x+a,y:r.y},{x:r.x,y:r.y+a},{x:r.x-a,y:r.y}],o=0;o<n.length;o++){var s=n[o],d=this.anchorRadius+this.anchorLineWidth;if(MathUtil.isPointInCircle(t,{center:s,radius:d})){e=s,i=o;break}}return e&&-1!==i?{point:e,index:i}:null},t.prototype.setResizeCursorByIndex=function(t){var e,i;this.context&&(e=this.context.getCanvasEl(),i=this.context.getAssistCanvasEl(),e&&i&&(e.style.cursor=i.style.cursor=this.ResizeCursorMapping.get(t)))},t.prototype.drawModify=function(t){var e,i=this.context,a=null==i?void 0:i.getCtx();i&&a&&this.data&&this.startPoint&&((e=i.getHistoryDataById(this.data.data.id))&&(a=e.data.center,e.data.radius=MathUtil.getDistanceByBetweenPoint({p1:a,p2:t}),this.data.data=e,i.clearDraw(),i.drawHistoryData(),this.drawAnchors()))},t.prototype.drawMove=function(t,e){var i,a=this.context,r=null==a?void 0:a.getCtx();a&&r&&this.data&&((i=a.getHistoryDataById(this.data.data.id))&&(r=e.x-t.x,t=e.y-t.y,i.data.center.x+=r,i.data.center.y+=t,this.data.data=i,a.clearDraw(),a.drawHistoryData(),this.drawAnchors()))},t.prototype.getSelectType=function(){return SelectType.Circle},t.prototype.isCanMove=function(t){if(!this.data)return!1;var e=null===(i=null===(e=null==this?void 0:this.data)||void 0===e?void 0:e.data)||void 0===i?void 0:i.data,i=e.center,e=e.radius;return MathUtil.isPointInCircle(t,{center:i,radius:e})&&!this.getPointInAnchor(t)},t.prototype.drawMoveGeometry=function(){this.context&&this.data&&CircleDrawAction.draw(this.context.getAssistCtx(),this.data)},t.prototype.drawMoveGeometry=function(t,e){var i,a;this.context&&this.data&&t&&e&&((i=__assign({},this.data.data)).data=__assign(__assign({},i.data),{center:__assign({},i.data.center)}),a=e.x-t.x,t=e.y-t.y,i.data&&i.data.center&&(i.data.center.x+=a,i.data.center.y+=t,i.style&&(i.style.globalAlpha=defaultMoveGemStyle.globalAlpha,i.style.strokeStyle=defaultMoveGemStyle.strokeStyle,i.style.lineWidth=defaultMoveGemStyle.lineWidth,i.style.lineDash=defaultMoveGemStyle.lineDash,i.style.lineDashOffset=defaultMoveGemStyle.lineDashOffset),CircleDrawAction.draw(this.context.getAssistCtx(),i)))},t}(ModifyAction);export default CircleModifyAction;
//# sourceMappingURL=CircleModifyAction.js.map