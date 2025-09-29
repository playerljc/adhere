import { Steps } from 'antd-mobile';
import type { StepsProps } from 'antd-mobile';
declare const StepsHOC: typeof Steps & {
    defaultProps?: Partial<StepsProps>;
    override?: (props: Partial<StepsProps>) => Partial<StepsProps>;
};
export default StepsHOC;
