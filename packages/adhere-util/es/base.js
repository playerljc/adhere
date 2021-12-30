var SPECIAL_SYMBOL="__",PATH_SYMBOLS=[SPECIAL_SYMBOL+"parentName"+SPECIAL_SYMBOL,SPECIAL_SYMBOL+"parent"+SPECIAL_SYMBOL];export default{isEmpty:function(t){return null===t||""===t||void 0===t},isNumber:function(t){return!this.isObject(t)&&!this.isArray(t)&&!this.isFunction(t)&&"number"==typeof t},isBoolean:function(t){return"boolean"===(typeof t).toLowerCase()},isString:function(t){return"string"===(typeof t).toLowerCase()},isSymbol:function(t){return"symbol"===(typeof t).toLowerCase()},isPrimitive:function(t){return this.isBoolean(t)||this.isNumber(t)||this.isString(t)||this.isSymbol(t)},isArray:function(t){return Array.isArray(t)},isFunction:function(t){return t instanceof Function},isObject:function(t){return t instanceof Object&&!Array.isArray(t)&&!(t instanceof Function)},isRef:function(t){return this.isArray(t)||this.isObject(t)},chainCallAssignment:function(t){var n=t.obj,r=t.chainStr,e=t.value;if(!this.isObject(n)||!this.isString(r)||this.isEmpty(r)||this.isEmpty(n))return!1;for(var i=r.split("."),o=n,s=0;s<i.length;s++){var a=i[s];s<i.length-1?o=o[a]:o[a]=e}},getObjectByChainStr:function(t){var n=t.obj,t=t.chainStr;if(!this.isObject(n)||!this.isString(t)||this.isEmpty(t)||this.isEmpty(n))return n;for(var r=t.split("."),e=n,i=0;i<r.length;i++)e=e[r[i]];return e},toCamelCase:function(t,n){void 0===n&&(n=!1);t=t.split("-").map(function(t){return t.charAt(0).toUpperCase()+t.substring(1)}).join("");return n?t:""+t.charAt(0).toLowerCase()+t.substring(1)},isKebabCase:function(t){return/^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/.test(t)},isPascalCase:function(t){return/^[A-Z][a-z]+(?:[A-Z][a-z]+)*$/.test(t)},pascalCaseToKebabCase:function(t){t=t.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2");return(t.startsWith("-")?t.substring(1):t).toLowerCase()},execExpression:function(context,expressionStr,data){var argv=[data],parameters=["context"],p;for(p in context)argv.push(context[p]),parameters.push(p);return eval("\n    const fun = new Function(\n      `"+parameters.join(",")+'`,\n      `return eval("with(context){'+expressionStr+'}")`,\n    );\n  \n    fun.apply(window, argv);\n  ')},getCookie:function(t){void 0===t&&(t="lang");for(var n=document.cookie.split(";"),r="",e=0;e<n.length;e++){var i=n[e].split("=");if(i[0].trim()===t){r=i[1];break}}return r},noop:function(){return function(){}},generatorRandom:function(t,n){n=n-t+1;return Math.floor(Math.random()*n+t)},uuid:function(){for(var t=[],n="0123456789abcdef",r=0;r<36;r++)t[r]=n.substr(Math.floor(16*Math.random()),1);return t[14]="4",t[19]=n.substr(3&t[19]|8,1),t[8]=t[13]=t[18]=t[23]="-",t.join("")},getPropertyVisitPathStr:function(t,n){var r=this.isArray(t)?[]:[n];t[PATH_SYMBOLS[0]]&&r.push(t[PATH_SYMBOLS[0]]);for(var e=t[PATH_SYMBOLS[1]];e;)e[PATH_SYMBOLS[0]]&&r.push(e[PATH_SYMBOLS[0]]),e=e[PATH_SYMBOLS[1]];r.reverse();for(var i=[],o=0;o<r.length;o++){var s=r[o];s.startsWith("[")&&s.endsWith("]")?i[i.length-1]=""+i[i.length-1]+s:i.push(s)}return i.join(".")},convertBase64UrlToBlob:function(t){for(var n=window.atob(t.split(",")[1]),t=new ArrayBuffer(n.length),r=new Uint8Array(t),e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return new Blob([t],{type:"image/png"})},omitObject:function(r){r=r||{};var e={};return Object.keys(r).forEach(function(t){var n=r[t];[null,void 0,"","undefined"].includes(n)||("string"==typeof n&&(n=n.trim()),e[t]=n)}),e}};
//# sourceMappingURL=base.js.map