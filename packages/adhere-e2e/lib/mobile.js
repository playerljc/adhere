"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},__createBinding=Object.create?function(e,t,r,a){void 0===a&&(a=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&("get"in i?t.__esModule:!i.writable&&!i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,i)}:function(e,t,r,a){e[a=void 0===a?r:a]=t[r]},__setModuleDefault=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},antd_mobile_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("antd-mobile")),zh_CN_1=(require("antd-mobile/es/global"),__importDefault(require("antd-mobile/es/locales/zh-CN"))),react_1=__importDefault(require("react")),client_1=__importDefault(require("react-dom/client")),cssinjs_1=require("@ant-design/cssinjs"),adhere_1=require("@baifendian/adhere"),adhere_ui_anthoc_1=require("@baifendian/adhere-ui-anthoc"),theme_1=require("./theme"),util_1=require("./util"),timerRef=(require("antd/dist/reset.css"),require("font-awesome/css/font-awesome.min.css"),require("@baifendian/adhere-ui-configprovider/es/index.less"),require("@baifendian/adhere/lib/css.less"),null);document.getElementById("app").classList.add("mobile"),Promise.resolve().then(function(){return __importStar(require("react-fastclick"))}).then(function(e){return e.default()}),adhere_1.Browsersniff.iSOSiOS()&&(document.addEventListener("focusin",function(e){e&&e.target&&e.target.tagName&&["input","textarea"].includes(e.target.tagName.toLowerCase())&&clearTimeout(timerRef)}),document.addEventListener("focusout",function(e){e&&e.target&&e.target.tagName&&["input","textarea"].includes(e.target.tagName.toLowerCase())&&(timerRef=setTimeout(function(){window.scrollTo(0,0)},0))})),exports.default=function(e){var t=e.children,r=e.lang,a=void 0===r?"zh_CN":r,r=e.locales,i=void 0===r?{en_US:[],zh_CN:[],pt_PT:[]}:r,r=e.theme,n=void 0===r?{}:r,r=e.curTheme,o=void 0===r?"default":r,s={transformers:[cssinjs_1.legacyLogicalPropertiesTransformer,(0,util_1.isUseMedia)()&&(0,cssinjs_1.px2remTransformer)({rootValue:37.5})].filter(function(e){return!!e})},l={locale:adhere_1.Resource.Dict.value.LocalsAntd.value[a]};function u(e){return react_1.default.createElement(adhere_ui_anthoc_1.ConfigProvider,__assign({},l),react_1.default.createElement(cssinjs_1.StyleProvider,__assign({},s),react_1.default.createElement(antd_mobile_1.ConfigProvider,{locale:zh_CN_1.default},react_1.default.createElement(adhere_1.ConfigProvider,{intl:{lang:a,locales:i},onIntlInit:function(){(0,theme_1.antdThemeToCssVariable)(o)},theme:n,media:{isUseMedia:(0,util_1.isUseMedia)(),designWidth:37.5},isUseWrapper:!1},e))))}adhere_1.MessageDialog.setRenderToWrapper(u),adhere_1.Popup.setRenderToWrapper(u),adhere_1.ContextMenu.setRenderToWrapper(u),adhere_1.Notification.setRenderToWrapper(u),client_1.default.createRoot(document.getElementById("app")).render((e=function(){return t},react_1.default.createElement(adhere_ui_anthoc_1.ConfigProvider,__assign({},l),react_1.default.createElement(cssinjs_1.StyleProvider,__assign({},s),react_1.default.createElement(antd_mobile_1.ConfigProvider,{locale:zh_CN_1.default},react_1.default.createElement(adhere_1.ConfigProvider,{intl:{lang:a,locales:i},onIntlInit:function(){(0,theme_1.antdThemeToCssVariable)(o)},theme:n,media:{isUseMedia:(0,util_1.isUseMedia)(),designWidth:37.5}},e))))))};
//# sourceMappingURL=mobile.js.map
