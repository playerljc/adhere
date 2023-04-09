import _AutoComplete from"antd/es/auto-complete";import{createFactory}from"../util";export default createFactory(_AutoComplete,{allowClear:!0,filterOption:function(e,t){return 0<=t.value.toUpperCase().indexOf(e.toUpperCase())}});
//# sourceMappingURL=index.js.map
