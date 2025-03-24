import{useRef}from"react";function useItemsRef(){let e=useRef(null);function r(){return e.current||(e.current=new Map),e.current}return{get(e){return r()?.get(e)},set(e,t){return t?r()?.set(e,t):(r()?.delete(e),r())},getKeys(){return e.current?.keys()},getRefs(){return e.current?.values()}}}export default useItemsRef;
//# sourceMappingURL=useItemsRef.js.map
