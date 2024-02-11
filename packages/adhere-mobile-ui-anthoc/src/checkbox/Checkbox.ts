import { Checkbox } from 'antd-mobile';
import type { CheckboxProps } from 'antd-mobile';

import { createFactory } from '../util';

const CheckboxHOC: typeof Checkbox & {
  defaultProps?: Partial<CheckboxProps>;
} = createFactory<CheckboxProps>(Checkbox, {});

CheckboxHOC.displayName = 'Checkbox';

export default CheckboxHOC;
