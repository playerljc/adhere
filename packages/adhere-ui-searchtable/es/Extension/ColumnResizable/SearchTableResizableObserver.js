import"core-js/modules/es.array.filter.js";import"core-js/modules/es.object.to-string.js";export default function(r){var l=new MutationObserver(function(e){var t,e=e.filter(function(e){return"childList"===e.type&&"colgroup"===e.target.tagName.toLowerCase()});e.length&&(t=r.getTableColumns(),e.length-1===t.length&&(null!=(e=null==l?void 0:l.disconnect)&&e.call(l),null!=(t=null==r?void 0:r.forceUpdate)&&t.call(r)))});return l.observe(r.tableWrapRef.current,{attributes:!1,childList:!0,subtree:!0}),l}
//# sourceMappingURL=SearchTableResizableObserver.js.map
