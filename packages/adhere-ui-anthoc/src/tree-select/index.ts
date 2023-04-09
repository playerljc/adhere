import { TreeSelect } from 'antd';

import { createFactory } from '../util';

export default createFactory(TreeSelect, {
  showSearch: true,
  allowClear: true,
  treeNodeFilterProp: 'title',
  placement: 'bottomLeft',
});
