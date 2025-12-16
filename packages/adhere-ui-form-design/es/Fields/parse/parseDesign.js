function parseDesign(e){var n=e.terminal,r=e.value,e=e.items.find(function(e){return e.type===r.type});return"desktop"===n?null==e?void 0:e.renderDesign({value:r}):null==e?void 0:e.renderDesignToMobile({value:r})}export{parseDesign};
//# sourceMappingURL=parseDesign.js.map
