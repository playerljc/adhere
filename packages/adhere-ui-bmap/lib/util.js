var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var n,e=1,o=arguments.length;e<o;e++)for(var i in n=arguments[e])Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t}).apply(this,arguments)};import MathUtil from"@baifendian/adhere-util/lib/math";export default{flyToChina:function(t){t.centerAndZoom(new BMap.Point(106.638754,34.842904),2)},fillCityBoundary:function(t,i,r){var a=[],l=[];return new Promise(function(o){(new BMap.Boundary).get(t,function(t){for(var n=0;n<t.boundaries.length;n++){var e=t.boundaries[n];e.split(";").forEach(function(t){t=t.trim().split(",");l.push(new BMap.Point(parseFloat(t[0].trim()),parseFloat(t[1].trim())))});e=new BMap.Polygon(e,__assign({},i));a.push(e),r.addOverlay(e)}o({cityOverlays:a,cityPoints:l})})})},fit:function(e,o,i){return new Promise(function(t){var n=e.getViewport(o,i||{});e.centerAndZoom(n.center,n.zoom),setTimeout(function(){t()},200)})},pixelToPoint:function(t,n){return t.pixelToPoint(n)},pointToPixel:function(t,n){return t.pointToPixel(n)},getBound:function(t){var n=t.getBounds(),t=n.getSouthWest(),n=n.getNorthEast();return{leftTopLon:t.lng,leftTopLat:n.lat,rightBottomLon:n.lng,rightBottomLat:t.lat}},getScale:function(t){var n=t.getCenter(),e=t.pointToPixel(n),o=new BMap.Point(n.lng,n.lat+.001),i=t.pointToPixel(o),e=Math.abs(i.y-e.y);return(e<=0?1:e)/t.getDistance(n,o)},getUnitPixelToM:function(t){return Math.pow(2,18-t)},getArrowPoints:function(t){var n=t.from,e=t.to,o=t.scale,i=void 0===o?1:o,r=t.width,a=void 0===r?5:r,o=t.theta,r=void 0===o?35:o,t=n.x,o=n.y,n=e.x,e=e.y,o=180*Math.atan2(o-e,t-n)/Math.PI,t=(o+r)*Math.PI/180,o=(o-r)*Math.PI/180,r=n+a*Math.cos(t),t=e+a*Math.sin(t);return{A:{x:r*i,y:t*i},B:{x:n*i,y:e*i},C:{x:(n+a*Math.cos(o))*i,y:(t=e+a*Math.sin(o))*i}}},clientToCtxPointToEl:function(t){var n=t.event,e=t.rect,o=t.offsetEl,t=window.getComputedStyle(o,null),o=t.left,t=t.top,o=parseInt(o.replace("px","")),t=parseInt(t.replace("px",""));return this.clientToCtxPoint({event:n,rect:e,offsetLeft:o,offsetTop:t})},clientToCtxPoint:function(t){var n=t.event,e=t.rect,o=t.offsetLeft,t=t.offsetTop,e=MathUtil.clientToCtxPoint({event:n,rect:e});return e.x-=o,e.y-=t,e}};
//# sourceMappingURL=util.js.map
