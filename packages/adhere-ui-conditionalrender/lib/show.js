"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(require("react")),util_1=require("./util"),ConditionalRenderShow=function(e){var t=e.children,l=e.noMatch,e=e.conditional;return react_1.default.createElement(react_1.default.Fragment,null,util_1.deal({element:t,conditional:e,prop:"display",value:e?"":"none"}),util_1.deal({element:l,conditional:e,prop:"display",value:e?"none":""}))};exports.default=ConditionalRenderShow;
//# sourceMappingURL=show.js.map
