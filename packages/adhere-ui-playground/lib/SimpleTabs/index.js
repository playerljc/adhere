"use strict";var __extends=this&&this.__extends||function(){var a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(require("react")),prop_types_1=__importDefault(require("prop-types")),Context_1=require("./Context"),TabPanel_1=__importDefault(require("./TabPanel")),selectorPrefix="adhere-ui-playground-simple-tabs",SimpleTabs=function(r){function e(e){var t=r.call(this,e)||this;return t.state={activeKey:e.activeKey},t}return __extends(e,r),e.prototype.componentWillReceiveProps=function(e){this.setState({activeKey:e.activeKey})},e.prototype.renderHead=function(){var t=this,e=this.props.children;return e instanceof Array?e.map(function(e){return t.renderHeadItem(e)}):this.renderHeadItem(e)},e.prototype.renderHeadItem=function(e){var t=this,r=e.props,a=r.index,e=r.title,n=this.props.onChange,r=this.state.activeKey;return react_1.default.createElement("li",{key:a,className:r===a?"active":"",onClick:function(){t.setState({activeKey:a},function(){n&&n(a)})}},e)},e.prototype.render=function(){var e=this.props,t=e.className,e=e.children;return react_1.default.createElement(Context_1.TabContext.Provider,{value:this.state},react_1.default.createElement("div",{className:selectorPrefix+" "+t},react_1.default.createElement("ul",{className:selectorPrefix+"-head"},this.renderHead()),react_1.default.createElement("div",{className:selectorPrefix+"-body"},e)))},e.TabPanel=TabPanel_1.default,e}(react_1.default.PureComponent);SimpleTabs.defaultProps={activeKey:"",className:"",onChange:function(){}},SimpleTabs.propTypes={activeKey:prop_types_1.default.oneOfType([prop_types_1.default.number,prop_types_1.default.string]),className:prop_types_1.default.string,onChange:prop_types_1.default.func},exports.default=SimpleTabs;
//# sourceMappingURL=index.js.map