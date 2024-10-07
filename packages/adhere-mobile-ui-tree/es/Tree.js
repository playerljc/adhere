import _SearchBar from"antd-mobile/es/components/search-bar";import _ErrorBlock from"antd-mobile/es/components/error-block";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};import{useLatest,useUpdateEffect}from"ahooks";import classNames from"classnames";import React,{memo,useContext,useMemo,useState}from"react";import ConfigProvider from"@baifendian/adhere-ui-configprovider";import Hooks from"@baifendian/adhere-ui-hooks";import Space from"@baifendian/adhere-ui-space";import Util from"@baifendian/adhere-util";import Intl from"@baifendian/adhere-util-intl";import{DEFAULT_CHECKBOX_GAP,DEFAULT_CHECKBOX_WIDTH,DEFAULT_CHECKSTRICTLY,DEFAULT_FILTER_KEY,DEFAULT_ICON_GAP,DEFAULT_INDENT,DEFAULT_MULTIPLE,DEFAULT_ROW_GAP,DEFAULT_SHOW_SEARCH,DEFAULT_SIZE,DEFAULT_TITLE_GAP,DEFAULT_TREE_CHECKABLE,DEFAULT_TREE_UTIL_CONFIG}from"./Constant";import TreeContext from"./TreeContext";import TreeNode from"./TreeNode";import TreeNodeContext from"./TreeNodeContext";import TreeSelect from"./TreeSelect";import useChecked from"./useChecked";import useUtil from"./useUtil";var selectorPrefix="adhere-mobile-ui-tree",usePropToState=Hooks.usePropToState,InternalTree=memo(function(e){var t=e.className,v=e.style,r=e.treeData,n=(e.expandAll,e.expandedKeys),o=e.selectedKeys,i=e.switcherIcon,a=e.titleRender,G=e.icon,O=e.renderEmpty,c=e.size,u=e.checkable,l=e.checkedKeys,s=e.multiple,m=e.checkStrictly,f=e.treeDataSimpleMode,g=e.loadData,E=e.loadedKeys,T=e.showSearch,d=e.filterKey,p=e.rowGap,_=e.checkboxWidth,h=e.checkboxGap,U=e.titleGap,C=e.iconGap,L=e.indent,H=e.onSelect,B=e.onExpand,W=e.onCheck,A=useContext(ConfigProvider.Context).media,e=useUtil(),D=e.omitDisabledKeys,S=e.getValueWithUnit,w=e.checkTreeDataSimpleModeFromObject,e=useChecked(),j=e.getDefaultCheckedKeysWithCheckStrictly,X=e.existsCheckableNodeInParentChildren,F=useMemo(function(){return!(!Util.isBoolean(f)&&!Util.isObject(f))&&f},[f]),y=useMemo(function(){return null!=c?c:DEFAULT_SIZE},[c]),Y=useMemo(function(){return Util.isEmpty(u)?DEFAULT_TREE_CHECKABLE:u},[u]),z=useMemo(function(){return Util.isEmpty(s)?DEFAULT_MULTIPLE:s},[s]),I=useMemo(function(){return Util.isEmpty(m)?DEFAULT_CHECKSTRICTLY:m},[m]),e=useState(!1),Z=e[0],V=e[1],e=useState(""),R=e[0],q=e[1],e=useMemo(function(){return Util.isEmpty(T)?DEFAULT_SHOW_SEARCH:T},[T]),J=useMemo(function(){return Util.isEmpty(d)?DEFAULT_FILTER_KEY:d},[d]),k=useMemo(function(){var e=null!=r?r:[],e=(Util.isBoolean(F)?F&&(e=Util.arrayToAntdTreeSelect(e,DEFAULT_TREE_UTIL_CONFIG)):Util.isObject(F)&&w(F)&&(e=Util.arrayToAntdTreeSelect(e,F)),null!=e?e:[]);return Z&&R?Util.filterTree(e,R,__assign(__assign({},DEFAULT_TREE_UTIL_CONFIG),{filterAttr:J,titleAttr:J})):e},[R,Z,F,r]),k=usePropToState(k),N=k[0],Q=k[1],k=useMemo(function(){return null!=n?n:[]},[n]),k=usePropToState(k),$=k[0],ee=k[1],k=useMemo(function(){return D(N,null!=o?o:[])},[o]),k=usePropToState(k),te=k[0],re=k[1],k=useMemo(function(){var e=D(N,null!=l?l:[]).filter(function(e){return!!e});return I?j(N,e):e},[l,I]),k=usePropToState(k),P=k[0],ne=k[1],oe=useLatest(P),k=(useUpdateEffect(function(){var e=D(N,null!=(e=oe.current)?e:[]).filter(function(e){return!!e});ne(I?j(N,e):e)},[N,I]),useMemo(function(){return D(N,null!=E?E:[]).filter(function(e){return!!e})},[N,E])),k=usePropToState(k),M=k[0],ie=k[1],ae=useLatest(M),ce=(useUpdateEffect(function(){var e;ie(D(N,null!=(e=ae.current)?e:[]).filter(function(e){return!!e}))},[N]),useMemo(function(){return S(null!=_?_:DEFAULT_CHECKBOX_WIDTH,A)},[_,A])),ue=useMemo(function(){return S(null!=h?h:DEFAULT_CHECKBOX_GAP,A)},[h,A]),le=useMemo(function(){return S(null!=U?U:DEFAULT_TITLE_GAP,A)},[U,A]),se=useMemo(function(){return S(null!=C?C:DEFAULT_ICON_GAP,A)},[C,A]),me=useMemo(function(){return S(null!=L?L:DEFAULT_INDENT,A)},[L,A]),x=useMemo(function(){return null!=p?p:new Map([["small",5],["middle",15],["large",25]]).get(y)},[y,p]),b=useMemo(function(){return N.map(function(e){return React.createElement(TreeNodeContext.Provider,{value:{existsCheckableNodeInParentChildren:function(){return X(e.children)}}},React.createElement(TreeNode,__assign({level:0,id:e[DEFAULT_TREE_UTIL_CONFIG.keyAttr]},e)))})},[N,i,a]),k=useMemo(function(){return!b.length},[b]),K=useMemo(function(){return{expandedKeys:function(){return $},selectedKeys:function(){return te},checkedKeys:function(){return P},loadedKeys:function(){return M},setSelectedKeys:re,setExpandedKeys:ee,setCheckedKeys:ne,setLoadedKeys:ie,setTreeData:Q,loadData:g,size:function(){return y},rowGap:function(){return null!=x?x:DEFAULT_ROW_GAP},multiple:function(){return z},checkable:function(){return Y},treeData:function(){return r},checkStrictly:function(){return I},teeDataSimpleMode:function(){return F},icon:G,checkboxWidth:function(){return ce},checkboxGap:function(){return ue},titleGap:function(){return le},iconGap:function(){return se},indent:function(){return me},titleRender:a,switcherIcon:i,onSelect:H,onExpand:B,onCheck:W}},[$,te,P,M,x,y,z,Y,r,g,m,G,ce,ue,le,se,me,a,i,H,B,W]),t=React.createElement(TreeContext.Provider,{value:K},React.createElement("ul",{className:classNames(selectorPrefix,t),style:null!=v?v:{}},React.createElement(Space.Group,{direction:"vertical",size:x},k&&React.createElement("li",null,null!=(K=null==O?void 0:O())?K:React.createElement(_ErrorBlock,{status:"empty"})),!k&&b)));return React.createElement(React.Fragment,null,e&&React.createElement("div",{className:classNames("".concat(selectorPrefix,"-wrapper"))},React.createElement("div",{className:classNames("".concat(selectorPrefix,"-search"))},React.createElement(_SearchBar,{placeholder:Intl.v("请输入"),showCancelButton:!0,value:R,onChange:q,onSearch:function(){V(!0)},onClear:function(){q(""),V(!1)}})),React.createElement("div",{className:classNames("".concat(selectorPrefix,"-body"))},t)),!e&&t)}),Tree=InternalTree;Tree.TreeSelect=TreeSelect,Tree.displayName="Tree";export default Tree;
//# sourceMappingURL=Tree.js.map
