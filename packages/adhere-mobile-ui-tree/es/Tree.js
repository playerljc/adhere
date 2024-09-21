import _ErrorBlock from"antd-mobile/es/components/error-block";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};import{useUpdateEffect}from"ahooks";import classNames from"classnames";import React,{memo,useMemo}from"react";import Hooks from"@baifendian/adhere-ui-hooks";import Space from"@baifendian/adhere-ui-space";import Util from"@baifendian/adhere-util";import{DEFAULT_CHECKSTRICTLY,DEFAULT_MULTIPLE,DEFAULT_SIZE,DEFAULT_TREE_CHECKABLE}from"./Constant";import TreeContext from"./TreeContext";import TreeNode from"./TreeNode";import TreeNodeContext from"./TreeNodeContext";import useChecked from"./useChecked";var selectorPrefix="adhere-mobile-ui-tree",usePropToState=Hooks.usePropToState,Tree=memo(function(e){var t=e.className,r=e.style,n=e.treeData,o=(e.expandAll,e.expandedKeys),c=e.selectedKeys,u=e.switcherIcon,i=e.titleRender,a=e.icon,s=e.renderEmpty,l=e.size,m=e.checkable,d=e.checkedKeys,f=e.multiple,p=e.checkStrictly,E=e.onSelect,h=e.onExpand,T=e.onCheck,e=useChecked(),C=e.getDefaultCheckedKeysWithCheckStrictly,y=e.hasCheckableNodeInParentChildren,k=useMemo(function(){return null!=l?l:DEFAULT_SIZE},[l]),_=useMemo(function(){return Util.isEmpty(m)?DEFAULT_TREE_CHECKABLE:m},[m]),S=useMemo(function(){return Util.isEmpty(f)?DEFAULT_MULTIPLE:f},[f]),L=useMemo(function(){return Util.isEmpty(p)?DEFAULT_CHECKSTRICTLY:p},[p]),M=useMemo(function(){return null!=n?n:[]},[n]),e=useMemo(function(){return null!=o?o:[]},[o]),e=usePropToState(e),U=e[0],x=e[1],e=useMemo(function(){return null!=c?c:[]},[c]),e=usePropToState(e),K=e[0],P=e[1],R=useMemo(function(){var e=null!=d?d:[];return L?C(M,e):e},[M,d,L]),e=usePropToState(R),v=e[0],N=e[1],b=(useUpdateEffect(function(){N(R)},[R]),useMemo(function(){return new Map([["small",5],["middle",15],["large",25]]).get(k)},[k])),A=useMemo(function(){return M.map(function(e){return React.createElement(TreeNodeContext.Provider,{value:{hasCheckableNodeInParentChildren:function(){return y(e.children)}}},React.createElement(TreeNode,__assign({level:0,id:e.key},e)))})},[M,u,i]),e=useMemo(function(){return!A.length},[A]),D=useMemo(function(){return{expandedKeys:function(){return U},selectedKeys:function(){return K},checkedKeys:function(){return v},setSelectedKeys:P,setExpandedKeys:x,setCheckedKeys:N,size:function(){return k},rowGap:function(){return null!=b?b:15},multiple:function(){return S},checkable:function(){return _},treeData:function(){return n},checkStrictly:function(){return L},icon:a,titleRender:i,switcherIcon:u,onSelect:E,onExpand:h,onCheck:T}},[U,K,v,b,k,S,_,n,p,a,i,u,E,h,T]);return React.createElement(TreeContext.Provider,{value:D},React.createElement("ul",{className:classNames(selectorPrefix,t),style:null!=r?r:{}},React.createElement(Space.Group,{direction:"vertical",size:b},e&&React.createElement("li",null,null!=(D=null==s?void 0:s())?D:React.createElement(_ErrorBlock,{status:"empty"})),!e&&A)))});Tree.displayName="Tree";export default Tree;
//# sourceMappingURL=Tree.js.map
