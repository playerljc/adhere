"use strict";var __extends=function(){var a=function(e,t){return(a=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){e.__proto__=t}:function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}))(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),__assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&("get"in n?t.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.SearchTableStateImplement=exports.selectorPrefix=void 0,__importDefault(require("classnames"))),react_1=__importStar(require("react")),serviceregister_1=__importDefault(require("@ctsj/state/lib/middleware/saga/serviceregister")),react_2=require("@ctsj/state/lib/react"),SearchTable_1=require("./SearchTable"),SearchTableImplement_1=require("./SearchTableImplement"),SearchTableStateImplement=(exports.selectorPrefix="adhere-ui-searchstatetableimplement",function(c){function e(e){var t=c.call(this,e)||this,e=e.$state,r=e.serviceNames,a=e.middleWares,n=e.reducer,o=e.models,s=e.mapStateToProps,i=e.mapDispatchToProps;return t.unsubscribe=(0,react_2.createState)({initialState:__assign({},t.state),models:o,mapState:function(e){return __assign(__assign(__assign({},serviceregister_1.default.mapStateToProps({namespaces:r||[],state:e})),{loading:e.loading}),s?s(e):{})},mapDispatch:function(e){return __assign(__assign({},serviceregister_1.default.mapDispatchToProps({namespaces:r||[],dispatch:e})),i?i(e):{})},middleWares:a,reducer:n,ref:t}),t}return __extends(e,c),e.prototype.componentWillUnmount=function(){var e;null!=(e=c.prototype.componentWillUnmount)&&e.call(this),this.unsubscribe()},e.prototype.getData=function(){var e;return null==(e=null==(e=null==(e=this.state)?void 0:e[this.getServiceName()])?void 0:e[this.getFetchListPropName()])?void 0:e[this.getDataKey()]},e.prototype.getTotal=function(){var e;return null==(e=null==(e=null==(e=this.state)?void 0:e[this.getServiceName()])?void 0:e[this.getFetchListPropName()])?void 0:e[this.getTotalKey()]},e.prototype.showLoading=function(){var e;return null==(e=null==(e=this.state)?void 0:e.loading)?void 0:e["".concat(this.getServiceName(),"/").concat(this.getFetchListPropName())]},e.prototype.fetchDataExecute=function(e){var t;return null==(t=this.state)?void 0:t["".concat(this.getServiceName()).concat(this.getFetchListPropNameToFirstUpper())](e)},e.displayName="SearchTableStateImplement",e}(SearchTableImplement_1.SearchTableImplement)),SearchTableStateImplementFactory=((exports.SearchTableStateImplement=SearchTableStateImplement).defaultProps=__assign({},SearchTable_1.defaultProps),SearchTableStateImplement.propTypes=__assign({},SearchTable_1.propTypes),function(e){var a=e.serviceNames,n=e.middleWares,o=e.reducer,s=e.models,i=e.mapStateToProps,c=e.mapDispatchToProps;return function(r){return(0,react_1.forwardRef)(function(e,t){return react_1.default.createElement(r,__assign({ref:t,isShowExpandSearch:!0,defaultExpandSearchCollapse:!1,openSearchParamsMemory:!1,fixedHeaderAutoTable:!0,fixedTableSpaceBetween:!0},e,{className:(0,classnames_1.default)("".concat(exports.selectorPrefix,"-wrap"),null!=(t=e.className)?t:""),style:null!=(t=e.style)?t:{},$state:{serviceNames:a,middleWares:n,reducer:o,models:s,mapStateToProps:i,mapDispatchToProps:c}}))})}});exports.default=SearchTableStateImplementFactory;
//# sourceMappingURL=SearchTableStateImplement.js.map
