import type { InputProps } from 'antd-mobile';

import Input from '../input';
import { createFactory } from '../util';

const InputPositiveNumberHOC: typeof Input & {
  defaultProps?: Partial<InputProps>;
  override?: (props: Partial<InputProps>) => Partial<InputProps>;
} = createFactory<InputProps>(Input, { min: 0, type: 'number' });

InputPositiveNumberHOC.displayName = 'InputPositiveNumber';

export default InputPositiveNumberHOC;
