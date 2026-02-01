import { InputNumber } from 'antd';
import type { InputNumberProps } from 'antd';

import { createFactory } from '../util';
import InputNegativeNumberInteger from './InputNegativeNumberInteger';
import InputPositiveNumberInteger from './InputPositiveNumberInteger';
import InputNumberIntegerGerman from './InputNumberIntegerGerman';
import InputNumberIntegerUS from './InputNumberIntegerUS';
import InputNumberIntegerFrench from './InputNumberIntegerFrench';
import InputNumberIntegerInternational from './InputNumberIntegerInternational';

const InputNumberIntegerHOC: typeof InputNumber & {
  defaultProps?: Partial<InputNumberProps>;
  override?: (props: Partial<InputNumberProps>) => Partial<InputNumberProps>;
  InputNegativeNumberInteger: typeof InputNegativeNumberInteger;
  InputPositiveNumberInteger: typeof InputPositiveNumberInteger;
  InputNumberIntegerGerman: typeof InputNumberIntegerGerman;
  InputNumberIntegerUS: typeof InputNumberIntegerUS;
  InputNumberIntegerFrench: typeof InputNumberIntegerFrench;
  InputNumberIntegerInternational: typeof InputNumberIntegerInternational;
} = createFactory<InputNumberProps>(InputNumber, { precision: 0 });

InputNumberIntegerHOC.displayName = 'InputNumberInteger';
InputNumberIntegerHOC.InputNegativeNumberInteger = InputNegativeNumberInteger;
InputNumberIntegerHOC.InputPositiveNumberInteger = InputPositiveNumberInteger;
InputNumberIntegerHOC.InputNumberIntegerGerman = InputNumberIntegerGerman;
InputNumberIntegerHOC.InputNumberIntegerUS = InputNumberIntegerUS;
InputNumberIntegerHOC.InputNumberIntegerFrench = InputNumberIntegerFrench;
InputNumberIntegerHOC.InputNumberIntegerInternational = InputNumberIntegerInternational;

export default InputNumberIntegerHOC;
