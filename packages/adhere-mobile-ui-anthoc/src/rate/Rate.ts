import { Rate } from 'antd-mobile';
import type { RateProps } from 'antd-mobile';

import { createFactory } from '../util';

const RateHOC: typeof Rate & {
  defaultProps?: Partial<RateProps>;
} = createFactory<RateProps>(Rate, {});

RateHOC.displayName = 'Rate';

export default RateHOC;
