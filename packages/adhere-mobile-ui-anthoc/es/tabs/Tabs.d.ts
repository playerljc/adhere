import { Tabs } from 'antd-mobile';
import type { TabsProps } from 'antd-mobile';
declare const TabsHOC: typeof Tabs & {
    defaultProps?: Partial<TabsProps>;
    override?: (props: Partial<TabsProps>) => Partial<TabsProps>;
};
export default TabsHOC;
