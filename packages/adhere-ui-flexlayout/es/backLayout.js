import _Button from"antd/es/button";import"core-js/modules/es.array.filter.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.regexp.exec.js";import"core-js/modules/es.string.replace.js";import{__assign,__rest,__spreadArray}from"tslib";import React,{memo,useMemo}from"react";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import HistoryBack from"@baifendian/adhere-ui-historyback";import Intl from"@baifendian/adhere-util-intl";import ToolBarLayout from"./toolBarLayout";var BackLayout=function(o){var e=o.topToolBarItems,t=void 0===e?[]:e,e=o.isShowBack,r=void 0===e||e,e=o.backPath,a=void 0===e?"/":e,e=o.enforceBackPath,i=void 0===e?"":e,n=o.history,c=o.backTitle,e=o.children,o=__rest(o,["topToolBarItems","isShowBack","backPath","enforceBackPath","history","backTitle","children"]),s=useMemo(function(){return __spreadArray(__spreadArray([],t||[],!0),[React.createElement(ConditionalRender,{key:"backBtn",conditional:r},function(){return React.createElement(_Button,{onClick:function(){i?n.replace(i):HistoryBack(n,a)}},c||Intl.v("返回"))})],!1).filter(function(o){return!("props"in o&&"conditional"in o.props)||o.props.conditional})},[t,r,i,a,c]);return React.createElement(ToolBarLayout,__assign({},o,{topToolBarItems:s}),e)};export default memo(BackLayout);
//# sourceMappingURL=backLayout.js.map
