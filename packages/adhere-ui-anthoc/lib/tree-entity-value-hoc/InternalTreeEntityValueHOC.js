"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("react")),useTreeEntityValueHOC_1=__importDefault(require("../useTreeEntityValueHOC")),treeDataProps=["treeData"],DEFAULT_TREE_DATA_PROP="treeData",InternalTreeEntityValueHOC=(0,react_1.memo)(function(n){var e=function(e){var t;if((null!=(t=n.treeDataProp)?t:DEFAULT_TREE_DATA_PROP)in e)return e[null!=(t=n.treeDataProp)?t:DEFAULT_TREE_DATA_PROP];for(var r=e[DEFAULT_TREE_DATA_PROP],a=0;a<treeDataProps.length;a++)if(treeDataProps[a]in e){r=e[treeDataProps[a]];break}return r}(n.children.props);return(0,useTreeEntityValueHOC_1.default)(__assign(__assign({},n),{treeData:e}))}),TreeEntityValueHOC=InternalTreeEntityValueHOC;exports.default=TreeEntityValueHOC;
//# sourceMappingURL=InternalTreeEntityValueHOC.js.map
