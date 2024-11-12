import { InputNumber } from 'antd';
import type { InputNumberProps } from 'antd';
import InputNegativeNumberDecimal1 from './InputNegativeNumberDecimal1';
import InputPositiveNumberDecimal1 from './InputPositiveNumberDecimal1';
declare const InputNumberDecimal1HOC: typeof InputNumber & {
    defaultProps?: Partial<InputNumberProps>;
    InputNegativeNumberDecimal1: typeof InputNegativeNumberDecimal1;
    InputPositiveNumberDecimal1: typeof InputPositiveNumberDecimal1;
};
export default InputNumberDecimal1HOC;
