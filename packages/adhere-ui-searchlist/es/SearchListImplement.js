import _DownOutlined from"@ant-design/icons/es/icons/DownOutlined";import _RightOutlined from"@ant-design/icons/es/icons/RightOutlined";import _Card from"antd/es/card";import _List from"antd/es/list";import _Avatar from"antd/es/avatar";import _Checkbox from"antd/es/checkbox";var __extends=this&&this.__extends||function(){var n=function(e,t){return(n=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){e.__proto__=t}:function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}))(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,a=0,i=t.length;a<i;a++)!n&&a in t||((n=n||Array.prototype.slice.call(t,0,a))[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))};import classNames from"classnames";import PropTypes from"prop-types";import React,{createRef,forwardRef}from"react";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import Intl from"@baifendian/adhere-util-intl";import ServiceRegister from"@ctsj/state/lib/middleware/saga/serviceregister";import SearchList,{defaultProps,propTypes}from"./SearchList";var selectorPrefix="adhere-ui-search-table-implement",defaultMetas=__assign({title:{dataIndex:"title"},subTitle:{dataIndex:"subTitle"},description:{dataIndex:"description"},avatar:{dataIndex:"avatar"},actions:{dataIndex:"actions",cardActionProps:"actions"},content:{dataIndex:"content"},extra:{dataIndex:"extra"}}),SearchListImplement=function(t){function e(e){var n=t.call(this,e)||this;return n.innerWrapRef=createRef(),n.onSelectChange=function(e,t){var r;n.setState(((r={})[e]=t,r))},n.onInputChange=function(e,t){var r;n.setState(((r={})[e]=t.target.value,r))},n.onDateTimeRangeChange=function(e,t){var r;n.setState(((r={})[e[0]]=t&&t.length?t[0]:null,r[e[1]]=t&&t.length?t[1]:null,r))},Object.assign(n.state,__assign(__assign({},n.getParams()),{searchParams:__assign({},n.getParams()),selectedRowKeys:[],selectedRows:[]})),n.renderItem=n.renderItem.bind(n),n}return __extends(e,t),e.prototype.componentDidMount=function(){t.prototype.componentDidMount.call(this);var e=this.props.getListWrapperInstance;e&&e(this.innerWrapRef)},e.prototype.getFetchListPropName=function(){return""},e.prototype.getFetchListPropNameToFirstUpper=function(){var e=this.getFetchListPropName();return 1<e.length?"".concat(e.charAt(0).toUpperCase()).concat(e.substring(1)):e},e.prototype.getParams=function(){return{}},e.prototype.getServiceName=function(){return""},e.prototype.getFetchDataParams=function(){return{}},e.prototype.isShowNumber=function(){return!0},e.prototype.getNumberGeneratorRule=function(){return SearchList.NUMBER_GENERATOR_RULE_CONTINUITY},e.prototype.getRowKey=function(){return"id"},e.prototype.getDataKey=function(){return"list"},e.prototype.getTotalKey=function(){return"totalCount"},e.prototype.getData=function(){return this.props[this.getServiceName()][this.getFetchListPropName()][this.getDataKey()]},e.prototype.getTotal=function(){return this.props[this.getServiceName()][this.getFetchListPropName()][this.getTotalKey()]},e.prototype.getRowSelection=function(){var r=this;return{selectedRowKeys:this.state.selectedRowKeys,onChange:function(e,t){r.setState({selectedRowKeys:e,selectedRows:t})}}},e.prototype.renderSearchForm=function(){return null},e.prototype.renderInner=function(){var e=t.prototype.renderInner.call(this);return React.createElement("div",{ref:this.innerWrapRef,className:"".concat(selectorPrefix,"-table-wrapper")},e)},e.prototype.renderSearchFooterItems=function(){return[]},e.prototype.clearSearch=function(){var t=this;return new Promise(function(e){t.setState(__assign(__assign({},t.getParams()),{searchParams:__assign({},t.getParams()),selectedRowKeys:[],selectedRows:[]}),function(){e()})})},e.prototype.clearPaging=function(){var t=this;return new Promise(function(e){t.setState({page:1,limit:t.getLimit()},function(){e()})})},e.prototype.showLoading=function(){return this.props.loading["".concat(this.getServiceName(),"/").concat(this.getFetchListPropName())]},e.prototype.getSearchParams=function(){var e=this.state,t=e.page,r=e.limit,e=e.searchParams;return __assign({},__assign(__assign({page:t,limit:r},e),this.getFetchDataParams()))},e.prototype.getMetas=function(){return{}},e.prototype.fetchData=function(){return this.fetchDataExecute(this.getSearchParams())},e.prototype.sync=function(){var n=this;return new Promise(function(t){var e,r=n.state.page;1===r?n.fetchData().then(function(e){return t(e)}):e=n.fetchData().then(function(){n.getData().length?t(e):n.setState({page:r-1},function(){n.fetchData().then(function(e){return t(e)})})})})},e.prototype.fetchDataExecute=function(e){return this.props["".concat(this.getServiceName()).concat(this.getFetchListPropNameToFirstUpper())](e)},e.prototype.onSearch=function(){var r=this,e=Object.keys(this.getParams()),n={};return e.forEach(function(e){n[e]=r.state[e]}),new Promise(function(t){r.setState({searchParams:__assign({},n)},function(){r.fetchData().then(function(e){t(e)})})})},e.prototype.selectCheckBoxChange=function(e,t){var r,n=this.getRowSelection(),a=this.getRowKey(),e=e.target.checked,i=__spreadArray([],this.state.selectedRowKeys||[],!0),o=this.getData(),l=t[a],t=e?__spreadArray([l],i,!0):i.filter(function(e){return e!==l}),i=t.map(function(t){return o.find(function(e){return e[a]===t})});null!=(r=null==n?void 0:n.onChange)&&r.call(n,t,i,{type:e?"single":"invert"})},e.prototype.unSelectedAll=function(){var n=this;return new Promise(function(e){var t,r=n.getRowSelection();null!=(t=null==r?void 0:r.onChange)&&t.call(r,[],[],{type:"multiple"}),e()})},e.prototype.renderItemSelection=function(t){var r=this,e=null==(e=this.state.selectedRowKeys)?void 0:e.includes(t[this.getRowKey()]);return React.createElement("div",{className:"".concat(selectorPrefix,"-list-row-selection-checkbox")},React.createElement(_Checkbox,{checked:e,onChange:function(e){r.selectCheckBoxChange(e,t)}}))},e.prototype.renderSmallNormalItem=function(e,t){var r=__assign(__assign({},defaultMetas),null!=(r=this.getMetas())?r:{}),n=(null==(n=null==(o=null==r?void 0:r.avatar)?void 0:o.render)?void 0:n.call(o,null==e?void 0:e[r.avatar.dataIndex],e,t))||r.avatar&&(null==e?void 0:e[r.avatar.dataIndex])&&React.createElement(_Avatar,{src:null==e?void 0:e[r.avatar.dataIndex]}),a=(null==(a=null==(o=null==r?void 0:r.subTitle)?void 0:o.render)?void 0:a.call(o,null==e?void 0:e[r.subTitle.dataIndex],e,t))||r.subTitle&&(null==e?void 0:e[r.subTitle.dataIndex]),i=(null==(i=null==(o=null==r?void 0:r.title)?void 0:o.render)?void 0:i.call(o,null==e?void 0:e[r.title.dataIndex],e,t))||r.title&&(null==e?void 0:e[r.title.dataIndex]),o={};return n&&(o.avatar=n),i&&(o.title=i,a)&&(o.title=React.createElement("div",{className:"".concat(selectorPrefix,"-list-meta-title-wrap")},React.createElement("div",{className:"".concat(selectorPrefix,"-list-meta-title")},i),React.createElement("div",{className:"".concat(selectorPrefix,"-list-meta-subTitle")},a))),React.createElement(_List.Item.Meta,__assign({},o))},e.prototype.renderNormalItem=function(e,t){var r=__assign(__assign({},defaultMetas),null!=(r=this.getMetas())?r:{}),n="itemLayout"in this.props.antdListProps?this.props.antdListProps.itemLayout:"horizontal",a=(null==(a=null==(c=null==r?void 0:r.avatar)?void 0:c.render)?void 0:a.call(c,null==e?void 0:e[r.avatar.dataIndex],e,t))||r.avatar&&(null==e?void 0:e[r.avatar.dataIndex])&&React.createElement(_Avatar,{src:null==e?void 0:e[r.avatar.dataIndex]}),i=(null==(i=null==(c=null==r?void 0:r.subTitle)?void 0:c.render)?void 0:i.call(c,null==e?void 0:e[r.subTitle.dataIndex],e,t))||r.subTitle&&(null==e?void 0:e[r.subTitle.dataIndex]),o=(null==(o=null==(c=null==r?void 0:r.title)?void 0:c.render)?void 0:o.call(c,null==e?void 0:e[r.title.dataIndex],e,t))||r.title&&(null==e?void 0:e[r.title.dataIndex]),l=(null==(l=null==(c=null==r?void 0:r.description)?void 0:c.render)?void 0:l.call(c,null==e?void 0:e[r.description.dataIndex],e,t))||r.description&&(null==e?void 0:e[r.description.dataIndex]),s=(null==(s=null==(c=null==r?void 0:r.content)?void 0:c.render)?void 0:s.call(c,null==e?void 0:e[r.content.dataIndex],e,t))||r.content&&(null==e?void 0:e[r.content.dataIndex]),c={};return a&&(c.avatar=a),o&&(c.title=o,i)&&(c.title=React.createElement("div",{className:"".concat(selectorPrefix,"-list-meta-title-wrap")},React.createElement("div",{className:"".concat(selectorPrefix,"-list-meta-title")},o),React.createElement("div",{className:"".concat(selectorPrefix,"-list-meta-subTitle")},i))),l&&(c.description=l),React.createElement(React.Fragment,null,React.createElement(_List.Item.Meta,__assign({},c)),s&&React.createElement("div",{className:classNames("".concat(selectorPrefix,"-list-item-content"),n)},s))},e.prototype.renderNumberColumnInner=function(e,t){return React.createElement("span",{className:"".concat(selectorPrefix,"-list-number")},e)},e.prototype.renderNumberColumn=function(e,t){var r=this,n=this.state,a=n.page,i=void 0===a?0:a,a=n.limit,o=void 0===a?10:a,a=null!=(n=this.getNumberGeneratorRule())?n:SearchList.NUMBER_GENERATOR_RULE_ALONE;return React.createElement(ConditionalRender,{conditional:a===SearchList.NUMBER_GENERATOR_RULE_ALONE,noMatch:function(){return r.renderNumberColumnInner((i-1)*o+(t+1),{record:e,index:t})}},function(){return r.renderNumberColumnInner(t+1,{record:e,index:t})})},e.prototype.getExpandable=function(){},e.prototype.getListProps=function(e,t){var r,n={},a=__assign(__assign({},defaultMetas),null!=(a=this.getMetas())?a:{}),i=(null==(i=null==(o=null==a?void 0:a.extra)?void 0:o.render)?void 0:i.call(o,null==e?void 0:e[a.extra.dataIndex],e,t))||a.extra&&(null==e?void 0:e[a.extra.dataIndex]),o=(null==(r=null==(o=null==a?void 0:a.actions)?void 0:o.render)?void 0:r.call(o,null==e?void 0:e[a.actions.dataIndex],e,t))||(null==(r=a.actions&&(null==e?void 0:e[a.actions.dataIndex])&&(null==e?void 0:e[a.actions.dataIndex]))?void 0:r.map(function(e){return React.createElement("span",null,e)}));return i&&(n.extra=i),o&&(n[(null==(t=a.actions)?void 0:t.cardActionProps)||"actions"]=o),n},e.prototype.getSelectionClassName=function(e){var t,r,n=this.getRowSelection();return classNames(((t={})["".concat(selectorPrefix,"-list-selection")]=!!n&&(null==(r=null==(n=this.state.selectedRowKeys)?void 0:n.includes)?void 0:r.call(n,e)),t))},e.prototype.renderHorizontalNormal=function(e){var t=e.record,e=e.rowIndex,r=t[this.getRowKey()],n=classNames(((n={})["".concat(selectorPrefix,"-list-item")]=!0,n),this.getSelectionClassName(r)),r=this.getRowSelection();return React.createElement(_List.Item,__assign({className:n,key:t[this.getRowKey()]},this.getListProps(t,e)),this.isShowNumber()&&React.createElement("div",{className:"".concat(selectorPrefix,"-list-number-wrap")},this.renderNumberColumn(t,e)),!!r&&React.createElement("div",{className:"".concat(selectorPrefix,"-list-row-selection-checkbox-wrap")},this.renderItemSelection(t)),this.renderNormalItem(t,e))},e.prototype.renderVerticalNormal=function(e){var t=e.record,e=e.rowIndex,r=t[this.getRowKey()],n=classNames(((n={})["".concat(selectorPrefix,"-list-item-vertical")]=!0,n.split=!("split"in this.props.antdListProps&&!this.props.antdListProps.split),n),this.getSelectionClassName(r)),r=this.getRowSelection();return React.createElement("div",{className:n,key:t[this.getRowKey()]},this.isShowNumber()&&React.createElement("div",{className:"".concat(selectorPrefix,"-list-number-wrap")},this.renderNumberColumn(t,e)),!!r&&React.createElement("div",{className:"".concat(selectorPrefix,"-list-row-selection-checkbox-wrap")},this.renderItemSelection(t)),React.createElement("div",{className:"".concat(selectorPrefix,"-list-item-vertical-body")},React.createElement(_List.Item,__assign({className:"".concat(selectorPrefix,"-list-item")},this.getListProps(t,e)),this.renderNormalItem(t,e))))},e.prototype.renderCard=function(e){var t,r=e.record,n=e.rowIndex,e=(e.grid,__assign(__assign({},defaultMetas),null!=(e=this.getMetas())?e:{})),a=this.getRowSelection(),i=(null==(i=null==(c=null==e?void 0:e.avatar)?void 0:c.render)?void 0:i.call(c,null==r?void 0:r[e.avatar.dataIndex],r,n))||e.avatar&&(null==r?void 0:r[e.avatar.dataIndex])&&React.createElement(_Avatar,{src:null==r?void 0:r[e.avatar.dataIndex]}),o=(null==(o=null==(c=null==e?void 0:e.subTitle)?void 0:c.render)?void 0:o.call(c,null==r?void 0:r[e.subTitle.dataIndex],r,n))||e.subTitle&&(null==r?void 0:r[e.subTitle.dataIndex]),l=(null==(l=null==(c=null==e?void 0:e.title)?void 0:c.render)?void 0:l.call(c,null==r?void 0:r[e.title.dataIndex],r,n))||e.title&&(null==r?void 0:r[e.title.dataIndex]),s=(null==(s=null==(c=null==e?void 0:e.description)?void 0:c.render)?void 0:s.call(c,null==r?void 0:r[e.description.dataIndex],r,n))||e.description&&(null==r?void 0:r[e.description.dataIndex]),c={},i=(i&&(c.avatar=i),l&&(c.title=l,o)&&(c.title=React.createElement("div",{className:"".concat(selectorPrefix,"-list-meta-title-wrap")},React.createElement("div",{className:"".concat(selectorPrefix,"-list-meta-title")},l),React.createElement("div",{className:"".concat(selectorPrefix,"-list-meta-subTitle")},o))),s&&(c.description=s),{}),s=(null==(o=null==(l=null==e?void 0:e.content)?void 0:l.render)?void 0:o.call(l,null==r?void 0:r[e.content.dataIndex],r,n))||e.content&&(null==r?void 0:r[e.content.dataIndex]),l=(null==(l=null==(o=null==e?void 0:e.extra)?void 0:o.render)?void 0:l.call(o,null==r?void 0:r[e.extra.dataIndex],r,n))||e.extra&&(null==r?void 0:r[e.extra.dataIndex]),o=(null==(t=null==(o=null==e?void 0:e.actions)?void 0:o.render)?void 0:t.call(o,null==r?void 0:r[e.actions.dataIndex],r,n))||(null==(t=e.actions&&(null==r?void 0:r[e.actions.dataIndex])&&(null==r?void 0:r[e.actions.dataIndex]))?void 0:t.map(function(e){return React.createElement("span",null,e)})),l=(l&&(i.extra=l),o&&(i[(null==(t=e.actions)?void 0:t.cardActionProps)||"actions"]=o),(this.isShowNumber()||a)&&(i.title=React.createElement("div",{className:"".concat(selectorPrefix,"-list-card-title")},this.isShowNumber()&&this.renderNumberColumn(r,n),!!a&&this.renderItemSelection(r))),r[this.getRowKey()]);return React.createElement(_Card,__assign({},i,{className:this.getSelectionClassName(l)}),React.createElement(_Card.Meta,__assign({},c)),s&&React.createElement("p",null,s))},e.prototype.renderHorizontalGrid=function(e){var t=e.record,r=e.rowIndex,e=e.grid;return React.createElement(_List.Item,{key:t[this.getRowKey()]},this.renderCard({record:t,rowIndex:r,grid:e}))},e.prototype.renderVerticalGrid=function(e){var t=e.record,r=e.rowIndex,e=e.grid;return this.renderHorizontalGrid({record:t,rowIndex:r,grid:e})},e.prototype.renderExpandable=function(e){var t=this,r=e.record,n=e.rowIndex,a=e.collapseChildren,e=e.children,i="itemLayout"in this.props.antdListProps?this.props.antdListProps.itemLayout:"horizontal",o=r[this.getRowKey()],l=classNames(((l={})["".concat(selectorPrefix,"-list-item-").concat(i)]=!0,l.split=!("split"in this.props.antdListProps&&!this.props.antdListProps.split),l),this.getSelectionClassName(o)),s=this.getRowSelection(),c=this.getExpandable(),d=c.expandedRowKeys,u=c.onExpandedRowsChange,c=!d.includes(o);return React.createElement("div",{className:l,key:o},this.isShowNumber()&&React.createElement("div",{className:"".concat(selectorPrefix,"-list-number-wrap")},this.renderNumberColumn(r,n)),!!s&&React.createElement("div",{className:"".concat(selectorPrefix,"-list-row-selection-checkbox-wrap")},this.renderItemSelection(r)),React.createElement("div",{className:"".concat(selectorPrefix,"-list-expandable-trigger")},c&&React.createElement(_RightOutlined,{onClick:function(){var e=(null==(e=t.getExpandable())?void 0:e.expandedRowKeys)||[];null!=u&&u(__spreadArray(__spreadArray([],e,!0),[o],!1))}}),!c&&React.createElement(_DownOutlined,{onClick:function(){var e=(null==(e=t.getExpandable())?void 0:e.expandedRowKeys)||[];null!=u&&u(e.filter(function(e){return e!==o}))}})),React.createElement("div",{className:"".concat(selectorPrefix,"-list-item-").concat(i,"-body")},c&&a,!c&&e))},e.prototype.renderHorizontalExpandable=function(e){var t=e.record,e=e.rowIndex,r=this.getListProps(t,e);return this.renderExpandable({record:t,rowIndex:e,collapseChildren:React.createElement(_List.Item,__assign({className:"".concat(selectorPrefix,"-list-item")},r),this.renderSmallNormalItem(t,e)),children:React.createElement(_List.Item,__assign({className:"".concat(selectorPrefix,"-list-item")},r),this.renderNormalItem(t,e))})},e.prototype.renderVerticalExpandable=function(e){var t=e.record,e=e.rowIndex,r=this.getListProps(t,e);return this.renderExpandable({record:t,rowIndex:e,collapseChildren:React.createElement(_List.Item,__assign({className:"".concat(selectorPrefix,"-list-item")},r),this.renderSmallNormalItem(t,e)),children:React.createElement(_List.Item,__assign({className:"".concat(selectorPrefix,"-list-item")},r),this.renderNormalItem(t,e))})},e.prototype.renderItem=function(e,t){var r=this.props.antdListProps,n=r.itemLayout,r=r.grid,a=this.getExpandable();return n&&"horizontal"!==n?"vertical"===n?r&&r.column?this.renderVerticalGrid({record:e,rowIndex:t,grid:r}):a?this.renderVerticalExpandable({record:e,rowIndex:t}):this.renderVerticalNormal({record:e,rowIndex:t}):null:r&&r.column?this.renderHorizontalGrid({record:e,rowIndex:t,grid:r}):a?this.renderHorizontalExpandable({record:e,rowIndex:t}):this.renderHorizontalNormal({record:e,rowIndex:t})},e.prototype.renderSelectionListHeader=function(){var e,t=this;return React.createElement("div",{className:"".concat(selectorPrefix,"-list-row-selection-header")},React.createElement("div",{className:"".concat(selectorPrefix,"-list-row-selection-header-info")},Intl.v("已选择{count}项",{count:null==(e=this.state.selectedRowKeys)?void 0:e.length})),React.createElement("div",{className:"".concat(selectorPrefix,"-list-row-selection-header-cancel")},React.createElement("a",{onClick:function(){t.unSelectedAll()}},Intl.v("取消选择"))))},e.prototype.renderListHeader=function(){var e;return this.getRowSelection()&&null!=(e=this.state.selectedRowKeys)&&e.length?this.renderSelectionListHeader():null},e.prototype.renderSearchFormAfter=function(){return null},e.prototype.renderSearchFormBefore=function(){return null},e.prototype.renderSearchFooter=function(){return null},e.prototype.renderSearchHeader=function(){return null},e.prototype.renderSearchFormToolBarDefaultPanel=function(){return null},e.prototype.renderSearchFormToolBarItems=function(e){return e},e.displayName="SearchListImplement",e}(SearchList),SearchListImplementFactory=(SearchListImplement.defaultProps=__assign({},defaultProps),SearchListImplement.propTypes=__assign(__assign({},propTypes),{getListWrapperInstance:PropTypes.func}),function(e){function t(e){return __assign(__assign(__assign({},ServiceRegister.mapStateToProps({namespaces:a||[],state:e})),{loading:e.loading}),i?i(e):{})}function n(e){return __assign(__assign({},ServiceRegister.mapDispatchToProps({namespaces:a||[],dispatch:e})),o?o(e):{})}var r=e.serviceNames,a=void 0===r?[]:r,i=e.mapStateToProps,o=e.mapDispatchToProps;return function(r){return ServiceRegister.connect(a||[])(t,n)(forwardRef(function(e,t){return React.createElement(r,__assign({ref:t,className:"".concat(selectorPrefix,"-wrap"),isShowExpandSearch:!0,defaultExpandSearchCollapse:!1},e))}))}});export default SearchListImplementFactory;export{selectorPrefix,SearchListImplement};
//# sourceMappingURL=SearchListImplement.js.map
