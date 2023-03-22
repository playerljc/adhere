"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&("get"in n?t.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__rest=this&&this.__rest||function(e,t){var r={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r},__spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var a,n=0,c=t.length;n<c;n++)!a&&n in t||((a=a||Array.prototype.slice.call(t,0,n))[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),adhere_ui_conditionalrender_1=__importDefault(require("@baifendian/adhere-ui-conditionalrender")),adhere_util_dict_1=__importDefault(require("@baifendian/adhere-util-dict")),AntFormItemNormalize_1=require("../../AntFormItemNormalize"),ListFormItem_1=__importDefault(require("../ListFormItem")),ListMulitSelectFormItem_1=__importDefault(require("../ListMulitSelectFormItem")),ListSelectFormItem_1=__importDefault(require("../ListSelectFormItem")),MulitSelectFormItem_1=__importDefault(require("../MulitSelectFormItem")),SelectFormItem_1=__importDefault(require("../SelectFormItem")),selectorPrefix="adhere-ui-antdformitem",FormItemComponents={};exports.default=function(){var e=Object.keys(adhere_util_dict_1.default.handlers).filter(function(e){return e.endsWith("List")}),t=Object.keys(adhere_util_dict_1.default.handlers).filter(function(e){return e.endsWith("DynamicList")}),r=Object.keys(adhere_util_dict_1.default.handlers).filter(function(e){return e.endsWith("ListPagination")});return e.forEach(function(a){FormItemComponents["".concat(a,"FormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),r=adhere_util_dict_1.default.value[a].value,t=r instanceof Function?r(t):r;return react_1.default.createElement(ListFormItem_1.default,__assign({},e,{dataSource:t}))},FormItemComponents["".concat(a,"SelectFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),r=adhere_util_dict_1.default.value[a].value,t=r instanceof Function?r(t):r;return react_1.default.createElement(ListSelectFormItem_1.default,__assign({},e,{dataSource:t}))},FormItemComponents["".concat(a,"MulitSelectFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),r=adhere_util_dict_1.default.value[a].value,t=r instanceof Function?r(t):r;return react_1.default.createElement(ListMulitSelectFormItem_1.default,__assign({},e,{dataSource:t}))}}),t.forEach(function(o){FormItemComponents["".concat(o,"FormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),r=(0,react_1.useState)([]),a=r[0],n=r[1],c=adhere_util_dict_1.default.value[o].value;return(0,react_1.useEffect)(function(){c.then&&c.then(function(e){n(e)})},[]),(0,react_1.useEffect)(function(){c instanceof Function&&c(t).then(function(e){n(e)})},[t]),react_1.default.createElement(ListFormItem_1.default,__assign({},e,{dataSource:a}))},FormItemComponents["".concat(o,"SelectFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),r=(0,react_1.useState)([]),a=r[0],n=r[1],c=adhere_util_dict_1.default.value[o].value;return(0,react_1.useEffect)(function(){c.then&&c.then(function(e){n(e)})},[]),(0,react_1.useEffect)(function(){c instanceof Function&&c(t).then(function(e){n(e)})},[t]),react_1.default.createElement(ListSelectFormItem_1.default,__assign({},e,{dataSource:a}))},FormItemComponents["".concat(o,"MulitSelectFormItem")]=function(e){var t=e.cascadeParams,e=__rest(e,["cascadeParams"]),r=(0,react_1.useState)([]),a=r[0],n=r[1],c=adhere_util_dict_1.default.value[o].value;return(0,react_1.useEffect)(function(){c.then&&c.then(function(e){n(e)})},[]),(0,react_1.useEffect)(function(){c instanceof Function&&c(t).then(function(e){n(e)})},[t]),react_1.default.createElement(ListMulitSelectFormItem_1.default,__assign({},e,{dataSource:a}))}}),r.forEach(function(p){FormItemComponents["".concat(p,"FormItem")]=function(t){var e=(0,react_1.useState)(!1),r=e[0],a=e[1],e=(0,react_1.useState)([]),n=e[0],c=e[1],e=(0,react_1.useState)({current:1,pageSize:10,total:0}),o=e[0],i=e[1],u=adhere_util_dict_1.default.value[p].value;return(0,react_1.useEffect)(function(){a(!0),u(__assign({},o)).then(function(e){i(__assign(__assign({},o),{total:e[t.totalKey||"total"]})),c(e[t.dataKey||"records"]),a(!1)}).catch(function(){a(!1)})},[o.current,o.pageSize]),react_1.default.createElement(AntFormItemNormalize_1.List,__assign({dataSource:n,loading:r,pagination:{onChange:function(e,t){i(__assign(__assign({},o),{current:e,pageSize:t}))},onShowSizeChange:function(e,t){i(__assign(__assign({},o),{current:e,pageSize:t}))},total:o.total,current:o.current,pageSize:o.pageSize,showQuickJumper:!0},rowKey:t.rowKey||"id"},t))},FormItemComponents["".concat(p,"SelectFormItem")]=function(a){var e=(0,react_1.useState)(""),t=e[0],r=e[1],e=(0,react_1.useState)(!1),n=e[0],c=e[1],e=(0,react_1.useState)([]),o=e[0],i=e[1],e=(0,react_1.useState)({current:1,pageSize:10,total:0}),u=e[0],l=e[1],e=(0,react_1.useState)(a.value?[a.value]:[]),s=e[0],_=e[1],e=(0,react_1.useState)(a.value?o.find(function(e){return e[a.rowKey||"id"]===a.value}):[]),f=(e[0],e[1]),d=adhere_util_dict_1.default.value[p].value;function m(t){var r=a.rowKey||"id";return react_1.default.createElement(AntFormItemNormalize_1.Radio,{onChange:function(e){e.stopPropagation(),e.target.checked&&(_([t[r]]),f([__assign({},t)]),a.onChange(t[r]))},checked:s.includes(t[r])})}return(0,react_1.useEffect)(function(){c(!0),d(__assign({},u)).then(function(e){l(__assign(__assign({},u),{total:e[a.totalKey||"total"]})),i(e[a.dataKey||"records"]),c(!1)}).catch(function(){c(!1)})},[u.current,u.pageSize]),(0,react_1.useEffect)(function(){a.value?(_([a.value]),f([o.find(function(e){return e[a.rowKey||"id"]===a.value})])):(_([]),f([]))},[a.value]),react_1.default.createElement(SelectFormItem_1.default,{selectProps:__assign({value:a.value,dropdownRender:function(){var e=t?o.filter(function(e){return-1!==e[a.labelKey||"name"].indexOf(t)}):o;return react_1.default.createElement(AntFormItemNormalize_1.List,__assign({dataSource:e,loading:n,pagination:{onChange:function(e,t){l(__assign(__assign({},u),{current:e,pageSize:t}))},onShowSizeChange:function(e,t){l(__assign(__assign({},u),{current:e,pageSize:t}))},total:u.total,current:u.current,pageSize:u.pageSize,showQuickJumper:!0},rowKey:a.rowKey||"id"},a,{renderItem:function(e){return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!a.renderItem,noMatch:function(){return react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap")},react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-fixed")},m(e)),react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-auto")},e))}},function(){return react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap")},react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-fixed")},m(e)),react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-auto")},a.renderItem(e)))})}}))},onChange:function(e){a.onChange(e)},filterOption:function(){return!1},onSearch:function(e){return r(e)},onBlur:function(){r("")},onClear:function(){r("")}},a.selectProps||{}),dataSource:o.map(function(e){return{label:e[a.labelKey||"name"],value:e[a.rowKey||"id"]}})})},FormItemComponents["".concat(p,"MulitSelectFormItem")]=function(a){var e=(0,react_1.useState)(""),t=e[0],r=e[1],e=(0,react_1.useState)(!1),n=e[0],c=e[1],o=(0,react_1.useRef)(new Map),e=(0,react_1.useState)({current:1,pageSize:10,total:0}),i=e[0],u=e[1],e=(0,react_1.useState)(a.value||[]),l=e[0],s=e[1],e=(0,react_1.useState)(a.value?a.value.map(function(t){return d().find(function(e){return e[a.rowKey||"id"]===t})}):[]),_=(e[0],e[1]),f=adhere_util_dict_1.default.value[p].value;function d(){return o.current.get(i.current)||[]}function m(t){var r=a.rowKey||"id";return react_1.default.createElement(AntFormItemNormalize_1.Checkbox,{onChange:function(e){e.stopPropagation(),e.target.checked?(s(function(e){return __spreadArray(__spreadArray([],e,!0),[t[r]],!1)}),_(function(e){return __spreadArray(__spreadArray([],e,!0),[__assign({},t)],!1)}),a.onChange(__spreadArray(__spreadArray([],l,!0),[t[r]],!1))):(s(function(e){return e.filter(function(e){return e!==t[r]})}),_(function(e){return e.filter(function(e){return e[r]!==t[r]})}),a.onChange(__spreadArray([],l.filter(function(e){return e!==t[r]}),!0)))},checked:l.includes(t[r])})}return(0,react_1.useEffect)(function(){c(!0),f(__assign({},i)).then(function(e){o.current.set(i.current,e[a.dataKey||"records"]),u(__assign(__assign({},i),{total:e[a.totalKey||"total"]})),c(!1)}).catch(function(){c(!1)})},[i.current,i.pageSize]),react_1.default.createElement(MulitSelectFormItem_1.default,{selectProps:__assign({value:a.value,dropdownRender:function(){var e=t?d().filter(function(e){return-1!==e[a.labelKey||"name"].indexOf(t)}):d();return react_1.default.createElement(AntFormItemNormalize_1.List,__assign({dataSource:e,loading:n,pagination:{onChange:function(e,t){u(__assign(__assign({},i),{current:e,pageSize:t}))},onShowSizeChange:function(e,t){u(__assign(__assign({},i),{current:e,pageSize:t}))},total:i.total,current:i.current,pageSize:i.pageSize,showQuickJumper:!0},rowKey:a.rowKey||"id"},a,{renderItem:function(e){return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!!a.renderItem,noMatch:function(){return react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap")},react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-fixed")},m(e)),react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-auto")},e))}},function(){return react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap")},react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-fixed")},m(e)),react_1.default.createElement("div",{className:"".concat(selectorPrefix,"-rowselectwrap-auto")},a.renderItem(e)))})}}))},onChange:function(e){a.onChange(e),s(e),_(e.map(function(t){return Array.from(o.values()).find(function(e){return e[a.rowKey||"id"]===t})}))},onClear:function(){s([]),_([]),r(""),a.onChange([])},onBlur:function(){r("")},onSearch:function(e){return r(e)},filterOption:function(){return!1}},a.selectProps||{}),dataSource:d().map(function(e){return{label:e[a.labelKey||"name"],value:e[a.rowKey||"id"]}})})}}),FormItemComponents};
//# sourceMappingURL=List.js.map
