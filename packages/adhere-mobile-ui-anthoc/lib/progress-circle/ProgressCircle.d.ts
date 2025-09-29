import { ProgressCircle } from 'antd-mobile';
import type { ProgressCircleProps } from 'antd-mobile';
declare const ProgressCircleHOC: typeof ProgressCircle & {
    defaultProps?: Partial<ProgressCircleProps>;
    override?: (props: Partial<ProgressCircleProps>) => Partial<ProgressCircleProps>;
};
export default ProgressCircleHOC;
