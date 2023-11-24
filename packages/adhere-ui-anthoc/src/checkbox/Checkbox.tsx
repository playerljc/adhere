import { Checkbox, CheckboxProps } from 'antd';

import type { CheckboxHOCComponent } from '../types';
import { createFactory } from '../util';

const CheckboxHOC: CheckboxHOCComponent = createFactory<CheckboxProps>(Checkbox, {});

CheckboxHOC.displayName = 'Checkbox';

export default CheckboxHOC;
