import"core-js/modules/es.array.filter.js";import"core-js/modules/es.object.to-string.js";export default function(l){var o=new MutationObserver(function(e){var t=e.filter(function(e){return"childList"===e.type&&"colgroup"===(null===(e=null===(e=e.target)||void 0===e?void 0:e.tagName)||void 0===e?void 0:e.toLowerCase())});t.length&&(e=l.getTableColumns(),t.length-1===e.length&&(null!==(e=null==o?void 0:o.disconnect)&&void 0!==e&&e.call(o),null!==(e=null==l?void 0:l.forceUpdate)&&void 0!==e&&e.call(l)))});return o.observe(l.tableWrapRef.current,{attributes:!1,childList:!0,subtree:!0}),o}
//# sourceMappingURL=SearchTableResizableObserver.js.map
