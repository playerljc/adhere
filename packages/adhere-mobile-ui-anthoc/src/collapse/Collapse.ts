import { Collapse } from 'antd-mobile';
import type { CollapseProps } from 'antd-mobile';

import { createFactory } from '../util';

const CollapseHOC: typeof Collapse & {
  defaultProps?: Partial<CollapseProps>;
} = createFactory<CollapseProps>(Collapse, {});

CollapseHOC.displayName = 'Collapse';

export default CollapseHOC;
