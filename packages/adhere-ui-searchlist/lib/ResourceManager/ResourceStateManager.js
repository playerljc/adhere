"use strict";var __extends=function(){var a=function(t,e){return(a=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,e){t.__proto__=e}:function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}))(t,e)};return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),__assign=function(){return(__assign=Object.assign||function(t){for(var e,r=1,a=arguments.length;r<a;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)},__importDefault=function(t){return t&&t.__esModule?t:{default:t}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("react"))),SearchListStateImplement_1=require("../SearchListStateImplement"),GridStateView_1=__importDefault(require("./GridStateView")),ResourceManagerFactory_1=__importDefault(require("./ResourceManagerFactory")),TableStateView_1=__importDefault(require("./TableStateView")),ResourceStateManager=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.renderThumbnailView=function(){return react_1.default.createElement(GridStateView_1.default,__assign({ref:this.ref,context:this},this.props,{antdListProps:__assign(__assign({},this.props.antdListProps||{}),{grid:{gutter:16,column:8}}),defaultValues:__assign({},this.getDefaultValues())}))},e.prototype.renderInfoView=function(){return react_1.default.createElement(TableStateView_1.default,__assign({ref:this.ref,context:this},this.props,{defaultValues:__assign({},this.getDefaultValues())}))},e}((0,ResourceManagerFactory_1.default)(SearchListStateImplement_1.SearchListStateImplement));exports.default=ResourceStateManager;
//# sourceMappingURL=ResourceStateManager.js.map