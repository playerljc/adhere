"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(e,n,r,t){void 0===t&&(t=r);var l=Object.getOwnPropertyDescriptor(n,r);l&&("get"in l?n.__esModule:!l.writable&&!l.configurable)||(l={enumerable:!0,get:function(){return n[r]}}),Object.defineProperty(e,t,l)}:function(e,n,r,t){e[t=void 0===t?r:t]=n[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(n,e,r);return __setModuleDefault(n,e),n},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),react_1=__importStar(require("react")),adhere_ui_flexlayout_1=__importDefault(require("@baifendian/adhere-ui-flexlayout")),TRBLC=__importStar(require("./TRBLC")),FlexContext=adhere_ui_flexlayout_1.default.Context,flexLayoutSelectorPrefix=adhere_ui_flexlayout_1.default.selectorPrefix,directionProp={horizontal:{page:"pageX",dimension:"width",offset:"offsetWidth"},vertical:{page:"pageY",dimension:"height",offset:"offsetHeight"}},selectorPrefix="adhere-ui-split-layout";function toPoint(e){return Number(e.replace("%",""))/100}var InternalSplitLayout=(0,react_1.memo)(function(e){var n=e.className,n=void 0===n?"":n,r=e.style,r=void 0===r?{}:r,t=e.maxSize,c=void 0===t?"100%":t,t=e.minSize,i=void 0===t?10:t,l=e.onCanDrag,u=e.onDragStarted,o=e.onDragFinished,a=e.onChange,s=(0,react_1.useContext)(FlexContext).direction,v=(0,react_1.useRef)(null),d=(0,react_1.useRef)(null),m=(0,react_1.useRef)(null),f=(0,react_1.useRef)(),N=(0,react_1.useRef)(new Map([["".concat(flexLayoutSelectorPrefix,"-fixed_").concat(flexLayoutSelectorPrefix,"-auto"),!0],["".concat(flexLayoutSelectorPrefix,"-auto_").concat(flexLayoutSelectorPrefix,"-fixed"),!0]])),L=(0,react_1.useRef)(!1),_=(0,react_1.useRef)(!1),p=(0,react_1.useRef)(!1),E=(0,react_1.useRef)(!1),x=(0,react_1.useRef)(0),y=(0,react_1.useRef)(0),S=(0,react_1.useRef)(0),g=(0,react_1.useRef)(0),P=(0,react_1.useRef)(0);function b(){var e=v.current,r=e.previousElementSibling,t=e.nextElementSibling;return Array.from(N.current.keys()).some(function(e){var e=e.split("_"),n=e[0],e=e[1];return(null==r?void 0:r.classList.contains(n))&&(null==t?void 0:t.classList.contains(e))})}function h(){var e=v.current,n=e.previousElementSibling,e=e.nextElementSibling;return null!=n&&n.classList.contains("".concat(flexLayoutSelectorPrefix,"-fixed"))?n:e}function R(){var e=v.current,n=e.previousElementSibling,e=e.nextElementSibling;return null!=n&&n.classList.contains("".concat(flexLayoutSelectorPrefix,"-auto"))?n:e}function D(){return"vertical"===s?"row-resize":"col-resize"}function w(){return directionProp[s]}function C(){var e,n,r;return P.current||(e=h(),n=R(),r=w().offset,P.current=e[r]+n[r]),P.current}function O(e){var n;null!=(n=v.current)&&n.classList.add("".concat(selectorPrefix,"-").concat(D())),_.current=!1,L.current=!0,l&&l(e)}function M(e){var n;null!=(n=v.current)&&n.classList.remove("".concat(selectorPrefix,"-").concat(D())),L.current&&(p.current=!0,x.current=e[w().page],g.current=null==(n=d.current)?void 0:n[w().offset],u)&&u(e)}function j(e){var n;null!=(n=v.current)&&n.classList.add("".concat(selectorPrefix,"-").concat(D())),p.current&&(p.current=!1,E.current=!1,L.current=!_,x.current=0,S.current=S.current+y.current,o)&&o(e)}function B(e){p.current&&(p.current=!1,E.current=!1,L.current=!1,x.current=0,S.current+=y.current,o)&&o(e)}function z(e){var n,r,t,l,u,o;L.current&&p.current&&(E.current=!0,o=e[w().page],y.current=o-x.current,o="prev"==(null!=(o=v.current.previousElementSibling)&&o.classList.contains("".concat(flexLayoutSelectorPrefix,"-fixed"))?"prev":"next")?g.current+y.current:g.current-y.current,n=void 0,l=0,u=C(),"string"==typeof c?l=u*toPoint(c):"number"==typeof c&&(l=c),u=u<l?u:l,l=0,r=C(),t=w().offset,t=v[t],"string"==typeof i?l=r*toPoint(i):"number"==typeof i&&(l=i),r=l<t?t:l,u<=o||o<=r?u<=o?n=u:o<=r&&(n=r):n=o,d.current.style[w().dimension]="".concat(n,"px"),a)&&a(e)}function q(e){_.current=!0,p.current||(L.current=!1,a&&a(e))}function T(){var e,n;null!=(e=null==(n=v.current)?void 0:n.removeEventListener)&&e.call(n,"mouseenter",O),null!=(n=null==(e=v.current)?void 0:e.addEventListener)&&n.call(e,"mouseenter",O),null!=(e=null==(n=v.current)?void 0:n.removeEventListener)&&e.call(n,"mousedown",M),null!=(n=null==(e=v.current)?void 0:e.addEventListener)&&n.call(e,"mousedown",M),null!=(e=null==(n=d.current)?void 0:n.removeEventListener)&&e.call(n,"mousemove",z),null!=(n=null==(e=v.current)?void 0:e.removeEventListener)&&n.call(e,"mousemove",z),null!=(e=null==(n=m.current)?void 0:n.removeEventListener)&&e.call(n,"mousemove",z),null!=(n=null==(e=d.current)?void 0:e.addEventListener)&&n.call(e,"mousemove",z),null!=(e=null==(n=v.current)?void 0:n.addEventListener)&&e.call(n,"mousemove",z),null!=(n=null==(e=m.current)?void 0:e.addEventListener)&&n.call(e,"mousemove",z),null!=(e=null==(n=d.current)?void 0:n.removeEventListener)&&e.call(n,"mouseout",q),null!=(n=null==(e=v.current)?void 0:e.removeEventListener)&&n.call(e,"mouseout",q),null!=(e=null==(n=m.current)?void 0:n.removeEventListener)&&e.call(n,"mouseout",q),null!=(n=null==(e=d.current)?void 0:e.addEventListener)&&n.call(e,"mouseout",q),null!=(e=null==(n=v.current)?void 0:n.addEventListener)&&e.call(n,"mouseout",q),null!=(n=null==(e=m.current)?void 0:e.addEventListener)&&n.call(e,"mouseout",q),null!=(e=null==(n=d.current)?void 0:n.removeEventListener)&&e.call(n,"mouseup",j),null!=(n=null==(e=v.current)?void 0:e.removeEventListener)&&n.call(e,"mouseup",j),null!=(e=null==(n=m.current)?void 0:n.removeEventListener)&&e.call(n,"mouseup",j),null!=(n=null==(e=d.current)?void 0:e.addEventListener)&&n.call(e,"mouseup",j),null!=(e=null==(n=v.current)?void 0:n.addEventListener)&&e.call(n,"mouseup",j),null!=(n=null==(e=m.current)?void 0:e.addEventListener)&&n.call(e,"mouseup",j),null!=(e=null==(n=f.current)?void 0:n.removeEventListener)&&e.call(n,"mouseleave",B),null!=(n=null==(e=f.current)?void 0:e.addEventListener)&&n.call(e,"mouseleave",B)}function F(){var e,n;null!=(e=null==(n=v.current)?void 0:n.removeEventListener)&&e.call(n,"mouseenter",O),null!=(n=null==(e=v.current)?void 0:e.removeEventListener)&&n.call(e,"mouseenter",O),null!=(e=null==(n=v.current)?void 0:n.removeEventListener)&&e.call(n,"mousedown",M),null!=(n=null==(e=v.current)?void 0:e.removeEventListener)&&n.call(e,"mousedown",M),null!=(e=null==(n=d.current)?void 0:n.removeEventListener)&&e.call(n,"mousemove",z),null!=(n=null==(e=v.current)?void 0:e.removeEventListener)&&n.call(e,"mousemove",z),null!=(e=null==(n=m.current)?void 0:n.removeEventListener)&&e.call(n,"mousemove",z),null!=(n=null==(e=d.current)?void 0:e.removeEventListener)&&n.call(e,"mousemove",z),null!=(e=null==(n=v.current)?void 0:n.removeEventListener)&&e.call(n,"mousemove",z),null!=(n=null==(e=m.current)?void 0:e.removeEventListener)&&n.call(e,"mousemove",z),null!=(e=null==(n=d.current)?void 0:n.removeEventListener)&&e.call(n,"mouseout",q),null!=(n=null==(e=v.current)?void 0:e.removeEventListener)&&n.call(e,"mouseout",q),null!=(e=null==(n=m.current)?void 0:n.removeEventListener)&&e.call(n,"mouseout",q),null!=(n=null==(e=d.current)?void 0:e.removeEventListener)&&n.call(e,"mouseout",q),null!=(e=null==(n=v.current)?void 0:n.removeEventListener)&&e.call(n,"mouseout",q),null!=(n=null==(e=m.current)?void 0:e.removeEventListener)&&n.call(e,"mouseout",q),null!=(e=null==(n=d.current)?void 0:n.removeEventListener)&&e.call(n,"mouseup",j),null!=(n=null==(e=v.current)?void 0:e.removeEventListener)&&n.call(e,"mouseup",j),null!=(e=null==(n=m.current)?void 0:n.removeEventListener)&&e.call(n,"mouseup",j),null!=(n=null==(e=d.current)?void 0:e.removeEventListener)&&n.call(e,"mouseup",j),null!=(e=null==(n=v.current)?void 0:n.removeEventListener)&&e.call(n,"mouseup",j),null!=(n=null==(e=m.current)?void 0:e.removeEventListener)&&n.call(e,"mouseup",j),null!=(e=null==(n=f.current)?void 0:n.removeEventListener)&&e.call(n,"mouseleave",B),null!=(n=null==(e=f.current)?void 0:e.removeEventListener)&&n.call(e,"mouseleave",B)}return(0,react_1.useLayoutEffect)(function(){var e;return b()&&(d.current=h(),m.current=R(),f.current=null==(e=v.current)?void 0:e.parentElement,f.current.classList.add("".concat(selectorPrefix,"-no-select")),T()),F},[]),(0,react_1.useLayoutEffect)(function(){return b()&&(L.current=!1,_.current=!1,p.current=!1,E.current=!1,x.current=0,y.current=0,S.current=0,g.current=0,P.current=0,d.current=h(),m.current=R(),T()),F}),react_1.default.createElement("div",{ref:v,className:(0,classnames_1.default)(selectorPrefix,"".concat(selectorPrefix,"-").concat(s),null!=n?n:""),style:null!=r?r:{}})}),SplitLayout=InternalSplitLayout;SplitLayout.displayName="SplitLayout",SplitLayout.TRBLC=TRBLC,exports.default=SplitLayout;
//# sourceMappingURL=SplitLayout.js.map
