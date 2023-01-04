var __extends=this&&this.__extends||function(){var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)};return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var r in e=arguments[o])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};import Util from"../../util";import GeometryStyle from"../style/GeometryStyle";import{GeometryType,VectorActions}from"../types";import Geometry from"./Geometry";var LeafGeometry=function(o){function s(t){var e=o.call(this)||this;return e.coordinates=t,e}return __extends(s,o),s.prototype.setCoordinates=function(t){this.coordinates=t,null!=(t=null==(t=null==this?void 0:this.getLayer())?void 0:t.getEmitter())&&t.trigger(VectorActions.UPDATE)},s.prototype.getCoordinates=function(){return __assign({},this.coordinates)},s.prototype.getType=function(){return GeometryType.Leaf},s.getCenterCoordinate=function(t){t.ctx;var e=t.coordinates,o=t.map,t=(t.style,t.isScale,o.pointToPixel(new BMap.Point(e.center.lng,e.center.lat)));return __assign({},t)},s.prototype.getCenterCoordinate=function(t){var e=t.ctx,o=t.style,t=t.isScale;return s.getCenterCoordinate({coordinates:this.coordinates,ctx:e,map:this.getMap(),style:o,isScale:t})},s.drawLeaf=function(t){for(var e=t.ctx,o=t.style,n=t.coordinates,r=t.map,t=t.isScale,o=(e.save(),__assign(__assign({},GeometryStyle),o||{})),i=(e.beginPath(),e.lineWidth=o.lineWidth,e.lineJoin=o.lineJoin,e.lineCap=o.lineCap,e.setLineDash(o.lineDash),e.lineDashOffset=o.lineDashOffset,e.strokeStyle=o.strokeStyle,e.fillStyle=o.fillStyle,n.n),o=n.center,s=n.size,n=n.length,a=s,l=n,c=(t&&(a=(t=Util.getScale(r))*s,l=t*n),r.pointToPixel(new BMap.Point(o.lng,o.lat))),p=(e.moveTo(c.x,c.y+a),2*Math.PI/i),y=1;y<i+1;y++){var f=Math.sin((y-1)*p)*l+c.x,u=Math.cos((y-1)*p)*l+c.y,h=Math.sin(y*p)*l+c.x,d=Math.cos(y*p)*l+c.y,m=Math.sin(y*p)*a+c.x,g=Math.cos(y*p)*a+c.y;e.bezierCurveTo(f,u,h,d,m,g)}e.closePath(),e.stroke(),e.fill(),e.restore()},s.prototype.draw=function(t,e){s.drawLeaf({ctx:t,style:e,coordinates:this.coordinates,map:this.getMap(),isScale:!0})},s.isPixelInGeometry=function(t){var e=t.coordinates,o=t.map,n=t.pixel,r=t.style,t=t.isScale,i=document.createElement("canvas").getContext("2d");return!!i&&(s.drawLeaf({ctx:i,coordinates:e,style:r,map:o,isScale:t}),i.isPointInPath(n.x,n.y))},s.prototype.isPixelInGeometry=function(t,e){return s.isPixelInGeometry({coordinates:this.coordinates,map:this.getMap(),style:e,isScale:!0,pixel:t})},s}(Geometry);export default LeafGeometry;
//# sourceMappingURL=LeafGeometry.js.map
