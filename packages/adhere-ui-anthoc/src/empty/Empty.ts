import { Empty } from 'antd';
import type { EmptyProps } from 'antd';

import { createFactory } from '../util';

const EmptyHOC: typeof Empty & {
  defaultProps?: Partial<EmptyProps>;
} = createFactory<EmptyProps>(Empty, {});

export default EmptyHOC;
