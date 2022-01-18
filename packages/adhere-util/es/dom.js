import ClientDetectionUtil from"./clientDetection";var eventListenerHandlers=new Map;export default{isTextNode:function(e){return e.nodeType===Node.TEXT_NODE},isCommentNode:function(e){return e.nodeType===Node.COMMENT_NODE},isElementNode:function(e){return e.nodeType===Node.ELEMENT_NODE},createElement:function(e){var t=document.createElement("div");return t.innerHTML=e,t.firstElementChild},getTopDom:function(e,t){if(!e||!t)return null;if(-1!==e.className.indexOf(t))return e;for(var n=e;(n=n.parentNode)&&-1===n.className.indexOf(t)&&n!==document.body;);return!n||n===document.body?null:n},on:function(e,t,n,o,r){var f;void 0===r&&(r=!1);var i=eventListenerHandlers.get(e);i||((f={})[t]=((a={})[n]=[],a),i=f,eventListenerHandlers.set(e,i));var a=i[t];a||((f={})[n]=[],a=f,i[t]=a);t=a[n];t||(a[n]=t=[]),t.push(o),e.addEventListener(n,o,r)},off:function(n,e,t,o){var r,f;if(e&&t&&o)(f=eventListenerHandlers.get(n))&&f[e]&&f[e][t]&&(-1!==(r=f[e][t].indexOf(o))&&f[e][t].splice(r,1),n.removeEventListener(t,o));else if(e&&t&&!o)(f=eventListenerHandlers.get(n))&&f[e]&&f[e][t]&&(f[e][t].forEach(function(e){n.removeEventListener(t,e)}),f[e][t]=[]);else if(e&&!t&&!o)if((f=eventListenerHandlers.get(n))&&f[e])for(var i in f[e])!function(t){f[e][t].forEach(function(e){n.removeEventListener(t,e)}),f[e][t]=[]}(i)},addClass:function(e,t){for(var n=(t=void 0===t?"":t).split(" "),o=0;o<n.length;o++)e.classList.add(n[o])},removeClass:function(e,t){for(var n=(t=void 0===t?"":t).split(" "),o=0;o<n.length;o++)e.classList.remove(n[o])},hasClass:function(e,t){return e.classList.contains(t)},insertAfter:function(e,t){var n=t.parentNode;n.lastChild===t?n.appendChild(e):n.insertBefore(e,t.nextSibling)},prepend:function(e,t){var n=t instanceof String?this.createElement(t):t,t=e.firstChild;e.insertBefore(n,t)},remove:function(e){e.parentNode.removeChild(e)},getParentElementByTag:function(e,t){if(!t)return null;function n(){var e;(r=r.parentElement)&&((e=r.tagName.toLocaleLowerCase())===t?o=r:"body"===e?o=null:n())}var o,r=e;return n(),o},children:function(e,t){return Array.prototype.filter.call(e.children,function(e){return 1===e.nodeType}).filter(function(e){return e.classList.contains(t)})},isTouch:function(){return"ontouchend"in document},objectToDataSet:function(e,t){for(var n in e)t.dataset[n]=e[n]},dataSetToObject:function(e){var t,n={};for(t in e.dataset)n[t]=e.dataset[t];return n},getPageLeft:function(e){for(var t=e.offsetLeft,n=e.offsetParent;t+=n.offsetLeft,n=n.offsetParent;);return t},getPageTop:function(e){for(var t=e.offsetTop,n=e.offsetParent;t+=n.offsetTop,n=n.offsetParent;);return t},getPageRect:function(e){for(var t=e.offsetTop,n=e.offsetLeft,o=e.offsetParent;t+=o.offsetTop,n+=o.offsetLeft,o=o.offsetParent;);return{top:t,bottom:t+e.offsetHeight,left:n,right:n+e.offsetWidth}},getLeftUntil:function(e){for(var t=e.el,n=e.untilEl,o=t.offsetLeft,r=t.offsetParent;n!==r;)o+=r.offsetLeft,r=r.offsetParent;return o},getTopUntil:function(e){for(var t=e.el,n=e.untilEl,o=t.offsetTop,r=t.offsetParent;n!==r;)o+=r.offsetTop,r=r.offsetParent;return o},getRectUntil:function(e){for(var t=e.el,n=e.untilEl,o=t.offsetTop,r=t.offsetLeft,f=t.offsetParent;n!==f;)o+=f.offsetTop,r+=f.offsetLeft,f=f.offsetParent;return{top:o,bottom:o+t.offsetHeight,left:r,right:r+t.offsetWidth}},isIframeEmbed:function(){return"undefined"!=typeof window&&(window.top&&window.top!==window)},addClickListener:function(n,t,e){var o,r,f,i,a=!1,s=!1,u=0,c=Array();return ClientDetectionUtil.isTouch()?(f=function(){s=!0},i=function(e){o=(new Date).getTime(),(a&&!s||a&&s&&o-u<=200)&&t(e)},c.push({type:"touchstart",handler:r=function(){a=!0,u=(new Date).getTime()}}),c.push({type:"touchmove",handler:f}),c.push({type:"touchend",handler:i}),n.addEventListener("touchstart",r,e||!1),n.addEventListener("touchmove",f,e||!1),n.addEventListener("touchend",i,e||!1)):(c.push({type:"click",handler:i=function(e){t(e)}}),n.addEventListener("click",i,e||!1)),function(){c.forEach(function(e){var t=e.type,e=e.handler;n.removeEventListener(t,e)})}}};
//# sourceMappingURL=dom.js.map
