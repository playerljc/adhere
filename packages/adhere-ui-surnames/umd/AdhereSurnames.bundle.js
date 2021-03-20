/*! For license information please see AdhereSurnames.bundle.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AdhereSurnames=t():e.AdhereSurnames=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s="Xz12")}({"0vyi":function(e,t,n){e.exports={"adhere-ui-surnames":"RrPDFlKQhbKp1UHBxbSgR","adhere-ui-surnames-highlighted":"_1fo8PUNeKckkx5_gD5ueSK","adhere-ui-surnames-index":"_2gWDCQcVC9DHniOYwHqKmI","adhere-ui-surnames-index-inner":"DTmRh9LRzgzh2Lm05FnOl","adhere-ui-surnames-index-item":"_2Sf3JlsW7MYRGUcJnkqf5j","adhere-ui-surnames-content":"rdxWxH0IGyWS5rLCvniQ-","adhere-ui-surnames-group":"_3aRYa1sfh6-kYH-9dFqXCb","adhere-ui-surnames-group-title":"_1ohDQHD6ZR0j_IzmLmBXez","adhere-ui-surnames-config-position-right":"_2tJRuS_B4QdUDoLLq6Ai6S","adhere-ui-surnames-config-position-left":"_3JrEaE0m-NXg0DYeyzyDzC","adhere-ui-surnames-config-position-top":"_2I5o4TyuZk9WoarUKhfB-O","adhere-ui-surnames-config-position-bottom":"_3m2gxrysX0mNw606CC_fPt","adhere-ui-surnames-mask":"_2W2BUTNO-m8iPYrEKbTI1k"}},"6PeD":function(e,t,n){"use strict";e.exports=n("Rzou")},OTpg:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&e.push(a)}else if("object"===i)for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},Rzou:function(e,t,n){"use strict";var r=n("dy6R"),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var a=60109,u=60110,s=60112;t.Suspense=60113;var l=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),i=f("react.portal"),t.Fragment=f("react.fragment"),t.StrictMode=f("react.strict_mode"),t.Profiler=f("react.profiler"),a=f("react.provider"),u=f("react.context"),s=f("react.forward_ref"),t.Suspense=f("react.suspense"),l=f("react.memo"),c=f("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function m(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}function v(){}function g(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=m.prototype;var x=g.prototype=new v;x.constructor=g,r(x,m.prototype),x.isPureReactComponent=!0;var _={current:null},E=Object.prototype.hasOwnProperty,b={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var r,i={},a=null,u=null;if(null!=t)for(r in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(a=""+t.key),t)E.call(t,r)&&!b.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(1===s)i.children=n;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===i[r]&&(i[r]=s[r]);return{$$typeof:o,type:e,key:a,ref:u,props:i,_owner:_.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var S=/\/+/g;function w(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,n,r,a){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var s=!1;if(null===e)s=!0;else switch(u){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case i:s=!0}}if(s)return a=a(s=e),e=""===r?"."+w(s,0):r,Array.isArray(a)?(n="",null!=e&&(n=e.replace(S,"$&/")+"/"),P(a,t,n,"",(function(e){return e}))):null!=a&&(O(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(S,"$&/")+"/")+e)),t.push(a)),1;if(s=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var c=r+w(u=e[l],l);s+=P(u,t,n,c,a)}else if("function"==typeof(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=c.call(e),l=0;!(u=e.next()).done;)s+=P(u=u.value,t,n,c=r+w(u,l++),a);else if("object"===u)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function j(e,t,n){if(null==e)return e;var r=[],o=0;return P(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function M(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var C={current:null};function T(){var e=C.current;if(null===e)throw Error(p(321));return e}var D={ReactCurrentDispatcher:C,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:j,forEach:function(e,t,n){j(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return j(e,(function(){t++})),t},toArray:function(e){return j(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error(p(143));return e}},t.Component=m,t.PureComponent=g,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,t.cloneElement=function(e,t,n){if(null==e)throw Error(p(267,e));var i=r({},e.props),a=e.key,u=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,s=_.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)E.call(t,c)&&!b.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){l=Array(c);for(var f=0;f<c;f++)l[f]=arguments[f+2];i.children=l}return{$$typeof:o,type:e.type,key:a,ref:u,props:i,_owner:s}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:u,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=O,t.lazy=function(e){return{$$typeof:c,_payload:{_status:-1,_result:e},_init:M}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return T().useCallback(e,t)},t.useContext=function(e,t){return T().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return T().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return T().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return T().useLayoutEffect(e,t)},t.useMemo=function(e,t){return T().useMemo(e,t)},t.useReducer=function(e,t,n){return T().useReducer(e,t,n)},t.useRef=function(e){return T().useRef(e)},t.useState=function(e){return T().useState(e)},t.version="17.0.1"},"X8s+":function(e,t,n){"use strict";var r=n("uhx6");function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},Xz12:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),n("0vyi");var o=r(n("vh+i"));t.default=o.default},dy6R:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,u,s=a(e),l=1;l<arguments.length;l++){for(var c in n=Object(arguments[l]))o.call(n,c)&&(s[c]=n[c]);if(r){u=r(n);for(var f=0;f<u.length;f++)i.call(n,u[f])&&(s[u[f]]=n[u[f]])}}return s}},hvnN:function(e,t,n){e.exports=n("X8s+")()},uhx6:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"vh+i":function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=a(n("6PeD")),s=a(n("hvnN")),l=a(n("OTpg")),c="adhere-ui-surnames";function f(e,t){if(!e||!t)return null;if(-1!==e.className.indexOf(t))return e;for(var n=e;(n=n.parentElement)&&-1===n.className.indexOf(t)&&n!==document.body;);return n?n===document.body?null:n:null}var d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.key=!1,t.isMouseClicked=!1,t.isMouseMoved=!1,t.onClick=function(e){e.preventDefault(),e.stopPropagation(),t.clickDetail(e)},t.onTouchmove=function(e){e.preventDefault();var n=e.changedTouches[0].pageY,r=e.changedTouches[0].pageX,o=f(e.target,c+"-index-item");t.curIndexName=o.dataset.name,t.moveDetail(r,n)},t.onTouchend=function(){t.highlightedEl.style.display="none",t.highlightedEl.innerText="",t.highlightedEl.style.transform="translate3d(0,0,0)"},t.onMousedown=function(e){e.preventDefault(),t.startY=e.pageY,t.startX=e.pageX;var n=f(e.target,c+"-index-item");console.log("按下获取索引名称",n.dataset.name),t.curIndexName=n.dataset.name,t.isMouseClicked=!0},t.onMousemove=function(e){if(!t.isMouseClicked)return!1;t.isMouseMoved=!0,e.preventDefault();var n=e.pageY,r=e.pageX;t.moveDetail(r,n)},t.onMouseleave=function(){t.isMouseClicked=!1,t.isMouseMoved=!1,t.highlightedEl.style.display="none",t.highlightedEl.innerText="",t.highlightedEl.style.transform="translate3d(0,0,0)"},t.onMouseup=function(e){if(t.isMouseMoved)return t.isMouseClicked=!1,t.isMouseMoved=!1,t.highlightedEl.style.display="none",t.highlightedEl.innerText="",t.highlightedEl.style.transform="translate3d(0,0,0)",!1;e.preventDefault(),t.clickDetail(e)},t.onResize=function(){t.update()},t}return o(t,e),t.prototype.componentDidMount=function(){this.initEvent(),this.createMask(),this.adapterDimension(),this.createIndexPosition()},t.prototype.componentDidUpdate=function(e,t,n){this.adapterDimension(),this.createIndexPosition()},t.prototype.componentWillUnmount=function(){this.maskEl&&this.maskEl.parentElement.removeChild(this.maskEl)},t.prototype.clickDetail=function(e){var t=e.target;if(e.preventDefault(),this.key)return!1;this.key=!0,this.maskEl.style.display="block",this.scrollToAnimation(t.dataset.name)},t.prototype.moveDetail=function(e,t){var n=this.findIndex(e,t);if(n){if(console.log(n.name),this.highlightedEl.innerText=n.name,this.highlightedEl.style.display="block","vertical"===this.getDirection()){var r=n.offsetTop+Math.floor(n.height/2);this.highlightedEl.style.transform="translate3d(0,"+r+"px,0)"}else{var o=n.offsetLeft+n.width;this.highlightedEl.style.transform="translate3d("+o+"px,0,0)"}this.scrollTo(n.name)}},t.prototype.initEvent=function(){"ontouchend"in document?(this.indexInnerEl.addEventListener("click",this.onClick),this.indexInnerEl.addEventListener("touchmove",this.onTouchmove),this.indexInnerEl.addEventListener("touchend",this.onTouchend)):(this.indexInnerEl.addEventListener("mousedown",this.onMousedown),this.indexInnerEl.addEventListener("mousemove",this.onMousemove),this.indexInnerEl.addEventListener("mouseleave",this.onMouseleave),this.indexInnerEl.addEventListener("mouseup",this.onMouseup),window.addEventListener("resize",this.onResize))},t.prototype.adapterDimension=function(){var e,t,n,r;"vertical"===this.getDirection()?(null===(e=this.el)||void 0===e||(e.style.height=(null===(t=this.indexInnerEl)||void 0===t?void 0:t.offsetHeight)+50+"px"),null===(n=this.el)||void 0===n||(n.style.width="100%")):null===(r=this.el)||void 0===r||(r.style.height="100%")},t.prototype.createIndexPosition=function(){var e=this.indexInnerEl.querySelectorAll(".adhere-ui-surnames-index-item");this.indexPositionMap=[];for(var t=0;t<e.length;t++){var n=e[t],r=n.dataset.name,o=n.getBoundingClientRect();this.indexPositionMap.push({name:r,top:o.top,bottom:o.bottom,left:o.left,right:o.right,offsetTop:n.offsetTop,offsetLeft:n.offsetLeft,width:n.offsetWidth,height:n.offsetHeight})}console.log(this.indexPositionMap)},t.prototype.createMask=function(){var e=document.createElement("div");e.innerHTML="<div class='adhere-ui-surnames-mask'></div>",this.maskEl=e.firstElementChild,document.body.appendChild(this.maskEl)},t.prototype.scrollToAnimation=function(e,t){void 0===t&&(t=100);var n=this,r=this.props,o=r.onScroll,i=r.onBeforeScroll,a=n.contentEl.querySelector(".adhere-ui-surnames-group-title[data-name='"+e+"']"),u=n.contentEl.scrollTop,s=u,l=a.offsetTop,c=screen.updateInterval,f=n.el.scrollHeight/((100|t)/(c||16.7)+((100|t)%(c||16.7)!=0?1:0));i&&i(e),window.requestAnimationFrame((function t(){function r(){n.key=!1,n.isMouseClicked=!1,n.maskEl.style.display="none",o&&o(e)}u<l?s+f>l?s=l:s+=f:s-f<l?s=l:s-=f,n.contentEl.scrollTop=s,u<l?s>=l?r():window.requestAnimationFrame(t):s<=l?r():window.requestAnimationFrame(t)}))},t.prototype.scrollTo=function(e){this.contentEl.scrollTop=this.contentEl.querySelector(".adhere-ui-surnames-group-title[data-name='"+e+"']").offsetTop;var t=this.props.onScroll;t&&t(e)},t.prototype.getDirection=function(){var e=this.props.position;return"left"===e||"right"===e?"vertical":"horizontal"},t.prototype.findIndex=function(e,t){var n=this,r=this.getDirection(),o="vertical"===r?t-this.startY:e-this.startX,i=this.indexPositionMap.find((function(e){return e.name===n.curIndexName}));console.log("获取增量",o),console.log("移动获取当前索引信息",i);for(var a,u,s=0,l=this.indexPositionMap.length-1;s<=l&&s<=this.indexPositionMap.length-1&&l<=this.indexPositionMap.length-1;){a=l+s>>1;var c=this.indexPositionMap[a],f=void 0,d=void 0,p=void 0,h=void 0;if("vertical"===r?(f=i.top+o,d=i.bottom+o,p=c.top,h=c.bottom):(f=i.left+o,d=i.right+o,p=c.left,h=c.right),console.log(f,d,p,h),f>=p&&f<=h){u=c;break}f<p?l=a-1:s=a+1}return u||null},t.prototype.update=function(){this.adapterDimension(),this.createIndexPosition()},t.prototype.renderIndex=function(){return this.props.indexes.map((function(e){return u.default.createElement("a",{key:e.index,className:c+"-index-item","data-name":e.index},e.renderIndex?e.renderIndex(e):e.index)}))},t.prototype.renderContent=function(){var e=this.props,t=e.indexes;return e.dataSource.map((function(e){var n=t.find((function(t){return t.index===e.index}));return u.default.createElement("div",{key:e.index,className:c+"-group"},u.default.createElement("a",{className:c+"-group-title","data-name":e.index},n.renderTitle?n.renderTitle(e):n.index),u.default.createElement("div",{className:c+"-group-inner"},n.renderContent?n.renderContent(e):null))}))},t.prototype.render=function(){var e=this,t=this.props,n=t.position,r=t.className,o=t.style;return u.default.createElement("div",{className:l.default(c,c+"-config-position-"+n,r.split(" ")),style:i({},o),ref:function(t){return e.el=t}},u.default.createElement("div",{className:c+"-highlighted",ref:function(t){return e.highlightedEl=t}}),u.default.createElement("div",{className:c+"-content",ref:function(t){return e.contentEl=t}},this.renderContent()),u.default.createElement("div",{className:c+"-index",ref:function(t){return e.indexEl=t}},u.default.createElement("div",{className:c+"-index-inner",ref:function(t){return e.indexInnerEl=t}},this.renderIndex())))},t}(u.default.Component);d.defaultProps={className:"",style:{},position:"right",indexes:[],dataSource:[],onBeforeScroll:function(){},onScroll:function(){}},d.propTypes={className:s.default.string,style:s.default.object,position:s.default.oneOf(["top","right","bottom","left"]),indexes:s.default.arrayOf(s.default.shape({index:s.default.string,renderIndex:s.default.func,renderTitle:s.default.func,renderContent:s.default.func})),dataSource:s.default.arrayOf(s.default.shape({index:s.default.string,data:s.default.arrayOf(s.default.object)})),onBeforeScroll:s.default.func,onScroll:s.default.func},t.default=d}}).default}));