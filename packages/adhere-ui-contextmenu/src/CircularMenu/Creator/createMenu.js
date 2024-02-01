import on from '../on';
import classed from './../classed';
import style from './../style';
import styleSheet from './styleSheet';

export default function () {
  const p = this._container;

  classed(p, 'circular-menu', true);
  style(p, 'width', this._calc.menuSize.width);
  style(p, 'height', this._calc.menuSize.height);
  style(p, 'margin-top', this._calc.menuSize.marginTop);
  style(p, 'margin-left', this._calc.menuSize.marginLeft);

  const self = this;
  on(p, 'click', function (e) {
    if (e.toElement === p) {
      self._cMenu.hide();
    }
  });
  setTimeout(function () {
    style(p, 'display', 'block');
  }, 100);

  styleSheet(p, 'width', this._calc.coverSize.width, 'after');
  styleSheet(p, 'height', this._calc.coverSize.height, 'after');
  styleSheet(p, 'margin-left', this._calc.coverSize.marginLeft, 'after');
  styleSheet(p, 'margin-top', this._calc.coverSize.marginTop, 'after');
  styleSheet(p, 'border', '3px solid ' + this._config.pageBackground, 'after');

  const ul = p.appendChild(document.createElement('ul'));
  this._createLists(ul);
}
