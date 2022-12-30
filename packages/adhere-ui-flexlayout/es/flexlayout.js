import classNames from"classnames";import React,{memo}from"react";import Auto from"./auto";import BackLayout from"./backLayout";import{FlexContext}from"./context";import Fixed from"./fixed";import HorizontalFlexLayout from"./horizontalFlexLayout";import ScrollLayout,{ScrollLayoutContext,useScrollLayout}from"./scrollLayout";import ToolBarLayout from"./toolBarLayout";import VerticalFlexLayout from"./verticalFlexLayout";var selectorPrefix="adhere-ui-flexlayout",FlexLayout=function(o){var e=o.className,e=void 0===e?"":e,t=o.style,t=void 0===t?{}:t,a=o.direction,a=void 0===a?"vertical":a,o=o.children;return React.createElement(FlexContext.Provider,{value:{direction:a}},React.createElement("div",{className:classNames(selectorPrefix,"".concat(selectorPrefix,"-").concat(a),e||""),style:t||{}},o))},MemoWrap=memo(FlexLayout);MemoWrap.selectorPrefix=selectorPrefix,MemoWrap.Context=FlexContext,MemoWrap.Fixed=Fixed,MemoWrap.Auto=Auto,MemoWrap.HorizontalFlexLayout=HorizontalFlexLayout,MemoWrap.VerticalFlexLayout=VerticalFlexLayout,MemoWrap.ToolBarLayout=ToolBarLayout,MemoWrap.BackLayout=BackLayout,MemoWrap.ScrollLayout=ScrollLayout,MemoWrap.useScrollLayout=useScrollLayout,MemoWrap.ScrollLayoutContext=ScrollLayoutContext;export default MemoWrap;export{selectorPrefix};
//# sourceMappingURL=flexlayout.js.map
