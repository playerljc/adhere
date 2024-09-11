import { Layout } from 'antd';
import type { LayoutProps } from 'antd';

import { createFactory } from '../util';

const LayoutHOC: typeof Layout & {
  defaultProps?: Partial<LayoutProps>;
} = createFactory<LayoutProps>(Layout, {});

LayoutHOC.displayName = 'Layout';

export default LayoutHOC;
