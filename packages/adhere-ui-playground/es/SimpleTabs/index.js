import React,{memo,useCallback,useEffect,useState}from"react";import{TabContext}from"./Context";import TabPanel from"./TabPanel";var selectorPrefix="adhere-ui-playground-simple-tabs",InternalSimpleTabs=memo(function(e){var a=e.className,a=void 0===a?"":a,t=e.onChange,c=e.children,n=useState(e.activeKey),l=n[0],r=n[1],n=useCallback(function(){return c instanceof Array?c.map(i):i(c)},[c]);function i(e){var e=e.props,a=e.index,e=e.title;return React.createElement("li",{key:a,className:l===a?"active":"",onClick:function(){r(a),t&&t(a)}},e)}return useEffect(function(){r(e.activeKey)},[e.activeKey]),React.createElement(TabContext.Provider,{value:{activeKey:null!=l?l:""}},React.createElement("div",{className:"".concat(selectorPrefix," ").concat(a)},React.createElement("ul",{className:"".concat(selectorPrefix,"-head")},n()),React.createElement("div",{className:"".concat(selectorPrefix,"-body")},c)))}),SimpleTabs=InternalSimpleTabs;SimpleTabs.TabPanel=TabPanel;export default SimpleTabs;
//# sourceMappingURL=index.js.map
