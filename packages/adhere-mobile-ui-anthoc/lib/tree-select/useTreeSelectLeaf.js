"use strict";var __spreadArray=function(e,r,t){if(t||2===arguments.length)for(var a,n=0,l=r.length;n<l;n++)!a&&n in r||((a=a||Array.prototype.slice.call(r,0,n))[n]=r[n]);return e.concat(a||Array.prototype.slice.call(r))},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("react")),useTreeSelectLeaf=function(r){return void 0===r&&(r=[]),(0,react_1.useMemo)(function(){var e=__spreadArray([],null!=r?r:[],!0);return function t(e){(e||[]).forEach(function(e){var r;"isLeaf"in e?e.disabled=!e.isLeaf:e.disabled=!(null==(r=null==e?void 0:e.children)||!r.length),t(e.children)})}(e),e},[r])};exports.default=useTreeSelectLeaf;
//# sourceMappingURL=useTreeSelectLeaf.js.map
