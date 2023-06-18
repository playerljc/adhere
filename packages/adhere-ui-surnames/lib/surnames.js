"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var l=Object.getOwnPropertyDescriptor(t,r);l&&("get"in l?t.__esModule:!l.writable&&!l.configurable)||(l={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,l)}:function(e,t,r,n){e[n=void 0===n?r:n]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),react_1=__importStar(require("react")),adhere_util_1=__importDefault(require("@baifendian/adhere-util")),selectorPrefix="adhere-ui-surnames",DURATION=100,Surnames=function(e,C){var t=e.position,r=void 0===t?"right":t,t=e.className,t=void 0===t?"":t,n=e.style,n=void 0===n?{}:n,l=e.indexes,c=void 0===l?[]:l,l=e.dataSource,u=void 0===l?[]:l,o=e.onScroll,i=e.onBeforeScroll,d=(0,react_1.useRef)(null),a=(0,react_1.useRef)(null),s=(0,react_1.useRef)(null),l=(0,react_1.useRef)(null),f=(0,react_1.useRef)(null),v=(0,react_1.useRef)(null),m=(0,react_1.useRef)(!1),p=(0,react_1.useRef)(!1),_=(0,react_1.useRef)(!1),h=(0,react_1.useRef)(0),g=(0,react_1.useRef)(0),x=(0,react_1.useRef)(""),y=(0,react_1.useRef)([]);function E(){return"left"===r||"right"===r?"vertical":"horizontal"}function w(){"vertical"===E()?(d.current.style.height="".concat(f.current.offsetHeight+50,"px"),d.current.style.width="100%"):d.current.style.height="100%"}var e=(0,react_1.useCallback)(function(){return u.map(function(t){var e=c.find(function(e){return e.index===t.index});return react_1.default.createElement("div",{key:t.index,className:"".concat(selectorPrefix,"-group")},react_1.default.createElement("a",{className:"".concat(selectorPrefix,"-group-title"),"data-name":t.index},null!=e&&e.renderTitle?e.renderTitle(t):null==e?void 0:e.index),react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-group-inner")},null!=e&&e.renderContent?null==e?void 0:e.renderContent(t):null))})},[u,c]),j=(0,react_1.useCallback)(function(){return c.map(function(e){return react_1.default.createElement("a",{key:e.index,className:"".concat(selectorPrefix,"-index-item"),"data-name":e.index},e.renderIndex?e.renderIndex(e):e.index)})},[c]);function T(){var e,t,r=null==(t=null==(e=f.current)?void 0:e.querySelectorAll)?void 0:t.call(e,".".concat(selectorPrefix,"-index-item"));y.current=[];for(var n=0;n<r.length;n++){var l=r[n],c=l.dataset.name,u=l.getBoundingClientRect();y.current.push({name:c,top:u.top,bottom:u.bottom,left:u.left,right:u.right,offsetTop:l.offsetTop,offsetLeft:l.offsetLeft,width:l.offsetWidth,height:l.offsetHeight})}}function P(e){var t=e.target;e.preventDefault(),m.current||(m.current=!0,v.current.style.display="block",L(t.dataset.name))}function b(e,t){e=function(e,t){for(var r,n=E(),l="vertical"===n?t-h.current:e-g.current,c=y.current.find(function(e){return e.name===x.current}),u=0,a=y.current.length-1;u<=a&&u<=y.current.length-1&&a<=y.current.length-1;){var o,i=y.current[o=a+u>>1],d=void 0,s=void 0,f=void 0,f="vertical"===n?(d=c.top+l,c.bottom,s=i.top,i.bottom):(d=c.left+l,c.right,s=i.left,i.right);if(s<=d&&d<=f){r=i;break}d<s?a=o-1:u=1+o}return r||null}(e,t);e&&(a.current.innerText=e.name,a.current.style.display="block","vertical"===E()?(t=e.offsetTop+Math.floor(e.height/2),a.current.style.transform="translate3d(0,".concat(t,"px,0)")):(t=e.offsetLeft+e.width,a.current.style.transform="translate3d(".concat(t,"px,0,0)")),D(e.name))}function L(r,e){void 0===e&&(e=100);var t=null==(t=null==(u=s.current)?void 0:u.querySelector)?void 0:t.call(u,".".concat(selectorPrefix,"-group-title[data-name='").concat(r,"']")),n=null==(u=s.current)?void 0:u.scrollTop,l=n,c=t.offsetTop,u=screen.updateInterval,a=d.current.scrollHeight/((DURATION|e)/(u||16.7)+((DURATION|e)%(u||16.7)!=0?1:0));i&&i(r),"undefined"!=typeof window&&window.requestAnimationFrame(function e(){function t(){m.current=!1,p.current=!1,v.current.style.display="none",o&&o(r)}n<c?c<l+a?l=c:l+=a:l-a<c?l=c:l-=a,s.current.scrollTop=l,n<c?c<=l?t():"undefined"!=typeof window&&window.requestAnimationFrame(e):l<=c?t():"undefined"!=typeof window&&window.requestAnimationFrame(e)})}function D(e){var t,r;s.current.scrollTop=(null==(r=null==(t=s.current)?void 0:t.querySelector)?void 0:r.call(t,".".concat(selectorPrefix,"-group-title[data-name='").concat(e,"']"))).offsetTop,o&&o(e)}function R(e){e.preventDefault(),e.stopPropagation(),P(e)}function N(e){e.preventDefault();var t=e.changedTouches[0].pageY,r=e.changedTouches[0].pageX,e=e.target,e=adhere_util_1.default.getTopDom(e,"".concat(selectorPrefix,"-index-item"));x.current=e.dataset.name,b(r,t)}function O(){a.current.style.display="none",a.current.innerText="",a.current.style.transform="translate3d(0,0,0)"}function S(e){e.preventDefault(),h.current=e.pageY,g.current=e.pageX;e=e.target,e=adhere_util_1.default.getTopDom(e,"".concat(selectorPrefix,"-index-item"));x.current=null==e?void 0:e.dataset.name,p.current=!0}function k(e){if(!p.current)return!1;_.current=!0,e.preventDefault();var t=e.pageY;b(e.pageX,t)}function q(){p.current=!1,_.current=!1,a.current.style.display="none",a.current.innerText="",a.current.style.transform="translate3d(0,0,0)"}function M(e){if(_.current)return p.current=!1,_.current=!1,a.current.style.display="none",a.current.innerText="",!(a.current.style.transform="translate3d(0,0,0)");e.preventDefault(),P(e)}function A(){w(),T()}return(0,react_1.useImperativeHandle)(C,function(){return{scrollToAnimation:L,scrollTo:D}}),(0,react_1.useLayoutEffect)(function(){var e;return(e=document.createElement("div")).innerHTML="<div class='".concat(selectorPrefix,"-mask'></div>"),v.current=e.firstElementChild,document.body.appendChild(v.current),w(),T(),function(){var e,t;null!=(t=null==(e=null==(e=v.current)?void 0:e.parentElement)?void 0:e.removeChild)&&t.call(e,v.current)}},[]),(0,react_1.useLayoutEffect)(function(){var e,t;return adhere_util_1.default.isTouch()?(null!=(t=null==(e=f.current)?void 0:e.addEventListener)&&t.call(e,"click",R),null!=(e=null==(t=f.current)?void 0:t.addEventListener)&&e.call(t,"touchmove",N),null!=(t=null==(e=f.current)?void 0:e.addEventListener)&&t.call(e,"touchend",O)):(null!=(e=null==(t=f.current)?void 0:t.addEventListener)&&e.call(t,"mousedown",S),null!=(t=null==(e=f.current)?void 0:e.addEventListener)&&t.call(e,"mousemove",k),null!=(e=null==(t=f.current)?void 0:t.addEventListener)&&e.call(t,"mouseleave",q),null!=(t=null==(e=f.current)?void 0:e.addEventListener)&&t.call(e,"mouseup",M),"undefined"!=typeof window&&window.addEventListener("resize",A)),w(),T(),function(){var e,t;null!=(t=null==(e=f.current)?void 0:e.removeEventListener)&&t.call(e,"click",R),null!=(e=null==(t=f.current)?void 0:t.removeEventListener)&&e.call(t,"touchmove",N),null!=(t=null==(e=f.current)?void 0:e.removeEventListener)&&t.call(e,"touchend",O),null!=(e=null==(t=f.current)?void 0:t.removeEventListener)&&e.call(t,"mousedown",S),null!=(t=null==(e=f.current)?void 0:e.removeEventListener)&&t.call(e,"mousemove",k),null!=(e=null==(t=f.current)?void 0:t.removeEventListener)&&e.call(t,"mouseleave",q),null!=(t=null==(e=f.current)?void 0:e.removeEventListener)&&t.call(e,"mouseup",M),"undefined"!=typeof window&&window.removeEventListener("resize",A)}}),react_1.default.createElement("div",{className:(0,classnames_1.default)(selectorPrefix,"".concat(selectorPrefix,"-config-position-").concat(r),null!=t?t:""),style:null!=n?n:{},ref:d},react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-highlighted"),ref:a}),react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-content"),ref:s},e()),react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-index"),ref:l},react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-index-inner"),ref:f},j())))};exports.default=(0,react_1.memo)((0,react_1.forwardRef)(Surnames));
//# sourceMappingURL=surnames.js.map
