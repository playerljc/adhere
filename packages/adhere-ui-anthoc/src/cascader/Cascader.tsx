import { Cascader, CascaderProps } from 'antd';

import type { CascaderHOCComponent } from '../types';
import { createFactory } from '../util';

const CascaderHOC: CascaderHOCComponent = createFactory<CascaderProps>(Cascader, {
  showSearch: {
    filter: (inputValue, path) =>
      path.some((option) => {
        if (typeof option?.label === 'string') {
          return option?.label?.toLowerCase().indexOf(inputValue.toLowerCase()) > -1;
        }

        return false;
      }),
  },
  allowClear: true,
  placement: 'bottomLeft',
});

CascaderHOC.displayName = 'Cascader';

export default CascaderHOC;
