import { Space } from 'antd';
import type { SpaceProps } from 'antd';

import { createFactory } from '../util';

const SpaceHOC: typeof Space & {
  defaultProps?: Partial<SpaceProps>;
} = createFactory<SpaceProps>(Space, {});

export default SpaceHOC;
