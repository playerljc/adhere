import type { InputNumberProps } from 'antd';
import { InputNumber } from 'antd';
declare const InputPositiveNumberDecimal2HOC: typeof InputNumber & {
    defaultProps?: Partial<InputNumberProps>;
    override?: (props: Partial<InputNumberProps>) => Partial<InputNumberProps>;
};
export default InputPositiveNumberDecimal2HOC;
