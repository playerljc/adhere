"use strict";var __importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("react"))),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),selectorPrefix="adhere-mobile-ui-prsl-selection",SelectionManageButton=function(e){var t=e.selectionLabel,a=e.selectionFinishLabel,l=e.selectionCancelLabel,n=e.isUseSelectionMode,r=e.isUseNormalMode,i=e.onChange,c=e.onFinish,o=e.onCancel;return react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-manager-wrapper")},r&&react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-manager-item"),onClick:function(){i(!0)}},null!=t?t:adhere_util_intl_1.default.v("管理")),n&&react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-manager-item"),onClick:function(){i(!1),c()}},null!=a?a:adhere_util_intl_1.default.v("完成")),react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-manager-item"),onClick:function(){i(!1),o()}},null!=l?l:adhere_util_intl_1.default.v("取消"))))};exports.default=SelectionManageButton;
//# sourceMappingURL=ManageButton.js.map
