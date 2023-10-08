import _CloseCircleFill from"antd-mobile-icons/es/CloseCircleFill";import _CheckList from"antd-mobile/es/components/check-list";import _SearchBar from"antd-mobile/es/components/search-bar";import _ErrorBlock from"antd-mobile/es/components/error-block";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var l,t=1,n=arguments.length;t<n;t++)for(var r in l=arguments[t])Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);return e}).apply(this,arguments)},__spreadArray=this&&this.__spreadArray||function(e,l,t){if(t||2===arguments.length)for(var n,r=0,a=l.length;r<a;r++)!n&&r in l||((n=n||Array.prototype.slice.call(l,0,r))[r]=l[r]);return e.concat(n||Array.prototype.slice.call(l))};import classNames from"classnames";import React,{memo,useEffect,useState}from"react";import Intl from"@baifendian/adhere-util-intl";var selectorPrefix="adhere-mobile-ui-auto-complete",AutoComplete=function(e){function l(){return!m.length}function r(e){return e[null!=f?f:"id"]}function a(e){return e[null!=v?v:"value"]}function t(e){return null!=(e=e[null!=d?d:"label"])?e:null}function n(t){var l,e;b(function(e){return e.filter(function(e){var l;return(null!=(l=a(e))?l:r(e))!==t})}),null!=_&&_((l=t,null!=(e=null==(e=null==h?void 0:h.filter)?void 0:e.call(h,function(e){return e!==l}))?e:[]))}var c=e.className,o=e.style,i=e.searchBarProps,u=e.checkListProps,s=e.loadData,m=e.searchDataSource,f=e.rowKey,p=e.renderItem,d=e.labelProp,v=e.valueProp,h=e.value,_=e.onChange,e=e.renderEmpty,y=useState(""),E=y[0],g=y[1],y=useState([]),C=y[0],b=y[1];return useEffect(function(){var e;b(null!=(e=null==(e=null==h?void 0:h.map)?void 0:e.call(h,function(t){var e;return null==(e=null==m?void 0:m.find)?void 0:e.call(m,function(e){var l;return(null!=(l=a(e))?l:r(e))===t})}))?e:[])},[m,h]),React.createElement("div",{className:classNames(selectorPrefix,null!=c?c:""),style:null!=o?o:{}},React.createElement("div",{className:"".concat(selectorPrefix,"-search-bar")},React.createElement(_SearchBar,__assign({placeholder:Intl.v("输入文字过滤选项"),value:E,onChange:function(e){e||null!=s&&s(""),g(e)},onSearch:function(){null!=s&&s(E)}},null!=i?i:{}))),React.createElement("div",{className:"".concat(selectorPrefix,"-body")},l()&&(null!=(y=null==e?void 0:e())?y:React.createElement(_ErrorBlock,{status:"empty"})),!l()&&React.createElement(_CheckList,__assign({},null!=u?u:{},{value:h,onChange:function(e){b(function(n){return e.map(function(t){var e,l;return null==(l=null==(e=__spreadArray(__spreadArray([],m,!0),n,!0))?void 0:e.find)?void 0:l.call(e,function(e){var l;return(null!=(l=a(e))?l:r(e))===t})})}),null!=_&&_(e)}}),(null!=m?m:[]).map(function(e,l){l=p?p(e,l):{value:null!=(l=a(e))?l:r(e),children:null!=d?d:React.createElement("span",null,t(e))};return React.createElement(_CheckList.Item,__assign({key:r(e)},null!=l?l:{}))}))),!(null==h||!h.length)&&React.createElement("div",{className:"".concat(selectorPrefix,"-result")},null==C?void 0:C.map(function(e,l){return React.createElement("div",{key:r(e),className:"".concat(selectorPrefix,"-result-item")},React.createElement("div",{className:"".concat(selectorPrefix,"-result-item-close"),onClick:function(){return n(null==h?void 0:h[l])}},React.createElement(_CloseCircleFill,null)),React.createElement("span",null,t(e)))})))};export default memo(AutoComplete);
//# sourceMappingURL=AutoComplete.js.map
