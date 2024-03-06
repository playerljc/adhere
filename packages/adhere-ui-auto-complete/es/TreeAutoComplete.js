import _TreeSelect from"antd/es/tree-select";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,r){var t={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t},__spreadArray=this&&this.__spreadArray||function(e,r,t){if(t||2===arguments.length)for(var n,a=0,o=r.length;a<o;a++)!n&&a in r||((n=n||Array.prototype.slice.call(r,0,a))[a]=r[a]);return e.concat(n||Array.prototype.slice.call(r))};import{useUpdateEffect}from"ahooks";import classNames from"classnames";import debounce from"lodash.debounce";import React,{memo,useCallback,useMemo,useRef,useState}from"react";import Util from"@baifendian/adhere-util";import useCommon from"./useCommon";var treeTransformConfig={keyAttr:"value",titleAttr:"title",parentIdAttr:"pId",rootParentId:0},TreeAutoComplete=memo(function(e){var r=e.classNameWrap,t=e.styleWrap,n=e.renderLoading,a=e.debounceTimeout,o=e.loadData,l=e.treeData,u=e.emptyContent,i=e.children,s=e.treeDataSimpleMode,c=__rest(e,["classNameWrap","styleWrap","renderLoading","debounceTimeout","loadData","treeData","emptyContent","children","treeDataSimpleMode"]),e=useState({}),f=e[0],p=e[1],m=useRef(0),e=useCommon({renderLoading:n,emptyContent:u,loadData:o}),n=e.defaultDebounceTimeout,u=e.selectorPrefix,d=e.fetchLoading,y=e.empty,g=e.fetching,o=e.open,_=e.setOpen,A=e.onClear,C=e.onInputMemo;function h(e){return(Array.isArray(e)?e:[e]).reduce(function(e,r){var t=k.find(function(e){return e.value===r});return e[r]=__spreadArray(__spreadArray([],Util.getAncestor(k,t,treeTransformConfig),!0),[t],!1),e},{})}function v(e,r,t){var n;t.triggerNode?(p(h(e)),null!=(n=c.onChange)&&n.call(c,e),T?m.current=Date.now():_(!1)):(p({}),null!=(n=c.onChange)&&n.call(c,e,r,t))}var e=useCallback(debounce(function(r){var e=Date.now();["ant-checkbox-input"].some(function(e){return-1!==r.target.className.indexOf(e)})||(T&&0!==m.current&&e-m.current<=400?m.current=0:(m.current=0,e=r.target.value.trim(),C(e)))},null!=a?a:n),[a]),b=useMemo(function(){return"treeCheckable"in c&&!!c.treeCheckable},[c.treeCheckable]),T=useMemo(function(){return b||"multiple"in c&&!!c.multiple},[b,c.multiple]),I=useMemo(function(){return s?l:Util.treeToArray(l,{parentIdAttr:treeTransformConfig.parentIdAttr,rootParentId:treeTransformConfig.rootParentId},treeTransformConfig.keyAttr)},[l]),O=useMemo(function(){return Object.keys(f).map(function(e){return f[e]}).flat()},[f]),D=useMemo(function(){var e,r,t,n;return s?(r=(e=__spreadArray(__spreadArray([],null!=l?l:[],!0),null!=O?O:[],!0)).map(function(e){return e.value}),t=Array.from(new Set(r)),Util.treeToArray(Util.completionIncompleteFlatArr(__spreadArray(__spreadArray([],null!=l?l:[],!0),null!=O?O:[],!0),t.map(function(r){return e.find(function(e){return e.value===r})}),treeTransformConfig),{parentIdAttr:treeTransformConfig.parentIdAttr,rootParentId:treeTransformConfig.rootParentId},treeTransformConfig.keyAttr)):(r=(n=__spreadArray(__spreadArray([],null!=I?I:[],!0),null!=O?O:[],!0)).map(function(e){return e.value}),n=(t=Array.from(new Set(r))).map(function(r){return n.find(function(e){return e.value===r})}),Util.completionIncompleteFlatArr(__spreadArray(__spreadArray([],null!=I?I:[],!0),null!=O?O:[],!0),n,treeTransformConfig))},[l,I,f,c.value]),k=useMemo(function(){return s?D:Util.treeToArray(D,{parentIdAttr:treeTransformConfig.parentIdAttr,rootParentId:treeTransformConfig.rootParentId},treeTransformConfig.keyAttr)},[s,D]);return useUpdateEffect(function(){var r=Object.keys(f),e=null!=(e=c.value)?e:c.defaultValue,e=(Array.isArray(e)?e:[e]).filter(function(e){return!r.includes(e)});e.length&&p(__assign(__assign({},f),h(e)))},[c.defaultValue,c.value,f,k]),React.createElement("div",{className:classNames(u,null!=r?r:""),style:null!=t?t:{}},React.createElement(_TreeSelect,__assign({showSearch:!0,allowClear:!0,filterTreeNode:!1,open:o,treeData:D,onInput:e,onClear:A,dropdownRender:function(e){var r;return g?d:null!=D&&D.length?null!=(r=null==i?void 0:i({originNode:e,treeDataSimpleMode:s,value:c.value,onChange:function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return v.apply(void 0,e)},treeData:null!=D?D:[],loading:g}))?r:e:y},onDropdownVisibleChange:_},c,{treeCheckable:!1,treeDataSimpleMode:!!s,onChange:function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return v.apply(void 0,e)}})))});TreeAutoComplete.displayName="TreeAutoComplete";export default TreeAutoComplete;
//# sourceMappingURL=TreeAutoComplete.js.map
