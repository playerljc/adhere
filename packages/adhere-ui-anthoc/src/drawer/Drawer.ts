import { Drawer } from 'antd';
import type { DrawerProps } from 'antd';

import { createFactory } from '../util';

const DrawerHOC: typeof Drawer & {
  defaultProps?: Partial<DrawerProps>;
} = createFactory<DrawerProps>(Drawer, {});

DrawerHOC.displayName = 'Drawer';

export default DrawerHOC;
