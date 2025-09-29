import { Menu } from 'antd';
import type { MenuProps } from 'antd';
declare const MenuHOC: typeof Menu & {
    defaultProps?: Partial<MenuProps>;
    override?: (props: Partial<MenuProps>) => Partial<MenuProps>;
};
export default MenuHOC;
