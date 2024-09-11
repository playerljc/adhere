var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var e,a=1,n=arguments.length;a<n;a++)for(var l in e=arguments[a])Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);return t}).apply(this,arguments)},__rest=this&&this.__rest||function(t,e){var a={};for(l in t)Object.prototype.hasOwnProperty.call(t,l)&&e.indexOf(l)<0&&(a[l]=t[l]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,l=Object.getOwnPropertySymbols(t);n<l.length;n++)e.indexOf(l[n])<0&&Object.prototype.propertyIsEnumerable.call(t,l[n])&&(a[l[n]]=t[l[n]]);return a},__spreadArray=this&&this.__spreadArray||function(t,e,a){if(a||2===arguments.length)for(var n,l=0,r=e.length;l<r;l++)!n&&l in e||((n=n||Array.prototype.slice.call(e,0,l))[l]=e[l]);return t.concat(n||Array.prototype.slice.call(e))};import{useMount,useUpdateEffect,useUpdateLayoutEffect}from"ahooks";import React,{cloneElement,useMemo,useRef,useState}from"react";import{useImmer}from"use-immer";import ScrollLoad from"@baifendian/adhere-ui-scrollload";import PRSL from"./PRSL";var DEFAULT_LIMIT=20;function Paging(t){var n=t.options,e=t.children,r=t.defaultPaging,a=t.isLocal,l=void 0===a||a,o=t.onLoad,i=t.onDataSourceChange,a=__rest(t,["options","children","defaultPaging","isLocal","onLoad","onDataSourceChange"]),u=useRef(),c=useRef(null),s=useRef(ScrollLoad.NORMAL),t=useState(!0),p=t[0],f=t[1],t=useImmer(__assign({page:1,limit:DEFAULT_LIMIT,data:[]},null!=r?r:{})),d=t[0],g=t[1];function m(){l&&g(function(t){var e=null!=r?r:{page:1,limit:DEFAULT_LIMIT},a=null!=(a=e.page)?a:1,e=null!=(e=e.limit)?e:DEFAULT_LIMIT;t.page=a,t.limit=e,t.data=(null!=n?n:[]).slice((t.page-1)*t.limit,t.page*t.limit)}),o&&null!=o&&o(1,d.limit).then(function(t){var n=t.total,l=t.data;null!=i&&i(1,l),g(function(t){var e=null!=r?r:{page:1,limit:DEFAULT_LIMIT},a=null!=(a=e.page)?a:1,e=null!=(e=e.limit)?e:DEFAULT_LIMIT;t.page=a,t.limit=e,t.total=n,t.data=l})})}function _(){var t,e;(e=null==(e=null==(t=null==u?void 0:u.current)?void 0:t.getScrollEl)?void 0:e.call(t))&&(e.scrollTop=0),null!=(e=null==(t=null==u?void 0:u.current)?void 0:t.hideAll)&&e.call(t),c.current=null,s.current=ScrollLoad.NORMAL,m()}var L=useMemo(function(){var t;return l?(t=(null!=n?n:[]).length,Math.floor(t/d.limit)+(t%d.limit==0?0:1)):(null!=(t=null==d?void 0:d.total)?t:0)/d.limit},[d.limit,null==d?void 0:d.total,n,l]),t=useMemo(function(){return cloneElement(e,__assign(__assign({},e.props),{options:d.data}))},[d.data,e]);return useUpdateLayoutEffect(function(){c.current&&(s.current=d.page<L?ScrollLoad.NORMAL:ScrollLoad.EMPTY,c.current(s.current))},[d.data,L]),useUpdateEffect(function(){_()},[n,r]),useMount(function(){f(!1),m()}),React.createElement(PRSL,__assign({ref:u,isLoading:p,onRefresh:function(){_()},onLoadMore:function(t){c.current=t,l&&g(function(t){t.page=t.page+1,t.data=__spreadArray(__spreadArray([],t.data,!0),(null!=n?n:[]).slice((t.page-1)*t.limit,t.page*t.limit),!0)}),o&&null!=o&&o(d.page+1,d.limit).then(function(t){var e=t.total,t=t.data,a=void 0===t?[]:t;null!=i&&i(d.page+1,a),g(function(t){t.page=t.page+1,t.total=e,t.data=__spreadArray(__spreadArray([],t.data,!0),a,!0)})})}},a,{pages:L}),t)}export default Paging;export{DEFAULT_LIMIT};
//# sourceMappingURL=Paging.js.map
