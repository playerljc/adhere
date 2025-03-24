import React,{memo}from"react";import TreeSelect from"./TreeSelect";import useTreeSelectMulti from"./useTreeSelectMulti";let InternalTreeMultiSelect=memo(e=>{var t=useTreeSelectMulti();return React.createElement(TreeSelect,{...t,...e})}),TreeMultiSelect=InternalTreeMultiSelect;TreeMultiSelect.displayName="TreeMultiSelect";export default TreeMultiSelect;
//# sourceMappingURL=TreeMultiSelect.js.map
