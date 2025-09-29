import { NumberKeyboard } from 'antd-mobile';
import type { NumberKeyboardProps } from 'antd-mobile';
declare const NumberKeyboardHOC: typeof NumberKeyboard & {
    defaultProps?: Partial<NumberKeyboardProps>;
    override?: (props: Partial<NumberKeyboardProps>) => Partial<NumberKeyboardProps>;
};
export default NumberKeyboardHOC;
