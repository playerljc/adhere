import CMenu from '../CMenu';
import extend from '../extend';
import classed from './../classed';

const sizeRatio = 5 / 3;
const percentRatio = 0.45;
const centralDegRatio = 0.618;

export default function createSubMenu(creator, menus, index) {
  const subMenu = document.createElement('div');

  classed(subMenu, 'circular-sub-menu', true);

  this._container.parentNode.insertBefore(subMenu, this._container);

  const totalAngle = this._calc.centralDeg * centralDegRatio * menus.length;
  const startDeg = this._calc.rotateDeg(index) - totalAngle / 2 + this._calc.centralDeg / 2;

  const config = extend(this._config, {
    totalAngle: totalAngle, //deg,
    percent: percentRatio, //%
    diameter: this._config.diameter * sizeRatio, //px
    start: startDeg, //deg
    animation: 'into',
    menus: menus,
  });

  return new CMenu(subMenu, creator._cMenu).config(config);
}
