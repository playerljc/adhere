import{__assign}from"tslib";import classNames from"classnames";import React from"react";import Split from"@baifendian/adhere-ui-split";import{selectorPrefix}from"../../SearchTable";var _selectorPrefix="".concat(selectorPrefix,"-optionswrap");export default function(e){var r,t=e.children,n=e.className,n=void 0===n?"":n,e=e.style,e=void 0===e?{}:e;if(t.length<=1)r=t;else{var o=t.map(function(e){return React.cloneElement(e,__assign({},e.props),e.props.children)}),i=o.filter(function(e){return!("props"in e&&"conditional"in e.props)||(!!e.props.conditional||"noMatch"in e.props&&e.props.noMatch instanceof Function&&!!e.props.noMatch())});if(i.length<=1)r=t;else{for(var a=0;a<=i.length-2;a++)!function(r){var e=o.findIndex(function(e){return e===i[r]});o.splice(e+1,0,React.createElement(Split,{direction:"horizontal"}))}(a);r=o}}return React.createElement("div",{className:classNames(_selectorPrefix,n),style:e||{}},r)}
//# sourceMappingURL=index.js.map
