/*! For license information please see AdhereSlideLayout.bundle.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AdhereSlideLayout=t():e.AdhereSlideLayout=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s="Xz12")}({"0vyi":function(e,t,n){},"6PeD":function(e,t,n){"use strict";e.exports=n("Rzou")},OTpg:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)&&r.length){var l=o.apply(null,r);l&&e.push(l)}else if("object"===s)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},Rzou:function(e,t,n){"use strict";var r=n("dy6R"),o=60103,s=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var l=60109,i=60110,a=60112;t.Suspense=60113;var u=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),s=f("react.portal"),t.Fragment=f("react.fragment"),t.StrictMode=f("react.strict_mode"),t.Profiler=f("react.profiler"),l=f("react.provider"),i=f("react.context"),a=f("react.forward_ref"),t.Suspense=f("react.suspense"),u=f("react.memo"),p=f("react.lazy")}var c="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function m(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||y}function v(){}function g(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=m.prototype;var b=g.prototype=new v;b.constructor=g,r(b,m.prototype),b.isPureReactComponent=!0;var E={current:null},_=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var r,s={},l=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(l=""+t.key),t)_.call(t,r)&&!x.hasOwnProperty(r)&&(s[r]=t[r]);var a=arguments.length-2;if(1===a)s.children=n;else if(1<a){for(var u=Array(a),p=0;p<a;p++)u[p]=arguments[p+2];s.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===s[r]&&(s[r]=a[r]);return{$$typeof:o,type:e,key:l,ref:i,props:s,_owner:E.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,n,r,l){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var a=!1;if(null===e)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case o:case s:a=!0}}if(a)return l=l(a=e),e=""===r?"."+S(a,0):r,Array.isArray(l)?(n="",null!=e&&(n=e.replace(O,"$&/")+"/"),C(l,t,n,"",(function(e){return e}))):null!=l&&(w(l)&&(l=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,n+(!l.key||a&&a.key===l.key?"":(""+l.key).replace(O,"$&/")+"/")+e)),t.push(l)),1;if(a=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var p=r+S(i=e[u],u);a+=C(i,t,n,p,l)}else if("function"==typeof(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=c&&e[c]||e["@@iterator"])?e:null}(e)))for(e=p.call(e),u=0;!(i=e.next()).done;)a+=C(i=i.value,t,n,p=r+S(i,u++),l);else if("object"===i)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function j(e,t,n){if(null==e)return e;var r=[],o=0;return C(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function I(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var z={current:null};function P(){var e=z.current;if(null===e)throw Error(d(321));return e}var A={ReactCurrentDispatcher:z,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:E,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:j,forEach:function(e,t,n){j(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return j(e,(function(){t++})),t},toArray:function(e){return j(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(d(143));return e}},t.Component=m,t.PureComponent=g,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,n){if(null==e)throw Error(d(267,e));var s=r({},e.props),l=e.key,i=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,a=E.current),void 0!==t.key&&(l=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(p in t)_.call(t,p)&&!x.hasOwnProperty(p)&&(s[p]=void 0===t[p]&&void 0!==u?u[p]:t[p])}var p=arguments.length-2;if(1===p)s.children=n;else if(1<p){u=Array(p);for(var f=0;f<p;f++)u[f]=arguments[f+2];s.children=u}return{$$typeof:o,type:e.type,key:l,ref:i,props:s,_owner:a}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:I}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return P().useCallback(e,t)},t.useContext=function(e,t){return P().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return P().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return P().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return P().useLayoutEffect(e,t)},t.useMemo=function(e,t){return P().useMemo(e,t)},t.useReducer=function(e,t,n){return P().useReducer(e,t,n)},t.useRef=function(e){return P().useRef(e)},t.useState=function(e){return P().useState(e)},t.version="17.0.1"},"X8s+":function(e,t,n){"use strict";var r=n("uhx6");function o(){}function s(){}s.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,s,l){if(l!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:o};return n.PropTypes=n,n}},Xz12:function(e,t,n){"use strict";n.r(t);n("0vyi");var r,o=n("6PeD"),s=n.n(o),l=n("hvnN"),i=n.n(l),a=n("OTpg"),u=n.n(a),p=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.positionConfig={},t}return p(t,e),t.prototype.componentWillReceiveProps=function(e,t){e.collapse!==this.state.collapse&&this.setState({collapse:e.collapse})},t.prototype.componentDidMount=function(){var e,t,n=this;this.props.mask&&(this.maskEl=function(e,t){var n=document.createElement("div");n.innerHTML="<div class='adhere-ui-slidelayout-mask'></div>";var r=n.firstElementChild;return r.style.zIndex=e-1,r.addEventListener("click",(function(){t()})),r}(this.props.zIndex,(function(){n.close()})),null===(t=null===(e=this.el)||void 0===e?void 0:e.parentElement)||void 0===t||t.insertBefore(this.maskEl,this.el)),this.initial()},t.prototype.componentDidUpdate=function(e,t,n){t.collapse!==this.state.collapse&&(this.state.collapse?this.positionConfig.show[this.props.direction]():this.positionConfig.close[this.props.direction]())},t.prototype.componentWillUnmount=function(){this.maskEl&&this.maskEl.parentElement.removeChild(this.maskEl)},t.prototype.getDuration=function(e){return null!=e?e:this.props.time},t.prototype.initial=function(){var e,t,n=this.el,r=this.props,o=r.direction,s=r.width,l=r.height;"left"===o||"right"===o?(null==n||(n.style.height="100%"),s?null==n||(n.style.width=s):null==n||(n.style.width=.9*(null===(e=null==n?void 0:n.parentElement)||void 0===e?void 0:e.offsetWidth)+"px")):(null==n||(n.style.width="100%"),l?null==n||(n.style.height=l):null==n||(n.style.height=.3*(null===(t=null==n?void 0:n.parentElement)||void 0===t?void 0:t.offsetHeight)+"px")),this.positionConfig.init[this.props.direction](),this.state.collapse&&this.positionConfig.show[this.props.direction](0)},t.prototype.show=function(){var e=this,t=this.props.onBeforeShow;t&&t();var n=this.props.direction;this.setState({collapse:!0},(function(){e.positionConfig.show[n]()}))},t.prototype.close=function(){var e=this,t=this.props.onBeforeClose;t&&t();var n=this.props.direction;this.setState({collapse:!1},(function(){e.positionConfig.close[n]()}))},t}(s.a.Component),c=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),d=function(){return(d=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},y=function(e){function t(t){var n=e.call(this,t)||this;return n.positionConfig={init:{left:function(){O(n.el,"-100%","0","0","0")},right:function(){var e,t;O(n.el,(null===(t=null===(e=n.el)||void 0===e?void 0:e.parentElement)||void 0===t?void 0:t.offsetWidth)+"px","0","0","0")},top:function(){O(n.el,"0","-100%","0","0")},bottom:function(){var e,t;O(n.el,"0",(null===(t=null===(e=n.el)||void 0===e?void 0:e.parentElement)||void 0===t?void 0:t.offsetHeight)+"px","0","0")}},show:{left:function(e){O(n.el,"0","0","0",n.getDuration(e)+"ms",n.props.onAfterShow),n.maskEl&&(n.maskEl.style.display="block")},right:function(e){var t,r;O(n.el,(null===(r=null===(t=n.el)||void 0===t?void 0:t.parentElement)||void 0===r?void 0:r.offsetWidth)-n.el.offsetWidth+"px","0","0",n.getDuration(e)+"ms",n.props.onAfterShow),n.maskEl&&(n.maskEl.style.display="block")},top:function(e){O(n.el,"0","0","0",n.getDuration(e)+"ms",n.props.onAfterShow),n.maskEl&&(n.maskEl.style.display="block")},bottom:function(e){var t,r;O(n.el,"0",(null===(r=null===(t=n.el)||void 0===t?void 0:t.parentElement)||void 0===r?void 0:r.offsetHeight)-n.el.offsetHeight+"px","0",n.getDuration(e)+"ms",n.props.onAfterShow),n.maskEl&&(n.maskEl.style.display="block")}},close:{left:function(e){O(n.el,"-100%","0","0",n.getDuration(e)+"ms",n.props.onAfterClose),n.maskEl&&(n.maskEl.style.display="none")},right:function(e){var t,r;O(n.el,(null===(r=null===(t=n.el)||void 0===t?void 0:t.parentElement)||void 0===r?void 0:r.offsetWidth)+"px","0","0",n.getDuration(e)+"ms",n.props.onAfterClose),n.maskEl&&(n.maskEl.style.display="none")},top:function(e){var t,r;O(n.el,"0","-"+(null===(r=null===(t=n.el)||void 0===t?void 0:t.parentElement)||void 0===r?void 0:r.offsetHeight)+"px","0",n.getDuration(e)+"ms",n.props.onAfterClose),n.maskEl&&(n.maskEl.style.display="none")},bottom:function(e){var t,r;O(n.el,"0",(null===(r=null===(t=n.el)||void 0===t?void 0:t.parentElement)||void 0===r?void 0:r.offsetHeight)+"px","0",n.getDuration(e)+"ms",n.props.onAfterClose),n.maskEl&&(n.maskEl.style.display="none")}}},n.state={collapse:n.props.collapse},n}return c(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.className,r=t.style,o=t.zIndex,l=t.direction,i=t.children;return s.a.createElement("div",{className:u()("adhere-ui-slidelayout-overlay",l,n.split(" ")),style:d(d({},r),{zIndex:o}),ref:function(t){return e.el=t}},i)},t}(f);y.defaultProps={className:"",style:{},width:"80%",height:"40%",mask:!0,zIndex:9999,time:300,direction:"left",collapse:!1},y.propTypes={className:i.a.string,style:i.a.object,width:i.a.oneOfType([i.a.string,i.a.number]),height:i.a.oneOfType([i.a.string,i.a.number]),mask:i.a.bool,zIndex:i.a.number,time:i.a.number,direction:i.a.oneOf(["left","right","top","bottom"]),collapse:i.a.bool,onAfterShow:i.a.func,onAfterClose:i.a.func,onBeforeShow:i.a.func,onBeforeClose:i.a.func};var h=y,m=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),v=function(){return(v=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},g="adhere-ui-slidelayout-push",b=function(e){function t(t){var n=e.call(this,t)||this;return n.positionConfig={init:{left:function(){n.el.style.left="0",n.pSlaveEl.style.left=n.el.offsetWidth+"px",O(n.pMasterEl,"-"+n.el.offsetWidth+"px","0","0","0")},right:function(){n.el.style.right="0",n.pSlaveEl.style.right=n.el.offsetWidth+"px",O(n.pMasterEl,n.el.offsetWidth+"px","0","0","0")}},show:{left:function(e){O(n.pMasterEl,"0","0","0",n.getDuration(e)+"ms",n.props.onAfterShow),n.maskEl&&(n.maskEl.style.display="block")},right:function(e){O(n.pMasterEl,"0","0","0",n.getDuration(e)+"ms",n.props.onAfterShow),n.maskEl&&(n.maskEl.style.display="block")}},close:{left:function(e){O(n.pMasterEl,"-"+n.el.offsetWidth+"px","0","0",n.getDuration(e)+"ms",n.props.onAfterClose),n.maskEl&&(n.maskEl.style.display="none")},right:function(e){O(n.pMasterEl,n.el.offsetWidth+"px","0","0",n.getDuration(e)+"ms",n.props.onAfterClose),n.maskEl&&(n.maskEl.style.display="none")}}},n.state={collapse:n.props.collapse},n}return m(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.masterClassName,r=t.masterStyle,o=t.className,l=t.style,i=t.slaveClassName,a=t.slaveStyle,p=t.direction,f=t.slide,c=t.master,d=t.zIndex;return s.a.createElement("div",{className:u()(g+"-master",n.split(" ")),style:v(v({},r),{zIndex:d-1}),ref:function(t){return e.pMasterEl=t}},s.a.createElement("div",{className:u()(g,p,o.split(" ")),style:v(v({},l),{zIndex:d}),ref:function(t){return e.el=t}},f),s.a.createElement("div",{className:u()(g+"-slave",i.split(" ")),style:v(v({},a),{zIndex:d-2}),ref:function(t){return e.pSlaveEl=t}},c))},t}(f);b.defaultProps={masterClassName:"",masterStyle:{},className:"",style:{},slaveClassName:"",slaveStyle:{},width:"80%",height:"40%",mask:!0,zIndex:9999,time:300,direction:"left",collapse:!1,Slide:null,master:null},b.propTypes={masterClassName:i.a.string,masterStyle:i.a.object,className:i.a.string,style:i.a.object,slaveClassName:i.a.string,slaveStyle:i.a.object,width:i.a.oneOfType([i.a.string,i.a.number]),height:i.a.oneOfType([i.a.string,i.a.number]),mask:i.a.bool,zIndex:i.a.number,time:i.a.number,direction:i.a.oneOf(["left","right"]),collapse:i.a.bool,onAfterShow:i.a.func,onAfterClose:i.a.func,onBeforeShow:i.a.func,onBeforeClose:i.a.func,slide:i.a.node,master:i.a.node};var E=b,_=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),x=function(){return(x=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},k="adhere-ui-slidelayout-reveal",w=function(e){function t(t){var n=e.call(this,t)||this;return n.positionConfig={init:{left:function(){n.el.style.zIndex=n.props.zIndex,n.rMasterEl.style.zIndex=n.props.zIndex+1,n.el.style.left="0"},right:function(){n.el.style.zIndex=n.props.zIndex,n.rMasterEl.style.zIndex=n.props.zIndex+1,n.el.style.right="0"}},show:{left:function(e){n.el.style.zIndex=n.props.zIndex,n.maskEl.style.zIndex=n.props.zIndex-1,n.rMasterEl.style.zIndex=n.props.zIndex-2,O(n.rMasterEl,n.el.offsetWidth+"px","0","0",n.getDuration(e)+"ms",n.props.onAfterShow),n.maskEl&&(n.maskEl.style.display="block")},right:function(e){n.el.style.zIndex=n.props.zIndex,n.maskEl.style.zIndex=n.props.zIndex-1,n.rMasterEl.style.zIndex=n.props.zIndex-2,O(n.rMasterEl,"-"+n.el.offsetWidth+"px","0","0",n.getDuration(e)+"ms",n.props.onAfterShow),n.maskEl&&(n.maskEl.style.display="block")}},close:{left:function(e){n.el.style.zIndex=n.props.zIndex,n.rMasterEl.style.zIndex=n.props.zIndex+1,O(n.rMasterEl,"0","0","0",n.getDuration(e)+"ms",n.props.onAfterClose),n.maskEl&&(n.maskEl.style.display="none")},right:function(e){n.el.style.zIndex=n.props.zIndex,n.rMasterEl.style.zIndex=n.props.zIndex+1,O(n.rMasterEl,"0","0","0",n.getDuration(e)+"ms",n.props.onAfterClose),n.maskEl&&(n.maskEl.style.display="none")}}},n.state={collapse:n.props.collapse},n}return _(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.masterClassName,r=t.masterStyle,o=t.slaveClassName,l=t.slaveStyle,i=t.direction,a=t.slide,p=t.master,f=t.zIndex;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:u()(""+k,i,o.split(" ")),style:x(x({},l),{zIndex:f}),ref:function(t){return e.el=t}},a),s.a.createElement("div",{className:u()(k+"-master",n.split(" ")),style:x(x({},r),{zIndex:f+1}),ref:function(t){return e.rMasterEl=t}},p))},t}(f);w.defaultProps={masterClassName:"",masterStyle:{},className:"",style:{},slaveClassName:"",slaveStyle:{},width:"80%",height:"40%",mask:!0,zIndex:9999,time:300,direction:"left",collapse:!1,slide:null,master:null},w.propTypes={masterClassName:i.a.string,masterStyle:i.a.object,className:i.a.string,style:i.a.object,slaveClassName:i.a.string,slaveStyle:i.a.object,width:i.a.oneOfType([i.a.string,i.a.number]),height:i.a.oneOfType([i.a.string,i.a.number]),mask:i.a.bool,zIndex:i.a.number,time:i.a.number,direction:i.a.oneOf(["left","right"]),collapse:i.a.bool,onAfterShow:i.a.func,onAfterClose:i.a.func,onBeforeShow:i.a.func,onBeforeClose:i.a.func,slide:i.a.node,master:i.a.node};function O(e,t,n,r,o,s){void 0===o&&(o="0"),s&&s(e),e.style.transform=e.style.webkitTransform="translate3d("+t+","+n+","+r+")",e.style.transition=e.style.webkitTransition="all "+o+" ease"}var S={Overlay:h,Push:E,Revolving:w};t.default=S},dy6R:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;function l(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,i,a=l(e),u=1;u<arguments.length;u++){for(var p in n=Object(arguments[u]))o.call(n,p)&&(a[p]=n[p]);if(r){i=r(n);for(var f=0;f<i.length;f++)s.call(n,i[f])&&(a[i[f]]=n[i[f]])}}return a}},hvnN:function(e,t,n){e.exports=n("X8s+")()},uhx6:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}).default}));