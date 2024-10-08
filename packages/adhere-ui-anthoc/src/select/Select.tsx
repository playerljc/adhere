import type { SelectProps } from 'antd';
import { Select } from 'antd';

import type { SelectHOCComponent } from '../types';
import { createFactory } from '../util';

const SelectHOC: SelectHOCComponent = createFactory<SelectProps>(
  Select,
  {
    showSearch: true,
    allowClear: true,
    placement: 'bottomLeft',
    filterOption: (input, option) =>
      (option?.label as any)?.toLowerCase?.()?.indexOf?.(input.toLowerCase()) >= 0,
  },
  (props) => ({
    ...props,
    // @ts-ignore
    value: props.realValue ?? props.value,
  }),
);

SelectHOC.displayName = 'Select';

export default SelectHOC;
