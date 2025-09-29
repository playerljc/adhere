import { TabBar } from 'antd-mobile';
import type { TabBarProps } from 'antd-mobile';
declare const TabBarHOC: typeof TabBar & {
    defaultProps?: Partial<TabBarProps>;
    override?: (props: Partial<TabBarProps>) => Partial<TabBarProps>;
};
export default TabBarHOC;
