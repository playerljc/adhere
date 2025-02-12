import { Input } from 'antd';
import type { InputProps } from 'antd';
declare const InputHOC: typeof Input & {
    defaultProps?: Partial<InputProps>;
};
export default InputHOC;
