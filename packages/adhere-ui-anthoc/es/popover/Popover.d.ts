import { Popover } from 'antd';
import type { PopoverProps } from 'antd';
declare const PopoverHOC: typeof Popover & {
    defaultProps?: Partial<PopoverProps>;
    override?: (props: Partial<PopoverProps>) => Partial<PopoverProps>;
};
export default PopoverHOC;
