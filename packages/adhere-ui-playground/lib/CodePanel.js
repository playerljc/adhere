"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,o){e[o=void 0===o?r:o]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},component_playground_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.CodePanelPropTypes=exports.CodePanelDefaultProps=void 0,__importDefault(require("component-playground"))),prop_types_1=__importDefault(require("prop-types")),react_1=__importStar(require("react")),selectPrefix="adhere-ui-playground-code-panel",CodePanel=function(e){return react_1.default.createElement("div",{className:selectPrefix},react_1.default.createElement(component_playground_1.default,__assign({docClass:null,propDescriptionMap:null,scope:{React:react_1.default},collapsableCode:!1,initiallyExpanded:!1,es6Console:!1},e)))};exports.CodePanelDefaultProps={codeText:"",theme:"monokai"},exports.CodePanelPropTypes={codeText:prop_types_1.default.string,theme:prop_types_1.default.string},exports.default=react_1.memo(CodePanel);
//# sourceMappingURL=CodePanel.js.map
