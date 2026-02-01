import type { InputNumberProps } from 'antd';
import { InputNumber } from 'antd';
declare const InputNumberIntegerInternationalHOC: typeof InputNumber & {
    defaultProps?: Partial<InputNumberProps>;
    override?: (props: Partial<InputNumberProps>) => Partial<InputNumberProps>;
};
export default InputNumberIntegerInternationalHOC;
