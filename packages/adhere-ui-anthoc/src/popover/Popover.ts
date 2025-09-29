import { Popover } from 'antd';
import type { PopoverProps } from 'antd';

import { createFactory } from '../util';

const PopoverHOC: typeof Popover & {
  defaultProps?: Partial<PopoverProps>;
  override?: (props: Partial<PopoverProps>) => Partial<PopoverProps>;
} = createFactory<PopoverProps>(Popover, {});

PopoverHOC.displayName = 'Popover';

export default PopoverHOC;
