import { Typography } from 'antd';
import type { TypographyProps } from 'antd';

import { createFactory } from '../util';

const TypographyHOC: typeof Typography & {
  defaultProps?: Partial<TypographyProps>;
} = createFactory<TypographyProps>(Typography, {});

export default TypographyHOC;
