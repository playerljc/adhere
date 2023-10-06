import _Grid from"antd-mobile/es/components/grid";import _Popup from"antd-mobile/es/components/popup";import classNames from"classnames";import React,{memo,useEffect,useState}from"react";import ReactDOM from"react-dom";var arrowIcon="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1pYyIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNjY2MiIGQ9Ik03LjQxIDguNTlMMTIgMTMuMTdsNC41OS00LjU4TDE4IDEwbC02IDZsLTYtNmwxLjQxLTEuNDF6Ij48L3BhdGg+PC9zdmc+DQo=",selectorPrefix="adhere-ui-tabs-arrow-more",ArrowMore=function(e){var t=e.defaultCollapsed,r=void 0!==t&&t,c=e.activeKey,t=e.data,t=void 0===t?[]:t,a=e.onChange,o=e.wrapRef,n=e.swiper,i=void 0!==n&&n,l=e.getActiveIndexByKey,n=useState(r),s=n[0],m=n[1];return useEffect(function(){return m(r)},[r,c]),React.createElement(React.Fragment,null,(null==o?void 0:o.current)&&ReactDOM.createPortal(React.createElement("img",{className:classNames("".concat(selectorPrefix,"-icon"),((e={})["".concat(selectorPrefix,"-open")]=s,e["".concat(selectorPrefix,"-close")]=!s,e)),src:arrowIcon,alt:"",onClick:function(){m(!s)}}),o.current.querySelector(".adm-tabs-header")),React.createElement(_Popup,{className:"".concat(selectorPrefix,"-popup"),bodyClassName:"".concat(selectorPrefix,"-popup-body"),maskClassName:"".concat(selectorPrefix,"-mask"),visible:s,destroyOnClose:!0,getContainer:function(){return null!=o&&o.current?i?(e=null==l?void 0:l(c),Array.from(o.current.querySelectorAll(".adm-swiper-slide"))[e]):Array.from(o.current.querySelectorAll(".adm-tabs-content")).find(function(e){return"block"===e.style.display}):document.body;var e},onMaskClick:function(){return m(!1)},position:"top"},React.createElement(_Grid,{className:"".concat(selectorPrefix,"-grid"),columns:4,gap:[15,20]},(t||[]).map(function(e){var t;return React.createElement(_Grid.Item,{key:e.key},React.createElement("div",{className:classNames("".concat(selectorPrefix,"-item"),((t={})["".concat(selectorPrefix,"-active")]=c===e.key,t)),onClick:function(){null!=a&&a(e.key),m(!1)}},e.title))}))))};export default memo(ArrowMore);
//# sourceMappingURL=arrowMore.js.map
