import { SideBar } from 'antd-mobile';
import type { SideBarProps } from 'antd-mobile';
declare const SideBarHOC: typeof SideBar & {
    defaultProps?: Partial<SideBarProps>;
    override?: (props: Partial<SideBarProps>) => Partial<SideBarProps>;
};
export default SideBarHOC;
