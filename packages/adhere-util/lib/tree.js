var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(r){for(var t,e=1,n=arguments.length;e<n;e++)for(var a in t=arguments[e])Object.prototype.hasOwnProperty.call(t,a)&&(r[a]=t[a]);return r}).apply(this,arguments)},__rest=this&&this.__rest||function(r,t){var e={};for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&t.indexOf(a)<0&&(e[a]=r[a]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(r);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(r,a[n])&&(e[a[n]]=r[a[n]]);return e},__spreadArray=this&&this.__spreadArray||function(r,t,e){if(e||2===arguments.length)for(var n,a=0,i=t.length;a<i;a++)!n&&a in t||((n=n||Array.prototype.slice.call(t,0,a))[a]=t[a]);return r.concat(n||Array.prototype.slice.call(t))},TreeUtil={treeToArray:function(r,t,f){void 0===f&&(f="key");var u=t.parentIdAttr,t=t.rootParentId,d=[];return function r(t,e,n){for(var a,i=0;i<e.length;i++){var o=e[i];d.push(__assign(__assign({},o),((a={})[u]=n,a))),o.children&&Array.isArray(o.children)&&o.children.length&&r(t,o.children,o[null!=f?f:"key"])}}(d,r,t),d.map(function(r){r.children;return __rest(r,["children"])})},arrayToAntdTree:function(e,r){var n=r.keyAttr,a=r.titleAttr,i=r.parentIdAttr,r=r.rootParentId;function o(r,t){return r.filter(function(r){return r[i]==t}).map(function(r){return __assign(__assign({},r),{title:r[a],key:r[n],children:[],properties:__assign({},r)})})}r=o(e,r);return r.forEach(function(r){!function t(r){r.children=o(e,r.properties[n]),r.isLeaf="isLeaf"in r?r.isLeaf:!r.children.length,r.isLeaf&&delete r.children,(r.children||[]).forEach(function(r){t(r)})}(r)}),r},arrayToAntdTreeSelect:function(e,r){var n=r.keyAttr,a=r.titleAttr,t=r.rootParentId,i=r.parentIdAttr;function o(r,t){return r.filter(function(r){return r[i]==t}).map(function(r){return __assign(__assign({},r),{key:r[n],title:r[a],value:r[n],children:[],properties:__assign({},r)})})}r=o(e,t);return r.forEach(function(r){!function t(r){r.children=o(e,r.properties[n]),r.isLeaf="isLeaf"in r?r.isLeaf:!r.children.length,r.isLeaf&&delete r.children,(r.children||[]).forEach(function(r){t(r)})}(r)}),r},getAncestor:function(r,t,e){for(var n=[],a=t;a&&a[e.parentIdAttr]!=e.rootParentId;){var i=r.find(function(r){return r[e.keyAttr]===a[e.parentIdAttr]});i&&n.push(i),a=i}return n},getDescendants:function(r,t,n){var a=[];return function t(e){r.filter(function(r){return r[n.parentIdAttr]===e[n.keyAttr]}).forEach(function(r){a.push(r),t(r)})}(t),a},completionIncompleteFlatArr:function(e,r,n){var t=this,a=new Set;return r.forEach(function(r){r=t.getAncestor(e,r,n),r=__spreadArray([],r||[],!0).map(function(r){return r[n.keyAttr]});a=new Set(__spreadArray(__spreadArray([],Array.from(a),!0),r,!0))}),a=new Set(__spreadArray(__spreadArray([],Array.from(a),!0),r.map(function(r){return r[n.keyAttr]}),!0)),this.arrayToAntdTree(__spreadArray([],Array.from(a),!0).map(function(t){return e.find(function(r){return r[n.keyAttr]===t})}),n)},filterTreeByFlatData:function(r,t,e){e.filterAttr;var n,a=__rest(e,["filterAttr"]);return t?(n=r.filter(function(r){return-1!==r[e.filterAttr].indexOf(t)}),this.completionIncompleteFlatArr(r,n,e)):this.arrayToAntdTree(r,a)},filterTree:function(r,t,e){e.filterAttr;var n,a=__rest(e,["filterAttr"]),r=this.treeToArray(r,{parentIdAttr:e.parentIdAttr,rootParentId:e.rootParentId});return t?(n=r.filter(function(r){return-1!==r[e.filterAttr].indexOf(t)}),this.completionIncompleteFlatArr(r,n,e)):this.arrayToAntdTree(r,a)},findNodeByKey:function(r,i,o){return function r(t){for(var e,n=null,a=0;a<t.length;a++){if(t[a][o.keyAttr]===i){n=t[a];break}if("children"in t[a]&&Array.isArray(t[a].children)&&null!=(e=null==(e=t[a])?void 0:e.children)&&e.length&&(n=r(t[a].children)))break}return n}(r)},findParentNodeByKey:function(r,i,t){var o,f=t.keyAttr;return function r(t,e){for(var n=0;n<e.length;n++){var a=e[n];if(a[f]===i){o=t;break}if(r(a,null!=(a=a.children)?a:[]),o)break}}(o,r),o},transformTreeData:function(r,i,o){return function r(t){for(var e=[],n=0;n<t.length;n++){var a=t[n];a[i||"children"]=r(a[i||"children"]),e.push(o(a))}return e}(r)},getLeafNodes:function(r,t){return function r(t,e){for(var n=[],a=0;a<t.length;a++){var i=t[a];e in i&&Array.isArray(i[e])&&i[e].length?n=__spreadArray(__spreadArray([],n,!0),r(i[e],e),!0):n.push(i)}return n}((r=void 0===r?[]:r)||[],(t=void 0===t?"children":t)||"children")},getLeafNodesByIndex:function(r,t,e){return function r(t,e,n){for(var a=[],i=0;i<t.length;i++){var o=t[i];n in o&&"boolean"==typeof o[n]&&o[n]&&a.push(o),e in o&&Array.isArray(o[e])&&(a=__spreadArray(__spreadArray([],a,!0),r(o[e],e,n),!0))}return a}((r=void 0===r?[]:r)||[],(t=void 0===t?"children":t)||"children",(e=void 0===e?"isLeaf":e)||"isLeaf")},getLeafNodeByFlatData:function(r,t){var e=t.parentIdAttr,n=t.keyAttr,a=r.filter(function(r){return e in r&&r[e]}).map(function(r){return r[e]});return r.filter(function(r){return!a.includes(r[n])})},getLeafNodeByFlatDataToIndex:function(r,t){return void 0===t&&(t="isLeaf"),r.filter(function(r){return"boolean"==typeof r[t||"isLeaf"]&&r[t]})},getTreeLevel:function(r,n){void 0===n&&(n="key");for(var a,i=this.treeToArray(r=void 0===r?[]:r,{parentIdAttr:"pid",rootParentId:-1},n),o={keyAttr:n,titleAttr:n,parentIdAttr:"pid",rootParentId:-1},f=this.getLeafNodeByFlatData(i,o),u=[],t=0;t<f.length;t++)!function(r){for(var t=1,e=f[r][o.parentIdAttr];-1!==e;)e=null==(a=i.find(function(r){return r[n]===e}))?void 0:a[o.parentIdAttr],t++;u.push(t)}(t);return Math.max.apply(Math,u)},getTreeLevelByIndex:function(r,t,n){void 0===t&&(t="isLeaf"),void 0===n&&(n="key");for(var a,i={parentIdAttr:"pid",rootParentId:-1},o=this.treeToArray(r=void 0===r?[]:r,i),f=this.getLeafNodeByFlatDataToIndex(o,t),u=[],e=0;e<f.length;e++)!function(r){for(var t=1,e=f[r][i.parentIdAttr];-1!==e;)e=null==(a=o.find(function(r){return r[n]===e}))?void 0:a[i.parentIdAttr],t++;u.push(t)}(e);return Math.max.apply(Math,u)},getTreeLevelToFlat:function(n,a){for(var i,o=this.getLeafNodeByFlatData(n,a),f=[],r=0;r<o.length;r++)!function(r){for(var t=1,e=o[r][a.parentIdAttr];-1!==e;)e=null==(i=n.find(function(r){return r[a.keyAttr]===e}))?void 0:i[a.parentIdAttr],t++;f.push(t)}(r);return Math.max.apply(Math,f)},getTreeLevelByIndexToFlat:function(n,a,r){for(var i,o=this.getLeafNodeByFlatDataToIndex(n,r),f=[],t=0;t<o.length;t++)!function(r){for(var t=1,e=o[r][a.parentIdAttr];-1!==e;)e=null==(i=n.find(function(r){return r[a.keyAttr]===e}))?void 0:i[a.parentIdAttr],t++;f.push(t)}(t);return Math.max.apply(Math,f)},getNodeLevel:function(r,t,e){void 0===e&&(e="key");for(var n=-1,a=this.getTreeLevel(r,e),i=r,o=0;o<a;o++){if(i.find(function(r){return r[e]===t[e]})){n=o+1;break}i=i.map(function(r){return r.children||[]}).flat()}return n},excludeAntdTreeNodes:function(r,t,o){void 0===o&&(o="key");for(var f={parentIdAttr:"pid",rootParentId:-1},u=this.treeToArray(r,f,o),e=[],n=0;n<t.length;n++)var a=function r(t){var e=u.filter(function(r){return r[f.parentIdAttr]===t}).map(function(r){return r[o]});var n=e;for(var a=0;a<e.length;a++){var i=r(e[a]);n=__spreadArray(__spreadArray([],n,!0),i,!0)}return n}(t[n]),e=__spreadArray(__spreadArray([],e,!0),a,!0);e=__spreadArray(__spreadArray([],e,!0),t,!0);r=u.filter(function(r){return!e.includes(r[o])});return this.completionIncompleteFlatArr(u,r,{keyAttr:o,titleAttr:"title",parentIdAttr:f.parentIdAttr,rootParentId:f.rootParentId})},excludeAntdSelectTreeNodes:function(r,t,o){void 0===o&&(o="key");for(var f={parentIdAttr:"pid",rootParentId:-1},u=this.treeToArray(r,f,o),e=[],n=0;n<t.length;n++)var a=function r(t){var e=u.filter(function(r){return r[f.parentIdAttr]===t}).map(function(r){return r[o]});var n=e;for(var a=0;a<e.length;a++){var i=r(e[a]);n=__spreadArray(__spreadArray([],n,!0),i,!0)}return n}(t[n]),e=__spreadArray(__spreadArray([],e,!0),a,!0);e=__spreadArray(__spreadArray([],e,!0),t,!0);r=u.filter(function(r){return!e.includes(r[o])});return this.completionIncompleteFlatArr(u,r,{keyAttr:o,titleAttr:"title",parentIdAttr:f.parentIdAttr,rootParentId:f.rootParentId})}};export default TreeUtil;
//# sourceMappingURL=tree.js.map
