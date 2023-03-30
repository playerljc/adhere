"use strict";var __extends=this&&this.__extends||function(){var i=function(t,e){return(i=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,e){t.__proto__=e}:function(t,e){for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}))(t,e)};return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function a(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(a.prototype=e.prototype,new a)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,a=1,i=arguments.length;a<i;a++)for(var r in e=arguments[a])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(t,e,a,i){void 0===i&&(i=a);var r=Object.getOwnPropertyDescriptor(e,a);r&&("get"in r?e.__esModule:!r.writable&&!r.configurable)||(r={enumerable:!0,get:function(){return e[a]}}),Object.defineProperty(t,i,r)}:function(t,e,a,i){t[i=void 0===i?a:i]=e[a]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),__importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)"default"!==a&&Object.prototype.hasOwnProperty.call(t,a)&&__createBinding(e,t,a);return __setModuleDefault(e,t),e},__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},adhere_util_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("@baifendian/adhere-util"))),turf=__importStar(require("@turf/turf")),DefaultMoveGemStyle_1=__importDefault(require("../DefaultMoveGemStyle")),StartDrawAction_1=__importDefault(require("../draw/StartDrawAction")),types_1=require("../types"),ModifyAction_1=__importDefault(require("./ModifyAction")),StartModifyAction=function(e){function t(t){t=e.call(this,t)||this;return t.ResizeCursorMapping=new Map([[0,"ns-resize"],[1,"ew-resize"],[2,"ns-resize"],[3,"ew-resize"]]),t}return __extends(t,e),t.prototype.drawAnchors=function(){if(this.context){var t=this.context.getCtx();if(t){for(var e=StartDrawAction_1.default.transformOriginToReal(this.context,null==(e=null==(e=null==this?void 0:this.data)?void 0:e.data)?void 0:e.data),a=e.center,e=e.outRadius,i=[{x:a.x,y:a.y-e},{x:a.x+e,y:a.y},{x:a.x,y:a.y+e},{x:a.x-e,y:a.y}],r=0;r<i.length;r++){var n=i[r];t.beginPath(),this.setAnchorCircleStyle(),t.ellipse(n.x,n.y,this.anchorRadius,this.anchorRadius,45*Math.PI/180,0,2*Math.PI),t.stroke(),t.fill()}t.beginPath(),this.setAnchorLineStyle(),t.ellipse(a.x,a.y,e,e,45*Math.PI/180,0,2*Math.PI),t.closePath(),t.stroke()}}},t.prototype.getPointInAnchor=function(t){if(!this.data)return null;for(var e=null,a=-1,i=StartDrawAction_1.default.transformOriginToReal(this.context,null==(i=null==(i=null==this?void 0:this.data)?void 0:i.data)?void 0:i.data),r=i.center,i=i.outRadius,n=[{x:r.x,y:r.y-i},{x:r.x+i,y:r.y},{x:r.x,y:r.y+i},{x:r.x-i,y:r.y}],o=0;o<n.length;o++){var s=n[o],l=this.anchorRadius+this.anchorLineWidth;if(adhere_util_1.default.isPointInCircle(t,{center:s,radius:l})){e=s,a=o;break}}return e&&-1!==a?{point:e,index:a}:null},t.prototype.setResizeCursorByIndex=function(t){var e,a;this.context&&(e=this.context.getCanvasEl(),a=this.context.getAssistCanvasEl(),e)&&a&&(t=this.ResizeCursorMapping.get(t),e.style.cursor=a.style.cursor=t)},t.prototype.drawModify=function(t){var e,a=this.context,i=null==a?void 0:a.getCtx();a&&i&&this.data&&this.startPoint&&(i=a.getHistoryDataById(this.data.data.id))&&(e=i.data.center,e=a.pointToPixel(e),i.data.outRadius=a.distanceToActual(adhere_util_1.default.getDistanceByBetweenPoint({p1:e,p2:t})),i.data.innerRadius=i.data.outRadius/2,this.data.data=__assign({},i),a.clearDraw(),a.drawHistoryData(),this.drawAnchors())},t.prototype.drawMove=function(t,e){var a,i=this.context,r=null==i?void 0:i.getCtx();i&&r&&this.data&&(r=i.getHistoryDataById(this.data.data.id))&&(t=i.pixelToPoint(t),a=(e=i.pixelToPoint(e)).x-t.x,e=e.y-t.y,r.data.center.x+=a,r.data.center.y+=e,this.data.data=__assign({},r),i.clearDraw(),i.drawHistoryData(),this.drawAnchors())},t.prototype.getSelectType=function(){return types_1.SelectType.Start},t.prototype.isCanMove=function(t){if(!this.data)return!1;for(var e=StartDrawAction_1.default.transformOriginToReal(this.context,null==(e=null==(e=null==this?void 0:this.data)?void 0:e.data)?void 0:e.data),a=e.center,i=e.outRadius,r=e.innerRadius,e=turf.point([t.x,t.y]),n=[],o=0;o<5;o++)n.push({x:Math.cos((18+72*o)/180*Math.PI)*i+a.x,y:-Math.sin((18+72*o)/180*Math.PI)*i+a.y}),n.push({x:Math.cos((54+72*o)/180*Math.PI)*r+a.x,y:-Math.sin((54+72*o)/180*Math.PI)*r+a.y});var s=n.map(function(t){return[t.x,t.y]}),s=(s.push(s[0]),turf.polygon([s]));return turf.booleanPointInPolygon(e,s)&&!this.getPointInAnchor(t)},t.prototype.drawMoveGeometry=function(){this.context&&this.data&&StartDrawAction_1.default.draw(this.context,this.context.getAssistCtx(),this.data)},t.prototype.drawMoveGeometry=function(t,e){var a,i;this.context&&this.data&&t&&e&&((a=__assign({},this.data.data)).data=__assign(__assign({},a.data),{center:__assign({},a.data.center)}),t=this.context.pixelToPoint(t),i=(e=this.context.pixelToPoint(e)).x-t.x,e=e.y-t.y,a.data)&&a.data.center&&(a.data.center.x+=i,a.data.center.y+=e,a.style&&(a.style.globalAlpha=DefaultMoveGemStyle_1.default.globalAlpha,a.style.strokeStyle=DefaultMoveGemStyle_1.default.strokeStyle,a.style.lineWidth=DefaultMoveGemStyle_1.default.lineWidth,a.style.lineDash=DefaultMoveGemStyle_1.default.lineDash,a.style.lineDashOffset=DefaultMoveGemStyle_1.default.lineDashOffset),StartDrawAction_1.default.draw(this.context,this.context.getAssistCtx(),a))},t.prototype.setCursor=function(){},t}(ModifyAction_1.default);exports.default=StartModifyAction;
//# sourceMappingURL=StartModifyAction.js.map
