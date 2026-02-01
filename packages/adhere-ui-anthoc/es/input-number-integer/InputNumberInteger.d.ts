import { InputNumber } from 'antd';
import type { InputNumberProps } from 'antd';
import InputNegativeNumberInteger from './InputNegativeNumberInteger';
import InputPositiveNumberInteger from './InputPositiveNumberInteger';
import InputNumberIntegerGerman from './InputNumberIntegerGerman';
import InputNumberIntegerUS from './InputNumberIntegerUS';
import InputNumberIntegerFrench from './InputNumberIntegerFrench';
import InputNumberIntegerInternational from './InputNumberIntegerInternational';
declare const InputNumberIntegerHOC: typeof InputNumber & {
    defaultProps?: Partial<InputNumberProps>;
    override?: (props: Partial<InputNumberProps>) => Partial<InputNumberProps>;
    InputNegativeNumberInteger: typeof InputNegativeNumberInteger;
    InputPositiveNumberInteger: typeof InputPositiveNumberInteger;
    InputNumberIntegerGerman: typeof InputNumberIntegerGerman;
    InputNumberIntegerUS: typeof InputNumberIntegerUS;
    InputNumberIntegerFrench: typeof InputNumberIntegerFrench;
    InputNumberIntegerInternational: typeof InputNumberIntegerInternational;
};
export default InputNumberIntegerHOC;
