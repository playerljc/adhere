export default function(l){var n=new MutationObserver(function(e){var t,e=e.filter(function(e){return"childList"===e.type&&"colgroup"===e.target.tagName.toLowerCase()});e.length&&(t=l.getTableColumns(),e.length-1===t.length)&&(null!=(e=null==n?void 0:n.disconnect)&&e.call(n),null!=(t=null==l?void 0:l.forceUpdate))&&t.call(l)});return n.observe(l.tableWrapRef.current,{attributes:!1,childList:!0,subtree:!0}),n}
//# sourceMappingURL=SearchTableResizableObserver.js.map
