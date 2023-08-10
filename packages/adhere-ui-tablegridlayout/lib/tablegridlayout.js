"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var l in t=arguments[r])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var r={};for(l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(r[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,l=Object.getOwnPropertySymbols(e);a<l.length;a++)t.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(r[l[a]]=e[l[a]]);return r},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},classnames_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("classnames"))),prop_types_1=__importDefault(require("prop-types")),react_1=__importDefault(require("react")),adhere_ui_conditionalrender_1=__importDefault(require("@baifendian/adhere-ui-conditionalrender")),selectorPrefix="adhere-ui-tablegridlayout",renderHorizontal=function(e){var t=e.data,r=t.columnCount,t=t.data,o=e.rowCountRef;var s=[],u=2*r,c=[],i=((t||[]).forEach(function(e){var t,r=e.label;"require"in e&&e.require&&(r=react_1.default.cloneElement(r,__assign(__assign({},r.props),{className:(0,classnames_1.default)("".concat(selectorPrefix,"-table-row-label"),"require",null!=(t=r.props.className)?t:"")}),r.props.children)),c.push(r),c.push(e.value)}),0),d=[];return function e(){for(var t=i,r=[],a=0;i<c.length;){var l=c[i];if(a===u)break;"colSpan"in l.props&&"number"==typeof l.props.colSpan?a+=l.props.colSpan:a+=1,r.push(l),i++}a<u&&Array.from({length:u-a}).fill(0).forEach(function(){r.push(react_1.default.createElement("td",{className:"".concat(selectorPrefix,"-table-noborder")}))});var n=react_1.default.createElement("tr",{className:(0,classnames_1.default)("".concat(selectorPrefix,"-table-row"),o.current%2==0?"odd":"even")},r),n=(o.current++,d.push(n),i-1);s.push({startIndex:t/2,endIndex:(n-1)/2}),i<c.length&&e()}(),{element:d,detail:s}},renderVertical=function(e,u){var t=e.columnCount,c=e.data;var i=[],d=t,p=((c||[]).forEach(function(e){var t=e.label;"require"in e&&e.require&&(e.label=react_1.default.cloneElement(t,__assign(__assign({},t.props),{className:(0,classnames_1.default)("".concat(selectorPrefix,"-table-row-label"),"require",null!=(e=t.props.className)?e:"")}),t.props.children))}),0),_=[];return function e(){for(var t=[],r=[],a=0,l=p;p<(c||[]).length;){var n=(c||[])[p];if(a===d)break;"colSpan"in n.value.props&&"number"==typeof n.value.props.colSpan?a+=n.value.props.colSpan:a+=1,t.push(n.label),r.push(n.value),p++}a<d&&Array.from({length:d-a}).fill(0).forEach(function(){t.push(react_1.default.createElement("td",{className:"".concat(selectorPrefix,"-table-noborder")})),r.push(react_1.default.createElement("td",{className:"".concat(selectorPrefix,"-table-noborder")}))});var o=react_1.default.createElement("tr",{className:(0,classnames_1.default)("".concat(selectorPrefix,"-table-row"),"even")},t),s=react_1.default.createElement("tr",{className:(0,classnames_1.default)("".concat(selectorPrefix,"-table-row"),"odd")},r),o=(_.push(o,s),u.current+=2,p-1);i.push({startIndex:l,endIndex:o}),p<(c||[]).length&&e()}(),{element:_,detail:i}},renderGridSearchForm=function(e){for(var t=e.data,r=t.className,a=t.style,l=t.width,n=t.colgroup,t=t.defaultLabelWidth,o=void 0===t?120:t,t=e.layout,s=e.density,u=e.parity,u=void 0!==u&&u,c=e.rowCountRef,i=new Map([["default","densitydefault"],["middle","densitymiddle"],["small","densitysmall"]]),d=[],p=0;p<(n||[]).length;p++)!function(e){var t=(n||[])[e];d.push(react_1.default.createElement(adhere_ui_conditionalrender_1.default,{key:e,conditional:"auto"!==t,noMatch:function(){return react_1.default.createElement("col",null)}},function(){return react_1.default.createElement("col",{width:t||o})}))}(p);return react_1.default.createElement("table",{className:(0,classnames_1.default)("".concat(selectorPrefix,"-table"),"".concat(selectorPrefix,"-table-").concat(t),i.get(s||"default"),{parity:u},null!=r?r:""),style:__assign({width:l||"100%"},null!=a?a:{})},react_1.default.createElement("colgroup",null,d),react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:"horizontal"===t,noMatch:function(){return renderVertical(e.data,c).element}},function(){return renderHorizontal(e).element}))};function TableGridLayout(e){var t=e.data,r=e.className,a=e.style,e=__rest(e,["data","className","style"]);return react_1.default.createElement("div",{className:(0,classnames_1.default)(selectorPrefix,null!=r?r:""),style:null!=a?a:{}},TableGridLayout.renderGridSearchFormGroup(t,e))}TableGridLayout.Label=function(e){var t=e.className,r=__rest(e,["className"]);return react_1.default.createElement("td",__assign({className:(0,classnames_1.default)("".concat(selectorPrefix,"-table-row-label"),null!=t?t:"")},r),e.children)},TableGridLayout.Value=function(e){var t=e.className,r=__rest(e,["className"]);return react_1.default.createElement("td",__assign({className:(0,classnames_1.default)("".concat(selectorPrefix,"-table-row-value"),null!=t?t:"")},r),e.children)},TableGridLayout.renderGridSearchFormGroup=function(e,t){var r={current:0},t=null!=t?t:{},a=t.bordered,a=void 0!==a&&a,l=t.innerClassName,n=t.innerStyle,o=__rest(t,["bordered","innerClassName","innerStyle"]);return react_1.default.createElement("div",{className:(0,classnames_1.default)(a?"".concat(selectorPrefix,"-border"):null,"".concat(selectorPrefix,"-inner-wrap"),null!=l?l:""),style:null!=n?n:{}},(e||[]).map(function(e,t){return react_1.default.createElement(adhere_ui_conditionalrender_1.default,{key:e.name||t,conditional:0!==t,noMatch:function(){return renderGridSearchForm(__assign({data:e,rowCountRef:r},o))}},function(){return react_1.default.createElement("div",null,renderGridSearchForm(__assign({data:e,rowCountRef:r},o)))})}))},TableGridLayout.getRenderDetail=function(e,l){var t=null!=l?l:{},n=(t.bordered,t.innerClassName,t.innerStyle,__rest(t,["bordered","innerClassName","innerStyle"])),o={rowCount:0,layout:l.layout,detail:[]};return e.forEach(function(e){var t={current:0},r=__assign({data:e,rowCountRef:t},n),a=[],a=("horizontal"===l.layout?renderHorizontal(r):renderVertical(r.data,t)).detail;o.rowCount+=t.current,o.detail.push({name:e.name,rowCount:"horizontal"===l.layout?t.current:t.current/2,detail:a})}),o},TableGridLayout.defaultProps={data:[],layout:"horizontal",bordered:!1},TableGridLayout.propTypes={className:prop_types_1.default.string,style:prop_types_1.default.object,innerClassName:prop_types_1.default.string,innerStyle:prop_types_1.default.object,bordered:prop_types_1.default.bool,layout:prop_types_1.default.oneOf(["horizontal","vertical"]),density:prop_types_1.default.oneOfType([prop_types_1.default.string,prop_types_1.default.number]),parity:prop_types_1.default.bool,data:prop_types_1.default.arrayOf(prop_types_1.default.shape({className:prop_types_1.default.string,style:prop_types_1.default.object,name:prop_types_1.default.string,width:prop_types_1.default.oneOfType([prop_types_1.default.string,prop_types_1.default.number]),defaultLabelWidth:prop_types_1.default.number,padding:prop_types_1.default.arrayOf(prop_types_1.default.number),colgroup:prop_types_1.default.arrayOf(prop_types_1.default.number).isRequired,columnCount:prop_types_1.default.number.isRequired,data:prop_types_1.default.arrayOf(prop_types_1.default.shape({key:prop_types_1.default.string.isRequired,label:prop_types_1.default.node.isRequired,value:prop_types_1.default.node.isRequired})).isRequired})).isRequired},exports.default=TableGridLayout;
//# sourceMappingURL=tablegridlayout.js.map
