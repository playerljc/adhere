import type { StepperProps } from 'antd-mobile';

import Stepper from '../stepper';
import { createFactory } from '../util';

const StepperDecimal2: typeof Stepper & {
  defaultProps?: Partial<StepperProps>;
} = createFactory<StepperProps>(Stepper, { digits: 2 });

StepperDecimal2.displayName = 'StepperDecimal2';

export default StepperDecimal2;
