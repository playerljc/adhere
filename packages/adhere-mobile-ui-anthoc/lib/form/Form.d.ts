import { Form } from 'antd-mobile';
import type { FormProps } from 'antd-mobile';
declare const FormHOC: typeof Form & {
    defaultProps?: Partial<FormProps>;
};
export default FormHOC;
