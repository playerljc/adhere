"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){e[i=void 0===i?r:i]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),adhere_ui_conditionalrender_1=__importDefault(require("@baifendian/adhere-ui-conditionalrender")),adhere_ui_hooks_1=__importDefault(require("@baifendian/adhere-ui-hooks")),adhere_util_intl_1=__importDefault(require("@baifendian/adhere-util-intl")),adhere_util_resource_1=__importDefault(require("@baifendian/adhere-util-resource")),Context=react_1.createContext({}),useForceUpdate=adhere_ui_hooks_1.default.useForceUpdate,ConfigProvider=function(e){var t=e.intl,r=t.lang,i=t.locales,a=t.prefix,n=e.children,t=react_1.useState(!1),u=t[0],o=t[1],_=useForceUpdate();return react_1.useEffect(function(){adhere_util_intl_1.default.init({prefix:a||"local",currentLocale:r,locales:i||{}},adhere_util_intl_1.default.isInit()).then(function(){adhere_util_resource_1.default.Dict.value.LocalsMoment.value[r](),u?_():o(!0)})},[r,i,a]),react_1.default.createElement(adhere_ui_conditionalrender_1.default,{conditional:u},function(){return react_1.default.createElement(Context.Provider,{value:{}},n())})};exports.default=react_1.memo(ConfigProvider);
//# sourceMappingURL=configprovider.js.map
