import{useMemo}from"react";let useTreeSelectLeaf=l=>useMemo(()=>{var e=[...l??[]];return function r(e){(e||[]).forEach(e=>{var l;"isLeaf"in e?e.disabled=!e.isLeaf:e.disabled=!(null==e||null==(l=e.children)||!l.length),r(e.children)})}(e),e},[l]);export default useTreeSelectLeaf;
//# sourceMappingURL=useTreeSelectLeaf.js.map
