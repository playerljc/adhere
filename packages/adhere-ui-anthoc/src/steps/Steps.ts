import { Steps } from 'antd';
import type { StepsProps } from 'antd';

import { createFactory } from '../util';

const StepsHOC: typeof Steps & {
  defaultProps?: Partial<StepsProps>;
} = createFactory<StepsProps>(Steps, {});

export default StepsHOC;
