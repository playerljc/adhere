import _Cascader from"antd/es/cascader";import{createFactory}from"../util";var CascaderHOC=createFactory(_Cascader,{showSearch:{filter:function(a,e){return e.some(function(e){return-1<e.label.toLowerCase().indexOf(a.toLowerCase())})}},allowClear:!0,placement:"bottomLeft"});export default CascaderHOC;
//# sourceMappingURL=Cascader.js.map
