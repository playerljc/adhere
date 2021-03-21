import Preferences from"@baifendian/adhere-util-preferences";var eventListenerHandlers=new Map,SPECIAL_SYMBOL="__",PATH_SYMBOLS=[SPECIAL_SYMBOL+"parentName"+SPECIAL_SYMBOL,SPECIAL_SYMBOL+"parent"+SPECIAL_SYMBOL];export default{isEmpty:function(t){return null===t||""===t||void 0===t},isNumber:function(t){return!this.isObject(t)&&!this.isArray(t)&&!this.isFunction(t)&&"number"==typeof t},isBoolean:function(t){return"boolean"===(typeof t).toLowerCase()},isString:function(t){return"string"===(typeof t).toLowerCase()},isSymbol:function(t){return"symbol"===(typeof t).toLowerCase()},isPrimitive:function(t){return this.isBoolean(t)||this.isNumber(t)||this.isString(t)||this.isSymbol(t)},isArray:function(t){return Array.isArray(t)},isFunction:function(t){return t instanceof Function},isObject:function(t){return t instanceof Object&&!Array.isArray(t)&&!(t instanceof Function)},isRef:function(t){return this.isArray(t)||this.isObject(t)},chainCallAssignment:function(t){var e=t.obj,n=t.chainStr,r=t.value;if(!this.isObject(e)||!this.isString(n)||this.isEmpty(n)||this.isEmpty(e))return!1;for(var o=n.split("."),i=e,a=0;a<o.length;a++){var s=o[a];a<o.length-1?i=i[s]:i[s]=r}},getObjectByChainStr:function(t){var e=t.obj,t=t.chainStr;if(!this.isObject(e)||!this.isString(t)||this.isEmpty(t)||this.isEmpty(e))return e;for(var n=t.split("."),r=e,o=0;o<n.length;o++)r=r[n[o]];return r},toCamelCase:function(t,e){void 0===e&&(e=!1);t=t.split("-").map(function(t){return t.charAt(0).toUpperCase()+t.substring(1)}).join("");return e?t:""+t.charAt(0).toLowerCase()+t.substring(1)},isKebabCase:function(t){return/^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/.test(t)},isPascalCase:function(t){return/^[A-Z][a-z]+(?:[A-Z][a-z]+)*$/.test(t)},pascalCaseToKebabCase:function(t){t=t.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2");return(t.startsWith("-")?t.substring(1):t).toLowerCase()},execExpression:function(context,expressionStr,data){var argv=[data],parameters=["context"],p;for(p in context)argv.push(context[p]),parameters.push(p);return eval("\n    const fun = new Function(\n      `"+parameters.join(",")+'`,\n      `return eval("with(context){'+expressionStr+'}")`,\n    );\n  \n    fun.apply(window, argv);\n  ')},toPoint:function(t){return t.replace("%","")/100},toPercent:function(t){t=Number(100*t).toFixed(1);return t+="%"},getCookie:function(t){void 0===t&&(t="lang");for(var e=document.cookie.split(";"),n="",r=0;r<e.length;r++){var o=e[r].split("=");if(o[0].trim()===t){n=o[1];break}}return n},noop:function(){return function(){}},rgb:function(){return"("+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+")"},color16:function(){var t=Math.floor(256*Math.random()),e=Math.floor(256*Math.random()),n=Math.floor(256*Math.random());return"#"+t.toString(16)+e.toString(16)+n.toString(16)},generatorRandom:function(t,e){e=e-t+1;return Math.floor(Math.random()*e+t)},uuid:function(){for(var t=[],e="0123456789abcdef",n=0;n<36;n++)t[n]=e.substr(Math.floor(16*Math.random()),1);return t[14]="4",t[19]=e.substr(3&t[19]|8,1),t[8]=t[13]=t[18]=t[23]="-",t.join("")},getPropertyVisitPathStr:function(t,e){var n=this.isArray(t)?[]:[e];t[PATH_SYMBOLS[0]]&&n.push(t[PATH_SYMBOLS[0]]);for(var r=t[PATH_SYMBOLS[1]];r;)r[PATH_SYMBOLS[0]]&&n.push(r[PATH_SYMBOLS[0]]),r=r[PATH_SYMBOLS[1]];n.reverse();for(var o=[],i=0;i<n.length;i++){var a=n[i];a.startsWith("[")&&a.endsWith("]")?o[o.length-1]=""+o[o.length-1]+a:o.push(a)}return o.join(".")},convertBase64UrlToBlob:function(t){for(var e=window.atob(t.split(",")[1]),t=new ArrayBuffer(e.length),n=new Uint8Array(t),r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return new Blob([t],{type:"image/png"})},isTextNode:function(t){return t.nodeType===Node.TEXT_NODE},isCommentNode:function(t){return t.nodeType===Node.COMMENT_NODE},isElementNode:function(t){return t.nodeType===Node.ELEMENT_NODE},createElement:function(t){var e=document.createElement("div");return e.innerHTML=t,e.firstElementChild},getTopDom:function(t,e){if(!t||!e)return null;if(-1!==t.className.indexOf(e))return t;for(var n=t;(n=n.parentNode)&&-1===n.className.indexOf(e)&&n!==document.body;);return!n||n===document.body?null:n},on:function(t,e,n,r,o){var i;void 0===o&&(o=!1);var a=eventListenerHandlers.get(t);a||((s={})[e]=((i={})[n]=[],i),eventListenerHandlers.set(t,a=s));var s=a[e];s||((f={})[n]=[],a[e]=s=f);var f=s[n];f||(s[n]=f=[]),f.push(r),t.addEventListener(n,r,o)},off:function(n,t,e,r){var o,i;if(t&&e&&r)(i=eventListenerHandlers.get(n))&&i[t]&&i[t][e]&&(-1!==(o=i[t][e].indexOf(r))&&i[t][e].splice(o,1),n.removeEventListener(e,r));else if(t&&e&&!r)(i=eventListenerHandlers.get(n))&&i[t]&&i[t][e]&&(i[t][e].forEach(function(t){n.removeEventListener(e,t)}),i[t][e]=[]);else if(t&&!e&&!r)if((i=eventListenerHandlers.get(n))&&i[t])for(var a in i[t])!function(e){i[t][e].forEach(function(t){n.removeEventListener(e,t)}),i[t][e]=[]}(a)},addClass:function(t,e){for(var n=(e=void 0===e?"":e).split(" "),r=0;r<n.length;r++)t.classList.add(n[r])},removeClass:function(t,e){for(var n=(e=void 0===e?"":e).split(" "),r=0;r<n.length;r++)t.classList.remove(n[r])},hasClass:function(t,e){return t.classList.contains(e)},insertAfter:function(t,e){var n=e.parentNode;n.lastChild===e?n.appendChild(t):n.insertBefore(t,e.nextSibling)},prepend:function(t,e){var n=e instanceof String?this.createElement(e):e,e=t.firstChild;t.insertBefore(n,e)},remove:function(t){t.parentNode.removeChild(t)},getParentElementByTag:function(t,e){if(!e)return null;var n,r=t,o=function(){if(!(r=r.parentElement))return null;var t=r.tagName.toLocaleLowerCase();t===e?n=r:"body"===t?n=null:o()};return o(),n},children:function(t,e){return Array.prototype.filter.call(t.children,function(t){return 1===t.nodeType}).filter(function(t){return t.classList.contains(e)})},isTouch:function(){return"ontouchend"in document},objectToDataSet:function(t,e){for(var n in t)e.dataset[n]=t[n]},dataSetToObject:function(t){var e,n={};for(e in t.dataset)n[e]=t.dataset[e];return n},getPageLeft:function(t){for(var e=t.offsetLeft,n=t.offsetParent;e+=n.offsetLeft,n=n.offsetParent;);return e},getPageTop:function(t){for(var e=t.offsetTop,n=t.offsetParent;e+=n.offsetTop,n=n.offsetParent;);return e},getPageRect:function(t){for(var e=t.offsetTop,n=t.offsetLeft,r=t.offsetParent;e+=r.offsetTop,n+=r.offsetLeft,r=r.offsetParent;);return{top:e,bottom:e+t.offsetHeight,left:n,right:n+t.offsetWidth}},isIframeEmbed:function(){return window.top&&window.top!==window},getLang:function(){var t=this.getCookie("lang")||Preferences.getStringByLocal("language");return t||(Preferences.putStringByLocal("language","zh_CN"),t="zh_CN"),t},setLang:function(t){void 0===t&&(t="zh_CN"),Preferences.putStringByLocal("language",t)},getDatePickerFormat:function(){return"zh_CN"===this.getLang()?"YYYY-MM-DD":"DD-MM-YYYY"},casUrl:function(t){var e=t.baseUrl,n=t.enterUrl,t=this.getLang();return e+"/gotoLogin?backUrl="+n+(t?"&locale="+t:"")},casLogoutUrl:function(t){var e=t.baseUrl,n=t.enterUrl,t=t.params;return e+"/logout?service="+n+(void 0===t?"":t)}};
//# sourceMappingURL=util.js.map
