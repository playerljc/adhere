"use strict";var __extends=this&&this.__extends||function(){var n=function(t,e){return(n=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,e){t.__proto__=e}:function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}))(t,e)};return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("react"))),index_1=__importDefault(require("../index")),ProSearchStateList=(require("./serviceRegister"),index_1.default.ProSearchStateList),SearchListStateImplementFactory=index_1.default.SearchListStateImplementFactory,serviceName="user",ProSearchStateListImpl=function(e){function t(t){t=e.call(this,t)||this;return t.state=__assign(__assign({},t.state),{expandedRowKeys:[]}),t}return __extends(t,e),t.prototype.getComponentId=function(){return"ProSearchStateListImpl"},t.prototype.getServiceName=function(){return serviceName},t.prototype.getFetchListPropName=function(){return"fetchList"},t.prototype.getDataKey=function(){return"list"},t.prototype.getTotalKey=function(){return"totalCount"},t.prototype.getColumns=function(){return[{dataIndex:"title",key:"title",title:"标题",$search:{visible:!0,type:"input"}},{dataIndex:"subTitle",key:"subTitle",title:"副标题",$search:{visible:!0,type:"input"}},{dataIndex:"content",key:"subTitle",title:"副标题",$search:{visible:!0,type:"textArea"}}]},t.prototype.getMetas=function(){return{actions:{dataIndex:"actions",render:function(){return[react_1.default.createElement("a",null,"1"),react_1.default.createElement("a",null,"2"),react_1.default.createElement("a",null,"3")]}}}},t}(ProSearchStateList),models=(ProSearchStateListImpl.propTypes={},[]),requireComponent=require.context("./model",!1,/.*\.(js)$/),Wrap=(requireComponent.keys().forEach(function(t){t=requireComponent(t);models.push(t.default())}),SearchListStateImplementFactory({serviceNames:[serviceName],middleWares:[],reducer:null,models:models})(ProSearchStateListImpl));exports.default=function(t){return react_1.default.createElement(Wrap,__assign({bodyStyle:{padding:"20px 30px"},antdListProps:{}},t))};
//# sourceMappingURL=ProStateSearchList.js.map