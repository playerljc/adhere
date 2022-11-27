import _Switch from"antd/es/switch";import _Rate from"antd/es/rate";import _Slider from"antd/es/slider";import _InputNumber from"antd/es/input-number";import _Input from"antd/es/input";import _Button from"antd/es/button";import"core-js/modules/es.array.last-index-of.js";import"core-js/modules/es.regexp.exec.js";import"core-js/modules/es.string.search.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/web.dom-collections.for-each.js";import"core-js/modules/es.object.keys.js";import"core-js/modules/es.array.reduce.js";import"core-js/modules/es.array.includes.js";import"core-js/modules/es.string.includes.js";import"core-js/modules/es.array.filter.js";import"core-js/modules/es.array.index-of.js";import"core-js/modules/es.string.trim.js";import"core-js/modules/es.array.concat.js";import"core-js/modules/es.array.map.js";import"core-js/modules/es.array.find.js";import"core-js/modules/es.array.find-index.js";import"core-js/modules/es.array.splice.js";import"core-js/modules/es.array.iterator.js";import"core-js/modules/es.map.js";import"core-js/modules/es.string.iterator.js";import"core-js/modules/esnext.map.delete-all.js";import"core-js/modules/esnext.map.every.js";import"core-js/modules/esnext.map.filter.js";import"core-js/modules/esnext.map.find.js";import"core-js/modules/esnext.map.find-key.js";import"core-js/modules/esnext.map.includes.js";import"core-js/modules/esnext.map.key-of.js";import"core-js/modules/esnext.map.map-keys.js";import"core-js/modules/esnext.map.map-values.js";import"core-js/modules/esnext.map.merge.js";import"core-js/modules/esnext.map.reduce.js";import"core-js/modules/esnext.map.some.js";import"core-js/modules/esnext.map.update.js";import"core-js/modules/web.dom-collections.iterator.js";import"core-js/modules/es.array.slice.js";import"core-js/modules/es.promise.js";import{__assign,__extends,__rest,__spreadArray}from"tslib";import merge from"lodash/merge";import moment from"moment";import omit from"omit.js";import qs from"qs";import React from"react";import{FilterOutlined}from"@ant-design/icons";import AntdFormItem from"@baifendian/adhere-ui-antdformitem";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import TableGridLayout from"@baifendian/adhere-ui-tablegridlayout";import TableHeadSearch from"@baifendian/adhere-ui-tableheadsearch";import Intl from"@baifendian/adhere-util-intl";import Resource from"@baifendian/adhere-util-resource";import Validator from"@baifendian/adhere-util-validator";import AdvancedSearchPanel from"./Extension/AdvancedSearchPanel";import{selectorPrefix}from"./SearchTable";var FormItemGeneratorToDict=AntdFormItem.FormItemGeneratorToDict,_a=AntdFormItem.AntFormItemNormalize,DatePicker=_a.DatePicker,InputNumberDecimal1=_a.InputNumberDecimal1,InputNumberDecimal2=_a.InputNumberDecimal2,InputNumberInteger=_a.InputNumberInteger,RangePicker=_a.RangePicker,TimePicker=_a.TimePicker,renderGridSearchFormGroup=TableGridLayout.renderGridSearchFormGroup,Label=TableGridLayout.Label,Value=TableGridLayout.Value,_selectorPrefix="".concat(selectorPrefix,"-protable"),getPathName=function(){var e;return window.location.hash?-1!==(e=window.location.hash).lastIndexOf("?")?e.substring(1,e.lastIndexOf("?")):e.substring(1):window.location.pathname},getSearch=function(){var e,t;return window.location.hash?-1!==(t=(e=window.location.hash).lastIndexOf("?"))?e.substring(t):"":window.location.search};export default function(e,r){return __extends(t,n=e),t.prototype.componentWillUnmount=function(){n.prototype.componentWillUnmount&&n.prototype.componentWillUnmount.call(this),"openSearchParamsMemory"in this.props||this.unMountSearchAndPaginParamsDeal()},t.prototype.onSubTableChange=function(e,t,n){},t.prototype.onSearchPanelCollapseBefore=function(){this.hasAdvancedSearchPanel&&this.state.expand&&this.setState({advancedSearchPanelCollapse:!1})},t.prototype.unMountSearchAndPaginParamsDeal=function(){var e,t=this.state.searchParams||{},n=this.pathname,a=this.getComponentId();r.isEmpty()?r.add(n,((e={})[a]={search:t,page:this.state.page,limit:this.state.limit},e)):(e=r.findByPath(n))?(e.components[a].search=t,e.components[a].page=this.state.page,e.components[a].limit=this.state.limit):r.add(n,((e={})[a]={search:t,page:this.state.page,limit:this.state.limit},e))},t.prototype.initSearchAndPaginParams=function(){var e,t,n=qs.parse(getSearch(),{ignoreQueryPrefix:!0}),a={};return Object.keys(n).forEach(function(e){return a[e]=n[e]}),!r.isEmpty()&&(e=r.findByPath(this.pathname),t=this.getComponentId(),e&&e.components[t])?__assign(__assign({},a),e.components[t]):{search:__assign({},a),page:1,limit:this.getLimit()}},t.prototype.hasAdvancedSearch=function(){return!0},t.prototype.hasNumberColumnFixed=function(){return!0},t.prototype.hasOptionColumnFixed=function(){return!0},t.prototype.getParams=function(){var a=this;return this.getTableColumns().reduce(function(e,t){var n=t.$search||{},t=n.dataIndex||t.dataIndex;return[a.getOptionsColumnDataIndex(),a.getLinkColumnDataIndex(),"_number"].includes(t)||("rangePicker"===n.type?(n.startName&&(e[n.startName]=null),n.endName&&(e[n.endName]=null)):["datePicker","timePicker"].includes(n.type)?e[t]=null:e[t]=void 0),e},{})},t.prototype.getDateState=function(t){var e=Object.keys(t).filter(function(e){return null===t[e]||"null"===t[e]||Validator.isDate(t[e],{format:"YYYY-MM-DD"})}),n={};return e.forEach(function(e){n[e]=null===t[e]||"null"===t[e]?null:moment(t[e])}),n},t.prototype.getDataKey=function(){return"records"},t.prototype.getTotalKey=function(){return"total"},t.prototype.getLimit=function(){return 10},t.prototype.getFetchDataParams=function(){var n=this.state.searchParams,a={};return Object.keys(n).filter(function(t){return["start","Start"].some(function(e){return-1!==t.indexOf(e)})||["end","End"].some(function(e){return-1!==t.indexOf(e)})}).forEach(function(t){a[t]=n[t]?"".concat(n[t].format(Resource.Dict.value.ResourceMomentFormat10.value())," ").concat(["start","Start"].some(function(e){return-1!==t.indexOf(e)})?"00:00:00":["end","End"].some(function(e){return-1!==t.indexOf(e)})?"23:59:59":"").trim():null}),Object.keys(n).filter(function(e){return!(e in a)&&n[e]instanceof moment}).forEach(function(e){a[e]=n[e]?n[e].format(Resource.Dict.value.ResourceMomentFormat10.value()).trim():null}),a},t.prototype.getColumns=function(e){return(e||n.prototype.getColumns.call(this)).map(function(e){return __assign({ellipsis:!("ellipsis"in e)||e.ellipsis},e)})},t.prototype.getTableColumns=function(){var i=this,e=n.prototype.getTableColumns.call(this),t=(!this.hasOptionColumnFixed()||!(t=e.find(function(e){return e.dataIndex===(i.getOptionsColumnDataIndex()||"_options")}))||"fixed"in t||t.fixed||(t.fixed="right"),!this.hasNumberColumnFixed()||!(t=e.find(function(e){return"_number"===e.dataIndex}))||"fixed"in t||t.fixed||(t.fixed="left"),e.find(function(e){return e.dataIndex===(i.getLinkColumnDataIndex()||"_linkColumn")}));return!t||"ellipsis"in t||(t.ellipsis=!1),e.map(function(e){return __assign(__assign({},e),{align:[i.getLinkColumnDataIndex()||"_linkColumn"].includes(e.dataIndex)&&"align"in e&&e.align?e.align:"center"})}).map(function(e){var t=e.$search,n=__rest(e,["$search"]),a=i.assignSearchConfig(t,n),t=a.showColumnHeader,r=__assign({},e),o=a.dataIndex||e.dataIndex;return r=!["_number",i.getOptionsColumnDataIndex()].includes(o)&&t?__assign(__assign({},r),TableHeadSearch(function(e){var t=e.confirm,n=a.type;return React.createElement("div",{className:"".concat(_selectorPrefix,"-headersearchwrap")},React.createElement("div",{className:"".concat(_selectorPrefix,"-headersearchwrap-main")},i.renderGridSearchFormGroupDataItem(n,{searchConfig:a,column:r,dataIndex:o})),React.createElement("div",{className:"".concat(_selectorPrefix,"-headersearchwrap-footer")},React.createElement(_Button,{size:"small",onClick:function(){var e={};"rangePicker"===n?(a.startName&&(e[a.startName]=null),a.endName&&(e[a.endName]=null)):e[o]=void 0,i.setState(e,function(){return i.onSearch().then(function(){return t()})})}},Intl.v("重置")),React.createElement(_Button,{size:"small",type:"primary",onClick:function(){return i.onSearch().then(function(){return t()})}},Intl.v("确定"))))})):r})},t.prototype.getOptionsColumnDataIndex=function(){return"_options"},t.prototype.getLinkColumnDataIndex=function(){return"_linkColumn"},t.prototype.getPagination=function(){var a=this;return __assign(__assign({},n.prototype.getPagination.call(this)),{showTotal:function(e){var t=(a.state.page-1)*a.state.limit+1,n=(n=a.state.page*a.state.limit)<e?n:e;return Intl.v("当前 {page}-{pageSize}/共 {total}条",{page:t,pageSize:n,total:e})}})},t.prototype.assignSearchConfig=function(e,t){t={type:"input",visible:!0,showColumnHeader:!0,props:{},labelAttrs:{},valueAttrs:{},authority:[],renderNoAuthority:function(){return null},dataIndex:t.dataIndex,title:t.title,dictName:"",renderChildren:function(){return null},render:function(){return null},startName:"",endName:""};return __assign(__assign({},t),e||{})},t.prototype.renderSearchForm=function(){return this.renderGridSearchFormGroup([{name:"g1",columnCount:3,colgroup:[,"auto",,"auto",,"auto"],data:this.getGridSearchFormGroupDataByColumnConfig()}],{},{rowCount:1})},t.prototype.renderSearchFooterItems=function(e){var t,n,a=this,e=__spreadArray([],e||[],!0);return this.hasAdvancedSearchPanel&&this.state.expand&&(t=React.createElement(ConditionalRender,{conditional:!this.advancedSearchConfig.renderSearchButton,noMatch:function(){return a.advancedSearchConfig.renderSearchButton(function(){return a.setState({advancedSearchPanelCollapse:!0})})}},function(){return React.createElement(_Button,{icon:React.createElement(FilterOutlined,null),type:"primary",onClick:function(){return a.setState({advancedSearchPanelCollapse:!0})}},Intl.v("高级搜索"))}),this.advancedSearchConfig.insertSearchButton?this.advancedSearchConfig.insertSearchButton(e,t):-1!==(n=e.findIndex(function(e){return"$$typeof"in e&&"key"in e&&"reset"===e.key}))&&e.splice(n+1,0,t)),this.renderSearchFooterItemsImpl(e).map(function(e){return"$$typeof"in e?e:e.value})},t.prototype.renderSearchFooterItemsImpl=function(e){return __spreadArray(__spreadArray([],e,!0),[React.createElement("div",{className:"".concat(_selectorPrefix,"-headeritem")},this.renderTableDensitySetting()),React.createElement("div",{className:"".concat(_selectorPrefix,"-headeritem")},this.renderColumnSetting())],!1)},t.prototype.renderGridSearchFormGroupDataItem=function(e,t){var a=this,n=t.searchConfig,r=t.column,o=t.dataIndex;return null==(t=new Map([["input",function(e){var t=e.searchConfig,n=e.dataIndex;return React.createElement(_Input,__assign({value:a.state[n],onChange:function(e){return a.onInputChange(n,e)}},t.props||{}))}],["textArea",function(e){var t=e.searchConfig,n=e.dataIndex;return React.createElement(_Input.TextArea,__assign({value:a.state[n],onChange:function(e){return a.onInputChange(n,e)}},t.props||{}))}],["inputNumber",function(e){var t=e.searchConfig,n=e.dataIndex;return React.createElement(_InputNumber,__assign({value:a.state[n],onChange:function(e){return a.onSelectChange(n,e)}},t.props||{}))}],["inputNumberDecimal1",function(e){var t=e.searchConfig,n=e.dataIndex;return React.createElement(InputNumberDecimal1,__assign({value:a.state[n],onChange:function(e){return a.onSelectChange(n,e)}},t.props||{}))}],["inputNumberDecimal2",function(e){var t=e.searchConfig,n=e.dataIndex;return React.createElement(InputNumberDecimal2,__assign({value:a.state[n],onChange:function(e){return a.onSelectChange(n,e)}},t.props||{}))}],["inputNumberInteger",function(e){var t=e.searchConfig,n=e.dataIndex;return React.createElement(InputNumberInteger,__assign({value:a.state[n],onChange:function(e){return a.onSelectChange(n,e)}},t.props||{}))}],["select",function(e){var t=e.searchConfig,n=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"FormItem")];return React.createElement(e,__assign({value:a.state[n],onChange:function(e){return a.onSelectChange(n,e)}},t.props||{}))}],["multiSelect",function(e){var t=e.searchConfig,n=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"MulitFormItem")];return React.createElement(e,__assign({value:a.state[n],onChange:function(e){return a.onSelectChange(n,e)}},t.props||{}))}],["checkAllMultiSelect",function(e){var t=e.searchConfig,n=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"CheckAllMulitFormItem")];return React.createElement(e,__assign({value:a.state[n],onChange:function(e){return a.onSelectChange(n,e)}},t.props||{}))}],["autoCompleteSelect",function(e){var t=e.searchConfig,n=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"FormItem")];return React.createElement(e,__assign({value:a.state[n],onChange:function(e){return a.onSelectChange(n,e)}},t.props||{}))}],["autoCompleteSelectMulti",function(e){var t=e.searchConfig,n=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"MulitFormItem")];return React.createElement(e,__assign({value:a.state[n],onChange:function(e){return a.onSelectChange(n,e)}},t.props||{}))}],["autoCompleteSelectCheckAllMulti",function(e){var t=e.searchConfig,n=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"CheckAllMulitFormItem")];return React.createElement(e,__assign({value:a.state[n],onChange:function(e){return a.onSelectChange(n,e)}},t.props||{}))}],["radioHorizontal",function(e){var t=e.searchConfig,n=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"HorizontalFormItem")];return React.createElement(e,__assign({value:a.state[n],onChange:function(e){return a.onSelectChange(n,e)}},t.props||{}))}],["radioButton",function(e){var t=e.searchConfig,n=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"ButtonFormItem")];return React.createElement(e,__assign({value:a.state[n],onChange:function(e){return a.onSelectChange(n,e)}},t.props||{}))}],["radioSelect",function(e){var t=e.searchConfig,n=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"SelectFormItem")];return React.createElement(e,__assign({value:a.state[n],onChange:function(e){return a.onSelectChange(n,e)}},t.props||{}))}],["radioCustom",function(e){var n=e.searchConfig,t=e.dataIndex,e=FormItemGeneratorToDict["".concat(n.dictName,"CustomFormItem")];return React.createElement(e,__assign({value:a.state[t],onChange:function(e){return a.onSelectChange(t,e)}},n.props||{}),function(e){var t;return null==(t=null==n?void 0:n.renderChildren)?void 0:t.call(n,e)})}],["checkBoxHorizontal",function(e){var t=e.searchConfig,n=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"HorizontalFormItem")];return React.createElement(e,__assign({value:a.state[n],onChange:function(e){return a.onSelectChange(n,e)}},t.props||{}))}],["checkBoxCheckAllHorizontal",function(e){var t=e.searchConfig,n=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"CheckAllHorizontalFormItem")];return React.createElement(e,__assign({value:a.state[n],onChange:function(e){return a.onSelectChange(n,e)}},t.props||{}))}],["checkboxSelect",function(e){var t=e.searchConfig,n=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"SelectFormItem")];return React.createElement(e,__assign({value:a.state[n],onChange:function(e){return a.onSelectChange(n,e)}},t.props||{}))}],["checkBoxCheckAllSelect",function(e){var t=e.searchConfig,n=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"CheckAllSelectFormItem")];return React.createElement(e,__assign({value:a.state[n],onChange:function(e){return a.onSelectChange(n,e)}},t.props||{}))}],["checkBoxCustom",function(e){var n=e.searchConfig,t=e.dataIndex,e=FormItemGeneratorToDict["".concat(n.dictName,"CustomFormItem")];return React.createElement(e,__assign({value:a.state[t],onChange:function(e){return a.onSelectChange(t,e)}},n.props||{}),function(e){var t;return null==(t=null==n?void 0:n.renderChildren)?void 0:t.call(n,e)})}],["checkBoxCheckAllCustom",function(e){var n=e.searchConfig,t=e.dataIndex,e=FormItemGeneratorToDict["".concat(n.dictName,"CheckAllCustomFormItem")];return React.createElement(e,__assign({value:a.state[t],onChange:function(e){return a.onSelectChange(t,e)}},n.props||{}),function(e){var t;return null==(t=null==n?void 0:n.renderChildren)?void 0:t.call(n,e)})}],["transferSelect",function(e){var t=e.searchConfig,n=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"SelectFormItem")];return React.createElement(e,__assign({value:a.state[n],onChange:function(e){return a.onSelectChange(n,e)}},t.props||{}))}],["tableSelect",function(e){var t=e.searchConfig,n=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"SelectFormItem")];return React.createElement(e,__assign({value:a.state[n],onChange:function(e){return a.onSelectChange(n,e)}},t.props||{}))}],["tableMultiSelect",function(e){var t=e.searchConfig,n=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"MulitSelectFormItem")];return React.createElement(e,__assign({value:a.state[n],onChange:function(e){return a.onSelectChange(n,e)}},t.props||{}))}],["tablePagingSelect",function(e){var t=e.searchConfig,n=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"PaginationSelectFormItem")];return React.createElement(e,__assign({value:a.state[n],onChange:function(e){return a.onSelectChange(n,e)}},t.props||{}))}],["tablePagingMultiSelect",function(e){var t=e.searchConfig,n=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"PaginationMulitSelectFormItem")];return React.createElement(e,__assign({value:a.state[n],onChange:function(e){return a.onSelectChange(n,e)}},t.props||{}))}],["listSelect",function(e){var t=e.searchConfig,n=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"SelectFormItem")];return React.createElement(e,__assign({value:a.state[n],onChange:function(e){return a.onSelectChange(n,e)}},t.props||{}))}],["listMultiSelect",function(e){var t=e.searchConfig,n=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"MulitSelectFormItem")];return React.createElement(e,__assign({value:a.state[n],onChange:function(e){return a.onSelectChange(n,e)}},t.props||{}))}],["listPagingSelect",function(e){var t=e.searchConfig,n=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"PaginationSelectFormItem")];return React.createElement(e,__assign({value:a.state[n],onChange:function(e){return a.onSelectChange(n,e)}},t.props||{}))}],["listPagingMultiSelect",function(e){var t=e.searchConfig,n=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"PaginationMulitSelectFormItem")];return React.createElement(e,__assign({value:a.state[n],onChange:function(e){return a.onSelectChange(n,e)}},t.props||{}))}],["treeSelect",function(e){var t=e.searchConfig,n=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"FormItem")];return React.createElement(e,__assign({value:a.state[n],onChange:function(e){return a.onSelectChange(n,e)}},t.props||{}))}],["treeMultiSelect",function(e){var t=e.searchConfig,n=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"MulitFormItem")];return React.createElement(e,__assign({value:a.state[n],onChange:function(e){return a.onSelectChange(n,e)}},t.props||{}))}],["treeSelectLeaf",function(e){var t=e.searchConfig,n=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"LeafFormItem")];return React.createElement(e,__assign({value:a.state[n],onChange:function(e){return a.onSelectChange(n,e)}},t.props||{}))}],["treeMultiSelectLeaf",function(e){var t=e.searchConfig,n=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"LeafMulitFormItem")];return React.createElement(e,__assign({value:a.state[n],onChange:function(e){return a.onSelectChange(n,e)}},t.props||{}))}],["cascaderSelect",function(e){var t=e.searchConfig,n=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"FormItem")];return React.createElement(e,__assign({value:a.state[n],onChange:function(e){return a.onSelectChange(n,e)}},t.props||{}))}],["cascaderMultiSelect",function(e){var t=e.searchConfig,n=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"MulitFormItem")];return React.createElement(e,__assign({value:a.state[n],onChange:function(e){return a.onSelectChange(n,e)}},t.props||{}))}],["cascaderSelectLeaf",function(e){var t=e.searchConfig,n=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"LeafFormItem")];return React.createElement(e,__assign({value:a.state[n],onChange:function(e){return a.onSelectChange(n,e)}},t.props||{}))}],["cascaderMultiSelectLeaf",function(e){var t=e.searchConfig,n=e.dataIndex,e=FormItemGeneratorToDict["".concat(t.dictName,"LeafMulitFormItem")];return React.createElement(e,__assign({value:a.state[n],onChange:function(e){return a.onSelectChange(n,e)}},t.props||{}))}],["datePicker",function(e){var t=e.searchConfig,n=e.dataIndex;return React.createElement(DatePicker,__assign({value:a.state[n],onChange:function(e){var t;a.setState(((t={})[n]=e||null,t))}},t.props||{}))}],["timePicker",function(e){var t=e.searchConfig,n=e.dataIndex;return React.createElement(TimePicker,__assign({value:a.state[n],onChange:function(e){var t;a.setState(((t={})[n]=e||null,t))}},t.props||{}))}],["rangePicker",function(e){var e=e.searchConfig,t=e.startName,n=e.endName;return React.createElement(RangePicker,__assign({value:[a.state[t],a.state[n]],onChange:function(e){a.onDateTimeRangeChange([t,n],e)}},e.props||{}))}],["slider",function(e){var t=e.searchConfig,n=e.dataIndex;return React.createElement(_Slider,__assign({value:a.state[n],onChange:function(e){return a.onSelectChange(n,e)}},t.props||{}))}],["sliderRange",function(e){e=e.searchConfig;return React.createElement(_Slider,__assign({range:!0,value:a.state[o],onChange:function(e){return a.onSelectChange(o,e)}},e.props||{}))}],["rate",function(e){e=e.searchConfig;return React.createElement(_Rate,__assign({value:a.state[o],onChange:function(e){return a.onSelectChange(o,e)}},e.props||{}))}],["switch",function(e){e=e.searchConfig;return React.createElement(_Switch,__assign({value:a.state[o],onChange:function(e){return a.onSelectChange(o,e)}},e.props||{}))}],["custom",function(e){var t,n=e.searchConfig,a=e.column,e=e.dataIndex;return null==(t=null==n?void 0:n.render)?void 0:t.call(n,{searchConfig:n,column:a,dataIndex:e})}]]).get(e))?void 0:t({searchConfig:n,column:r,dataIndex:o})},t.prototype.getGridSearchFormGroupDataByColumnConfig=function(){var i=this;return this.getTableColumns().filter(function(e){return"$search"in e&&!!e.$search.visible}).map(function(e){var t=e.$search,n=__rest(e,["$search"]),a=i.assignSearchConfig(t,n),r=(null==a?void 0:a.type)||"input",o=a.dataIndex||e.dataIndex,e=t.title||e.title;return{key:o,label:React.createElement(Label,__assign({},t.labelAttrs||{}),e,"："),value:ConditionalRender.conditionalRender({conditional:!i.hasAuthority||(null==(e=i.hasAuthority)?void 0:e.call(i,a.authority)),match:React.createElement(Value,__assign({},t.valueAttrs||{}),i.renderGridSearchFormGroupDataItem(r,{searchConfig:a,column:n,dataIndex:o})),noMatch:t.renderNoAuthority?React.createElement(Value,__assign({},t.valueAttrs||{}),null==(e=null==t?void 0:t.renderNoAuthority)?void 0:e.call(t)):null})}}).filter(function(e){return!!e.value})},t.prototype.renderGridSearchFormGroup=function(e,t,n){var a,r=this,t=merge({layout:"horizontal",density:"middle"},t||{}),o=(null!=(o=null==n?void 0:n.advancedSearch)&&o.onAfterClose&&(a=n.advancedSearch.onAfterClose,n.advancedSearch.onAfterClose=function(){a(),r.setState({advancedSearchPanelCollapse:!1})}),this.advancedSearchConfig=merge({rowCount:"auto",showStrategy:"remaining",renderTitleLabel:null,renderCollapse:null,renderSearchButton:null,insertSearchButton:null,advancedSearch:{className:"",style:{},width:"60%",mask:!0,zIndex:19999,time:300,direction:"right",collapse:!0,onBeforeShow:function(){},onBeforeClose:function(){},onAfterShow:function(){},onAfterClose:function(){r.setState({advancedSearchPanelCollapse:!1})},getPopupContainer:function(){return document.body}}},n||{}),renderGridSearchFormGroup(e,t));if(this.advancedSearchConfig&&"auto"!==this.advancedSearchConfig.rowCount||this.advancedSearchConfig&&!("rowCount"in this.advancedSearchConfig)&&this.hasAdvancedSearch()||this.advancedSearchConfig&&"rowCount"in this.advancedSearchConfig&&!this.advancedSearchConfig.rowCount||!this.advancedSearchConfig&&this.hasAdvancedSearch()){var n=TableGridLayout.getRenderDetail(e,t),i=n.rowCount,c=n.detail;if(i>this.advancedSearchConfig.rowCount){for(var s=[],u=[],l=this.advancedSearchConfig.rowCount,m=0;0!==l;){var d=e[m],h=c[m];h.rowCount<=l?(s.push(__assign({},d)),l-=h.rowCount):(h=h.detail.slice(0,l),s.push(__assign(__assign({},d),{data:d.data.slice(h[0].startIndex,h[h.length-1].endIndex+1)})),u.push(__assign(__assign({},d),{data:d.data.slice(h[h.length-1].endIndex+1)})),l=0),m+=1}for(var p=m;p<e.length;p++)u.push(__assign({},e[p]));return this.hasAdvancedSearchPanel=!0,this.advancedSearchConfig.advancedSearch.collapse=this.state.advancedSearchPanelCollapse,React.createElement("div",{className:"".concat(_selectorPrefix,"-gridsearchformgroupwrap")},renderGridSearchFormGroup(s,t),React.createElement(AdvancedSearchPanel,{groupData:e,tableGridLayoutConfig:t,remainingGroupData:u,advancedSearchConfig:this.advancedSearchConfig,onSearch:function(){return new Promise(function(e){r.setState({page:1},function(){r.onSearch().then(function(){return e()})})})},onReset:function(){return r.onClear()},onCollapse:function(e){return r.setState({advancedSearchPanelCollapse:e})}}))}}return this.hasAdvancedSearchPanel=!1,React.createElement("div",{className:"".concat(_selectorPrefix,"-gridsearchformgroupwrap")},o)},t.prototype.renderOptionColumn=function(e,t){return e.map(function(e){return e.value}).filter(function(e){return!!e})},t;function t(e){var e=n.call(this,e)||this,t=(e.pathname="undefined"!=typeof window?getPathName():"",e.initSearchAndPaginParams());return e.state=__assign(__assign(__assign({},e.state),t.search),{page:t.page,limit:t.limit,searchParams:__assign(__assign({},e.state.searchParams),t.search)}),e.state=__assign(__assign(__assign({},e.state),e.getDateState(omit(e.state,["searchParams"]))),{searchParams:__assign(__assign({},e.state.searchParams),e.getDateState(e.state.searchParams)),advancedSearchPanelCollapse:!1}),e.hasAdvancedSearchPanel=!1,e.advancedSearchConfig=null,e}var n}
//# sourceMappingURL=ProTableFactory.js.map
