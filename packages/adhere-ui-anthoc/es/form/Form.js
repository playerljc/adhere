import _Form from"antd/es/form";var __spreadArray=this&&this.__spreadArray||function(r,t,a){if(a||2===arguments.length)for(var e,o=0,i=t.length;o<i;o++)!e&&o in t||((e=e||Array.prototype.slice.call(t,0,o))[o]=t[o]);return r.concat(e||Array.prototype.slice.call(t))};import Validator from"@baifendian/adhere-util-validator";import{createFactory}from"../util";var ValidatorRules,FormHOC=createFactory(_Form,{});!function(){var t=["default","version","toDate","toFloat","toInt","toBoolean","equals","contains","matches","ltrim","rtrim","trim","escape","unescape","stripLow","whitelist","blacklist","isWhitelisted","normalizeEmail","toString"];ValidatorRules=Array.from(Object.keys(Validator)).filter(function(r){return!t.includes(r)}).reduce(function(r,e){return r[e]=function(a){return{validator:function(r,t){return t?Validator[e].apply(this,__spreadArray([t],(null==a?void 0:a.params)||[],!0))?Promise.resolve():Promise.reject(null!=(t=null==a?void 0:a.invalidMessage)?t:""):Promise.reject()}}},r},{})}(),FormHOC.ValidatorRules=ValidatorRules,FormHOC.displayName="Form";export default FormHOC;
//# sourceMappingURL=Form.js.map