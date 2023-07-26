import _Switch from"antd/es/switch";import _Rate from"antd/es/rate";import _Slider from"antd/es/slider";import _RangePicker from"@baifendian/adhere-ui-anthoc/es/range-picker";import _TimePicker from"@baifendian/adhere-ui-anthoc/es/time-picker";import _DatePicker from"@baifendian/adhere-ui-anthoc/es/date-picker";import _InputNumberInteger from"@baifendian/adhere-ui-anthoc/es/input-number-integer";import _InputNumberDecimal2 from"@baifendian/adhere-ui-anthoc/es/input-number-decimal2";import _InputNumberDecimal from"@baifendian/adhere-ui-anthoc/es/input-number-decimal1";import _InputNumber from"antd/es/input-number";import _Input from"antd/es/input";import _FilterOutlined from"@ant-design/icons/es/icons/FilterOutlined";import _Button from"antd/es/button";var __extends=this&&this.__extends||function(){var a=function(e,t){return(a=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){e.__proto__=t}:function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}))(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var n={};for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},__spreadArray=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var a,r=0,o=t.length;r<o;r++)!a&&r in t||((a=a||Array.prototype.slice.call(t,0,r))[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))};import dayjs from"dayjs";import merge from"lodash.merge";import omit from"omit.js";import qs from"qs";import React from"react";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import FieldGeneratorToDict from"@baifendian/adhere-ui-fieldgeneratortodict";import TableGridLayout from"@baifendian/adhere-ui-tablegridlayout";import TableHeadSearch from"@baifendian/adhere-ui-tableheadsearch";import Intl from"@baifendian/adhere-util-intl";import Resource from"@baifendian/adhere-util-resource";import Validator from"@baifendian/adhere-util-validator";import AdvancedSearchPanel from"./Extension/AdvancedSearchPanel";import RouteListen from"./Extension/SearchAndPaginParams/routeListen";import{selectorPrefix}from"./SearchTable";var FormItemGeneratorToDict=FieldGeneratorToDict.FormItemGeneratorToDict,renderGridSearchFormGroup=TableGridLayout.renderGridSearchFormGroup,Label=TableGridLayout.Label,Value=TableGridLayout.Value,_selectorPrefix="".concat(selectorPrefix,"-protable");export default function(e,o){return __extends(t,r=e),t.prototype.componentWillUnmount=function(){r.prototype.componentWillUnmount&&r.prototype.componentWillUnmount.call(this),"openSearchParamsMemory"in this.props&&!("openSearchParamsMemory"in this.props&&this.props.openSearchParamsMemory)||this.unMountSearchAndPaginParamsDeal()},t.prototype.onSubTableChange=function(e,t,n){},t.prototype.onSearchPanelCollapseBefore=function(){this.hasAdvancedSearch()&&this.hasAdvancedSearchPanel&&this.state.expand&&this.setState({advancedSearchPanelCollapse:!1})},t.prototype.unMountSearchAndPaginParamsDeal=function(){var e,t=null!=(t=this.state.searchParams)?t:{},n=this.pathname,a=this.getComponentId();o.isEmpty()?o.add(n,((e={})[a]={search:t,page:this.state.page,limit:this.state.limit},e)):(e=o.findByPath(n))?(e.components[a].search=t,e.components[a].page=this.state.page,e.components[a].limit=this.state.limit):o.add(n,((e={})[a]={search:t,page:this.state.page,limit:this.state.limit},e))},t.prototype.initSearchAndPaginParams=function(t){var e,n,a=qs.parse(this.getSearch(),{ignoreQueryPrefix:!0}),r={};return Object.keys(a).forEach(function(e){r[e]=t?t(e,a[e]):a[e]}),!o.isEmpty()&&(e=o.findByPath(this.pathname),n=this.getComponentId(),e)&&e.components[n]?__assign(__assign({},r),e.components[n]):{search:__assign({},r),page:1,limit:this.getLimit()}},t.prototype.hasAdvancedSearch=function(){return!0},t.prototype.hasNumberColumnFixed=function(){return!0},t.prototype.hasOptionColumnFixed=function(){return!0},t.prototype.getPathName=function(){return window.location.pathname},t.prototype.getSearch=function(){return window.location.search},t.prototype.getParams=function(){var o=this,t={};return function r(e){e.reduce(function(e,t){var n=t.$search,a=t.children,n=null!=n?n:{},t=n.dataIndex||t.dataIndex;return[o.getOptionsColumnDataIndex(),o.getLinkColumnDataIndex(),"_number"].includes(t)||("rangePicker"===n.type?(n.startName&&(e[n.startName]=null),n.endName&&(e[n.endName]=null)):["datePicker","timePicker"].includes(n.type)?e[t]=null:e[t]=void 0,a&&Array.isArray(a)&&r(a)),e},t)}(this.getTableColumns()),t},t.prototype.getDateState=function(t){var e=Object.keys(t).filter(function(e){return null===t[e]||"null"===t[e]||Validator.isDate(t[e],{format:"YYYY-MM-DD"})}),n={};return e.forEach(function(e){n[e]=null===t[e]||"null"===t[e]?null:dayjs(t[e])}),n},t.prototype.getDataKey=function(){return"records"},t.prototype.getTotalKey=function(){return"total"},t.prototype.getLimit=function(){return 10},t.prototype.getFetchDataParams=function(){var n=this.state.searchParams,a={};return Object.keys(n).filter(function(t){return["start","Start"].some(function(e){return-1!==t.indexOf(e)})||["end","End"].some(function(e){return-1!==t.indexOf(e)})}).forEach(function(t){a[t]=n[t]?"".concat(n[t].format(Resource.Dict.value.ResourceMomentFormat10.value())," ").concat(["start","Start"].some(function(e){return-1!==t.indexOf(e)})?"00:00:00":["end","End"].some(function(e){return-1!==t.indexOf(e)})?"23:59:59":"").trim():null}),Object.keys(n).filter(function(e){return!(e in a)&&n[e]instanceof dayjs}).forEach(function(e){a[e]=n[e]?n[e].format(Resource.Dict.value.ResourceMomentFormat10.value()).trim():null}),a},t.prototype.getColumns=function(e){return(e||(null==(e=r.prototype.getColumns)?void 0:e.call(this))||[]).map(function(e){return __assign({},e)})},t.prototype.getTableColumns=function(){var c=this,e=r.prototype.getTableColumns.call(this),t=(!this.hasOptionColumnFixed()||!(t=e.find(function(e){return e.dataIndex===(c.getOptionsColumnDataIndex()||"_options")}))||"fixed"in t||t.fixed||(t.fixed="right"),!this.hasNumberColumnFixed()||!(t=e.find(function(e){return"_number"===e.dataIndex}))||"fixed"in t||t.fixed||(t.fixed="left"),e.find(function(e){return e.dataIndex===(c.getLinkColumnDataIndex()||"_linkColumn")}));return t&&("ellipsis"in t||(t.ellipsis=!1),"align"in t||(t.align="left")),e.map(function(e){return __assign(__assign({},e),{align:![c.getLinkColumnDataIndex()||"_linkColumn"].includes(e.dataIndex)&&"align"in e&&e.align?e.align:"center"})}).map(function(e){return function n(a){var e=a.$search,t=__rest(a,["$search"]),r=c.assignSearchConfig(e,t),e=r.showColumnHeader,o=__assign({},a),i=r.dataIndex||a.dataIndex;return i&&!["_number",c.getOptionsColumnDataIndex()].includes(i)&&e&&(o=__assign(__assign({},o),TableHeadSearch(function(e){var t=e.confirm,n=r.type;return React.createElement("div",{className:"".concat(_selectorPrefix,"-headersearchwrap")},React.createElement("div",{className:"".concat(_selectorPrefix,"-headersearchwrap-main")},c.renderGridSearchFormGroupDataItem(n,{searchConfig:r,column:o,dataIndex:i})),React.createElement("div",{className:"".concat(_selectorPrefix,"-headersearchwrap-footer")},React.createElement(_Button,{size:"small",onClick:function(){var e={};"rangePicker"===n?(r.startName&&(e[r.startName]=null),r.endName&&(e[r.endName]=null)):e[i]=void 0,c.setState(e,function(){return c.onSearch().then(function(){return t()})})}},Intl.v("重置")),React.createElement(_Button,{size:"small",type:"primary",onClick:function(){return c.search().then(function(){return t()})}},Intl.v("确定"))))}))),a.children&&Array.isArray(a.children)&&a.children.forEach(function(e,t){a.children[t]=n(e)}),o}(e)})},t.prototype.getOptionsColumnDataIndex=function(){return"_options"},t.prototype.getLinkColumnDataIndex=function(){return"_linkColumn"},t.prototype.getPagination=function(){var a=this;return __assign(__assign({},r.prototype.getPagination.call(this)),{showTotal:function(e){var t=(a.state.page-1)*a.state.limit+1,n=a.state.page*a.state.limit;return Intl.v("当前 {page}-{pageSize}/共 {total}条",{page:t,pageSize:n<e?n:e,total:e})}})},t.prototype.getGridSearchFormGroupParams=function(){return[[{name:"g1",columnCount:3,colgroup:[,"auto",,"auto",,"auto"],data:this.getGridSearchFormGroupDataByColumnConfig()}],{},{rowCount:1}]},t.prototype.getGridSearchFormGroupDataByColumnConfig=function(){var l=this,u=[],e=(function s(e){e.filter(function(e){return"$search"in e&&!!e.$search.visible}).forEach(function(e){var t,n=e.$search,a=__rest(e,["$search"]),r=l.assignSearchConfig(n,a),o=(null==r?void 0:r.type)||"input",i=r.dataIndex||e.dataIndex,c=n.title||e.title;u.push({key:i,sort:n.sort,label:React.createElement(Label,__assign({},null!=(t=n.labelAttrs)?t:{}),c,"："),value:ConditionalRender.conditionalRender({conditional:!l.hasAuthority||(null==(t=l.hasAuthority)?void 0:t.call(l,r.authority)),match:React.createElement(Value,__assign({},null!=(c=n.valueAttrs)?c:{}),l.renderGridSearchFormGroupDataItem(o,{searchConfig:r,column:a,dataIndex:i})),noMatch:n.renderNoAuthority?React.createElement(Value,__assign({},null!=(t=n.valueAttrs)?t:{}),null==(c=null==n?void 0:n.renderNoAuthority)?void 0:c.call(n)):null})}),e.children&&Array.isArray(e.children)&&s(e.children)})}((null==(e=null==this?void 0:this.getColumns)?void 0:e.call(this,(null==(e=r.prototype.getColumns)?void 0:e.call(this))||[]))||[]),(null==(e=null==u?void 0:u.filter)?void 0:e.call(u,function(e){return!!e.value}))||[]),t=e.filter(function(e){return"sort"in e&&null!==e.sort&&void 0!==e.sort}).sort(function(e,t){return e.sort-t.sort}),n=e.filter(function(e){return!("sort"in e)||null===e.sort||void 0===e.sort||"number"!=typeof e.sort});return t.forEach(function(e){n.splice(e.sort-1,0,e)}),n},t.prototype.assignSearchConfig=function(e,t){t={type:"input",visible:!0,showColumnHeader:!0,props:{},labelAttrs:{},valueAttrs:{},authority:[],renderNoAuthority:function(){return null},dataIndex:t.dataIndex,title:t.title,dictName:"",renderChildren:function(){return null},render:function(){return null},startName:"",endName:""};return __assign(__assign({},t),null!=e?e:{})},t.prototype.renderSearchForm=function(){return this.renderGridSearchFormGroup.apply(this,this.getGridSearchFormGroupParams())},t.prototype.renderSearchFooterItems=function(e){var t,n,a=this,e=__spreadArray([],e||[],!0);return this.hasAdvancedSearch()&&this.hasAdvancedSearchPanel&&this.state.expand&&(t=React.createElement(ConditionalRender,{conditional:!this.advancedSearchConfig.renderSearchButton,noMatch:function(){return a.advancedSearchConfig.renderSearchButton(function(){return a.setState({advancedSearchPanelCollapse:!0})})}},function(){return React.createElement(_Button,{icon:React.createElement(_FilterOutlined,null),type:"primary",onClick:function(){return a.setState({advancedSearchPanelCollapse:!0})}},Intl.v("高级搜索"))}),this.advancedSearchConfig.insertSearchButton?this.advancedSearchConfig.insertSearchButton(e,t):-1!==(n=e.findIndex(function(e){return"$$typeof"in e&&"key"in e&&"reset"===e.key}))&&e.splice(n+1,0,t)),this.renderSearchFooterItemsImpl(e).map(function(e){return"$$typeof"in e?e:e.value})},t.prototype.renderSearchFooterItemsImpl=function(e){return __spreadArray(__spreadArray([],e,!0),[this.renderTableDensitySetting&&!(null==(e=this.renderTableDensitySetting)||!e.call(this))&&React.createElement("div",{className:"".concat(_selectorPrefix,"-headeritem")},this.renderTableDensitySetting()),this.renderColumnSetting&&!(null==(e=this.renderColumnSetting)||!e.call(this))&&React.createElement("div",{className:"".concat(_selectorPrefix,"-headeritem")},this.renderColumnSetting())],!1).filter(function(e){return!!e})},t.prototype.renderGridSearchFormGroupDataItem=function(e,t){var o=this,n=t.searchConfig,a=t.column,r=t.dataIndex;return null==(t=new Map([["dict",function(e){var t,n=e.searchConfig,a=(e.column,e.dataIndex),e=FormItemGeneratorToDict["".concat(n.dictName,"FormItem")],r={dropdownStyle:{zIndex:1051},popupStyle:{zIndex:1051}};return-1!==n.dictName.indexOf("CustomFormItem")?React.createElement(e,__assign({value:o.state[a],onChange:function(e){return o.onSelectChange(a,e)}},Object.assign(r,null!=(t=n.props)?t:{})),function(e){var t;return null==(t=null==n?void 0:n.renderChildren)?void 0:t.call(n,e)}):React.createElement(e,__assign({value:o.state[a],onChange:function(e){return o.onSelectChange(a,e)}},Object.assign(r,null!=(t=n.props)?t:{})))}],["custom",function(e){var t,n=e.searchConfig,a=e.column,e=e.dataIndex;return null==(t=null==n?void 0:n.render)?void 0:t.call(n,{searchConfig:n,column:a,dataIndex:e})}],["input",function(e){var t=e.searchConfig,n=e.dataIndex;return React.createElement(_Input,__assign({value:o.state[n],onChange:function(e){return o.onInputChange(n,e)}},null!=(e=t.props)?e:{}))}],["textArea",function(e){var t=e.searchConfig,n=e.dataIndex;return React.createElement(_Input.TextArea,__assign({value:o.state[n],onChange:function(e){return o.onInputChange(n,e)}},null!=(e=t.props)?e:{}))}],["inputNumber",function(e){var t=e.searchConfig,n=e.dataIndex;return React.createElement(_InputNumber,__assign({value:o.state[n],onChange:function(e){return o.onSelectChange(n,e)}},null!=(e=t.props)?e:{}))}],["inputNumberDecimal1",function(e){var t=e.searchConfig,n=e.dataIndex;return React.createElement(_InputNumberDecimal,__assign({value:o.state[n],onChange:function(e){return o.onSelectChange(n,e)}},null!=(e=t.props)?e:{}))}],["inputNumberDecimal2",function(e){var t=e.searchConfig,n=e.dataIndex;return React.createElement(_InputNumberDecimal2,__assign({value:o.state[n],onChange:function(e){return o.onSelectChange(n,e)}},null!=(e=t.props)?e:{}))}],["inputNumberInteger",function(e){var t=e.searchConfig,n=e.dataIndex;return React.createElement(_InputNumberInteger,__assign({value:o.state[n],onChange:function(e){return o.onSelectChange(n,e)}},null!=(e=t.props)?e:{}))}],["datePicker",function(e){var t=e.searchConfig,n=e.dataIndex;return React.createElement(_DatePicker,__assign({value:o.state[n],onChange:function(e){var t;o.setState(((t={})[n]=e||null,t))}},null!=(e=t.props)?e:{}))}],["timePicker",function(e){var t=e.searchConfig,n=e.dataIndex;return React.createElement(_TimePicker,__assign({value:o.state[n],onChange:function(e){var t;o.setState(((t={})[n]=e||null,t))}},null!=(e=t.props)?e:{}))}],["rangePicker",function(e){var e=e.searchConfig,t=e.startName,n=e.endName;return React.createElement(_RangePicker,__assign({value:[o.state[t],o.state[n]],onChange:function(e){o.onDateTimeRangeChange([t,n],e)}},null!=(e=e.props)?e:{}))}],["slider",function(e){var t=e.searchConfig,n=e.dataIndex;return React.createElement(_Slider,__assign({value:o.state[n],onChange:function(e){return o.onSelectChange(n,e)}},null!=(e=t.props)?e:{}))}],["sliderRange",function(e){var e=e.searchConfig;return React.createElement(_Slider,__assign({range:!0,value:o.state[r],onChange:function(e){return o.onSelectChange(r,e)}},null!=(e=e.props)?e:{}))}],["rate",function(e){var e=e.searchConfig;return React.createElement(_Rate,__assign({value:o.state[r],onChange:function(e){return o.onSelectChange(r,e)}},null!=(e=e.props)?e:{}))}],["switch",function(e){var e=e.searchConfig;return React.createElement(_Switch,__assign({value:o.state[r],onChange:function(e){return o.onSelectChange(r,e)}},null!=(e=e.props)?e:{}))}]]).get(e))?void 0:t({searchConfig:n,column:a,dataIndex:r})},t.prototype.renderGridSearchFormGroup=function(e,t,n){var a,r=this,t=merge({layout:"horizontal",density:"middle"},null!=t?t:{}),o=(null!=(o=null==n?void 0:n.advancedSearch)&&o.onAfterClose&&(a=n.advancedSearch.onAfterClose,n.advancedSearch.onAfterClose=function(){a(),r.setState({advancedSearchPanelCollapse:!1})}),this.advancedSearchConfig=merge({rowCount:"auto",showStrategy:"remaining",renderTitleLabel:null,renderCollapse:null,renderSearchButton:null,insertSearchButton:null,advancedSearch:{className:"",style:{},width:"60%",mask:!0,zIndex:19999,time:300,direction:"right",collapse:!0,onBeforeShow:function(){},onBeforeClose:function(){},onAfterShow:function(){},onAfterClose:function(){r.setState({advancedSearchPanelCollapse:!1})},getPopupContainer:function(){return document.body}}},null!=n?n:{}),renderGridSearchFormGroup(e,t));if(this.advancedSearchConfig&&"auto"!==this.advancedSearchConfig.rowCount||this.advancedSearchConfig&&!("rowCount"in this.advancedSearchConfig)&&this.hasAdvancedSearch()||this.advancedSearchConfig&&"rowCount"in this.advancedSearchConfig&&!this.advancedSearchConfig.rowCount||!this.advancedSearchConfig&&this.hasAdvancedSearch()){var n=TableGridLayout.getRenderDetail(e,t),i=n.rowCount,c=n.detail;if(i>this.advancedSearchConfig.rowCount){for(var s=[],l=[],u=this.advancedSearchConfig.rowCount,d=0;0!==u;){var h=e[d],p=c[d];p.rowCount<=u?(s.push(__assign({},h)),u-=p.rowCount):(p=p.detail.slice(0,u),s.push(__assign(__assign({},h),{data:h.data.slice(p[0].startIndex,p[p.length-1].endIndex+1)})),l.push(__assign(__assign({},h),{data:h.data.slice(p[p.length-1].endIndex+1)})),u=0),d+=1}for(var m=d;m<e.length;m++)l.push(__assign({},e[m]));return this.hasAdvancedSearchPanel=!0,this.advancedSearchConfig.advancedSearch.collapse=this.state.advancedSearchPanelCollapse,React.createElement("div",{className:"".concat(_selectorPrefix,"-gridsearchformgroupwrap")},renderGridSearchFormGroup(s,t),React.createElement(AdvancedSearchPanel,{groupData:e,tableGridLayoutConfig:t,remainingGroupData:l,advancedSearchConfig:this.advancedSearchConfig,onSearch:function(){return new Promise(function(e){r.search().then(function(){return e()})})},onReset:function(){return r.onClear()},onCollapse:function(e){return r.setState({advancedSearchPanelCollapse:e})}}))}}return this.hasAdvancedSearchPanel=!1,React.createElement("div",{className:"".concat(_selectorPrefix,"-gridsearchformgroupwrap")},o)},t.prototype.renderOptionColumn=function(e,t){return e.map(function(e){return e.value}).filter(function(e){return!!e})},t;function t(e){var e=r.call(this,e)||this,t=(e.pathname="undefined"!=typeof window?e.getPathName():"",{search:{},page:1,limit:e.getLimit()}),t=("openSearchParamsMemory"in e.props&&!("openSearchParamsMemory"in e.props&&e.props.openSearchParamsMemory)||(t=e.initSearchAndPaginParams()),e.state=__assign(__assign(__assign({},e.state),t.search),{page:t.page,limit:t.limit,searchParams:__assign(__assign({},e.state.searchParams),t.search)}),e.state=__assign(__assign(__assign({},e.state),e.getDateState(omit(e.state,["searchParams"]))),{searchParams:__assign(__assign({},e.state.searchParams),e.getDateState(e.state.searchParams)),advancedSearchPanelCollapse:!1}),e.hasAdvancedSearchPanel=!1,e.advancedSearchConfig=null,RouteListen.getCode());return t&&t(),e}var r}
//# sourceMappingURL=ProTableFactory.js.map
