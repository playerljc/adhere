import Util from"@baifendian/adhere-util";function themeCSSVariablesInjectToTheme(e){var o=e.componentTheme,n=e.els;Object.keys(o).forEach(function(e){var t=Util.pascalCaseToKebabCase2(e),a=o[e];n.forEach(function(e){e.style.setProperty("--".concat(t),a)})})}export{themeCSSVariablesInjectToTheme};
//# sourceMappingURL=themeCSSVariablesInjectToTheme.js.map
