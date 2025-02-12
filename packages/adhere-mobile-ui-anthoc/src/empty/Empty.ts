import { Empty } from 'antd-mobile';
import type { EmptyProps } from 'antd-mobile';

import { createFactory } from '../util';

const EmptyHOC: typeof Empty & {
  defaultProps?: Partial<EmptyProps>;
} = createFactory<EmptyProps>(Empty, {});

EmptyHOC.displayName = 'Empty';

export default EmptyHOC;
