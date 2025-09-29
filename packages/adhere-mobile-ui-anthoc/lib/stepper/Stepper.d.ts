import { Stepper } from 'antd-mobile';
import type { StepperProps } from 'antd-mobile';
declare const StepperHOC: typeof Stepper & {
    defaultProps?: Partial<StepperProps>;
    override?: (props: Partial<StepperProps>) => Partial<StepperProps>;
};
export default StepperHOC;
