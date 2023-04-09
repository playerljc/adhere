import _Cascader from"antd/es/cascader";import{createFactory}from"../util";export default createFactory(_Cascader,{showSearch:{filter:function(r,e){return e.some(function(e){return-1<e.label.toLowerCase().indexOf(r.toLowerCase())})}},allowClear:!0,placement:"bottomLeft"});
//# sourceMappingURL=index.js.map
