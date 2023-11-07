import { Drawer } from 'antd';
import type { DrawerProps } from 'antd';
declare const DrawerHOC: typeof Drawer & {
    defaultProps?: Partial<DrawerProps>;
};
export default DrawerHOC;
