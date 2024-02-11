import { Button } from 'antd-mobile';
import type { ButtonProps } from 'antd-mobile';

import { createFactory } from '../util';
import InternalSubmitButton from './InternalSubmitButton';

const SubmitButtonHOC: typeof Button & {
  defaultProps?: Partial<ButtonProps>;
} = createFactory<ButtonProps>(InternalSubmitButton, {});

SubmitButtonHOC.displayName = 'SubmitButton';

export default SubmitButtonHOC;
