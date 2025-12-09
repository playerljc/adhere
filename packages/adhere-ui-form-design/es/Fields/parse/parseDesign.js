function parseDesign(e){var i=e.terminal,n=e.value,d=e.items,t=e.onActiveFieldById,e=e.activeFieldId,d=d.find(function(e){return e.type===n.type});return"desktop"===i?null==d?void 0:d.renderDesign({value:n,activeFieldId:e,onActiveFieldById:t}):null==d?void 0:d.renderDesignToMobile({value:n,activeFieldId:e,onActiveFieldById:t})}export{parseDesign};
//# sourceMappingURL=parseDesign.js.map
