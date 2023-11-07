import { Badge } from 'antd';
import type { BadgeProps } from 'antd';

import { createFactory } from '../util';

const BadgeHoc: typeof Badge & {
  defaultProps?: Partial<BadgeProps>;
} = createFactory<BadgeProps>(Badge, {});

export default BadgeHoc;
