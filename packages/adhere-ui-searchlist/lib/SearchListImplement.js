"use strict";var __extends=this&&this.__extends||function(){var a=function(e,t){return(a=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){e.__proto__=t}:function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}))(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&("get"in n?t.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var a,n=0,i=t.length;n<i;n++)!a&&n in t||((a=a||Array.prototype.slice.call(t,0,n))[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},antd_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.SearchListImplement=exports.selectorPrefix=void 0,require("antd")),classnames_1=__importDefault(require("classnames")),prop_types_1=__importDefault(require("prop-types")),react_1=__importStar(require("react")),icons_1=require("@ant-design/icons"),adhere_ui_conditionalrender_1=__importDefault(require("@baifendian/adhere-ui-conditionalrender")),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),serviceregister_1=__importDefault(require("@ctsj/state/lib/middleware/saga/serviceregister")),SearchList_1=__importStar(require("./SearchList")),defaultMetas=(exports.selectorPrefix="adhere-ui-searchtableimplement",__assign({title:{dataIndex:"title"},subTitle:{dataIndex:"subTitle"},description:{dataIndex:"description"},avatar:{dataIndex:"avatar"},actions:{dataIndex:"actions",cardActionProps:"actions"},content:{dataIndex:"content"},extra:{dataIndex:"extra"}})),SearchListImplement=function(t){function e(e){var a=t.call(this,e)||this;return a.innerWrapRef=(0,react_1.createRef)(),a.onSelectChange=function(e,t){var r;a.setState(((r={})[e]=t,r))},a.onInputChange=function(e,t){var r;a.setState(((r={})[e]=t.target.value.trim(),r))},a.onDateTimeRangeChange=function(e,t){var r;a.setState(((r={})[e[0]]=t&&t.length?t[0]:null,r[e[1]]=t&&t.length?t[1]:null,r))},Object.assign(a.state,__assign(__assign({},a.getParams()),{searchParams:__assign({},a.getParams()),selectedRowKeys:[],selectedRows:[]})),a.renderItem=a.renderItem.bind(a),a}return __extends(e,t),e.prototype.componentDidMount=function(){t.prototype.componentDidMount.call(this);var e=this.props.getListWrapperInstance;e&&e(this.innerWrapRef)},e.prototype.getFetchListPropName=function(){return""},e.prototype.getFetchListPropNameToFirstUpper=function(){var e=this.getFetchListPropName();return 1<e.length?"".concat(e.charAt(0).toUpperCase()).concat(e.substring(1)):e},e.prototype.getParams=function(){return{}},e.prototype.getServiceName=function(){return""},e.prototype.getFetchDataParams=function(){return{}},e.prototype.isShowNumber=function(){return!0},e.prototype.getNumberGeneratorRule=function(){return SearchList_1.default.NUMBER_GENERATOR_RULE_CONTINUITY},e.prototype.getRowKey=function(){return"id"},e.prototype.getDataKey=function(){return"list"},e.prototype.getTotalKey=function(){return"totalCount"},e.prototype.getData=function(){return this.props[this.getServiceName()][this.getFetchListPropName()][this.getDataKey()]},e.prototype.getTotal=function(){return this.props[this.getServiceName()][this.getFetchListPropName()][this.getTotalKey()]},e.prototype.getRowSelection=function(){var r=this;return{selectedRowKeys:this.state.selectedRowKeys,onChange:function(e,t){r.setState({selectedRowKeys:e,selectedRows:t})}}},e.prototype.renderSearchForm=function(){return null},e.prototype.renderInner=function(){var e=t.prototype.renderInner.call(this);return react_1.default.createElement("div",{ref:this.innerWrapRef,className:"".concat(exports.selectorPrefix,"-tablewrapper")},e)},e.prototype.renderSearchFooterItems=function(){return[]},e.prototype.clear=function(){var t=this;return new Promise(function(e){t.setState(__assign(__assign({},t.getParams()),{searchParams:__assign({},t.getParams()),selectedRowKeys:[],selectedRows:[]}),function(){e()})})},e.prototype.showLoading=function(){return this.props.loading["".concat(this.getServiceName(),"/").concat(this.getFetchListPropName())]},e.prototype.getSearchParams=function(){var e=this.state,t=e.page,r=e.limit,e=e.searchParams;return __assign({},__assign(__assign({page:t,limit:r},e),this.getFetchDataParams()))},e.prototype.getMetas=function(){return{}},e.prototype.fetchData=function(){return this.fetchDataExecute(this.getSearchParams())},e.prototype.sync=function(){var a=this;return new Promise(function(e){var t,r=a.state.page;1===r?e(a.fetchData()):t=a.fetchData().then(function(){a.getData().length?e(t):a.setState({page:r-1},function(){return e(a.fetchData())})})})},e.prototype.fetchDataExecute=function(e){return this.props["".concat(this.getServiceName()).concat(this.getFetchListPropNameToFirstUpper())](e)},e.prototype.onSearch=function(){var t=this,e=Object.keys(this.getParams()),r={};return e.forEach(function(e){r[e]=t.state[e]}),new Promise(function(e){t.setState({searchParams:__assign({},r)},function(){t.fetchData().then(function(){e()})})})},e.prototype.selectCheckBoxChange=function(e,t){var r,a=this.getRowSelection(),n=this.getRowKey(),e=e.target.checked,i=__spreadArray([],this.state.selectedRowKeys||[],!0),o=this.getData(),l=t[n],t=e?__spreadArray([l],i,!0):i.filter(function(e){return e!==l}),i=t.map(function(t){return o.find(function(e){return e[n]===t})});null!=(r=null==a?void 0:a.onChange)&&r.call(a,t,i,{type:e?"single":"invert"})},e.prototype.unSelectedAll=function(){var a=this;return new Promise(function(e){var t,r=a.getRowSelection();null!=(t=null==r?void 0:r.onChange)&&t.call(r,[],[],{type:"multiple"}),e()})},e.prototype.renderSearchFormAfter=function(){return null},e.prototype.renderSearchFormBefore=function(){return null},e.prototype.renderSearchFooter=function(){return null},e.prototype.renderSearchHeader=function(){return null},e.prototype.renderItemSelection=function(t){var r=this,e=null==(e=this.state.selectedRowKeys)?void 0:e.includes(t[this.getRowKey()]);return react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-list-rowSelection-checkbox")},react_1.default.createElement(antd_1.Checkbox,{checked:e,onChange:function(e){r.selectCheckBoxChange(e,t)}}))},e.prototype.renderSmallNormalItem=function(e,t){var r=__assign(__assign({},defaultMetas),this.getMetas()||{}),a=(null==(a=null==(o=null==r?void 0:r.avatar)?void 0:o.render)?void 0:a.call(o,null==e?void 0:e[r.avatar.dataIndex],e,t))||r.avatar&&(null==e?void 0:e[r.avatar.dataIndex])&&react_1.default.createElement(antd_1.Avatar,{src:null==e?void 0:e[r.avatar.dataIndex]}),n=(null==(n=null==(o=null==r?void 0:r.subTitle)?void 0:o.render)?void 0:n.call(o,null==e?void 0:e[r.subTitle.dataIndex],e,t))||r.subTitle&&(null==e?void 0:e[r.subTitle.dataIndex]),i=(null==(i=null==(o=null==r?void 0:r.title)?void 0:o.render)?void 0:i.call(o,null==e?void 0:e[r.title.dataIndex],e,t))||r.title&&(null==e?void 0:e[r.title.dataIndex]),o={};return a&&(o.avatar=a),i&&(o.title=i,n)&&(o.title=react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-list-meta-title-wrap")},react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-list-meta-title")},i),react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-list-meta-subTitle")},n))),react_1.default.createElement(antd_1.List.Item.Meta,__assign({},o))},e.prototype.renderNormalItem=function(e,t){var r=__assign(__assign({},defaultMetas),this.getMetas()||{}),a=(null==(a=null==(s=null==r?void 0:r.avatar)?void 0:s.render)?void 0:a.call(s,null==e?void 0:e[r.avatar.dataIndex],e,t))||r.avatar&&(null==e?void 0:e[r.avatar.dataIndex])&&react_1.default.createElement(antd_1.Avatar,{src:null==e?void 0:e[r.avatar.dataIndex]}),n=(null==(n=null==(s=null==r?void 0:r.subTitle)?void 0:s.render)?void 0:n.call(s,null==e?void 0:e[r.subTitle.dataIndex],e,t))||r.subTitle&&(null==e?void 0:e[r.subTitle.dataIndex]),i=(null==(i=null==(s=null==r?void 0:r.title)?void 0:s.render)?void 0:i.call(s,null==e?void 0:e[r.title.dataIndex],e,t))||r.title&&(null==e?void 0:e[r.title.dataIndex]),o=(null==(o=null==(s=null==r?void 0:r.description)?void 0:s.render)?void 0:o.call(s,null==e?void 0:e[r.description.dataIndex],e,t))||r.description&&(null==e?void 0:e[r.description.dataIndex]),l=(null==(l=null==(s=null==r?void 0:r.content)?void 0:s.render)?void 0:l.call(s,null==e?void 0:e[r.content.dataIndex],e,t))||r.content&&(null==e?void 0:e[r.content.dataIndex]),s={};return a&&(s.avatar=a),i&&(s.title=i,n)&&(s.title=react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-list-meta-title-wrap")},react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-list-meta-title")},i),react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-list-meta-subTitle")},n))),o&&(s.description=o),react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(antd_1.List.Item.Meta,__assign({},s)),l||null)},e.prototype.renderNumberColumnInner=function(e,t){return react_1.default.createElement("span",{className:"".concat(exports.selectorPrefix,"-list-number")},e)},e.prototype.renderNumberColumn=function(e,t){var r=this,a=this.state,n=a.page,i=void 0===n?0:n,n=a.limit,o=void 0===n?10:n,n=null!=(a=this.getNumberGeneratorRule())?a:SearchList_1.default.NUMBER_GENERATOR_RULE_ALONE;return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:n===SearchList_1.default.NUMBER_GENERATOR_RULE_ALONE,noMatch:function(){return r.renderNumberColumnInner((i-1)*o+(t+1),{record:e,index:t})}},function(){return r.renderNumberColumnInner(t+1,{record:e,index:t})})},e.prototype.getExpandable=function(){},e.prototype.getListProps=function(e,t){var r,a={},n=__assign(__assign({},defaultMetas),this.getMetas()||{}),i=(null==(i=null==(o=null==n?void 0:n.extra)?void 0:o.render)?void 0:i.call(o,null==e?void 0:e[n.extra.dataIndex],e,t))||n.extra&&(null==e?void 0:e[n.extra.dataIndex]),o=(null==(r=null==(o=null==n?void 0:n.actions)?void 0:o.render)?void 0:r.call(o,null==e?void 0:e[n.actions.dataIndex],e,t))||(null==(r=n.actions&&(null==e?void 0:e[n.actions.dataIndex])&&(null==e?void 0:e[n.actions.dataIndex]))?void 0:r.map(function(e){return react_1.default.createElement("span",null,e)}));return i&&(a.extra=i),o&&(a[(null==(t=n.actions)?void 0:t.cardActionProps)||"actions"]=o),a},e.prototype.renderHorizontalNormal=function(e){var t=e.record,e=e.rowIndex,r=(0,classnames_1.default)(((r={})["".concat(exports.selectorPrefix,"-list-item")]=!0,r)),a=this.getRowSelection();return react_1.default.createElement(antd_1.List.Item,__assign({className:r,key:t[this.getRowKey()]},this.getListProps(t,e)),this.isShowNumber()&&react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-list-number-wrap")},this.renderNumberColumn(t,e)),!!a&&react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-list-rowSelection-checkbox-wrap")},this.renderItemSelection(t)),this.renderNormalItem(t,e))},e.prototype.renderVerticalNormal=function(e){var t=e.record,e=e.rowIndex,r=(0,classnames_1.default)(((r={})["".concat(exports.selectorPrefix,"-list-item-vertical")]=!0,r.split=!("split"in this.props.antdListProps&&!this.props.antdListProps.split),r)),a=this.getRowSelection();return react_1.default.createElement("div",{className:r,key:t[this.getRowKey()]},this.isShowNumber()&&react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-list-number-wrap")},this.renderNumberColumn(t,e)),!!a&&react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-list-rowSelection-checkbox-wrap")},this.renderItemSelection(t)),react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-list-item-vertical-body")},react_1.default.createElement(antd_1.List.Item,__assign({className:"".concat(exports.selectorPrefix,"-list-item")},this.getListProps(t,e)),this.renderNormalItem(t,e))))},e.prototype.renderCard=function(e){var t,r=e.record,a=e.rowIndex,e=(e.grid,__assign(__assign({},defaultMetas),this.getMetas()||{})),n=this.getRowSelection(),i=(null==(i=null==(c=null==e?void 0:e.avatar)?void 0:c.render)?void 0:i.call(c,null==r?void 0:r[e.avatar.dataIndex],r,a))||e.avatar&&(null==r?void 0:r[e.avatar.dataIndex])&&react_1.default.createElement(antd_1.Avatar,{src:null==r?void 0:r[e.avatar.dataIndex]}),o=(null==(o=null==(c=null==e?void 0:e.subTitle)?void 0:c.render)?void 0:o.call(c,null==r?void 0:r[e.subTitle.dataIndex],r,a))||e.subTitle&&(null==r?void 0:r[e.subTitle.dataIndex]),l=(null==(l=null==(c=null==e?void 0:e.title)?void 0:c.render)?void 0:l.call(c,null==r?void 0:r[e.title.dataIndex],r,a))||e.title&&(null==r?void 0:r[e.title.dataIndex]),s=(null==(s=null==(c=null==e?void 0:e.description)?void 0:c.render)?void 0:s.call(c,null==r?void 0:r[e.description.dataIndex],r,a))||e.description&&(null==r?void 0:r[e.description.dataIndex]),c={},i=(i&&(c.avatar=i),l&&(c.title=l,o)&&(c.title=react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-list-meta-title-wrap")},react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-list-meta-title")},l),react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-list-meta-subTitle")},o))),s&&(c.description=s),{}),s=(null==(o=null==(l=null==e?void 0:e.content)?void 0:l.render)?void 0:o.call(l,null==r?void 0:r[e.content.dataIndex],r,a))||e.content&&(null==r?void 0:r[e.content.dataIndex]),l=(null==(l=null==(o=null==e?void 0:e.extra)?void 0:o.render)?void 0:l.call(o,null==r?void 0:r[e.extra.dataIndex],r,a))||e.extra&&(null==r?void 0:r[e.extra.dataIndex]),o=(null==(t=null==(o=null==e?void 0:e.actions)?void 0:o.render)?void 0:t.call(o,null==r?void 0:r[e.actions.dataIndex],r,a))||(null==(t=e.actions&&(null==r?void 0:r[e.actions.dataIndex])&&(null==r?void 0:r[e.actions.dataIndex]))?void 0:t.map(function(e){return react_1.default.createElement("span",null,e)}));return l&&(i.extra=l),o&&(i[(null==(t=e.actions)?void 0:t.cardActionProps)||"actions"]=o),(this.isShowNumber()||n)&&(i.title=react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-list-card-title")},this.isShowNumber()&&this.renderNumberColumn(r,a),!!n&&this.renderItemSelection(r))),react_1.default.createElement(antd_1.Card,__assign({},i),react_1.default.createElement(antd_1.Card.Meta,__assign({},c)),s&&react_1.default.createElement("p",null,s))},e.prototype.renderHorizontalGrid=function(e){var t=e.record,r=e.rowIndex,e=e.grid;return react_1.default.createElement(antd_1.List.Item,{key:t[this.getRowKey()]},this.renderCard({record:t,rowIndex:r,grid:e}))},e.prototype.renderVerticalGrid=function(e){var t=e.record,r=e.rowIndex,e=e.grid;return react_1.default.createElement(antd_1.List.Item,{key:t[this.getRowKey()]},this.renderCard({record:t,rowIndex:r,grid:e}))},e.prototype.renderExpandable=function(e){var t=this,r=e.record,a=e.rowIndex,n=e.collapseChildren,e=e.children,i="itemLayout"in this.props.antdListProps?this.props.antdListProps.itemLayout:"horizontal",o=(0,classnames_1.default)(((o={})["".concat(exports.selectorPrefix,"-list-item-").concat(i)]=!0,o.split=!("split"in this.props.antdListProps&&!this.props.antdListProps.split),o)),l=this.getRowSelection(),s=this.getExpandable(),c=s.expandedRowKeys,d=s.onExpandedRowsChange,u=r[this.getRowKey()],s=!c.includes(u);return react_1.default.createElement("div",{className:o,key:u},this.isShowNumber()&&react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-list-number-wrap")},this.renderNumberColumn(r,a)),!!l&&react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-list-rowSelection-checkbox-wrap")},this.renderItemSelection(r)),react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-list-expandable-trigger")},s&&react_1.default.createElement(icons_1.RightOutlined,{onClick:function(){var e=(null==(e=t.getExpandable())?void 0:e.expandedRowKeys)||[];null!=d&&d(__spreadArray(__spreadArray([],e,!0),[u],!1))}}),!s&&react_1.default.createElement(icons_1.DownOutlined,{onClick:function(){var e=(null==(e=t.getExpandable())?void 0:e.expandedRowKeys)||[];null!=d&&d(e.filter(function(e){return e!==u}))}})),react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-list-item-").concat(i,"-body")},s&&n,!s&&e))},e.prototype.renderHorizontalExpandable=function(e){var t=e.record,e=e.rowIndex,r=this.getListProps(t,e);return this.renderExpandable({record:t,rowIndex:e,collapseChildren:react_1.default.createElement(antd_1.List.Item,__assign({className:"".concat(exports.selectorPrefix,"-list-item")},r),this.renderSmallNormalItem(t,e)),children:react_1.default.createElement(antd_1.List.Item,__assign({className:"".concat(exports.selectorPrefix,"-list-item")},r),this.renderNormalItem(t,e))})},e.prototype.renderVerticalExpandable=function(e){var t=e.record,e=e.rowIndex,r=this.getListProps(t,e);return this.renderExpandable({record:t,rowIndex:e,collapseChildren:react_1.default.createElement(antd_1.List.Item,__assign({className:"".concat(exports.selectorPrefix,"-list-item")},r),this.renderSmallNormalItem(t,e)),children:react_1.default.createElement(antd_1.List.Item,__assign({className:"".concat(exports.selectorPrefix,"-list-item")},r),this.renderNormalItem(t,e))})},e.prototype.renderItem=function(e,t){var r=this.props.antdListProps,a=r.itemLayout,r=r.grid,n=this.getExpandable();return a&&"horizontal"!==a?"vertical"===a?r&&r.column?this.renderVerticalGrid({record:e,rowIndex:t,grid:r}):n?this.renderVerticalExpandable({record:e,rowIndex:t}):this.renderVerticalNormal({record:e,rowIndex:t}):null:r&&r.column?this.renderHorizontalGrid({record:e,rowIndex:t,grid:r}):n?this.renderHorizontalExpandable({record:e,rowIndex:t}):this.renderHorizontalNormal({record:e,rowIndex:t})},e.prototype.renderSelectionListHeader=function(){var e,t=this;return react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-list-rowSelection-header")},react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-list-rowSelection-header-info")},adhere_util_intl_1.default.v("已选择{count}项",{count:null==(e=this.state.selectedRowKeys)?void 0:e.length})),react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-list-rowSelection-header-cancel")},react_1.default.createElement("a",{onClick:function(){t.unSelectedAll()}},adhere_util_intl_1.default.v("取消选择"))))},e.prototype.renderListHeader=function(){var e;return this.getRowSelection()&&null!=(e=this.state.selectedRowKeys)&&e.length?this.renderSelectionListHeader():null},e}(SearchList_1.default),SearchListImplementFactory=((exports.SearchListImplement=SearchListImplement).defaultProps=__assign({},SearchList_1.defaultProps),SearchListImplement.propTypes=__assign(__assign({},SearchList_1.propTypes),{getListWrapperInstance:prop_types_1.default.func}),function(e){function t(e){return __assign(__assign(__assign({},serviceregister_1.default.mapStateToProps({namespaces:n||[],state:e})),{loading:e.loading}),i?i(e):{})}function a(e){return __assign(__assign({},serviceregister_1.default.mapDispatchToProps({namespaces:n||[],dispatch:e})),o?o(e):{})}var r=e.serviceNames,n=void 0===r?[]:r,i=e.mapStateToProps,o=e.mapDispatchToProps;return function(r){return serviceregister_1.default.connect(n||[])(t,a)((0,react_1.forwardRef)(function(e,t){return react_1.default.createElement(r,__assign({ref:t,className:"".concat(exports.selectorPrefix,"-wrap"),isShowExpandSearch:!0,defaultExpandSearchCollapse:!1},e))}))}});exports.default=SearchListImplementFactory;
//# sourceMappingURL=SearchListImplement.js.map
