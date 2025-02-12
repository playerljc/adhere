import { SideBar } from 'antd-mobile';
import type { SideBarProps } from 'antd-mobile';

import { createFactory } from '../util';

const SideBarHOC: typeof SideBar & {
  defaultProps?: Partial<SideBarProps>;
} = createFactory<SideBarProps>(SideBar, {});

SideBarHOC.displayName = 'SideBar';

export default SideBarHOC;
