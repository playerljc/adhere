import _Select from"antd/es/select";import{createFactory}from"../util";export default createFactory(_Select,{showSearch:!0,allowClear:!0,mode:"multiple",placement:"bottomLeft",filterOption:function(e,t){return 0<=t.children.toLowerCase().indexOf(e.toLowerCase())}});
//# sourceMappingURL=index.js.map
