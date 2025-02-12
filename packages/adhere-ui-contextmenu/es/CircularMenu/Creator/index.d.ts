declare function Creator(cMenu: any, config: any): void;
declare class Creator {
    constructor(cMenu: any, config: any);
    _cMenu: any;
    _container: any;
    _config: any;
    _calc: Calculation;
    _anchors: any[];
    createMenu: typeof createMenu;
    _createLists: typeof createLists;
    _createList: typeof createList;
    _createAnchor: typeof createAnchor;
    _createText: typeof createText;
    _createHorizontal: typeof createHorizontal;
    _createIcon: typeof createIcon;
    _createSubMenu: typeof createSubMenu;
}
export default Creator;
import Calculation from '../Calculation/index';
import createMenu from './createMenu';
import createLists from './createLists';
import createList from './createList';
import createAnchor from './createAnchor';
import createText from './createText';
import createHorizontal from './createHorizontal';
import createIcon from './createIcon';
import createSubMenu from './createSubMenu';
