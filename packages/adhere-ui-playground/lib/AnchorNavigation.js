"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&("get"in a?t.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){e[r=void 0===r?n:r]=t[n]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&__createBinding(t,e,n);return __setModuleDefault(t,e),t},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),adhere_ui_conditionalrender_1=__importDefault(require("@baifendian/adhere-ui-conditionalrender")),adhere_util_1=__importDefault(require("@baifendian/adhere-util")),AnchorNavigationContext_1=require("./AnchorNavigationContext"),selectPrefix="adhere-ui-playground-anchor-navigation",AnchorNavigation=function(e){var t=e.anchors,n=void 0===t?[]:t,t=e.anchorPosition,a=void 0===t?{top:77,width:120}:t,t=e.children,r=(0,react_1.useState)(e.activeAnchor||""),c=r[0],i=r[1],o=(0,react_1.useRef)(null),l=(0,react_1.useRef)([]),u=(0,react_1.useContext)(AnchorNavigationContext_1.AnchorNavigationContext).scrollEl;return(0,react_1.useEffect)(function(){if("undefined"!=typeof window)return window.addEventListener("hashchange",e),function(){"undefined"!=typeof window&&window.removeEventListener("hashchange",e)};function e(){i(window.location.hash.substring(1))}},[]),(0,react_1.useEffect)(function(){var r;if(u)return u&&(r=u,l.current=[],(n||[]).forEach(function(e,t){var e=e.anchor,n=document.getElementById(e);n&&(n={anchor:e,range:{top:e=adhere_util_1.default.getTopUntil({el:n,untilEl:r}),bottom:t===l.current.length-1?e+n.offsetHeight:void 0}},l.current.push(n),0!==t&&(l.current[t-1].range.bottom=e))})),u.addEventListener("scroll",e),function(){u&&u.removeEventListener("scroll",e)};function e(){var e,t,n;u&&o.current&&(e=u.scrollTop,n=e,(t=l.current.find(function(e){return n>=e.range.top&&n<=e.range.bottom}))&&i(t.anchor),0===e?null!=(t=null==(e=null==(t=o.current)?void 0:t.classList)?void 0:e.remove)&&t.call(e,"".concat(selectPrefix,"-affix")):(null!=(t=null==(e=null==(t=o.current)?void 0:t.classList)?void 0:e.add)&&t.call(e,"".concat(selectPrefix,"-affix")),o.current.style&&(o.current.style.top="".concat(a.top,"px"))))}},[u]),(0,react_1.useEffect)(function(){i(e.activeAnchor||"")},[e.activeAnchor]),react_1.default.createElement("div",{className:selectPrefix},react_1.default.createElement("div",{className:"".concat(selectPrefix,"-auto")},react_1.default.createElement("div",{className:"".concat(selectPrefix,"-inner")},t)),react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!(n||[]).length},function(){return react_1.default.createElement("div",{className:"".concat(selectPrefix,"-fixed"),style:{width:"".concat(a.width,"px")}},react_1.default.createElement("ul",{className:"".concat(selectPrefix,"-anchor"),ref:o},(n||[]).map(function(e){return react_1.default.createElement("li",{className:e.anchor===c?"".concat(selectPrefix,"-active"):"",title:e.name},react_1.default.createElement("a",{href:"#".concat(e.anchor)},e.name))})))}))};exports.default=(0,react_1.memo)(AnchorNavigation);
//# sourceMappingURL=AnchorNavigation.js.map
