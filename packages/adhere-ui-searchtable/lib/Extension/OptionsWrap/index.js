"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),classnames_1=tslib_1.__importDefault(require("classnames")),react_1=tslib_1.__importDefault(require("react")),adhere_ui_split_1=tslib_1.__importDefault(require("@baifendian/adhere-ui-split")),SearchTable_1=require("../../SearchTable"),_selectorPrefix=SearchTable_1.selectorPrefix+"-optionswrap";exports.default=function(e){var r,t=e.children,i=e.className,i=void 0===i?"":i,e=e.style,e=void 0===e?{}:e;if(t.length<=1)r=t;else{var a=t.map(function(e){return react_1.default.cloneElement(e,tslib_1.__assign({},e.props),e.props.children)}),l=a.filter(function(e){return!("props"in e&&"conditional"in e.props)||(!!e.props.conditional||"noMatch"in e.props&&e.props.noMatch instanceof Function&&!!e.props.noMatch())});if(l.length<=1)r=t;else{for(var n=0;n<=l.length-2;n++)!function(r){var e=a.findIndex(function(e){return e===l[r]});a.splice(e+1,0,react_1.default.createElement(adhere_ui_split_1.default,{direction:"horizontal"}))}(n);r=a}}return react_1.default.createElement("div",{className:classnames_1.default(_selectorPrefix,i),style:e||{}},r)};
//# sourceMappingURL=index.js.map
