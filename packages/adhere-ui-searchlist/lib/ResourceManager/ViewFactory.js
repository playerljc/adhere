"use strict";var __extends=function(){var r=function(t,o){return(r=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,o){t.__proto__=o}:function(t,o){for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])}))(t,o)};return function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function e(){this.constructor=t}r(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}}(),__assign=function(){return(__assign=Object.assign||function(t){for(var o,e=1,r=arguments.length;e<r;e++)for(var n in o=arguments[e])Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);return t}).apply(this,arguments)};function default_1(t){return __extends(o,e=t),o.prototype.componentDidMount=function(){var t,o;e.prototype.componentDidMount.call(this),null!=(o=null==(t=null==(t=this.props)?void 0:t.context)?void 0:t.forceUpdate)&&o.call(t)},o.prototype.fetchData=function(){var t,o;return this.isMount?(this.isMount=!1,Promise.resolve([])):null==(t=null==(o=this.props.context)?void 0:o.fetchData)?void 0:t.call(o)},o.prototype.getParams=function(){var t,o=this.props.context;return null==(o=null==o?void 0:(t=o.getViewParams).call)?void 0:o.call(t,this)},o.prototype.getData=function(){var t,o=this.props.context;return null==(t=null==o?void 0:o.getData)?void 0:t.call(o)},o.prototype.getServiceName=function(){var t,o=this.props.context;return null==(t=null==o?void 0:o.getServiceName)?void 0:t.call(o)},o.prototype.getFetchListPropName=function(){var t,o=this.props.context;return null==(t=null==o?void 0:o.getFetchListPropName)?void 0:t.call(o)},o.prototype.getTotalKey=function(){var t,o=this.props.context;return null==(t=null==o?void 0:o.getTotalKey)?void 0:t.call(o)},o.prototype.getColumns=function(){var t,o=this.props.context;return null==(o=null==o?void 0:(t=o.getTableViewColumns).call)?void 0:o.call(t,this)},o.prototype.renderSearchFormBefore=function(){return null},o.prototype.renderSearchForm=function(){return null},o.prototype.renderSearchToolBar=function(){return null},o.prototype.renderSearchFormAfter=function(){return null},o.prototype.renderSearchHeader=function(){return null},o.prototype.renderSearchFooter=function(){return null},o;function o(t){t=e.call(this,t)||this;return t.isMount=!0,t.state=__assign(__assign({},t.state||{}),t.props.defaultValues),t.isFirst=!1,t}var e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=default_1;
//# sourceMappingURL=ViewFactory.js.map