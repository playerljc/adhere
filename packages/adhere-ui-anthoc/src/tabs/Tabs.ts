import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

import type { TabsHOCComponent } from '../types';
import { createFactory } from '../util';

const TabsHOC: TabsHOCComponent = createFactory<TabsProps>(Tabs, {});

TabsHOC.displayName = 'Tabs';

export default TabsHOC;
