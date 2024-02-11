import { TabBar } from 'antd-mobile';
import type { TabBarProps } from 'antd-mobile';

import { createFactory } from '../util';

const TabBarHOC: typeof TabBar & {
  defaultProps?: Partial<TabBarProps>;
} = createFactory<TabBarProps>(TabBar, {});

TabBarHOC.displayName = 'TabBar';

export default TabBarHOC;
