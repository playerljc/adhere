import { Space } from 'antd-mobile';
import type { SpaceProps } from 'antd-mobile';

import { createFactory } from '../util';

const SpaceHOC: typeof Space & {
  defaultProps?: Partial<SpaceProps>;
} = createFactory<SpaceProps>(Space, {});

SpaceHOC.displayName = 'Space';

export default SpaceHOC;
