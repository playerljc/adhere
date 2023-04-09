"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var antd_1=require("antd"),util_1=require("../util");exports.default=(0,util_1.createFactory)(antd_1.Cascader,{showSearch:{filter:function(t,e){return e.some(function(e){return-1<e.label.toLowerCase().indexOf(t.toLowerCase())})}},allowClear:!0,placement:"bottomLeft"});
//# sourceMappingURL=index.js.map
