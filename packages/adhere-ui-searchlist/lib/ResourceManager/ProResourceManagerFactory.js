"use strict";var __extends=function(){var a=function(e,t){return(a=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){e.__proto__=t}:function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}))(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),__assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,a){void 0===a&&(a=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&("get"in i?t.__esModule:!i.writable&&!i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,i)}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__spreadArray=function(e,t,r){if(r||2===arguments.length)for(var a,i=0,n=t.length;i<n;i++)!a&&i in t||((a=a||Array.prototype.slice.call(t,0,i))[i]=t[i]);return e.concat(a||Array.prototype.slice.call(t))},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},antd_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.selectorPrefix=void 0,require("antd")),classnames_1=__importDefault(require("classnames")),react_1=__importStar(require("react")),icons_1=require("@ant-design/icons"),adhere_ui_contourblock_1=__importDefault(require("@baifendian/adhere-ui-contourblock")),adhere_ui_datedisplay_1=__importDefault(require("@baifendian/adhere-ui-datedisplay")),adhere_util_1=__importDefault(require("@baifendian/adhere-util")),adhere_util_dict_1=__importDefault(require("@baifendian/adhere-util-dict")),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),DateDisplay18=(exports.selectorPrefix="adhere-ui-searchtable-protable",adhere_ui_datedisplay_1.default.DateDisplay18);function default_1(e){return __extends(t,r=e),t.prototype.getParams=function(){var e,t=null==(t=null==this?void 0:this.ref)?void 0:t.current;return __assign({},(null==(e=null==t?void 0:t.getParams)?void 0:e.call(t))||{})},t.prototype.getColumns=function(e){return null!=e?e:[]},t.prototype.renderSearchFooterItemsImpl=function(e){var t=this,e=r.prototype.renderSearchFooterItemsImpl.call(this,e);return __spreadArray([react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-headeritem")},react_1.default.createElement(antd_1.Radio.Group,{optionType:"button",buttonStyle:"solid",value:this.state.viewType,onChange:function(e){return t.setState({viewType:e.target.value})}},react_1.default.createElement(antd_1.Radio,{value:"info"},react_1.default.createElement(icons_1.CreditCardOutlined,{className:"".concat(exports.selectorPrefix,"-resource-type-change-btn")})),react_1.default.createElement(antd_1.Radio,{value:"thumbnail"},react_1.default.createElement(icons_1.InsertRowAboveOutlined,{className:"".concat(exports.selectorPrefix,"-resource-type-change-btn")}))))],e||[],!0)},t.prototype.renderTableDensitySetting=function(){var e,t=this,r=null==(r=null==this?void 0:this.ref)?void 0:r.current;return null==(e=null==r?void 0:r.renderTableDensitySetting)?void 0:e.call(r,{density:this.state.listDensity,onChange:function(e){t.setState({listDensity:e})},onReset:function(e){t.setState({listDensity:e})}})},t.prototype.getViewParams=function(){return{name:null,resourceType:null,size:null,modifyTimeStart:void 0,modifyTimeEnd:void 0}},t.prototype.getTableViewColumns=function(){var e;return[{title:adhere_util_intl_1.default.v("文件名称"),dataIndex:"name",key:"name",sorter:!0,sortOrder:null==(e=null==this?void 0:this.sortOrder)?void 0:e.call(this,"name"),$search:{type:"input",visible:!0},render:function(e,t){return react_1.default.createElement(antd_1.Space,{size:25},react_1.default.createElement("span",{className:"".concat(exports.selectorPrefix,"-resource-table-file-column-icon")},adhere_util_dict_1.default.value.AdhereSearchListResourceManagerIconMap.value.get(t.type||"other")),react_1.default.createElement("span",{className:"".concat(exports.selectorPrefix,"-resource-table-file-column-name")},e))}},{title:adhere_util_intl_1.default.v("类型"),dataIndex:"resourceType",key:"resourceType",align:"center",width:150,sorter:!0,sortOrder:null==(e=null==this?void 0:this.sortOrder)?void 0:e.call(this,"resourceType"),$search:{type:"select",visible:!0,dictName:"AdhereSearchListResourceManagerLabelValueSelect"},render:function(e){return react_1.default.createElement("span",null,adhere_util_dict_1.default.value.AdhereSearchListResourceManagerLabelValueMap.value.get(e||"other"))}},{title:adhere_util_intl_1.default.v("文件大小"),dataIndex:"size",key:"size",align:"center",width:200,sorter:!0,sortOrder:null==(e=null==this?void 0:this.sortOrder)?void 0:e.call(this,"size"),$search:{type:"inputNumberDecimal2",visible:!0},render:function(e){return e?react_1.default.createElement("span",null,adhere_util_1.default.prettyBytes(e)):"-"}},{title:adhere_util_intl_1.default.v("修改时间"),dataIndex:"modifyTime",key:"modifyTime",align:"center",width:300,sorter:!0,sortOrder:null==(e=null==this?void 0:this.sortOrder)?void 0:e.call(this,"modifyTime"),$search:{type:"rangePicker",visible:!0,startName:"modifyTimeStart",endName:"modifyTimeEnd"},render:function(e){return react_1.default.createElement(DateDisplay18,{value:e})}}]},t.prototype.renderGridViewCard=function(e){var e=e.record,t=this.getRowSelection(),r=e[this.getRowKey()],a=(0,classnames_1.default)(((a={})["".concat(exports.selectorPrefix,"-grid-view-item")]=!0,a),this.getSelectionClassName(r));return react_1.default.createElement(adhere_ui_contourblock_1.default,null,react_1.default.createElement("div",{className:a},!!t&&react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-grid-view-item-selection")},this.renderItemSelection(e)),react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-grid-view-item-icon")},adhere_util_dict_1.default.value.AdhereSearchListResourceManagerIconMap.value.get(e.type||"other")),react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-grid-view-item-name"),title:e.name},e.name)))},t;function t(e){e=r.call(this,e)||this;return e.ref=(0,react_1.createRef)(),e.state=__assign(__assign({},e.state),{viewType:"info"}),e}var r}exports.default=default_1;
//# sourceMappingURL=ProResourceManagerFactory.js.map