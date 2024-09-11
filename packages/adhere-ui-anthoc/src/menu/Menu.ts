import { Menu } from 'antd';
import type { MenuProps } from 'antd';

import { createFactory } from '../util';

const MenuHOC: typeof Menu & {
  defaultProps?: Partial<MenuProps>;
} = createFactory<MenuProps>(Menu, {});

MenuHOC.displayName = 'Menu';

export default MenuHOC;
