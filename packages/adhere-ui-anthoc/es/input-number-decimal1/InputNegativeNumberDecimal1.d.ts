import type { InputNumberProps } from 'antd';
import { InputNumber } from 'antd';
declare const InputNegativeNumberDecimal1HOC: typeof InputNumber & {
    defaultProps?: Partial<InputNumberProps>;
    override?: (props: Partial<InputNumberProps>) => Partial<InputNumberProps>;
};
export default InputNegativeNumberDecimal1HOC;
