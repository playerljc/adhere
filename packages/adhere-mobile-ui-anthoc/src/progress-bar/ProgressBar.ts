import { ProgressBar } from 'antd-mobile';
import type { ProgressBarProps } from 'antd-mobile';

import { createFactory } from '../util';

const ProgressBarHOC: typeof ProgressBar & {
  defaultProps?: Partial<ProgressBarProps>;
} = createFactory<ProgressBarProps>(ProgressBar, {});

ProgressBarHOC.displayName = 'ProgressBar';

export default ProgressBarHOC;
