"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.deal=void 0,__importDefault(require("react")));function check(e){return!!e&&"object"==typeof e&&"$$typeof"in e}function checkAndDeal(e){var t,n=e.element,r=e.prop,e=e.value;return check(n)&&("style"in n.props||(t=n.props,n=cloneElement(n,__assign(__assign({},t),{style:{}}),t.children)),n.props.style[r]=e),n}function cloneElement(e,t,n){return react_1.default.cloneElement(e,t,n)}function arrayDeal(e){var t=e.element,n=e.prop,r=e.value;return t.map(function(e){return checkAndDeal({element:e,prop:n,value:r})})}function elementDeal(e,t,n){return checkAndDeal({element:e,prop:t,value:n})}function deal(e){var t=e.element,n=e.conditional,r=e.prop,e=e.value;return t=t&&(Array.isArray(t)?arrayDeal({element:t,prop:r,value:e}):t.type===Symbol.for("react.fragment")?(n=deal({element:t.props.children,conditional:n,prop:r,value:e}),cloneElement(t,__assign(__assign({},t.props),{children:n}),n)):elementDeal(t,r,e))}exports.deal=deal;
//# sourceMappingURL=Util.js.map
