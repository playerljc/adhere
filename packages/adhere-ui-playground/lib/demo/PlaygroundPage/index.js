"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&("get"in n?t.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,o,n)}:function(e,t,r,o){e[o=void 0===o?r:o]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=this&&this.__rest||function(e,t){var r={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.FunctionPropsSection=exports.PropsSection=exports.CodeBoxSection=exports.Section=void 0,__importStar(require("react"))),index_1=__importDefault(require("../../index")),PlayGroundPageContext=index_1.default.PlayGroundPageContext,PlayGroundPage=index_1.default.PlayGroundPage,Section=PlayGroundPage.Section,CodeBoxSection=PlayGroundPage.CodeBoxSection,PropsSection=PlayGroundPage.PropsSection,FunctionPropsSection=PlayGroundPage.FunctionPropsSection;function Wrap(e){var t=e.children,e=__rest(e,["children"]),r=(0,react_1.useState)(),o=r[0],n=r[1],i=(0,react_1.useRef)();return(0,react_1.useEffect)(function(){n(i.current.parentElement.parentElement)},[]),react_1.default.createElement(PlayGroundPageContext.Provider,{value:{scrollEl:o}},react_1.default.createElement(PlayGroundPage,__assign({ref:i},e),t))}exports.Section=Section,exports.CodeBoxSection=CodeBoxSection,exports.PropsSection=PropsSection,exports.FunctionPropsSection=FunctionPropsSection,exports.default=Wrap;
//# sourceMappingURL=index.js.map