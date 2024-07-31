"use strict";var ValidatorRules,__spreadArray=function(e,r,t){if(t||2===arguments.length)for(var a,i=0,l=r.length;i<l;i++)!a&&i in r||((a=a||Array.prototype.slice.call(r,0,i))[i]=r[i]);return e.concat(a||Array.prototype.slice.call(r))},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},antd_mobile_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("antd-mobile")),adhere_util_validator_1=__importDefault(require("@baifendian/adhere-util-validator")),util_1=require("../util"),FormHOC=(0,util_1.createFactory)(antd_mobile_1.Form,{});!function(){var r=["default","version","toDate","toFloat","toInt","toBoolean","equals","contains","matches","ltrim","rtrim","trim","escape","unescape","stripLow","whitelist","blacklist","isWhitelisted","normalizeEmail","toString"];ValidatorRules=Array.from(Object.keys(adhere_util_validator_1.default)).filter(function(e){return!r.includes(e)}).reduce(function(e,l){return e[l]=function(i){return{validator:function(e,r){var t=this;function a(){var e;return adhere_util_validator_1.default[l].apply(t,__spreadArray([r],(null==i?void 0:i.params)||[],!0))?Promise.resolve():Promise.reject(null!=(e=null==i?void 0:i.invalidMessage)?e:"")}return null!=e&&e.required?r?a():Promise.reject(null==e?void 0:e.message):r?a():Promise.resolve()}}},e},{})}(),FormHOC.ValidatorRules=ValidatorRules,FormHOC.displayName="Form",exports.default=FormHOC;
//# sourceMappingURL=Form.js.map
