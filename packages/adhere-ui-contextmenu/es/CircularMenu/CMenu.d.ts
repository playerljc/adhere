declare function CMenu(element: any, pMenu: any): void;
declare class CMenu {
    constructor(element: any, pMenu: any);
    _container: any;
    _pMenu: any;
    config: typeof config;
    show: typeof show;
    hide: typeof hide;
    styles: typeof styles;
}
export default CMenu;
import config from './config';
import show from './show';
import hide from './hide';
import styles from './styles';
