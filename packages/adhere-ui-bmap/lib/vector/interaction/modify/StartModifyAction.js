"use strict";var __extends=this&&this.__extends||function(){var i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var a in e)e.hasOwnProperty(a)&&(t[a]=e[a])})(t,e)};return function(t,e){function a(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(a.prototype=e.prototype,new a)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,a=1,i=arguments.length;a<i;a++)for(var n in e=arguments[a])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(t,e,a,i){void 0===i&&(i=a),Object.defineProperty(t,i,{enumerable:!0,get:function(){return e[a]}})}:function(t,e,a,i){t[i=void 0===i?a:i]=e[a]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),__importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)"default"!==a&&Object.hasOwnProperty.call(t,a)&&__createBinding(e,t,a);return __setModuleDefault(e,t),e},__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var turf=__importStar(require("@turf/turf")),math_1=__importDefault(require("@baifendian/adhere-util/lib/math")),types_1=require("../types"),ModifyAction_1=__importDefault(require("./ModifyAction")),StartDrawAction_1=__importDefault(require("../draw/StartDrawAction")),DefaultMoveGemStyle_1=__importDefault(require("../DefaultMoveGemStyle")),StartModifyAction=function(e){function t(t){t=e.call(this,t)||this;return t.ResizeCursorMapping=new Map([[0,"ns-resize"],[1,"ew-resize"],[2,"ns-resize"],[3,"ew-resize"]]),t}return __extends(t,e),t.prototype.drawAnchors=function(){if(this.context){var t=this.context.getCtx();if(t){for(var e=StartDrawAction_1.default.transformOriginToReal(this.context,null===(a=null===(e=null==this?void 0:this.data)||void 0===e?void 0:e.data)||void 0===a?void 0:a.data),a=e.center,e=e.outRadius,i=[{x:a.x,y:a.y-e},{x:a.x+e,y:a.y},{x:a.x,y:a.y+e},{x:a.x-e,y:a.y}],n=0;n<i.length;n++){var r=i[n];t.beginPath(),this.setAnchorCircleStyle(),t.ellipse(r.x,r.y,this.anchorRadius,this.anchorRadius,45*Math.PI/180,0,2*Math.PI),t.stroke(),t.fill()}t.beginPath(),this.setAnchorLineStyle(),t.ellipse(a.x,a.y,e,e,45*Math.PI/180,0,2*Math.PI),t.closePath(),t.stroke()}}},t.prototype.getPointInAnchor=function(t){if(!this.data)return null;for(var e=null,a=-1,i=StartDrawAction_1.default.transformOriginToReal(this.context,null===(n=null===(i=null==this?void 0:this.data)||void 0===i?void 0:i.data)||void 0===n?void 0:n.data),n=i.center,i=i.outRadius,r=[{x:n.x,y:n.y-i},{x:n.x+i,y:n.y},{x:n.x,y:n.y+i},{x:n.x-i,y:n.y}],o=0;o<r.length;o++){var s=r[o],l=this.anchorRadius+this.anchorLineWidth;if(math_1.default.isPointInCircle(t,{center:s,radius:l})){e=s,a=o;break}}return e&&-1!==a?{point:e,index:a}:null},t.prototype.setResizeCursorByIndex=function(t){var e,a;this.context&&(e=this.context.getCanvasEl(),a=this.context.getAssistCanvasEl(),e&&a&&(t=this.ResizeCursorMapping.get(t),e.style.cursor=a.style.cursor=t))},t.prototype.drawModify=function(t){var e,a=this.context,i=null==a?void 0:a.getCtx();a&&i&&this.data&&this.startPoint&&((e=a.getHistoryDataById(this.data.data.id))&&(i=e.data.center,i=a.pointToPixel(i),e.data.outRadius=a.distanceToActual(math_1.default.getDistanceByBetweenPoint({p1:i,p2:t})),e.data.innerRadius=e.data.outRadius/2,this.data.data=__assign({},e),a.clearDraw(),a.drawHistoryData(),this.drawAnchors()))},t.prototype.drawMove=function(t,e){var a,i=this.context,n=null==i?void 0:i.getCtx();i&&n&&this.data&&((a=i.getHistoryDataById(this.data.data.id))&&(n=i.pixelToPoint(t),e=(t=i.pixelToPoint(e)).x-n.x,n=t.y-n.y,a.data.center.x+=e,a.data.center.y+=n,this.data.data=__assign({},a),i.clearDraw(),i.drawHistoryData(),this.drawAnchors()))},t.prototype.getSelectType=function(){return types_1.SelectType.Start},t.prototype.isCanMove=function(t){if(!this.data)return!1;for(var e=StartDrawAction_1.default.transformOriginToReal(this.context,null===(r=null===(e=null==this?void 0:this.data)||void 0===e?void 0:e.data)||void 0===r?void 0:r.data),a=e.center,i=e.outRadius,n=e.innerRadius,r=turf.point([t.x,t.y]),o=[],s=0;s<5;s++)o.push({x:Math.cos((18+72*s)/180*Math.PI)*i+a.x,y:-Math.sin((18+72*s)/180*Math.PI)*i+a.y}),o.push({x:Math.cos((54+72*s)/180*Math.PI)*n+a.x,y:-Math.sin((54+72*s)/180*Math.PI)*n+a.y});e=o.map(function(t){return[t.x,t.y]});e.push(e[0]);e=turf.polygon([e]);return turf.booleanPointInPolygon(r,e)&&!this.getPointInAnchor(t)},t.prototype.drawMoveGeometry=function(){this.context&&this.data&&StartDrawAction_1.default.draw(this.context,this.context.getAssistCtx(),this.data)},t.prototype.drawMoveGeometry=function(t,e){var a,i;this.context&&this.data&&t&&e&&((a=__assign({},this.data.data)).data=__assign(__assign({},a.data),{center:__assign({},a.data.center)}),i=this.context.pixelToPoint(t),e=(t=this.context.pixelToPoint(e)).x-i.x,i=t.y-i.y,a.data&&a.data.center&&(a.data.center.x+=e,a.data.center.y+=i,a.style&&(a.style.globalAlpha=DefaultMoveGemStyle_1.default.globalAlpha,a.style.strokeStyle=DefaultMoveGemStyle_1.default.strokeStyle,a.style.lineWidth=DefaultMoveGemStyle_1.default.lineWidth,a.style.lineDash=DefaultMoveGemStyle_1.default.lineDash,a.style.lineDashOffset=DefaultMoveGemStyle_1.default.lineDashOffset),StartDrawAction_1.default.draw(this.context,this.context.getAssistCtx(),a)))},t}(ModifyAction_1.default);exports.default=StartModifyAction;
//# sourceMappingURL=StartModifyAction.js.map
