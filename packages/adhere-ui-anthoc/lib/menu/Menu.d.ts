import { Menu } from 'antd';
import type { MenuProps } from 'antd';
declare const MenuHOC: typeof Menu & {
    defaultProps?: Partial<MenuProps>;
};
export default MenuHOC;
