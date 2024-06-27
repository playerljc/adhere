import{useUpdateEffect}from"ahooks";import{useState}from"react";function usePropToState(t){var e=useState(t),o=e[0],r=e[1];return useUpdateEffect(function(){r(t)},[t]),[o,r]}export default usePropToState;
//# sourceMappingURL=usePropToState.js.map
