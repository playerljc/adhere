import { TreeSelect, TreeSelectProps } from 'antd';

import { TreeSelectHOCComponent } from '../types';
import { createFactory } from '../util';

const TreeSelectHOC: TreeSelectHOCComponent = createFactory<TreeSelectProps>(TreeSelect, {
  showSearch: true,
  allowClear: true,
  treeNodeFilterProp: 'title',
  placement: 'bottomLeft',
});

TreeSelectHOC.displayName = 'TreeSelect';

export default TreeSelectHOC;
