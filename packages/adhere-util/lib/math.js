"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={toPoint:function(t){return t.replace("%","")/100},toPercent:function(t){t=Number(100*t).toFixed(1);return t+="%"},straightLineIntersection:function(t,n,e,i){var r=t.x,a=t.y,o=n.x,u=n.y,t=e.x,n=e.y,e=i.x,i=i.y;return{x:((t-e)*(o*a-r*u)-(r-o)*(e*n-t*i))/((t-e)*(a-u)-(r-o)*(n-i)),y:((n-i)*(u*r-a*o)-(a-u)*(i*t-n*e))/((n-i)*(r-o)-(a-u)*(t-e))}},getA3Point:function(t){var n=t.p1,e=t.p2,i=t.distance,r=n.x,a=n.y,t=e.x,n=e.y,e=Math.sqrt(Math.pow(t-r,2)+Math.pow(n-a,2));return{x:i/e*(t-r)+r,y:i/e*(n-a)+a}},getDistanceByBetweenPoint:function(t){var n=t.p1,e=t.p2,i=n.x,t=n.y,n=e.x,e=e.y;return Math.sqrt(Math.pow(n-i,2)+Math.pow(e-t,2))},clientToCtxPoint:function(t){var n=t.event,e=t.rect,t=n.clientX,n=n.clientY;return{x:t-e.left,y:n-e.top}},isPointInCircle:function(t,n){var e=t.x-n.center.x,t=t.y-n.center.y;return!(e*e+t*t>n.radius*n.radius)},isPointInRect:function(t,n){return t.x>=n.x&&t.x<=n.x+n.width-1&&t.y>=n.y&&t.y<=n.y+n.height-1},getCanvasTextInGemX:function(t,n,e){var i=e.leftTop.x;return(e.rightBottom.x-i-t.measureText(n).width)/2},midpoint:function(t,n){return{x:(t.x+n.x)/2,y:(t.y+n.y)/2}},slope:function(t,n,e){if(void 0===e&&(e="geographic"),t.x!==n.x){if(t.y===n.y)return 0;t=(n.y-t.y)/(n.x-t.x);return"geographic"===e?-t:t}},slopToRadian:function(t,n,e){void 0===e&&(e="geographic");var i=this.slope(t,n);if(0===i)return t.x<n.x?this.angleToRadian(0):this.angleToRadian(180);if(void 0===i)return"cartesian"===e?t.y<=n.y?this.angleToRadian(90):this.angleToRadian(-90):t.y<=n.y?this.angleToRadian(-90):this.angleToRadian(90);i=n.y-t.y,t=n.x-t.x,t=Math.atan2(i,t);return"cartesian"===e?t:-t},slopToAngle:function(t,n,e){e=this.slopToRadian(t,n,e=void 0===e?"geographic":e);return this.radianToAngle(e)},radianToAngle:function(t){return 180*t/Math.PI},angleToRadian:function(t){return t*Math.PI/180},distance:function(t,n){return t/new Map([["kilometer",1e3]]).get(n)},getCirclePoint:function(t,n,e){return{x:t.x+Math.cos(e)*n,y:t.y+Math.sin(e)*n}},getOvalPoint:function(t,n,e,i){return{x:t.x+Math.cos(i)*n,y:t.y+Math.sin(i)*e}}};
//# sourceMappingURL=math.js.map
