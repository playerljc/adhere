"use strict";require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),react_1=tslib_1.__importStar(require("react")),antd_1=require("antd"),adhere_ui_conditionalrender_1=tslib_1.__importDefault(require("@baifendian/adhere-ui-conditionalrender")),adhere_ui_scrollload_1=tslib_1.__importDefault(require("@baifendian/adhere-ui-scrollload")),adhere_ui_flexlayout_1=tslib_1.__importDefault(require("@baifendian/adhere-ui-flexlayout")),List_1=tslib_1.__importDefault(require("../List")),VerticalFlexLayout=adhere_ui_flexlayout_1.default.VerticalFlexLayout,selectorPrefix="adhere-ui-comment-list-standard",ListStandard=function(r){var e=r.limit,t=void 0===e?10:e,a=r.dataKeys,l=void 0===a?{current:"current",totalPage:"totalPage",list:"list",totalCount:"totalCount"}:a,i=r.listProps,n=void 0===i?{}:i,u=r.flexLayoutProps,o=void 0===u?{}:u,_=r.renderFirstLoading,e=r.renderEmpty,c=void 0===e?function(){return react_1.default.createElement(antd_1.Empty,null)}:e,d=r.renderList,a=r.getScrollWrapContainer,s=(0,react_1.useRef)({page:1,limit:t}),f=(0,react_1.useRef)(),p=(0,react_1.useRef)(adhere_ui_scrollload_1.default.NORMAL),i=(0,react_1.useRef)(null),e=tslib_1.__read((0,react_1.useState)(((u={})[l.current]=1,u[l.totalPage]=0,u[l.list]=[],u[l.totalCount]=0,u)),2),h=e[0],b=e[1],u=tslib_1.__read((0,react_1.useState)(!0),2),e=u[0],g=u[1];function m(t){var e;return null===(e=null==r?void 0:r.fetchData)||void 0===e?void 0:e.call(r,null==s?void 0:s.current).then(function(e){return t(e),g(!1),e}).catch(function(e){var t;return g(!1),f.current&&(p.current=adhere_ui_scrollload_1.default.ERROR,null!==(t=null==f?void 0:f.current)&&void 0!==t&&t.call(f,p.current)),e})}return(0,react_1.useEffect)(function(){g(!0),s.current={page:1,limit:t},m(function(e){return b(e)})},[]),(0,react_1.useLayoutEffect)(function(){f.current&&(p.current=s.current.page<h[l.totalPage]?adhere_ui_scrollload_1.default.NORMAL:adhere_ui_scrollload_1.default.EMPTY,null!=f&&f.current(p.current))},[h]),react_1.default.createElement(VerticalFlexLayout,tslib_1.__assign({},o||{},{className:"".concat(selectorPrefix),renderMain:react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-auto"),ref:i},react_1.default.createElement(List_1.default,tslib_1.__assign({getScrollWrapContainer:a,isLoading:e,hasMore:h[l.list].length<=h[l.totalCount],onLoadMore:function(e){if(p.current===adhere_ui_scrollload_1.default.EMPTY)return p.current=adhere_ui_scrollload_1.default.EMPTY,void e(adhere_ui_scrollload_1.default.EMPTY);f.current=e,setTimeout(function(){g(!0),s.current.page=s.current.page+1;var a=l.list;return m(function(r){b(function(e){var t;return tslib_1.__assign(tslib_1.__assign({},r),((t={})[l.list]=tslib_1.__spreadArray(tslib_1.__spreadArray([],tslib_1.__read(e[a]),!1),tslib_1.__read(r[a]),!1),t))})})},100)},renderFirstLoading:_},n||{}),react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!(1===s.current.page&&0===h[l.list].length),noMatch:function(){return c()}},function(){return null==d?void 0:d(h)})))}))};exports.default=ListStandard;
//# sourceMappingURL=index.js.map
