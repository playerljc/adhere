import classNames from"classnames";import React,{memo,useEffect,useState}from"react";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";var selectorPrefix="adhere-ui-playground-collapse",Collapse=function(e){var a=e.headerClassName,a=void 0===a?"":a,t=e.headerStyle,t=void 0===t?{}:t,c=e.bodyClassName,r=void 0===c?"":c,c=e.bodyStyle,o=void 0===c?{}:c,l=e.children,s=e.title,n=e.extra,c=e.border,i=void 0!==c&&c,c=e.scrollY,c=void 0!==c&&c,d=e.fixedHeaderScrollBody,d=void 0!==d&&d,m=useState(e.defaultCollapse||!1),f=m[0],u=m[1];return useEffect(function(){return u(e.defaultCollapse||!1)},[e.defaultCollapse]),React.createElement("div",{className:classNames(selectorPrefix,c?"".concat(selectorPrefix,"-scroll-y"):"",d?"".concat(selectorPrefix,"-fixed-header-scroll-body"):"")},React.createElement("div",{className:classNames("".concat(selectorPrefix,"-header"),i?"".concat(selectorPrefix,"-header-border"):"",a||""),style:t||{},onClickCapture:function(){u(!f)}},React.createElement("div",{className:"".concat(selectorPrefix,"-header-collapse")},React.createElement("div",{className:classNames("".concat(selectorPrefix,"-header-collapse-icon"),f?"":"".concat(selectorPrefix,"-header-collapse-icon-close"))}),React.createElement(ConditionalRender,{conditional:!!s},function(){return React.createElement("div",{className:"".concat(selectorPrefix,"-header-title")},s)})),React.createElement(ConditionalRender,{conditional:!!n},function(){return React.createElement("div",{className:"".concat(selectorPrefix,"-header-extra")},n)})),React.createElement(ConditionalRender,{conditional:!f},function(){return React.createElement("div",{className:classNames("".concat(selectorPrefix,"-body"),i?"".concat(selectorPrefix,"-body-border"):"",r||"",s||n?"".concat(selectorPrefix,"-body-exists-header"):""),style:o||{}},l)}))};export default memo(Collapse);
//# sourceMappingURL=Collapse.js.map
