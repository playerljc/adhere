"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var l=Object.getOwnPropertyDescriptor(t,n);l&&("get"in l?t.__esModule:!l.writable&&!l.configurable)||(l={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,l)}:function(e,t,n,r){e[r=void 0===r?n:r]=t[n]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&__createBinding(t,e,n);return __setModuleDefault(t,e),t},__rest=this&&this.__rest||function(e,t){var n={};for(l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(n[l[r]]=e[l[r]]);return n},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},ahooks_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("ahooks")),classnames_1=__importDefault(require("classnames")),react_1=__importStar(require("react")),prop_types_min_1=__importDefault(require("../common-lib/prop-types.min")),react_dom_production_min_1=__importDefault(require("../common-lib/react-dom.production.min")),react_production_min_1=__importDefault(require("../common-lib/react.production.min")),quill_bubble_1=__importDefault(require("./lib/quill.bubble")),quill_snow_1=__importDefault(require("./lib/quill.snow")),react_quill_1=__importDefault(require("./lib/react-quill")),editorId="quillWrap",THEME_MAP=new Map([["snow",quill_snow_1.default],["bubble",quill_bubble_1.default]]),selectorPrefix="adhere-ui-richtext-reactquill-sandbox",ReactQuillSandbox=function(a,e){var t=a.wrapStyle,n=a.wrapClassName,c=a.quillStyle,o=(a.value,__rest(a,["wrapStyle","wrapClassName","quillStyle","value"])),r=(0,react_1.useRef)(null),u=(0,react_1.useRef)(null),i=(0,react_1.useRef)(!1),d=(0,react_1.useRef)(a.value),s=(0,react_1.useRef)();function _(){return new Promise(function(e){var t;if(!("readOnly"in a&&a.readOnly))return new Promise(function(e){var t,n=null==(t=null==u?void 0:u.current)?void 0:t.contentDocument,r=null==(t=null==u?void 0:u.current)?void 0:t.contentWindow,l=n.getElementById(editorId);r.ReactDOM.render(react_1.default.createElement(r.ReactQuill,__assign({ref:s},o,{value:d.current||"",onChange:function(e){var t;i.current&&a.onChange&&null!=(t=null==a?void 0:a.onChange)&&t.call(a,e)}})),l,function(){i.current=!0,e({document:n,window:r,wrap:l})})});(t=null==(t=null==u?void 0:u.current)?void 0:t.contentDocument).getElementById(editorId).innerHTML=a.value,r.current&&(r.current.style.height="".concat(t.documentElement.offsetHeight,"px")),e()})}return(0,react_1.useImperativeHandle)(e,function(){return{focus:function(){var e;null!=(e=s.current)&&e.focus()},blur:function(){var e;null!=(e=s.current)&&e.blur()},getEditor:function(){var e;return null==(e=s.current)?void 0:e.getEditor()},getQuill:function(){var e;return null==(e=null==(e=null==(e=null==u?void 0:u.current)?void 0:e.contentWindow)?void 0:e.ReactQuill)?void 0:e.Quill}}}),(0,react_1.useLayoutEffect)(function(){var e;function t(){_().then(function(){})}null!=(e=null==u?void 0:u.current)&&e.addEventListener("load",t);var n=URL.createObjectURL(new Blob([prop_types_min_1.default],{type:"text/javascript"})),r=URL.createObjectURL(new Blob([react_production_min_1.default],{type:"text/javascript"})),l=URL.createObjectURL(new Blob([react_dom_production_min_1.default],{type:"text/javascript"})),o=URL.createObjectURL(new Blob([react_quill_1.default],{type:"text/javascript"})),i=URL.createObjectURL(new Blob(['\n        <!DOCTYPE html>\n        <head>\n          <meta charset="UTF-8" />\n          <title></title>\n          <style>\n            html, body {\n              margin: 0;\n              padding: 0;\n            }\n\n            html.editor {\n              width: 100%;\n              height: 100%;\n            }\n\n            html.editor > body {\n              width: 100%;\n              height: 100%;\n            }\n\n            html.editor > body > #'.concat(editorId," {\n              width: 100%;\n              height: 100%;\n            }\n\n            ::-webkit-scrollbar-thumb {\n              background-color: rgba(0, 0, 0, 0.1);\n              border-radius: 4px;\n            }\n            *::-webkit-scrollbar-track {\n              background-color: rgba(0, 0, 0, 0.1);\n            }\n            ::-webkit-scrollbar {\n              width: 10px;\n              height: 10px;\n            }\n\n            .quill {\n              display: flex;\n              flex-direction: column;\n              width: 100%;\n              height: 100%;\n              padding: 0;\n              margin: 0;\n            }\n\n            .quill > .ql-toolbar {\n              flex-shrink: 0;\n            }\n\n            .quill > .ql-container {\n              flex-grow: 1;\n              min-height: 0;\n            }\n\n            ").concat(THEME_MAP.get("snow"),'\n          </style>\n          <script src="').concat(n,'"><\/script>\n          <script src="').concat(r,'"><\/script>\n          <script src="').concat(l,'"><\/script>\n          <script src="').concat(o,'"><\/script>\n        </head>\n        <html lang="en" class="').concat((0,classnames_1.default)({editor:!("readOnly"in a&&a.readOnly)}),'">\n        <body>\n          <div id="').concat(editorId,'" style="').concat(c||"",'"></div>\n        </body>\n        </html>\n        ')],{type:"text/html"}));return u.current.src=i,function(){var e;null!=(e=null==u?void 0:u.current)&&e.removeEventListener("load",t),URL.revokeObjectURL(i),URL.revokeObjectURL(r),URL.revokeObjectURL(l),URL.revokeObjectURL(o),URL.revokeObjectURL(n)}},[]),(0,ahooks_1.useUpdateEffect)(function(){d.current=a.value,i.current&&_().then(function(){})},[a.value]),(0,ahooks_1.useUpdateEffect)(function(){i.current&&_().then(function(){})},[o]),react_1.default.createElement("div",{ref:r,className:(0,classnames_1.default)("".concat(selectorPrefix),n||""),style:t||{}},react_1.default.createElement("iframe",{ref:u,className:"".concat(selectorPrefix,"-frame")}))},ReactQuillSandboxHOC=(0,react_1.memo)((0,react_1.forwardRef)(ReactQuillSandbox));ReactQuillSandboxHOC.AntdFormRequireValidator=function(o,i){return{validator:function(e,t,n){var r,l;1<(null==(l=null==(r=null==o?void 0:o())?void 0:r.getLength)?void 0:l.call(r))?(console.log("ok"),n()):(console.log("error"),n(i))}}},exports.default=ReactQuillSandboxHOC;
//# sourceMappingURL=reactQuillSandbox.js.map
