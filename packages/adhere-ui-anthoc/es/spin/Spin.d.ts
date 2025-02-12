import { Spin } from 'antd';
import type { SpinProps } from 'antd';
declare const SpinHOC: typeof Spin & {
    defaultProps?: Partial<SpinProps>;
};
export default SpinHOC;
