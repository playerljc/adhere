"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.map.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),react_1=tslib_1.__importDefault(require("react")),prop_types_1=tslib_1.__importDefault(require("prop-types")),antd_1=require("antd"),icons_1=require("@ant-design/icons"),adhere_util_intl_1=tslib_1.__importDefault(require("@baifendian/adhere-util-intl")),ListStandard_1=tslib_1.__importDefault(require("./ListStandard")),Info_1=tslib_1.__importDefault(require("./Info")),Info_2=tslib_1.__importDefault(require("../Reply/Info")),selectorPrefix="adhere-ui-comment";function Comment(r){function p(){return react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-loading")},react_1.default.createElement(antd_1.Spin,{indicator:react_1.default.createElement(icons_1.LoadingOutlined,{style:{fontSize:24}})}))}return react_1.default.createElement(ListStandard_1.default,{getScrollWrapContainer:r.getScrollWrapContainer,listProps:r.listProps,dataKeys:r.commentDataKeys,limit:r.commentLimit,renderList:function(e){var t;return react_1.default.createElement("ul",{className:"".concat(selectorPrefix,"-list")},null===(e=null===(t=null==e?void 0:e.list)||void 0===t?void 0:t.map)||void 0===e?void 0:e.call(t,function(e){return react_1.default.createElement("li",{className:"".concat(selectorPrefix,"-list-item"),key:e[r.commentKeyProp]},react_1.default.createElement(Info_1.default,{data:e,dataKeys:r.replyDataKeys,limit:r.replyLimit,keyProp:r.replyKeyProp,isMoreProp:r.isMoreProp,fetchData:r.fetchReplyData,fetchReply:r.fetchReply,renderActions:r.renderCommentActions,renderAuthor:r.renderCommentAuthor,renderAvatar:r.renderCommentAvatar,renderContent:r.renderCommentContent,renderDateTime:r.renderCommentDateTime,renderLoading:r.renderCommentLoading||p,showReplyText:r.showReplyText,hideReplyText:r.hideReplyText,loadMoreReplyText:r.loadMoreReplyText,showReplyTextIcon:r.showReplyTextIcon,hideReplyTextIcon:r.hideReplyTextIcon,loadMoreCollapseTextIcon:r.loadMoreCollapseTextIcon},function(e){return react_1.default.createElement(Info_2.default,{data:e,dataKeys:r.replyDataKeys,limit:r.replyLimit,keyProp:r.replyKeyProp,isMoreProp:r.isMoreProp,fetchData:r.fetchReplyData,fetchReply:r.fetchReply,renderActions:r.renderReplyActions,renderAuthor:r.renderReplyAuthor,renderAvatar:r.renderReplyAvatar,renderContent:r.renderReplyContent,renderDateTime:r.renderReplyDateTime,renderLoading:r.renderReplyLoading||p,showReplyText:r.showReplyText,hideReplyText:r.hideReplyText,loadMoreReplyText:r.loadMoreReplyText,showReplyTextIcon:r.showReplyTextIcon,hideReplyTextIcon:r.hideReplyTextIcon,loadMoreCollapseTextIcon:r.loadMoreCollapseTextIcon})}))}))},renderLoading:p,fetchData:r.fetchCommentData,renderEmpty:r.renderEmpty,renderFirstLoading:r.renderFirstLoading,flexLayoutProps:r.flexLayoutProps})}Comment.defaultProps={commentKeyProp:"id",commentDataKeys:{current:"current",totalPage:"totalPage",list:"list",totalCount:"totalCount"},commentLimit:10,replyKeyProp:"id",replyDataKeys:{current:"current",totalPage:"totalPage",list:"list",totalCount:"totalCount"},replyLimit:10,isMoreProp:"isMore",showReplyText:adhere_util_intl_1.default.v("显示回复内容"),hideReplyText:adhere_util_intl_1.default.v("收起回复"),loadMoreReplyText:adhere_util_intl_1.default.v("加载更多回复"),showReplyTextIcon:react_1.default.createElement(icons_1.CaretDownOutlined,null),hideReplyTextIcon:react_1.default.createElement(icons_1.CaretUpOutlined,null),loadMoreCollapseTextIcon:react_1.default.createElement(icons_1.EnterOutlined,{className:"reply-icon"})},Comment.propTypes={getScrollWrapContainer:prop_types_1.default.func,fetchCommentData:prop_types_1.default.func,commentDataKeys:prop_types_1.default.shape({current:prop_types_1.default.string,totalPage:prop_types_1.default.string,list:prop_types_1.default.string,totalCount:prop_types_1.default.string}),commentLimit:prop_types_1.default.number,commentKeyProp:prop_types_1.default.string,renderCommentActions:prop_types_1.default.func,renderCommentAuthor:prop_types_1.default.func,renderCommentAvatar:prop_types_1.default.func,renderCommentContent:prop_types_1.default.func,renderCommentDateTime:prop_types_1.default.func,renderCommentLoading:prop_types_1.default.func,fetchReplyData:prop_types_1.default.func,replyDataKeys:prop_types_1.default.shape({current:prop_types_1.default.string,totalPage:prop_types_1.default.string,list:prop_types_1.default.string,totalCount:prop_types_1.default.string}),replyLimit:prop_types_1.default.number,replyKeyProp:prop_types_1.default.string,renderReplyActions:prop_types_1.default.func,renderReplyAuthor:prop_types_1.default.func,renderReplyAvatar:prop_types_1.default.func,renderReplyContent:prop_types_1.default.func,renderReplyDateTime:prop_types_1.default.func,renderReplyLoading:prop_types_1.default.func,renderEmpty:prop_types_1.default.func,renderFirstLoading:prop_types_1.default.func,flexLayoutProps:prop_types_1.default.object,fetchReply:prop_types_1.default.func,listProps:prop_types_1.default.object,isMoreProp:prop_types_1.default.string,showReplyText:prop_types_1.default.oneOfType([prop_types_1.default.string,prop_types_1.default.func]),hideReplyText:prop_types_1.default.oneOfType([prop_types_1.default.string,prop_types_1.default.func]),loadMoreReplyText:prop_types_1.default.oneOfType([prop_types_1.default.string,prop_types_1.default.func]),showReplyTextIcon:prop_types_1.default.oneOfType([prop_types_1.default.node,prop_types_1.default.func]),hideReplyTextIcon:prop_types_1.default.oneOfType([prop_types_1.default.node,prop_types_1.default.func]),loadMoreCollapseTextIcon:prop_types_1.default.oneOfType([prop_types_1.default.node,prop_types_1.default.func]),scrollLoadProps:prop_types_1.default.shape({className:prop_types_1.default.string,style:prop_types_1.default.object,loadClassName:prop_types_1.default.string,loadStyle:prop_types_1.default.object,emptyClassName:prop_types_1.default.string,emptyStyle:prop_types_1.default.object,errorClassName:prop_types_1.default.string,errorStyle:prop_types_1.default.object,distance:prop_types_1.default.number,onScrollBottom:prop_types_1.default.func,onEmptyClick:prop_types_1.default.func,onErrorClick:prop_types_1.default.func,renderLoading:prop_types_1.default.func,renderEmpty:prop_types_1.default.func,renderError:prop_types_1.default.func})},exports.default=Comment;
//# sourceMappingURL=index.js.map