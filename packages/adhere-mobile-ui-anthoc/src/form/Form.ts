import { Form } from 'antd-mobile';
import type { FormProps } from 'antd-mobile';

import { createFactory } from '../util';

const FormHOC: typeof Form & {
  defaultProps?: Partial<FormProps>;
} = createFactory<FormProps>(Form, {});

FormHOC.displayName = 'Form';

export default FormHOC;
