function compareTableCellValues(e,l){return e===l?0:null==e?-1:null==l?1:"number"==typeof e&&"number"==typeof l?e-l:"boolean"==typeof e&&"boolean"==typeof l?Number(e)-Number(l):String(e).localeCompare(String(l),void 0,{numeric:!0,sensitivity:"base"})}export{compareTableCellValues};
//# sourceMappingURL=compareTableCellValues.js.map
