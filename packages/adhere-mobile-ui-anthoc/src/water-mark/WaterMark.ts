import { WaterMark } from 'antd-mobile';
import type { WaterMarkProps } from 'antd-mobile';

import { createFactory } from '../util';

const WaterMarkHOC: typeof WaterMark & {
  defaultProps?: Partial<WaterMarkProps>;
} = createFactory<WaterMarkProps>(WaterMark, {});

WaterMarkHOC.displayName = 'WaterMark';

export default WaterMarkHOC;
