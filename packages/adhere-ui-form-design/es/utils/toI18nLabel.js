import{SELECT_VALUE_KEY_NAME}from"../constant";function toI18nLabel(t,n,E){var o,_;return t&&"object"==typeof t&&SELECT_VALUE_KEY_NAME in t?t:((o={})[SELECT_VALUE_KEY_NAME]=n,_=o,E.forEach(function(E){_[E]=E===n?"string"==typeof t?t:"":null}),_)}export{toI18nLabel};
//# sourceMappingURL=toI18nLabel.js.map
