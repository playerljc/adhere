import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

import { createFactory } from '../util';

const TabsHOC: typeof Tabs & {
  defaultProps?: Partial<TabsProps>;
} = createFactory<TabsProps>(Tabs, {});

TabsHOC.displayName = 'Tabs';

export default TabsHOC;
