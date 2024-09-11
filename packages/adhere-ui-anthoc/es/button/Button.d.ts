import { Button } from 'antd';
import type { ButtonProps } from 'antd';
declare const ButtonHOC: typeof Button & {
    defaultProps?: Partial<ButtonProps>;
};
export default ButtonHOC;
