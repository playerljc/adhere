import type { StepperProps } from 'antd-mobile';

import Stepper from '../stepper';
import { createFactory } from '../util';

const StepperIntegerHOC: typeof Stepper & {
  defaultProps?: Partial<StepperProps>;
} = createFactory<StepperProps>(Stepper, { digits: 0 });

StepperIntegerHOC.displayName = 'StepperIntegerHOC';

export default StepperIntegerHOC;
