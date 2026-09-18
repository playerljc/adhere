import{normalizeDateFieldValue}from"./normalizeDateFieldValue";function resolveDateFieldValue(e){var l=e.fieldKey,i=e.registry,a=e.form,e=e.externalGetFieldValue;if(e){e=e(l);if(void 0!==e)return normalizeDateFieldValue(e)}if(a){e=a.getFieldValue(l);if(void 0!==e)return normalizeDateFieldValue(e)}return i[l]}export{resolveDateFieldValue};
//# sourceMappingURL=resolveDateFieldValue.js.map
