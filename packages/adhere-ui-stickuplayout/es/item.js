var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,s=1,a=arguments.length;s<a;s++)for(var r in t=arguments[s])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};import React from"react";import PropTypes from"prop-types";import classNames from"classnames";var selectorPrefix="adhere-ui-stickuplayout-item";function StickupLayoutItem(e){var t=e.className,s=e.style,a=e.title,e=e.content;return React.createElement("div",{className:classNames(selectorPrefix,t.split(" ")),style:__assign({},s)},React.createElement("div",{className:selectorPrefix+"-header"},a),React.createElement("div",{className:selectorPrefix+"-content"},e))}StickupLayoutItem.defaultProps={className:"",style:{},title:"",content:null},StickupLayoutItem.propTypes={className:PropTypes.string,style:PropTypes.object,title:PropTypes.node,content:PropTypes.node};export default StickupLayoutItem;
//# sourceMappingURL=item.js.map