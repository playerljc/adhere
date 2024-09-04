import{useRef}from"react";function useItemsRef(){var e=useRef(null);function n(){return e.current||(e.current=new Map),e.current}return{get:function(e){var r=n();return null==r?void 0:r.get(e)},set:function(e,r){var t;return null==(t=n())?void 0:t.set(e,r)}}}export default useItemsRef;
//# sourceMappingURL=useItemsRef.js.map
