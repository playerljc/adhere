"use strict";var __importDefault=function(e){return e&&e.__esModule?e:{default:e}},SearchTableResizableColumnItem_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.SearchTableResizableObserver=exports.SearchTableResizableTitle=void 0,__importDefault(require("./SearchTableResizableColumnItem"))),SearchTableResizableObserver_1=__importDefault(require("./SearchTableResizableObserver")),SearchTableResizableTitle_1=(exports.SearchTableResizableObserver=SearchTableResizableObserver_1.default,__importDefault(require("./SearchTableResizableTitle"))),ColumnResizable=(exports.SearchTableResizableTitle=SearchTableResizableTitle_1.default,function(){function e(){this.columnsWidth=new Map}return e.prototype.searchTableResizableColumnItem=function(e,l,a){return(0,SearchTableResizableColumnItem_1.default)({columnsWidth:this.columnsWidth,context:e,index:l,column:a})},e}());exports.default=ColumnResizable;
//# sourceMappingURL=index.js.map
