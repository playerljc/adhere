export default function AutoTryCatch(a){return function(t,n,r){var u=r.value;return r.value=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var r=null;try{r=u.apply(this,t)}catch(t){a&&"function"==typeof a&&a.call(this,t)}return r},r}}
//# sourceMappingURL=ReactAutoTryCatch.js.map
