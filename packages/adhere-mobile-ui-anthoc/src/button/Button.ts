import { Button } from 'antd-mobile';
import type { ButtonProps } from 'antd-mobile';

import { createFactory } from '../util';

const ButtonHOC: typeof Button & {
  defaultProps?: Partial<ButtonProps>;
  override?: (props: Partial<ButtonProps>) => Partial<ButtonProps>;
} = createFactory<ButtonProps>(Button, {});

ButtonHOC.displayName = 'Button';

export default ButtonHOC;
