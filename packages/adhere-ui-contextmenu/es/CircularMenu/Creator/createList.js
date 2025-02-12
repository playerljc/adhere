import style from"./../style";export default function(t,e,i){var l=document.createElement("li");style(l,"width",this._calc.listSize.width),style(l,"height",this._calc.listSize.height),style(l,"transform","rotate("+this._calc.rotateDeg(i)+"deg) skew("+this._calc.skewDeg+"deg)"),t.appendChild(l),this._createAnchor(l,e,i)}
//# sourceMappingURL=createList.js.map
