import { InputNumber } from 'antd';
import type { InputNumberProps } from 'antd';
import InputNegativeNumberInteger from './InputNegativeNumberInteger';
import InputPositiveNumberInteger from './InputPositiveNumberInteger';
declare const InputNumberIntegerHOC: typeof InputNumber & {
    defaultProps?: Partial<InputNumberProps>;
    override?: (props: Partial<InputNumberProps>) => Partial<InputNumberProps>;
    InputNegativeNumberInteger: typeof InputNegativeNumberInteger;
    InputPositiveNumberInteger: typeof InputPositiveNumberInteger;
};
export default InputNumberIntegerHOC;
