"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.promise.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.propTypes=exports.defaultProps=void 0;var tslib_1=require("tslib"),react_1=tslib_1.__importStar(require("react")),react_dom_1=tslib_1.__importDefault(require("react-dom")),prop_types_1=tslib_1.__importDefault(require("prop-types")),classnames_1=tslib_1.__importDefault(require("classnames")),antd_1=require("antd"),adhere_ui_conditionalrender_1=tslib_1.__importDefault(require("@baifendian/adhere-ui-conditionalrender")),adhere_ui_scrollload_1=tslib_1.__importDefault(require("@baifendian/adhere-ui-scrollload")),adhere_ui_backtopanimation_1=tslib_1.__importDefault(require("@baifendian/adhere-ui-backtopanimation")),selectorPrefix="adhere-ui-comment-list",BackTopAnimationImpl=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return tslib_1.__extends(t,e),t.prototype.componentWillUnmount=function(){try{e.prototype.componentWillUnmount.call(this)}catch(e){}},t}(adhere_ui_backtopanimation_1.default);function CommentList(e){var t,r=e.className,o=e.style,a=e.isLoading,l=e.hasMore,n=e.onLoadMore,i=e.scrollLoadProps,s=e.renderFirstLoading,u=e.getScrollWrapContainer,p=e.children,c=(0,react_1.useRef)(!0),e=(0,react_1.useRef)(!1),d=(0,react_1.useRef)();return react_1.default.createElement("div",{className:(0,classnames_1.default)(selectorPrefix,r||""),style:tslib_1.__assign({},o),ref:d},(a=a,c.current&&!e.current&&a&&(e.current=!0),c.current&&e.current&&!a&&(c.current=!1,e.current=!1),c.current?function(){if(s)return s();for(var e=[],t=0;t<15;t++)e.push(react_1.default.createElement(antd_1.Skeleton,{key:t+1,loading:!0,active:!0,avatar:!0}));return react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-first-loading-wrap")},e)}():(t={getScrollContainer:function(){var e;return null===(e=null==u?void 0:u())||void 0===e?void 0:e.firstElementChild},style:{height:"100%"},onScrollBottom:n},react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:l},function(){return react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-normal-wrap")},react_1.default.createElement(adhere_ui_scrollload_1.default,tslib_1.__assign({},t,i||{},{distance:(null==i?void 0:i.distance)||50}),p),react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!(!u||!u()),noMatch:function(){return react_1.default.createElement(BackTopAnimationImpl,{target:function(){var e,t;return null===(t=null===(e=null==d?void 0:d.current)||void 0===e?void 0:e.querySelector)||void 0===t?void 0:t.call(e,".adhere-ui-scrollload")},onTrigger:function(){return Promise.resolve(null)}})}},function(){return react_dom_1.default.createPortal(react_1.default.createElement(BackTopAnimationImpl,{target:function(){var e;return null===(e=null==u?void 0:u())||void 0===e?void 0:e.firstElementChild},onTrigger:function(){return Promise.resolve(null)}}),null==u?void 0:u())}))}))))}exports.defaultProps={},exports.propTypes={getScrollWrapContainer:prop_types_1.default.func,className:prop_types_1.default.string,style:prop_types_1.default.object,isLoading:prop_types_1.default.bool,hasMore:prop_types_1.default.bool,onLoadMore:prop_types_1.default.func,renderFirstLoading:prop_types_1.default.func,scrollLoadProps:prop_types_1.default.shape({className:prop_types_1.default.string,style:prop_types_1.default.object,loadClassName:prop_types_1.default.string,loadStyle:prop_types_1.default.object,emptyClassName:prop_types_1.default.string,emptyStyle:prop_types_1.default.object,errorClassName:prop_types_1.default.string,errorStyle:prop_types_1.default.object,distance:prop_types_1.default.number,onScrollBottom:prop_types_1.default.func,onEmptyClick:prop_types_1.default.func,onErrorClick:prop_types_1.default.func,renderLoading:prop_types_1.default.func,renderEmpty:prop_types_1.default.func,renderError:prop_types_1.default.func})},CommentList.defaultProps=exports.defaultProps,CommentList.propTypes=exports.propTypes,exports.default=(0,react_1.forwardRef)(CommentList);
//# sourceMappingURL=index.js.map
