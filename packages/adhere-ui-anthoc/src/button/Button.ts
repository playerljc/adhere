import { Button } from 'antd';
import type { ButtonProps } from 'antd';

import { createFactory } from '../util';

const ButtonHOC: typeof Button & {
  defaultProps?: Partial<ButtonProps>;
} = createFactory<ButtonProps>(Button, {});

ButtonHOC.displayName = 'Button';

export default ButtonHOC;
