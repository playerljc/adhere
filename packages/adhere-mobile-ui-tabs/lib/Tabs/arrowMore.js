"use strict";var __createBinding=Object.create?function(e,t,r,a){void 0===a&&(a=r);var c=Object.getOwnPropertyDescriptor(t,r);c&&("get"in c?t.__esModule:!c.writable&&!c.configurable)||(c={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,c)}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},antd_mobile_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("antd-mobile")),classnames_1=__importDefault(require("classnames")),react_1=__importStar(require("react")),react_dom_1=__importDefault(require("react-dom")),arrowIcon="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1pYyIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNjY2MiIGQ9Ik03LjQxIDguNTlMMTIgMTMuMTdsNC41OS00LjU4TDE4IDEwbC02IDZsLTYtNmwxLjQxLTEuNDF6Ij48L3BhdGg+PC9zdmc+DQo=",selectorPrefix="adhere-ui-tabs-arrow-more",ArrowMore=function(e){var t=e.defaultCollapsed,r=void 0!==t&&t,a=e.activeKey,t=e.data,t=void 0===t?[]:t,c=e.onChange,o=e.wrapRef,n=e.swiper,l=void 0!==n&&n,i=e.getActiveIndexByKey,n=(0,react_1.useState)(r),u=n[0],d=n[1];return(0,react_1.useEffect)(function(){return d(r)},[r,a]),react_1.default.createElement(react_1.default.Fragment,null,(null==o?void 0:o.current)&&react_dom_1.default.createPortal(react_1.default.createElement("img",{className:(0,classnames_1.default)("".concat(selectorPrefix,"-icon"),((e={})["".concat(selectorPrefix,"-open")]=u,e["".concat(selectorPrefix,"-close")]=!u,e)),src:arrowIcon,alt:"",onClick:function(){d(!u)}}),o.current.querySelector(".adm-tabs-header")),react_1.default.createElement(antd_mobile_1.Popup,{className:"".concat(selectorPrefix,"-popup"),bodyClassName:"".concat(selectorPrefix,"-popup-body"),maskClassName:"".concat(selectorPrefix,"-mask"),visible:u,destroyOnClose:!0,getContainer:function(){return null!=o&&o.current?l?(e=null==i?void 0:i(a),Array.from(o.current.querySelectorAll(".adm-swiper-slide"))[e]):Array.from(o.current.querySelectorAll(".adm-tabs-content")).find(function(e){return"block"===e.style.display}):document.body;var e},onMaskClick:function(){return d(!1)},position:"top"},react_1.default.createElement(antd_mobile_1.Grid,{className:"".concat(selectorPrefix,"-grid"),columns:4,gap:[15,20]},(t||[]).map(function(e){var t;return react_1.default.createElement(antd_mobile_1.Grid.Item,{key:e.key},react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(selectorPrefix,"-item"),((t={})["".concat(selectorPrefix,"-active")]=a===e.key,t)),onClick:function(){null!=c&&c(e.key),d(!1)}},e.title))}))))};exports.default=(0,react_1.memo)(ArrowMore);
//# sourceMappingURL=arrowMore.js.map
