import{isDesktop}from"../../utils";function parseDesign(e){var t=e.parentId,n=e.value,e=e.context,r=e.getTerminal,i=e.getItems,r=r(),i=i().find(function(e){return e.type===n.type});return isDesktop(r)?null==i?void 0:i.renderDesign({parentId:t,value:n,context:e}):null==i?void 0:i.renderDesignToMobile({parentId:t,value:n,context:e})}export{parseDesign};
//# sourceMappingURL=parseDesign.js.map
