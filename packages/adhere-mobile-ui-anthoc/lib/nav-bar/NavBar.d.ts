import { NavBar } from 'antd-mobile';
import type { NavBarProps } from 'antd-mobile';
declare const NavBarHOC: typeof NavBar & {
    defaultProps?: Partial<NavBarProps>;
    override?: (props: Partial<NavBarProps>) => Partial<NavBarProps>;
};
export default NavBarHOC;
