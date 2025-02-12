import { Tooltip } from 'antd';
import type { TooltipProps } from 'antd';
declare const TooltipHOC: typeof Tooltip & {
    defaultProps?: Partial<TooltipProps>;
};
export default TooltipHOC;
