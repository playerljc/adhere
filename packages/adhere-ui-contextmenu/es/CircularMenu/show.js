import classed from"./classed";import style from"./style";function setCoordinate(t){t instanceof Array&&2===t.length&&(style(this._container,"left",t[0]+"px"),style(this._container,"top",t[1]+"px"))}function setDisabled(){this._creator._anchors.forEach(function(t){t.setDisabled()})}export default function(t){return setDisabled.call(this),setCoordinate.call(this,t),classed(this._container,"opened-nav",!0),this}
//# sourceMappingURL=show.js.map