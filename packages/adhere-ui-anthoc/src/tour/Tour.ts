import { Tour } from 'antd';
import type { TourProps } from 'antd';

import { createFactory } from '../util';

const TourHOC: typeof Tour & {
  defaultProps?: Partial<TourProps>;
  override?: (props: Partial<TourProps>) => Partial<TourProps>;
} = createFactory<TourProps>(Tour, {});

TourHOC.displayName = 'Tour';

export default TourHOC;
