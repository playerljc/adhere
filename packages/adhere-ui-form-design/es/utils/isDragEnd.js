import{TYPE as TableGridLayoutType}from"../Fields/layout/TableGridLayout/constant";import{isLayoutItem}from"./isLayoutItem";function isDragEnd(a){var t=a.activeType,a=a.overType;return!(!isLayoutItem(t)&&a!==TableGridLayoutType||t===TableGridLayoutType&&a===TableGridLayoutType)}export{isDragEnd};
//# sourceMappingURL=isDragEnd.js.map
