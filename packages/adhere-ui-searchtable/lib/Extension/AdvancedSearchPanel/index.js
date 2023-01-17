"use strict";require("core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),antd_1=require("antd"),classnames_1=tslib_1.__importDefault(require("classnames")),react_1=tslib_1.__importStar(require("react")),react_dom_1=tslib_1.__importDefault(require("react-dom")),icons_1=require("@ant-design/icons"),adhere_ui_conditionalrender_1=tslib_1.__importDefault(require("@baifendian/adhere-ui-conditionalrender")),adhere_ui_flexlayout_1=tslib_1.__importDefault(require("@baifendian/adhere-ui-flexlayout")),adhere_ui_slidelayout_1=tslib_1.__importDefault(require("@baifendian/adhere-ui-slidelayout")),adhere_ui_space_1=tslib_1.__importDefault(require("@baifendian/adhere-ui-space")),adhere_ui_tablegridlayout_1=tslib_1.__importDefault(require("@baifendian/adhere-ui-tablegridlayout")),adhere_util_intl_1=tslib_1.__importDefault(require("@baifendian/adhere-util-intl")),SearchTable_1=require("../../SearchTable"),VerticalFlexLayout=adhere_ui_flexlayout_1.default.VerticalFlexLayout,ScrollLayout=adhere_ui_flexlayout_1.default.ScrollLayout,renderGridSearchFormGroup=adhere_ui_tablegridlayout_1.default.renderGridSearchFormGroup,Overlay=adhere_ui_slidelayout_1.default.Overlay,_selectorPrefix="".concat(SearchTable_1.selectorPrefix,"-advancedsearchpanel"),AdvancedSearchPanel=function(e){var t=e.advancedSearchConfig,a=t.advancedSearch,r=a.getPopupContainer,l=tslib_1.__rest(a,["getPopupContainer"]),a=t.showStrategy,a=void 0===a?"all":a,n=t.renderTitleLabel,i=t.renderCollapse,t=e.tableGridLayoutConfig,t=void 0===t?{layout:"horizontal",bordered:!1}:t,c=e.groupData,c=void 0===c?[]:c,o=e.remainingGroupData,o=void 0===o?[]:o,u=e.onSearch,d=e.onReset,e=(0,react_1.useState)(l.collapse),_=e[0],s=e[1];return(0,react_1.useEffect)(function(){s(l.collapse)},[l.collapse]),react_dom_1.default.createPortal(react_1.default.createElement(Overlay,tslib_1.__assign({},l,{className:(0,classnames_1.default)("".concat(_selectorPrefix),l.className||""),collapse:_}),react_1.default.createElement(VerticalFlexLayout,{className:"".concat(_selectorPrefix,"-inner"),renderTop:react_1.default.createElement("header",{className:"".concat(_selectorPrefix,"-header")},react_1.default.createElement("div",{className:"".concat(_selectorPrefix,"-title")},react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!n,noMatch:function(){return null==n?void 0:n()}},function(){return react_1.default.createElement(adhere_ui_space_1.default.Group,{direction:"horizontal",size:2},react_1.default.createElement(icons_1.FilterOutlined,null),react_1.default.createElement("strong",null,adhere_util_intl_1.default.v("高级搜索")))})),react_1.default.createElement("div",{className:"".concat(_selectorPrefix,"-collapse"),onClick:function(){return s(!_)}},react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:!i,noMatch:function(){return null==i?void 0:i(_)}},function(){return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:_,noMatch:function(){return react_1.default.createElement(adhere_ui_space_1.default.Group,{direction:"horizontal",size:2},react_1.default.createElement(icons_1.RightCircleOutlined,null),react_1.default.createElement("strong",null,adhere_util_intl_1.default.v("展开")))}},function(){return react_1.default.createElement(adhere_ui_space_1.default.Group,{direction:"horizontal",size:2},react_1.default.createElement(icons_1.LeftCircleOutlined,null),react_1.default.createElement("strong",null,adhere_util_intl_1.default.v("收起")))})}))),renderMain:react_1.default.createElement("div",{className:"".concat(_selectorPrefix,"-main")},react_1.default.createElement("div",{className:"".concat(_selectorPrefix,"-scroll")},react_1.default.createElement(ScrollLayout,{scrollY:!0},renderGridSearchFormGroup("all"===a?c:o,t))),react_1.default.createElement("footer",{className:"".concat(_selectorPrefix,"-footer")},react_1.default.createElement("div",{className:"".concat(_selectorPrefix,"-item")},react_1.default.createElement(antd_1.Button,{type:"primary",icon:react_1.default.createElement(icons_1.SearchOutlined,null),onClick:function(){return u().then(function(){return s(!1)})}},adhere_util_intl_1.default.v("确定"))),react_1.default.createElement("div",{className:"".concat(_selectorPrefix,"-item")},react_1.default.createElement(antd_1.Button,{icon:react_1.default.createElement(icons_1.ReloadOutlined,null),onClick:function(){return d().then(function(){return s(!1)})}},adhere_util_intl_1.default.v("重置")))))})),r())};AdvancedSearchPanel.defaultProps={groupData:[],tableGridLayoutConfig:{layout:"horizontal",bordered:!1},remainingGroupData:[],advancedSearchConfig:{rowCount:"auto",showStrategy:"all",advancedSearch:{className:"",style:{},width:"30%",mask:!0,zIndex:19999,time:300,direction:"right",collapse:!1,onBeforeShow:function(){},onBeforeClose:function(){},onAfterShow:function(){},onAfterClose:function(){},getPopupContainer:function(){return document.body}}}},exports.default=react_1.default.memo(AdvancedSearchPanel);
//# sourceMappingURL=index.js.map
