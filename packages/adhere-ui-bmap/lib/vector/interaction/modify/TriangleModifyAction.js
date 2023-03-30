"use strict";var __extends=this&&this.__extends||function(){var o=function(t,e){return(o=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,e){t.__proto__=e}:function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}))(t,e)};return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,i=1,o=arguments.length;i<o;i++)for(var a in e=arguments[i])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(t,e,i,o){void 0===o&&(o=i);var a=Object.getOwnPropertyDescriptor(e,i);a&&("get"in a?e.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return e[i]}}),Object.defineProperty(t,o,a)}:function(t,e,i,o){t[o=void 0===o?i:o]=e[i]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),__importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)"default"!==i&&Object.prototype.hasOwnProperty.call(t,i)&&__createBinding(e,t,i);return __setModuleDefault(e,t),e},__spreadArray=this&&this.__spreadArray||function(t,e,i){if(i||2===arguments.length)for(var o,a=0,n=e.length;a<n;a++)!o&&a in e||((o=o||Array.prototype.slice.call(e,0,a))[a]=e[a]);return t.concat(o||Array.prototype.slice.call(e))},__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},adhere_util_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("@baifendian/adhere-util"))),turf=__importStar(require("@turf/turf")),DefaultMoveGemStyle_1=__importDefault(require("../DefaultMoveGemStyle")),TriangleDrawAction_1=__importDefault(require("../draw/TriangleDrawAction")),types_1=require("../types"),ModifyAction_1=__importDefault(require("./ModifyAction")),TriangleModifyAction=function(e){function t(t){t=e.call(this,t)||this;return t.rectangleAnchorPoints=[],t.indexToModifyHandlerMapping=new Map([[0,t.modifyDataByLeftTop],[1,t.modifyDataByCenterTop],[2,t.modifyDataByRightTop],[3,t.modifyDataByRightCenter],[4,t.modifyDataByRightBottom],[5,t.modifyDataByCenterBottom],[6,t.modifyDataByLeftBottom],[7,t.modifyDataByLeftCenter]]),t.ResizeCursorMapping=new Map([[0,"nwse-resize"],[1,"ns-resize"],[2,"nesw-resize"],[3,"ew-resize"],[4,"nwse-resize"],[5,"ns-resize"],[6,"nesw-resize"],[7,"ew-resize"]]),t}return __extends(t,e),t.prototype.setCursor=function(){throw new Error("Method not implemented.")},t.prototype.drawAnchors=function(){if(this.context){var t=this.context.getCtx();if(t){var e=TriangleDrawAction_1.default.transformOriginToReal(this.context,null==(e=null==(e=null==this?void 0:this.data)?void 0:e.data)?void 0:e.data).points;if(e&&e.length){var i={x:e[0].x,y:e[1].y},o=e[2].x-e[0].x,e=e[2].y-e[1].y,a=o/2,n=e/2;this.rectangleAnchorPoints=[__assign({},i),{x:i.x+a,y:i.y},{x:i.x+o,y:i.y},{x:i.x+o,y:i.y+n},{x:i.x+o,y:i.y+e},{x:i.x+a,y:i.y+e},{x:i.x,y:i.y+e},{x:i.x,y:i.y+n}];for(var r=0;r<this.rectangleAnchorPoints.length;r++){var s=this.rectangleAnchorPoints[r];t.beginPath(),this.setAnchorCircleStyle(),t.ellipse(s.x,s.y,this.anchorRadius,this.anchorRadius,45*Math.PI/180,0,2*Math.PI),t.stroke(),t.fill()}t.beginPath(),this.setAnchorLineStyle(),t.moveTo(i.x,i.y),t.lineTo(i.x+o,i.y),t.lineTo(i.x+o,i.y+e),t.lineTo(i.x,i.y+e),t.lineTo(i.x,i.y),t.stroke()}}}},t.prototype.getPointInAnchor=function(t){if(!this.data)return null;for(var e=null,i=-1,o=0;o<this.rectangleAnchorPoints.length;o++){var a=this.rectangleAnchorPoints[o],n=this.anchorRadius+this.anchorLineWidth;if(adhere_util_1.default.isPointInCircle(t,{center:a,radius:n})){e=a,i=o;break}}return e&&-1!==i?{point:e,index:i}:null},t.prototype.setResizeCursorByIndex=function(t){var e,i;this.context&&(e=this.context.getCanvasEl(),i=this.context.getAssistCanvasEl(),e)&&i&&(e.style.cursor=i.style.cursor=this.ResizeCursorMapping.get(t))},t.prototype.drawModify=function(t){var e,i=this.context,o=null==i?void 0:i.getCtx();i&&o&&this.data&&this.startPoint&&(o=i.getHistoryDataById(this.data.data.id))&&(e=this.indexToModifyHandlerMapping.get(this.startIndex))&&e.call(this,t)&&(this.data.data=__assign({},o),i.clearDraw(),i.drawHistoryData(),this.drawAnchors())},t.prototype.drawMove=function(t,e){var i,o,a=this.context,n=null==a?void 0:a.getCtx();a&&n&&this.data&&(n=a.getHistoryDataById(this.data.data.id))&&(t=a.pixelToPoint(t),e=a.pixelToPoint(e),i=e.x-t.x,o=e.y-t.y,n.data.points.forEach(function(t){t.x+=i,t.y+=o}),this.data.data=__assign({},n),a.clearDraw(),a.drawHistoryData(),this.drawAnchors())},t.prototype.getSelectType=function(){return types_1.SelectType.Triangle},t.prototype.getBox=function(){var t,e,i=this.context;return i&&this.data&&(t=i.getHistoryDataById(this.data.data.id))&&(i=TriangleDrawAction_1.default.transformOriginToReal(i,t.data).points)&&i.length?(t={x:i[0].x,y:i[1].y},e=i[2].x-i[0].x,i=i[2].y-i[1].y,{leftTop:__assign({},t),rightTop:{x:t.x+e,y:t.y},rightBottom:{x:t.x+e,y:t.y+i},leftBottom:{x:t.x,y:t.y+i}}):null},t.prototype.modifyDataByLeftTop=function(t){var e,i,o=this.context,a=null==o?void 0:o.getCtx();return!!(o&&a&&this.data&&this.startPoint)&&!!(a=o.getHistoryDataById(this.data.data.id))&&!(!(i=a.data.points)||!i.length||!(i=this.getBox())||t.x>i.rightTop.x||t.y>i.rightBottom.y||(e=i.rightTop.x-t.x,i=i.rightBottom.y-t.y,a.data.points=TriangleDrawAction_1.default.transformRealToOrigin(o,{points:[{x:t.x,y:t.y+i},{x:t.x+e/2,y:t.y},{x:t.x+e,y:t.y+i}]}).points,0))},t.prototype.modifyDataByCenterTop=function(t){var e,i,o,a=this.context,n=null==a?void 0:a.getCtx();return!!(a&&n&&this.data&&this.startPoint)&&!!(n=a.getHistoryDataById(this.data.data.id))&&!(!(o=n.data.points)||!o.length||!(o=this.getBox())||t.y>o.leftBottom.y||(e={x:o.leftTop.x,y:t.y},i=o.rightTop.x-o.leftTop.x,o=o.rightBottom.y-t.y,n.data.points=TriangleDrawAction_1.default.transformRealToOrigin(a,{points:[{x:e.x,y:e.y+o},{x:e.x+i/2,y:e.y},{x:e.x+i,y:e.y+o}]}).points,0))},t.prototype.modifyDataByRightTop=function(t){var e,i,o,a=this.context,n=null==a?void 0:a.getCtx();return!!(a&&n&&this.data&&this.startPoint)&&!!(n=a.getHistoryDataById(this.data.data.id))&&!(!(o=n.data.points)||!o.length||!(o=this.getBox())||t.x<o.leftTop.x||t.y>o.leftBottom.y||(e={x:o.leftTop.x,y:t.y},i=t.x-o.leftTop.x,o=o.rightBottom.y-t.y,n.data.points=TriangleDrawAction_1.default.transformRealToOrigin(a,{points:[{x:e.x,y:e.y+o},{x:e.x+i/2,y:e.y},{x:e.x+i,y:e.y+o}]}).points,0))},t.prototype.modifyDataByRightCenter=function(t){var e,i,o=this.context,a=null==o?void 0:o.getCtx();return!!(o&&a&&this.data&&this.startPoint)&&!!(a=o.getHistoryDataById(this.data.data.id))&&!(!(i=a.data.points)||!i.length||!(i=this.getBox())||t.x<i.leftTop.x||(e={x:i.leftTop.x,y:i.leftTop.y},t=t.x-i.leftTop.x,i=i.rightBottom.y-i.rightTop.y,a.data.points=TriangleDrawAction_1.default.transformRealToOrigin(o,{points:[{x:e.x,y:e.y+i},{x:e.x+t/2,y:e.y},{x:e.x+t,y:e.y+i}]}).points,0))},t.prototype.modifyDataByRightBottom=function(t){var e,i,o,a=this.context,n=null==a?void 0:a.getCtx();return!!(a&&n&&this.data&&this.startPoint)&&!!(n=a.getHistoryDataById(this.data.data.id))&&!(!(e=n.data.points)||!e.length||!(e=this.getBox())||t.x<e.leftTop.x||t.y<e.leftTop.y||(i=__assign({},e.leftTop),o=t.x-e.leftTop.x,t=t.y-e.leftTop.y,n.data.points=TriangleDrawAction_1.default.transformRealToOrigin(a,{points:[{x:i.x,y:i.y+t},{x:i.x+o/2,y:i.y},{x:i.x+o,y:i.y+t}]}).points,0))},t.prototype.modifyDataByCenterBottom=function(t){var e,i,o,a=this.context,n=null==a?void 0:a.getCtx();return!!(a&&n&&this.data&&this.startPoint)&&!!(n=a.getHistoryDataById(this.data.data.id))&&!(!(e=n.data.points)||!e.length||!(e=this.getBox())||t.y<e.leftTop.y||(i=__assign({},e.leftTop),o=e.rightTop.x-e.leftTop.x,t=t.y-e.leftTop.y,n.data.points=TriangleDrawAction_1.default.transformRealToOrigin(a,{points:[{x:i.x,y:i.y+t},{x:i.x+o/2,y:i.y},{x:i.x+o,y:i.y+t}]}).points,0))},t.prototype.modifyDataByLeftBottom=function(t){var e,i,o,a=this.context,n=null==a?void 0:a.getCtx();return!!(a&&n&&this.data&&this.startPoint)&&!!(n=a.getHistoryDataById(this.data.data.id))&&!(!(e=n.data.points)||!e.length||!(e=this.getBox())||t.x>e.rightBottom.x||t.y<e.rightTop.y||(i={x:t.x,y:e.leftTop.y},o=e.rightBottom.x-t.x,t=t.y-e.rightTop.y,n.data.points=TriangleDrawAction_1.default.transformRealToOrigin(a,{points:[{x:i.x,y:i.y+t},{x:i.x+o/2,y:i.y},{x:i.x+o,y:i.y+t}]}).points,0))},t.prototype.modifyDataByLeftCenter=function(t){var e,i,o=this.context,a=null==o?void 0:o.getCtx();return!!(o&&a&&this.data&&this.startPoint)&&!!(a=o.getHistoryDataById(this.data.data.id))&&!(!(i=a.data.points)||!i.length||!(i=this.getBox())||t.x>i.rightBottom.x||(e={x:t.x,y:i.leftTop.y},t=i.rightBottom.x-t.x,i=i.rightBottom.y-i.rightTop.y,a.data.points=TriangleDrawAction_1.default.transformRealToOrigin(o,{points:[{x:e.x,y:e.y+i},{x:e.x+t/2,y:e.y},{x:e.x+t,y:e.y+i}]}).points,0))},t.prototype.isCanMove=function(t){var e,i;return!!this.data&&((i=TriangleDrawAction_1.default.transformOriginToReal(this.context,{points:__spreadArray([],(null==(i=null==(i=null==(i=null==this?void 0:this.data)?void 0:i.data)?void 0:i.data)?void 0:i.points)||[],!0)}).points).push(i[0]),e=turf.point([t.x,t.y]),i=turf.polygon([i.map(function(t){return[t.x,t.y]})]),turf.booleanPointInPolygon(e,i))&&!this.getPointInAnchor(t)},t.prototype.drawMoveGeometry=function(){this.context&&this.data&&TriangleDrawAction_1.default.draw(this.context,this.context.getAssistCtx(),this.data)},t.prototype.drawMoveGeometry=function(t,e){var i,o,a;this.context&&this.data&&t&&e&&((i=__assign({},this.data.data)).data=__assign(__assign({},i.data),{points:i.data.points.map(function(t){return __assign({},t)})}),t=this.context.pixelToPoint(t),e=this.context.pixelToPoint(e),o=e.x-t.x,a=e.y-t.y,i.data)&&i.data.points&&i.data.points.length&&(i.data.points.forEach(function(t){t.x+=o,t.y+=a}),i.style&&(i.style.globalAlpha=DefaultMoveGemStyle_1.default.globalAlpha,i.style.strokeStyle=DefaultMoveGemStyle_1.default.strokeStyle,i.style.lineWidth=DefaultMoveGemStyle_1.default.lineWidth,i.style.lineDash=DefaultMoveGemStyle_1.default.lineDash,i.style.lineDashOffset=DefaultMoveGemStyle_1.default.lineDashOffset),TriangleDrawAction_1.default.draw(this.context,this.context.getAssistCtx(),i))},t.prototype.destroy=function(){this.startIndex=-1,e.prototype.destroy.call(this)},t}(ModifyAction_1.default);exports.default=TriangleModifyAction;
//# sourceMappingURL=TriangleModifyAction.js.map
