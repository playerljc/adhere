import { Tooltip } from 'antd';
import type { TooltipProps } from 'antd';

import { createFactory } from '../util';

const TooltipHOC: typeof Tooltip & {
  defaultProps?: Partial<TooltipProps>;
} = createFactory<TooltipProps>(Tooltip, {});

TooltipHOC.displayName = 'Tooltip';

export default TooltipHOC;
