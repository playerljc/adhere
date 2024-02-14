import type { StepperProps } from 'antd-mobile';

import Stepper from '../stepper';
import { createFactory } from '../util';

const StepperDecimal1: typeof Stepper & {
  defaultProps?: Partial<StepperProps>;
} = createFactory<StepperProps>(Stepper, { digits: 1 });

StepperDecimal1.displayName = 'StepperDecimal1';

export default StepperDecimal1;
