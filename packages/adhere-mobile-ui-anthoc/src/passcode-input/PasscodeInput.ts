import { PasscodeInput } from 'antd-mobile';
import type { PasscodeInputProps } from 'antd-mobile';

import { createFactory } from '../util';

const PasscodeInputHOC: typeof PasscodeInput & {
  defaultProps?: Partial<PasscodeInputProps>;
} = createFactory<PasscodeInputProps>(PasscodeInput, {});

PasscodeInputHOC.displayName = 'PasscodeInput';

export default PasscodeInputHOC;
