"use strict";function findRecord(e,a,o){return void 0===a&&(a="id"),function e(r){for(var t,n=0;n<r.length;n++){if(r[n][a]===o){t=r[n];break}var i=r[n];if("children"in i&&Array.isArray(i.children)&&i.children.length&&(t=e(i.children)))break}return t}(e)}function findBrother(e,a,o){return void 0===a&&(a="id"),function e(r){for(var t=[],n=0;n<r.length;n++){if(r[n][a]===o){t=r;break}var i=r[n];if("children"in i&&Array.isArray(i.children)&&i.children.length&&(t=e(i.children))&&t.length)break}return t}(e)}function flatDataSource(e){var i=[];return function e(r){for(var t=0;t<r.length;t++){var n=r[t];i.push(n),"children"in n&&Array.isArray(n.children)&&n.children&&e(n.children)}}(e),i}function swap(e,r){var t=JSON.parse(JSON.stringify(e));Object.assign(e,r),Object.assign(r,t)}function isSameLevel(e){var r=e.dataSource,t=e.rowKey,n=void 0===t?"id":t,t=e.sourceId,i=e.targetId;return findBrother(r,n,t).some(function(e){return e[n]===i})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.createChildren=exports.createTreeDataChildren=exports.isSameLevel=exports.swap=exports.flatDataSource=exports.findBrother=exports.findRecord=void 0,exports.findRecord=findRecord,exports.findBrother=findBrother,exports.flatDataSource=flatDataSource,exports.swap=swap,exports.isSameLevel=isSameLevel;var createTreeDataChildren=function(e,r){return[e.props.children[0],r]},createChildren=(exports.createTreeDataChildren=createTreeDataChildren,function(e,r){var t;return((null==(t=null==e?void 0:e.props)?void 0:t.className)||"").split(/\s+/gim).includes("ant-table-cell-with-append")?(0,exports.createTreeDataChildren)(e,r):[r]});exports.createChildren=createChildren;
//# sourceMappingURL=Util.js.map
