import{useRef}from"react";function useItemsRef(){var e=useRef(null);function n(){return e.current||(e.current=new Map),e.current}return{get:function(e){var t=n();return null==t?void 0:t.get(e)},set:function(e,t){var r;return t?null==(r=n())?void 0:r.set(e,t):(null!=(r=n())&&r.delete(e),n())}}}export default useItemsRef;
//# sourceMappingURL=useItemsRef.js.map
