import _Button from"antd/es/button";import"core-js/modules/es.array.filter.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.regexp.exec.js";import"core-js/modules/es.string.replace.js";import{__assign,__rest,__spreadArray}from"tslib";import React from"react";import PropTypes from"prop-types";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import HistoryBack from"@baifendian/adhere-ui-historyback";import Intl from"@baifendian/adhere-util-intl";import ToolBarLayout from"./ToolBarLayout";var BackLayout=function(o){var e=o.topToolBarItems,r=o.isShowBack,t=o.backPath,a=o.enforceBackPath,s=o.history,p=o.backTitle,i=o.children,o=__rest(o,["topToolBarItems","isShowBack","backPath","enforceBackPath","history","backTitle","children"]),r=__spreadArray(__spreadArray([],e,!0),[React.createElement(ConditionalRender,{key:"backBtn",conditional:r},function(){return React.createElement(_Button,{onClick:function(){a?s.replace(a):HistoryBack(s,t)}},p||Intl.v("返回"))})],!1).filter(function(o){return!("props"in o&&"conditional"in o.props)||o.props.conditional});return React.createElement(ToolBarLayout,__assign({},o,{topToolBarItems:r}),i)};BackLayout.defaultProps={topToolBarItems:[],backPath:"",isShowBack:!0},BackLayout.propTypes={className:PropTypes.string,style:PropTypes.object,topClassName:PropTypes.string,topStyle:PropTypes.object,bottomClassName:PropTypes.string,bottomStyle:PropTypes.object,mainClassName:PropTypes.string,mainStyle:PropTypes.object,mainAutoWrapClassName:PropTypes.string,mainAutoStyle:PropTypes.object,mainWrapClassName:PropTypes.string,mainWrapStyle:PropTypes.object,topToolBarItems:PropTypes.arrayOf(PropTypes.node),topProps:PropTypes.object,mainProps:PropTypes.object,mainAutoWrapProps:PropTypes.object,backPath:PropTypes.string,enforceBackPath:PropTypes.string,isShowBack:PropTypes.bool,history:PropTypes.object,backTitle:PropTypes.oneOfType([PropTypes.string,PropTypes.node])};export default BackLayout;
//# sourceMappingURL=backLayout.js.map
