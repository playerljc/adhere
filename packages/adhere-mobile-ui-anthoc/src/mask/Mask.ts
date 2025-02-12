import { Mask } from 'antd-mobile';
import type { MaskProps } from 'antd-mobile';

import { createFactory } from '../util';

const MaskHOC: typeof Mask & {
  defaultProps?: Partial<MaskProps>;
} = createFactory<MaskProps>(Mask, {});

MaskHOC.displayName = 'Mask';

export default MaskHOC;
