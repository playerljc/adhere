import classed from"./../classed";import style from"./../style";export default function(t,e,o){var a=document.createElement("div");classed(a,"horizontal",!0),this._config.horizontal&&style(a,"transform","rotate("+this._calc.horizontalDeg(o)+"deg)"),t.appendChild(a),this._createIcon(a,e,o),this._createText(a,e,o)}
//# sourceMappingURL=createHorizontal.js.map
