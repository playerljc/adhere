"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.map.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),react_1=tslib_1.__importDefault(require("react")),antd_1=require("antd"),icons_1=require("@ant-design/icons"),adhere_util_intl_1=tslib_1.__importDefault(require("@baifendian/adhere-util-intl")),ListStandard_1=tslib_1.__importDefault(require("./ListStandard")),Info_1=tslib_1.__importDefault(require("./Info")),Info_2=tslib_1.__importDefault(require("../Reply/Info")),selectorPrefix="adhere-ui-comment",Comment=function(e){var t=e.listProps,r=e.commentDataKeys,o=void 0===r?{current:"current",totalPage:"totalPage",list:"list",totalCount:"totalCount"}:r,a=e.commentLimit,n=void 0===a?10:a,l=e.flexLayoutProps,i=e.getScrollWrapContainer,d=e.commentKeyProp,c=void 0===d?"id":d,s=e.replyDataKeys,u=void 0===s?{current:"current",totalPage:"totalPage",list:"list",totalCount:"totalCount"}:s,r=e.replyLimit,m=void 0===r?10:r,a=e.replyKeyProp,p=void 0===a?"id":a,d=e.isMoreProp,_=void 0===d?"isMore":d,s=e.fetchCommentData,f=e.fetchReplyData,y=e.fetchReply,r=e.renderEmpty,a=e.renderFirstLoading,h=e.renderCommentActions,v=e.renderCommentAuthor,x=e.renderCommentAvatar,P=e.renderCommentContent,R=e.renderCommentDateTime,C=e.renderCommentLoading,T=e.renderReplyActions,D=e.renderReplyAuthor,g=e.renderReplyAvatar,L=e.renderReplyContent,I=e.renderReplyDateTime,E=e.renderReplyLoading,d=e.showReplyText,A=void 0===d?adhere_util_intl_1.default.v("显示回复内容"):d,d=e.hideReplyText,M=void 0===d?adhere_util_intl_1.default.v("收起回复"):d,d=e.loadMoreReplyText,b=void 0===d?adhere_util_intl_1.default.v("加载更多回复"):d,d=e.showReplyTextIcon,q=void 0===d?react_1.default.createElement(icons_1.CaretDownOutlined,null):d,d=e.hideReplyTextIcon,j=void 0===d?react_1.default.createElement(icons_1.CaretUpOutlined,null):d,d=e.loadMoreCollapseTextIcon,w=void 0===d?react_1.default.createElement(icons_1.EnterOutlined,{className:"reply-icon"}):d,d=e.local,K=void 0===d?"zh":d,S=e.emojiPickerProps;function k(){return react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-loading")},react_1.default.createElement(antd_1.Spin,{indicator:react_1.default.createElement(icons_1.LoadingOutlined,{style:{fontSize:24}})}))}return react_1.default.createElement(ListStandard_1.default,{getScrollWrapContainer:i,listProps:t,dataKeys:o,limit:n,renderList:function(e){var t;return react_1.default.createElement("ul",{className:"".concat(selectorPrefix,"-list")},null===(e=null===(t=null==e?void 0:e.list)||void 0===t?void 0:t.map)||void 0===e?void 0:e.call(t,function(e){return react_1.default.createElement("li",{className:"".concat(selectorPrefix,"-list-item"),key:e[c]},react_1.default.createElement(Info_1.default,{data:e,dataKeys:u,limit:m,keyProp:p,isMoreProp:_,fetchData:f,fetchReply:y,renderActions:h,renderAuthor:v,renderAvatar:x,renderContent:P,renderDateTime:R,renderLoading:C||k,showReplyText:A,hideReplyText:M,loadMoreReplyText:b,showReplyTextIcon:q,hideReplyTextIcon:j,loadMoreCollapseTextIcon:w,local:K,emojiPickerProps:S},function(e){return react_1.default.createElement(Info_2.default,{data:e,dataKeys:u,limit:m,keyProp:p,isMoreProp:_,fetchData:f,fetchReply:y,renderActions:T,renderAuthor:D,renderAvatar:g,renderContent:L,renderDateTime:I,renderLoading:E||k,showReplyText:A,hideReplyText:M,loadMoreReplyText:b,showReplyTextIcon:q,hideReplyTextIcon:j,loadMoreCollapseTextIcon:w,local:K,emojiPickerProps:S})}))}))},renderLoading:k,fetchData:s,renderEmpty:r,renderFirstLoading:a,flexLayoutProps:l})};exports.default=Comment;
//# sourceMappingURL=index.js.map
