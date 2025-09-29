import { Button } from 'antd';
import type { ButtonProps } from 'antd';
declare const ButtonHOC: typeof Button & {
    defaultProps?: Partial<ButtonProps>;
    override?: (props: Partial<ButtonProps>) => Partial<ButtonProps>;
};
export default ButtonHOC;
