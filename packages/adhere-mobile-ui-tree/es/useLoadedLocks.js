import{useRef}from"react";function useLoadedLocks(){var t=useRef(new Map);return{lock:function(e){t.current.set(e,!0)},unLock:function(e){t.current.set(e,!1)},isLock:function(e){return!!t.current.get(e)}}}export default useLoadedLocks;
//# sourceMappingURL=useLoadedLocks.js.map
