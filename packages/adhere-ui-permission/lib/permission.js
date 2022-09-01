"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.PermissionFun=exports.Permission=exports.checkPermission=exports.getPermission=exports.setPermission=void 0;var react_1=__importDefault(require("react")),prop_types_1=__importDefault(require("prop-types")),adhere_ui_conditionalrender_1=__importDefault(require("@baifendian/adhere-ui-conditionalrender")),permissions=[];function PermissionFun(e){var r=e.allPermission,i=void 0===r?exports.getPermission():r,s=e.permissions,r=e.match,e=e.noMatch;return adhere_ui_conditionalrender_1.default.conditionalRender({conditional:exports.checkPermission(i,s),match:r,noMatch:e})}exports.setPermission=function(e){permissions=e},exports.getPermission=function(){return JSON.parse(JSON.stringify(permissions))},exports.checkPermission=function(r,e){return!((r=(r=void 0===r?exports.getPermission():r)||exports.getPermission())&&Array.isArray(r)&&e)||(Array.isArray(e)?e.every(function(e){return-1!==r.indexOf(e)}):-1!==r.indexOf(e))},exports.Permission=function(e){var r=e.allPermission,i=void 0===r?exports.getPermission():r,s=e.permissions,r=e.children,e=e.noMatch;return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:exports.checkPermission(i,s),noMatch:e},r)},exports.PermissionFun=PermissionFun,exports.Permission.defaultProps={allPermission:void 0,permissions:"",noMatch:null,children:null},exports.Permission.propTypes={allPermission:prop_types_1.default.array,permissions:prop_types_1.default.oneOfType([prop_types_1.default.array,prop_types_1.default.string]),noMatch:prop_types_1.default.node,children:prop_types_1.default.node};
//# sourceMappingURL=permission.js.map
