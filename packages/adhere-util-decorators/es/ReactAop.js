export default function(n,c){return function(t,l,e){let r=e.value;return e.value=function(){let l=null;try{let t=!0;(t=n?n.call(this):t)&&(l=r.apply(this,Array.prototype.slice.call(arguments))),c&&c.call(this)}catch(t){console.error(t)}return l},e}}
//# sourceMappingURL=ReactAop.js.map
