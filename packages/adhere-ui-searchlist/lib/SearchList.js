"use strict";var __extends=function(){var n=function(e,t){return(n=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){e.__proto__=t}:function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}))(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),__assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,n){void 0===n&&(n=r);var a=Object.getOwnPropertyDescriptor(t,r);a&&("get"in a?t.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){e[n=void 0===n?r:n]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__spreadArray=function(e,t,r){if(r||2===arguments.length)for(var n,a=0,o=t.length;a<o;a++)!n&&a in t||((n=n||Array.prototype.slice.call(t,0,a))[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},antd_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.propTypes=exports.defaultProps=exports.SearchListContext=exports.selectorPrefix=void 0,require("antd")),classnames_1=__importDefault(require("classnames")),prop_types_1=__importDefault(require("prop-types")),react_1=__importStar(require("react")),adhere_ui_conditionalrender_1=__importDefault(require("@baifendian/adhere-ui-conditionalrender")),adhere_ui_searchtable_1=__importDefault(require("@baifendian/adhere-ui-searchtable")),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),ListDensitySetting_1=__importDefault(require("./Extension/ListDensitySetting")),Search=adhere_ui_searchtable_1.default.Search,SearchList=(exports.selectorPrefix="adhere-ui-searchtable",exports.SearchListContext=(0,react_1.createContext)(null),function(a){function e(e){var t=a.call(this,e)||this;return t.listWrapRef=(0,react_1.createRef)(),t.state={prePage:1,page:1,limit:t.getLimit(),expand:e.defaultExpandSearchCollapse},Object.assign(t.state,{listDensity:t.getListDensity()}),t.onClear=t.onClear.bind(t),t.onBodyKeyup=t.onBodyKeyup.bind(t),t}return __extends(e,a),e.prototype.componentDidMount=function(){var e;null!=(e=a.prototype.componentDidMount)&&e.call(this),document.body.addEventListener("keyup",this.onBodyKeyup)},e.prototype.componentWillUnmount=function(){var e;null!=(e=a.prototype.componentWillUnmount)&&e.call(this),document.body.removeEventListener("keyup",this.onBodyKeyup)},e.prototype.onBodyKeyup=function(e){13===e.keyCode&&document.activeElement&&null!=(e=this.searchFormRef.current)&&e.contains(document.activeElement)&&this.search()},e.prototype.onSearchPanelCollapseBefore=function(){},e.prototype.onSearchPanelCollapseAfter=function(){},e.prototype.search=function(){var t=this;return new Promise(function(e){t.setState({page:1},function(){t.onSearch().then(function(){return e()})})})},e.prototype.getListDensity=function(){return"default"},e.prototype.renderTableDensitySetting=function(){var t=this;return react_1.default.createElement(ListDensitySetting_1.default,{density:this.state.listDensity,onChange:function(e){t.setState({listDensity:e})},onReset:function(e){t.setState({listDensity:e})}})},e.prototype.renderSearchToolBar=function(){var e=this,t=this.props.isShowExpandSearch,r=[react_1.default.createElement(antd_1.Button,{className:"".concat(exports.selectorPrefix,"-searchfooteritem"),type:"primary",key:"search",icon:react_1.default.createElement("i",{className:(0,classnames_1.default)("".concat(exports.selectorPrefix,"-searchfooteritem-search-btn-icon"),"iconfont iconsousuo")}),onClick:function(){e.search()}},adhere_util_intl_1.default.v("查询")),react_1.default.createElement(antd_1.Button,{className:"".concat(exports.selectorPrefix,"-searchfooteritem"),key:"reset",onClick:this.onClear},adhere_util_intl_1.default.v("重置"))],t=(t&&r.push(react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:this.state.expand,noMatch:function(){return react_1.default.createElement("a",{key:"expand",className:"".concat(exports.selectorPrefix,"-searchfooteritem-expand-search-up-btn"),onClick:function(){e.onSearchPanelCollapseBefore&&e.onSearchPanelCollapseBefore(),e.setState({expand:!0},function(){return e.onSearchPanelCollapseAfter&&e.onSearchPanelCollapseAfter()})}},react_1.default.createElement("span",null,adhere_util_intl_1.default.v("展开")),react_1.default.createElement("i",{className:"iconfont iconup"}))}},function(){return react_1.default.createElement("a",{key:"hide",className:"".concat(exports.selectorPrefix,"-searchfooteritem-expand-search-down-btn"),onClick:function(){e.onSearchPanelCollapseBefore&&e.onSearchPanelCollapseBefore(),e.setState({expand:!1},function(){return e.onSearchPanelCollapseAfter&&e.onSearchPanelCollapseAfter()})}},react_1.default.createElement("span",null,adhere_util_intl_1.default.v("关闭")),react_1.default.createElement("i",{className:"iconfont icondownarrow"}))})),this.renderSearchFooterItems(r)||__spreadArray([],r,!0));return react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-searchfooterwrapper")},t.map(function(e,t){return react_1.default.createElement("div",{key:t,className:"".concat(exports.selectorPrefix,"-searchfooteritem")},e)}))},e.prototype.getPagination=function(){for(var r=this,e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=a.prototype.getPagination.apply(this,e);return __assign({onChange:function(e,t){r.setState({page:e,limit:t},function(){r.fetchData()})},onShowSizeChange:function(e,t){r.setState({page:e,limit:t},function(){r.fetchData()})}},n)},e.prototype.renderBody=function(){var r=this,e=this.props.antdListProps,t=this.state.listDensity,t=__assign({rowKey:this.getRowKey(),dataSource:this.getData(),pagination:this.getPagination(),renderItem:function(e,t){return r.renderItem(e,t)},header:this.renderListHeader(),size:t},null!=e?e:{});return react_1.default.createElement(antd_1.List,__assign({},t))},e.prototype.renderInner=function(){var e,t=this.props.fixedListSpaceBetween;return a.prototype.renderInner.call(this,this.listWrapRef,(0,classnames_1.default)(((e={}).fixedlistspacebetween=void 0===t||t,e)))},e.prototype.renderChildren=function(){return react_1.default.createElement("div",{className:"".concat(exports.selectorPrefix,"-wrap")},a.prototype.render.call(this))},e.prototype.render=function(){return react_1.default.createElement(exports.SearchListContext.Provider,{value:{context:this}},this.renderChildren())},e.NUMBER_GENERATOR_RULE_ALONE=Symbol(),e.NUMBER_GENERATOR_RULE_CONTINUITY=Symbol(),e}(Search));exports.defaultProps={antdListProps:{},fixedSelectionHeaderAutoList:!0,fixedListSpaceBetween:!0},exports.propTypes={antdListProps:prop_types_1.default.object,fixedSelectionHeaderAutoList:prop_types_1.default.bool,fixedListSpaceBetween:prop_types_1.default.bool},SearchList.defaultProps=exports.defaultProps,SearchList.propTypes=exports.propTypes,exports.default=SearchList;
//# sourceMappingURL=SearchList.js.map
