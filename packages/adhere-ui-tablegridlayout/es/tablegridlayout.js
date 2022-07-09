var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var r,a=1,t=arguments.length;a<t;a++)for(var n in r=arguments[a])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,r){var a={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]]);return a};import React from"react";import PropTypes from"prop-types";import classNames from"classnames";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";var selectorPrefix="adhere-ui-tablegridlayout";function renderHorizontal(e){var r=e.data,a=r.columnCount,r=r.data,s=e.rowCountRef;var l=2*a,a=[];a.length=l,a.fill(0);var i=[];r.forEach(function(e){var r=e.label;"require"in e&&e.require&&(r=React.cloneElement(r,__assign(__assign({},r.props),{className:classNames(selectorPrefix+"-table-row-label","require",r.props.className||"")}),r.props.children)),i.push(r),i.push(e.value)});var c=0,p=[];return function e(){for(var r=[],a=0,t=c;t<i.length;t++){var n=i[t];if(c=t,a===l)break;"colSpan"in n.props&&"number"==typeof n.props.colSpan?a+=n.props.colSpan:a+=1,r.push(n)}a<l&&((o=[]).length=l-a,o.fill(0),o.forEach(function(){r.push(React.createElement("td",{className:selectorPrefix+"-table-noborder"}))}));var o=React.createElement("tr",{className:classNames(selectorPrefix+"-table-row",s.current%2==0?"odd":"even")},r);s.current++,p.push(o),c<i.length-1&&e()}(),p}function renderVertical(e){var r=e.columnCount,i=e.data;var c=r,r=[];r.length=c,r.fill(0),i.forEach(function(e){var r=e.label;"require"in e&&e.require&&(e.label=React.cloneElement(r,__assign(__assign({},r.props),{className:r.props.className+" require"}),r.props.children))});var p=0,u=[];return function e(){for(var r=[],a=[],t=0,n=p;n<i.length;n++){var o=i[n];if(p=n,t===c)break;"colSpan"in o.value.props&&"number"==typeof o.value.props.colSpan?t+=o.value.props.colSpan:t+=1,r.push(o.label),a.push(o.value)}t<c&&((l=[]).length=c-t,l.fill(0),l.forEach(function(){r.push(React.createElement("td",{className:selectorPrefix+"-table-noborder"})),a.push(React.createElement("td",{className:selectorPrefix+"-table-noborder"}))}));var s=React.createElement("tr",{className:classNames(selectorPrefix+"-table-row","even")},r),l=React.createElement("tr",{className:classNames(selectorPrefix+"-table-row","odd")},a);u.push(s,l),p<i.length-1&&e()}(),u}function renderGridSearchForm(e){for(var r=e.data,a=r.className,t=r.style,n=r.width,o=r.colgroup,s=r.defaultLabelWidth,l=void 0===s?120:s,i=e.layout,c=e.density,r=e.parity,s=void 0!==r&&r,r=new Map([["default","densitydefault"],["middle","densitymiddle"],["small","densitysmall"]]),p=[],u=0;u<o.length;u++)!function(e){var r=o[e];p.push(React.createElement(ConditionalRender,{key:e,conditional:"auto"!==r,noMatch:function(){return React.createElement("col",null)}},function(){return React.createElement("col",{width:r||l})}))}(u);return React.createElement("table",{className:classNames(selectorPrefix+"-table",r.get(c||"default"),s?"parity":"",a||""),style:__assign({width:n||"100%"},t||{})},React.createElement("colgroup",null,p),React.createElement(ConditionalRender,{conditional:"horizontal"===i,noMatch:function(){return renderVertical(e.data)}},function(){return renderHorizontal(e)}))}function renderGridSearchFormGroup(e,r){var a={current:0},t=r||{},n=t.bordered,o=void 0!==n&&n,r=t.innerClassName,n=t.innerStyle,s=__rest(t,["bordered","innerClassName","innerStyle"]);return React.createElement("div",{className:classNames(o?selectorPrefix+"-bordered":null,selectorPrefix+"-inner-wrap",r||""),style:n||{}},e.map(function(e,r){return React.createElement(ConditionalRender,{key:e.name||r,conditional:0!==r,noMatch:function(){return renderGridSearchForm(__assign({data:e,rowCountRef:a},s))}},function(){return React.createElement("div",null,renderGridSearchForm(__assign({data:e,rowCountRef:a},s)))})}))}var Label=function(e){return React.createElement("td",__assign({className:classNames(selectorPrefix+"-table-row-label",e.className||"")},e),e.children)},Value=function(e){return React.createElement("td",__assign({className:classNames(selectorPrefix+"-table-row-value",e.className||"")},e),e.children)};function TableGridLayout(e){var r=e.data,a=e.className,t=e.style,e=__rest(e,["data","className","style"]);return React.createElement("div",{className:classNames(selectorPrefix,a||""),style:t||{}},renderGridSearchFormGroup(r,e))}TableGridLayout.defaultProps={data:[],layout:"horizontal",bordered:!1},TableGridLayout.propTypes={className:PropTypes.string,style:PropTypes.object,innerClassName:PropTypes.string,innerStyle:PropTypes.object,bordered:PropTypes.bool,layout:PropTypes.oneOf(["horizontal","vertical"]),density:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),parity:PropTypes.bool,data:PropTypes.arrayOf(PropTypes.shape({className:PropTypes.string,style:PropTypes.object,name:PropTypes.string,width:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),defaultLabelWidth:PropTypes.number,padding:PropTypes.arrayOf(PropTypes.number),colgroup:PropTypes.arrayOf(PropTypes.number).isRequired,columnCount:PropTypes.number.isRequired,data:PropTypes.arrayOf(PropTypes.shape({key:PropTypes.string.isRequired,label:PropTypes.node.isRequired,value:PropTypes.node.isRequired})).isRequired})).isRequired};export default TableGridLayout;export{renderGridSearchFormGroup,Label,Value};
//# sourceMappingURL=tablegridlayout.js.map
