import{__assign,__rest,__spreadArray}from"tslib";import{Button}from"antd";import React,{memo,useMemo}from"react";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import HistoryBack from"@baifendian/adhere-ui-historyback";import Intl from"@baifendian/adhere-util-intl";import ToolBarLayout from"./toolBarLayout";var BackLayout=function(o){var t=o.topToolBarItems,r=void 0===t?[]:t,t=o.isShowBack,a=void 0===t||t,t=o.backPath,e=void 0===t?"/":t,t=o.enforceBackPath,i=void 0===t?"":t,n=o.history,c=o.backTitle,t=o.children,o=__rest(o,["topToolBarItems","isShowBack","backPath","enforceBackPath","history","backTitle","children"]),l=useMemo(function(){return __spreadArray(__spreadArray([],r||[],!0),[React.createElement(ConditionalRender,{key:"backBtn",conditional:a},function(){return React.createElement(Button,{onClick:function(){i?n.replace(i):HistoryBack(n,e)}},c||Intl.v("返回"))})],!1).filter(function(o){return!("props"in o&&"conditional"in o.props)||o.props.conditional})},[r,a,i,e,c]);return React.createElement(ToolBarLayout,__assign({},o,{topToolBarItems:l}),t)};export default memo(BackLayout);
//# sourceMappingURL=backLayout.js.map
