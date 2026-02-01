import { Button } from 'antd';
import type { ButtonProps, FormInstance } from 'antd';

import { createFactory } from '../util';
import InternalSubmitButton from './InternalSubmitButton';

export interface SubmitButtonProps extends Omit<ButtonProps, 'form'> {
  form: FormInstance;
}

const SubmitButtonHOC: typeof Button & {
  defaultProps?: Partial<SubmitButtonProps>;
  override?: (props: Partial<SubmitButtonProps>) => Partial<SubmitButtonProps>;
} = createFactory<SubmitButtonProps>(InternalSubmitButton, {});

SubmitButtonHOC.displayName = 'SubmitButton';

export default SubmitButtonHOC;
