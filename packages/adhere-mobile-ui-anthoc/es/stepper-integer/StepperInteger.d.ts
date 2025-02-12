import type { StepperProps } from 'antd-mobile';
import Stepper from '../stepper';
declare const StepperIntegerHOC: typeof Stepper & {
    defaultProps?: Partial<StepperProps>;
};
export default StepperIntegerHOC;
