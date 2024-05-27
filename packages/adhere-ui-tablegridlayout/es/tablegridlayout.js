var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var r,a=1,t=arguments.length;a<t;a++)for(var n in r=arguments[a])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)},__rest=this&&this.__rest||function(e,r){var a={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]]);return a};import classNames from"classnames";import PropTypes from"prop-types";import React,{memo,useContext,useMemo}from"react";import ConditionalRender from"@baifendian/adhere-ui-conditionalrender";import ConfigProvider from"@baifendian/adhere-ui-configprovider";import Util from"@baifendian/adhere-util";import Label from"./Label";import Value from"./Value";var selectorPrefix="adhere-ui-table-grid-layout",renderHorizontal=function(e){var r=e.data,a=r.columnCount,r=r.data,l=e.rowCountRef;var i=[],s=2*a,c=[],u=((r||[]).forEach(function(e){var r,a=e.label;"require"in e&&e.require&&(a=React.cloneElement(a,__assign(__assign({},a.props),{className:classNames("require",null!=(r=a.props.className)?r:"")}),a.props.children)),c.push(a),c.push(e.value)}),0),d=[];return function e(){for(var r=u,a=[],t=0;u<c.length;){var n=c[u];if(t===s)break;"colSpan"in n.props&&"number"==typeof n.props.colSpan?t+=n.props.colSpan:t+=1,a.push(n),u++}t<s&&Array.from({length:s-t}).fill(0).forEach(function(){a.push(React.createElement("td",{className:"".concat(selectorPrefix,"-table-noborder")}))});var o=React.createElement("tr",{className:classNames("".concat(selectorPrefix,"-table-row"),l.current%2==0?"odd":"even")},a),o=(l.current++,d.push(o),u-1);i.push({startIndex:r/2,endIndex:(o-1)/2}),u<c.length&&e()}(),{element:d,detail:i}},renderVertical=function(e,s){var r=e.columnCount,c=e.data;var u=[],d=r,p=((c||[]).forEach(function(e){var r=e.label;"require"in e&&e.require&&(e.label=React.cloneElement(r,__assign(__assign({},r.props),{className:classNames("require",null!=(e=r.props.className)?e:"")}),r.props.children))}),0),m=[];return function e(){for(var r=[],a=[],t=0,n=p;p<(c||[]).length;){var o=(c||[])[p];if(t===d)break;"colSpan"in o.value.props&&"number"==typeof o.value.props.colSpan?t+=o.value.props.colSpan:t+=1,r.push(o.label),a.push(o.value),p++}t<d&&Array.from({length:d-t}).fill(0).forEach(function(){r.push(React.createElement("td",{className:"".concat(selectorPrefix,"-table-noborder")})),a.push(React.createElement("td",{className:"".concat(selectorPrefix,"-table-noborder")}))});var l=React.createElement("tr",{className:classNames("".concat(selectorPrefix,"-table-row"),"even")},r),i=React.createElement("tr",{className:classNames("".concat(selectorPrefix,"-table-row"),"odd")},a),l=(m.push(l,i),s.current+=2,p-1);u.push({startIndex:n,endIndex:l}),p<(c||[]).length&&e()}(),{element:m,detail:u}},renderGridSearchForm=function(e){for(var r=e.data,a=r.className,t=r.style,n=r.width,o=r.colgroup,r=r.defaultLabelWidth,r=void 0===r?120:r,l=e.layout,i=e.density,s=e.parity,s=void 0!==s&&s,c=e.rowCountRef,u=e.media,d=void 0===u?{isUseMedia:!1,designWidth:192}:u,u=n,p=(d.isUseMedia&&(u=Util.isNumber(n)?Util.pxToRem(n,d.designWidth):n),r),n=(d.isUseMedia&&(p=Util.isNumber(r)?Util.pxToRem(r,d.designWidth):r),new Map([["default","densitydefault"],["middle","densitymiddle"],["small","densitysmall"]])),m=[],f=0;f<(o||[]).length;f++)!function(e){var r=(o||[])[e],a=r;d.isUseMedia&&(a=Util.isNumber(r)?Util.pxToRem(r,d.designWidth):r),m.push(React.createElement(ConditionalRender,{key:e,conditional:"auto"!==a,noMatch:function(){return React.createElement("col",null)}},function(){return React.createElement("col",{style:{width:null!=a?a:p}})}))}(f);return React.createElement("table",{className:classNames("".concat(selectorPrefix,"-table"),"".concat(selectorPrefix,"-table-").concat(l),n.get(i||"default"),{parity:s},null!=a?a:""),style:__assign({width:u||"100%"},null!=t?t:{})},React.createElement("colgroup",null,m),React.createElement(ConditionalRender,{conditional:"horizontal"===l,noMatch:function(){return renderVertical(e.data,c).element}},function(){return renderHorizontal(e).element}))};function renderGridSearchFormGroup(e,r,a){var t={current:0},r=null!=r?r:{},n=r.bordered,n=void 0!==n&&n,o=r.innerClassName,l=r.innerStyle,i=__rest(r,["bordered","innerClassName","innerStyle"]);return React.createElement("div",{className:classNames("".concat(selectorPrefix,"-inner-wrap"),((r={})["".concat(selectorPrefix,"-border")]=n,r),null!=o?o:""),style:null!=l?l:{}},(e||[]).map(function(e,r){return React.createElement(ConditionalRender,{key:e.name||r,conditional:0!==r,noMatch:function(){return renderGridSearchForm(__assign({data:e,rowCountRef:t,media:a},i))}},function(){return React.createElement("div",null,renderGridSearchForm(__assign({data:e,rowCountRef:t,media:a},i)))})}))}function getRenderDetail(e,n){var r=null!=n?n:{},o=(r.bordered,r.innerClassName,r.innerStyle,__rest(r,["bordered","innerClassName","innerStyle"])),l={rowCount:0,layout:n.layout,detail:[]};return e.forEach(function(e){var r={current:0},a=__assign({data:e,rowCountRef:r},o),t=[],t=("horizontal"===n.layout?renderHorizontal(a):renderVertical(a.data,r)).detail;l.rowCount+=r.current,l.detail.push({name:e.name,rowCount:"horizontal"===n.layout?r.current:r.current/2,detail:t})}),l}var InternalTableGridLayout=memo(function(e){var r=e.data,a=e.className,t=e.style,e=__rest(e,["data","className","style"]),n=useMemo(function(){return(null!=r?r:[]).map(function(e){var r;return __assign(__assign({},e),{data:null==(r=null==(e=e.data)?void 0:e.filter)?void 0:r.call(e,function(e){return!("show"in e&&!e.show)})})}).filter(function(e){return!(null==(e=null==e?void 0:e.data)||!e.length)})},[r,a,t,e]),o=useContext(ConfigProvider.Context);return React.createElement("div",{className:classNames(selectorPrefix,null!=a?a:""),style:null!=t?t:{}},renderGridSearchFormGroup(n,e,o.media))}),TableGridLayout=InternalTableGridLayout;TableGridLayout.displayName="TableGridLayout",TableGridLayout.Label=Label,TableGridLayout.Value=Value,TableGridLayout.renderGridSearchFormGroup=renderGridSearchFormGroup,TableGridLayout.getRenderDetail=getRenderDetail,TableGridLayout.defaultProps={data:[],layout:"horizontal",bordered:!1},TableGridLayout.propTypes={className:PropTypes.string,style:PropTypes.object,innerClassName:PropTypes.string,innerStyle:PropTypes.object,bordered:PropTypes.bool,layout:PropTypes.oneOf(["horizontal","vertical"]),density:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),parity:PropTypes.bool,data:PropTypes.arrayOf(PropTypes.shape({className:PropTypes.string,style:PropTypes.object,name:PropTypes.string,width:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),defaultLabelWidth:PropTypes.number,padding:PropTypes.arrayOf(PropTypes.number),colgroup:PropTypes.arrayOf(PropTypes.number).isRequired,columnCount:PropTypes.number.isRequired,data:PropTypes.arrayOf(PropTypes.shape({key:PropTypes.string.isRequired,label:PropTypes.node.isRequired,value:PropTypes.node.isRequired,show:PropTypes.bool})).isRequired})).isRequired};export default TableGridLayout;export{selectorPrefix};
//# sourceMappingURL=TableGridLayout.js.map
