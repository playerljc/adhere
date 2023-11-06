"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var l in t=arguments[r])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var l=Object.getOwnPropertyDescriptor(t,r);l&&("get"in l?t.__esModule:!l.writable&&!l.configurable)||(l={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,l)}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),iscroll_1=__importDefault(require("iscroll/build/iscroll")),react_1=__importStar(require("react")),adhere_ui_hooks_1=__importDefault(require("@baifendian/adhere-ui-hooks")),Item_1=__importDefault(require("./Item")),selectorPrefix="adhere-ui-jd-category-tab",useSetState=adhere_ui_hooks_1.default.useSetState,InternalJdCategoryTab=(0,react_1.memo)((0,react_1.forwardRef)(function(e,t){var r=e.className,r=void 0===r?"":r,a=e.style,a=void 0===a?{}:a,l=e.menuClassName,l=void 0===l?"":l,n=e.menuStyle,n=void 0===n?{}:n,u=e.menuInnerClassName,u=void 0===u?"":u,c=e.menuInnerStyle,c=void 0===c?{}:c,i=e.tabClassName,i=void 0===i?"":i,s=e.tabStyle,s=void 0===s?{}:s,o=e.menuData,f=void 0===o?[]:o,o=e.menuItemClassName,_=void 0===o?"":o,o=e.menuItemStyle,d=void 0===o?{}:o,m=e.renderMenuItem,v=e.onBeforeChange,y=e.onChange,o=e.children,p=useSetState(e.activeKey),h=p[0],b=p[1],g=(0,react_1.useRef)(iscroll_1.default.utils.ease),p=(0,react_1.useRef)(null),k=(0,react_1.useRef)(null),E=(0,react_1.useRef)(null),P=(0,react_1.useRef)();function S(e,t,r){var a,l,r=r||g.current.circular,n=!0;(n=v?v(h,e):n)&&(null!=(l=null==(n=P.current)?void 0:n.scrollToElement)&&l.call(n,(a=e,l=f.findIndex(function(e){return e.key===a}),(n=Array.from(E.current.querySelectorAll(".".concat(selectorPrefix,"-menu-item")))).length?n[l]:null),t||250,null,null,r),setTimeout(function(){b(e,function(){return y&&y(e)})},t||250))}return(0,react_1.useEffect)(function(){b(e.activeKey)},[e.activeKey]),(0,react_1.useEffect)(function(){var e,t;function r(e){e.preventDefault()}return P.current||(P.current=new iscroll_1.default(k.current,{mouseWheel:!0,click:!0})),null!=(t=null==(e=k.current)?void 0:e.addEventListener)&&t.call(e,"touchmove",r),function(){var e,t;return null==(t=null==(e=k.current)?void 0:e.removeEventListener)?void 0:t.call(e,"touchmove",r)}}),(0,react_1.useImperativeHandle)(t,function(){return{scrollTo:S}}),react_1.default.createElement("div",{className:(0,classnames_1.default)(selectorPrefix,null!=r?r:""),style:null!=a?a:{},ref:p},react_1.default.createElement("div",{ref:k,className:(0,classnames_1.default)("".concat(selectorPrefix,"-menu"),null!=l?l:""),style:__assign({},n)},react_1.default.createElement("ul",{ref:E,className:(0,classnames_1.default)("".concat(selectorPrefix,"-menu-inner"),null!=u?u:""),style:null!=c?c:{}},(f||[]).map(function(e){var t;return m?react_1.default.createElement("li",{key:e.key,className:(0,classnames_1.default)("".concat(selectorPrefix,"-menu-item"),((t={}).active=h===e.key,t),null!=_?_:""),style:null!=d?d:{}},react_1.default.createElement("a",{onClick:function(){return S(e.key)}},m(e))):react_1.default.createElement("li",{key:e.key,className:(0,classnames_1.default)("".concat(selectorPrefix,"-menu-item"),((t={}).active=h===e.key,t),null!=_?_:""),style:null!=d?d:{}},react_1.default.createElement("a",{onClick:function(){return S(e.key)}},e.name))}))),react_1.default.createElement("ul",{className:(0,classnames_1.default)("".concat(selectorPrefix,"-tab"),null!=i?i:""),style:null!=s?s:{}},o&&(null==(t=Array.isArray(o)?o:[o])?void 0:t.map(function(e){var t,r=e;return r=e.key===h?react_1.default.cloneElement(e,__assign(__assign({},null!=(t=e.props)?t:{}),{className:(0,classnames_1.default)(null==e?void 0:e.className,"active")})):r}))))})),JdCategoryTab=InternalJdCategoryTab;JdCategoryTab.Item=Item_1.default,exports.default=JdCategoryTab;
//# sourceMappingURL=JdCategoryTab.js.map
