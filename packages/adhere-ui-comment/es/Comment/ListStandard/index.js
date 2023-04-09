import _Empty from"antd/es/empty";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},__spreadArray=this&&this.__spreadArray||function(t,e,r){if(r||2===arguments.length)for(var n,a=0,o=e.length;a<o;a++)!n&&a in e||((n=n||Array.prototype.slice.call(e,0,a))[a]=e[a]);return t.concat(n||Array.prototype.slice.call(e))};import React,{memo,useCallback,useEffect,useLayoutEffect,useMemo,useRef,useState}from"react";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import FlexLayout from"@baifendian/adhere-ui-flexlayout";import ScrollLoad from"@baifendian/adhere-ui-scrollload";import CommentList from"../List";var VerticalFlexLayout=FlexLayout.VerticalFlexLayout,selectorPrefix="adhere-ui-comment-list-standard",ListStandard=function(r){var t=r.limit,e=void 0===t?10:t,t=r.dataKeys,a=void 0===t?{current:"current",totalPage:"totalPage",list:"list",totalCount:"totalCount"}:t,t=r.listProps,n=void 0===t?{}:t,t=r.flexLayoutProps,t=void 0===t?{}:t,o=r.renderFirstLoading,l=r.renderEmpty,i=void 0===l?function(){return React.createElement(_Empty,null)}:l,u=r.renderList,c=r.getScrollWrapContainer,s=useRef({page:1,limit:e}),d=useRef(),f=useRef(ScrollLoad.NORMAL),l=useRef(null),m=useState(((m={})[a.current]=1,m[a.totalPage]=0,m[a.list]=[],m[a.totalCount]=0,m)),p=m[0],g=m[1],m=useState(!0),L=m[0],y=m[1];function _(e){var t;return null==(t=null==r?void 0:r.fetchData)?void 0:t.call(r,null==s?void 0:s.current).then(function(t){return e(t),y(!1),t}).catch(function(t){var e;return y(!1),d.current&&(f.current=ScrollLoad.ERROR,null!=(e=null==d?void 0:d.current))&&e.call(d,f.current),t})}var v=useCallback(function(t){f.current===ScrollLoad.EMPTY?(f.current=ScrollLoad.EMPTY,t(ScrollLoad.EMPTY)):(d.current=t,setTimeout(function(){return y(!0),s.current.page=s.current.page+1,n=a.list,_(function(r){g(function(t){var e;return __assign(__assign({},r),((e={})[a.list]=__spreadArray(__spreadArray([],t[n],!0),r[n],!0),e))})});var n},100))},[]),h=useCallback(function(){return 1===s.current.page&&0===p[a.list].length},[p,a,s.current.page]),m=useMemo(function(){return React.createElement(CommentList,__assign({getScrollWrapContainer:c,isLoading:L,hasMore:p[a.list].length<=p[a.totalCount],onLoadMore:v,renderFirstLoading:o},n||{}),React.createElement(ConditionalRender,{conditional:!h(),noMatch:function(){return i()}},function(){return null==u?void 0:u(p)}))},[c,L,p,a.totalCount,a.list,o,n,i]);return useEffect(function(){y(!0),s.current={page:1,limit:e},_(function(t){g(t)})},[]),useLayoutEffect(function(){d.current&&(f.current=s.current.page<p[a.totalPage]?ScrollLoad.NORMAL:ScrollLoad.EMPTY,null!=d)&&d.current(f.current)},[p]),React.createElement(VerticalFlexLayout,__assign({},t||{},{className:"".concat(selectorPrefix),renderMain:React.createElement("div",{className:"".concat(selectorPrefix,"-auto"),ref:l},m)}))};export default memo(ListStandard);
//# sourceMappingURL=index.js.map
