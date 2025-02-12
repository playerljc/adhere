import { IndexBar } from 'antd-mobile';
import type { IndexBarProps } from 'antd-mobile';

import { createFactory } from '../util';

const IndexBarHOC: typeof IndexBar & {
  defaultProps?: Partial<IndexBarProps>;
} = createFactory<IndexBarProps>(IndexBar, {});

IndexBarHOC.displayName = 'IndexBar';

export default IndexBarHOC;
