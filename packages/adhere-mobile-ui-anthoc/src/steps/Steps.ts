import { Steps } from 'antd-mobile';
import type { StepsProps } from 'antd-mobile';

import { createFactory } from '../util';

const StepsHOC: typeof Steps & {
  defaultProps?: Partial<StepsProps>;
} = createFactory<StepsProps>(Steps, {});

StepsHOC.displayName = 'Steps';

export default StepsHOC;
