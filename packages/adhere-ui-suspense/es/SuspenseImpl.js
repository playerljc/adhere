var __extends=this&&this.__extends||function(){var o=function(t,e){return(o=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,e){t.__proto__=e}:function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}))(t,e)};return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}();import SuspenseAsync from"./Async";import Suspense from"./Suspense";import SuspenseSync from"./Sync";var SuspenseImpl=function(e){function t(t){return e.call(this,t)||this}return __extends(t,e),t.prototype.fetchData=function(){return Promise.resolve()},t.prototype.renderInner=function(){return null},t.prototype.showLoading=function(){return!0},t.prototype.onFirstFetchDataAfter=function(t){return Promise.resolve(void 0)},t.prototype.onFirstFetchDataBefore=function(){return Promise.resolve(void 0)},t.displayName="SuspenseImpl",t.Sync=SuspenseSync,t.ASync=SuspenseAsync,t}(Suspense);export default SuspenseImpl;
//# sourceMappingURL=SuspenseImpl.js.map
