import Util from"@baifendian/adhere-util";function useChecked(){function d(e){return null==(e=null==e?void 0:e.filter(function(e){return!("checkable"in e)||e.checkable}))?void 0:e.filter(function(e){return!("disabled"in e&&e.disabled)})}return{handleCheck:function(e){var n=e.node,c=e.checked,t=e.checkedKeys,i=e.checkStrictly,e=e.next;i?(i=function n(e){var c=[e.key],e=d(null!=(e=e.children)?e:[]);return e&&e.forEach(function(e){c=c.concat(n(e))}),c}(n),c?i.forEach(function(e){t.includes(e)||t.push(e)}):i.forEach(function(e){e=t.indexOf(e);-1<e&&t.splice(e,1)}),null!=e&&e({key:n.key,checked:c,checkedKeys:t})):c?t.includes(n.key)||t.push(n.key):t.includes(n.key)&&t.splice(t.indexOf(n.key),1)},updateParentChecked:function(e){var n=e.key,c=e.checked,t=e.checkedKeys,i=e.parentId,r=e.childrenData,e=e.next,u=!1,r=d(r);c?(u=(null==r?void 0:r.filter(function(e){return e.key!==n}).map(function(e){return e.key})).every(function(e){return t.includes(e)}))&&!t.includes(i)&&t.push(i):t.includes(i)&&t.splice(t.findIndex(function(e){return e===i}),1),null!=e&&e({key:i,checked:u,checkedKeys:t})},existsCheckableNodeInParentChildren:function(e){return!!e&&(null==e?void 0:e.some(function(e){return!("checkable"in e&&!e.checkable)}))},getDefaultCheckedKeysWithCheckStrictly:function(r,e){var c=[];return e.forEach(function(e){c.push(e);var n=Util.findParentNodeByKey(r,e,{keyAttr:"key"});n&&!function e(n){var c=n.key,t=n.checkedKeys,i=n.parentId,n=n.childrenData,n=((null==n?void 0:n.filter(function(e){return e.key!==c}).map(function(e){return e.key})).every(function(e){return t.includes(e)})&&!t.includes(i)&&t.push(i),Util.findParentNodeByKey(r,i,{keyAttr:"key"}));n&&e({key:i,checkedKeys:t,parentId:n.key,childrenData:d(n.children)})}({key:e,checkedKeys:c,parentId:n.key,childrenData:d(n.children)})}),c}}}export default useChecked;
//# sourceMappingURL=useChecked.js.map
