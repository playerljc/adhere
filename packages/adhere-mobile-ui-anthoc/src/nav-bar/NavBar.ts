import { NavBar } from 'antd-mobile';
import type { NavBarProps } from 'antd-mobile';

import { createFactory } from '../util';

const NavBarHOC: typeof NavBar & {
  defaultProps?: Partial<NavBarProps>;
} = createFactory<NavBarProps>(NavBar, {});

NavBarHOC.displayName = 'NavBar';

export default NavBarHOC;
