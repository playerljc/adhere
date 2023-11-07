import { Popover } from 'antd';
import type { PopoverProps } from 'antd';

import { createFactory } from '../util';

const PopoverHOC: typeof Popover & {
  defaultProps?: Partial<PopoverProps>;
} = createFactory<PopoverProps>(Popover, {});
export default PopoverHOC;
