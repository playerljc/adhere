"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},on_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("../on"))),classed_1=__importDefault(require("./../classed")),style_1=__importDefault(require("./../style")),styleSheet_1=__importDefault(require("./styleSheet"));function default_1(){var t=this._container,i=((0,classed_1.default)(t,"circular-menu",!0),(0,style_1.default)(t,"width",this._calc.menuSize.width),(0,style_1.default)(t,"height",this._calc.menuSize.height),(0,style_1.default)(t,"margin-top",this._calc.menuSize.marginTop),(0,style_1.default)(t,"margin-left",this._calc.menuSize.marginLeft),this),e=((0,on_1.default)(t,"click",function(e){e.toElement===t&&i._cMenu.hide()}),setTimeout(function(){(0,style_1.default)(t,"display","block")},100),(0,styleSheet_1.default)(t,"width",this._calc.coverSize.width,"after"),(0,styleSheet_1.default)(t,"height",this._calc.coverSize.height,"after"),(0,styleSheet_1.default)(t,"margin-left",this._calc.coverSize.marginLeft,"after"),(0,styleSheet_1.default)(t,"margin-top",this._calc.coverSize.marginTop,"after"),(0,styleSheet_1.default)(t,"border","3px solid "+this._config.pageBackground,"after"),t.appendChild(document.createElement("ul")));this._createLists(e)}exports.default=default_1;
//# sourceMappingURL=createMenu.js.map