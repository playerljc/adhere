var __extends=this&&this.__extends||function(){var r=function(e,o){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var n in o)o.hasOwnProperty(n)&&(e[n]=o[n])})(e,o)};return function(e,o){function n(){this.constructor=e}r(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();import React from"react";import PropTypes from"prop-types";import MessageDialog from"@baifendian/adhere-ui-messagedialog";import intl from"@baifendian/adhere-util-intl";import Resource from"@baifendian/adhere-util-resource";var selectorPrefix="adhere-ui-delconfirm",DelConform=function(o){function n(e){e=o.call(this,e)||this;return e.onClick=e.onClick.bind(e),e}return __extends(n,o),n.prototype.onClick=function(e){e.stopPropagation();var o=this.props,e=o.success,o=o.zIndex,o=void 0===o?Resource.Dict.value.ResourceNormalMaxZIndex.value:o;n.open(e,o||Resource.Dict.value.ResourceNormalMaxZIndex.value)},n.prototype.render=function(){var e=this.props,o=e.className,e=e.children;return React.createElement("div",{className:selectorPrefix+" "+o,onClick:this.onClick},e)},n.open=function(n,e){MessageDialog.Confirm({title:intl.v("提示"),text:intl.v("确定删除吗")+"?",zIndex:e,onSuccess:function(){return new Promise(function(e,o){n?n().then(function(){e()}).catch(function(){o()}):e()})}})},n}(React.Component);DelConform.defaultProps={zIndex:Resource.Dict.value.ResourceNormalMaxZIndex.value,className:"",success:function(){},children:null},DelConform.propTypes={zIndex:PropTypes.number,className:PropTypes.string,success:PropTypes.func,children:PropTypes.node};export default DelConform;
//# sourceMappingURL=delconfirm.js.map