"use strict";var __extends=this&&this.__extends||function(){var i=function(t,e){return(i=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,e){t.__proto__=e}:function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}))(t,e)};return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,o=1,i=arguments.length;o<i;o++)for(var a in e=arguments[o])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(t,e,o,i){void 0===i&&(i=o);var a=Object.getOwnPropertyDescriptor(e,o);a&&("get"in a?e.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return e[o]}}),Object.defineProperty(t,i,a)}:function(t,e,o,i){t[i=void 0===i?o:i]=e[o]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),__importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)"default"!==o&&Object.prototype.hasOwnProperty.call(t,o)&&__createBinding(e,t,o);return __setModuleDefault(e,t),e},__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},adhere_util_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("@baifendian/adhere-util"))),turf=__importStar(require("@turf/turf")),DefaultMoveGemStyle_1=__importDefault(require("../DefaultMoveGemStyle")),RectangleDrawAction_1=__importDefault(require("../draw/RectangleDrawAction")),types_1=require("../types"),ModifyAction_1=__importDefault(require("./ModifyAction")),RectangleModifyAction=function(e){function t(t){t=e.call(this,t)||this;return t.rectangleAnchorPoints=[],t.indexToModifyHandlerMapping=new Map([[0,t.modifyDataByLeftTop],[1,t.modifyDataByCenterTop],[2,t.modifyDataByRightTop],[3,t.modifyDataByRightCenter],[4,t.modifyDataByRightBottom],[5,t.modifyDataByCenterBottom],[6,t.modifyDataByLeftBottom],[7,t.modifyDataByLeftCenter]]),t.ResizeCursorMapping=new Map([[0,"nwse-resize"],[1,"ns-resize"],[2,"nesw-resize"],[3,"ew-resize"],[4,"nwse-resize"],[5,"ns-resize"],[6,"nesw-resize"],[7,"ew-resize"]]),t}return __extends(t,e),t.prototype.setCursor=function(){throw new Error("Method not implemented.")},t.prototype.drawAnchors=function(){if(this.context){var t=this.context.getCtx();if(t){var e=RectangleDrawAction_1.default.transformOriginToReal(this.context,null==(e=null==(e=null==this?void 0:this.data)?void 0:e.data)?void 0:e.data),o=e.leftTopPoint,i=e.width,e=e.height,a=i/2,n=e/2;this.rectangleAnchorPoints=[__assign({},o),{x:o.x+a,y:o.y},{x:o.x+i,y:o.y},{x:o.x+i,y:o.y+n},{x:o.x+i,y:o.y+e},{x:o.x+a,y:o.y+e},{x:o.x,y:o.y+e},{x:o.x,y:o.y+n}];for(var r=0;r<this.rectangleAnchorPoints.length;r++){var s=this.rectangleAnchorPoints[r];t.beginPath(),this.setAnchorCircleStyle(),t.ellipse(s.x,s.y,this.anchorRadius,this.anchorRadius,45*Math.PI/180,0,2*Math.PI),t.stroke(),t.fill()}}}},t.prototype.getPointInAnchor=function(t){if(!this.data)return null;for(var e=null,o=-1,i=0;i<this.rectangleAnchorPoints.length;i++){var a=this.rectangleAnchorPoints[i],n=this.anchorRadius+this.anchorLineWidth;if(adhere_util_1.default.isPointInCircle(t,{center:a,radius:n})){e=a,o=i;break}}return e&&-1!==o?{point:e,index:o}:null},t.prototype.setResizeCursorByIndex=function(t){var e,o;this.context&&(e=this.context.getCanvasEl(),o=this.context.getAssistCanvasEl(),e)&&o&&(e.style.cursor=o.style.cursor=this.ResizeCursorMapping.get(t))},t.prototype.drawModify=function(t){var e,o=this.context,i=null==o?void 0:o.getCtx();o&&i&&this.data&&this.startPoint&&(i=o.getHistoryDataById(this.data.data.id))&&(e=this.indexToModifyHandlerMapping.get(this.startIndex))&&e.call(this,t)&&(this.data.data=__assign({},i),o.clearDraw(),o.drawHistoryData(),this.drawAnchors())},t.prototype.drawMove=function(t,e){var o,i=this.context,a=null==i?void 0:i.getCtx();i&&a&&this.data&&(a=i.getHistoryDataById(this.data.data.id))&&(t=i.pixelToPoint(t),o=(e=i.pixelToPoint(e)).x-t.x,e=e.y-t.y,a.data.leftTopPoint.x+=o,a.data.leftTopPoint.y+=e,this.data.data=__assign({},a),i.clearDraw(),i.drawHistoryData(),this.drawAnchors())},t.prototype.getSelectType=function(){return types_1.SelectType.Rectangle},t.prototype.getBox=function(){var t,e=this.context,o=null==e?void 0:e.getCtx();return e&&o&&this.data&&(o=e.getHistoryDataById(this.data.data.id))?(o=(e=RectangleDrawAction_1.default.transformOriginToReal(e,o.data)).leftTopPoint,t=e.width,e=e.height,{leftTop:__assign({},o),rightTop:{x:o.x+t,y:o.y},rightBottom:{x:o.x+t,y:o.y+e},leftBottom:{x:o.x,y:o.y+e}}):null},t.prototype.modifyDataByLeftTop=function(t){var e,o=this.context,i=null==o?void 0:o.getCtx();return!(!(o&&i&&this.data&&this.startPoint)||!(i=o.getHistoryDataById(this.data.data.id))||!(e=this.getBox())||t.x>e.rightTop.x||t.y>e.rightBottom.y||(i.data.leftTopPoint=o.pixelToPoint(t),i.data.width=o.distanceToActual(e.rightTop.x-t.x),i.data.height=o.distanceToActual(e.rightBottom.y-t.y),0))},t.prototype.modifyDataByCenterTop=function(t){var e,o=this.context,i=null==o?void 0:o.getCtx();return!(!(o&&i&&this.data&&this.startPoint)||!(i=o.getHistoryDataById(this.data.data.id))||!(e=this.getBox())||t.y>e.leftBottom.y||(i.data.leftTopPoint=o.pixelToPoint({x:e.leftTop.x,y:t.y}),i.data.height=o.distanceToActual(e.rightBottom.y-t.y),0))},t.prototype.modifyDataByRightTop=function(t){var e,o=this.context,i=null==o?void 0:o.getCtx();return!(!(o&&i&&this.data&&this.startPoint)||!(i=o.getHistoryDataById(this.data.data.id))||!(e=this.getBox())||t.x<e.leftTop.x||t.y>e.leftBottom.y||(i.data.leftTopPoint=o.pixelToPoint({x:e.leftTop.x,y:t.y}),i.data.width=o.distanceToActual(t.x-e.leftTop.x),i.data.height=o.distanceToActual(e.rightBottom.y-t.y),0))},t.prototype.modifyDataByRightCenter=function(t){var e,o=this.context,i=null==o?void 0:o.getCtx();return!(!(o&&i&&this.data&&this.startPoint)||!(i=o.getHistoryDataById(this.data.data.id))||!(e=this.getBox())||t.x<e.leftTop.x||(i.data.width=o.distanceToActual(t.x-e.leftTop.x),0))},t.prototype.modifyDataByRightBottom=function(t){var e,o=this.context,i=null==o?void 0:o.getCtx();return!(!(o&&i&&this.data&&this.startPoint)||!(i=o.getHistoryDataById(this.data.data.id))||!(e=this.getBox())||t.x<e.leftTop.x||t.y<e.leftTop.y||(i.data.width=o.distanceToActual(t.x-e.leftTop.x),i.data.height=o.distanceToActual(t.y-e.leftTop.y),0))},t.prototype.modifyDataByCenterBottom=function(t){var e,o=this.context,i=null==o?void 0:o.getCtx();return!(!(o&&i&&this.data&&this.startPoint)||!(i=o.getHistoryDataById(this.data.data.id))||!(e=this.getBox())||t.y<e.leftTop.y||(i.data.height=o.distanceToActual(t.y-e.leftTop.y),0))},t.prototype.modifyDataByLeftBottom=function(t){var e,o,i=this.context,a=null==i?void 0:i.getCtx();return!(!(i&&a&&this.data&&this.startPoint)||!(a=i.getHistoryDataById(this.data.data.id))||(e=a.data.leftTopPoint,e=i.pointToPixel(e),!(o=this.getBox()))||(t.x>o.rightBottom.x||t.y<o.rightTop.y||(a.data.leftTopPoint=i.pixelToPoint({x:t.x,y:e.y}),a.data.width=i.distanceToActual(o.rightBottom.x-t.x),a.data.height=i.distanceToActual(t.y-o.rightTop.y),0)))},t.prototype.modifyDataByLeftCenter=function(t){var e,o,i=this.context,a=null==i?void 0:i.getCtx();return!(!(i&&a&&this.data&&this.startPoint)||!(a=i.getHistoryDataById(this.data.data.id))||(e=a.data.leftTopPoint,e=i.pointToPixel(e),!(o=this.getBox()))||(t.x>o.rightBottom.x||(a.data.leftTopPoint=i.pixelToPoint({x:t.x,y:e.y}),a.data.width=i.distanceToActual(o.rightBottom.x-t.x),0)))},t.prototype.isCanMove=function(t){var e,o,i,a;return!!this.data&&(e=(o=RectangleDrawAction_1.default.transformOriginToReal(this.context,null==(o=null==(o=null==this?void 0:this.data)?void 0:o.data)?void 0:o.data)).leftTopPoint,a=o.width,o=o.height,i=turf.point([t.x,t.y]),a=turf.polygon([[[e.x,e.y],[e.x+a,e.y],[e.x+a,e.y+o],[e.x,e.y+o],[e.x,e.y]]]),turf.booleanPointInPolygon(i,a))&&!this.getPointInAnchor(t)},t.prototype.drawMoveGeometry=function(){this.context&&this.data&&RectangleDrawAction_1.default.draw(this.context,this.context.getAssistCtx(),this.data)},t.prototype.drawMoveGeometry=function(t,e){var o,i;this.context&&this.data&&t&&e&&((o=__assign({},this.data.data)).data=__assign(__assign({},o.data),{leftTopPoint:__assign({},o.data.leftTopPoint)}),t=this.context.pixelToPoint(t),i=(e=this.context.pixelToPoint(e)).x-t.x,e=e.y-t.y,o.data)&&o.data.leftTopPoint&&(o.data.leftTopPoint.x+=i,o.data.leftTopPoint.y+=e,o.style&&(o.style.globalAlpha=DefaultMoveGemStyle_1.default.globalAlpha,o.style.strokeStyle=DefaultMoveGemStyle_1.default.strokeStyle,o.style.lineWidth=DefaultMoveGemStyle_1.default.lineWidth,o.style.lineDash=DefaultMoveGemStyle_1.default.lineDash,o.style.lineDashOffset=DefaultMoveGemStyle_1.default.lineDashOffset),RectangleDrawAction_1.default.draw(this.context,this.context.getAssistCtx(),o))},t.prototype.destroy=function(){this.startIndex=-1,e.prototype.destroy.call(this)},t}(ModifyAction_1.default);exports.default=RectangleModifyAction;
//# sourceMappingURL=RectangleModifyAction.js.map
