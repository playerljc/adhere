"use strict";var __extends=function(){var n=function(e,t){return(n=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){e.__proto__=t}:function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}))(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),__assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("react"))),SearchListImplement_1=require("../SearchListImplement"),GridView_1=__importDefault(require("./GridView")),ResourceManagerFactory_1=__importDefault(require("./ResourceManagerFactory")),TableView_1=__importDefault(require("./TableView")),ResourceManager=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.renderThumbnailView=function(){var e;return react_1.default.createElement(GridView_1.default,__assign({ref:this.ref,context:this},this.props,{antdListProps:__assign(__assign({},null!=(e=this.props.antdListProps)?e:{}),{grid:{gutter:16,column:8}}),defaultValues:__assign({},this.getDefaultValues())}))},t.prototype.renderInfoView=function(){return react_1.default.createElement(TableView_1.default,__assign({ref:this.ref,context:this},this.props,{defaultValues:__assign({},this.getDefaultValues())}))},t}((0,ResourceManagerFactory_1.default)(SearchListImplement_1.SearchListImplement));exports.default=ResourceManager;
//# sourceMappingURL=ResourceManager.js.map
