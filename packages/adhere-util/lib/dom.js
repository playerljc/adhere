import ClientDetectionUtil from"./clientDetection";var eventListenerHandlers=new Map,DomUtil={isTextNode:function(e){return e.nodeType===Node.TEXT_NODE},isCommentNode:function(e){return e.nodeType===Node.COMMENT_NODE},isElementNode:function(e){return e.nodeType===Node.ELEMENT_NODE},createElement:function(e){var t=document.createElement("div");return t.innerHTML=e,t.firstElementChild},getTopDom:function(e,t){if(!e||!t)return null;if(-1!==e.className.indexOf(t))return e;for(var n=e;(n=n.parentNode)&&-1===n.className.indexOf(t)&&n!==document.body;);return!n||n===document.body?null:n},on:function(e,t,n,o,r){void 0===r&&(r=!1);var l=eventListenerHandlers.get(e),i=(l||((u={})[t]=((i={})[n]=[],i),l=u,eventListenerHandlers.set(e,l)),l[t]),u=(i||((u={})[n]=[],i=u,l[t]=i),i[n]);u||(i[n]=u=[]),u.push(o),e.addEventListener(n,o,r)},off:function(n,e,t,o){var r,l;if(e&&t&&o)(l=eventListenerHandlers.get(n))&&l[e]&&l[e][t]&&(-1!==(r=l[e][t].indexOf(o))&&l[e][t].splice(r,1),n.removeEventListener(t,o));else if(e&&t&&!o)(l=eventListenerHandlers.get(n))&&l[e]&&l[e][t]&&(l[e][t].forEach(function(e){n.removeEventListener(t,e)}),l[e][t]=[]);else if(e&&!t&&!o)if((l=eventListenerHandlers.get(n))&&l[e])for(var i in l[e])!function(t){l[e][t].forEach(function(e){n.removeEventListener(t,e)}),l[e][t]=[]}(i)},addClass:function(e,t){for(var n=(t=void 0===t?"":t).split(" "),o=0;o<n.length;o++)e.classList.add(n[o])},removeClass:function(e,t){for(var n=(t=void 0===t?"":t).split(" "),o=0;o<n.length;o++)e.classList.remove(n[o])},hasClass:function(e,t){return e.classList.contains(t)},insertAfter:function(e,t){var n=t.parentNode;n.lastChild===t?n.appendChild(e):n.insertBefore(e,t.nextSibling)},prepend:function(e,t){var t=t instanceof String?DomUtil.createElement(t):t,n=e.firstChild;e.insertBefore(t,n)},remove:function(e){e.parentNode.removeChild(e)},getParentElementByTag:function(e,t){var n,o,r;return t?(o=e,(r=function(){if(!(o=o.parentElement))return null;var e=o.tagName.toLocaleLowerCase();e===t?n=o:"body"===e?n=null:r()})(),n):null},children:function(e,t){return Array.prototype.filter.call(e.children,function(e){return 1===e.nodeType}).filter(function(e){return e.classList.contains(t)})},isTouch:function(){return"ontouchend"in document},objectToDataSet:function(e,t){for(var n in e)t.dataset[n]=e[n]},dataSetToObject:function(e){var t,n={};for(t in e.dataset)n[t]=e.dataset[t];return n},getPageLeft:function(e){for(var t=e.offsetLeft,n=e.offsetParent;t+=n.offsetLeft,n=n.offsetParent;);return t},getPageTop:function(e){for(var t=e.offsetTop,n=e.offsetParent;t+=n.offsetTop,n=n.offsetParent;);return t},getPageRect:function(e){for(var t=e.offsetTop,n=e.offsetLeft,o=e.offsetParent;t+=o.offsetTop,n+=o.offsetLeft,o=o.offsetParent;);return{top:t,bottom:t+e.offsetHeight,left:n,right:n+e.offsetWidth}},getLeftUntil:function(e){for(var t=e.el,n=e.untilEl,o=t.offsetLeft,r=t.offsetParent;n!==r;)o+=r.offsetLeft,r=r.offsetParent;return o},getTopUntil:function(e){for(var t=e.el,n=e.untilEl,o=t.offsetTop,r=t.offsetParent;n!==r;)o+=r.offsetTop,r=r.offsetParent;return o},getRectUntil:function(e){for(var t=e.el,n=e.untilEl,o=t.offsetTop,r=t.offsetLeft,l=t.offsetParent;n!==l;)o+=l.offsetTop,r+=l.offsetLeft,l=l.offsetParent;return{top:o,bottom:o+t.offsetHeight,left:r,right:r+t.offsetWidth}},isIframeEmbed:function(){return"undefined"!=typeof window&&window.top&&window.top!==window},addClickListener:function(n,t,e){var o,r,l,i,u=!1,a=!1,f=0,s=Array();return ClientDetectionUtil.isTouch()?(r=function(){a=!0},l=function(e){o=(new Date).getTime(),(u&&!a||u&&a&&o-f<=200)&&t(e)},s.push({type:"touchstart",handler:i=function(){u=!0,f=(new Date).getTime()}}),s.push({type:"touchmove",handler:r}),s.push({type:"touchend",handler:l}),n.addEventListener("touchstart",i,e||!1),n.addEventListener("touchmove",r,e||!1),n.addEventListener("touchend",l,e||!1)):(s.push({type:"click",handler:i=function(e){t(e)}}),n.addEventListener("click",i,e||!1)),function(){s.forEach(function(e){var t=e.type,e=e.handler;n.removeEventListener(t,e)})}},clickInRange:function(e){function t(e){e.stopPropagation()}function n(){e.bodyClickHandler&&e.bodyClickHandler()}return e.rootEl.addEventListener("click",t),document.body.addEventListener("click",n),function(){e.rootEl.removeEventListener("click",t),document.body.removeEventListener("click",n)}},includeHTML:function(s,c){return void 0===s&&(s="w3-include-html"),new Promise(function(u){var a="w3-include-html";function f(e,t){var n=document.querySelectorAll("[".concat(null!=s?s:a,"]"));if(n.length){for(var o=[],r=0;r<n.length;r++){var l=n[r],i=l.getAttribute(null!=s?s:a);o.push(function(o,r){return new Promise(function(t,n){var e=new XMLHttpRequest;e.onreadystatechange=function(){var e;4==this.readyState&&(200==this.status&&(o.innerHTML=this.responseText,t()),404==this.status&&(o.innerHTML=null!=(e=null==c?void 0:c())?e:"Page not found.",n()),o.removeAttribute(null!=s?s:a))},e.open("GET",r,!0),e.send()})}(l,i))}o.length&&Promise.all(o).then(function(){f(e,t)})}else u()}f(s,c)})},setCursorToEnd:function(e){var t=document.createRange(),n=window.getSelection();t.selectNodeContents(e),t.collapse(!1),null!=(e=null==n?void 0:n.removeAllRanges)&&e.call(n),null!=(e=null==n?void 0:n.addRange)&&e.call(n,t)},setCursorPositionToNode:function(e,t){var n,o=document.createRange(),e=(null!=(n=null==o?void 0:o.setStart)&&n.call(o,e,t),null!=(n=null==o?void 0:o.collapse)&&n.call(o,!0),window.getSelection());null!=(t=null==e?void 0:e.removeAllRanges)&&t.call(e),null!=(n=null==e?void 0:e.addRange)&&n.call(e,o)},setCursorPosition:function(e,t){var n=document.createRange(),e=(n.setStart(e.childNodes[0],t),n.collapse(!0),window.getSelection());null!=(t=null==e?void 0:e.removeAllRanges)&&t.call(e),null!=(t=null==e?void 0:e.addRange)&&t.call(e,n)},getCurrentElementWithCursor:function(){var e,t=window.getSelection();return t&&0<(null==t?void 0:t.rangeCount)?null==(e=null==(e=null==t?void 0:t.getRangeAt)?void 0:e.call(t,0))?void 0:e.startContainer:null},getCurrentParentElementWithCursor:function(){var e=DomUtil.getCurrentElementWithCursor();return e?e.parentElement:null},getCursorIndex:function(){var e,t=window.getSelection();return t&&0<(null==t?void 0:t.rangeCount)?(null!=(t=null==(t=null==(e=null==(e=null==t?void 0:t.getRangeAt)?void 0:e.call(t,0))?void 0:e.cloneRange)?void 0:t.call(e))&&t.selectNodeContents(null==e?void 0:e.startContainer),null!=t&&t.setEnd(null==e?void 0:e.startContainer,null==e?void 0:e.startOffset),null==(e=null==(e=null==t?void 0:t.toString)?void 0:e.call(t))?void 0:e.length):-1},getCursorRectByDocument:function(){var e;if(window.getSelection){var t=window.getSelection();if(t&&0<t.rangeCount)return null==(e=null==(t=t.getRangeAt(0))?void 0:t.getBoundingClientRect)?void 0:e.call(t)}return null}};export default DomUtil;
//# sourceMappingURL=dom.js.map
