import { Mask } from 'antd-mobile';
import type { MaskProps } from 'antd-mobile';
declare const MaskHOC: typeof Mask & {
    defaultProps?: Partial<MaskProps>;
    override?: (props: Partial<MaskProps>) => Partial<MaskProps>;
};
export default MaskHOC;
