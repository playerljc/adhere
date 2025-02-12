import { Tabs } from 'antd-mobile';
import type { TabsProps } from 'antd-mobile';

import { createFactory } from '../util';

const TabsHOC: typeof Tabs & {
  defaultProps?: Partial<TabsProps>;
} = createFactory<TabsProps>(Tabs, {});

TabsHOC.displayName = 'Tabs';

export default TabsHOC;
