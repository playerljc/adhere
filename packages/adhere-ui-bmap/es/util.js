var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var n,e=1,o=arguments.length;e<o;e++)for(var i in n=arguments[e])Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t}).apply(this,arguments)};import Util from"@baifendian/adhere-util";export default{flyToChina:function(t){t.centerAndZoom(new BMap.Point(106.638754,34.842904),2)},fillCityBoundary:function(t,i,r){var a=[],l=[];return new Promise(function(o){(new BMap.Boundary).get(t,function(t){for(var n=0;n<t.boundaries.length;n++){var e=t.boundaries[n],e=(e.split(";").forEach(function(t){t=t.trim().split(",");l.push(new BMap.Point(parseFloat(t[0].trim()),parseFloat(t[1].trim())))}),new BMap.Polygon(e,__assign({},i)));a.push(e),r.addOverlay(e)}o({cityOverlays:a,cityPoints:l})})})},fit:function(e,o,i){return new Promise(function(t){var n=e.getViewport(o,i||{});e.centerAndZoom(n.center,n.zoom),setTimeout(function(){t()},200)})},pixelToPoint:function(t,n){return t.pixelToPoint(n)},pointToPixel:function(t,n){return t.pointToPixel(n)},getBound:function(t){var t=t.getBounds(),n=t.getSouthWest(),t=t.getNorthEast();return{leftTopLon:n.lng,leftTopLat:t.lat,rightBottomLon:t.lng,rightBottomLat:n.lat}},getScale:function(t){var n=t.getCenter(),e=t.pointToPixel(n),o=new BMap.Point(n.lng,n.lat+.001),i=t.pointToPixel(o),i=Math.abs(i.y-e.y);return(i<=0?1:i)/t.getDistance(n,o)},getUnitPixelToM:function(t){return Math.pow(2,18-t)},getArrowPoints:function(t){var n=t.from,e=t.to,o=t.scale,o=void 0===o?1:o,i=t.width,i=void 0===i?5:i,t=t.theta,t=void 0===t?35:t,r=n.x,n=n.y,a=e.x,e=e.y,n=180*Math.atan2(n-e,r-a)/Math.PI,r=(n+t)*Math.PI/180,n=(n-t)*Math.PI/180,t=a+i*Math.cos(r),r=e+i*Math.sin(r);return{A:{x:t*o,y:r*o},B:{x:a*o,y:e*o},C:{x:(a+i*Math.cos(n))*o,y:(e+i*Math.sin(n))*o}}},clientToCtxPointToEl:function(t){var n=t.event,e=t.rect,t=t.offsetEl,t="undefined"!=typeof window?window.getComputedStyle(t,null):{left:"0",top:"0"},o=t.left,t=t.top,o=parseInt(o.replace("px","")),t=parseInt(t.replace("px",""));return this.clientToCtxPoint({event:n,rect:e,offsetLeft:o,offsetTop:t})},clientToCtxPoint:function(t){var n=t.event,e=t.rect,o=t.offsetLeft,t=t.offsetTop,n=Util.clientToCtxPoint({event:n,rect:e});return n.x-=o,n.y-=t,n}};
//# sourceMappingURL=util.js.map
