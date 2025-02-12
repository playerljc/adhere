import { InputNumber } from 'antd';
import type { InputNumberProps } from 'antd';
import InputNegativeNumberDecimal2 from './InputNegativeNumberDecimal2';
import InputPositiveNumberDecimal2 from './InputPositiveNumberDecimal2';
declare const InputNumberDecimal2HOC: typeof InputNumber & {
    defaultProps?: Partial<InputNumberProps>;
    InputPositiveNumberDecimal2: typeof InputPositiveNumberDecimal2;
    InputNegativeNumberDecimal2: typeof InputNegativeNumberDecimal2;
};
export default InputNumberDecimal2HOC;
