var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(o){for(var r,e=1,n=arguments.length;e<n;e++)for(var l in r=arguments[e])Object.prototype.hasOwnProperty.call(r,l)&&(o[l]=r[l]);return o}).apply(this,arguments)};import classNames from"classnames";import React,{useContext,useRef}from"react";import{useDrag,useDrop}from"react-dnd";import{SearchTableContext,selectorPrefix}from"../../../SearchTable";import{isSameLevel}from"../../../util";var type="DraggableBodyRow",DragSortRow=function(o){var r,e,n=o.rowIndex,l=o.rowConfig,a=o.record,i=useContext(SearchTableContext),o={type:type,dropOverDownwardClassName:"".concat(selectorPrefix,"-row-drag-sort-drop-over-downward"),dropOverUpwardClasName:"".concat(selectorPrefix,"-row-drag-sort-drop-over-upward"),dragConfig:function(){return{type:t.type,item:{index:n,record:a},collect:function(o){return{isDragging:o.isDragging()}}}},dropConfig:function(){return{accept:t.type,collect:function(o){var r,e=(null!=(e=o.getItem())?e:{}).index;return e===n?{}:__assign({isOver:o.isOver(),dropClassName:e<n?t.dropOverDownwardClassName:t.dropOverUpwardClasName},null!=(r=null==(r=null==(e=null==(e=null==l?void 0:l.$rowDragSort)?void 0:e.dropHooks)?void 0:e.collect)?void 0:r.call(e,o))?r:{})},drop:function(r){var o=null==(o=null==i?void 0:i.context)?void 0:o.getData(),e=null==(e=null==i?void 0:i.context)?void 0:e.getRowKey();isSameLevel({dataSource:o,rowKey:e,sourceId:a[e],targetId:r.record[e]})&&(null!=(e=null==(o=null==l?void 0:l.$rowDragSort)?void 0:o.dropHooks)&&e.drop?null!=(e=null==(o=null==l?void 0:l.$rowDragSort)?void 0:o.dropHooks)&&e.drop({sourceRecord:r.record,targetRecord:a,item:r}).then(function(){var o;null!=(o=null==i?void 0:i.context)&&o.moveRow(r.record,a)}):null!=(o=null==i?void 0:i.context)&&o.moveRow(r.record,a))}}}},t=__assign(__assign({},o),null!=(d=null==(d=null==l?void 0:l.$rowDragSort)?void 0:d.override)?d:{}),d=o.dragConfig(),s=o.dropConfig(),u=(null!=(r=null==(r=null==l?void 0:l.$rowDragSort)?void 0:r.override)&&r.dragConfig?t.dragConfig=Object.assign(d,null!=(e=null==(e=null==(r=null==(r=null==l?void 0:l.$rowDragSort)?void 0:r.override)?void 0:r.dragConfig)?void 0:e.call(r,d))?e:{}):t.dragConfig=o.dragConfig(),null!=(d=null==(r=null==l?void 0:l.$rowDragSort)?void 0:r.override)&&d.dropConfig?t.dropConfig=Object.assign(s,null!=(e=null==(d=null==(r=null==(e=null==l?void 0:l.$rowDragSort)?void 0:e.override)?void 0:r.dropConfig)?void 0:d.call(r,s))?e:{}):t.dropConfig=o.dropConfig(),useRef(null));try{var g=useDrag(t.dragConfig)[1],c=useDrop(t.dropConfig),v=c[0].isOver,p=c[0].dropClassName;(0,c[1])(g(u))}catch(o){console.log(o)}return function(o){var r={cursor:"canDrag"in t.dragConfig&&!t.dragConfig.canDrag()?"no-drop":"move"};return React.cloneElement(o,__assign(__assign({},o.props),{ref:u,style:__assign(__assign({},r),null!=(r=o.props.style)?r:{}),className:classNames(o.props.className,v?p:"")}))}};export default DragSortRow;
//# sourceMappingURL=DragSortRow.js.map
