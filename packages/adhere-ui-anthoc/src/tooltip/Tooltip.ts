import { Tooltip } from 'antd';
import type { TooltipProps } from 'antd';

import { createFactory } from '../util';

const TooltipHOC: typeof Tooltip & {
  defaultProps?: Partial<TooltipProps>;
} = createFactory<TooltipProps>(Tooltip, {});

export default TooltipHOC;
