import { NumberKeyboard } from 'antd-mobile';
import type { NumberKeyboardProps } from 'antd-mobile';

import { createFactory } from '../util';

const NumberKeyboardHOC: typeof NumberKeyboard & {
  defaultProps?: Partial<NumberKeyboardProps>;
} = createFactory<NumberKeyboardProps>(NumberKeyboard, {});

NumberKeyboardHOC.displayName = 'NumberKeyboard';

export default NumberKeyboardHOC;
