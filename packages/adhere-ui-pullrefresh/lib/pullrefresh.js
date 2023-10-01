"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var a=Object.getOwnPropertyDescriptor(t,r);a&&("get"in a?t.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){e[n=void 0===n?r:n]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),dayjs_1=__importDefault(require("dayjs")),react_1=__importStar(require("react")),adhere_ui_conditionalrender_1=__importDefault(require("@baifendian/adhere-ui-conditionalrender")),adhere_ui_hooks_1=__importDefault(require("@baifendian/adhere-ui-hooks")),adhere_util_1=__importDefault(require("@baifendian/adhere-util")),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),adhere_util_resource_1=__importDefault(require("@baifendian/adhere-util-resource")),selectorPrefix="adhere-ui-pull-refresh",defaultImg="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHN0eWxlPSJ3aWR0aDozMDhweDtoZWlnaHQ6MzA4cHg7IiB2ZXJzaW9uPSIxLjEiIGlkPSLlm77lvaIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTAyNHB4IiBoZWlnaHQ9IjEwMjRweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAyNCAxMDI0IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCiAgPHBhdGggY2xhc3M9InN2Z3BhdGgiIGRhdGEtaW5kZXg9InBhdGhfMCIgZmlsbD0iI2VjZjBmMSIgZD0iTTc5Ny43NjQ0MiAzMjYuNTU4NDFjLTguODg0MTk5LTE1LjU2MzMyNy0yNTIuODgwMS0yODYuODE5MDE5LTI2OC4zNzk1MTItMzEzLjU2NzQ4OS0xMC4xMzA1NDQtMTcuNDQ4ODIzLTM0LjI1ODQ5NS0xNy4xOTMxNjItNDQuMzg5MDM4IDBDNDczLjY1MDkzOSAzMi4yNjEzMjQgMjMwLjk5NzI1NSAzMDQuNjM1NTMgMjE4LjM3NDAyMyAzMjcuNDIxMjY0Yy05LjIzNTczMiAxNi41NTQwMTEgMC45NTg3MjcgMzguMzgxMDE5IDIxLjk1NDgzNyAzOC4zODEwMTlsMTE5LjkwNDczMSAwIDAgMjU2LjQ5MTMwMyAwIDM2Ljc4MzE0MSAyOTEuODM2MzU0IDAgMC0yOTMuMzA2NDAyIDEyMy41Nzk4NDkgMEM3OTQuNjk2NDk1IDM2NS43NzAzMjUgODA4Ljk0OTU2MiAzNDYuMTE2NDMxIDc5Ny43NjQ0MiAzMjYuNTU4NDF6IiAvPg0KPHBhdGggY2xhc3M9InN2Z3BhdGgiIGRhdGEtaW5kZXg9InBhdGhfMSIgZmlsbD0iI2VjZjBmMSIgZD0iTTM2MC4yMDE2MzMgNjg5LjY5MjA2MWwyOTIuMzE1NzE4IDAgMCA5MC45MTkyMzItMjkyLjMxNTcxOCAwIDAtOTAuOTE5MjMyWiIgLz4NCjxwYXRoIGNsYXNzPSJzdmdwYXRoIiBkYXRhLWluZGV4PSJwYXRoXzIiIGZpbGw9IiNlY2YwZjEiIGQ9Ik0zNjAuMjAxNjMzIDg0MC45MTUxOTFsMjkyLjMxNTcxOCAwIDAgNjAuNTkxNTE2LTI5Mi4zMTU3MTggMCAwLTYwLjU5MTUxNloiIC8+DQo8cGF0aCBjbGFzcz0ic3ZncGF0aCIgZGF0YS1pbmRleD0icGF0aF8zIiBmaWxsPSIjZWNmMGYxIiBkPSJNMzYwLjIwMTYzMyA5OTIuMzkzOTgybDI5MC40MzAyMjIgMCAwIDMwLjI5NTc1OC0yOTAuNDMwMjIyIDAgMC0zMC4yOTU3NThaIiAvPg0KDQo8L3N2Zz4NCg==",useSetState=adhere_ui_hooks_1.default.useSetState,PullRefresh=function(r,R){var e=r.className,e=void 0===e?"":e,t=r.style,t=void 0===t?{}:t,n=r.scrollClassName,n=void 0===n?"":n,a=r.scrollStyle,a=void 0===a?{}:a,c=r.renderIcon,u=r.renderLabel,l=void 0===u?function(){return adhere_util_intl_1.default.v("下拉刷新")}:u,u=r.renderCanLabel,i=void 0===u?function(){return adhere_util_intl_1.default.v("松开刷新")}:u,u=r.renderLoadingAnimation,o=void 0===u?"la-ball-circus la-dark":u,u=r.isShowUpdateTime,d=void 0===u||u,u=r.updateTimeFormat,s=void 0===u?adhere_util_resource_1.default.Dict.value.ResourceMomentFormat18.value():u,u=r.children,f=useSetState(!1),k=f[0],_=f[1],f=useSetState((0,dayjs_1.default)().valueOf()),M=f[0],m=f[1],S=(0,react_1.useRef)(null),B=(0,react_1.useRef)(null),g=(0,react_1.useRef)(null),v=(0,react_1.useRef)(null),Y=(0,react_1.useRef)(null),h=(0,react_1.useRef)(null),y=(0,react_1.useRef)(null),I=(0,react_1.useRef)(null),N=(0,react_1.useRef)(null),D=(0,react_1.useRef)(null),E=(0,react_1.useRef)(!0),j=(0,react_1.useRef)(200),T=(0,react_1.useRef)(-1),p=(0,react_1.useRef)(!1),L=(0,react_1.useRef)(0),f=(0,react_1.useCallback)(function(){return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!c,noMatch:function(){return react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-trigger-icon")},react_1.default.createElement("img",{className:"".concat(selectorPrefix,"-trigger-icon-inner"),src:defaultImg,alt:"",ref:g}))}},function(){return react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-trigger-icon")},react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-trigger-icon-inner"),ref:g},null==c?void 0:c()))})},[c]),Z=(0,react_1.useCallback)(function(){return react_1.default.createElement("p",{className:"".concat(selectorPrefix,"-trigger-label")},react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:k,noMatch:function(){return null==l?void 0:l()}},function(){return null==i?void 0:i()}))},[k,l,i]),G=(0,react_1.useCallback)(function(){return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:d},function(){return react_1.default.createElement("p",{className:"".concat(selectorPrefix,"-trigger-update")},adhere_util_intl_1.default.v("更新时间"),"：",react_1.default.createElement("span",{className:"".concat(selectorPrefix,"-trigger-update-label")},(0,dayjs_1.default)(M).format(s)))})},[d,M,s]),Q=(0,react_1.useCallback)(function(){return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!o},function(){return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:adhere_util_1.default.isString(o),noMatch:function(){return react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-trigger-refresh"),ref:v},o())}},function(){return react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(selectorPrefix,"-trigger-refresh"),o),ref:v},react_1.default.createElement("div",null),react_1.default.createElement("div",null),react_1.default.createElement("div",null),react_1.default.createElement("div",null),react_1.default.createElement("div",null))})})},[o]);function z(e,t){r[e]&&r[e](t)}function x(e,t,r){e.style.transition=e.style.webkitTransition="transform ".concat(r=void 0===r?0:r,"ms ease"),e.style.transform=e.style.webkitTransform="translate3d(0,".concat(t,",0)")}function b(){w(),p.current=!1,E.current=!0,h.current.style.display="flex",v.current.style.display="none",N.current.style.display="flex",A(I.current,180,0),y.current.style.overflowY="auto",D.current.style.display="none"}function w(){var e;null!=(e=y.current)&&e.removeEventListener("mousemove",P),null!=(e=y.current)&&e.removeEventListener("mouseup",C),null!=(e=y.current)&&e.removeEventListener("touchmove",P),null!=(e=y.current)&&e.removeEventListener("touchend",C)}function U(){var e;D.current.style.display="block",w(),null!=(e=y.current)&&e.addEventListener("transitionend",function e(){var t;N.current.style.display="none",v.current.style.display="block",z("onPullRefresh"),null!=(t=y.current)&&t.removeEventListener("transitionend",e),m((0,dayjs_1.default)().valueOf())}),x(y.current,"".concat(L.current,"px"),500),x(h.current,"calc(-100% + ".concat(L.current,"px)"),500),A(I.current,180,300)}function W(){var e;b(),null!=(e=y.current)&&e.addEventListener("transitionend",function e(){var t;null!=(t=y.current)&&t.removeEventListener("transitionend",e),N.current.style.display="flex"}),x(y.current,"0px",200),x(h.current,"calc(-100% + 0px)",200)}function H(t){return new Promise(function(e){return m(t||(0,dayjs_1.default)().valueOf(),function(){return e()})})}function F(){return M}function A(e,t,r){e.style.transition=e.style.webkitTransition="transform ".concat(r=void 0===r?0:r,"ms linear"),e.style.transform=e.style.webkitTransform="rotate(".concat(t,"deg)")}function O(e){z("onPullStart"),T.current=(e.changedTouches?e.changedTouches[0]:e).pageY,null!=(e=y.current)&&e.addEventListener("touchmove",P),null!=(e=y.current)&&e.addEventListener("mousemove",P),null!=(e=y.current)&&e.addEventListener("touchend",C),null!=(e=y.current)&&e.addEventListener("mouseup",C)}function P(e){y.current.style.overflow="hidden";var t=(e.changedTouches?e.changedTouches[0]:e).pageY-T.current,r=Math.abs(t);0<t?(e.preventDefault(),p.current=!0,r<j.current?(x(y.current,"".concat(r,"px"),0),x(h.current,"calc(-100% + ".concat(r,"px)"),0),r>=L.current+80?(A(I.current,0,150),_(!0,function(){return z("onPullCanRefresh")})):(A(I.current,180,150),_(!1)),h.current.style.display="flex"):(x(y.current,"".concat(j.current,"px"),0),x(h.current,"calc(-100% + ".concat(j.current,"px)"),0),A(I.current,0,150),_(!0,function(){return z("onPullBottom")}))):p.current?(e.preventDefault(),x(y.current,"0px",0),x(h.current,"calc(-100% + 0px)",0),A(I.current,180,0)):b()}function C(e){var e=(e.changedTouches?e.changedTouches[0]:e).pageY-T.current,t=Math.abs(e);(0<e?!(t<j.current)||t>=L.current+80?U:(z("onPullRebound"),W):b)()}function X(e){0===e.target.scrollTop?(E.current=!0,null!=(e=y.current)&&e.addEventListener("touchstart",O),null!=(e=y.current)&&e.addEventListener("mousedown",O)):E.current&&(E.current=!1,null!=(e=y.current)&&e.removeEventListener("touchstart",O),null!=(e=y.current))&&e.removeEventListener("mousedown",O)}return(0,react_1.useImperativeHandle)(R,function(){return{refresh:U,reset:W,resetUpdateTime:H,getUpdateTime:F}}),(0,react_1.useEffect)(function(){m(r.updateTime||(0,dayjs_1.default)().valueOf())},[r.updateTime]),(0,react_1.useEffect)(function(){D.current=document.querySelector(".".concat(selectorPrefix,"-mask")),D.current||(D.current=document.createElement("div"),D.current.className="".concat(selectorPrefix,"-mask"),document.body.appendChild(D.current))},[]),(0,react_1.useLayoutEffect)(function(){var e;h.current=S.current,I.current=g.current,y.current=B.current,N.current=Y.current,j.current=((e=void 0===(e=r.pullHeight)?200:e)||200)<=0?200:(e||200)>y.current.clientHeight?y.current.clientHeight:e||200,L.current=h.current.clientHeight},[]),(0,react_1.useLayoutEffect)(function(){var e;return null!=(e=y.current)&&e.addEventListener("touchstart",O),null!=(e=y.current)&&e.addEventListener("mousedown",O),null!=(e=y.current)&&e.addEventListener("scroll",X),w}),react_1.default.createElement("div",{className:(0,classnames_1.default)(selectorPrefix,null!=e?e:""),style:null!=t?t:{}},react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(selectorPrefix,"-scroll"),null!=n?n:""),style:null!=a?a:{},ref:B},u),react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-trigger"),ref:S},react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-trigger-inner"),ref:Y},f(),Z(),G()),Q()))};exports.default=(0,react_1.memo)((0,react_1.forwardRef)(PullRefresh));
//# sourceMappingURL=pullrefresh.js.map
