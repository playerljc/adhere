"use strict";var __extends=this&&this.__extends||function(){var o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},ImageCache_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("../ImageCache"))),GeometryStyle_1=__importDefault(require("../style/GeometryStyle")),types_1=require("../types"),CircleGeometry_1=__importDefault(require("./CircleGeometry")),Geometry_1=__importDefault(require("./Geometry")),LeafGeometry_1=__importDefault(require("./LeafGeometry")),RadiusRectGeometry_1=__importDefault(require("./RadiusRectGeometry")),RectGeometry_1=__importDefault(require("./RectGeometry")),RegularPolygonGeometry_1=__importDefault(require("./RegularPolygonGeometry")),SectorGeometry_1=__importDefault(require("./SectorGeometry")),StartGeometry_1=__importDefault(require("./StartGeometry")),PointGeometry=function(r){function i(e){var t=r.call(this)||this;return t.coordinates=e,t}return __extends(i,r),i.prototype.setCoordinates=function(e){this.coordinates=e,null!=(e=null==this?void 0:this.getLayer())&&e.getEmitter().trigger(types_1.VectorActions.UPDATE)},i.prototype.getCoordinates=function(){return __assign({},this.coordinates)},i.prototype.getType=function(){return types_1.GeometryType.Point},i.getCenterCoordinate=function(e){var t=e.ctx,r=e.coordinates,o=e.map,a=e.style,e=e.isScale;return i.centerCoordinateMapping.get(a.pointType)({ctx:t,coordinates:r,map:o,style:a,isScale:e})},i.prototype.getCenterCoordinate=function(e){var t=e.ctx,r=e.style;e.isScale;return i.getCenterCoordinate({coordinates:this.coordinates,ctx:t,map:this.getMap(),style:r,isScale:!1})},i.drawCirclePoint=function(e){var t=e.ctx,r=e.style,o=e.coordinates,e=e.map;CircleGeometry_1.default.drawCircle({ctx:t,style:r,coordinates:{radius:r.radius,center:o},map:e,isScale:!1})},i.drawImagePoint=function(e){var t,r=e.ctx,o=e.style,a=e.coordinates,i=e.map.pointToPixel(new BMap.Point(a.lng,a.lat)),a=ImageCache_1.default.get({src:(null==(e=null==o?void 0:o.img)?void 0:e.src)||"",width:(null==(a=null==o?void 0:o.img)?void 0:a.width)||0,height:(null==(e=null==o?void 0:o.img)?void 0:e.height)||0});a?r.drawImage(a,i.x,i.y,o.img.width,o.img.height):((t=new Image(o.img.width,o.img.height)).onload=function(){var e;ImageCache_1.default.add({src:(null==(e=null==o?void 0:o.img)?void 0:e.src)||"",width:(null==(e=null==o?void 0:o.img)?void 0:e.width)||0,height:(null==(e=null==o?void 0:o.img)?void 0:e.height)||0},t),r.drawImage(t,i.x,i.y,o.img.width,o.img.height)},t.src=o.img.src)},i.drawRegularPolygon=function(e){var t=e.ctx,r=e.style,o=e.coordinates,e=e.map;RegularPolygonGeometry_1.default.drawRegularPolygon({ctx:t,style:r,coordinates:__assign(__assign({},r.regularPolygon),{center:o}),map:e,isScale:!1})},i.drawStart=function(e){var t=e.ctx,r=e.style,o=e.coordinates,e=e.map;StartGeometry_1.default.drawStart({ctx:t,style:r,coordinates:__assign(__assign({},r.start),{center:o}),map:e,isScale:!1})},i.drawSector=function(e){var t=e.ctx,r=e.style,o=e.coordinates,e=e.map;SectorGeometry_1.default.drawSector({ctx:t,style:r,coordinates:__assign(__assign({},r.sector),{center:o}),map:e,isScale:!1})},i.drawRect=function(e){var t=e.ctx,r=e.style,o=e.coordinates,e=e.map;RectGeometry_1.default.drawRect({ctx:t,style:r,coordinates:__assign(__assign({},r.rect),{leftTop:o}),map:e,isScale:!1})},i.drawRadiusRect=function(e){var t=e.ctx,r=e.style,o=e.coordinates,e=e.map;RadiusRectGeometry_1.default.drawRadiusRect({ctx:t,style:r,coordinates:__assign(__assign({},r.radiusRect),{leftTop:o}),map:e,isScale:!1})},i.drawLeaf=function(e){var t=e.ctx,r=e.style,o=e.coordinates,e=e.map;LeafGeometry_1.default.drawLeaf({ctx:t,style:r,coordinates:__assign(__assign({},r.leaf),{center:o}),map:e,isScale:!1})},i.drawPoint=function(e){var t=e.ctx,r=e.style,o=e.coordinates,e=e.map,r=__assign(__assign(__assign({},GeometryStyle_1.default),{radius:5,pointType:"circle"}),r||{});i.drawMapping.get(null==r?void 0:r.pointType)({ctx:t,style:r,coordinates:o,map:e})},i.prototype.draw=function(e,t){i.drawPoint({ctx:e,style:t,coordinates:this.coordinates,map:this.getMap()})},i.isPixelInGeometry=function(e){var t=e.coordinates,r=e.map,o=e.pixel,e=e.style;return i.isPixelInGeometryMapping.get(null==e?void 0:e.pointType)({coordinates:i.pointTypeToCoordinatesMapping.get(null==e?void 0:e.pointType)(t,e),isScale:!1,map:r,style:e,pixel:o})},i.prototype.isPixelInGeometry=function(e,t){return i.isPixelInGeometry({coordinates:this.coordinates,pixel:e,map:this.getMap(),style:t})},i.drawMapping=new Map([["circle",i.drawCirclePoint],["image",i.drawImagePoint],["regularPolygon",i.drawRegularPolygon],["start",i.drawStart],["sector",i.drawSector],["rect",i.drawRect],["radiusRect",i.drawRadiusRect],["leaf",i.drawLeaf]]),i.isPixelInGeometryMapping=new Map([["circle",CircleGeometry_1.default.isPixelInGeometry],["image",RectGeometry_1.default.isPixelInGeometry],["regularPolygon",RegularPolygonGeometry_1.default.isPixelInGeometry],["start",StartGeometry_1.default.isPixelInGeometry],["sector",SectorGeometry_1.default.isPixelInGeometry],["rect",RectGeometry_1.default.isPixelInGeometry],["radiusRect",RadiusRectGeometry_1.default.isPixelInGeometry],["leaf",LeafGeometry_1.default.isPixelInGeometry]]),i.centerCoordinateMapping=new Map([["circle",function(e){var t=e.ctx,r=e.coordinates,o=e.map,a=e.style,e=e.isScale;return CircleGeometry_1.default.getCenterCoordinate({ctx:t,map:o,style:a,isScale:e,coordinates:{center:r,radius:a.radius}})}],["image",function(e){var t=e.ctx,r=e.coordinates,o=e.map,a=e.style,e=e.isScale;return RectGeometry_1.default.getCenterCoordinate({ctx:t,map:o,style:a,isScale:e,coordinates:__assign({leftTop:r},a.img)})}],["regularPolygon",function(e){var t=e.ctx,r=e.coordinates,o=e.map,a=e.style,e=e.isScale;return RegularPolygonGeometry_1.default.getCenterCoordinate({ctx:t,map:o,style:a,isScale:e,coordinates:__assign({center:r},a.regularPolygon)})}],["start",function(e){var t=e.ctx,r=e.coordinates,o=e.map,a=e.style,e=e.isScale;return StartGeometry_1.default.getCenterCoordinate({ctx:t,map:o,style:a,isScale:e,coordinates:__assign({center:r},a.start)})}],["sector",function(e){var t=e.ctx,r=e.coordinates,o=e.map,a=e.style,e=e.isScale;return SectorGeometry_1.default.getCenterCoordinate({ctx:t,map:o,style:a,isScale:e,coordinates:__assign({center:r},a.sector)})}],["rect",function(e){var t=e.ctx,r=e.coordinates,o=e.map,a=e.style,e=e.isScale;return RectGeometry_1.default.getCenterCoordinate({ctx:t,map:o,style:a,isScale:e,coordinates:__assign({leftTop:r},a.rect)})}],["radiusRect",function(e){var t=e.ctx,r=e.coordinates,o=e.map,a=e.style,e=e.isScale;return RadiusRectGeometry_1.default.getCenterCoordinate({ctx:t,map:o,style:a,isScale:e,coordinates:__assign({leftTop:r},a.radiusRect)})}],["leaf",function(e){var t=e.ctx,r=e.coordinates,o=e.map,a=e.style,e=e.isScale;return LeafGeometry_1.default.getCenterCoordinate({ctx:t,map:o,style:a,isScale:e,coordinates:__assign({center:r},a.leaf)})}]]),i.pointTypeToCoordinatesMapping=new Map([["circle",function(e,t){return{center:e,radius:t.radius}}],["image",function(e,t){return{leftTop:e,width:t.img.width,height:t.img.height}}],["regularPolygon",function(e,t){return __assign({center:e},t.regularPolygon)}],["start",function(e,t){return __assign({center:e},t.start)}],["sector",function(e,t){return __assign({center:e},t.sector)}],["rect",function(e,t){return __assign({leftTop:e},t.rect)}],["radiusRect",function(e,t){return __assign({leftTop:e},t.radiusRect)}],["leaf",function(e,t){return __assign({center:e},t.leaf)}]]),i}(Geometry_1.default);exports.default=PointGeometry;
//# sourceMappingURL=PointGeometry.js.map
