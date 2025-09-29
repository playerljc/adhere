import { AutoCenter } from 'antd-mobile';
import type { AutoCenterProps } from 'antd-mobile';
declare const AutoCenterHOC: typeof AutoCenter & {
    defaultProps?: Partial<AutoCenterProps>;
    override?: (props: Partial<AutoCenterProps>) => Partial<AutoCenterProps>;
};
export default AutoCenterHOC;
