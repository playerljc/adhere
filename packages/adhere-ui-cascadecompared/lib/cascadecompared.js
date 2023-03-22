"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a);var l=Object.getOwnPropertyDescriptor(t,a);l&&("get"in l?t.__esModule:!l.writable&&!l.configurable)||(l={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,l)}:function(e,t,a,r){e[r=void 0===r?a:r]=t[a]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&__createBinding(t,e,a);return __setModuleDefault(t,e),t},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),iscroll_probe_1=__importDefault(require("iscroll/build/iscroll-probe")),react_1=__importStar(require("react")),adhere_ui_stickuplayout_1=__importDefault(require("@baifendian/adhere-ui-stickuplayout")),selectorPrefix="adhere-ui-cascadecompared",defaultCellWidth=120,Item=adhere_ui_stickuplayout_1.default.Item,StickupLayoutItem=Item;function initTouch(){document.addEventListener("touchmove",function(e){e.preventDefault()},!!function(){var e=!1;try{addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){e=!0}}))}catch(e){}return e}()&&{capture:!1,passive:!1})}initTouch();var CascadeCompared=function(e,t){var a,r=e.className,r=void 0===r?"":r,l=e.style,l=void 0===l?{}:l,s=e.indicatorClassName,s=void 0===s?"":s,n=e.indicatorStyle,n=void 0===n?{}:n,c=e.indicatorFixedWrapClassName,c=void 0===c?"":c,i=e.indicatorFixedWrapStyle,i=void 0===i?{}:i,o=e.indicatorAutoWrapClassName,o=void 0===o?"":o,u=e.indicatorAutoWrapStyle,u=void 0===u?{}:u,d=e.indicator,f=d.columns,f=void 0===f?[]:f,d=d.dataSource,_=void 0===d?{}:d,d=e.masterClassName,d=void 0===d?"":d,m=e.masterStyle,m=void 0===m?{}:m,v=e.masterInnerClassName,v=void 0===v?"":v,p=e.masterInnerStyle,p=void 0===p?{}:p,y=e.masterStickFixedClassName,y=void 0===y?"":y,h=e.masterStickFixedStyle,h=void 0===h?{}:h,x=e.masterStickInnerClassName,x=void 0===x?"":x,g=e.masterStickInnerStyle,g=void 0===g?{}:g,N=e.master,N=void 0===N?[]:N,e=e.onStickChange,P=(0,react_1.useRef)(null),S=(0,react_1.useRef)(null),E=(0,react_1.useRef)([]);function C(){for(var a=P.current.querySelectorAll(".".concat(selectorPrefix,"-autoWrap")),e=0;e<E.current.length;e++)E.current[e].destroy();E.current=[];for(e=0;e<a.length;e++)!function(e){var t=new iscroll_probe_1.default(a[e],{probeType:3,eventPassthrough:!0,scrollX:!0,scrollY:!1,preventDefault:!1});E.current.push(t),t.on("scroll",function(){for(var e=0;e<E.current.length;e++)E.current[e]!==t&&E.current[e].scrollTo(t.x,t.y)})}(e)}function b(e){var t=e.find(function(e){return e.isFixed});return t||(e.length?e[0]:null)}function I(e,t,a,r,l){return e?e.render?e.render(t[e.dataIndex],t,a,r,l):t[e.dataIndex]:null}function W(e,t){var l,s,a,r,n,c=e.title,c=void 0===c?void 0:c,i=e.className,o=e.style,o=void 0===o?{}:o;return react_1.default.createElement(StickupLayoutItem,{key:t,className:(0,classnames_1.default)((void 0===i?"":i)||""),style:__assign({},o||{}),title:c,content:(l=t,o=void 0===(o=(i=e).dataSource)?[]:o,s=void 0===(c=i.columns)?[]:c,c=void 0===(c=i.fixedWrapClassName)?"":c,t=void 0===(t=i.fixedWrapStyle)?{}:t,e=void 0===(e=i.autoWrapClassName)?"":e,a=void 0===(a=i.autoWrapStyle)?{}:a,r=void 0===(r=i.autoInnerClassName)?"":r,i=void 0===(i=i.autoInnerStyle)?{}:i,n=b(s),react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(selectorPrefix,"-fixedWrap"),c||""),style:__assign(__assign({},t||{}),{width:(null==n?void 0:n.width)||defaultCellWidth})},o.map(function(e,t){return react_1.default.createElement("div",{key:t,className:"".concat(selectorPrefix,"-item")},react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(selectorPrefix,"-cell"),(null==n?void 0:n.className)||""),style:__assign({},(null==n?void 0:n.style)||{})},I(n,e,l,t,-1)))})),react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(selectorPrefix,"-autoWrap"),e||""),style:__assign({},a||{})},react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(selectorPrefix,"-autoInner"),r||""),style:__assign({},i)},o.map(function(a,r){return react_1.default.createElement("div",{key:r,className:"".concat(selectorPrefix,"-item")},s.filter(function(e){return e!==n}).map(function(e,t){return react_1.default.createElement("div",{key:e.dataIndex,className:(0,classnames_1.default)("".concat(selectorPrefix,"-cell"),e.className||""),style:__assign(__assign({},e.style||{}),{width:(null==e?void 0:e.width)||defaultCellWidth})},I(e,a,l,r,t))}))})))))})}return(0,react_1.useImperativeHandle)(t,function(){return{scrollToByIndex:function(e,t){S.current.scrollToByIndex(e,t=void 0===t?300:t)},scrollToByHeaderEl:function(e,t){S.current.scrollToByHeaderEl(e,t=void 0===t?300:t)},scrollToByColumn:function(e){var t=E.current[0],e=t.wrapper.querySelector(".".concat(selectorPrefix,"-item .").concat(selectorPrefix,"-cell:nth-of-type(").concat(e,")"));t.scrollToElement(e)}}}),(0,react_1.useLayoutEffect)(function(){S.current.refresh(),C()}),react_1.default.createElement("div",{className:(0,classnames_1.default)(selectorPrefix,r||""),style:__assign({},l||{}),ref:P},(a=b(f),react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(selectorPrefix,"-indicator"),s||""),style:__assign({},n)},react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(selectorPrefix,"-fixedWrap"),c||""),style:__assign(__assign({},i||{}),{width:(null==a?void 0:a.width)||defaultCellWidth})},react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-item")},react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(selectorPrefix,"-cell"),(null==a?void 0:a.className)||""),style:__assign({},(null==a?void 0:a.style)||{})},I(a,_,-1,-1,-1)))),react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(selectorPrefix,"-autoWrap"),o||""),style:__assign({},u||{})},react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-item")},f.filter(function(e){return e!==a}).map(function(e,t){return react_1.default.createElement("div",{key:e.dataIndex,className:(0,classnames_1.default)("".concat(selectorPrefix,"-cell"),e.className||""),style:__assign(__assign({},e.style||{}),{width:(null==e?void 0:e.width)||defaultCellWidth})},I(e,_,-1,-1,t))}))))),(t={ref:S,className:(0,classnames_1.default)("".concat(selectorPrefix,"-master-inner"),v||""),style:p||{},fixedClassName:(0,classnames_1.default)(y||""),fixedStyle:h||{},innerClassName:(0,classnames_1.default)(x||""),innerStyle:g||{},onChange:e},react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(selectorPrefix,"-master"),d||""),style:__assign({},m||{})},react_1.default.createElement(adhere_ui_stickuplayout_1.default,__assign({},t),N.map(W)))))};exports.default=(0,react_1.memo)((0,react_1.forwardRef)(CascadeCompared));
//# sourceMappingURL=cascadecompared.js.map
