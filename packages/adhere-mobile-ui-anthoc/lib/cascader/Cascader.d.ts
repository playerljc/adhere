import { Cascader } from 'antd-mobile';
import type { CascaderProps } from 'antd-mobile';
declare const CascaderHOC: typeof Cascader & {
    defaultProps?: Partial<CascaderProps>;
    override?: (props: Partial<CascaderProps>) => Partial<CascaderProps>;
};
export default CascaderHOC;
