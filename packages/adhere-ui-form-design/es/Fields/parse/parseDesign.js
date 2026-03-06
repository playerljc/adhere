import{isDesktop}from"../../utils/isDesktop";function parseDesign(e){var i=e.terminal,n=e.value,e=e.items.find(function(e){return e.type===n.type});return isDesktop(i)?null==e?void 0:e.renderDesign({value:n}):null==e?void 0:e.renderDesignToMobile({value:n})}export{parseDesign};
//# sourceMappingURL=parseDesign.js.map
