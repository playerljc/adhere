import type { InputNumberProps } from 'antd';
import { InputNumber } from 'antd';

import Util from '@baifendian/adhere-util';

import { createFactory } from '../util';

const InputNumberIntegerGermanHOC: typeof InputNumber & {
  defaultProps?: Partial<InputNumberProps>;
  override?: (props: Partial<InputNumberProps>) => Partial<InputNumberProps>;
} = createFactory<InputNumberProps>(InputNumber, {
  precision: 0,
  formatter: (value) => Util.GermanNumberFormatter(value ?? '', 0),
  parser: (value) => Util.GermanNumberParse(value ?? ''),
});

InputNumberIntegerGermanHOC.displayName = 'InputNumberIntegerGerman';

export default InputNumberIntegerGermanHOC;
