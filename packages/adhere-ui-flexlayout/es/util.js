import{gridCount}from"./Fixed";var getHorizontalGridStyle=function(t){var t=t.gapOrigin,n={},t="".concat(t/2,"px");return n.paddingLeft=t,n.paddingRight=t,n},getVerticalGridStyle=function(t){var n=t.span,i=t.children,t=t.gapOrigin,r={},e="".concat(t/2,"px");return n&&(i=(i.length-1)*t,r.height="calc( (100% - ".concat(i,"px) * (").concat(n,"/").concat(gridCount,") )")),r.paddingTop=e,r.paddingBottom=e,r},getGridStyle=function(t){var n,i=t.gutter,r=t.span,e=t.children,a=void 0===e?[]:e,e=t.direction,t=void 0===e?"vertical":e;return Array.isArray(i)?1===i.length?n=i[0]:2===i.length&&(n=i[1]):n=i,null!=(i=null==(e=new Map([["horizontal",function(){return getHorizontalGridStyle({gapOrigin:n})}],["vertical",function(){return getVerticalGridStyle({span:r,children:a,gapOrigin:n})}]]).get(t))?void 0:e())?i:{}};export{getGridStyle};
//# sourceMappingURL=Util.js.map
