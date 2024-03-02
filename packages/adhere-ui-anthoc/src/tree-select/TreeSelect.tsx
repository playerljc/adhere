import { TreeSelect, TreeSelectProps } from 'antd';

import type { TreeSelectHOCComponent } from '../types';
import { createFactory } from '../util';

const TreeSelectHOC: TreeSelectHOCComponent = createFactory<TreeSelectProps>(
  TreeSelect,
  {
    showSearch: true,
    allowClear: true,
    treeNodeFilterProp: 'title',
    placement: 'bottomLeft',
  },
  (props) => ({
    ...props,
    // @ts-ignore
    value: props.realValue ?? props.value,
  }),
);

TreeSelectHOC.displayName = 'TreeSelect';

export default TreeSelectHOC;
