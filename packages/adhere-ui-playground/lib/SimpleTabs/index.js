"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,r){e[r=void 0===r?a:r]=t[a]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.hasOwnProperty.call(e,a)&&__createBinding(t,e,a);return __setModuleDefault(t,e),t},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),Context_1=require("./Context"),TabPanel_1=__importDefault(require("./TabPanel")),selectorPrefix="adhere-ui-playground-simple-tabs",SimpleTabs=function(e){var t=e.className,t=void 0===t?"":t,a=e.onChange,r=e.children,i=react_1.useState(e.activeKey),n=i[0],l=i[1],i=react_1.useCallback(function(){return r instanceof Array?r.map(c):c(r)},[r]);function c(e){var e=e.props,t=e.index,e=e.title;return react_1.default.createElement("li",{key:t,className:n===t?"active":"",onClick:function(){l(t),a&&a(t)}},e)}return react_1.useEffect(function(){return l(e.activeKey)},[e.activeKey]),react_1.default.createElement(Context_1.TabContext.Provider,{value:{activeKey:n||""}},react_1.default.createElement("div",{className:selectorPrefix+" "+t},react_1.default.createElement("ul",{className:selectorPrefix+"-head"},i()),react_1.default.createElement("div",{className:selectorPrefix+"-body"},r)))},MemoWrap=react_1.memo(SimpleTabs);MemoWrap.TabPanel=TabPanel_1.default,exports.default=MemoWrap;
//# sourceMappingURL=index.js.map
