import type { InputNumberProps } from 'antd';
import { InputNumber } from 'antd';
declare const InputNumberDecimal2InternationalHOC: typeof InputNumber & {
    defaultProps?: Partial<InputNumberProps>;
    override?: (props: Partial<InputNumberProps>) => Partial<InputNumberProps>;
};
export default InputNumberDecimal2InternationalHOC;
