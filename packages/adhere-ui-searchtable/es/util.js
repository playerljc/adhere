function findRecord(r,a,c){return void 0===a&&(a="id"),function r(n){for(var e,i=0;i<n.length;i++){if(n[i][a]===c){e=n[i];break}var t=n[i];if("children"in t&&Array.isArray(t.children)&&t.children.length&&(e=r(t.children)))break}return e}(r)}function findBrother(r,a,c){return void 0===a&&(a="id"),function r(n){for(var e=[],i=0;i<n.length;i++){if(n[i][a]===c){e=n;break}var t=n[i];if("children"in t&&Array.isArray(t.children)&&t.children.length&&(e=r(t.children))&&e.length)break}return e}(r)}function flatDataSource(r){var t=[];return function r(n){for(var e=0;e<n.length;e++){var i=n[e];t.push(i),"children"in i&&Array.isArray(i.children)&&i.children&&r(i.children)}}(r),t}function swap(r,n){var e=JSON.parse(JSON.stringify(r));Object.assign(r,n),Object.assign(n,e)}function isSameLevel(r){var n=r.dataSource,e=r.rowKey,i=void 0===e?"id":e,e=r.sourceId,t=r.targetId;return findBrother(n,i,e).some(function(r){return r[i]===t})}export{findRecord,findBrother,flatDataSource,swap,isSameLevel};
//# sourceMappingURL=util.js.map
