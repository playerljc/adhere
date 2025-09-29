import { PasscodeInput } from 'antd-mobile';
import type { PasscodeInputProps } from 'antd-mobile';
declare const PasscodeInputHOC: typeof PasscodeInput & {
    defaultProps?: Partial<PasscodeInputProps>;
    override?: (props: Partial<PasscodeInputProps>) => Partial<PasscodeInputProps>;
};
export default PasscodeInputHOC;
