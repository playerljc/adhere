import _Empty from"antd/es/empty";import{__assign,__read,__spreadArray}from"tslib";import React,{useEffect,useLayoutEffect,useRef,useState}from"react";import PropTypes from"prop-types";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import ScrollLoad from"@baifendian/adhere-ui-scrollload";import FlexLayout from"@baifendian/adhere-ui-flexlayout";import CommentList,{propTypes as SystemListPropTypes,defaultProps as SystemListDefaultProps}from"../List";var VerticalFlexLayout=FlexLayout.VerticalFlexLayout,VerticalFlexLayoutDefaultProps=FlexLayout.VerticalFlexLayoutDefaultProps,VerticalFlexLayoutPropTypes=FlexLayout.VerticalFlexLayoutPropTypes,selectorPrefix="adhere-ui-comment-list-standard";function ListStandard(a){var o=useRef({page:1,limit:a.limit}),t=useRef(),n=useRef(ScrollLoad.NORMAL),e=useRef(),r=__read(useState(((i={})[a.dataKeys.current]=1,i[a.dataKeys.totalPage]=0,i[a.dataKeys.list]=[],i[a.dataKeys.totalCount]=0,i)),2),s=r[0],l=r[1],i=__read(useState(!0),2),r=i[0],p=i[1];function u(r){var e;return null===(e=null==a?void 0:a.fetchData)||void 0===e?void 0:e.call(a,null==o?void 0:o.current).then(function(e){return r(e),p(!1),e}).catch(function(e){var r;return p(!1),t.current&&(n.current=ScrollLoad.ERROR,null!==(r=null==t?void 0:t.current)&&void 0!==r&&r.call(t,n.current)),e})}return useEffect(function(){p(!0),o.current={page:1,limit:a.limit},u(function(e){l(e)})},[]),useLayoutEffect(function(){t.current&&(n.current=o.current.page<s[a.dataKeys.totalPage]?ScrollLoad.NORMAL:ScrollLoad.EMPTY,null!=t&&t.current(n.current))},[s]),React.createElement(VerticalFlexLayout,__assign({},a.flexLayoutProps,{className:"".concat(selectorPrefix),renderMain:React.createElement("div",{className:"".concat(selectorPrefix,"-auto"),ref:e},React.createElement(CommentList,__assign({getScrollWrapContainer:a.getScrollWrapContainer,isLoading:r,hasMore:s[a.dataKeys.list].length<=s[a.dataKeys.totalCount],onLoadMore:function(e){if(n.current===ScrollLoad.EMPTY)return n.current=ScrollLoad.EMPTY,void e(ScrollLoad.EMPTY);t.current=e,setTimeout(function(){p(!0),o.current.page=o.current.page+1;var t=a.dataKeys.list;return u(function(e){var r;l(__assign(__assign({},e),((r={})[a.dataKeys.list]=__spreadArray(__spreadArray([],__read(s[t]),!1),__read(e[t]),!1),r)))})},100)},renderFirstLoading:a.renderFirstLoading},a.listProps),React.createElement(ConditionalRender,{conditional:!(1===o.current.page&&0===s[a.dataKeys.list].length),noMatch:function(){var e;return null===(e=null==a?void 0:a.renderEmpty)||void 0===e?void 0:e.call(a)}},function(){var e;return null===(e=null==a?void 0:a.renderList)||void 0===e?void 0:e.call(a,s)})))}))}ListStandard.defaultProps={flexLayoutProps:__assign({},VerticalFlexLayoutDefaultProps),listProps:__assign({},SystemListDefaultProps),limit:10,renderEmpty:function(){return React.createElement(_Empty,null)},dataKeys:{current:"current",totalPage:"totalPage",list:"list",totalCount:"totalCount"}},ListStandard.propTypes={getScrollWrapContainer:PropTypes.func,flexLayoutProps:PropTypes.shape(__assign({},VerticalFlexLayoutPropTypes)),listProps:PropTypes.shape(__assign({},SystemListPropTypes)),limit:PropTypes.number,renderList:PropTypes.func,renderEmpty:PropTypes.func,renderFirstLoading:PropTypes.func,fetchData:PropTypes.func,dataKeys:PropTypes.shape({current:PropTypes.string,totalPage:PropTypes.string,list:PropTypes.string,totalCount:PropTypes.string}),scrollLoadProps:PropTypes.shape({className:PropTypes.string,style:PropTypes.object,loadClassName:PropTypes.string,loadStyle:PropTypes.object,emptyClassName:PropTypes.string,emptyStyle:PropTypes.object,errorClassName:PropTypes.string,errorStyle:PropTypes.object,distance:PropTypes.number,onScrollBottom:PropTypes.func,onEmptyClick:PropTypes.func,onErrorClick:PropTypes.func,renderLoading:PropTypes.func,renderEmpty:PropTypes.func,renderError:PropTypes.func})};export default ListStandard;
//# sourceMappingURL=index.js.map
