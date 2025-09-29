import type { StepperProps } from 'antd-mobile';
import Stepper from '../stepper';
declare const StepperIntegerHOC: typeof Stepper & {
    defaultProps?: Partial<StepperProps>;
    override?: (props: Partial<StepperProps>) => Partial<StepperProps>;
};
export default StepperIntegerHOC;
