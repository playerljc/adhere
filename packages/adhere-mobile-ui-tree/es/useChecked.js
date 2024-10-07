var __spreadArray=this&&this.__spreadArray||function(e,n,t){if(t||2===arguments.length)for(var r,c=0,i=n.length;c<i;c++)!r&&c in n||((r=r||Array.prototype.slice.call(n,0,c))[c]=n[c]);return e.concat(r||Array.prototype.slice.call(n))};import uniq from"lodash.uniq";import Util from"@baifendian/adhere-util";import{DEFAULT_TREE_UTIL_CONFIG}from"./Constant";function useChecked(){function d(e){return null==(e=null==e?void 0:e.filter(function(e){return!("checkable"in e)||e.checkable}))?void 0:e.filter(function(e){return!("disabled"in e&&e.disabled)})}function u(e){var n=[e[DEFAULT_TREE_UTIL_CONFIG.keyAttr]],e=d(null!=(e=e.children)?e:[]);return e&&e.forEach(function(e){n=n.concat(u(e))}),n}return{handleCheck:function(e){var n=e.node,t=e.checked,r=e.checkedKeys,c=e.checkStrictly,e=e.next;c?(c=u(n),t?c.forEach(function(e){r.includes(e)||r.push(e)}):c.forEach(function(e){e=r.indexOf(e);-1<e&&r.splice(e,1)}),null!=e&&e(((c={})[DEFAULT_TREE_UTIL_CONFIG.keyAttr]=n[DEFAULT_TREE_UTIL_CONFIG.keyAttr],c.checked=t,c.checkedKeys=r,c))):t?r.includes(n[DEFAULT_TREE_UTIL_CONFIG.keyAttr])||r.push(n[DEFAULT_TREE_UTIL_CONFIG.keyAttr]):r.includes(n[DEFAULT_TREE_UTIL_CONFIG.keyAttr])&&r.splice(r.indexOf(n[DEFAULT_TREE_UTIL_CONFIG.keyAttr]),1)},updateParentChecked:function(e){var n=e.key,t=e.checked,r=e.checkedKeys,c=e.parentId,i=e.childrenData,e=e.next,u=!1,i=d(i);t?(u=(null==i?void 0:i.filter(function(e){return e.key!==n}).map(function(e){return e.key})).every(function(e){return r.includes(e)}))&&!r.includes(c)&&r.push(c):r.includes(c)&&r.splice(r.findIndex(function(e){return e===c}),1),null!=e&&e(((t={})[DEFAULT_TREE_UTIL_CONFIG.keyAttr]=c,t.checked=u,t.checkedKeys=r,t))},existsCheckableNodeInParentChildren:function(e){return!!e&&(null==e?void 0:e.some(function(e){return!("checkable"in e&&!e.checkable)}))},getDefaultCheckedKeysWithCheckStrictly:function(i,e){var t=__spreadArray([],e,!0);return e.forEach(function(e){var n=Util.findNodeByKey(i,e,{keyAttr:DEFAULT_TREE_UTIL_CONFIG.keyAttr}),n=(n&&(n=u(n),t.push.apply(t,__spreadArray([e],n,!1))),Util.findParentNodeByKey(i,e,{keyAttr:DEFAULT_TREE_UTIL_CONFIG.keyAttr}));n&&!function e(n){var t=n.key,r=n.checkedKeys,c=n.parentId,n=n.childrenData,n=((null==n?void 0:n.filter(function(e){return e.key!==t}).map(function(e){return e[DEFAULT_TREE_UTIL_CONFIG.keyAttr]})).every(function(e){return r.includes(e)})&&!r.includes(c)&&r.push(c),Util.findParentNodeByKey(i,c,{keyAttr:DEFAULT_TREE_UTIL_CONFIG.keyAttr}));n&&e({key:c,checkedKeys:r,parentId:n.key,childrenData:d(n.children)})}({key:e,checkedKeys:t,parentId:n.key,childrenData:d(n.children)})}),uniq(t)}}}export default useChecked;
//# sourceMappingURL=useChecked.js.map
