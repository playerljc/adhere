function parseDesign(e){var n=e.terminal,r=e.value,e=e.items.find(function(e){return e.type===r.type});return"desktop"===n?null==e?void 0:e.renderDesign({value:r}):null==e?void 0:e.renderDesignToMobile({value:r})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.parseDesign=parseDesign;
//# sourceMappingURL=parseDesign.js.map
