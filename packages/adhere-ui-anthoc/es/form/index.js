import _Form from"antd/es/form";var __spreadArray=this&&this.__spreadArray||function(r,a,t){if(t||2===arguments.length)for(var e,o=0,i=a.length;o<i;o++)!e&&o in a||((e=e||Array.prototype.slice.call(a,0,o))[o]=a[o]);return r.concat(e||Array.prototype.slice.call(a))};import Validator from"@baifendian/adhere-util-validator";import{createFactory}from"../util";var ValidatorRules,FormWrap=createFactory(_Form,{});!function(){var a=["default","version","toDate","toFloat","toInt","toBoolean","equals","contains","matches","ltrim","rtrim","trim","escape","unescape","stripLow","whitelist","blacklist","isWhitelisted","normalizeEmail","toString"];ValidatorRules=Array.from(Object.keys(Validator)).filter(function(r){return!a.includes(r)}).reduce(function(r,e){return r[e]=function(t){return{validator:function(r,a){return console.log("value",!a),a?(console.log("_key",__spreadArray([a],(null==t?void 0:t.params)||[],!0)),Validator[e].apply(this,__spreadArray([a],(null==t?void 0:t.params)||[],!0))?Promise.resolve():Promise.reject(null!=(a=null==t?void 0:t.invalidMessage)?a:"")):Promise.reject()}}},r},{})}(),FormWrap.ValidatorRules=ValidatorRules;export default FormWrap;
//# sourceMappingURL=index.js.map
