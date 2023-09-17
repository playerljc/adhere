"use strict";var __extends=function(){var a=function(e,t){return(a=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){e.__proto__=t}:function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}))(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}(),__assign=function(){return(__assign=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},__rest=function(e,t){var n={};for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},__spreadArray=function(e,t,n){if(n||2===arguments.length)for(var a,r=0,o=t.length;r<o;r++)!a&&r in t||((a=a||Array.prototype.slice.call(t,0,r))[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},antd_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("antd")),dayjs_1=__importDefault(require("dayjs")),lodash_merge_1=__importDefault(require("lodash.merge")),omit_js_1=__importDefault(require("omit.js")),qs_1=__importDefault(require("qs")),react_1=__importDefault(require("react")),icons_1=require("@ant-design/icons"),adhere_ui_anthoc_1=require("@baifendian/adhere-ui-anthoc"),adhere_ui_conditionalrender_1=__importDefault(require("@baifendian/adhere-ui-conditionalrender")),adhere_ui_fieldgeneratortodict_1=__importDefault(require("@baifendian/adhere-ui-fieldgeneratortodict")),adhere_ui_tablegridlayout_1=__importDefault(require("@baifendian/adhere-ui-tablegridlayout")),adhere_ui_tableheadsearch_1=__importDefault(require("@baifendian/adhere-ui-tableheadsearch")),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),adhere_util_resource_1=__importDefault(require("@baifendian/adhere-util-resource")),adhere_util_validator_1=__importDefault(require("@baifendian/adhere-util-validator")),AdvancedSearchPanel_1=__importDefault(require("./Extension/AdvancedSearchPanel")),routeListen_1=__importDefault(require("./Extension/SearchAndPaginParams/routeListen")),SearchTable_1=require("./SearchTable"),FormItemGeneratorToDict=adhere_ui_fieldgeneratortodict_1.default.FormItemGeneratorToDict,renderGridSearchFormGroup=adhere_ui_tablegridlayout_1.default.renderGridSearchFormGroup,Label=adhere_ui_tablegridlayout_1.default.Label,Value=adhere_ui_tablegridlayout_1.default.Value,_selectorPrefix="".concat(SearchTable_1.selectorPrefix,"-protable");exports.default=function(e,o){return __extends(t,r=e),t.prototype.componentWillUnmount=function(){r.prototype.componentWillUnmount&&r.prototype.componentWillUnmount.call(this),"openSearchParamsMemory"in this.props&&!("openSearchParamsMemory"in this.props&&this.props.openSearchParamsMemory)||this.unMountSearchAndPaginParamsDeal()},t.prototype.onSubTableChange=function(e,t,n){},t.prototype.onSearchPanelCollapseBefore=function(){this.hasAdvancedSearch()&&this.hasAdvancedSearchPanel&&this.state.expand&&this.setState({advancedSearchPanelCollapse:!1})},t.prototype.unMountSearchAndPaginParamsDeal=function(){var e,t=null!=(t=this.state.searchParams)?t:{},n=this.pathname,a=this.getComponentId();o.isEmpty()?o.add(n,((e={})[a]={search:t,page:this.state.page,limit:this.state.limit},e)):(e=o.findByPath(n))?(e.components[a].search=t,e.components[a].page=this.state.page,e.components[a].limit=this.state.limit):o.add(n,((e={})[a]={search:t,page:this.state.page,limit:this.state.limit},e))},t.prototype.initSearchAndPaginParams=function(t){var e,n,a=qs_1.default.parse(this.getSearch(),{ignoreQueryPrefix:!0}),r={};return Object.keys(a).forEach(function(e){r[e]=t?t(e,a[e]):a[e]}),!o.isEmpty()&&(e=o.findByPath(this.pathname),n=this.getComponentId(),e)&&e.components[n]?__assign(__assign({},r),e.components[n]):{search:__assign({},r),page:1,limit:this.getLimit()}},t.prototype.hasAdvancedSearch=function(){return!0},t.prototype.hasNumberColumnFixed=function(){return!0},t.prototype.hasOptionColumnFixed=function(){return!0},t.prototype.getPathName=function(){return window.location.pathname},t.prototype.getSearch=function(){return window.location.search},t.prototype.getParams=function(){var o=this,t={};return function r(e){e.reduce(function(e,t){var n=t.$search,a=t.children,n=null!=n?n:{},t=n.dataIndex||t.dataIndex;return[o.getOptionsColumnDataIndex(),o.getLinkColumnDataIndex(),"_number"].includes(t)||("rangePicker"===n.type?(n.startName&&(e[n.startName]=null),n.endName&&(e[n.endName]=null)):["datePicker","timePicker"].includes(n.type)?e[t]=null:e[t]=void 0,a&&Array.isArray(a)&&r(a)),e},t)}(this.getTableColumns()),t},t.prototype.getDateState=function(t){var e=Object.keys(t).filter(function(e){return null===t[e]||"null"===t[e]||adhere_util_validator_1.default.isDate(t[e],{format:"YYYY-MM-DD"})}),n={};return e.forEach(function(e){n[e]=null===t[e]||"null"===t[e]?null:(0,dayjs_1.default)(t[e])}),n},t.prototype.getDataKey=function(){return"records"},t.prototype.getTotalKey=function(){return"total"},t.prototype.getLimit=function(){return 10},t.prototype.getFetchDataParams=function(){var n=this.state.searchParams,a={};return Object.keys(n).filter(function(t){return["start","Start"].some(function(e){return-1!==t.indexOf(e)})||["end","End"].some(function(e){return-1!==t.indexOf(e)})}).forEach(function(t){a[t]=n[t]?"".concat(n[t].format(adhere_util_resource_1.default.Dict.value.ResourceMomentFormat10.value())," ").concat(["start","Start"].some(function(e){return-1!==t.indexOf(e)})?"00:00:00":["end","End"].some(function(e){return-1!==t.indexOf(e)})?"23:59:59":"").trim():null}),Object.keys(n).filter(function(e){return!(e in a)&&n[e]instanceof dayjs_1.default}).forEach(function(e){a[e]=n[e]?n[e].format(adhere_util_resource_1.default.Dict.value.ResourceMomentFormat10.value()).trim():null}),a},t.prototype.getColumns=function(e){return(e||(null==(e=r.prototype.getColumns)?void 0:e.call(this))||[]).map(function(e){return __assign({},e)})},t.prototype.getTableColumns=function(){var u=this,e=r.prototype.getTableColumns.call(this),t=(!this.hasOptionColumnFixed()||!(t=e.find(function(e){return e.dataIndex===(u.getOptionsColumnDataIndex()||"_options")}))||"fixed"in t||t.fixed||(t.fixed="right"),!this.hasNumberColumnFixed()||!(t=e.find(function(e){return"_number"===e.dataIndex}))||"fixed"in t||t.fixed||(t.fixed="left"),e.find(function(e){return e.dataIndex===(u.getLinkColumnDataIndex()||"_linkColumn")}));return t&&("ellipsis"in t||(t.ellipsis=!1),"align"in t||(t.align="left")),e.map(function(e){return __assign(__assign({},e),{align:![u.getLinkColumnDataIndex()||"_linkColumn"].includes(e.dataIndex)&&"align"in e&&e.align?e.align:"center"})}).map(function(e){return function n(a){var e=a.$search,t=__rest(a,["$search"]),r=u.assignSearchConfig(e,t),e=r.showColumnHeader,o=__assign({},a),i=r.dataIndex||a.dataIndex;return i&&!["_number",u.getOptionsColumnDataIndex()].includes(i)&&e&&(o=__assign(__assign({},o),(0,adhere_ui_tableheadsearch_1.default)(function(e){var t=e.confirm,n=r.type;return react_1.default.createElement("div",{className:"".concat(_selectorPrefix,"-headersearchwrap")},react_1.default.createElement("div",{className:"".concat(_selectorPrefix,"-headersearchwrap-main")},u.renderGridSearchFormGroupDataItem(n,{searchConfig:r,column:o,dataIndex:i})),react_1.default.createElement("div",{className:"".concat(_selectorPrefix,"-headersearchwrap-footer")},react_1.default.createElement(antd_1.Button,{size:"small",onClick:function(){var e={};"rangePicker"===n?(r.startName&&(e[r.startName]=null),r.endName&&(e[r.endName]=null)):e[i]=void 0,u.setState(e,function(){return u.onSearch().then(function(){return t()})})}},adhere_util_intl_1.default.v("重置")),react_1.default.createElement(antd_1.Button,{size:"small",type:"primary",onClick:function(){return u.search().then(function(){return t()})}},adhere_util_intl_1.default.v("确定"))))}))),a.children&&Array.isArray(a.children)&&a.children.forEach(function(e,t){a.children[t]=n(e)}),o}(e)})},t.prototype.getOptionsColumnDataIndex=function(){return"_options"},t.prototype.getLinkColumnDataIndex=function(){return"_linkColumn"},t.prototype.getPagination=function(){var a=this;return __assign(__assign({},r.prototype.getPagination.call(this)),{showTotal:function(e){var t=(a.state.page-1)*a.state.limit+1,n=a.state.page*a.state.limit;return adhere_util_intl_1.default.v("当前 {page}-{pageSize}/共 {total}条",{page:t,pageSize:n<e?n:e,total:e})}})},t.prototype.getGridSearchFormGroupParams=function(){return[[{name:"g1",columnCount:3,colgroup:[,"auto",,"auto",,"auto"],data:this.getGridSearchFormGroupDataByColumnConfig()}],{},{rowCount:1}]},t.prototype.getGridSearchFormGroupDataByColumnConfig=function(){var c=this,s=[],e=(function l(e){e.filter(function(e){return"$search"in e&&!!e.$search.visible}).forEach(function(e){var t,n=e.$search,a=__rest(e,["$search"]),r=c.assignSearchConfig(n,a),o=(null==r?void 0:r.type)||"input",i=r.dataIndex||e.dataIndex,u=n.title||e.title;s.push({key:i,sort:n.sort,label:react_1.default.createElement(Label,__assign({},null!=(t=n.labelAttrs)?t:{}),u,"："),value:adhere_ui_conditionalrender_1.default.conditionalRender({conditional:!c.hasAuthority||(null==(t=c.hasAuthority)?void 0:t.call(c,r.authority)),match:react_1.default.createElement(Value,__assign({},null!=(u=n.valueAttrs)?u:{}),c.renderGridSearchFormGroupDataItem(o,{searchConfig:r,column:a,dataIndex:i})),noMatch:n.renderNoAuthority?react_1.default.createElement(Value,__assign({},null!=(t=n.valueAttrs)?t:{}),null==(u=null==n?void 0:n.renderNoAuthority)?void 0:u.call(n)):null})}),e.children&&Array.isArray(e.children)&&l(e.children)})}((null==(e=null==this?void 0:this.getColumns)?void 0:e.call(this,(null==(e=r.prototype.getColumns)?void 0:e.call(this))||[]))||[]),(null==(e=null==s?void 0:s.filter)?void 0:e.call(s,function(e){return!!e.value}))||[]),t=e.filter(function(e){return"sort"in e&&null!==e.sort&&void 0!==e.sort}).sort(function(e,t){return e.sort-t.sort}),n=e.filter(function(e){return!("sort"in e)||null===e.sort||void 0===e.sort||"number"!=typeof e.sort});return t.forEach(function(e){n.splice(e.sort-1,0,e)}),n},t.prototype.assignSearchConfig=function(e,t){t={type:"input",visible:!0,showColumnHeader:!0,props:{},labelAttrs:{},valueAttrs:{},authority:[],renderNoAuthority:function(){return null},dataIndex:t.dataIndex,title:t.title,dictName:"",renderChildren:function(){return null},render:function(){return null},startName:"",endName:""};return __assign(__assign({},t),null!=e?e:{})},t.prototype.renderSearchForm=function(){return this.renderGridSearchFormGroup.apply(this,this.getGridSearchFormGroupParams())},t.prototype.renderSearchFooterItems=function(e){var t,n,a=this,e=__spreadArray([],e||[],!0);return this.hasAdvancedSearch()&&this.hasAdvancedSearchPanel&&this.state.expand&&(t=react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!this.advancedSearchConfig.renderSearchButton,noMatch:function(){return a.advancedSearchConfig.renderSearchButton(function(){return a.setState({advancedSearchPanelCollapse:!0})})}},function(){return react_1.default.createElement(antd_1.Button,{icon:react_1.default.createElement(icons_1.FilterOutlined,null),type:"primary",onClick:function(){return a.setState({advancedSearchPanelCollapse:!0})}},adhere_util_intl_1.default.v("高级搜索"))}),this.advancedSearchConfig.insertSearchButton?this.advancedSearchConfig.insertSearchButton(e,t):-1!==(n=e.findIndex(function(e){return"$$typeof"in e&&"key"in e&&"reset"===e.key}))&&e.splice(n+1,0,t)),this.renderSearchFooterItemsImpl(e).map(function(e){return"$$typeof"in e?e:e.value})},t.prototype.renderSearchFooterItemsImpl=function(e){return __spreadArray(__spreadArray([],e,!0),[this.renderTableDensitySetting&&!(null==(e=this.renderTableDensitySetting)||!e.call(this))&&react_1.default.createElement("div",{className:"".concat(_selectorPrefix,"-headeritem")},this.renderTableDensitySetting()),this.renderColumnSetting&&!(null==(e=this.renderColumnSetting)||!e.call(this))&&react_1.default.createElement("div",{className:"".concat(_selectorPrefix,"-headeritem")},this.renderColumnSetting())],!1).filter(function(e){return!!e})},t.prototype.renderGridSearchFormGroupDataItem=function(e,t){var o=this,n=t.searchConfig,a=t.column,r=t.dataIndex;return null==(t=new Map([["dict",function(e){var t,n=e.searchConfig,a=(e.column,e.dataIndex),e=FormItemGeneratorToDict["".concat(n.dictName,"FormItem")],r={dropdownStyle:{zIndex:1051},popupStyle:{zIndex:1051}};return-1!==n.dictName.indexOf("CustomFormItem")?react_1.default.createElement(e,__assign({value:o.state[a],onChange:function(e){return o.onSelectChange(a,e)}},Object.assign(r,null!=(t=n.props)?t:{})),function(e){var t;return null==(t=null==n?void 0:n.renderChildren)?void 0:t.call(n,e)}):react_1.default.createElement(e,__assign({value:o.state[a],onChange:function(e){return o.onSelectChange(a,e)}},Object.assign(r,null!=(t=n.props)?t:{})))}],["custom",function(e){var t,n=e.searchConfig,a=e.column,e=e.dataIndex;return null==(t=null==n?void 0:n.render)?void 0:t.call(n,{searchConfig:n,column:a,dataIndex:e})}],["input",function(e){var t=e.searchConfig,n=e.dataIndex;return react_1.default.createElement(antd_1.Input,__assign({autoFocus:!0,value:o.state[n],onChange:function(e){return o.onInputChange(n,e)}},null!=(e=t.props)?e:{}))}],["textArea",function(e){var t=e.searchConfig,n=e.dataIndex;return react_1.default.createElement(antd_1.Input.TextArea,__assign({autoFocus:!0,value:o.state[n],onChange:function(e){return o.onInputChange(n,e)}},null!=(e=t.props)?e:{}))}],["inputNumber",function(e){var t=e.searchConfig,n=e.dataIndex;return react_1.default.createElement(antd_1.InputNumber,__assign({autoFocus:!0,value:o.state[n],onChange:function(e){return o.onSelectChange(n,e)}},null!=(e=t.props)?e:{}))}],["inputNumberDecimal1",function(e){var t=e.searchConfig,n=e.dataIndex;return react_1.default.createElement(adhere_ui_anthoc_1.InputNumberDecimal1,__assign({autoFocus:!0,value:o.state[n],onChange:function(e){return o.onSelectChange(n,e)}},null!=(e=t.props)?e:{}))}],["inputNumberDecimal2",function(e){var t=e.searchConfig,n=e.dataIndex;return react_1.default.createElement(adhere_ui_anthoc_1.InputNumberDecimal2,__assign({autoFocus:!0,value:o.state[n],onChange:function(e){return o.onSelectChange(n,e)}},null!=(e=t.props)?e:{}))}],["inputNumberInteger",function(e){var t=e.searchConfig,n=e.dataIndex;return react_1.default.createElement(adhere_ui_anthoc_1.InputNumberInteger,__assign({autoFocus:!0,value:o.state[n],onChange:function(e){return o.onSelectChange(n,e)}},null!=(e=t.props)?e:{}))}],["datePicker",function(e){var t=e.searchConfig,n=e.dataIndex;return react_1.default.createElement(adhere_ui_anthoc_1.DatePicker,__assign({value:o.state[n],onChange:function(e){var t;o.setState(((t={})[n]=e||null,t))}},null!=(e=t.props)?e:{}))}],["timePicker",function(e){var t=e.searchConfig,n=e.dataIndex;return react_1.default.createElement(adhere_ui_anthoc_1.TimePicker,__assign({value:o.state[n],onChange:function(e){var t;o.setState(((t={})[n]=e||null,t))}},null!=(e=t.props)?e:{}))}],["rangePicker",function(e){var e=e.searchConfig,t=e.startName,n=e.endName;return react_1.default.createElement(adhere_ui_anthoc_1.RangePicker,__assign({value:[o.state[t],o.state[n]],onChange:function(e){o.onDateTimeRangeChange([t,n],e)}},null!=(e=e.props)?e:{}))}],["slider",function(e){var t=e.searchConfig,n=e.dataIndex;return react_1.default.createElement(antd_1.Slider,__assign({value:o.state[n],onChange:function(e){return o.onSelectChange(n,e)}},null!=(e=t.props)?e:{}))}],["sliderRange",function(e){var e=e.searchConfig;return react_1.default.createElement(antd_1.Slider,__assign({range:!0,value:o.state[r],onChange:function(e){return o.onSelectChange(r,e)}},null!=(e=e.props)?e:{}))}],["rate",function(e){var e=e.searchConfig;return react_1.default.createElement(antd_1.Rate,__assign({value:o.state[r],onChange:function(e){return o.onSelectChange(r,e)}},null!=(e=e.props)?e:{}))}],["switch",function(e){var e=e.searchConfig;return react_1.default.createElement(antd_1.Switch,__assign({value:o.state[r],onChange:function(e){return o.onSelectChange(r,e)}},null!=(e=e.props)?e:{}))}]]).get(e))?void 0:t({searchConfig:n,column:a,dataIndex:r})},t.prototype.renderGridSearchFormGroup=function(e,t,n){var a,r=this,t=(0,lodash_merge_1.default)({layout:"horizontal",density:"middle"},null!=t?t:{}),o=(null!=(o=null==n?void 0:n.advancedSearch)&&o.onAfterClose&&(a=n.advancedSearch.onAfterClose,n.advancedSearch.onAfterClose=function(){a(),r.setState({advancedSearchPanelCollapse:!1})}),this.advancedSearchConfig=(0,lodash_merge_1.default)({rowCount:"auto",showStrategy:"remaining",renderTitleLabel:null,renderCollapse:null,renderSearchButton:null,insertSearchButton:null,advancedSearch:{className:"",style:{},width:"60%",mask:!0,zIndex:19999,time:300,direction:"right",collapse:!0,onBeforeShow:function(){},onBeforeClose:function(){},onAfterShow:function(){},onAfterClose:function(){r.setState({advancedSearchPanelCollapse:!1})},getPopupContainer:function(){return document.body}}},null!=n?n:{}),renderGridSearchFormGroup(e,t));if(this.advancedSearchConfig&&"auto"!==this.advancedSearchConfig.rowCount||this.advancedSearchConfig&&!("rowCount"in this.advancedSearchConfig)&&this.hasAdvancedSearch()||this.advancedSearchConfig&&"rowCount"in this.advancedSearchConfig&&!this.advancedSearchConfig.rowCount||!this.advancedSearchConfig&&this.hasAdvancedSearch()){var n=adhere_ui_tablegridlayout_1.default.getRenderDetail(e,t),i=n.rowCount,u=n.detail;if(i>this.advancedSearchConfig.rowCount){for(var l=[],c=[],s=this.advancedSearchConfig.rowCount,d=0;0!==s;){var h=e[d],f=u[d];f.rowCount<=s?(l.push(__assign({},h)),s-=f.rowCount):(f=f.detail.slice(0,s),l.push(__assign(__assign({},h),{data:h.data.slice(f[0].startIndex,f[f.length-1].endIndex+1)})),c.push(__assign(__assign({},h),{data:h.data.slice(f[f.length-1].endIndex+1)})),s=0),d+=1}for(var _=d;_<e.length;_++)c.push(__assign({},e[_]));return this.hasAdvancedSearchPanel=!0,this.advancedSearchConfig.advancedSearch.collapse=this.state.advancedSearchPanelCollapse,react_1.default.createElement("div",{className:"".concat(_selectorPrefix,"-gridsearchformgroupwrap")},renderGridSearchFormGroup(l,t),react_1.default.createElement(AdvancedSearchPanel_1.default,{groupData:e,tableGridLayoutConfig:t,remainingGroupData:c,advancedSearchConfig:this.advancedSearchConfig,onSearch:function(){return new Promise(function(e){r.search().then(function(){return e()})})},onReset:function(){return r.onClear()},onCollapse:function(e){return r.setState({advancedSearchPanelCollapse:e})}}))}}return this.hasAdvancedSearchPanel=!1,react_1.default.createElement("div",{className:"".concat(_selectorPrefix,"-gridsearchformgroupwrap")},o)},t.prototype.renderOptionColumn=function(e,t){return e.map(function(e){return e.value}).filter(function(e){return!!e})},t;function t(e){var e=r.call(this,e)||this,t=(e.pathname="undefined"!=typeof window?e.getPathName():"",{search:{},page:1,limit:e.getLimit()}),t=("openSearchParamsMemory"in e.props&&!("openSearchParamsMemory"in e.props&&e.props.openSearchParamsMemory)||(t=e.initSearchAndPaginParams()),e.state=__assign(__assign(__assign({},e.state),t.search),{page:t.page,limit:t.limit,searchParams:__assign(__assign({},e.state.searchParams),t.search)}),e.state=__assign(__assign(__assign({},e.state),e.getDateState((0,omit_js_1.default)(e.state,["searchParams"]))),{searchParams:__assign(__assign({},e.state.searchParams),e.getDateState(e.state.searchParams)),advancedSearchPanelCollapse:!1}),e.hasAdvancedSearchPanel=!1,e.advancedSearchConfig=null,routeListen_1.default.getCode());return t&&t(),e}var r};
//# sourceMappingURL=ProTableFactory.js.map
