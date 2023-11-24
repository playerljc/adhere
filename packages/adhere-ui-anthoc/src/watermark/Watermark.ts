import { Watermark } from 'antd';
import type { WatermarkProps } from 'antd';

import { createFactory } from '../util';

const WatermarkHOC: typeof Watermark & {
  defaultProps?: Partial<WatermarkProps>;
} = createFactory<WatermarkProps>(Watermark, {});

WatermarkHOC.displayName = 'Watermark';

export default WatermarkHOC;
