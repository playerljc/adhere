function clampUnit(r){return Number.isNaN(r)?1:Math.min(1,Math.max(0,r))}function glassBorderTint(r){r=Math.round(100*clampUnit(r));return"color-mix(in srgb, var(--glass-border-color) ".concat(r,"%, transparent)")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.glassBorderTint=glassBorderTint;
//# sourceMappingURL=borderColorMix.js.map
