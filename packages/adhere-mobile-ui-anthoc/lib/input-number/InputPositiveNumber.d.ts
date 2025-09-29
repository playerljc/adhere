import type { InputProps } from 'antd-mobile';
import Input from '../input';
declare const InputPositiveNumberHOC: typeof Input & {
    defaultProps?: Partial<InputProps>;
    override?: (props: Partial<InputProps>) => Partial<InputProps>;
};
export default InputPositiveNumberHOC;
