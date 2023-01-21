"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var l in r=arguments[t])Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,r){var t={};for(l in e)Object.prototype.hasOwnProperty.call(e,l)&&r.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,l=Object.getOwnPropertySymbols(e);a<l.length;a++)r.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(t[l[a]]=e[l[a]]);return t},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),prop_types_1=__importDefault(require("prop-types")),react_1=__importDefault(require("react")),adhere_ui_conditionalrender_1=__importDefault(require("@baifendian/adhere-ui-conditionalrender")),selectorPrefix="adhere-ui-tablegridlayout",renderHorizontal=function(e){var r=e.data,t=r.columnCount,r=r.data,o=e.rowCountRef;var s=[],u=2*t,i=[],d=((r||[]).forEach(function(e){var r=e.label;"require"in e&&e.require&&(r=react_1.default.cloneElement(r,__assign(__assign({},r.props),{className:classnames_1.default(selectorPrefix+"-table-row-label","require",r.props.className||"")}),r.props.children)),i.push(r),i.push(e.value)}),0),c=[];return function e(){for(var r=d,t=[],a=0;d<i.length;){var l=i[d];if(a===u)break;"colSpan"in l.props&&"number"==typeof l.props.colSpan?a+=l.props.colSpan:a+=1,t.push(l),d++}a<u&&Array.from({length:u-a}).fill(0).forEach(function(){t.push(react_1.default.createElement("td",{className:selectorPrefix+"-table-noborder"}))});var n=react_1.default.createElement("tr",{className:classnames_1.default(selectorPrefix+"-table-row",o.current%2==0?"odd":"even")},t),n=(o.current++,c.push(n),d-1);s.push({startIndex:r/2,endIndex:(n-1)/2}),d<i.length&&e()}(),{element:c,detail:s}},renderVertical=function(e,u){var r=e.columnCount,i=e.data;var d=[],c=r,p=((i||[]).forEach(function(e){var r=e.label;"require"in e&&e.require&&(e.label=react_1.default.cloneElement(r,__assign(__assign({},r.props),{className:classnames_1.default(selectorPrefix+"-table-row-label","require",r.props.className||"")}),r.props.children))}),0),_=[];return function e(){for(var r=[],t=[],a=0,l=p;p<(i||[]).length;){var n=(i||[])[p];if(a===c)break;"colSpan"in n.value.props&&"number"==typeof n.value.props.colSpan?a+=n.value.props.colSpan:a+=1,r.push(n.label),t.push(n.value),p++}a<c&&Array.from({length:c-a}).fill(0).forEach(function(){r.push(react_1.default.createElement("td",{className:selectorPrefix+"-table-noborder"})),t.push(react_1.default.createElement("td",{className:selectorPrefix+"-table-noborder"}))});var o=react_1.default.createElement("tr",{className:classnames_1.default(selectorPrefix+"-table-row","even")},r),s=react_1.default.createElement("tr",{className:classnames_1.default(selectorPrefix+"-table-row","odd")},t),o=(_.push(o,s),u.current+=2,p-1);d.push({startIndex:l,endIndex:o}),p<(i||[]).length&&e()}(),{element:_,detail:d}},renderGridSearchForm=function(e){for(var r=e.data,t=r.className,a=r.style,l=r.width,n=r.colgroup,r=r.defaultLabelWidth,o=void 0===r?120:r,r=e.layout,s=e.density,u=e.parity,u=void 0!==u&&u,i=e.rowCountRef,d=new Map([["default","densitydefault"],["middle","densitymiddle"],["small","densitysmall"]]),c=[],p=0;p<(n||[]).length;p++)!function(e){var r=(n||[])[e];c.push(react_1.default.createElement(adhere_ui_conditionalrender_1.default,{key:e,conditional:"auto"!==r,noMatch:function(){return react_1.default.createElement("col",null)}},function(){return react_1.default.createElement("col",{width:r||o})}))}(p);return react_1.default.createElement("table",{className:classnames_1.default(selectorPrefix+"-table",d.get(s||"default"),u?"parity":"",t||""),style:__assign({width:l||"100%"},a||{})},react_1.default.createElement("colgroup",null,c),react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:"horizontal"===r,noMatch:function(){return renderVertical(e.data,i).element}},function(){return renderHorizontal(e).element}))};function TableGridLayout(e){var r=e.data,t=e.className,a=e.style,e=__rest(e,["data","className","style"]);return react_1.default.createElement("div",{className:classnames_1.default(selectorPrefix,t||""),style:a||{}},TableGridLayout.renderGridSearchFormGroup(r,e))}TableGridLayout.Label=function(e){var r=e.className,t=__rest(e,["className"]);return react_1.default.createElement("td",__assign({className:classnames_1.default(selectorPrefix+"-table-row-label",r||"")},t),e.children)},TableGridLayout.Value=function(e){var r=e.className,t=__rest(e,["className"]);return react_1.default.createElement("td",__assign({className:classnames_1.default(selectorPrefix+"-table-row-value",r||"")},t),e.children)},TableGridLayout.renderGridSearchFormGroup=function(e,r){var t={current:0},r=r||{},a=r.bordered,a=void 0!==a&&a,l=r.innerClassName,n=r.innerStyle,o=__rest(r,["bordered","innerClassName","innerStyle"]);return react_1.default.createElement("div",{className:classnames_1.default(a?selectorPrefix+"-border":null,selectorPrefix+"-inner-wrap",l||""),style:n||{}},(e||[]).map(function(e,r){return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{key:e.name||r,conditional:0!==r,noMatch:function(){return renderGridSearchForm(__assign({data:e,rowCountRef:t},o))}},function(){return react_1.default.createElement("div",null,renderGridSearchForm(__assign({data:e,rowCountRef:t},o)))})}))},TableGridLayout.getRenderDetail=function(e,l){var r=l||{},n=(r.bordered,r.innerClassName,r.innerStyle,__rest(r,["bordered","innerClassName","innerStyle"])),o={rowCount:0,layout:l.layout,detail:[]};return e.forEach(function(e){var r={current:0},t=__assign({data:e,rowCountRef:r},n),a=[],a=("horizontal"===l.layout?renderHorizontal(t):renderVertical(t.data,r)).detail;o.rowCount+=r.current,o.detail.push({name:e.name,rowCount:"horizontal"===l.layout?r.current:r.current/2,detail:a})}),o},TableGridLayout.defaultProps={data:[],layout:"horizontal",bordered:!1},TableGridLayout.propTypes={className:prop_types_1.default.string,style:prop_types_1.default.object,innerClassName:prop_types_1.default.string,innerStyle:prop_types_1.default.object,bordered:prop_types_1.default.bool,layout:prop_types_1.default.oneOf(["horizontal","vertical"]),density:prop_types_1.default.oneOfType([prop_types_1.default.string,prop_types_1.default.number]),parity:prop_types_1.default.bool,data:prop_types_1.default.arrayOf(prop_types_1.default.shape({className:prop_types_1.default.string,style:prop_types_1.default.object,name:prop_types_1.default.string,width:prop_types_1.default.oneOfType([prop_types_1.default.string,prop_types_1.default.number]),defaultLabelWidth:prop_types_1.default.number,padding:prop_types_1.default.arrayOf(prop_types_1.default.number),colgroup:prop_types_1.default.arrayOf(prop_types_1.default.number).isRequired,columnCount:prop_types_1.default.number.isRequired,data:prop_types_1.default.arrayOf(prop_types_1.default.shape({key:prop_types_1.default.string.isRequired,label:prop_types_1.default.node.isRequired,value:prop_types_1.default.node.isRequired})).isRequired})).isRequired},exports.default=TableGridLayout;
//# sourceMappingURL=tablegridlayout.js.map
