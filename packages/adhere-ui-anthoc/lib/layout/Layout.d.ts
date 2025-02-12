import { Layout } from 'antd';
import type { LayoutProps } from 'antd';
declare const LayoutHOC: typeof Layout & {
    defaultProps?: Partial<LayoutProps>;
};
export default LayoutHOC;
