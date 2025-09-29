import type { InputProps } from 'antd-mobile';
import Input from '../input';
import InputNegativeNumber from './InputNegativeNumber';
import InputPositiveNumber from './InputPositiveNumber';
declare const InputNumberHOC: typeof Input & {
    defaultProps?: Partial<InputProps>;
    override?: (props: Partial<InputProps>) => Partial<InputProps>;
    InputNegativeNumber: typeof InputNegativeNumber;
    InputPositiveNumber: typeof InputPositiveNumber;
};
export default InputNumberHOC;
