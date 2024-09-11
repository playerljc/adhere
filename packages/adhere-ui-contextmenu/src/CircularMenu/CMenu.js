import config from './config';
import hide from './hide';
import show from './show';
import styles from './styles';

export default function CMenu(element, pMenu) {
  this._container = element;

  if (pMenu) this._pMenu = pMenu;
}

CMenu.prototype = {
  constructor: CMenu,
  config: config,
  show: show,
  hide: hide,
  styles: styles,
};
