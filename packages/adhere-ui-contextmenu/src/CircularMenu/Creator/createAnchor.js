import classed from './../classed';
import on from './../on';
import style from './../style';
import styleSheet from './styleSheet';

function hasSubMenus(menus) {
  return menus instanceof Array && menus.length !== 0;
}
function ifDisabled(disabled) {
  if (disabled instanceof Function) return disabled();
  else return Boolean(disabled);
}

function setHref(ele, href) {
  if (!href) return;

  if (href instanceof Object) {
    ele.href = href.url;
    ele.target = href.blank ? '_blank' : '';
  } else {
    ele.href = href;
  }
}

var delayShow = null; // delayShow reference the last setTimeout triggered by any one of menu item(anchor)

export default function (parent, data, index) {
  const self = this;

  let delayHide = null; // delayHide reference the last setTimeout triggered by the menu item itself

  const a = document.createElement('a');

  setHref(a, data.href);

  a.setDisabled = function () {
    classed(a, 'disabled', ifDisabled(data.disabled));
  };
  this._anchors.push(a);

  style(a, 'width', this._calc.clickZoneSize.width);
  style(a, 'height', this._calc.clickZoneSize.height);
  style(a, 'right', this._calc.clickZoneSize.marginRight);
  style(a, 'bottom', this._calc.clickZoneSize.marginBottom);
  style(
    a,
    'transform',
    'skew(' + -this._calc.skewDeg + 'deg) rotate(' + this._calc.unskewDeg + 'deg) scale(1)',
  );

  classed(a, 'disabled', ifDisabled(data.disabled));

  const percent = this._config.percent * 100 + '%';
  styleSheet(
    a,
    'background',
    'radial-gradient(transparent ' + percent + ', ' + this._config.background + ' ' + percent + ')',
  );
  styleSheet(
    a,
    'background',
    'radial-gradient(transparent ' +
      percent +
      ', ' +
      this._config.backgroundHover +
      ' ' +
      percent +
      ')',
    'hover',
  );

  function clickCallBack(e, data) {
    if (data.click) data.click.call(this, e, data);

    if (self._config.hideAfterClick) {
      self._cMenu.hide();
      if (self._cMenu._pMenu) self._cMenu._pMenu.hide();
      // if (subMenu) subMenu.hide();
    }
  }

  on(a, 'click', clickCallBack, data);

  parent.appendChild(a);

  this._createHorizontal(a, data, index);

  //toggle subMenu
  if (hasSubMenus(data.menus)) {
    const subMenu = this._createSubMenu(self, data.menus, index);

    on(a, 'mouseenter', function () {
      delayShow = setTimeout(function () {
        subMenu
          .styles({
            top: self._container.offsetTop + self._calc.radius + 'px',
            left: self._container.offsetLeft + self._calc.radius + 'px',
          })
          .show();
      }, 150);
    });

    on(a, 'mouseleave', function (e) {
      if (!subMenu._container.contains(e.toElement)) {
        delayHide = setTimeout(function () {
          subMenu.hide();
        }, 200);
      }
    });

    on(subMenu._container, 'mouseenter', function () {
      clearTimeout(delayShow);
      clearTimeout(delayHide);
    });

    on(subMenu._container, 'mouseleave', function (e) {
      if (!a.contains(e.toElement) || e.toElement.children[0] === a) {
        subMenu.hide();
      }
    });
  }
}
