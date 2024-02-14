import { Checkbox } from 'antd-mobile';
import type { CheckboxProps } from 'antd-mobile';

import type { CheckboxHOCComponent } from '../types';
import { createFactory } from '../util';

const CheckboxHOC: CheckboxHOCComponent = createFactory<CheckboxProps>(Checkbox, {});

CheckboxHOC.displayName = 'Checkbox';

export default CheckboxHOC;
