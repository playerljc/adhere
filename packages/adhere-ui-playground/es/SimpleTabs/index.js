import React,{memo,useCallback,useEffect,useState}from"react";import{TabContext}from"./Context";import TabPanel from"./TabPanel";var selectorPrefix="adhere-ui-playground-simple-tabs",SimpleTabs=function(e){var a=e.className,a=void 0===a?"":a,t=e.onChange,r=e.children,c=useState(e.activeKey),n=c[0],l=c[1],c=useCallback(function(){return r instanceof Array?r.map(o):o(r)},[r]);function o(e){var e=e.props,a=e.index,e=e.title;return React.createElement("li",{key:a,className:n===a?"active":"",onClick:function(){l(a),t&&t(a)}},e)}return useEffect(function(){return l(e.activeKey)},[e.activeKey]),React.createElement(TabContext.Provider,{value:{activeKey:n||""}},React.createElement("div",{className:selectorPrefix+" "+a},React.createElement("ul",{className:selectorPrefix+"-head"},c()),React.createElement("div",{className:selectorPrefix+"-body"},r)))},MemoWrap=memo(SimpleTabs);MemoWrap.TabPanel=TabPanel;export default MemoWrap;
//# sourceMappingURL=index.js.map
