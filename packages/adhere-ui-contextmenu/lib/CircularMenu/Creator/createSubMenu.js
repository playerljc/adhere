"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},CMenu_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("../CMenu"))),extend_1=__importDefault(require("../extend")),classed_1=__importDefault(require("./../classed")),sizeRatio=5/3,percentRatio=.45,centralDegRatio=.618;function createSubMenu(e,t,a){var r=document.createElement("div"),i=((0,classed_1.default)(r,"circular-sub-menu",!0),this._container.parentNode.insertBefore(r,this._container),this._calc.centralDeg*centralDegRatio*t.length),a=this._calc.rotateDeg(a)-i/2+this._calc.centralDeg/2,i=(0,extend_1.default)(this._config,{totalAngle:i,percent:percentRatio,diameter:this._config.diameter*sizeRatio,start:a,animation:"into",menus:t});return new CMenu_1.default(r,e._cMenu).config(i)}exports.default=createSubMenu;
//# sourceMappingURL=createSubMenu.js.map
