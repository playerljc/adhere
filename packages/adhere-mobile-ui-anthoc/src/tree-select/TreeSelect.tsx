import Tree from '@baifendian/adhere-mobile-ui-tree';
import type { TreeSelectProps } from '@baifendian/adhere-mobile-ui-tree/es/types';

import type { TreeSelectHOCComponent } from '../types';
import { createFactory } from '../util';

/**
 * TreeSelectHOC
 */
const TreeSelectHOC: TreeSelectHOCComponent = createFactory<TreeSelectProps>(
  Tree.TreeSelect,
  {},
  (props) => ({
    ...props,
  }),
);

TreeSelectHOC.displayName = 'TreeSelect';

export default TreeSelectHOC;
