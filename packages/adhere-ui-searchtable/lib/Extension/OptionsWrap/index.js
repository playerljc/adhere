"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_typeof2=_interopRequireDefault(require("@babel/runtime/helpers/typeof")),__importDefault=function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),react_1=__importDefault(require("react")),adhere_ui_split_1=__importDefault(require("@baifendian/adhere-ui-split")),SearchTable_1=require("../../SearchTable"),_selectorPrefix="".concat(SearchTable_1.selectorPrefix,"-optionswrap");exports.default=function(e){var r,t=e.children,a=e.className,a=void 0===a?"":a,e=e.style,e=void 0===e?{}:e;if(t.length<=1)r=t;else{var i=react_1.default.Children.toArray(t),l=i.filter(function(e){return!("object"===(0,_typeof2.default)(e)&&"props"in e&&"conditional"in e.props&&!e.props.conditional)||"noMatch"in e.props&&e.props.noMatch instanceof Function&&!!e.props.noMatch()});if(l.length<=1)r=t;else{for(var n=0;n<=l.length-2;n++)!function(r){var e=i.findIndex(function(e){return e===l[r]});i.splice(e+1,0,react_1.default.createElement(adhere_ui_split_1.default,{direction:"horizontal"}))}(n);r=i}}return react_1.default.createElement("div",{className:(0,classnames_1.default)(_selectorPrefix,a),style:e||{}},r)};
//# sourceMappingURL=index.js.map
