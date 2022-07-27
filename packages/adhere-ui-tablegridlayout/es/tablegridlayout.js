var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var r,a=1,t=arguments.length;a<t;a++)for(var n in r=arguments[a])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,r){var a={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]]);return a};import React from"react";import PropTypes from"prop-types";import classNames from"classnames";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";var selectorPrefix="adhere-ui-tablegridlayout";function renderHorizontal(e){var r=e.data,a=r.columnCount,r=r.data,s=e.rowCountRef;var o=2*a,a=[];a.length=o,a.fill(0);var l=[];r.forEach(function(e){var r=e.label;"require"in e&&e.require&&(r=React.cloneElement(r,__assign(__assign({},r.props),{className:classNames(selectorPrefix+"-table-row-label","require",r.props.className||"")}),r.props.children)),l.push(r),l.push(e.value)});var i=0,c=[];return function e(){for(var r=[],a=0;i<l.length;){var t=l[i];if(a===o)break;"colSpan"in t.props&&"number"==typeof t.props.colSpan?a+=t.props.colSpan:a+=1,r.push(t),i++}a<o&&((n=[]).length=o-a,n.fill(0),n.forEach(function(){r.push(React.createElement("td",{className:selectorPrefix+"-table-noborder"}))}));var n=React.createElement("tr",{className:classNames(selectorPrefix+"-table-row",s.current%2==0?"odd":"even")},r);s.current++,c.push(n),i<l.length&&e()}(),c}function renderVertical(e){var r=e.columnCount,l=e.data;var i=r,r=[];r.length=i,r.fill(0),l.forEach(function(e){var r=e.label;"require"in e&&e.require&&(e.label=React.cloneElement(r,__assign(__assign({},r.props),{className:classNames(selectorPrefix+"-table-row-label","require",r.props.className||"")}),r.props.children))});var c=0,p=[];return function e(){for(var r=[],a=[],t=0;c<l.length;){var n=l[c];if(t===i)break;"colSpan"in n.value.props&&"number"==typeof n.value.props.colSpan?t+=n.value.props.colSpan:t+=1,r.push(n.label),a.push(n.value),c++}t<i&&((o=[]).length=i-t,o.fill(0),o.forEach(function(){r.push(React.createElement("td",{className:selectorPrefix+"-table-noborder"})),a.push(React.createElement("td",{className:selectorPrefix+"-table-noborder"}))}));var s=React.createElement("tr",{className:classNames(selectorPrefix+"-table-row","even")},r),o=React.createElement("tr",{className:classNames(selectorPrefix+"-table-row","odd")},a);p.push(s,o),c<l.length&&e()}(),p}function renderGridSearchForm(e){for(var r=e.data,a=r.className,t=r.style,n=r.width,s=r.colgroup,o=r.defaultLabelWidth,l=void 0===o?120:o,i=e.layout,c=e.density,r=e.parity,o=void 0!==r&&r,r=new Map([["default","densitydefault"],["middle","densitymiddle"],["small","densitysmall"]]),p=[],u=0;u<s.length;u++)!function(e){var r=s[e];p.push(React.createElement(ConditionalRender,{key:e,conditional:"auto"!==r,noMatch:function(){return React.createElement("col",null)}},function(){return React.createElement("col",{width:r||l})}))}(u);return React.createElement("table",{className:classNames(selectorPrefix+"-table",r.get(c||"default"),o?"parity":"",a||""),style:__assign({width:n||"100%"},t||{})},React.createElement("colgroup",null,p),React.createElement(ConditionalRender,{conditional:"horizontal"===i,noMatch:function(){return renderVertical(e.data)}},function(){return renderHorizontal(e)}))}function TableGridLayout(e){var r=e.data,a=e.className,t=e.style,e=__rest(e,["data","className","style"]);return React.createElement("div",{className:classNames(selectorPrefix,a||""),style:t||{}},TableGridLayout.renderGridSearchFormGroup(r,e))}TableGridLayout.renderGridSearchFormGroup=function(e,r){var a={current:0},t=r||{},n=t.bordered,s=void 0!==n&&n,r=t.innerClassName,n=t.innerStyle,o=__rest(t,["bordered","innerClassName","innerStyle"]);return React.createElement("div",{className:classNames(s?selectorPrefix+"-border":null,selectorPrefix+"-inner-wrap",r||""),style:n||{}},e.map(function(e,r){return React.createElement(ConditionalRender,{key:e.name||r,conditional:0!==r,noMatch:function(){return renderGridSearchForm(__assign({data:e,rowCountRef:a},o))}},function(){return React.createElement("div",null,renderGridSearchForm(__assign({data:e,rowCountRef:a},o)))})}))},TableGridLayout.Label=function(e){var r=e.className,a=__rest(e,["className"]);return React.createElement("td",__assign({className:classNames(selectorPrefix+"-table-row-label",r||"")},a),e.children)},TableGridLayout.Value=function(e){var r=e.className,a=__rest(e,["className"]);return React.createElement("td",__assign({className:classNames(selectorPrefix+"-table-row-value",r||"")},a),e.children)},TableGridLayout.defaultProps={data:[],layout:"horizontal",bordered:!1},TableGridLayout.propTypes={className:PropTypes.string,style:PropTypes.object,innerClassName:PropTypes.string,innerStyle:PropTypes.object,bordered:PropTypes.bool,layout:PropTypes.oneOf(["horizontal","vertical"]),density:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),parity:PropTypes.bool,data:PropTypes.arrayOf(PropTypes.shape({className:PropTypes.string,style:PropTypes.object,name:PropTypes.string,width:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),defaultLabelWidth:PropTypes.number,padding:PropTypes.arrayOf(PropTypes.number),colgroup:PropTypes.arrayOf(PropTypes.number).isRequired,columnCount:PropTypes.number.isRequired,data:PropTypes.arrayOf(PropTypes.shape({key:PropTypes.string.isRequired,label:PropTypes.node.isRequired,value:PropTypes.node.isRequired})).isRequired})).isRequired};export default TableGridLayout;
//# sourceMappingURL=tablegridlayout.js.map
