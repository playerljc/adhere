import _TreeSelect from"antd/es/tree-select";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var n={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]]);return n};import{useUpdateEffect}from"ahooks";import classNames from"classnames";import debounce from"lodash.debounce";import React,{memo,useCallback,useMemo,useState}from"react";import useCommon from"./useCommon";var TreeAutoComplete=memo(function(e){var t=e.classNameWrap,n=e.styleWrap,o=e.renderLoading,a=e.debounceTimeout,r=e.loadData,l=e.treeData,u=e.defaultTreeData,s=e.emptyContent,i=e.children,c=e.treeDataSimpleMode,m=__rest(e,["classNameWrap","styleWrap","renderLoading","debounceTimeout","loadData","treeData","defaultTreeData","emptyContent","children","treeDataSimpleMode"]),e=useState(null!=u?u:[]),p=e[0],d=e[1],e=useCommon({renderLoading:o,emptyContent:s,loadData:r}),o=e.defaultDebounceTimeout,s=e.selectorPrefix,f=e.fetchLoading,h=e.empty,g=e.fetching,r=e.setOpen,y=e.onClear,C=e.onInputMemo;function b(e,t,n){d(n.allCheckedNodes),null!=(n=m.onChange)&&n.call(m,e)}var e=useCallback(debounce(function(e){e=e.trim();e?C(e):y()},null!=a?a:o),[a]),o=useMemo(function(){return[]},[p,l]),v=useMemo(function(){return[]},[l,u,m.value]);return useUpdateEffect(function(){d(null!=u?u:[])},[u]),React.createElement("div",{className:classNames(s,null!=t?t:""),style:null!=n?n:{}},React.createElement(_TreeSelect,__assign({showSearch:!0,allowClear:!0,treeData:null!=o?o:[],onSearch:e,dropdownRender:function(e){var t;return g?f:null!=v&&v.length?null!=(t=null==i?void 0:i({originNode:e,treeDataSimpleMode:c,value:m.value,onChange:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return b.apply(void 0,e)},treeData:null!=v?v:[],loading:g}))?t:e:h},onDropdownVisibleChange:r,treeDataSimpleMode:!!c},m,{onChange:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return b.apply(void 0,e)}})))});TreeAutoComplete.displayName="TreeAutoComplete";export default TreeAutoComplete;
//# sourceMappingURL=TreeAutoComplete.js.map
