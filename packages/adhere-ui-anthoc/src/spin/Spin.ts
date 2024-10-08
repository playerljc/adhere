import { Spin } from 'antd';
import type { SpinProps } from 'antd';

import { createFactory } from '../util';

const SpinHOC: typeof Spin & {
  defaultProps?: Partial<SpinProps>;
} = createFactory<SpinProps>(Spin, {});

SpinHOC.displayName = 'Spin';

export default SpinHOC;
