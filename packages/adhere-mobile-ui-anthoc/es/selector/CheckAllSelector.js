var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var l,r=1,c=arguments.length;r<c;r++)for(var t in l=arguments[r])Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,l){var r={};for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var c=0,t=Object.getOwnPropertySymbols(e);c<t.length;c++)l.indexOf(t[c])<0&&Object.prototype.propertyIsEnumerable.call(e,t[c])&&(r[t[c]]=e[t[c]]);return r};import React,{memo,useMemo}from"react";import ListCheckAll from"../ListCheckAll";import Selector from"./Selector";var selectorPrefix="adhere-mobile-ui-ant-hoc-check-all-selector",InternalCheckAllSelector=memo(function(e){var l=e.checkAllWrapperClassName,r=e.checkAllWrapperStyle,c=e.checkAllBodyWrapperClassName,t=e.checkAllBodyWrapperStyle,a=e.renderCheckAll,o=e.checkAllLabel,n=e.onCheckAllChange,p=__rest(e,["checkAllWrapperClassName","checkAllWrapperStyle","checkAllBodyWrapperClassName","checkAllBodyWrapperStyle","renderCheckAll","checkAllLabel","onCheckAllChange"]),e=useMemo(function(){return React.createElement(Selector,__assign({multiple:!0},p))},[p]);return React.createElement(ListCheckAll,{checkAllWrapperClassName:l,checkAllWrapperStyle:r,checkAllBodyWrapperClassName:c,checkAllBodyWrapperStyle:t,renderCheckAll:a,checkAllLabel:o,onCheckAllChange:n,value:null!=(l=p.value)?l:[],options:null!=(c=null==(r=null==p?void 0:p.options)?void 0:r.map(function(e){return e.value}))?c:[],selectorPrefix:selectorPrefix,childrenOrigin:e})}),CheckAllSelector=InternalCheckAllSelector;CheckAllSelector.displayName="CheckAllSelector";export default CheckAllSelector;
//# sourceMappingURL=CheckAllSelector.js.map
