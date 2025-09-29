import { SwipeAction } from 'antd-mobile';
import type { SwipeActionProps } from 'antd-mobile';
declare const SwipeActionHOC: typeof SwipeAction & {
    defaultProps?: Partial<SwipeActionProps>;
    override?: (props: Partial<SwipeActionProps>) => Partial<SwipeActionProps>;
};
export default SwipeActionHOC;
