import classNames from"classnames";import React from"react";import Split from"@baifendian/adhere-ui-split";import{selectorPrefix}from"../../SearchTable";var _selectorPrefix="".concat(selectorPrefix,"-optionswrap");export default function(e){var t,r=e.children,o=e.className,o=void 0===o?"":o,e=e.style,e=void 0===e?{}:e;if(r.length<=1)t=r;else{var i=React.Children.toArray(r),n=i.filter(function(e){return!("object"==typeof e&&"props"in e&&"conditional"in e.props)||(!!e.props.conditional||"noMatch"in e.props&&e.props.noMatch instanceof Function&&!!e.props.noMatch())});if(n.length<=1)t=r;else{for(var a=0;a<=n.length-2;a++)!function(t){var e=i.findIndex(function(e){return e===n[t]});i.splice(e+1,0,React.createElement(Split,{direction:"horizontal"}))}(a);t=i}}return React.createElement("div",{className:classNames(_selectorPrefix,o),style:e||{}},t)}
//# sourceMappingURL=index.js.map
