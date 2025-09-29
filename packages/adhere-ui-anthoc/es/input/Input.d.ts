import { Input } from 'antd';
import type { InputProps } from 'antd';
declare const InputHOC: typeof Input & {
    defaultProps?: Partial<InputProps>;
    override?: (props: Partial<InputProps>) => Partial<InputProps>;
};
export default InputHOC;
