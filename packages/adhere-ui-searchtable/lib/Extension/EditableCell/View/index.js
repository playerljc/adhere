"use strict";var __rest=this&&this.__rest||function(e,r){var l={};for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(l[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(l[a[t]]=e[a[t]]);return l},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),react_1=__importDefault(require("react")),icons_1=require("@ant-design/icons"),SearchTable_1=require("../../../SearchTable"),EditableCellView=function(e){var r=e.record,l=e.column,t=e.rowIndex,a=(e.columns,e.editableConfig),n=e.onTriggerChange,e=__rest(e,["record","column","rowIndex","columns","editableConfig","onTriggerChange"]),i=a.useTrigger,c=a.renderToEditTrigger,o=a.dataIndex,d=a.onBeforeToEdit;return i?react_1.default.createElement("div",{className:"".concat(SearchTable_1.selectorPrefix,"-editablecell-view")},react_1.default.createElement("div",{className:(0,classnames_1.default)("".concat(SearchTable_1.selectorPrefix,"-editablecell-view-inner"),"ellipsis"in l&&l.ellipsis?"".concat(SearchTable_1.selectorPrefix,"-editablecell-view-inner-ellipsis"):"")},null==e?void 0:e.children),react_1.default.createElement("div",{className:"".concat(SearchTable_1.selectorPrefix,"-editablecell-view-trigger")},react_1.default.createElement("div",{className:"".concat(SearchTable_1.selectorPrefix,"-editablecell-view-trigger-inner"),onClick:function(){var e;d?null!=(e=d({value:r[o],record:r,dataIndex:o,rowIndex:t}))&&e.then(function(){return null==n?void 0:n()}):null!=n&&n()}},!!c&&(null==c?void 0:c({value:null==r?void 0:r[o],record:r,dataIndex:o,rowIndex:t})),!c&&react_1.default.createElement(icons_1.EditOutlined,null)))):react_1.default.createElement(react_1.default.Fragment,null,null==e?void 0:e.children)};exports.default=EditableCellView;
//# sourceMappingURL=index.js.map
