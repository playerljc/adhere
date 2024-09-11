import{useRef,useState}from"react";var useForceUpdate=function(){var e=useRef(0),t=useState(e.current);return function(){t[1](++e.current)}};export default useForceUpdate;
//# sourceMappingURL=useForceUpdate.js.map
