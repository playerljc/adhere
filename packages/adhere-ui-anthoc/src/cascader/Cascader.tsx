import { Cascader, CascaderProps } from 'antd';

import type { CascaderHOCComponent } from '../types';
import { createFactory } from '../util';

const CascaderHOC: CascaderHOCComponent = createFactory<CascaderProps>(Cascader, {
  showSearch: {
    filter: (inputValue, path) =>
      path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1),
  },
  allowClear: true,
  placement: 'bottomLeft',
});

export default CascaderHOC;
