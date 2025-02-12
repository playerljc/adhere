import { ProgressCircle } from 'antd-mobile';
import type { ProgressCircleProps } from 'antd-mobile';

import { createFactory } from '../util';

const ProgressCircleHOC: typeof ProgressCircle & {
  defaultProps?: Partial<ProgressCircleProps>;
} = createFactory<ProgressCircleProps>(ProgressCircle, {});

ProgressCircleHOC.displayName = 'ProgressCircle';

export default ProgressCircleHOC;
