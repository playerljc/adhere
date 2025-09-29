import { SpinLoading } from 'antd-mobile';
import type { SpinLoadingProps } from 'antd-mobile';
declare const SpinLoadingHOC: typeof SpinLoading & {
    defaultProps?: Partial<SpinLoadingProps>;
    override?: (props: Partial<SpinLoadingProps>) => Partial<SpinLoadingProps>;
};
export default SpinLoadingHOC;
