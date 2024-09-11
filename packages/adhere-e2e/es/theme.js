import _theme from"antd/es/theme";var __spreadArray=this&&this.__spreadArray||function(e,t,a){if(a||2===arguments.length)for(var n,o=0,r=t.length;o<r;o++)!n&&o in t||((n=n||Array.prototype.slice.call(t,0,o))[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))};import tinyColor from"tinycolor2";import Util from"@baifendian/adhere-util";import Preferences from"@baifendian/adhere-util-preferences";function setCssVariable(a){var r,t=Util.toCamelCase(a,"-"),n=Util.toCamelCase(a,"-",!0);t in cssVars||(r=themes.get(a),Object.defineProperty(cssVars,t,{set:function(n){document.documentElement.style.setProperty("--".concat(a),n);var e,t,o=tinyColor(n);o.isValid()&&(t=o.toRgb(),document.documentElement.style.setProperty("--".concat(a,"-rgb"),"".concat([t.r,t.g,t.b].join(",")))),null!=r&&r.mapToken&&null!=(t=null==(e=Array.from(null==(e=null==(t=null==r?void 0:r.mapToken)?void 0:t.keys)?void 0:e.call(t)))?void 0:e.forEach)&&t.call(e,function(e){var t,a=null==(a=null==(t=null==r?void 0:r.mapToken)?void 0:t.get)?void 0:a.call(t,e);null!=a&&a.alpha&&(o.setAlpha(Number.parseFloat(null==a?void 0:a.alpha)),document.documentElement.style.setProperty("--".concat(e),o.toPercentageRgbString())),a.calc&&document.documentElement.style.setProperty("--".concat(e),"calc(".concat(n," ").concat(a.calc,")"))})}}),exportObj["set".concat(n)]=function(e){cssVars[t]=e,Preferences.putStringByLocal(n,e)},exportObj["get".concat(n)]=function(){return document.documentElement.style.getPropertyValue("--".concat(a))})}function init(e){var a=(null!=(e=themes.get(e))?e:themes.get("default")).mapToken;Object.keys(a).forEach(function(e){var t=Util.capitalized(Util.toCamelCase(e,"-",!0));exportObj["setAntd".concat(t)](a[e])}),Object.keys(designToken).forEach(function(e){var t=Util.capitalized(Util.toCamelCase(e,"-",!0));exportObj["setAntd".concat(t)](designToken[e])})}var getDesignToken=_theme.getDesignToken,defaultAlgorithm=_theme.defaultAlgorithm,defaultSeed=_theme.defaultSeed,darkAlgorithm=_theme.darkAlgorithm,designToken=getDesignToken(),themes=new Map([["default",{algorithm:_theme.defaultAlgorithm,mapToken:defaultAlgorithm(defaultSeed)}],["dark",{algorithm:_theme.darkAlgorithm,mapToken:darkAlgorithm(defaultSeed)}]]),cssVars={},exportObj={};function antdThemeToCssVariable(e){var t=Object.keys(themes.get("default").mapToken),a=Object.keys(designToken);__spreadArray(__spreadArray([],t,!0),a,!0).map(function(e){return Util.pascalCaseToKebabCase2("antd".concat(Util.capitalized(e)))}).forEach(function(e){setCssVariable(e)}),init(e)}export{antdThemeToCssVariable};
//# sourceMappingURL=theme.js.map
