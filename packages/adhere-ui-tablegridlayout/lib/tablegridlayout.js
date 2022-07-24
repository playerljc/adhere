"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var l in r=arguments[t])Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,r){var t={};for(l in e)Object.prototype.hasOwnProperty.call(e,l)&&r.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,l=Object.getOwnPropertySymbols(e);a<l.length;a++)r.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(t[l[a]]=e[l[a]]);return t},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(require("react")),prop_types_1=__importDefault(require("prop-types")),classnames_1=__importDefault(require("classnames")),adhere_ui_conditionalrender_1=__importDefault(require("@baifendian/adhere-ui-conditionalrender")),selectorPrefix="adhere-ui-tablegridlayout";function renderHorizontal(e){var r=e.data,t=r.columnCount,r=r.data,n=e.rowCountRef;var o=2*t,t=[];t.length=o,t.fill(0);var s=[];r.forEach(function(e){var r=e.label;"require"in e&&e.require&&(r=react_1.default.cloneElement(r,__assign(__assign({},r.props),{className:classnames_1.default(selectorPrefix+"-table-row-label","require",r.props.className||"")}),r.props.children)),s.push(r),s.push(e.value)});var u=0,i=[];return function e(){for(var r=[],t=0;u<s.length;){var a=s[u];if(t===o)break;"colSpan"in a.props&&"number"==typeof a.props.colSpan?t+=a.props.colSpan:t+=1,r.push(a),u++}t<o&&((l=[]).length=o-t,l.fill(0),l.forEach(function(){r.push(react_1.default.createElement("td",{className:selectorPrefix+"-table-noborder"}))}));var l=react_1.default.createElement("tr",{className:classnames_1.default(selectorPrefix+"-table-row",n.current%2==0?"odd":"even")},r);n.current++,i.push(l),u<s.length&&e()}(),i}function renderVertical(e){var r=e.columnCount,s=e.data;var u=r,r=[];r.length=u,r.fill(0),s.forEach(function(e){var r=e.label;"require"in e&&e.require&&(e.label=react_1.default.cloneElement(r,__assign(__assign({},r.props),{className:r.props.className+" require"}),r.props.children))});var i=0,d=[];return function e(){for(var r=[],t=[],a=0;i<s.length;){var l=s[i];if(a===u)break;"colSpan"in l.value.props&&"number"==typeof l.value.props.colSpan?a+=l.value.props.colSpan:a+=1,r.push(l.label),t.push(l.value),i++}a<u&&((o=[]).length=u-a,o.fill(0),o.forEach(function(){r.push(react_1.default.createElement("td",{className:selectorPrefix+"-table-noborder"})),t.push(react_1.default.createElement("td",{className:selectorPrefix+"-table-noborder"}))}));var n=react_1.default.createElement("tr",{className:classnames_1.default(selectorPrefix+"-table-row","even")},r),o=react_1.default.createElement("tr",{className:classnames_1.default(selectorPrefix+"-table-row","odd")},t);d.push(n,o),console.log("rowJSXS",d),console.log("_index",i),i<s.length&&e()}(),d}function renderGridSearchForm(e){for(var r=e.data,t=r.className,a=r.style,l=r.width,n=r.colgroup,o=r.defaultLabelWidth,s=void 0===o?120:o,u=e.layout,i=e.density,r=e.parity,o=void 0!==r&&r,r=new Map([["default","densitydefault"],["middle","densitymiddle"],["small","densitysmall"]]),d=[],p=0;p<n.length;p++)!function(e){var r=n[e];d.push(react_1.default.createElement(adhere_ui_conditionalrender_1.default,{key:e,conditional:"auto"!==r,noMatch:function(){return react_1.default.createElement("col",null)}},function(){return react_1.default.createElement("col",{width:r||s})}))}(p);return react_1.default.createElement("table",{className:classnames_1.default(selectorPrefix+"-table",r.get(i||"default"),o?"parity":"",t||""),style:__assign({width:l||"100%"},a||{})},react_1.default.createElement("colgroup",null,d),react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:"horizontal"===u,noMatch:function(){return renderVertical(e.data)}},function(){return renderHorizontal(e)}))}function TableGridLayout(e){var r=e.data,t=e.className,a=e.style,e=__rest(e,["data","className","style"]);return react_1.default.createElement("div",{className:classnames_1.default(selectorPrefix,t||""),style:a||{}},TableGridLayout.renderGridSearchFormGroup(r,e))}TableGridLayout.renderGridSearchFormGroup=function(e,r){var t={current:0},a=r||{},l=a.bordered,n=void 0!==l&&l,r=a.innerClassName,l=a.innerStyle,o=__rest(a,["bordered","innerClassName","innerStyle"]);return react_1.default.createElement("div",{className:classnames_1.default(n?selectorPrefix+"-border":null,selectorPrefix+"-inner-wrap",r||""),style:l||{}},e.map(function(e,r){return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{key:e.name||r,conditional:0!==r,noMatch:function(){return renderGridSearchForm(__assign({data:e,rowCountRef:t},o))}},function(){return react_1.default.createElement("div",null,renderGridSearchForm(__assign({data:e,rowCountRef:t},o)))})}))},TableGridLayout.Label=function(e){var r=e.className,t=__rest(e,["className"]);return react_1.default.createElement("td",__assign({className:classnames_1.default(selectorPrefix+"-table-row-label",r||"")},t),e.children)},TableGridLayout.Value=function(e){var r=e.className,t=__rest(e,["className"]);return react_1.default.createElement("td",__assign({className:classnames_1.default(selectorPrefix+"-table-row-value",r||"")},t),e.children)},TableGridLayout.defaultProps={data:[],layout:"horizontal",bordered:!1},TableGridLayout.propTypes={className:prop_types_1.default.string,style:prop_types_1.default.object,innerClassName:prop_types_1.default.string,innerStyle:prop_types_1.default.object,bordered:prop_types_1.default.bool,layout:prop_types_1.default.oneOf(["horizontal","vertical"]),density:prop_types_1.default.oneOfType([prop_types_1.default.string,prop_types_1.default.number]),parity:prop_types_1.default.bool,data:prop_types_1.default.arrayOf(prop_types_1.default.shape({className:prop_types_1.default.string,style:prop_types_1.default.object,name:prop_types_1.default.string,width:prop_types_1.default.oneOfType([prop_types_1.default.string,prop_types_1.default.number]),defaultLabelWidth:prop_types_1.default.number,padding:prop_types_1.default.arrayOf(prop_types_1.default.number),colgroup:prop_types_1.default.arrayOf(prop_types_1.default.number).isRequired,columnCount:prop_types_1.default.number.isRequired,data:prop_types_1.default.arrayOf(prop_types_1.default.shape({key:prop_types_1.default.string.isRequired,label:prop_types_1.default.node.isRequired,value:prop_types_1.default.node.isRequired})).isRequired})).isRequired},exports.default=TableGridLayout;
//# sourceMappingURL=tablegridlayout.js.map
