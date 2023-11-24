import { Badge } from 'antd';
import type { BadgeProps } from 'antd';

import { createFactory } from '../util';

const BadgeHoc: typeof Badge & {
  defaultProps?: Partial<BadgeProps>;
} = createFactory<BadgeProps>(Badge, {});

BadgeHoc.displayName = 'Badge';

export default BadgeHoc;
