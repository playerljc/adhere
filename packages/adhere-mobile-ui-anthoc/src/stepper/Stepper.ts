import { Stepper } from 'antd-mobile';
import type { StepperProps } from 'antd-mobile';

import { createFactory } from '../util';

const StepperHOC: typeof Stepper & {
  defaultProps?: Partial<StepperProps>;
} = createFactory<StepperProps>(Stepper, {});

StepperHOC.displayName = 'Stepper';

export default StepperHOC;
