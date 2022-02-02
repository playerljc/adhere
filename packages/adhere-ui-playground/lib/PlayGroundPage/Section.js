"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.SectionPropTypes=exports.SectionDefaultProps=void 0;var classnames_1=__importDefault(require("classnames")),react_1=__importDefault(require("react")),prop_types_1=__importDefault(require("prop-types")),selectPrefix="adhere-ui-playground-page-section";function Section(e){var t=e.title,r=e.extra,a=e.className,s=e.style,e=e.children;return react_1.default.createElement("div",{className:classnames_1.default(selectPrefix,a.split(/\s+/)),style:s},react_1.default.createElement("div",{className:selectPrefix+"-header"},react_1.default.createElement("div",{className:selectPrefix+"-header-title"},t),react_1.default.createElement("div",{className:selectPrefix+"-header-extra"},r)),react_1.default.createElement("div",{className:selectPrefix+"-body"},e))}exports.SectionDefaultProps={className:"",style:{}},exports.SectionPropTypes={className:prop_types_1.default.string,style:prop_types_1.default.object,title:prop_types_1.default.oneOfType([prop_types_1.default.string,prop_types_1.default.node]),extra:prop_types_1.default.node},Section.defaultProps=exports.SectionDefaultProps,Section.propTypes=exports.SectionPropTypes,exports.default=Section;
//# sourceMappingURL=Section.js.map
