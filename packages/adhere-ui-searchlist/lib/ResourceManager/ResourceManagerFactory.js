"use strict";var __extends=function(){var n=function(t,e){return(n=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,e){t.__proto__=e}:function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}))(t,e)};return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),__assign=function(){return(__assign=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("react"));function default_1(t){return __extends(e,r=t),e.prototype.onSearch=function(){var e=this;return new Promise(function(t){e.ref.current.setState({page:1,selectedRows:[],selectedRowKeys:[]},function(){r.prototype.onSearch.call(e).then(function(){return t()})})})},e.prototype.onClear=function(){var t=this.ref.current;return r.prototype.clear.call(this).then(function(){return t.onClear()})},e.prototype.fetchData=function(){return r.prototype.fetchData.call(this)},e.prototype.getColumns=function(){var t,e=this.ref.current;return null!=(t=null==(t=null==e?void 0:e.getColumns)?void 0:t.call(e))?t:[]},e.prototype.getDefaultValues=function(){var t=this.ref.current;return t?{page:t.state.page,limit:t.state.limit,selectedRowKeys:t.state.selectedRowKeys,selectedRows:t.state.selectedRows}:{page:1,limit:this.getLimit(),selectedRowKeys:[],selectedRows:[]}},e.prototype.getSearchParams=function(){var t=r.prototype.getSearchParams.call(this),e=this.ref.current;return e&&e.state?(e=null==e?void 0:e.getSearchParams(),__assign(__assign({},e||{}),t)):__assign({},t)},e.prototype.renderView=function(){var t,e=this.state.viewType;return null==(t=null==(e=this.viewRenders.get(e))?void 0:e.call)?void 0:t.call(e,this)},e.prototype.renderBody=function(){return this.renderView()},e;function e(t){t=r.call(this,t)||this;return t.viewRenders=new Map([["info",t.renderInfoView],["thumbnail",t.renderThumbnailView]]),t.ref=(0,react_1.createRef)(),t}var r}exports.default=default_1;
//# sourceMappingURL=ResourceManagerFactory.js.map
