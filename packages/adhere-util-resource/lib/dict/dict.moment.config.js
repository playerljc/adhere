import Dict from"@baifendian/adhere-util-dict";export default{initStatic:function(){Dict.handlers.ResourceMomentFormat2=function(){return"YY"},Dict.handlers.ResourceMomentFormat4=function(){return"YYYY"},Dict.handlers.ResourceMomentFormat6=function(){return function(n){return"YYYY".concat(n=void 0===n?"-":n,"M")}},Dict.handlers.ResourceMomentFormat7=function(){return function(n){return"YYYY".concat(n=void 0===n?"-":n,"MM")}},Dict.handlers.ResourceMomentFormat8=function(){return function(n){return"YYYY".concat(n=void 0===n?"-":n,"M").concat(n,"D")}},Dict.handlers.ResourceMomentFormat10=function(){return function(n){return"YYYY".concat(n=void 0===n?"-":n,"MM").concat(n,"DD")}},Dict.handlers.ResourceMomentFormat13=function(){return function(n,t){return void 0===t&&(t=":"),"YYYY".concat(n=void 0===n?"-":n,"M").concat(n,"D H").concat(t,"m").concat(t,"s")}},Dict.handlers.ResourceMomentFormat15=function(){return function(n,t){return void 0===t&&(t=":"),"YYYY".concat(n=void 0===n?"-":n,"MM").concat(n,"DD H").concat(t,"m").concat(t,"s")}},Dict.handlers.ResourceMomentFormat16=function(){return function(n,t){return void 0===t&&(t=":"),"YYYY".concat(n=void 0===n?"-":n,"M").concat(n,"D HH").concat(t,"mm").concat(t,"ss")}},Dict.handlers.ResourceMomentFormat18=function(){return function(n,t){return void 0===t&&(t=":"),"YYYY".concat(n=void 0===n?"-":n,"MM").concat(n,"DD HH").concat(t,"mm").concat(t,"ss")}}}};
//# sourceMappingURL=dict.moment.config.js.map
