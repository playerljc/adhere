import { Collapse } from 'antd';
import type { CollapseProps } from 'antd';

import { createFactory } from '../util';

const CollapseHOC: typeof Collapse & {
  defaultProps?: Partial<CollapseProps>;
} = createFactory<CollapseProps>(Collapse, {});

export default CollapseHOC;
