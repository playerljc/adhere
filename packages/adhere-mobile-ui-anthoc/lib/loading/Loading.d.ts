import { Loading } from 'antd-mobile';
import type { LoadingProps } from 'antd-mobile';
declare const LoadingHOC: typeof Loading & {
    defaultProps?: Partial<LoadingProps>;
    override?: (props: Partial<LoadingProps>) => Partial<LoadingProps>;
};
export default LoadingHOC;
