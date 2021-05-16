export default{toPoint:function(t){return t.replace("%","")/100},toPercent:function(t){t=Number(100*t).toFixed(1);return t+="%"},straightLineIntersection:function(t,e,n,r){var o=t.x,i=t.y,u=e.x,x=e.y,t=n.x,e=n.y,n=r.x,r=r.y;return{x:((t-n)*(u*i-o*x)-(o-u)*(n*e-t*r))/((t-n)*(i-x)-(o-u)*(e-r)),y:((e-r)*(x*o-i*u)-(i-x)*(r*t-e*n))/((e-r)*(o-u)-(i-x)*(t-n))}}};
//# sourceMappingURL=math.js.map
