"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(require("react")),prop_types_1=__importDefault(require("prop-types")),classnames_1=__importDefault(require("classnames")),context_1=require("./context"),selectorPrefix="adhere-ui-jdcategorytab";function JdCategoryTabItem(e){var t=e.id,r=e.children,a=e.className,s=e.style;return console.log("JdCategoryTabItem",t),react_1.default.createElement(context_1.JdCategoryContext.Consumer,null,function(e){return e=e.activeKey,console.log("activeKey",e,typeof e,typeof t,e===t),react_1.default.createElement("li",{className:classnames_1.default(selectorPrefix+"-tab-item",e===t?"active":null,a.split(" ")),style:__assign({},s)},r)})}JdCategoryTabItem.defaultProps={className:"",style:{},id:""},JdCategoryTabItem.propTypes={className:prop_types_1.default.string,style:prop_types_1.default.object,id:prop_types_1.default.string},exports.default=JdCategoryTabItem;
//# sourceMappingURL=item.js.map
