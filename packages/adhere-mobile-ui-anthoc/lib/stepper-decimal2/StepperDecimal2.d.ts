import type { StepperProps } from 'antd-mobile';
import Stepper from '../stepper';
declare const StepperDecimal2: typeof Stepper & {
    defaultProps?: Partial<StepperProps>;
    override?: (props: Partial<StepperProps>) => Partial<StepperProps>;
};
export default StepperDecimal2;
