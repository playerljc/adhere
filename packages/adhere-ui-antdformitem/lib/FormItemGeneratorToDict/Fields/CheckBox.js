"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,n){e[n=void 0===n?a:n]=t[a]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.hasOwnProperty.call(e,a)&&__createBinding(t,e,a);return __setModuleDefault(t,e),t},__rest=this&&this.__rest||function(e,t){var a={};for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},antd_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("antd")),react_1=__importStar(require("react")),adhere_util_dict_1=__importDefault(require("@baifendian/adhere-util-dict")),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),CheckBoxCheckAllSelectFormItem_1=__importDefault(require("../CheckBoxCheckAllSelectFormItem")),CheckBoxSelectFormItem_1=__importDefault(require("../CheckBoxSelectFormItem")),FormItemComponents={};exports.default=function(){var e=Object.keys(adhere_util_dict_1.default.handlers).filter(function(e){return e.endsWith("CheckBox")}),t=Object.keys(adhere_util_dict_1.default.handlers).filter(function(e){return e.endsWith("DynamicCheckBox")});return FormItemComponents.CheckBoxVerticalFormItem=function(e){var t=e.dataSource,a=__rest(e,["dataSource"]);return react_1.default.createElement(antd_1.Checkbox.Group,__assign({},a,{onChange:function(e){a.onChange(e)}}),react_1.default.createElement(antd_1.Space,{direction:"vertical"},t.map(function(e){return react_1.default.createElement(antd_1.Checkbox,{key:e.value,value:e.value,disabled:e.disabled},e.label)})))},FormItemComponents.CheckBoxHorizontalFormItem=function(e){var t=e.dataSource,a=__rest(e,["dataSource"]);return react_1.default.createElement(antd_1.Checkbox.Group,__assign({options:t},a,{onChange:function(e){a.onChange(e)}}))},FormItemComponents.CheckBoxCheckAllVerticalFormItem=function(e){var t=e.dataSource,a=__rest(e,["dataSource"]),e=FormItemComponents.CheckBoxVerticalFormItem,n=react_1.useState((a.value||[]).length===t.length),r=n[0],c=n[1];return react_1.useEffect(function(){c((a.value||[]).length===t.length)},[a.value,t]),react_1.default.createElement("div",null,react_1.default.createElement("div",{style:{marginBottom:10}},react_1.default.createElement(antd_1.Checkbox,{checked:r,onChange:function(e){e.target.checked?a.onChange(t.map(function(e){return e.value})):a.onChange([])}},adhere_util_intl_1.default.v("全选"))),react_1.default.createElement("div",null,react_1.default.createElement(e,__assign({},a,{dataSource:t}))))},FormItemComponents.CheckBoxCheckAllHorizontalFormItem=function(e){var t=e.dataSource,a=__rest(e,["dataSource"]),e=FormItemComponents.CheckBoxHorizontalFormItem,n=react_1.useState((a.value||[]).length===t.length),r=n[0],c=n[1];return react_1.useEffect(function(){c((a.value||[]).length===t.length)},[a.value,t]),react_1.default.createElement("div",null,react_1.default.createElement("div",{style:{marginBottom:10}},react_1.default.createElement(antd_1.Checkbox,{checked:r,onChange:function(e){e.target.checked?a.onChange(t.map(function(e){return e.value})):a.onChange([])}},adhere_util_intl_1.default.v("全选"))),react_1.default.createElement("div",null,react_1.default.createElement(e,__assign({},a,{dataSource:t}))))},FormItemComponents.CheckBoxSelectFormItem=function(e){var t=e.dataSource,e=__rest(e,["dataSource"]);return react_1.default.createElement(CheckBoxSelectFormItem_1.default,__assign({dataSource:t},e))},FormItemComponents.CheckBoxCheckAllSelectFormItem=function(e){var t=e.dataSource,e=__rest(e,["dataSource"]);return react_1.default.createElement(CheckBoxCheckAllSelectFormItem_1.default,__assign({dataSource:t},e))},FormItemComponents.CheckBoxCustomFormItem=function(e){var t=e.dataSource,a=__rest(e,["dataSource"]);return react_1.default.createElement(antd_1.Checkbox.Group,__assign({},a,{onChange:function(e){a.onChange(e)}}),a.children(t.map(function(e){return{data:e,item:react_1.default.createElement(antd_1.Checkbox,{key:e.value,value:e.value,disabled:e.disabled},e.label)}})))},FormItemComponents.CheckBoxCheckAllCustomFormItem=function(e){var t=e.dataSource,a=__rest(e,["dataSource"]),e=FormItemComponents.CheckBoxCustomFormItem,n=react_1.useState((a.value||[]).length===t.length),r=n[0],c=n[1];return react_1.useEffect(function(){c((a.value||[]).length===t.length)},[a.value,t]),react_1.default.createElement("div",null,react_1.default.createElement("div",{style:{marginBottom:10}},react_1.default.createElement(antd_1.Checkbox,{checked:r,onChange:function(e){e.target.checked?a.onChange(t.map(function(e){return e.value})):a.onChange([])}},adhere_util_intl_1.default.v("全选"))),react_1.default.createElement("div",null,react_1.default.createElement(e,__assign({},a,{dataSource:t}))))},e.forEach(function(n){FormItemComponents[n+"VerticalFormItem"]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=adhere_util_dict_1.default.value[n].value,t=a instanceof Function?a(t):a,a=FormItemComponents.CheckBoxVerticalFormItem;return react_1.default.createElement(a,__assign({},e,{dataSource:t}))},FormItemComponents[n+"HorizontalFormItem"]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=adhere_util_dict_1.default.value[n].value,t=a instanceof Function?a(t):a,a=FormItemComponents.CheckBoxHorizontalFormItem;return react_1.default.createElement(a,__assign({},e,{dataSource:t}))},FormItemComponents[n+"CheckAllVerticalFormItem"]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=adhere_util_dict_1.default.value[n].value,t=a instanceof Function?a(t):a,a=FormItemComponents.CheckBoxCheckAllVerticalFormItem;return react_1.default.createElement(a,__assign({},e,{dataSource:t}))},FormItemComponents[n+"CheckAllHorizontalFormItem"]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=adhere_util_dict_1.default.value[n].value,t=a instanceof Function?a(t):a,a=FormItemComponents.CheckBoxCheckAllHorizontalFormItem;return react_1.default.createElement(a,__assign({},e,{dataSource:t}))},FormItemComponents[n+"SelectFormItem"]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=adhere_util_dict_1.default.value[n].value,t=a instanceof Function?a(t):a,a=FormItemComponents.CheckBoxSelectFormItem;return react_1.default.createElement(a,__assign({},e,{dataSource:t}))},FormItemComponents[n+"CheckAllSelectFormItem"]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=adhere_util_dict_1.default.value[n].value,t=a instanceof Function?a(t):a,a=FormItemComponents.CheckBoxCheckAllSelectFormItem;return react_1.default.createElement(a,__assign({},e,{dataSource:t}))},FormItemComponents[n+"CustomFormItem"]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=adhere_util_dict_1.default.value[n].value,t=a instanceof Function?a(t):a,a=FormItemComponents.CheckBoxCustomFormItem;return react_1.default.createElement(a,__assign({},e,{dataSource:t}))},FormItemComponents[n+"CheckAllCustomFormItem"]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=adhere_util_dict_1.default.value[n].value,t=a instanceof Function?a(t):a,a=FormItemComponents.CheckBoxCheckAllCustomFormItem;return react_1.default.createElement(a,__assign({},e,{dataSource:t}))}}),t.forEach(function(o){FormItemComponents[o+"VerticalFormItem"]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=react_1.useState([]),n=a[0],r=a[1],c=adhere_util_dict_1.default.value[o].value,a=(react_1.useEffect(function(){c.then&&c.then(function(e){r(e)})},[]),react_1.useEffect(function(){c instanceof Function&&c(t).then(function(e){r(e)})},[t]),FormItemComponents.CheckBoxVerticalFormItem);return react_1.default.createElement(a,__assign({},e,{dataSource:n}))},FormItemComponents[o+"HorizontalFormItem"]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=react_1.useState([]),n=a[0],r=a[1],c=adhere_util_dict_1.default.value[o].value,a=(react_1.useEffect(function(){c.then&&c.then(function(e){r(e)})},[]),react_1.useEffect(function(){c instanceof Function&&c(t).then(function(e){r(e)})},[t]),FormItemComponents.CheckBoxHorizontalFormItem);return react_1.default.createElement(a,__assign({},e,{dataSource:n}))},FormItemComponents[o+"CheckAllVerticalFormItem"]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=react_1.useState([]),n=a[0],r=a[1],c=adhere_util_dict_1.default.value[o].value,a=(react_1.useEffect(function(){c.then&&c.then(function(e){r(e)})},[]),react_1.useEffect(function(){c instanceof Function&&c(t).then(function(e){r(e)})},[t]),FormItemComponents.CheckBoxCheckAllVerticalFormItem);return react_1.default.createElement(a,__assign({},e,{dataSource:n}))},FormItemComponents[o+"CheckAllHorizontalFormItem"]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=react_1.useState([]),n=a[0],r=a[1],c=adhere_util_dict_1.default.value[o].value,a=(react_1.useEffect(function(){c.then&&c.then(function(e){r(e)})},[]),react_1.useEffect(function(){c instanceof Function&&c(t).then(function(e){r(e)})},[t]),FormItemComponents.CheckBoxCheckAllHorizontalFormItem);return react_1.default.createElement(a,__assign({},e,{dataSource:n}))},FormItemComponents[o+"SelectFormItem"]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=react_1.useState([]),n=a[0],r=a[1],c=adhere_util_dict_1.default.value[o].value,a=(react_1.useEffect(function(){c.then&&c.then(function(e){r(e)})},[]),react_1.useEffect(function(){c instanceof Function&&c(t).then(function(e){r(e)})},[t]),FormItemComponents.CheckBoxSelectFormItem);return react_1.default.createElement(a,__assign({},e,{dataSource:n}))},FormItemComponents[o+"CheckAllSelectFormItem"]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=react_1.useState([]),n=a[0],r=a[1],c=adhere_util_dict_1.default.value[o].value,a=(react_1.useEffect(function(){c.then&&c.then(function(e){r(e)})},[]),react_1.useEffect(function(){c instanceof Function&&c(t).then(function(e){r(e)})},[t]),FormItemComponents.CheckBoxCheckAllSelectFormItem);return react_1.default.createElement(a,__assign({},e,{dataSource:n}))},FormItemComponents[o+"CustomFormItem"]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=react_1.useState([]),n=a[0],r=a[1],c=adhere_util_dict_1.default.value[o].value,a=(react_1.useEffect(function(){c.then&&c.then(function(e){r(e)})},[]),react_1.useEffect(function(){c instanceof Function&&c(t).then(function(e){r(e)})},[t]),FormItemComponents.CheckBoxCustomFormItem);return react_1.default.createElement(a,__assign({},e,{dataSource:n}))},FormItemComponents[o+"CheckAllCustomFormItem"]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),a=react_1.useState([]),n=a[0],r=a[1],c=adhere_util_dict_1.default.value[o].value,a=(react_1.useEffect(function(){c.then&&c.then(function(e){r(e)})},[]),react_1.useEffect(function(){c instanceof Function&&c(t).then(function(e){r(e)})},[t]),FormItemComponents.CheckBoxCheckAllCustomFormItem);return react_1.default.createElement(a,__assign({},e,{dataSource:n}))}}),FormItemComponents};
//# sourceMappingURL=CheckBox.js.map
