import{TYPE as TableGridLayoutType}from"../Fields/layout/TableGridLayout/constant";import{isLayoutItem}from"./isLayoutItem";function isDragEnd(t){var a=t.activeType,t=t.overType;return!(isLayoutItem(a)||!isLayoutItem(t)||t!==TableGridLayoutType)||!(!isLayoutItem(a)||!isLayoutItem(t)||t===TableGridLayoutType)}export{isDragEnd};
//# sourceMappingURL=isDragEnd.js.map
