import { Input } from 'antd-mobile';
import type { InputProps } from 'antd-mobile';
declare const InputHOC: typeof Input & {
    defaultProps?: Partial<InputProps>;
    override?: (props: Partial<InputProps>) => Partial<InputProps>;
};
export default InputHOC;
