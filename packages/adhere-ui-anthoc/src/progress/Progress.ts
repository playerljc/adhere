import { Progress } from 'antd';
import type { ProgressProps } from 'antd';

import { createFactory } from '../util';

const ProgressHOC: typeof Progress & {
  defaultProps?: Partial<ProgressProps>;
} = createFactory<ProgressProps>(Progress, {});

ProgressHOC.displayName = 'Progress';

export default ProgressHOC;
