import { SelectProps } from 'antd';

import Select from '../select';
import type { MultipleSelectHOCComponent } from '../types';
import { createFactory } from '../util';

const MultipleSelectHOC: MultipleSelectHOCComponent = createFactory<SelectProps>(Select, {
  mode: 'multiple',
});

export default MultipleSelectHOC;
