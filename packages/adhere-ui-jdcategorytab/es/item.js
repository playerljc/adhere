var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};import React from"react";import PropTypes from"prop-types";import classNames from"classnames";import{JdCategoryContext}from"./context";var selectorPrefix="adhere-ui-jdcategorytab";function JdCategoryTabItem(e){var t=e.id,r=e.children,a=e.className,s=e.style;return React.createElement(JdCategoryContext.Consumer,null,function(e){return e=e.activeKey,React.createElement("li",{className:classNames(selectorPrefix+"-tab-item",e===t?"active":null,a.split(/\s+/)),style:__assign({},s)},r)})}JdCategoryTabItem.defaultProps={className:"",style:{},id:""},JdCategoryTabItem.propTypes={className:PropTypes.string,style:PropTypes.object,id:PropTypes.string};export default JdCategoryTabItem;
//# sourceMappingURL=item.js.map
