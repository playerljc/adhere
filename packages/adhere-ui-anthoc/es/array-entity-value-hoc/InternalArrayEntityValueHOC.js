var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(r){for(var t,n=1,o=arguments.length;n<o;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(r[a]=t[a]);return r}).apply(this,arguments)};import{memo}from"react";import useArrayEntityValueHOC from"../useArrayEntityValueHOC";var optionsProps=["options","items","dataSource"],DEFAULT_OPTIONS_PROP="options",InternalArrayEntityValueHOC=memo(function(a){var r=function(r){var t;if((null!=(t=a.optionsProp)?t:DEFAULT_OPTIONS_PROP)in r)return r[null!=(t=a.optionsProp)?t:DEFAULT_OPTIONS_PROP];for(var n=r[DEFAULT_OPTIONS_PROP],o=0;o<optionsProps.length;o++)if(optionsProps[o]in r){n=r[optionsProps[o]];break}return n}(a.children.props);return useArrayEntityValueHOC(__assign(__assign({},a),{options:r}))}),ArrayEntityValueHOC=InternalArrayEntityValueHOC;export default InternalArrayEntityValueHOC;
//# sourceMappingURL=InternalArrayEntityValueHOC.js.map