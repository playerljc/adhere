import { Button } from 'antd-mobile';
import type { ButtonProps } from 'antd-mobile';
declare const SubmitButtonHOC: typeof Button & {
    defaultProps?: Partial<ButtonProps>;
    override?: (props: Partial<ButtonProps>) => Partial<ButtonProps>;
};
export default SubmitButtonHOC;
