import _Empty from"antd/es/empty";import{__assign,__read,__spreadArray}from"tslib";import React,{useEffect,useLayoutEffect,useRef,useState}from"react";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import ScrollLoad from"@baifendian/adhere-ui-scrollload";import FlexLayout from"@baifendian/adhere-ui-flexlayout";import CommentList from"../List";var VerticalFlexLayout=FlexLayout.VerticalFlexLayout,selectorPrefix="adhere-ui-comment-list-standard",ListStandard=function(r){var e=r.limit,t=void 0===e?10:e,a=r.dataKeys,n=void 0===a?{current:"current",totalPage:"totalPage",list:"list",totalCount:"totalCount"}:a,o=r.listProps,i=void 0===o?{}:o,l=r.flexLayoutProps,u=void 0===l?{}:l,c=r.renderFirstLoading,e=r.renderEmpty,d=void 0===e?function(){return React.createElement(_Empty,null)}:e,s=r.renderList,a=r.getScrollWrapContainer,f=useRef({page:1,limit:t}),m=useRef(),L=useRef(ScrollLoad.NORMAL),o=useRef(null),e=__read(useState(((l={})[n.current]=1,l[n.totalPage]=0,l[n.list]=[],l[n.totalCount]=0,l)),2),_=e[0],p=e[1],l=__read(useState(!0),2),e=l[0],g=l[1];function v(t){var e;return null===(e=null==r?void 0:r.fetchData)||void 0===e?void 0:e.call(r,null==f?void 0:f.current).then(function(e){return t(e),g(!1),e}).catch(function(e){var t;return g(!1),m.current&&(L.current=ScrollLoad.ERROR,null!==(t=null==m?void 0:m.current)&&void 0!==t&&t.call(m,L.current)),e})}return useEffect(function(){g(!0),f.current={page:1,limit:t},v(function(e){return p(e)})},[]),useLayoutEffect(function(){m.current&&(L.current=f.current.page<_[n.totalPage]?ScrollLoad.NORMAL:ScrollLoad.EMPTY,null!=m&&m.current(L.current))},[_]),React.createElement(VerticalFlexLayout,__assign({},u||{},{className:"".concat(selectorPrefix),renderMain:React.createElement("div",{className:"".concat(selectorPrefix,"-auto"),ref:o},React.createElement(CommentList,__assign({getScrollWrapContainer:a,isLoading:e,hasMore:_[n.list].length<=_[n.totalCount],onLoadMore:function(e){if(L.current===ScrollLoad.EMPTY)return L.current=ScrollLoad.EMPTY,void e(ScrollLoad.EMPTY);m.current=e,setTimeout(function(){g(!0),f.current.page=f.current.page+1;var r=n.list;return v(function(e){var t;p(__assign(__assign({},e),((t={})[n.list]=__spreadArray(__spreadArray([],__read(_[r]),!1),__read(e[r]),!1),t)))})},100)},renderFirstLoading:c},i||{}),React.createElement(ConditionalRender,{conditional:!(1===f.current.page&&0===_[n.list].length),noMatch:function(){return d()}},function(){return null==s?void 0:s(_)})))}))};export default ListStandard;
//# sourceMappingURL=index.js.map
