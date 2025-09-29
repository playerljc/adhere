import { Spin } from 'antd';
import type { SpinProps } from 'antd';
declare const SpinHOC: typeof Spin & {
    defaultProps?: Partial<SpinProps>;
    override?: (props: Partial<SpinProps>) => Partial<SpinProps>;
};
export default SpinHOC;
