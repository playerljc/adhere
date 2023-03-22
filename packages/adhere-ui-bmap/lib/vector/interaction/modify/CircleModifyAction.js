"use strict";var __extends=this&&this.__extends||function(){var a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(t,e)};return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,i=1,a=arguments.length;i<a;i++)for(var r in e=arguments[i])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},adhere_util_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("@baifendian/adhere-util"))),DefaultMoveGemStyle_1=__importDefault(require("../DefaultMoveGemStyle")),CircleDrawAction_1=__importDefault(require("../draw/CircleDrawAction")),types_1=require("../types"),ModifyAction_1=__importDefault(require("./ModifyAction")),CircleModifyAction=function(e){function t(t){t=e.call(this,t)||this;return t.ResizeCursorMapping=new Map([[0,"ns-resize"],[1,"ew-resize"],[2,"ns-resize"],[3,"ew-resize"]]),t}return __extends(t,e),t.prototype.drawAnchors=function(){if(this.context){var t=this.context.getCtx();if(t)for(var e=CircleDrawAction_1.default.transformOriginToReal(this.context,null==(e=null==(e=null==this?void 0:this.data)?void 0:e.data)?void 0:e.data),i=e.center,e=e.radius,a=[{x:i.x,y:i.y-e},{x:i.x+e,y:i.y},{x:i.x,y:i.y+e},{x:i.x-e,y:i.y}],r=0;r<a.length;r++){var n=a[r];t.beginPath(),this.setAnchorCircleStyle(),t.ellipse(n.x,n.y,this.anchorRadius,this.anchorRadius,45*Math.PI/180,0,2*Math.PI),t.stroke(),t.fill()}}},t.prototype.getPointInAnchor=function(t){if(!this.data)return null;for(var e=null,i=-1,a=CircleDrawAction_1.default.transformOriginToReal(this.context,null==(a=null==(a=null==this?void 0:this.data)?void 0:a.data)?void 0:a.data),r=a.center,a=a.radius,n=[{x:r.x,y:r.y-a},{x:r.x+a,y:r.y},{x:r.x,y:r.y+a},{x:r.x-a,y:r.y}],o=0;o<n.length;o++){var s=n[o],l=this.anchorRadius+this.anchorLineWidth;if(adhere_util_1.default.isPointInCircle(t,{center:s,radius:l})){e=s,i=o;break}}return e&&-1!==i?{point:e,index:i}:null},t.prototype.setResizeCursorByIndex=function(t){var e,i;this.context&&(e=this.context.getCanvasEl(),i=this.context.getAssistCanvasEl(),e&&i&&(e.style.cursor=i.style.cursor=this.ResizeCursorMapping.get(t)))},t.prototype.drawModify=function(t){var e,i=this.context,a=null==i?void 0:i.getCtx();i&&a&&this.data&&this.startPoint&&((a=i.getHistoryDataById(this.data.data.id))&&(e=a.data.center,e=i.pointToPixel(e),a.data.radius=i.distanceToActual(adhere_util_1.default.getDistanceByBetweenPoint({p1:e,p2:t})),this.data.data=__assign({},a),i.clearDraw(),i.drawHistoryData(),this.drawAnchors()))},t.prototype.drawMove=function(t,e){var i,a=this.context,r=null==a?void 0:a.getCtx();a&&r&&this.data&&((r=a.getHistoryDataById(this.data.data.id))&&(t=a.pixelToPoint(t),i=(e=a.pixelToPoint(e)).x-t.x,e=e.y-t.y,r.data.center.x+=i,r.data.center.y+=e,this.data.data=__assign({},r),a.clearDraw(),a.drawHistoryData(),this.drawAnchors()))},t.prototype.getSelectType=function(){return types_1.SelectType.Circle},t.prototype.isCanMove=function(t){var e,i;return!!this.data&&(e=(i=null==(i=null==(i=null==this?void 0:this.data)?void 0:i.data)?void 0:i.data).center,i=i.radius,adhere_util_1.default.isPointInCircle(t,CircleDrawAction_1.default.transformOriginToReal(this.context,{center:e,radius:i}))&&!this.getPointInAnchor(t))},t.prototype.drawMoveGeometry=function(){this.context&&this.data&&CircleDrawAction_1.default.draw(this.context,this.context.getAssistCtx(),this.data)},t.prototype.drawMoveGeometry=function(t,e){var i,a;this.context&&this.data&&t&&e&&((i=__assign({},this.data.data)).data=__assign(__assign({},i.data),{center:__assign({},i.data.center)}),t=this.context.pixelToPoint(t),a=(e=this.context.pixelToPoint(e)).x-t.x,e=e.y-t.y,i.data&&i.data.center&&(i.data.center.x+=a,i.data.center.y+=e,i.style&&(i.style.globalAlpha=DefaultMoveGemStyle_1.default.globalAlpha,i.style.strokeStyle=DefaultMoveGemStyle_1.default.strokeStyle,i.style.lineWidth=DefaultMoveGemStyle_1.default.lineWidth,i.style.lineDash=DefaultMoveGemStyle_1.default.lineDash,i.style.lineDashOffset=DefaultMoveGemStyle_1.default.lineDashOffset),CircleDrawAction_1.default.draw(this.context,this.context.getAssistCtx(),i)))},t.prototype.setCursor=function(){},t}(ModifyAction_1.default);exports.default=CircleModifyAction;
//# sourceMappingURL=CircleModifyAction.js.map
