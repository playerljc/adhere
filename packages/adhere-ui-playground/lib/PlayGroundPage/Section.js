"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.SectionPropTypes=exports.SectionDefaultProps=void 0,__importDefault(require("classnames"))),prop_types_1=__importDefault(require("prop-types")),react_1=__importStar(require("react")),selectPrefix="adhere-ui-playground-page-section",Section=function(e){var t=e.title,r=e.extra,a=e.className,s=e.style,s=void 0===s?{}:s,e=e.children;return react_1.default.createElement("div",{className:classnames_1.default(selectPrefix,(void 0===a?"":a)||""),style:s||{}},react_1.default.createElement("div",{className:selectPrefix+"-header"},react_1.default.createElement("div",{className:selectPrefix+"-header-title"},t),react_1.default.createElement("div",{className:selectPrefix+"-header-extra"},r)),react_1.default.createElement("div",{className:selectPrefix+"-body"},e))};exports.SectionDefaultProps={className:"",style:{}},exports.SectionPropTypes={className:prop_types_1.default.string,style:prop_types_1.default.object,title:prop_types_1.default.oneOfType([prop_types_1.default.string,prop_types_1.default.node]),extra:prop_types_1.default.node},Section.defaultProps=exports.SectionDefaultProps,Section.propTypes=exports.SectionPropTypes,exports.default=react_1.memo(Section);
//# sourceMappingURL=Section.js.map
