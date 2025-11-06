import{useRef,useState}from"react";var useForceUpdate=function(){var e=useRef(0),t=useState(e.current)[1];return function(){t(++e.current)}};export default useForceUpdate;
//# sourceMappingURL=useForceUpdate.js.map
