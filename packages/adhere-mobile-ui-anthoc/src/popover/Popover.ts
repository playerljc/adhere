import { Popover } from 'antd-mobile';
import type { PopoverProps } from 'antd-mobile';

import { createFactory } from '../util';

const PopoverHOC: typeof Popover & {
  defaultProps?: Partial<PopoverProps>;
} = createFactory<PopoverProps>(Popover, {});

PopoverHOC.displayName = 'Popover';

export default PopoverHOC;
