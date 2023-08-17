var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var r,a=1,t=arguments.length;a<t;a++)for(var n in r=arguments[a])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,r){var a={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]]);return a};import classNames from"classnames";import PropTypes from"prop-types";import React,{memo,useMemo}from"react";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";var selectorPrefix="adhere-ui-tablegridlayout",renderHorizontal=function(e){var r=e.data,a=r.columnCount,r=r.data,l=e.rowCountRef;var s=[],c=2*a,i=[],u=((r||[]).forEach(function(e){var r,a=e.label;"require"in e&&e.require&&(a=React.cloneElement(a,__assign(__assign({},a.props),{className:classNames("".concat(selectorPrefix,"-table-row-label"),"require",null!=(r=a.props.className)?r:"")}),a.props.children)),i.push(a),i.push(e.value)}),0),p=[];return function e(){for(var r=u,a=[],t=0;u<i.length;){var n=i[u];if(t===c)break;"colSpan"in n.props&&"number"==typeof n.props.colSpan?t+=n.props.colSpan:t+=1,a.push(n),u++}t<c&&Array.from({length:c-t}).fill(0).forEach(function(){a.push(React.createElement("td",{className:"".concat(selectorPrefix,"-table-noborder")}))});var o=React.createElement("tr",{className:classNames("".concat(selectorPrefix,"-table-row"),l.current%2==0?"odd":"even")},a),o=(l.current++,p.push(o),u-1);s.push({startIndex:r/2,endIndex:(o-1)/2}),u<i.length&&e()}(),{element:p,detail:s}},renderVertical=function(e,c){var r=e.columnCount,i=e.data;var u=[],p=r,d=((i||[]).forEach(function(e){var r=e.label;"require"in e&&e.require&&(e.label=React.cloneElement(r,__assign(__assign({},r.props),{className:classNames("".concat(selectorPrefix,"-table-row-label"),"require",null!=(e=r.props.className)?e:"")}),r.props.children))}),0),m=[];return function e(){for(var r=[],a=[],t=0,n=d;d<(i||[]).length;){var o=(i||[])[d];if(t===p)break;"colSpan"in o.value.props&&"number"==typeof o.value.props.colSpan?t+=o.value.props.colSpan:t+=1,r.push(o.label),a.push(o.value),d++}t<p&&Array.from({length:p-t}).fill(0).forEach(function(){r.push(React.createElement("td",{className:"".concat(selectorPrefix,"-table-noborder")})),a.push(React.createElement("td",{className:"".concat(selectorPrefix,"-table-noborder")}))});var l=React.createElement("tr",{className:classNames("".concat(selectorPrefix,"-table-row"),"even")},r),s=React.createElement("tr",{className:classNames("".concat(selectorPrefix,"-table-row"),"odd")},a),l=(m.push(l,s),c.current+=2,d-1);u.push({startIndex:n,endIndex:l}),d<(i||[]).length&&e()}(),{element:m,detail:u}},renderGridSearchForm=function(e){for(var r=e.data,a=r.className,t=r.style,n=r.width,o=r.colgroup,r=r.defaultLabelWidth,l=void 0===r?120:r,r=e.layout,s=e.density,c=e.parity,c=void 0!==c&&c,i=e.rowCountRef,u=new Map([["default","densitydefault"],["middle","densitymiddle"],["small","densitysmall"]]),p=[],d=0;d<(o||[]).length;d++)!function(e){var r=(o||[])[e];p.push(React.createElement(ConditionalRender,{key:e,conditional:"auto"!==r,noMatch:function(){return React.createElement("col",null)}},function(){return React.createElement("col",{width:r||l})}))}(d);return React.createElement("table",{className:classNames("".concat(selectorPrefix,"-table"),"".concat(selectorPrefix,"-table-").concat(r),u.get(s||"default"),{parity:c},null!=a?a:""),style:__assign({width:n||"100%"},null!=t?t:{})},React.createElement("colgroup",null,p),React.createElement(ConditionalRender,{conditional:"horizontal"===r,noMatch:function(){return renderVertical(e.data,i).element}},function(){return renderHorizontal(e).element}))},TableGridLayout=function(e){var r=e.data,a=e.className,t=e.style,e=__rest(e,["data","className","style"]),n=useMemo(function(){return(null!=r?r:[]).map(function(e){var r;return __assign(__assign({},e),{data:null==(r=null==(e=e.data)?void 0:e.filter)?void 0:r.call(e,function(e){return!("show"in e&&!e.show)})})}).filter(function(e){return!(null==(e=null==e?void 0:e.data)||!e.length)})},[r,a,t,e]);return React.createElement("div",{className:classNames(selectorPrefix,null!=a?a:""),style:null!=t?t:{}},TableGridLayoutWrap.renderGridSearchFormGroup(n,e))},TableGridLayoutWrap=memo(TableGridLayout);TableGridLayoutWrap.Label=function(e){var r=e.className,a=__rest(e,["className"]);return React.createElement("td",__assign({className:classNames("".concat(selectorPrefix,"-table-row-label"),null!=r?r:"")},a),e.children)},TableGridLayoutWrap.Value=function(e){var r=e.className,a=__rest(e,["className"]);return React.createElement("td",__assign({className:classNames("".concat(selectorPrefix,"-table-row-value"),null!=r?r:"")},a),e.children)},TableGridLayoutWrap.renderGridSearchFormGroup=function(e,r){var a={current:0},r=null!=r?r:{},t=r.bordered,t=void 0!==t&&t,n=r.innerClassName,o=r.innerStyle,l=__rest(r,["bordered","innerClassName","innerStyle"]);return React.createElement("div",{className:classNames("".concat(selectorPrefix,"-inner-wrap"),((r={})["".concat(selectorPrefix,"-border")]=t,r),null!=n?n:""),style:null!=o?o:{}},(e||[]).map(function(e,r){return React.createElement(ConditionalRender,{key:e.name||r,conditional:0!==r,noMatch:function(){return renderGridSearchForm(__assign({data:e,rowCountRef:a},l))}},function(){return React.createElement("div",null,renderGridSearchForm(__assign({data:e,rowCountRef:a},l)))})}))},TableGridLayoutWrap.getRenderDetail=function(e,n){var r=null!=n?n:{},o=(r.bordered,r.innerClassName,r.innerStyle,__rest(r,["bordered","innerClassName","innerStyle"])),l={rowCount:0,layout:n.layout,detail:[]};return e.forEach(function(e){var r={current:0},a=__assign({data:e,rowCountRef:r},o),t=[],t=("horizontal"===n.layout?renderHorizontal(a):renderVertical(a.data,r)).detail;l.rowCount+=r.current,l.detail.push({name:e.name,rowCount:"horizontal"===n.layout?r.current:r.current/2,detail:t})}),l},TableGridLayoutWrap.defaultProps={data:[],layout:"horizontal",bordered:!1},TableGridLayoutWrap.propTypes={className:PropTypes.string,style:PropTypes.object,innerClassName:PropTypes.string,innerStyle:PropTypes.object,bordered:PropTypes.bool,layout:PropTypes.oneOf(["horizontal","vertical"]),density:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),parity:PropTypes.bool,data:PropTypes.arrayOf(PropTypes.shape({className:PropTypes.string,style:PropTypes.object,name:PropTypes.string,width:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),defaultLabelWidth:PropTypes.number,padding:PropTypes.arrayOf(PropTypes.number),colgroup:PropTypes.arrayOf(PropTypes.number).isRequired,columnCount:PropTypes.number.isRequired,data:PropTypes.arrayOf(PropTypes.shape({key:PropTypes.string.isRequired,label:PropTypes.node.isRequired,value:PropTypes.node.isRequired,show:PropTypes.bool})).isRequired})).isRequired};export default TableGridLayoutWrap;
//# sourceMappingURL=tablegridlayout.js.map
