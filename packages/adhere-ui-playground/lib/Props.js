var __extends=this&&this.__extends||function(){var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};import React from"react";import PropTypes from"prop-types";import Intl from"@baifendian/adhere-util-intl";import Table from"./Table";var selectPrefix="adhere-ui-playground-props",Props=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.getColumns=function(){return[{title:Intl.v("参数"),key:"params",dataIndex:"params",width:"20%"},{title:Intl.v("说明"),key:"desc",dataIndex:"desc",width:"50%"},{title:Intl.v("类型"),key:"type",dataIndex:"type",width:"15%",render:function(e){return React.createElement("code",{className:selectPrefix+"-highlight"},e)}},{title:Intl.v("默认值"),key:"defaultVal",dataIndex:"defaultVal",width:"15%",render:function(e){return React.createElement("code",null,e||"-")}}]},t.prototype.render=function(){return React.createElement("div",{className:selectPrefix},React.createElement(Table,{columns:this.getColumns(),dataSource:this.props.data.map(function(e,t){return __assign(__assign({},e),{id:""+(t+1)})}),rowKey:"id"}))},t}(React.Component);Props.defaultProps={data:[]},Props.propTypes={data:PropTypes.arrayOf(PropTypes.shape({params:PropTypes.oneOfType([PropTypes.string,PropTypes.node]),desc:PropTypes.oneOfType([PropTypes.string,PropTypes.node]),type:PropTypes.oneOfType([PropTypes.string,PropTypes.node]),defaultVal:PropTypes.oneOfType([PropTypes.string,PropTypes.node])}))};export default Props;
//# sourceMappingURL=Props.js.map
