import{mergeMobilePreviewFieldProps}from"../../../utils";function mobileSuggestion(e){e=e.tabPlacement;return"left"===e||"right"===e?{tabPlacement:"top"}:{}}function resolveFieldPropsForDesignEditor(e,o){return mergeMobilePreviewFieldProps(e,o,mobileSuggestion(e.fieldProps))}export{resolveFieldPropsForDesignEditor};
//# sourceMappingURL=resolveFieldPropsForDesignEditor.js.map
