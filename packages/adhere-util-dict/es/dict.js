import DictReactComponent,{set,useDict}from"./react";var target={},handlerTarget={},funParams=new Map,defaultConfig={isUseMemo:!0},config=defaultConfig;function diffParams(e,n){if(e.length!==n.length)return!1;for(var t=!1,r=0;r<e.length;r++)if(e[r]!==n[r]){t=!0;break}return!t}function CreateFunProxy(e,a){return new Proxy(e,{apply:function(e,n,t){var n=n||window,r=null,i=funParams.get(a);return i&&diffParams(i.argArray,t)?r=i.result:(r=e.apply(n,t),funParams.set(a,{argArray:t,result:r})),r}})}function initValue(e,n){var t=Dict.handlers[e],n=t(n);return n instanceof Function&&("isUseMemo"in t?t.isUseMemo&&(n=CreateFunProxy(n,e)):"isUseMemo"in config&&config.isUseMemo&&(n=CreateFunProxy(n,e))),n}var Dict={handlers:new Proxy(handlerTarget,{set:function(e,n,t,r){e=Reflect.set(e,n,t,r);return set(n),e}}),value:new Proxy(target,{get:function(e,n,t){return n in e||(t[n]={value:initValue(n,null),refresh:function(){return delete t[n],this}}),Reflect.get(e,n,t)}}),init:function(e,n){config=n=void 0===n?defaultConfig:n,((e=void 0===e?[]:e)||[]).forEach(function(e){var n;e&&(null!=(n=null==e?void 0:e.initStatic)&&n.call(e),null!=(n=null==e?void 0:e.initRemote))&&n.call(e)})},React:DictReactComponent,useDict:useDict};export default Dict;
//# sourceMappingURL=dict.js.map
