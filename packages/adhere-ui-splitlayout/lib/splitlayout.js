"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(e,r,n,t){void 0===t&&(t=n);var l=Object.getOwnPropertyDescriptor(r,n);l&&("get"in l?r.__esModule:!l.writable&&!l.configurable)||(l={enumerable:!0,get:function(){return r[n]}}),Object.defineProperty(e,t,l)}:function(e,r,n,t){e[t=void 0===t?n:t]=r[n]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&__createBinding(r,e,n);return __setModuleDefault(r,e),r},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),react_1=__importStar(require("react")),adhere_ui_flexlayout_1=__importDefault(require("@baifendian/adhere-ui-flexlayout")),TRBLC=__importStar(require("./TRBLC")),FlexContext=adhere_ui_flexlayout_1.default.Context,flexLayoutSelectorPrefix=adhere_ui_flexlayout_1.default.selectorPrefix,directionProp={horizontal:{page:"pageX",dimension:"width",offset:"offsetWidth"},vertical:{page:"pageY",dimension:"height",offset:"offsetHeight"}},selectorPrefix="adhere-ui-splitlayout";function toPoint(e){return Number(e.replace("%",""))/100}var SplitLayout=function(e){var r=e.className,r=void 0===r?"":r,n=e.style,n=void 0===n?{}:n,t=e.maxSize,c=void 0===t?"100%":t,t=e.minSize,i=void 0===t?10:t,l=e.onCanDrag,u=e.onDragStarted,o=e.onDragFinished,a=e.onChange,s=(0,react_1.useContext)(FlexContext).direction,v=(console.log("direction=====",s),(0,react_1.useRef)(null)),d=(0,react_1.useRef)(null),m=(0,react_1.useRef)(null),f=(0,react_1.useRef)(),T=(0,react_1.useRef)(new Map([["".concat(flexLayoutSelectorPrefix,"-fixed_").concat(flexLayoutSelectorPrefix,"-auto"),!0],["".concat(flexLayoutSelectorPrefix,"-auto_").concat(flexLayoutSelectorPrefix,"-fixed"),!0]])),L=(0,react_1.useRef)(!1),_=(0,react_1.useRef)(!1),p=(0,react_1.useRef)(!1),E=(0,react_1.useRef)(!1),x=(0,react_1.useRef)(0),y=(0,react_1.useRef)(0),g=(0,react_1.useRef)(0),S=(0,react_1.useRef)(0),P=(0,react_1.useRef)(0);function b(){var e=v.current,n=e.previousElementSibling,t=e.nextElementSibling;return Array.from(T.current.keys()).some(function(e){var e=e.split("_"),r=e[0],e=e[1];return(null==n?void 0:n.classList.contains(r))&&(null==t?void 0:t.classList.contains(e))})}function h(){var e=v.current,r=e.previousElementSibling,e=e.nextElementSibling;return null!=r&&r.classList.contains("".concat(flexLayoutSelectorPrefix,"-fixed"))?r:e}function R(){var e=v.current,r=e.previousElementSibling,e=e.nextElementSibling;return null!=r&&r.classList.contains("".concat(flexLayoutSelectorPrefix,"-auto"))?r:e}function D(){return"vertical"===s?"row-resize":"col-resize"}function w(){return directionProp[s]}function C(){var e,r,n;return P.current||(e=h(),r=R(),n=w().offset,P.current=e[n]+r[n]),P.current}function O(e){var r;null!=(r=v.current)&&r.classList.add("".concat(selectorPrefix,"-").concat(D())),_.current=!1,L.current=!0,l&&l(e)}function M(e){var r;null!=(r=v.current)&&r.classList.remove("".concat(selectorPrefix,"-").concat(D())),L.current&&(p.current=!0,x.current=e[w().page],S.current=null==(r=d.current)?void 0:r[w().offset],u)&&u(e)}function j(e){var r;null!=(r=v.current)&&r.classList.add("".concat(selectorPrefix,"-").concat(D())),p.current&&(p.current=!1,E.current=!1,L.current=!_,x.current=0,g.current=g.current+y.current,o)&&o(e)}function B(e){p.current&&(p.current=!1,E.current=!1,L.current=!1,x.current=0,g.current+=y.current,o)&&o(e)}function z(e){var r,n,t,l,u,o;L.current&&p.current&&(E.current=!0,o=e[w().page],y.current=o-x.current,o="prev"==(null!=(o=v.current.previousElementSibling)&&o.classList.contains("".concat(flexLayoutSelectorPrefix,"-fixed"))?"prev":"next")?S.current+y.current:S.current-y.current,r=void 0,l=0,u=C(),"string"==typeof c?l=u*toPoint(c):"number"==typeof c&&(l=c),u=u<l?u:l,l=0,n=C(),t=w().offset,t=v[t],"string"==typeof i?l=n*toPoint(i):"number"==typeof i&&(l=i),n=l<t?t:l,u<=o||o<=n?u<=o?r=u:o<=n&&(r=n):r=o,d.current.style[w().dimension]="".concat(r,"px"),a)&&a(e)}function q(e){_.current=!0,p.current||(L.current=!1,a&&a(e))}function W(){var e,r;null!=(e=null==(r=v.current)?void 0:r.removeEventListener)&&e.call(r,"mouseenter",O),null!=(r=null==(e=v.current)?void 0:e.addEventListener)&&r.call(e,"mouseenter",O),null!=(e=null==(r=v.current)?void 0:r.removeEventListener)&&e.call(r,"mousedown",M),null!=(r=null==(e=v.current)?void 0:e.addEventListener)&&r.call(e,"mousedown",M),null!=(e=null==(r=d.current)?void 0:r.removeEventListener)&&e.call(r,"mousemove",z),null!=(r=null==(e=v.current)?void 0:e.removeEventListener)&&r.call(e,"mousemove",z),null!=(e=null==(r=m.current)?void 0:r.removeEventListener)&&e.call(r,"mousemove",z),null!=(r=null==(e=d.current)?void 0:e.addEventListener)&&r.call(e,"mousemove",z),null!=(e=null==(r=v.current)?void 0:r.addEventListener)&&e.call(r,"mousemove",z),null!=(r=null==(e=m.current)?void 0:e.addEventListener)&&r.call(e,"mousemove",z),null!=(e=null==(r=d.current)?void 0:r.removeEventListener)&&e.call(r,"mouseout",q),null!=(r=null==(e=v.current)?void 0:e.removeEventListener)&&r.call(e,"mouseout",q),null!=(e=null==(r=m.current)?void 0:r.removeEventListener)&&e.call(r,"mouseout",q),null!=(r=null==(e=d.current)?void 0:e.addEventListener)&&r.call(e,"mouseout",q),null!=(e=null==(r=v.current)?void 0:r.addEventListener)&&e.call(r,"mouseout",q),null!=(r=null==(e=m.current)?void 0:e.addEventListener)&&r.call(e,"mouseout",q),null!=(e=null==(r=d.current)?void 0:r.removeEventListener)&&e.call(r,"mouseup",j),null!=(r=null==(e=v.current)?void 0:e.removeEventListener)&&r.call(e,"mouseup",j),null!=(e=null==(r=m.current)?void 0:r.removeEventListener)&&e.call(r,"mouseup",j),null!=(r=null==(e=d.current)?void 0:e.addEventListener)&&r.call(e,"mouseup",j),null!=(e=null==(r=v.current)?void 0:r.addEventListener)&&e.call(r,"mouseup",j),null!=(r=null==(e=m.current)?void 0:e.addEventListener)&&r.call(e,"mouseup",j),null!=(e=null==(r=f.current)?void 0:r.removeEventListener)&&e.call(r,"mouseleave",B),null!=(r=null==(e=f.current)?void 0:e.addEventListener)&&r.call(e,"mouseleave",B)}function F(){var e,r;null!=(e=null==(r=v.current)?void 0:r.removeEventListener)&&e.call(r,"mouseenter",O),null!=(r=null==(e=v.current)?void 0:e.removeEventListener)&&r.call(e,"mouseenter",O),null!=(e=null==(r=v.current)?void 0:r.removeEventListener)&&e.call(r,"mousedown",M),null!=(r=null==(e=v.current)?void 0:e.removeEventListener)&&r.call(e,"mousedown",M),null!=(e=null==(r=d.current)?void 0:r.removeEventListener)&&e.call(r,"mousemove",z),null!=(r=null==(e=v.current)?void 0:e.removeEventListener)&&r.call(e,"mousemove",z),null!=(e=null==(r=m.current)?void 0:r.removeEventListener)&&e.call(r,"mousemove",z),null!=(r=null==(e=d.current)?void 0:e.removeEventListener)&&r.call(e,"mousemove",z),null!=(e=null==(r=v.current)?void 0:r.removeEventListener)&&e.call(r,"mousemove",z),null!=(r=null==(e=m.current)?void 0:e.removeEventListener)&&r.call(e,"mousemove",z),null!=(e=null==(r=d.current)?void 0:r.removeEventListener)&&e.call(r,"mouseout",q),null!=(r=null==(e=v.current)?void 0:e.removeEventListener)&&r.call(e,"mouseout",q),null!=(e=null==(r=m.current)?void 0:r.removeEventListener)&&e.call(r,"mouseout",q),null!=(r=null==(e=d.current)?void 0:e.removeEventListener)&&r.call(e,"mouseout",q),null!=(e=null==(r=v.current)?void 0:r.removeEventListener)&&e.call(r,"mouseout",q),null!=(r=null==(e=m.current)?void 0:e.removeEventListener)&&r.call(e,"mouseout",q),null!=(e=null==(r=d.current)?void 0:r.removeEventListener)&&e.call(r,"mouseup",j),null!=(r=null==(e=v.current)?void 0:e.removeEventListener)&&r.call(e,"mouseup",j),null!=(e=null==(r=m.current)?void 0:r.removeEventListener)&&e.call(r,"mouseup",j),null!=(r=null==(e=d.current)?void 0:e.removeEventListener)&&r.call(e,"mouseup",j),null!=(e=null==(r=v.current)?void 0:r.removeEventListener)&&e.call(r,"mouseup",j),null!=(r=null==(e=m.current)?void 0:e.removeEventListener)&&r.call(e,"mouseup",j),null!=(e=null==(r=f.current)?void 0:r.removeEventListener)&&e.call(r,"mouseleave",B),null!=(r=null==(e=f.current)?void 0:e.removeEventListener)&&r.call(e,"mouseleave",B)}return(0,react_1.useLayoutEffect)(function(){var e;return b()&&(d.current=h(),m.current=R(),f.current=null==(e=v.current)?void 0:e.parentElement,f.current.classList.add("".concat(selectorPrefix,"-no-select")),W()),F},[]),(0,react_1.useLayoutEffect)(function(){return b()&&(L.current=!1,_.current=!1,p.current=!1,E.current=!1,x.current=0,y.current=0,g.current=0,S.current=0,P.current=0,d.current=h(),m.current=R(),W()),F}),react_1.default.createElement("div",{ref:v,className:(0,classnames_1.default)(selectorPrefix,"".concat(selectorPrefix,"-").concat(s),null!=r?r:""),style:null!=n?n:{}})},SplitLayoutWrap=(0,react_1.memo)(SplitLayout);SplitLayoutWrap.TRBLC=TRBLC,exports.default=SplitLayoutWrap;
//# sourceMappingURL=splitlayout.js.map
