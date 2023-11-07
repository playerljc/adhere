import { Layout } from 'antd';
import type { LayoutProps } from 'antd';

import { createFactory } from '../util';

const LayoutHOC: typeof Layout & {
  defaultProps?: Partial<LayoutProps>;
} = createFactory<LayoutProps>(Layout, {});

export default LayoutHOC;
