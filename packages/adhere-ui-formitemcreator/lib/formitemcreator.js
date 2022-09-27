"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.symbol.js"),require("core-js/modules/es.symbol.description.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.array.iterator.js"),require("core-js/modules/es.map.js"),require("core-js/modules/es.string.iterator.js"),require("core-js/modules/esnext.map.delete-all.js"),require("core-js/modules/esnext.map.every.js"),require("core-js/modules/esnext.map.filter.js"),require("core-js/modules/esnext.map.find.js"),require("core-js/modules/esnext.map.find-key.js"),require("core-js/modules/esnext.map.includes.js"),require("core-js/modules/esnext.map.key-of.js"),require("core-js/modules/esnext.map.map-keys.js"),require("core-js/modules/esnext.map.map-values.js"),require("core-js/modules/esnext.map.merge.js"),require("core-js/modules/esnext.map.reduce.js"),require("core-js/modules/esnext.map.some.js"),require("core-js/modules/esnext.map.update.js"),require("core-js/modules/web.dom-collections.iterator.js"),require("core-js/modules/es.array.map.js"),require("core-js/modules/es.array.filter.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),antd_1=require("antd"),react_1=tslib_1.__importStar(require("react")),formitem_1=tslib_1.__importDefault(require("./formitem")),TEXT=Symbol("text"),INPUT=Symbol("input"),SEARCH=Symbol("search"),PASSWORD=Symbol("password"),TEXTAREA=Symbol("textarea"),NUMBER=Symbol("number"),RADIO=Symbol("radio"),CHECKBOX=Symbol("checkbox"),DATEPICKER=Symbol("datepicker"),RANGEPICKER=Symbol("rangepicker"),TIMEPICKER=Symbol("timepicker"),SWITCH=Symbol("switch"),SELECT=Symbol("select"),SLIDER=Symbol("slider"),RATE=Symbol("rate"),UPLOAD=Symbol("upload"),DEFINE=Symbol("define"),FormItemCreator=function(e){var r=e.columns,t=e.layout,e=e.row;var a=(0,react_1.useMemo)(function(){return new Map([[TEXT,"renderText"],[INPUT,"renderInput"],[SEARCH,"renderSearch"],[PASSWORD,"renderPassword"],[TEXTAREA,"renderInputArea"],[NUMBER,"renderInputNumber"],[RADIO,"renderRadio"],[CHECKBOX,"renderCheckbox"],[DATEPICKER,"renderDatePicker"],[RANGEPICKER,"renderRangePicker"],[TIMEPICKER,"renderTimePicker"],[SWITCH,"renderSwitch"],[SELECT,"renderSelect"],[SLIDER,"renderSlider"],[RATE,"renderRate"],[UPLOAD,"renderUpload"]])},[]),o=(0,react_1.useMemo)(function(){return r.filter(function(e){return!("skip"in e)}).map(function(e){e.contentProps;var r,o=e.col,s=tslib_1.__rest(e,["contentProps","col"]),s=react_1.default.createElement(antd_1.Form.Item,tslib_1.__assign({},function(e){switch(e.type){case SWITCH:case CHECKBOX:return{valuePropName:"checked"};case UPLOAD:return{valuePropName:"fileList"};default:return null}}(e),t,s),(e=(s=e).type,r=void 0===(r=s.contentProps)?{}:r,e===DEFINE?s.content:(s=a.get(e||INPUT))?(e=formitem_1.default[s],react_1.default.createElement(e,tslib_1.__assign({},r))):null));return o?react_1.default.createElement(antd_1.Col,tslib_1.__assign({},o),s):s})},[r]);return react_1.default.createElement(react_1.default.Fragment,null,e?react_1.default.createElement(antd_1.Row,tslib_1.__assign({},e),o):o)},MemoWrap=(0,react_1.memo)(FormItemCreator);MemoWrap.TEXT=TEXT,MemoWrap.INPUT=INPUT,MemoWrap.SEARCH=SEARCH,MemoWrap.PASSWORD=PASSWORD,MemoWrap.TEXTAREA=TEXTAREA,MemoWrap.NUMBER=NUMBER,MemoWrap.RADIO=RADIO,MemoWrap.CHECKBOX=CHECKBOX,MemoWrap.DATEPICKER=DATEPICKER,MemoWrap.RANGEPICKER=RANGEPICKER,MemoWrap.TIMEPICKER=TIMEPICKER,MemoWrap.SWITCH=SWITCH,MemoWrap.SELECT=SELECT,MemoWrap.SLIDER=SLIDER,MemoWrap.RATE=RATE,MemoWrap.UPLOAD=UPLOAD,MemoWrap.DEFINE=DEFINE,exports.default=MemoWrap;
//# sourceMappingURL=formitemcreator.js.map
