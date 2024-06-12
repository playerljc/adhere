import ClientDetectionUtil from"./clientDetection";var eventListenerHandlers=new Map,DomUtil={isTextNode:function(e){return e.nodeType===Node.TEXT_NODE},isCommentNode:function(e){return e.nodeType===Node.COMMENT_NODE},isElementNode:function(e){return e.nodeType===Node.ELEMENT_NODE},createElement:function(e){var t=document.createElement("div");return t.innerHTML=e,t.firstElementChild},getTopDom:function(t,e){if(!t||!e||Array.isArray(e)&&!e.length)return null;var n="string"==typeof e?[e]:e;if(n.every(function(e){return t.classList.contains(e)}))return t;for(var o=t;(o=null==o?void 0:o.parentElement)&&!n.every(function(e){var t,n;return null==(n=null==(t=null==o?void 0:o.classList)?void 0:t.contains)?void 0:n.call(t,e)})&&o!==document.body;);return!o||o===document.body?null:o},on:function(e,t,n,o,r){void 0===r&&(r=!1);var i=eventListenerHandlers.get(e),l=(i||((a={})[t]=((l={})[n]=[],l),i=a,eventListenerHandlers.set(e,i)),i[t]),a=(l||((a={})[n]=[],l=a,i[t]=l),l[n]);a||(l[n]=a=[]),a.push(o),e.addEventListener(n,o,r)},off:function(n,e,t,o){var r,i;if(e&&t&&o)(i=eventListenerHandlers.get(n))&&i[e]&&i[e][t]&&(-1!==(r=i[e][t].indexOf(o))&&i[e][t].splice(r,1),n.removeEventListener(t,o));else if(e&&t&&!o)(i=eventListenerHandlers.get(n))&&i[e]&&i[e][t]&&(i[e][t].forEach(function(e){n.removeEventListener(t,e)}),i[e][t]=[]);else if(e&&!t&&!o)if((i=eventListenerHandlers.get(n))&&i[e])for(var l in i[e])!function(t){i[e][t].forEach(function(e){n.removeEventListener(t,e)}),i[e][t]=[]}(l)},addClass:function(e,t){for(var n=(t=void 0===t?"":t).split(" "),o=0;o<n.length;o++)e.classList.add(n[o])},removeClass:function(e,t){for(var n=(t=void 0===t?"":t).split(" "),o=0;o<n.length;o++)e.classList.remove(n[o])},hasClass:function(e,t){return e.classList.contains(t)},insertAfter:function(e,t){var n=t.parentNode;n.lastChild===t?n.appendChild(e):n.insertBefore(e,t.nextSibling)},prepend:function(e,t){var t=t instanceof String?DomUtil.createElement(t):t,n=e.firstChild;e.insertBefore(t,n)},remove:function(e){e.parentNode.removeChild(e)},getParentElementByTag:function(e,t){var n,o,r;return t?(o=e,(r=function(){if(!(o=o.parentElement))return null;var e=o.tagName.toLocaleLowerCase();e===t?n=o:"body"===e?n=null:r()})(),n):null},children:function(e,t){return Array.prototype.filter.call(e.children,function(e){return 1===e.nodeType}).filter(function(e){return e.classList.contains(t)})},isTouch:function(){return"ontouchend"in document},objectToDataSet:function(e,t){for(var n in e)t.dataset[n]=e[n]},dataSetToObject:function(e){var t,n={};for(t in e.dataset)n[t]=e.dataset[t];return n},getPageLeft:function(e){for(var t=e.offsetLeft,n=e.offsetParent;t+=n.offsetLeft,n=n.offsetParent;);return t},getPageTop:function(e){for(var t=e.offsetTop,n=e.offsetParent;t+=n.offsetTop,n=n.offsetParent;);return t},getPageRect:function(e){for(var t=e.offsetTop,n=e.offsetLeft,o=e.offsetParent;t+=o.offsetTop,n+=o.offsetLeft,o=o.offsetParent;);return{top:t,bottom:t+e.offsetHeight,left:n,right:n+e.offsetWidth}},getLeftUntil:function(e){for(var t=e.el,n=e.untilEl,o=t.offsetLeft,r=t.offsetParent;n!==r;)o+=r.offsetLeft,r=r.offsetParent;return o},getTopUntil:function(e){for(var t=e.el,n=e.untilEl,o=t.offsetTop,r=t.offsetParent;n!==r;)o+=r.offsetTop,r=r.offsetParent;return o},getRectUntil:function(e){for(var t=e.el,n=e.untilEl,o=t.offsetTop,r=t.offsetLeft,i=t.offsetParent;n!==i;)o+=i.offsetTop,r+=i.offsetLeft,i=i.offsetParent;return{top:o,bottom:o+t.offsetHeight,left:r,right:r+t.offsetWidth}},isIframeEmbed:function(){return"undefined"!=typeof window&&window.top&&window.top!==window},addClickListener:function(n,t,e){var o,r,i,l,a=!1,u=!1,s=0,f=Array();return ClientDetectionUtil.isTouch()?(r=function(){u=!0},i=function(e){o=(new Date).getTime(),(a&&!u||a&&u&&o-s<=200)&&t(e)},f.push({type:"touchstart",handler:l=function(){a=!0,s=(new Date).getTime()}}),f.push({type:"touchmove",handler:r}),f.push({type:"touchend",handler:i}),n.addEventListener("touchstart",l,e||!1),n.addEventListener("touchmove",r,e||!1),n.addEventListener("touchend",i,e||!1)):(f.push({type:"click",handler:l=function(e){t(e)}}),n.addEventListener("click",l,e||!1)),function(){f.forEach(function(e){var t=e.type,e=e.handler;n.removeEventListener(t,e)})}},clickInRange:function(e){function t(e){e.stopPropagation()}function n(){e.bodyClickHandler&&e.bodyClickHandler()}return e.rootEl.addEventListener("click",t),document.body.addEventListener("click",n),function(){e.rootEl.removeEventListener("click",t),document.body.removeEventListener("click",n)}},includeHTML:function(f,c){return void 0===f&&(f="w3-include-html"),new Promise(function(a){var u="w3-include-html";function s(e,t){var n=document.querySelectorAll("[".concat(null!=f?f:u,"]"));if(n.length){for(var o=[],r=0;r<n.length;r++){var i=n[r],l=i.getAttribute(null!=f?f:u);o.push(function(o,r){return new Promise(function(t,n){var e=new XMLHttpRequest;e.onreadystatechange=function(){var e;4==this.readyState&&(200==this.status&&(o.innerHTML=this.responseText,t("")),404==this.status&&(o.innerHTML=null!=(e=null==c?void 0:c())?e:"Page not found.",n("")),o.removeAttribute(null!=f?f:u))},e.open("GET",r,!0),e.send()})}(i,l))}o.length&&Promise.all(o).then(function(){s(e,t)})}else a("")}s(f,c)})},setCursorToEnd:function(e){var t=document.createRange(),n=window.getSelection();t.selectNodeContents(e),t.collapse(!1),null!=(e=null==n?void 0:n.removeAllRanges)&&e.call(n),null!=(e=null==n?void 0:n.addRange)&&e.call(n,t)},setCursorPositionToNode:function(e,t){var n,o=document.createRange(),e=(null!=(n=null==o?void 0:o.setStart)&&n.call(o,e,t),null!=(n=null==o?void 0:o.collapse)&&n.call(o,!0),window.getSelection());null!=(t=null==e?void 0:e.removeAllRanges)&&t.call(e),null!=(n=null==e?void 0:e.addRange)&&n.call(e,o)},setCursorPosition:function(e,t){var n=document.createRange(),e=(n.setStart(e.childNodes[0],t),n.collapse(!0),window.getSelection());null!=(t=null==e?void 0:e.removeAllRanges)&&t.call(e),null!=(t=null==e?void 0:e.addRange)&&t.call(e,n)},getCurrentElementWithCursor:function(){var e,t=window.getSelection();return t&&0<(null==t?void 0:t.rangeCount)?null==(e=null==(e=null==t?void 0:t.getRangeAt)?void 0:e.call(t,0))?void 0:e.startContainer:null},getCurrentParentElementWithCursor:function(){var e=DomUtil.getCurrentElementWithCursor();return e?e.parentElement:null},getCursorIndex:function(){var e,t=window.getSelection();return t&&0<(null==t?void 0:t.rangeCount)?(null!=(t=null==(t=null==(e=null==(e=null==t?void 0:t.getRangeAt)?void 0:e.call(t,0))?void 0:e.cloneRange)?void 0:t.call(e))&&t.selectNodeContents(null==e?void 0:e.startContainer),null!=t&&t.setEnd(null==e?void 0:e.startContainer,null==e?void 0:e.startOffset),null==(e=null==(e=null==t?void 0:t.toString)?void 0:e.call(t))?void 0:e.length):-1},getCursorRectByDocument:function(){var e;if(window.getSelection){var t=window.getSelection();if(t&&0<t.rangeCount)return null==(e=null==(t=t.getRangeAt(0))?void 0:t.getBoundingClientRect)?void 0:e.call(t)}return null},getTransformValues:function(e){var e=window.getComputedStyle(e).transform.match(/^matrix\((.+)\)$/);return e?{translateX:(e=e[1].split(", ").map(parseFloat))[4],translateY:e[5],scaleX:Math.sqrt(e[0]*e[0]+e[1]*e[1]),scaleY:Math.sqrt(e[2]*e[2]+e[3]*e[3]),rotate:Math.atan2(e[1],e[0])*(180/Math.PI)}:{translateX:0,translateY:0,scaleX:1,scaleY:1,rotate:0}},getZoom:function(){var e=(e=window.devicePixelRatio)&&Math.round(100*e);return 100/Number(e)},getScrollbarWidth:function(){var e=document.createElement("div"),t=(e.style.overflow="scroll",e.style.visibility="hidden",e.style.position="absolute",e.style.top="-9999px",document.body.appendChild(e),document.createElement("div")),t=(e.appendChild(t),e.offsetWidth-t.offsetWidth);return document.body.removeChild(e),t},getMaximizedViewportSize:function(){var e=window.innerWidth,t=window.innerHeight,n=window.outerWidth,o=window.outerHeight;return{width:screen.availWidth-(n-e),height:screen.availHeight-(o-t)}}};export default DomUtil;
//# sourceMappingURL=dom.js.map
