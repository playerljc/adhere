"use strict";var __extends=this&&this.__extends||function(){var i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])})(t,e)};return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function a(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(a.prototype=e.prototype,new a)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,a=1,i=arguments.length;a<i;a++)for(var o in e=arguments[a])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(t,e,a,i){void 0===i&&(i=a);var o=Object.getOwnPropertyDescriptor(e,a);o&&("get"in o?e.__esModule:!o.writable&&!o.configurable)||(o={enumerable:!0,get:function(){return e[a]}}),Object.defineProperty(t,i,o)}:function(t,e,a,i){t[i=void 0===i?a:i]=e[a]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),__importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)"default"!==a&&Object.prototype.hasOwnProperty.call(t,a)&&__createBinding(e,t,a);return __setModuleDefault(e,t),e},__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},adhere_util_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("@baifendian/adhere-util"))),turf=__importStar(require("@turf/turf")),defaultMoveGemStyle_1=__importDefault(require("../defaultMoveGemStyle")),RectangleDrawAction_1=__importDefault(require("../draw/RectangleDrawAction")),types_1=require("../types"),ModifyAction_1=__importDefault(require("./ModifyAction")),RectangleModifyAction=function(e){function t(t){t=e.call(this,t)||this;return t.rectangleAnchorPoints=[],t.indexToModifyHandlerMapping=new Map([[0,t.modifyDataByLeftTop],[1,t.modifyDataByCenterTop],[2,t.modifyDataByRightTop],[3,t.modifyDataByRightCenter],[4,t.modifyDataByRightBottom],[5,t.modifyDataByCenterBottom],[6,t.modifyDataByLeftBottom],[7,t.modifyDataByLeftCenter]]),t.ResizeCursorMapping=new Map([[0,"nwse-resize"],[1,"ns-resize"],[2,"nesw-resize"],[3,"ew-resize"],[4,"nwse-resize"],[5,"ns-resize"],[6,"nesw-resize"],[7,"ew-resize"]]),t}return __extends(t,e),t.prototype.drawAnchors=function(){if(this.context){var t=this.context.getCtx();if(t){var e=null==(e=null==(e=null==this?void 0:this.data)?void 0:e.data)?void 0:e.data,a=e.leftTopPoint,i=e.width,e=e.height,o=i/2,n=e/2;this.rectangleAnchorPoints=[__assign({},a),{x:a.x+o,y:a.y},{x:a.x+i,y:a.y},{x:a.x+i,y:a.y+n},{x:a.x+i,y:a.y+e},{x:a.x+o,y:a.y+e},{x:a.x,y:a.y+e},{x:a.x,y:a.y+n}];for(var r=0;r<this.rectangleAnchorPoints.length;r++){var s=this.rectangleAnchorPoints[r];t.beginPath(),this.setAnchorCircleStyle(),t.ellipse(s.x,s.y,this.anchorRadius,this.anchorRadius,45*Math.PI/180,0,2*Math.PI),t.stroke(),t.fill()}}}},t.prototype.getPointInAnchor=function(t){if(!this.data)return null;for(var e=null,a=-1,i=0;i<this.rectangleAnchorPoints.length;i++){var o=this.rectangleAnchorPoints[i],n=this.anchorRadius+this.anchorLineWidth;if(adhere_util_1.default.isPointInCircle(t,{center:o,radius:n})){e=o,a=i;break}}return e&&-1!==a?{point:e,index:a}:null},t.prototype.setResizeCursorByIndex=function(t){var e,a;this.context&&(e=this.context.getCanvasEl(),a=this.context.getAssistCanvasEl(),e&&a&&(e.style.cursor=a.style.cursor=this.ResizeCursorMapping.get(t)))},t.prototype.drawModify=function(t){var e,a=this.context,i=null==a?void 0:a.getCtx();a&&i&&this.data&&this.startPoint&&(i=a.getHistoryDataById(this.data.data.id))&&(e=this.indexToModifyHandlerMapping.get(this.startIndex))&&e.call(this,t)&&(this.data.data=i,a.clearDraw(),a.drawHistoryData(),this.drawAnchors())},t.prototype.drawMove=function(t,e){var a,i=this.context,o=null==i?void 0:i.getCtx();i&&o&&this.data&&((o=i.getHistoryDataById(this.data.data.id))&&(a=e.x-t.x,e=e.y-t.y,o.data.leftTopPoint.x+=a,o.data.leftTopPoint.y+=e,this.data.data=o,i.clearDraw(),i.drawHistoryData(),this.drawAnchors()))},t.prototype.getSelectType=function(){return types_1.SelectType.Rectangle},t.prototype.getBox=function(){var t,e=this.context,a=null==e?void 0:e.getCtx();return e&&a&&this.data&&(a=e.getHistoryDataById(this.data.data.id))?(a=(e=a.data).leftTopPoint,t=e.width,e=e.height,{leftTop:__assign({},a),rightTop:{x:a.x+t,y:a.y},rightBottom:{x:a.x+t,y:a.y+e},leftBottom:{x:a.x,y:a.y+e}}):null},t.prototype.modifyDataByLeftTop=function(t){var e=this.context,a=null==e?void 0:e.getCtx();return!!(e&&a&&this.data&&this.startPoint)&&(!!(a=e.getHistoryDataById(this.data.data.id))&&(!!(e=this.getBox())&&(!(t.x>e.rightTop.x||t.y>e.rightBottom.y)&&(a.data.leftTopPoint=t,a.data.width=e.rightTop.x-t.x,a.data.height=e.rightBottom.y-t.y,!0))))},t.prototype.modifyDataByCenterTop=function(t){var e,a=this.context,i=null==a?void 0:a.getCtx();return!!(a&&i&&this.data&&this.startPoint)&&(!!(i=a.getHistoryDataById(this.data.data.id))&&(a=i.data.width,!!(e=this.getBox())&&(!(t.y>e.leftBottom.y)&&(i.data.leftTopPoint={x:e.leftTop.x,y:t.y},i.data.width=a,i.data.height=e.rightBottom.y-t.y,!0))))},t.prototype.modifyDataByRightTop=function(t){var e=this.context,a=null==e?void 0:e.getCtx();return!!(e&&a&&this.data&&this.startPoint)&&(!!(a=e.getHistoryDataById(this.data.data.id))&&(!!(e=this.getBox())&&(!(t.x<e.leftTop.x||t.y>e.leftBottom.y)&&(a.data.leftTopPoint={x:e.leftTop.x,y:t.y},a.data.width=t.x-e.leftTop.x,a.data.height=e.rightBottom.y-t.y,!0))))},t.prototype.modifyDataByRightCenter=function(t){var e,a,i=this.context,o=null==i?void 0:i.getCtx();return!!(i&&o&&this.data&&this.startPoint)&&(!!(o=i.getHistoryDataById(this.data.data.id))&&(e=(i=o.data).leftTopPoint,i=i.height,!!(a=this.getBox())&&(!(t.x<a.leftTop.x)&&(o.data.leftTopPoint=__assign({},e),o.data.width=t.x-a.leftTop.x,o.data.height=i,!0))))},t.prototype.modifyDataByRightBottom=function(t){var e,a=this.context,i=null==a?void 0:a.getCtx();return!!(a&&i&&this.data&&this.startPoint)&&(!!(i=a.getHistoryDataById(this.data.data.id))&&(a=i.data.leftTopPoint,!!(e=this.getBox())&&(!(t.x<e.leftTop.x||t.y<e.leftTop.y)&&(i.data.leftTopPoint=__assign({},a),i.data.width=t.x-e.leftTop.x,i.data.height=t.y-e.leftTop.y,!0))))},t.prototype.modifyDataByCenterBottom=function(t){var e,a,i=this.context,o=null==i?void 0:i.getCtx();return!!(i&&o&&this.data&&this.startPoint)&&(!!(o=i.getHistoryDataById(this.data.data.id))&&(e=(i=o.data).leftTopPoint,i=i.width,!!(a=this.getBox())&&(!(t.y<a.leftTop.y)&&(o.data.leftTopPoint=__assign({},e),o.data.width=i,o.data.height=t.y-a.leftTop.y,!0))))},t.prototype.modifyDataByLeftBottom=function(t){var e,a=this.context,i=null==a?void 0:a.getCtx();return!!(a&&i&&this.data&&this.startPoint)&&(!!(i=a.getHistoryDataById(this.data.data.id))&&(a=i.data.leftTopPoint,!!(e=this.getBox())&&(!(t.x>e.rightBottom.x||t.y<e.rightTop.y)&&(i.data.leftTopPoint={x:t.x,y:a.y},i.data.width=e.rightBottom.x-t.x,i.data.height=t.y-e.rightTop.y,!0))))},t.prototype.modifyDataByLeftCenter=function(t){var e,a,i=this.context,o=null==i?void 0:i.getCtx();return!!(i&&o&&this.data&&this.startPoint)&&(!!(o=i.getHistoryDataById(this.data.data.id))&&(e=(i=o.data).leftTopPoint,i=i.height,!!(a=this.getBox())&&(!(t.x>a.rightBottom.x)&&(o.data.leftTopPoint={x:t.x,y:e.y},o.data.width=a.rightBottom.x-t.x,o.data.height=i,!0))))},t.prototype.isCanMove=function(t){var e,a,i,o;return!!this.data&&(e=(a=null==(a=null==(a=null==this?void 0:this.data)?void 0:a.data)?void 0:a.data).leftTopPoint,o=a.width,a=a.height,i=turf.point([t.x,t.y]),o=turf.polygon([[[e.x,e.y],[e.x+o,e.y],[e.x+o,e.y+a],[e.x,e.y+a],[e.x,e.y]]]),turf.booleanPointInPolygon(i,o)&&!this.getPointInAnchor(t))},t.prototype.drawMoveGeometry=function(){this.context&&this.data&&RectangleDrawAction_1.default.draw(this.context.getAssistCtx(),this.data)},t.prototype.drawMoveGeometry=function(t,e){var a,i;this.context&&this.data&&t&&e&&((a=__assign({},this.data.data)).data=__assign(__assign({},a.data),{leftTopPoint:__assign({},a.data.leftTopPoint)}),i=e.x-t.x,e=e.y-t.y,a.data&&a.data.leftTopPoint&&(a.data.leftTopPoint.x+=i,a.data.leftTopPoint.y+=e,a.style&&(a.style.globalAlpha=defaultMoveGemStyle_1.default.globalAlpha,a.style.strokeStyle=defaultMoveGemStyle_1.default.strokeStyle,a.style.lineWidth=defaultMoveGemStyle_1.default.lineWidth,a.style.lineDash=defaultMoveGemStyle_1.default.lineDash,a.style.lineDashOffset=defaultMoveGemStyle_1.default.lineDashOffset),RectangleDrawAction_1.default.draw(this.context.getAssistCtx(),a)))},t.prototype.destroy=function(){this.startIndex=-1,e.prototype.destroy.call(this)},t}(ModifyAction_1.default);exports.default=RectangleModifyAction;
//# sourceMappingURL=RectangleModifyAction.js.map
