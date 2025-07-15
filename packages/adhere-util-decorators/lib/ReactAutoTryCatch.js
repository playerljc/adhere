function AutoTryCatch(n){return function(t,e,r){var u=r.value;return r.value=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=null;try{r=u.apply(this,t)}catch(t){n&&"function"==typeof n&&n.call(this,t)}return r},r}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=AutoTryCatch;
//# sourceMappingURL=ReactAutoTryCatch.js.map
