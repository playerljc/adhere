import classNames from"classnames";import React,{useCallback,useContext}from"react";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import Intl from"@baifendian/adhere-util-intl";import{selectorPrefix}from"../../../SearchTable";import{SearchTableContext}from"../../../SearchTable";var EditorTableControl=function(e){var t=e.className,n=e.styles,a=e.renderEditorTable,l=e.renderSave,o=e.renderCancel,r=e.onEditor,c=e.onSave,i=useContext(SearchTableContext),u=useCallback(function(){return React.createElement("a",null,Intl.v("保存"))},[]),d=useCallback(function(){return React.createElement("a",null,Intl.v("取消"))},[]),s=useCallback(function(){return React.createElement("a",null,Intl.v("编辑表格"))},[]),f=useCallback(function(e){c?c(e.dataSource).then(function(){return m(e.dataSource)}):m(e.dataSource)},[]),v=useCallback(function(){var e;r?null!=(e=null==r?void 0:r())&&e.then(function(){return b()}):b()},[]),m=function(e){var t;return null==(t=null==(t=null==i?void 0:i.context)?void 0:t.updateEditorData(e))?void 0:t.then(function(){return C()})},b=function(){var e;return null==(e=null==i?void 0:i.context)?void 0:e.setState({isTableEditor:!0})},C=function(){var e;return null==(e=null==i?void 0:i.context)?void 0:e.setState({isTableEditor:!1})};return React.createElement("div",{className:classNames("".concat(selectorPrefix,"-editor-table-control"),t),style:n||{}},React.createElement(ConditionalRender,{conditional:!(null!=i&&i.context.state.isTableEditor),noMatch:function(){return React.createElement("div",{className:"".concat(selectorPrefix,"-editor-table-control-save-cancel")},React.createElement("div",{className:"".concat(selectorPrefix,"-editor-table-control-save-cancel-item"),onClick:function(){var e,t;return null==(t=null==(e=null==(e=null==i?void 0:i.form)?void 0:e.validateFields())?void 0:e.then)?void 0:t.call(e,function(e){return f(e)})}},React.createElement(ConditionalRender,{conditional:!l,noMatch:function(){return null==l?void 0:l()}},function(){return u()})),React.createElement("div",{className:"".concat(selectorPrefix,"-editor-table-control-save-cancel-item"),onClick:C},React.createElement(ConditionalRender,{conditional:!o,noMatch:function(){return null==o?void 0:o()}},function(){return d()})))}},function(){return React.createElement("div",{onClick:v},React.createElement(ConditionalRender,{conditional:!a,noMatch:function(){return null==a?void 0:a()}},function(){return s()}))}))};export default EditorTableControl;
//# sourceMappingURL=index.js.map