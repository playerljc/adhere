var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var a in n=arguments[r])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)};import React from"react";function check(e){return!!e&&"object"==typeof e&&"$$typeof"in e}function checkAndDeal(e){var n,r=e.element,t=e.prop,e=e.value;return check(r)&&("style"in r.props||(n=r.props,r=cloneElement(r,__assign(__assign({},n),{style:{}}),n.children)),r.props.style[t]=e),r}function cloneElement(e,n,r){return React.cloneElement(e,n,r)}function arrayDeal(e){var n=e.element,r=e.prop,t=e.value;return n.map(function(e){return checkAndDeal({element:e,prop:r,value:t})})}function elementDeal(e,n,r){return checkAndDeal({element:e,prop:n,value:r})}function deal(e){var n=e.element,r=e.conditional,t=e.prop,e=e.value;return n=n&&(Array.isArray(n)?arrayDeal({element:n,prop:t,value:e}):n.type===Symbol.for("react.fragment")?(r=deal({element:n.props.children,conditional:r,prop:t,value:e}),cloneElement(n,__assign(__assign({},n.props),{children:r}),r)):elementDeal(n,t,e))}export{deal};
//# sourceMappingURL=util.js.map
