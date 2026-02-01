import type { InputNumberProps } from 'antd';
import { InputNumber } from 'antd';
declare const InputNumberDecimal1GermanHOC: typeof InputNumber & {
    defaultProps?: Partial<InputNumberProps>;
    override?: (props: Partial<InputNumberProps>) => Partial<InputNumberProps>;
};
export default InputNumberDecimal1GermanHOC;
