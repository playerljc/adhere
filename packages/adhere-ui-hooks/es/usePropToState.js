import{useUpdateEffect}from"ahooks";import{useState}from"react";function usePropToState(t){let[e,o]=useState(t);return useUpdateEffect(()=>{o(t)},[t]),[e,o]}export default usePropToState;
//# sourceMappingURL=usePropToState.js.map
