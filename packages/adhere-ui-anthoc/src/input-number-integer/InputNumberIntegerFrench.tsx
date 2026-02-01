import type { InputNumberProps } from 'antd';
import { InputNumber } from 'antd';

import Util from '@baifendian/adhere-util';

import { createFactory } from '../util';

const InputNumberIntegerFrenchHOC: typeof InputNumber & {
  defaultProps?: Partial<InputNumberProps>;
  override?: (props: Partial<InputNumberProps>) => Partial<InputNumberProps>;
} = createFactory<InputNumberProps>(InputNumber, {
  precision: 0,
  formatter: (value) => Util.FrenchNumberFormatter(value ?? '', 0),
  parser: (value) => Util.FrenchNumberParse(value ?? ''),
});

InputNumberIntegerFrenchHOC.displayName = 'InputNumberIntegerFrench';

export default InputNumberIntegerFrenchHOC;
