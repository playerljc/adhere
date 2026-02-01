import type { InputNumberProps } from 'antd';
import { InputNumber } from 'antd';

import Util from '@baifendian/adhere-util';

import { createFactory } from '../util';

const InputNumberDecimal2FrenchHOC: typeof InputNumber & {
  defaultProps?: Partial<InputNumberProps>;
  override?: (props: Partial<InputNumberProps>) => Partial<InputNumberProps>;
} = createFactory<InputNumberProps>(InputNumber, {
  precision: 2,
  formatter: (value) => Util.FrenchNumberFormatter(value ?? '', 2),
  parser: (value) => Util.FrenchNumberParse(value ?? ''),
});

InputNumberDecimal2FrenchHOC.displayName = 'InputNumberDecimal2French';

export default InputNumberDecimal2FrenchHOC;
