"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.filter.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.regexp.exec.js"),require("core-js/modules/es.string.replace.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),react_1=tslib_1.__importDefault(require("react")),antd_1=require("antd"),adhere_ui_conditionalrender_1=tslib_1.__importDefault(require("@baifendian/adhere-ui-conditionalrender")),adhere_ui_historyback_1=tslib_1.__importDefault(require("@baifendian/adhere-ui-historyback")),adhere_util_intl_1=tslib_1.__importDefault(require("@baifendian/adhere-util-intl")),toolBarLayout_1=tslib_1.__importDefault(require("./toolBarLayout")),BackLayout=function(e){var r=e.topToolBarItems,t=void 0===r?[]:r,i=e.isShowBack,r=void 0===i||i,i=e.backPath,a=void 0===i?"/":i,i=e.enforceBackPath,o=void 0===i?"/":i,l=e.history,s=e.backTitle,i=e.children,e=tslib_1.__rest(e,["topToolBarItems","isShowBack","backPath","enforceBackPath","history","backTitle","children"]),r=tslib_1.__spreadArray(tslib_1.__spreadArray([],t||[],!0),[react_1.default.createElement(adhere_ui_conditionalrender_1.default,{key:"backBtn",conditional:r},function(){return react_1.default.createElement(antd_1.Button,{onClick:function(){o?l.replace(o):(0,adhere_ui_historyback_1.default)(l,a)}},s||adhere_util_intl_1.default.v("返回"))})],!1).filter(function(e){return!("props"in e&&"conditional"in e.props)||e.props.conditional});return react_1.default.createElement(toolBarLayout_1.default,tslib_1.__assign({},e,{topToolBarItems:r}),i)};exports.default=BackLayout;
//# sourceMappingURL=backLayout.js.map
