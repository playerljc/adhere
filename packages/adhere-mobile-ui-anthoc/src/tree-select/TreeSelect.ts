import { TreeSelect } from 'antd-mobile';
import type { TreeSelectProps } from 'antd-mobile';

import { createFactory } from '../util';

const TreeSelectHOC: typeof TreeSelect & {
  defaultProps?: Partial<TreeSelectProps>;
} = createFactory<TreeSelectProps>(TreeSelect, {});

TreeSelectHOC.displayName = 'TreeSelect';

export default TreeSelectHOC;
