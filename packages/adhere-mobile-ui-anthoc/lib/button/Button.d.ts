import { Button } from 'antd-mobile';
import type { ButtonProps } from 'antd-mobile';
declare const ButtonHOC: typeof Button & {
    defaultProps?: Partial<ButtonProps>;
    override?: (props: Partial<ButtonProps>) => Partial<ButtonProps>;
};
export default ButtonHOC;
