import Calculation from '../Calculation/index';
import createAnchor from './createAnchor';
import createHorizontal from './createHorizontal';
import createIcon from './createIcon';
import createList from './createList';
import createLists from './createLists';
import createMenu from './createMenu';
import createSubMenu from './createSubMenu';
import createText from './createText';

export default function Creator(cMenu, config) {
  this._cMenu = cMenu;
  this._container = cMenu._container;
  this._config = config;
  this._calc = new Calculation(config);
  this._anchors = [];
}

Creator.prototype = {
  constructor: Creator,
  createMenu: createMenu,
  _createLists: createLists,
  _createList: createList,
  _createAnchor: createAnchor,
  _createText: createText,
  _createHorizontal: createHorizontal,
  _createIcon: createIcon,
  _createSubMenu: createSubMenu,
};
