import _TabBar from"antd-mobile/es/components/tab-bar";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var a,t=1,r=arguments.length;t<r;t++)for(var n in a=arguments[t])Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);return e}).apply(this,arguments)};import classNames from"classnames";import React,{memo,useEffect,useState}from"react";import FlexLayout from"@baifendian/adhere-ui-flexlayout";import{useHistory}from"@ctsj/router";var VerticalFlexLayout=FlexLayout.VerticalFlexLayout,selectorPrefix="adhere-ui-tabs-tab-bar",TabBarNav=function(a){var e=a.data,e=void 0===e?[]:e,t=a.onChange,r=useHistory(),n=useState(null!=(n=a.activeKey)?n:""),o=n[0],l=n[1];return useEffect(function(){var e;return l(null!=(e=a.activeKey)?e:"")},[a.activeKey]),React.createElement(_TabBar,{activeKey:o,onChange:function(e){r.push(e),l(e),null!=t&&t(e)}},(null!=e?e:[]).map(function(e){return React.createElement(_TabBar.Item,__assign({},e))}))},SystemTabBar=memo(function(e){var a=e.className,a=void 0===a?"":a,t=e.style,t=void 0===t?{}:t,r=e.mainClassName,r=void 0===r?"":r,n=e.mainStyle,n=void 0===n?{}:n,o=e.bottomClassName,o=void 0===o?"":o,l=e.bottomStyle,l=void 0===l?{}:l,s=e.data,s=void 0===s?[]:s,i=e.activeKey,m=e.onChange,e=e.children,c=useHistory();return React.createElement(VerticalFlexLayout,{className:classNames(selectorPrefix,null!=a?a:""),style:null!=t?t:{},mainClassName:null!=r?r:"",mainStyle:null!=n?n:{},bottomClassName:null!=o?o:"",bottomStyle:null!=l?l:{},renderMain:e,renderBottom:React.createElement(TabBarNav,{data:s,activeKey:i!==c.location.pathname?c.location.pathname:i,onChange:m})})});SystemTabBar.displayName="SystemTabBar";export default SystemTabBar;
//# sourceMappingURL=index.js.map
