"use strict";var __extends=this&&this.__extends||function(){var o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};return function(e,t){function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(require("react")),prop_types_1=__importDefault(require("prop-types")),adhere_ui_messagedialog_1=__importDefault(require("@baifendian/adhere-ui-messagedialog")),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),adhere_util_resource_1=__importDefault(require("@baifendian/adhere-util-resource")),selectorPrefix="adhere-ui-delconfirm",DelConform=function(t){function r(e){e=t.call(this,e)||this;return e.onClick=e.onClick.bind(e),e}return __extends(r,t),r.prototype.onClick=function(){var e=this.props,t=e.success,e=e.zIndex,e=void 0===e?adhere_util_resource_1.default.Dict.value.ResourceNormalMaxZIndex.value:e;r.open(t,e||adhere_util_resource_1.default.Dict.value.ResourceNormalMaxZIndex.value)},r.prototype.render=function(){var e=this.props,t=e.className,e=e.children;return react_1.default.createElement("div",{className:selectorPrefix+" "+t,onClick:this.onClick},e)},r.open=function(r,e){adhere_ui_messagedialog_1.default.Confirm({title:adhere_util_intl_1.default.v("提示"),text:adhere_util_intl_1.default.v("确定删除吗")+"?",zIndex:e,onSuccess:function(){return new Promise(function(e,t){r?r().then(function(){e()}).catch(function(){t()}):e()})}})},r}(react_1.default.Component);DelConform.defaultProps={zIndex:adhere_util_resource_1.default.Dict.value.ResourceNormalMaxZIndex.value,className:"",success:function(){},children:null},DelConform.propTypes={zIndex:prop_types_1.default.number,className:prop_types_1.default.string,success:prop_types_1.default.func,children:prop_types_1.default.node},exports.default=DelConform;
//# sourceMappingURL=delconfirm.js.map
