import { VirtualInput } from 'antd-mobile';
import type { VirtualInputProps } from 'antd-mobile';
declare const VirtualInputHOC: typeof VirtualInput & {
    defaultProps?: Partial<VirtualInputProps>;
    override?: (props: Partial<VirtualInputProps>) => Partial<VirtualInputProps>;
};
export default VirtualInputHOC;
