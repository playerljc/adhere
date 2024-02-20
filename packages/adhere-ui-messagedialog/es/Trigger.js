var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var n,o=1,l=arguments.length;o<l;o++)for(var t in n=arguments[o])Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e}).apply(this,arguments)};import classNames from"classnames";import debounce from"lodash.debounce";import React,{useMemo}from"react";import MessageDialog from"./MessageDialog";import{selectorPrefix}from"./Modal";import SubmitButton from"./SubmitButton";var Trigger=function(e){var n=e.className,o=e.style,l=e.value,r=e.onChange,t=e.children,i=e.renderTrigger,a=e.modalConfig,s=e.actions,e=e.maximized,u=void 0===e||e,c=useMemo(function(){return t&&React.cloneElement(t,__assign(__assign({},t.props),{value:l}),t.props.children)},[t]);return React.createElement("div",{className:classNames("".concat(selectorPrefix,"-trigger"),null!=n?n:""),style:null!=o?o:{},onClick:debounce(function(){var e,n,o=null!=(o=null==a?void 0:a.config)?o:{},i=(o.footer=null!=(e=null==(e=(n=null!=s?s:[]).map)?void 0:e.call(n,function(e){return React.createElement(SubmitButton,__assign({},null!=e?e:{},{onClick:function(){return l=e.onClick,t=null==i?void 0:i.close,new Promise(function(n,o){var e;null!=(e=null==l?void 0:l())&&e.then(function(e){null!=r&&r(e),setTimeout(function(){n(e),null!=t&&t()},300)}).catch(function(e){return o(e)})});var l,t}}))}))?e:[],null==(n=new Map([[!0,MessageDialog.MaximizeModal],[!1,MessageDialog.Modal]]).get(u))?void 0:n({config:o,defaultCloseBtn:!0,children:c}))},200)},null==i?void 0:i())};Trigger.displayName="Trigger";export default Trigger;
//# sourceMappingURL=Trigger.js.map
