import React,{memo}from"react";import Resource from"@baifendian/adhere-util-resource";var selectorPrefix="adhere-ui-spin",Spin=function(e){var t=e.spinning,a=e.text,a=void 0===a?"":a,e=e.zIndex,e=void 0===e?Resource.Dict.value.ResourceNormalMaxZIndex.value:e;return void 0!==t&&t?React.createElement("div",{className:selectorPrefix,style:{zIndex:e}},React.createElement("span",{className:"".concat(selectorPrefix,"-dot")},React.createElement("i",null),React.createElement("i",null),React.createElement("i",null),React.createElement("i",null)),React.createElement("div",{className:"".concat(selectorPrefix,"-text")},a)):null};export default memo(Spin);
//# sourceMappingURL=spin.js.map
