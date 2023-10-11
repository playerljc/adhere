import _CloseCircleFill from"antd-mobile-icons/es/CloseCircleFill";import _CheckList from"antd-mobile/es/components/check-list";import _SearchBar from"antd-mobile/es/components/search-bar";import _ErrorBlock from"antd-mobile/es/components/error-block";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var l,n=1,t=arguments.length;n<t;n++)for(var r in l=arguments[n])Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);return e}).apply(this,arguments)},__spreadArray=this&&this.__spreadArray||function(e,l,n){if(n||2===arguments.length)for(var t,r=0,a=l.length;r<a;r++)!t&&r in l||((t=t||Array.prototype.slice.call(l,0,r))[r]=l[r]);return e.concat(t||Array.prototype.slice.call(l))};import classNames from"classnames";import React,{memo,useEffect,useState}from"react";import Intl from"@baifendian/adhere-util-intl";var selectorPrefix="adhere-mobile-ui-auto-complete",AutoComplete=function(e){function l(){return!(null!=m&&m.length)}function r(e){return e[null!=f?f:"id"]}function a(e){return e[null!=p?p:"value"]}function t(e){return null!=(e=e[null!=d?d:"label"])?e:null}function c(n){var l,e;b(function(e){return e.filter(function(e){var l;return(null!=(l=a(e))?l:r(e))!==n})}),null!=_&&_((l=n,null!=(e=null==(e=null==v?void 0:v.filter)?void 0:e.call(v,function(e){return e!==l}))?e:[]))}var n=e.className,o=e.style,u=e.searchBarProps,i=e.checkListProps,s=e.loadData,m=e.searchDataSource,f=e.rowKey,d=e.labelProp,p=e.valueProp,v=e.value,_=e.onChange,h=e.renderItem,y=e.renderResultItem,e=e.renderEmpty,E=useState(""),g=E[0],C=E[1],E=useState([]),R=E[0],b=E[1];return useEffect(function(){b(function(t){var e;return null!=(e=null==(e=null==v?void 0:v.map)?void 0:e.call(v,function(n){var e,l;return null==(l=null==(e=__spreadArray(__spreadArray([],null!=m?m:[],!0),t,!0))?void 0:e.find)?void 0:l.call(e,function(e){var l;return(null!=(l=a(e))?l:r(e))===n})}))?e:[]})},[m,v]),React.createElement("div",{className:classNames(selectorPrefix,null!=n?n:""),style:null!=o?o:{}},React.createElement("div",{className:"".concat(selectorPrefix,"-search-bar")},React.createElement(_SearchBar,__assign({placeholder:Intl.v("输入文字过滤选项"),value:g,onChange:function(e){e||null!=s&&s(""),C(e)},onSearch:function(){null!=s&&s(g)}},null!=u?u:{}))),React.createElement("div",{className:"".concat(selectorPrefix,"-body")},l()&&(null!=(E=null==e?void 0:e())?E:React.createElement(_ErrorBlock,{status:"empty"})),!l()&&React.createElement(_CheckList,__assign({},null!=i?i:{},{value:v,onChange:function(e){b(function(t){return e.map(function(n){var e,l;return null==(l=null==(e=__spreadArray(__spreadArray([],null!=m?m:[],!0),t,!0))?void 0:e.find)?void 0:l.call(e,function(e){var l;return(null!=(l=a(e))?l:r(e))===n})})}),null!=_&&_(e)}}),(null!=m?m:[]).map(function(e,l){var n={value:null!=(n=a(e))?n:r(e)},n=__assign(h?__assign({},h(e,l)):{children:null!=d?d:React.createElement("span",null,t(e))},n);return React.createElement(_CheckList.Item,__assign({key:r(e)},null!=n?n:{}))}))),!(null==v||!v.length)&&React.createElement("div",{className:"".concat(selectorPrefix,"-result")},null==R?void 0:R.map(function(e,l){var n;return React.createElement("div",{key:r(e),className:"".concat(selectorPrefix,"-result-item")},React.createElement("div",{className:"".concat(selectorPrefix,"-result-item-close"),onClick:function(){return c(null==v?void 0:v[l])}},React.createElement(_CloseCircleFill,null)),null!=(n=null==y?void 0:y(e))?n:React.createElement("span",null,t(e)))})))};export default memo(AutoComplete);
//# sourceMappingURL=AutoComplete.js.map