"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,n,r){void 0===r&&(r=n);var l=Object.getOwnPropertyDescriptor(t,n);l&&("get"in l?t.__esModule:!l.writable&&!l.configurable)||(l={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,l)}:function(e,t,n,r){e[r=void 0===r?n:r]=t[n]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&__createBinding(t,e,n);return __setModuleDefault(t,e),t},__rest=function(e,t){var n={};for(l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(n[l[r]]=e[l[r]]);return n},__spreadArray=function(e,t,n){if(n||2===arguments.length)for(var r,l=0,o=t.length;l<o;l++)!r&&l in t||((r=r||Array.prototype.slice.call(t,0,l))[l]=t[l]);return e.concat(r||Array.prototype.slice.call(t))},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},ahooks_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("ahooks")),react_1=__importStar(require("react")),empty_1=__importDefault(require("../empty")),Select_1=__importDefault(require("./Select")),InternalDropdownRenderSelect=(0,react_1.memo)(function(e){function r(e){var t;null!=(t=a.onChange)&&t.call(a,e),u||d(!1)}var n=e.children,t=e.options,l=e.defaultInputValue,o=e.emptyContent,a=__rest(e,["children","options","defaultInputValue","emptyContent"]),u="mode"in a&&"multiple"===a.mode,e=(0,react_1.useState)(null!=l?l:""),c=e[0],i=e[1],e=(0,react_1.useState)(!1),f=e[0],d=e[1],p=(0,react_1.useRef)(),_=(0,react_1.useRef)(),s=(0,react_1.useMemo)(function(){var e;return c?null==(e=null==t?void 0:t.filter)?void 0:e.call(t,function(e){var t;return-1!==(null==(t=(e=e.label).indexOf)?void 0:t.call(e,c))}):t},[c,t]),e=(0,react_1.useCallback)(function(e){var t;return p.current=e,_.current=null!=s&&s.length?null!=(t=null==n?void 0:n({originNode:e,value:a.value,onChange:function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];r(t[0]),null!=(e=a.onChange)&&e.call.apply(e,__spreadArray([a],t,!1))},options:s}))?t:e:null!=o?o:react_1.default.createElement(empty_1.default,{image:empty_1.default.PRESENTED_IMAGE_SIMPLE}),_.current},[n,s,a.value,a.onChange]);return(0,ahooks_1.useUpdateEffect)(function(){i(null!=l?l:"")},[l]),react_1.default.createElement(Select_1.default,__assign({options:s,filterOption:function(){return _.current===p.current},dropdownRender:e,open:f,onDropdownVisibleChange:d,onSearch:function(e){var t;i(null==(t=null==e?void 0:e.trim)?void 0:t.call(e)),null!=(t=null==a?void 0:a.onSearch)&&t.call(a,null==(t=null==e?void 0:e.trim)?void 0:t.call(e))},onClear:function(){var e;i(""),null!=(e=null==a?void 0:a.onClear)&&e.call(a)}},a,{onChange:r}))}),DropdownRenderSelect=InternalDropdownRenderSelect;DropdownRenderSelect.displayName="DropdownRenderSelect",exports.default=DropdownRenderSelect;
//# sourceMappingURL=DropdownRenderSelect.js.map
