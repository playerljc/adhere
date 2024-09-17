"use strict";var __extends=function(){var M=function(r,e){return(M=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(r,e){r.__proto__=e}:function(r,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t])}))(r,e)};return function(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function t(){this.constructor=r}M(r,e),r.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}}(),__assign=function(){return(__assign=Object.assign||function(r){for(var e,t=1,M=arguments.length;t<M;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}).apply(this,arguments)},__rest=function(r,e){var t={};for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&e.indexOf(o)<0&&(t[o]=r[o]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols)for(var M=0,o=Object.getOwnPropertySymbols(r);M<o.length;M++)e.indexOf(o[M])<0&&Object.prototype.propertyIsEnumerable.call(r,o[M])&&(t[o[M]]=r[o[M]]);return t},__importDefault=function(r){return r&&r.__esModule?r:{default:r}},antd_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("antd")),classnames_1=__importDefault(require("classnames")),react_1=__importDefault(require("react")),adhere_util_1=__importDefault(require("@baifendian/adhere-util")),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),selectorPrefix="adhere-util-decorators",errorIcon="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTkyNzM0NTgwMDkxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMzODMiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM1OC4zMjUzODYgNTYzLjA3MzczMW0tNzYuNzgyNzgxIDBhNzYuNzgyNzgxIDc2Ljc4Mjc4MSAwIDEgMCAxNTMuNTY1NTYzIDAgNzYuNzgyNzgxIDc2Ljc4Mjc4MSAwIDEgMC0xNTMuNTY1NTYzIDBaIiBmaWxsPSIjMTM5MjdEIiBwLWlkPSIzMzg0Ij48L3BhdGg+PHBhdGggZD0iTTY2NS40NTY1MTIgNTYzLjA3MzczMW0tNzYuNzgyNzgxIDBhNzYuNzgyNzgxIDc2Ljc4Mjc4MSAwIDEgMCAxNTMuNTY1NTYzIDAgNzYuNzgyNzgxIDc2Ljc4Mjc4MSAwIDEgMC0xNTMuNTY1NTYzIDBaIiBmaWxsPSIjMTM5MjdEIiBwLWlkPSIzMzg1Ij48L3BhdGg+PHBhdGggZD0iTTUxMS44OTA5NDkgMGMyNjguNTYwNTc1IDAgNDg2LjI5MDk0OSAyMTcuNzMwMzc0IDQ4Ni4yOTA5NSA0ODYuMjkwOTQ5IDAgMTE5LjYyNzU3NC00My40NTkwNTQgMjMyLjQ3MjY2OC0xMjAuMjY3NDMxIDMyMC4xODQxOTlsLTcuNzAzODcyIDguNTc0MDc3Vjk3Mi41ODE4OTlhNTEuMTg4NTIxIDUxLjE4ODUyMSAwIDAgMS00Ny4zNzQ5NzYgNTEuMDYwNTQ5bC0zLjgzOTEzOSAwLjEyNzk3MWE1MS4xODg1MjEgNTEuMTg4NTIxIDAgMCAxLTUxLjAzNDk1Ni00Ny4zNzQ5NzZsLTAuMTI3OTcxLTMuODM5MTM5di0xNzguMDg0ODY0YTUxLjE4ODUyMSA1MS4xODg1MjEgMCAwIDEgMTUuMDc1MDItMzYuMjY3MDY3QTM4Mi40ODA2MjkgMzgyLjQ4MDYyOSAwIDAgMCA4OTUuODA0ODU3IDQ4Ni4yOTA5NDljMC0yMTIuMDIyODU0LTE3MS44OTEwNTMtMzgzLjkxMzkwNy0zODMuOTEzOTA4LTM4My45MTM5MDctMjEyLjAyMjg1NCAwLTM4My45MTM5MDcgMTcxLjg5MTA1My0zODMuOTEzOTA3IDM4My45MTM5MDcgMCAxMDMuNDc3NTk1IDQxLjA3ODc4OCAyMDAuMzI2Mjc3IDExMi45MjE4NzcgMjcxLjkzOTAxOGE1MS4xODg1MjEgNTEuMTg4NTIxIDAgMCAxIDE0Ljg0NDY3MSAzMS43MzY4ODNsMC4yMDQ3NTQgNC41MzAxODRWOTcyLjU4MTg5OWE1MS4xODg1MjEgNTEuMTg4NTIxIDAgMCAxLTEwMi4yNDkwNyAzLjgzOTEzOUwxNTMuNTcxMzAyIDk3Mi41ODE4OTl2LTE1Ny41MzI2NzRBNDg0LjY1MjkxNyA0ODQuNjUyOTE3IDAgMCAxIDI1LjcyNzk3MSA0OTcuNTAxMjM1TDI1LjYgNDg2LjI5MDk0OUMyNS42IDIxNy43MzAzNzQgMjQzLjMzMDM3NCAwIDUxMS44OTA5NDkgMHoiIGZpbGw9IiMxMzkyN0QiIHAtaWQ9IjMzODYiPjwvcGF0aD48cGF0aCBkPSJNNTExLjg5MDk0OSA3OTMuNDIyMDc1YTUxLjE4ODUyMSA1MS4xODg1MjEgMCAwIDEgNTEuMDYwNTUgNDcuMzQ5MzgyTDU2My4wNzk0NyA4NDQuNjEwNTk2djEyNy45NzEzMDNhNTEuMTg4NTIxIDUxLjE4ODUyMSAwIDAgMS0xMDIuMjQ5MDcgMy44MzkxMzlMNDYwLjcwMjQyOCA5NzIuNTgxODk5di0xMjcuOTcxMzAzYTUxLjE4ODUyMSA1MS4xODg1MjEgMCAwIDEgNTEuMTg4NTIxLTUxLjE4ODUyMXoiIGZpbGw9IiMxMzkyN0QiIHAtaWQ9IjMzODciPjwvcGF0aD48L3N2Zz4=",DEFAULT_ERROR_UI=react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(selectorPrefix,"-default-error-ui-wrapper"))},react_1.default.createElement(antd_1.Empty,{image:errorIcon,imageStyle:{height:60},description:adhere_util_intl_1.default.v("糟糕！，出了些问题")})),ReactErrorBoundariesHOC=function(t){e=react_1.default.Component,__extends(r,e),r.getDerivedStateFromError=function(r){return console.error(r),{hasError:!0}},r.prototype.componentDidCatch=function(r,e){console.error(r,e),String(r).includes("Loading chunk")&&(e=+new Date,window.location.href="".concat(window.location.href).concat(window.location.search?"&":"?","=_ijt=").concat(e))},r.prototype.renderErrorUI=function(){var r=this.refIns;return r&&r.current&&r.current.getReactErrorBoundariesErrorUI&&adhere_util_1.default.isFunction(r.current.getReactErrorBoundariesErrorUI)?r.current.getReactErrorBoundariesErrorUI():"getReactErrorBoundariesErrorUI"in t&&adhere_util_1.default.isFunction(t.getReactErrorBoundariesErrorUI)?t.getReactErrorBoundariesErrorUI():DEFAULT_ERROR_UI},r.prototype.render=function(){var r,e;return this.state.hasError?this.renderErrorUI():(r=(e=this.props).forwardedRef,e=__rest(e,["forwardedRef"]),e=__assign({},e),adhere_util_1.default.isArray(t)?t.prototype.isReactComponent&&(this.refIns=r||react_1.default.createRef(),e.ref=this.refIns):adhere_util_1.default.isObject(t)&&t.constructor.prototype.isReactComponent&&(this.refIns=r||react_1.default.createRef(),e.ref=this.refIns),react_1.default.createElement(t,__assign({},e)))};var e,M=r;function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.state={hasError:!1},r.refIns=null,r}return react_1.default.forwardRef(function(r,e){return react_1.default.createElement(M,__assign({},r,{forwardedRef:e}))})};ReactErrorBoundariesHOC.setDefaultErrorUI=function(r){DEFAULT_ERROR_UI=r},exports.default=ReactErrorBoundariesHOC;
//# sourceMappingURL=ReactErrorBoundaries.js.map
