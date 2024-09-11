// import classed from './../classed';
// import style from './../style';
//
// const sizeRatio = 0.65;
// const marginTopRatio = 0.2;
// const fontHeight = 13;
//
// export function hasIcon(icon) {
//   if (icon === undefined) return false;
//   else if (typeof icon === 'string') return icon !== '';
//   else return icon.length && icon[0] !== '';
// }
//
// function getIcon(icon) {
//   return typeof icon === 'string' ? icon : icon[0];
// }
//
// function getIconColor(icon) {
//   return typeof icon === 'string' ? null : icon[1];
// }
//
// export default function (parent, data, index) {
//   if (!hasIcon(data.icon)) return;
//
//   const span = document.createElement('span');
//
//   const icon = getIcon(data.icon),
//     color = getIconColor(data.icon);
//
//   classed(span, icon + ' cm-icon', true);
//   style(span, 'color', color);
//
//   const l = this._calc.clickZoneRadius * sizeRatio - fontHeight + 'px',
//     m = this._calc.clickZoneRadius * marginTopRatio - fontHeight + 'px';
//   style(span, 'width', l);
//   style(span, 'height', l);
//   style(span, 'font-size', l);
//   style(span, 'margin-top', m);
//
//   parent.appendChild(span);
// }
import classed from './../classed';
import style from './../style';

const sizeRatio = 0.65;
const marginTopRatio = 0.2;
const fontHeight = 13;

export function hasIcon(icon) {
  if (icon === undefined) return false;
  else if (typeof icon === 'string') return icon !== '';
  else return icon.length && icon[0] !== '';
}

function getIcon(icon) {
  return typeof icon === 'string' ? icon : icon[0];
}

function getIconColor(icon) {
  return typeof icon === 'string' ? null : icon[1];
}

export default function (parent, data, index) {
  if (!hasIcon(data.icon)) return;

  let span = document.createElement('span');
  span.title = data.title;
  let icon = getIcon(data.icon),
    color = getIconColor(data.icon);

  span.innerHTML = `<img src="${icon}" alt="" style="width: 100%;height: 100%;"/>`;
  // classed(span, icon + ' cm-icon', true);
  style(span, 'display', 'inline-block');
  style(span, 'color', color);

  let l = this._calc.clickZoneRadius * sizeRatio - fontHeight + 'px',
    m = this._calc.clickZoneRadius * marginTopRatio - fontHeight + 'px';
  style(span, 'width', l);
  style(span, 'height', l);
  style(span, 'font-size', l);
  style(span, 'margin-top', m);
  style(span, 'margin-bottom', '10px');

  parent.appendChild(span);
}
