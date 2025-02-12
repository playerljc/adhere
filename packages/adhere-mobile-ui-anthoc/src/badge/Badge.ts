import { Badge } from 'antd-mobile';
import type { BadgeProps } from 'antd-mobile';

import { createFactory } from '../util';

const BadgeHOC: typeof Badge & {
  defaultProps?: Partial<BadgeProps>;
} = createFactory<BadgeProps>(Badge, {});

BadgeHOC.displayName = 'Badge';

export default BadgeHOC;
