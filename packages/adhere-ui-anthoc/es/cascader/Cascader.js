import _Cascader from"antd/es/cascader";import{createFactory}from"../util";var CascaderHOC=createFactory(_Cascader,{showSearch:{filter:function(e,a){return a.some(function(a){return-1<a.label.toLowerCase().indexOf(e.toLowerCase())})}},allowClear:!0,placement:"bottomLeft"});CascaderHOC.displayName="Cascader";export default CascaderHOC;
//# sourceMappingURL=Cascader.js.map
