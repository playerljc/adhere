import { Tree } from 'antd';
import type { TreeProps } from 'antd';

import { DisplayNameInternal } from '../types';
import { createFactory } from '../util';

const InternalTreeHOC: typeof Tree & {
  defaultProps?: Partial<TreeProps>;
} = createFactory<TreeProps>(Tree, {});

const TreeHOC = InternalTreeHOC as DisplayNameInternal<typeof InternalTreeHOC>;
TreeHOC.displayName = 'Tree';

export default TreeHOC;
