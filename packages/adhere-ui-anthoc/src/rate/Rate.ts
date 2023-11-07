import { Rate } from 'antd';
import type { RateProps } from 'antd';

import { createFactory } from '../util';

const RateHOC: typeof Rate & {
  defaultProps?: Partial<RateProps>;
} = createFactory<RateProps>(Rate, {});

export default RateHOC;
