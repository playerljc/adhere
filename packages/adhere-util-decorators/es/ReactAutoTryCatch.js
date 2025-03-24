export default function(n){return function(t,l,e){let r=e.value;return e.value=function(){let t=null;try{t=r.apply(this,Array.prototype.slice.call(arguments))}catch(t){n&&n.call(this,t)}return t},e}}
//# sourceMappingURL=ReactAutoTryCatch.js.map
