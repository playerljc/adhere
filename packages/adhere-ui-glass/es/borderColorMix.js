function clampUnit(r){return Number.isNaN(r)?1:Math.min(1,Math.max(0,r))}function glassBorderTint(r){r=Math.round(100*clampUnit(r));return"color-mix(in srgb, var(--glass-border-color) ".concat(r,"%, transparent)")}export{glassBorderTint};
//# sourceMappingURL=borderColorMix.js.map
