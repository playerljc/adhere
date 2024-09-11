import { Tree } from 'antd';
import type { TreeProps } from 'antd';

import { createFactory } from '../util';

const TreeHOC: typeof Tree & {
  defaultProps?: Partial<TreeProps>;
} = createFactory<TreeProps>(Tree, {});

// @ts-ignore
TreeHOC.displayName = 'Tree';

export default TreeHOC;
