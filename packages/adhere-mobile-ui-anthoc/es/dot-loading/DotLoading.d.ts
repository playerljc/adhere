import { DotLoading } from 'antd-mobile';
import type { DotLoadingProps } from 'antd-mobile';
declare const DotLoadingHOC: typeof DotLoading & {
    defaultProps?: Partial<DotLoadingProps>;
    override?: (props: Partial<DotLoadingProps>) => Partial<DotLoadingProps>;
};
export default DotLoadingHOC;
