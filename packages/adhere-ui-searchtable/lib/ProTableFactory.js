"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.regexp.exec.js"),require("core-js/modules/es.string.search.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/web.dom-collections.for-each.js"),require("core-js/modules/es.object.keys.js"),require("core-js/modules/es.array.reduce.js"),require("core-js/modules/es.array.includes.js"),require("core-js/modules/es.string.includes.js"),require("core-js/modules/es.array.filter.js"),require("core-js/modules/es.array.index-of.js"),require("core-js/modules/es.string.trim.js"),require("core-js/modules/es.array.concat.js"),require("core-js/modules/es.array.map.js"),require("core-js/modules/es.array.find.js"),require("core-js/modules/es.array.find-index.js"),require("core-js/modules/es.array.splice.js"),require("core-js/modules/es.array.iterator.js"),require("core-js/modules/es.map.js"),require("core-js/modules/es.string.iterator.js"),require("core-js/modules/esnext.map.delete-all.js"),require("core-js/modules/esnext.map.every.js"),require("core-js/modules/esnext.map.filter.js"),require("core-js/modules/esnext.map.find.js"),require("core-js/modules/esnext.map.find-key.js"),require("core-js/modules/esnext.map.includes.js"),require("core-js/modules/esnext.map.key-of.js"),require("core-js/modules/esnext.map.map-keys.js"),require("core-js/modules/esnext.map.map-values.js"),require("core-js/modules/esnext.map.merge.js"),require("core-js/modules/esnext.map.reduce.js"),require("core-js/modules/esnext.map.some.js"),require("core-js/modules/esnext.map.update.js"),require("core-js/modules/web.dom-collections.iterator.js"),require("core-js/modules/es.array.slice.js"),require("core-js/modules/es.promise.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),antd_1=require("antd"),merge_1=tslib_1.__importDefault(require("lodash/merge")),moment_1=tslib_1.__importDefault(require("moment")),omit_js_1=tslib_1.__importDefault(require("omit.js")),qs_1=tslib_1.__importDefault(require("qs")),react_1=tslib_1.__importDefault(require("react")),icons_1=require("@ant-design/icons"),adhere_ui_antdformitem_1=tslib_1.__importDefault(require("@baifendian/adhere-ui-antdformitem")),adhere_ui_conditionalrender_1=tslib_1.__importDefault(require("@baifendian/adhere-ui-conditionalrender")),adhere_ui_tablegridlayout_1=tslib_1.__importDefault(require("@baifendian/adhere-ui-tablegridlayout")),adhere_ui_tableheadsearch_1=tslib_1.__importDefault(require("@baifendian/adhere-ui-tableheadsearch")),adhere_util_intl_1=tslib_1.__importDefault(require("@baifendian/adhere-util-intl")),adhere_util_resource_1=tslib_1.__importDefault(require("@baifendian/adhere-util-resource")),adhere_util_validator_1=tslib_1.__importDefault(require("@baifendian/adhere-util-validator")),AdvancedSearchPanel_1=tslib_1.__importDefault(require("./Extension/AdvancedSearchPanel")),SearchTable_1=require("./SearchTable"),FormItemGeneratorToDict=adhere_ui_antdformitem_1.default.FormItemGeneratorToDict,_a=adhere_ui_antdformitem_1.default.AntFormItemNormalize,DatePicker=_a.DatePicker,InputNumberDecimal1=_a.InputNumberDecimal1,InputNumberDecimal2=_a.InputNumberDecimal2,InputNumberInteger=_a.InputNumberInteger,RangePicker=_a.RangePicker,TimePicker=_a.TimePicker,renderGridSearchFormGroup=adhere_ui_tablegridlayout_1.default.renderGridSearchFormGroup,Label=adhere_ui_tablegridlayout_1.default.Label,Value=adhere_ui_tablegridlayout_1.default.Value,_selectorPrefix="".concat(SearchTable_1.selectorPrefix,"-protable");exports.default=function(e,r){return a=e,tslib_1.__extends(t,a),t.prototype.componentWillUnmount=function(){a.prototype.componentWillUnmount&&a.prototype.componentWillUnmount.call(this),"openSearchParamsMemory"in this.props||this.unMountSearchAndPaginParamsDeal()},t.prototype.onSubTableChange=function(e,t,a){},t.prototype.onSearchPanelCollapseBefore=function(){this.hasAdvancedSearchPanel&&this.state.expand&&this.setState({advancedSearchPanelCollapse:!1})},t.prototype.unMountSearchAndPaginParamsDeal=function(){var e,t=this.state.searchParams||{},a=this.pathname,n=this.getComponentId();r.isEmpty()?r.add(a,((e={})[n]={search:t,page:this.state.page,limit:this.state.limit},e)):(e=r.findByPath(a))?(e.components[n].search=t,e.components[n].page=this.state.page,e.components[n].limit=this.state.limit):r.add(a,((e={})[n]={search:t,page:this.state.page,limit:this.state.limit},e))},t.prototype.initSearchAndPaginParams=function(){var e,t,a=qs_1.default.parse(this.getSearch(),{ignoreQueryPrefix:!0}),n={};return Object.keys(a).forEach(function(e){return n[e]=a[e]}),!r.isEmpty()&&(e=r.findByPath(this.pathname),t=this.getComponentId(),e&&e.components[t])?tslib_1.__assign(tslib_1.__assign({},n),e.components[t]):{search:tslib_1.__assign({},n),page:1,limit:this.getLimit()}},t.prototype.hasAdvancedSearch=function(){return!0},t.prototype.hasNumberColumnFixed=function(){return!0},t.prototype.hasOptionColumnFixed=function(){return!0},t.prototype.getPathName=function(){return window.location.pathname},t.prototype.getSearch=function(){return window.location.search},t.prototype.getParams=function(){var n=this;return this.getTableColumns().reduce(function(e,t){var a=t.$search||{},t=a.dataIndex||t.dataIndex;return[n.getOptionsColumnDataIndex(),n.getLinkColumnDataIndex(),"_number"].includes(t)||("rangePicker"===a.type?(a.startName&&(e[a.startName]=null),a.endName&&(e[a.endName]=null)):["datePicker","timePicker"].includes(a.type)?e[t]=null:e[t]=void 0),e},{})},t.prototype.getDateState=function(t){var e=Object.keys(t).filter(function(e){return null===t[e]||"null"===t[e]||adhere_util_validator_1.default.isDate(t[e],{format:"YYYY-MM-DD"})}),a={};return e.forEach(function(e){a[e]=null===t[e]||"null"===t[e]?null:(0,moment_1.default)(t[e])}),a},t.prototype.getDataKey=function(){return"records"},t.prototype.getTotalKey=function(){return"total"},t.prototype.getLimit=function(){return 10},t.prototype.getFetchDataParams=function(){var a=this.state.searchParams,n={};return Object.keys(a).filter(function(t){return["start","Start"].some(function(e){return-1!==t.indexOf(e)})||["end","End"].some(function(e){return-1!==t.indexOf(e)})}).forEach(function(t){n[t]=a[t]?"".concat(a[t].format(adhere_util_resource_1.default.Dict.value.ResourceMomentFormat10.value())," ").concat(["start","Start"].some(function(e){return-1!==t.indexOf(e)})?"00:00:00":["end","End"].some(function(e){return-1!==t.indexOf(e)})?"23:59:59":"").trim():null}),Object.keys(a).filter(function(e){return!(e in n)&&a[e]instanceof moment_1.default}).forEach(function(e){n[e]=a[e]?a[e].format(adhere_util_resource_1.default.Dict.value.ResourceMomentFormat10.value()).trim():null}),n},t.prototype.getColumns=function(e){return(e||a.prototype.getColumns.call(this)).map(function(e){return tslib_1.__assign({},e)})},t.prototype.getTableColumns=function(){var i=this,e=a.prototype.getTableColumns.call(this),t=(!this.hasOptionColumnFixed()||!(t=e.find(function(e){return e.dataIndex===(i.getOptionsColumnDataIndex()||"_options")}))||"fixed"in t||t.fixed||(t.fixed="right"),!this.hasNumberColumnFixed()||!(t=e.find(function(e){return"_number"===e.dataIndex}))||"fixed"in t||t.fixed||(t.fixed="left"),e.find(function(e){return e.dataIndex===(i.getLinkColumnDataIndex()||"_linkColumn")}));return t&&("ellipsis"in t||(t.ellipsis=!1),"align"in t||(t.align="left")),e.map(function(e){return tslib_1.__assign(tslib_1.__assign({},e),{align:[i.getLinkColumnDataIndex()||"_linkColumn"].includes(e.dataIndex)&&"align"in e&&e.align?e.align:"center"})}).map(function(e){var t=e.$search,a=tslib_1.__rest(e,["$search"]),n=i.assignSearchConfig(t,a),t=n.showColumnHeader,r=tslib_1.__assign({},e),o=n.dataIndex||e.dataIndex;return r=!["_number",i.getOptionsColumnDataIndex()].includes(o)&&t?tslib_1.__assign(tslib_1.__assign({},r),(0,adhere_ui_tableheadsearch_1.default)(function(e){var t=e.confirm,a=n.type;return react_1.default.createElement("div",{className:"".concat(_selectorPrefix,"-headersearchwrap")},react_1.default.createElement("div",{className:"".concat(_selectorPrefix,"-headersearchwrap-main")},i.renderGridSearchFormGroupDataItem(a,{searchConfig:n,column:r,dataIndex:o})),react_1.default.createElement("div",{className:"".concat(_selectorPrefix,"-headersearchwrap-footer")},react_1.default.createElement(antd_1.Button,{size:"small",onClick:function(){var e={};"rangePicker"===a?(n.startName&&(e[n.startName]=null),n.endName&&(e[n.endName]=null)):e[o]=void 0,i.setState(e,function(){return i.onSearch().then(function(){return t()})})}},adhere_util_intl_1.default.v("重置")),react_1.default.createElement(antd_1.Button,{size:"small",type:"primary",onClick:function(){return i.onSearch().then(function(){return t()})}},adhere_util_intl_1.default.v("确定"))))})):r})},t.prototype.getOptionsColumnDataIndex=function(){return"_options"},t.prototype.getLinkColumnDataIndex=function(){return"_linkColumn"},t.prototype.getPagination=function(){var n=this;return tslib_1.__assign(tslib_1.__assign({},a.prototype.getPagination.call(this)),{showTotal:function(e){var t=(n.state.page-1)*n.state.limit+1,a=(a=n.state.page*n.state.limit)<e?a:e;return adhere_util_intl_1.default.v("当前 {page}-{pageSize}/共 {total}条",{page:t,pageSize:a,total:e})}})},t.prototype.assignSearchConfig=function(e,t){t={type:"input",visible:!0,showColumnHeader:!0,props:{},labelAttrs:{},valueAttrs:{},authority:[],renderNoAuthority:function(){return null},dataIndex:t.dataIndex,title:t.title,dictName:"",renderChildren:function(){return null},render:function(){return null},startName:"",endName:""};return tslib_1.__assign(tslib_1.__assign({},t),e||{})},t.prototype.getGridSearchFormGroupParams=function(){return[[{name:"g1",columnCount:3,colgroup:[,"auto",,"auto",,"auto"],data:this.getGridSearchFormGroupDataByColumnConfig()}],{},{rowCount:1}]},t.prototype.renderSearchForm=function(){return this.renderGridSearchFormGroup.apply(this,this.getGridSearchFormGroupParams())},t.prototype.renderSearchFooterItems=function(e){var t,a,n=this,e=tslib_1.__spreadArray([],e||[],!0);return this.hasAdvancedSearchPanel&&this.state.expand&&(t=react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!this.advancedSearchConfig.renderSearchButton,noMatch:function(){return n.advancedSearchConfig.renderSearchButton(function(){return n.setState({advancedSearchPanelCollapse:!0})})}},function(){return react_1.default.createElement(antd_1.Button,{icon:react_1.default.createElement(icons_1.FilterOutlined,null),type:"primary",onClick:function(){return n.setState({advancedSearchPanelCollapse:!0})}},adhere_util_intl_1.default.v("高级搜索"))}),this.advancedSearchConfig.insertSearchButton?this.advancedSearchConfig.insertSearchButton(e,t):-1!==(a=e.findIndex(function(e){return"$$typeof"in e&&"key"in e&&"reset"===e.key}))&&e.splice(a+1,0,t)),this.renderSearchFooterItemsImpl(e).map(function(e){return"$$typeof"in e?e:e.value})},t.prototype.renderSearchFooterItemsImpl=function(e){return tslib_1.__spreadArray(tslib_1.__spreadArray([],e,!0),[react_1.default.createElement("div",{className:"".concat(_selectorPrefix,"-headeritem")},this.renderTableDensitySetting()),react_1.default.createElement("div",{className:"".concat(_selectorPrefix,"-headeritem")},this.renderColumnSetting())],!1)},t.prototype.renderGridSearchFormGroupDataItem=function(e,t){var n=this,a=t.searchConfig,r=t.column,o=t.dataIndex;return null==(t=new Map([["input",function(e){var t=e.searchConfig,a=e.dataIndex;return react_1.default.createElement(antd_1.Input,tslib_1.__assign({value:n.state[a],onChange:function(e){return n.onInputChange(a,e)}},t.props||{}))}],["textArea",function(e){var t=e.searchConfig,a=e.dataIndex;return react_1.default.createElement(antd_1.Input.TextArea,tslib_1.__assign({value:n.state[a],onChange:function(e){return n.onInputChange(a,e)}},t.props||{}))}],["inputNumber",function(e){var t=e.searchConfig,a=e.dataIndex;return react_1.default.createElement(antd_1.InputNumber,tslib_1.__assign({value:n.state[a],onChange:function(e){return n.onSelectChange(a,e)}},t.props||{}))}],["inputNumberDecimal1",function(e){var t=e.searchConfig,a=e.dataIndex;return react_1.default.createElement(InputNumberDecimal1,tslib_1.__assign({value:n.state[a],onChange:function(e){return n.onSelectChange(a,e)}},t.props||{}))}],["inputNumberDecimal2",function(e){var t=e.searchConfig,a=e.dataIndex;return react_1.default.createElement(InputNumberDecimal2,tslib_1.__assign({value:n.state[a],onChange:function(e){return n.onSelectChange(a,e)}},t.props||{}))}],["inputNumberInteger",function(e){var t=e.searchConfig,a=e.dataIndex;return react_1.default.createElement(InputNumberInteger,tslib_1.__assign({value:n.state[a],onChange:function(e){return n.onSelectChange(a,e)}},t.props||{}))}],["select",function(e){var t=e.searchConfig,a=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"FormItem")];return react_1.default.createElement(e,tslib_1.__assign({value:n.state[a],onChange:function(e){return n.onSelectChange(a,e)}},t.props||{}))}],["multiSelect",function(e){var t=e.searchConfig,a=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"MulitFormItem")];return react_1.default.createElement(e,tslib_1.__assign({value:n.state[a],onChange:function(e){return n.onSelectChange(a,e)}},t.props||{}))}],["checkAllMultiSelect",function(e){var t=e.searchConfig,a=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"CheckAllMulitFormItem")];return react_1.default.createElement(e,tslib_1.__assign({value:n.state[a],onChange:function(e){return n.onSelectChange(a,e)}},t.props||{}))}],["autoCompleteSelect",function(e){var t=e.searchConfig,a=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"FormItem")];return react_1.default.createElement(e,tslib_1.__assign({value:n.state[a],onChange:function(e){return n.onSelectChange(a,e)}},t.props||{}))}],["autoCompleteSelectMulti",function(e){var t=e.searchConfig,a=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"MulitFormItem")];return react_1.default.createElement(e,tslib_1.__assign({value:n.state[a],onChange:function(e){return n.onSelectChange(a,e)}},t.props||{}))}],["autoCompleteSelectCheckAllMulti",function(e){var t=e.searchConfig,a=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"CheckAllMulitFormItem")];return react_1.default.createElement(e,tslib_1.__assign({value:n.state[a],onChange:function(e){return n.onSelectChange(a,e)}},t.props||{}))}],["radioHorizontal",function(e){var t=e.searchConfig,a=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"HorizontalFormItem")];return react_1.default.createElement(e,tslib_1.__assign({value:n.state[a],onChange:function(e){return n.onSelectChange(a,e)}},t.props||{}))}],["radioButton",function(e){var t=e.searchConfig,a=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"ButtonFormItem")];return react_1.default.createElement(e,tslib_1.__assign({value:n.state[a],onChange:function(e){return n.onSelectChange(a,e)}},t.props||{}))}],["radioSelect",function(e){var t=e.searchConfig,a=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"SelectFormItem")];return react_1.default.createElement(e,tslib_1.__assign({value:n.state[a],onChange:function(e){return n.onSelectChange(a,e)}},t.props||{}))}],["radioCustom",function(e){var a=e.searchConfig,t=e.dataIndex,e=FormItemGeneratorToDict["".concat(a.dictName,"CustomFormItem")];return react_1.default.createElement(e,tslib_1.__assign({value:n.state[t],onChange:function(e){return n.onSelectChange(t,e)}},a.props||{}),function(e){var t;return null==(t=null==a?void 0:a.renderChildren)?void 0:t.call(a,e)})}],["checkBoxHorizontal",function(e){var t=e.searchConfig,a=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"HorizontalFormItem")];return react_1.default.createElement(e,tslib_1.__assign({value:n.state[a],onChange:function(e){return n.onSelectChange(a,e)}},t.props||{}))}],["checkBoxCheckAllHorizontal",function(e){var t=e.searchConfig,a=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"CheckAllHorizontalFormItem")];return react_1.default.createElement(e,tslib_1.__assign({value:n.state[a],onChange:function(e){return n.onSelectChange(a,e)}},t.props||{}))}],["checkboxSelect",function(e){var t=e.searchConfig,a=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"SelectFormItem")];return react_1.default.createElement(e,tslib_1.__assign({value:n.state[a],onChange:function(e){return n.onSelectChange(a,e)}},t.props||{}))}],["checkBoxCheckAllSelect",function(e){var t=e.searchConfig,a=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"CheckAllSelectFormItem")];return react_1.default.createElement(e,tslib_1.__assign({value:n.state[a],onChange:function(e){return n.onSelectChange(a,e)}},t.props||{}))}],["checkBoxCustom",function(e){var a=e.searchConfig,t=e.dataIndex,e=FormItemGeneratorToDict["".concat(a.dictName,"CustomFormItem")];return react_1.default.createElement(e,tslib_1.__assign({value:n.state[t],onChange:function(e){return n.onSelectChange(t,e)}},a.props||{}),function(e){var t;return null==(t=null==a?void 0:a.renderChildren)?void 0:t.call(a,e)})}],["checkBoxCheckAllCustom",function(e){var a=e.searchConfig,t=e.dataIndex,e=FormItemGeneratorToDict["".concat(a.dictName,"CheckAllCustomFormItem")];return react_1.default.createElement(e,tslib_1.__assign({value:n.state[t],onChange:function(e){return n.onSelectChange(t,e)}},a.props||{}),function(e){var t;return null==(t=null==a?void 0:a.renderChildren)?void 0:t.call(a,e)})}],["transferSelect",function(e){var t=e.searchConfig,a=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"SelectFormItem")];return react_1.default.createElement(e,tslib_1.__assign({value:n.state[a],onChange:function(e){return n.onSelectChange(a,e)}},t.props||{}))}],["tableSelect",function(e){var t=e.searchConfig,a=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"SelectFormItem")];return react_1.default.createElement(e,tslib_1.__assign({value:n.state[a],onChange:function(e){return n.onSelectChange(a,e)}},t.props||{}))}],["tableMultiSelect",function(e){var t=e.searchConfig,a=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"MulitSelectFormItem")];return react_1.default.createElement(e,tslib_1.__assign({value:n.state[a],onChange:function(e){return n.onSelectChange(a,e)}},t.props||{}))}],["tablePagingSelect",function(e){var t=e.searchConfig,a=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"PaginationSelectFormItem")];return react_1.default.createElement(e,tslib_1.__assign({value:n.state[a],onChange:function(e){return n.onSelectChange(a,e)}},t.props||{}))}],["tablePagingMultiSelect",function(e){var t=e.searchConfig,a=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"PaginationMulitSelectFormItem")];return react_1.default.createElement(e,tslib_1.__assign({value:n.state[a],onChange:function(e){return n.onSelectChange(a,e)}},t.props||{}))}],["listSelect",function(e){var t=e.searchConfig,a=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"SelectFormItem")];return react_1.default.createElement(e,tslib_1.__assign({value:n.state[a],onChange:function(e){return n.onSelectChange(a,e)}},t.props||{}))}],["listMultiSelect",function(e){var t=e.searchConfig,a=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"MulitSelectFormItem")];return react_1.default.createElement(e,tslib_1.__assign({value:n.state[a],onChange:function(e){return n.onSelectChange(a,e)}},t.props||{}))}],["listPagingSelect",function(e){var t=e.searchConfig,a=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"PaginationSelectFormItem")];return react_1.default.createElement(e,tslib_1.__assign({value:n.state[a],onChange:function(e){return n.onSelectChange(a,e)}},t.props||{}))}],["listPagingMultiSelect",function(e){var t=e.searchConfig,a=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"PaginationMulitSelectFormItem")];return react_1.default.createElement(e,tslib_1.__assign({value:n.state[a],onChange:function(e){return n.onSelectChange(a,e)}},t.props||{}))}],["treeSelect",function(e){var t=e.searchConfig,a=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"FormItem")];return react_1.default.createElement(e,tslib_1.__assign({value:n.state[a],onChange:function(e){return n.onSelectChange(a,e)}},t.props||{}))}],["treeMultiSelect",function(e){var t=e.searchConfig,a=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"MulitFormItem")];return react_1.default.createElement(e,tslib_1.__assign({value:n.state[a],onChange:function(e){return n.onSelectChange(a,e)}},t.props||{}))}],["treeSelectLeaf",function(e){var t=e.searchConfig,a=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"LeafFormItem")];return react_1.default.createElement(e,tslib_1.__assign({value:n.state[a],onChange:function(e){return n.onSelectChange(a,e)}},t.props||{}))}],["treeMultiSelectLeaf",function(e){var t=e.searchConfig,a=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"LeafMulitFormItem")];return react_1.default.createElement(e,tslib_1.__assign({value:n.state[a],onChange:function(e){return n.onSelectChange(a,e)}},t.props||{}))}],["cascaderSelect",function(e){var t=e.searchConfig,a=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"FormItem")];return react_1.default.createElement(e,tslib_1.__assign({value:n.state[a],onChange:function(e){return n.onSelectChange(a,e)}},t.props||{}))}],["cascaderMultiSelect",function(e){var t=e.searchConfig,a=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"MulitFormItem")];return react_1.default.createElement(e,tslib_1.__assign({value:n.state[a],onChange:function(e){return n.onSelectChange(a,e)}},t.props||{}))}],["cascaderSelectLeaf",function(e){var t=e.searchConfig,a=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"LeafFormItem")];return react_1.default.createElement(e,tslib_1.__assign({value:n.state[a],onChange:function(e){return n.onSelectChange(a,e)}},t.props||{}))}],["cascaderMultiSelectLeaf",function(e){var t=e.searchConfig,a=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"LeafMulitFormItem")];return react_1.default.createElement(e,tslib_1.__assign({value:n.state[a],onChange:function(e){return n.onSelectChange(a,e)}},t.props||{}))}],["datePicker",function(e){var t=e.searchConfig,a=e.dataIndex;return react_1.default.createElement(DatePicker,tslib_1.__assign({value:n.state[a],onChange:function(e){var t;n.setState(((t={})[a]=e||null,t))}},t.props||{}))}],["timePicker",function(e){var t=e.searchConfig,a=e.dataIndex;return react_1.default.createElement(TimePicker,tslib_1.__assign({value:n.state[a],onChange:function(e){var t;n.setState(((t={})[a]=e||null,t))}},t.props||{}))}],["rangePicker",function(e){var e=e.searchConfig,t=e.startName,a=e.endName;return react_1.default.createElement(RangePicker,tslib_1.__assign({value:[n.state[t],n.state[a]],onChange:function(e){n.onDateTimeRangeChange([t,a],e)}},e.props||{}))}],["slider",function(e){var t=e.searchConfig,a=e.dataIndex;return react_1.default.createElement(antd_1.Slider,tslib_1.__assign({value:n.state[a],onChange:function(e){return n.onSelectChange(a,e)}},t.props||{}))}],["sliderRange",function(e){e=e.searchConfig;return react_1.default.createElement(antd_1.Slider,tslib_1.__assign({range:!0,value:n.state[o],onChange:function(e){return n.onSelectChange(o,e)}},e.props||{}))}],["rate",function(e){e=e.searchConfig;return react_1.default.createElement(antd_1.Rate,tslib_1.__assign({value:n.state[o],onChange:function(e){return n.onSelectChange(o,e)}},e.props||{}))}],["switch",function(e){e=e.searchConfig;return react_1.default.createElement(antd_1.Switch,tslib_1.__assign({value:n.state[o],onChange:function(e){return n.onSelectChange(o,e)}},e.props||{}))}],["custom",function(e){var t,a=e.searchConfig,n=e.column,e=e.dataIndex;return null==(t=null==a?void 0:a.render)?void 0:t.call(a,{searchConfig:a,column:n,dataIndex:e})}]]).get(e))?void 0:t({searchConfig:a,column:r,dataIndex:o})},t.prototype.getGridSearchFormGroupDataByColumnConfig=function(){var i=this;return this.getColumns(a.prototype.getColumns.call(this)).filter(function(e){return"$search"in e&&!!e.$search.visible}).map(function(e){var t=e.$search,a=tslib_1.__rest(e,["$search"]),n=i.assignSearchConfig(t,a),r=(null==n?void 0:n.type)||"input",o=n.dataIndex||e.dataIndex,e=t.title||e.title;return{key:o,label:react_1.default.createElement(Label,tslib_1.__assign({},t.labelAttrs||{}),e,"："),value:adhere_ui_conditionalrender_1.default.conditionalRender({conditional:!i.hasAuthority||(null==(e=i.hasAuthority)?void 0:e.call(i,n.authority)),match:react_1.default.createElement(Value,tslib_1.__assign({},t.valueAttrs||{}),i.renderGridSearchFormGroupDataItem(r,{searchConfig:n,column:a,dataIndex:o})),noMatch:t.renderNoAuthority?react_1.default.createElement(Value,tslib_1.__assign({},t.valueAttrs||{}),null==(e=null==t?void 0:t.renderNoAuthority)?void 0:e.call(t)):null})}}).filter(function(e){return!!e.value})},t.prototype.renderGridSearchFormGroup=function(e,t,a){var n,r=this,t=(0,merge_1.default)({layout:"horizontal",density:"middle"},t||{}),o=(null!=(o=null==a?void 0:a.advancedSearch)&&o.onAfterClose&&(n=a.advancedSearch.onAfterClose,a.advancedSearch.onAfterClose=function(){n(),r.setState({advancedSearchPanelCollapse:!1})}),this.advancedSearchConfig=(0,merge_1.default)({rowCount:"auto",showStrategy:"remaining",renderTitleLabel:null,renderCollapse:null,renderSearchButton:null,insertSearchButton:null,advancedSearch:{className:"",style:{},width:"60%",mask:!0,zIndex:19999,time:300,direction:"right",collapse:!0,onBeforeShow:function(){},onBeforeClose:function(){},onAfterShow:function(){},onAfterClose:function(){r.setState({advancedSearchPanelCollapse:!1})},getPopupContainer:function(){return document.body}}},a||{}),renderGridSearchFormGroup(e,t));if(this.advancedSearchConfig&&"auto"!==this.advancedSearchConfig.rowCount||this.advancedSearchConfig&&!("rowCount"in this.advancedSearchConfig)&&this.hasAdvancedSearch()||this.advancedSearchConfig&&"rowCount"in this.advancedSearchConfig&&!this.advancedSearchConfig.rowCount||!this.advancedSearchConfig&&this.hasAdvancedSearch()){var a=adhere_ui_tablegridlayout_1.default.getRenderDetail(e,t),i=a.rowCount,c=a.detail;if(i>this.advancedSearchConfig.rowCount){for(var s=[],l=[],u=this.advancedSearchConfig.rowCount,d=0;0!==u;){var m=e[d],_=c[d];_.rowCount<=u?(s.push(tslib_1.__assign({},m)),u-=_.rowCount):(_=_.detail.slice(0,u),s.push(tslib_1.__assign(tslib_1.__assign({},m),{data:m.data.slice(_[0].startIndex,_[_.length-1].endIndex+1)})),l.push(tslib_1.__assign(tslib_1.__assign({},m),{data:m.data.slice(_[_.length-1].endIndex+1)})),u=0),d+=1}for(var f=d;f<e.length;f++)l.push(tslib_1.__assign({},e[f]));return this.hasAdvancedSearchPanel=!0,this.advancedSearchConfig.advancedSearch.collapse=this.state.advancedSearchPanelCollapse,react_1.default.createElement("div",{className:"".concat(_selectorPrefix,"-gridsearchformgroupwrap")},renderGridSearchFormGroup(s,t),react_1.default.createElement(AdvancedSearchPanel_1.default,{groupData:e,tableGridLayoutConfig:t,remainingGroupData:l,advancedSearchConfig:this.advancedSearchConfig,onSearch:function(){return new Promise(function(e){r.setState({page:1},function(){r.onSearch().then(function(){return e()})})})},onReset:function(){return r.onClear()},onCollapse:function(e){return r.setState({advancedSearchPanelCollapse:e})}}))}}return this.hasAdvancedSearchPanel=!1,react_1.default.createElement("div",{className:"".concat(_selectorPrefix,"-gridsearchformgroupwrap")},o)},t.prototype.renderOptionColumn=function(e,t){return e.map(function(e){return e.value}).filter(function(e){return!!e})},t;function t(e){var e=a.call(this,e)||this,t=(e.pathname="undefined"!=typeof window?e.getPathName():"",e.initSearchAndPaginParams());return e.state=tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({},e.state),t.search),{page:t.page,limit:t.limit,searchParams:tslib_1.__assign(tslib_1.__assign({},e.state.searchParams),t.search)}),e.state=tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({},e.state),e.getDateState((0,omit_js_1.default)(e.state,["searchParams"]))),{searchParams:tslib_1.__assign(tslib_1.__assign({},e.state.searchParams),e.getDateState(e.state.searchParams)),advancedSearchPanelCollapse:!1}),e.hasAdvancedSearchPanel=!1,e.advancedSearchConfig=null,e}var a};
//# sourceMappingURL=ProTableFactory.js.map
