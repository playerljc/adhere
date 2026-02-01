import { Button } from 'antd';
import type { ButtonProps, FormInstance } from 'antd';
export interface SubmitButtonProps extends Omit<ButtonProps, 'form'> {
    form: FormInstance;
}
declare const SubmitButtonHOC: typeof Button & {
    defaultProps?: Partial<SubmitButtonProps>;
    override?: (props: Partial<SubmitButtonProps>) => Partial<SubmitButtonProps>;
};
export default SubmitButtonHOC;
