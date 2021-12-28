var __extends=this&&this.__extends||function(){var i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var a in e)e.hasOwnProperty(a)&&(t[a]=e[a])})(t,e)};return function(t,e){function a(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(a.prototype=e.prototype,new a)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,a=1,i=arguments.length;a<i;a++)for(var o in e=arguments[a])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};import*as turf from"@turf/turf";import MathUtil from"@baifendian/adhere-util/lib/math";import{SelectType}from"../types";import ModifyAction from"./ModifyAction";import StartDrawAction from"../draw/StartDrawAction";import defaultMoveGemStyle from"../DefaultMoveGemStyle";var StartModifyAction=function(e){function t(t){t=e.call(this,t)||this;return t.ResizeCursorMapping=new Map([[0,"ns-resize"],[1,"ew-resize"],[2,"ns-resize"],[3,"ew-resize"]]),t}return __extends(t,e),t.prototype.drawAnchors=function(){if(this.context){var t=this.context.getCtx();if(t){for(var e=StartDrawAction.transformOriginToReal(this.context,null===(a=null===(e=null==this?void 0:this.data)||void 0===e?void 0:e.data)||void 0===a?void 0:a.data),a=e.center,e=e.outRadius,i=[{x:a.x,y:a.y-e},{x:a.x+e,y:a.y},{x:a.x,y:a.y+e},{x:a.x-e,y:a.y}],o=0;o<i.length;o++){var n=i[o];t.beginPath(),this.setAnchorCircleStyle(),t.ellipse(n.x,n.y,this.anchorRadius,this.anchorRadius,45*Math.PI/180,0,2*Math.PI),t.stroke(),t.fill()}t.beginPath(),this.setAnchorLineStyle(),t.ellipse(a.x,a.y,e,e,45*Math.PI/180,0,2*Math.PI),t.closePath(),t.stroke()}}},t.prototype.getPointInAnchor=function(t){if(!this.data)return null;for(var e=null,a=-1,i=StartDrawAction.transformOriginToReal(this.context,null===(o=null===(i=null==this?void 0:this.data)||void 0===i?void 0:i.data)||void 0===o?void 0:o.data),o=i.center,i=i.outRadius,n=[{x:o.x,y:o.y-i},{x:o.x+i,y:o.y},{x:o.x,y:o.y+i},{x:o.x-i,y:o.y}],r=0;r<n.length;r++){var s=n[r],l=this.anchorRadius+this.anchorLineWidth;if(MathUtil.isPointInCircle(t,{center:s,radius:l})){e=s,a=r;break}}return e&&-1!==a?{point:e,index:a}:null},t.prototype.setResizeCursorByIndex=function(t){var e,a;this.context&&(e=this.context.getCanvasEl(),a=this.context.getAssistCanvasEl(),e&&a&&(t=this.ResizeCursorMapping.get(t),e.style.cursor=a.style.cursor=t))},t.prototype.drawModify=function(t){var e,a=this.context,i=null==a?void 0:a.getCtx();a&&i&&this.data&&this.startPoint&&((e=a.getHistoryDataById(this.data.data.id))&&(i=e.data.center,i=a.pointToPixel(i),e.data.outRadius=a.distanceToActual(MathUtil.getDistanceByBetweenPoint({p1:i,p2:t})),e.data.innerRadius=e.data.outRadius/2,this.data.data=__assign({},e),a.clearDraw(),a.drawHistoryData(),this.drawAnchors()))},t.prototype.drawMove=function(t,e){var a,i=this.context,o=null==i?void 0:i.getCtx();i&&o&&this.data&&((a=i.getHistoryDataById(this.data.data.id))&&(o=i.pixelToPoint(t),e=(t=i.pixelToPoint(e)).x-o.x,o=t.y-o.y,a.data.center.x+=e,a.data.center.y+=o,this.data.data=__assign({},a),i.clearDraw(),i.drawHistoryData(),this.drawAnchors()))},t.prototype.getSelectType=function(){return SelectType.Start},t.prototype.isCanMove=function(t){if(!this.data)return!1;for(var e=StartDrawAction.transformOriginToReal(this.context,null===(n=null===(e=null==this?void 0:this.data)||void 0===e?void 0:e.data)||void 0===n?void 0:n.data),a=e.center,i=e.outRadius,o=e.innerRadius,n=turf.point([t.x,t.y]),r=[],s=0;s<5;s++)r.push({x:Math.cos((18+72*s)/180*Math.PI)*i+a.x,y:-Math.sin((18+72*s)/180*Math.PI)*i+a.y}),r.push({x:Math.cos((54+72*s)/180*Math.PI)*o+a.x,y:-Math.sin((54+72*s)/180*Math.PI)*o+a.y});e=r.map(function(t){return[t.x,t.y]});e.push(e[0]);e=turf.polygon([e]);return turf.booleanPointInPolygon(n,e)&&!this.getPointInAnchor(t)},t.prototype.drawMoveGeometry=function(){this.context&&this.data&&StartDrawAction.draw(this.context,this.context.getAssistCtx(),this.data)},t.prototype.drawMoveGeometry=function(t,e){var a,i;this.context&&this.data&&t&&e&&((a=__assign({},this.data.data)).data=__assign(__assign({},a.data),{center:__assign({},a.data.center)}),i=this.context.pixelToPoint(t),e=(t=this.context.pixelToPoint(e)).x-i.x,i=t.y-i.y,a.data&&a.data.center&&(a.data.center.x+=e,a.data.center.y+=i,a.style&&(a.style.globalAlpha=defaultMoveGemStyle.globalAlpha,a.style.strokeStyle=defaultMoveGemStyle.strokeStyle,a.style.lineWidth=defaultMoveGemStyle.lineWidth,a.style.lineDash=defaultMoveGemStyle.lineDash,a.style.lineDashOffset=defaultMoveGemStyle.lineDashOffset),StartDrawAction.draw(this.context,this.context.getAssistCtx(),a)))},t}(ModifyAction);export default StartModifyAction;
//# sourceMappingURL=StartModifyAction.js.map
