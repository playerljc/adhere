"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r);var a=Object.getOwnPropertyDescriptor(t,r);a&&("get"in a?t.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,a)}:function(e,t,r,i){e[i=void 0===i?r:i]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),react_1=__importStar(require("react")),adhere_ui_configprovider_1=__importDefault(require("@baifendian/adhere-ui-configprovider")),Group_1=__importDefault(require("./Group")),Util_1=require("./Util"),selectorPrefix="adhere-ui-split",InternalSplit=(0,react_1.memo)(function(e){var t=e.className,t=void 0===t?"":t,r=e.style,i=e.direction,a=void 0===i?"vertical":i,i=e.size,n=void 0===i?20:i,l=(0,react_1.useContext)(adhere_ui_configprovider_1.default.Context).media,o=(0,react_1.useMemo)(function(){return(0,Util_1.getValue)(l,n)},[l,n]),e=(0,react_1.useCallback)(function(){return"horizontal"===a?{display:"inline-block",width:1,height:"100%",marginRight:"0 ".concat(o)}:{width:"100%",height:1,marginTop:"".concat(o," 0")}},[a,n]);return react_1.default.createElement("div",{className:(0,classnames_1.default)(selectorPrefix,null!=t?t:""),style:__assign(__assign({},e()),null!=r?r:{})})}),Split=InternalSplit;Split.displayName="Split",Split.Group=Group_1.default,exports.default=Split;
//# sourceMappingURL=Split.js.map
