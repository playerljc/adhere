import classed from"./../classed";import style from"./../style";var sizeRatio=.65,marginTopRatio=.2,fontHeight=13;function hasIcon(t){return void 0!==t&&("string"==typeof t?""!==t:t.length&&""!==t[0])}function getIcon(t){return"string"==typeof t?t:t[0]}function getIconColor(t){return"string"==typeof t?null:t[1]}export default function(t,o,e){var i,n;hasIcon(o.icon)&&((i=document.createElement("span")).title=o.title,n=getIcon(o.icon),o=getIconColor(o.icon),i.innerHTML='<img src="'.concat(n,'" alt="" style="width: 100%;height: 100%;"/>'),style(i,"display","inline-block"),style(i,"color",o),n=this._calc.clickZoneRadius*sizeRatio-fontHeight+"px",o=this._calc.clickZoneRadius*marginTopRatio-fontHeight+"px",style(i,"width",n),style(i,"height",n),style(i,"font-size",n),style(i,"margin-top",o),style(i,"margin-bottom","10px"),t.appendChild(i))}export{hasIcon};
//# sourceMappingURL=createIcon.js.map