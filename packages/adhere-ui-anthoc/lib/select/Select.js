"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var l,t=1,a=arguments.length;t<a;t++)for(var r in l=arguments[t])Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);return e}).apply(this,arguments)},antd_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("antd")),util_1=require("../util"),SelectHOC=(0,util_1.createFactory)(antd_1.Select,{showSearch:!0,allowClear:!0,placement:"bottomLeft",filterOption:function(e,l){var t;return 0<=(null==(l=null==(t=null==(t=null==(l=null==l?void 0:l.label)?void 0:l.toLowerCase)?void 0:t.call(l))?void 0:t.indexOf)?void 0:l.call(t,e.toLowerCase()))}},function(e){var l;return __assign(__assign({},e),{value:null!=(l=e.realValue)?l:e.value})});SelectHOC.displayName="Select",exports.default=SelectHOC;
//# sourceMappingURL=Select.js.map
