"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},Overlay_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.createMask=exports.slider=exports.selectorPrefix=void 0,__importDefault(require("./Overlay"))),Push_1=__importDefault(require("./Push")),Reveal_1=__importDefault(require("./Reveal"));function slider(e,t,r,a,s,l){void 0===s&&(s="0"),l&&l(e),e.style.transform=e.style.webkitTransform="translate3d(".concat(t,",").concat(r,",").concat(a,")"),e.style.transition=e.style.webkitTransition="all ".concat(s," ease")}function createMask(e,t){var r=document.createElement("div"),r=(r.innerHTML="<div class='".concat(exports.selectorPrefix,"-mask'></div>"),r.firstElementChild);return r.style.zIndex="number"==typeof e?"".concat(e-1):e,r.addEventListener("click",function(){return t()}),r}exports.selectorPrefix="adhere-ui-slide-layout",exports.slider=slider,exports.createMask=createMask,exports.default={Overlay:Overlay_1.default,Push:Push_1.default,Revolving:Reveal_1.default};
//# sourceMappingURL=SlideLayout.js.map
