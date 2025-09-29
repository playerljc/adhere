import { Empty } from 'antd';
import type { EmptyProps } from 'antd';

import { createFactory } from '../util';

const EmptyHOC: typeof Empty & {
  defaultProps?: Partial<EmptyProps>;
  override?: (props: Partial<EmptyProps>) => Partial<EmptyProps>;
} = createFactory<EmptyProps>(Empty, {});

EmptyHOC.displayName = 'Empty';

export default EmptyHOC;
