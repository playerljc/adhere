"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&("get"in i?t.__esModule:!i.writable&&!i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){e[n=void 0===n?r:n]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),react_1=__importStar(require("react")),adhere_util_resource_1=__importDefault(require("@baifendian/adhere-util-resource")),selectorPrefix="adhere-ui-back-top-animation",BackTopAnimation=(0,react_1.memo)(function(e){var t=e.className,r=e.style,n=e.zIndex,i=void 0===n?adhere_util_resource_1.default.Dict.value.ResourceNormalMaxZIndex.value:n,u=e.getContainer,c=e.onScrollTop,n=e.duration,l=void 0===n?300:n,a=(0,react_1.useRef)(null),s=(0,react_1.useRef)(null),d=(0,react_1.useRef)(!1);function f(){return"updateInterval"in screen?screen.updateInterval:16.7}return(0,react_1.useLayoutEffect)(function(){s.current=document.body.querySelector(".".concat(selectorPrefix,"-mask")),s.current||(s.current=document.createElement("div"),s.current.className="".concat(selectorPrefix,"-mask"),s.current.style.zIndex="".concat(i),document.body.appendChild(s.current))},[]),(0,react_1.useLayoutEffect)(function(){var e=u();function t(){0!==e.scrollTop?a.current.style.display="block":a.current.style.display="none"}return e.addEventListener("scroll",t),function(){return e.removeEventListener("scroll",t)}}),react_1.default.createElement("div",{ref:a,className:(0,classnames_1.default)(selectorPrefix,null!=t?t:""),style:__assign({zIndex:i},null!=r?r:{}),onClick:function(){d.current||e.onTrigger&&e.onTrigger().then(function(){d.current=!0,s.current.style.display="block";var r=u(),n=r.scrollTop,i=n,a=0,o=r.scrollHeight/(l/f()+(l%f()!=0?1:0));"undefined"!=typeof window&&window.requestAnimationFrame(function e(){function t(){s.current.style.display="none",d.current=!1}n<a?a<i+o?i=a:i+=o:i-o<a?i=a:i-=o,r.scrollTop=i,c&&c(i),n<a?a<=i?t():"undefined"!=typeof window&&window.requestAnimationFrame(e):i<=a?t():"undefined"!=typeof window&&window.requestAnimationFrame(e)})})}})});BackTopAnimation.displayName="BackTopAnimation",exports.default=BackTopAnimation;
//# sourceMappingURL=BackTopAnimation.js.map
