var __extends=this&&this.__extends||function(){var a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)};return function(t,e){function i(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,i=1,a=arguments.length;i<a;i++)for(var n in e=arguments[i])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)};import MathUtil from"@baifendian/adhere-util/lib/math";import{SelectType}from"../types";import ModifyAction from"./ModifyAction";import CircleDrawAction from"../draw/CircleDrawAction";import defaultMoveGemStyle from"../DefaultMoveGemStyle";var CircleModifyAction=function(e){function t(t){t=e.call(this,t)||this;return t.ResizeCursorMapping=new Map([[0,"ns-resize"],[1,"ew-resize"],[2,"ns-resize"],[3,"ew-resize"]]),t}return __extends(t,e),t.prototype.drawAnchors=function(){if(this.context){var t=this.context.getCtx();if(t)for(var e=CircleDrawAction.transformOriginToReal(this.context,null===(i=null===(e=null==this?void 0:this.data)||void 0===e?void 0:e.data)||void 0===i?void 0:i.data),i=e.center,e=e.radius,a=[{x:i.x,y:i.y-e},{x:i.x+e,y:i.y},{x:i.x,y:i.y+e},{x:i.x-e,y:i.y}],n=0;n<a.length;n++){var o=a[n];t.beginPath(),this.setAnchorCircleStyle(),t.ellipse(o.x,o.y,this.anchorRadius,this.anchorRadius,45*Math.PI/180,0,2*Math.PI),t.stroke(),t.fill()}}},t.prototype.getPointInAnchor=function(t){if(!this.data)return null;for(var e=null,i=-1,a=CircleDrawAction.transformOriginToReal(this.context,null===(n=null===(a=null==this?void 0:this.data)||void 0===a?void 0:a.data)||void 0===n?void 0:n.data),n=a.center,a=a.radius,o=[{x:n.x,y:n.y-a},{x:n.x+a,y:n.y},{x:n.x,y:n.y+a},{x:n.x-a,y:n.y}],r=0;r<o.length;r++){var s=o[r],l=this.anchorRadius+this.anchorLineWidth;if(MathUtil.isPointInCircle(t,{center:s,radius:l})){e=s,i=r;break}}return e&&-1!==i?{point:e,index:i}:null},t.prototype.setResizeCursorByIndex=function(t){var e,i;this.context&&(e=this.context.getCanvasEl(),i=this.context.getAssistCanvasEl(),e&&i&&(e.style.cursor=i.style.cursor=this.ResizeCursorMapping.get(t)))},t.prototype.drawModify=function(t){var e,i=this.context,a=null==i?void 0:i.getCtx();i&&a&&this.data&&this.startPoint&&((e=i.getHistoryDataById(this.data.data.id))&&(a=e.data.center,a=i.pointToPixel(a),e.data.radius=i.distanceToActual(MathUtil.getDistanceByBetweenPoint({p1:a,p2:t})),this.data.data=__assign({},e),i.clearDraw(),i.drawHistoryData(),this.drawAnchors()))},t.prototype.drawMove=function(t,e){var i,a=this.context,n=null==a?void 0:a.getCtx();a&&n&&this.data&&((i=a.getHistoryDataById(this.data.data.id))&&(n=a.pixelToPoint(t),e=(t=a.pixelToPoint(e)).x-n.x,n=t.y-n.y,i.data.center.x+=e,i.data.center.y+=n,this.data.data=__assign({},i),a.clearDraw(),a.drawHistoryData(),this.drawAnchors()))},t.prototype.getSelectType=function(){return SelectType.Circle},t.prototype.isCanMove=function(t){if(!this.data)return!1;var e=null===(i=null===(e=null==this?void 0:this.data)||void 0===e?void 0:e.data)||void 0===i?void 0:i.data,i=e.center,e=e.radius;return MathUtil.isPointInCircle(t,CircleDrawAction.transformOriginToReal(this.context,{center:i,radius:e}))&&!this.getPointInAnchor(t)},t.prototype.drawMoveGeometry=function(){this.context&&this.data&&CircleDrawAction.draw(this.context,this.context.getAssistCtx(),this.data)},t.prototype.drawMoveGeometry=function(t,e){var i,a;this.context&&this.data&&t&&e&&((i=__assign({},this.data.data)).data=__assign(__assign({},i.data),{center:__assign({},i.data.center)}),a=this.context.pixelToPoint(t),e=(t=this.context.pixelToPoint(e)).x-a.x,a=t.y-a.y,i.data&&i.data.center&&(i.data.center.x+=e,i.data.center.y+=a,i.style&&(i.style.globalAlpha=defaultMoveGemStyle.globalAlpha,i.style.strokeStyle=defaultMoveGemStyle.strokeStyle,i.style.lineWidth=defaultMoveGemStyle.lineWidth,i.style.lineDash=defaultMoveGemStyle.lineDash,i.style.lineDashOffset=defaultMoveGemStyle.lineDashOffset),CircleDrawAction.draw(this.context,this.context.getAssistCtx(),i)))},t}(ModifyAction);export default CircleModifyAction;
//# sourceMappingURL=CircleModifyAction.js.map
