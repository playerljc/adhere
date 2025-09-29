import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
declare const TabsHOC: typeof Tabs & {
    defaultProps?: Partial<TabsProps>;
    override?: (props: Partial<TabsProps>) => Partial<TabsProps>;
};
export default TabsHOC;
